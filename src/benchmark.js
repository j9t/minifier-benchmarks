#!/usr/bin/env node

import { execFileSync, fork } from 'child_process';
import { createReadStream, createWriteStream, rmSync } from 'fs';
import fs from 'fs/promises';
import https from 'https';
import os from 'os';
import path from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { styleText } from 'node:util';
import zlib from 'zlib';
import lzma from 'lzma';
import Progress from 'progress';
import Table from 'cli-table3';
import { formatDelta, formatTime, getRunOrder, getSizeStats, getTimeStats, isUnsteady, median, toKb, waitForLoad } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirRoot = path.join(__dirname, '..');

// Parse `--mode` argument (`html` or `max`, default: `max`)
const modeArg = process.argv.find(arg => arg.startsWith('--mode='));
const MODE = modeArg ? modeArg.split('=')[1] : 'max';
if (!['html', 'max'].includes(MODE)) {
  console.error(`Invalid mode: ${MODE}. Use --mode=html or --mode=max`);
  process.exit(1);
}
const IS_HTML_ONLY = MODE === 'html';

// Reuse cached input if less than 60 minutes old
const CACHE_MAX_AGE_MS = 60 * 60 * 1000;

const dirInput = path.join(dirRoot, 'input');
// Output directory based on mode
const dirOutput = path.join(dirRoot, 'output', MODE);

// Ensure required directories exist for fresh runs
await fs.mkdir(dirOutput, { recursive: true });
await fs.mkdir(dirInput, { recursive: true });

const user_agent = 'html-minifier-next-benchmarks/0.0';
const urls = JSON.parse(await fs.readFile(path.join(dirRoot, 'sites.json'), 'utf8'));
const fileNames = Object.keys(urls);
const minifierConfig = JSON.parse(await fs.readFile(path.join(dirRoot, 'html-minifier-next.config.json'), 'utf8'));
const benchmarkErrors = [];

// Verbose logging flag (run via `VERBOSE=true npm run benchmarks`)
const VERBOSE = process.env.VERBOSE === 'true';
function log(message) {
  if (VERBOSE) {
    console.error(`[DEBUG] ${message}`);
  }
}

// Ordered list of minifier keys (also the order of table columns)
const minifierNames = ['swchtml', 'minifier', 'compressor', 'htmlnano', 'minifyhtml', 'minimize'];

const minifierLabels = {
  swchtml: '@swc/html',
  minifier: 'HTML Minifier Next',
  compressor: 'htmlcompressor.com',
  htmlnano: 'htmlnano',
  minifyhtml: 'minify-html',
  minimize: 'Minimize'
};

// Remote minifiers’ times are estimates (see `testHTMLCompressor`), so they don’t compete for the fastest time
const remoteMinifierNames = new Set(['compressor']);

// Local minifiers run in their own processes (see `worker.js`)
const localMinifierNames = minifierNames.filter(name => !remoteMinifierNames.has(name));

// Per site: site URL as well as paths, sizes, and times of the input and outputs
const sites = {};

// One step per site for preparation, warm-up, each minifier, and completion
const stepsPerSite = minifierNames.length + 3;
const progress = new Progress(`:current/:total (${fileNames.length}×${stepsPerSite}) [:bar] :percent :etas :fileName`, {
  width: 40,
  total: fileNames.length * stepsPerSite,
  complete: '=',
  incomplete: '-',
  clear: !VERBOSE,
  stream: process.stderr
});

// Concurrency for downloading inputs and compressing outputs (doesn’t affect minifier timings)
const CONCURRENCY = 4;

// Untimed warm-up runs (as JavaScript-based minifiers need a few to reach steady speed)
// and timed runs per site and local minifier; the median of the timed runs counts
const WARMUP_RUNS = 3;
const RUNS_PER_SITE = 5;

// Conditions for fair timings: The 1-minute load average must be at most half the CPU cores
// (waiting up to 3 minutes for it to drop), and sites with unsteady timings get re-measured
// up to twice; otherwise, the benchmark aborts
const LOAD_MAX = os.availableParallelism() / 2;
const LOAD_WAIT_MAX_MS = 3 * 60 * 1000;
const LOAD_POLL_MS = 5 * 1000;
const RETRIES_MAX = 2;

// Thrown when conditions don’t allow fair timings
class AbortError extends Error {}

const table = new Table({
  head: ['File', 'Before', ...minifierNames.map(name => minifierLabels[name]), 'Savings', 'Time'],
  colWidths: [fileNames.reduce(function (length, fileName) {
    return Math.max(length, fileName.length);
  }, 0) + 2, 25, 25, 25, 25, 25, 25, 25, 25, 20]
});

// In the report array, columns 0 and 1 are site name and original size;
// minifier results start at this offset (must match `minifierNames` order)
const MINIFIER_COL_OFFSET = 2;

function redSize(size) {
  return styleText(['red', 'bold'], String(size)) + styleText(['white'], ' (' + toKb(size, 2) + ' KB)');
}

function greenSize(size) {
  // Only accept valid positive numbers
  if (typeof size === 'number' && size > 0) {
    return styleText(['green', 'bold'], String(size)) + styleText(['white'], ' (' + toKb(size, 2) + ' KB)');
  }
  return styleText(['white'], 'n/a');
}

function blueSavings(oldSize, newSize) {
  // Only calculate savings when both inputs are valid positive numbers
  if (typeof oldSize === 'number' && oldSize > 0 && typeof newSize === 'number' && newSize > 0) {
    const savingsPercent = (1 - newSize / oldSize) * 100;
    const savings = oldSize - newSize;
    return styleText(['cyan', 'bold'], savingsPercent.toFixed(2)) + styleText(['white'], '% (' + toKb(savings, 2) + ' KB)');
  }
  return styleText(['white'], 'n/a');
}

function blueTime(time) {
  // Only accept valid non-negative numbers
  if (typeof time === 'number' && !isNaN(time) && time >= 0) {
    return styleText(['cyan', 'bold'], String(time)) + styleText(['white'], ' ms');
  }
  return styleText(['white'], 'n/a');
}

async function readBuffer(filePath) {
  return await fs.readFile(filePath);
}

async function readText(filePath) {
  return await fs.readFile(filePath, 'utf8');
}

async function writeBuffer(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, data);
}

async function writeText(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, data, 'utf8');
}

async function readSize(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size;
}

async function gzipFile(inPath, outPath) {
  await pipeline(
    createReadStream(inPath),
    zlib.createGzip({ level: zlib.constants.Z_BEST_COMPRESSION }),
    createWriteStream(outPath)
  );
}

async function brotliFile(inPath, outPath) {
  await pipeline(
    createReadStream(inPath),
    zlib.createBrotliCompress(),
    createWriteStream(outPath)
  );
}

function promiseLzma(data) {
  return new Promise((resolve, reject) => {
    lzma.compress(data, 1, function (result, error) {
      if (error) reject(error);
      else resolve(Buffer.from(result));
    });
  });
}

const rows = {};
const successCounts = {
  swchtml: 0,
  minifier: 0,
  compressor: 0,
  htmlnano: 0,
  minifyhtml: 0,
  minimize: 0
};

function generateMarkdownTable() {
  const headers = [
    'Site',
    'Original Size (KB)',
    '[@swc/html](https://github.com/swc-project/swc)',
    '[HTML Minifier Next](https://github.com/j9t/html-minifier-next)',
    '[html­com­pressor.­com](https://htmlcompressor.com/)',
    '[htmlnano](https://github.com/maltsev/htmlnano)',
    '[minify-html](https://github.com/wilsonzlin/minify-html)',
    '[minimize](https://github.com/Swaagie/minimize)'
  ];

  fileNames.forEach(function (fileName) {
    // Add a check for `rows[fileName]`
    if (!rows[fileName] || !rows[fileName].report) {
      benchmarkErrors.push(`Skipped ${fileName}: Row or report is missing`);
      return;
    }

    const rawSizes = rows[fileName].rawSizes;

    // Find the best (smallest) size among all minifiers using raw bytes
    // `rawSizes[0]` corresponds to report index 2 (@swc/html)
    const minifierResults = [];
    for (let i = 0; i < rawSizes.length; i++) {
      if (rawSizes[i] > 0) {
        minifierResults.push({ index: i + MINIFIER_COL_OFFSET, value: rawSizes[i] });
      }
    }

    if (minifierResults.length > 0) {
      // Find and store indices of cells with minimum raw byte value
      const minValue = Math.min(...minifierResults.map(r => r.value));
      rows[fileName].boldIndices = new Set(
        minifierResults.filter(r => r.value === minValue).map(r => r.index)
      );
    }
  });

  let content = '';

  function output(row) {
    content += '| ' + row.join(' | ') + ' |\n';
  }

  output(headers);
  content += '| ' + headers.map(() => '---').join(' | ') + ' |\n';

  fileNames.forEach(function (fileName) {
    if (!rows[fileName] || !rows[fileName].report) return; // Prevent outputting rows with missing data
    const row = rows[fileName].report;
    const boldIndices = rows[fileName].boldIndices;
    const originalSize = rows[fileName].originalSize;
    const rawSizes = rows[fileName].rawSizes;

    // Apply formatting: Delta percentages and highlighting for best results
    const formattedRow = row.map((cell, i) => {
      if (i < 2) return cell; // Site name and original size columns
      if (cell === 'n/a' || cell === '<1') return cell;

      const rawSize = rawSizes ? rawSizes[i - MINIFIER_COL_OFFSET] : 0;
      const deltaStr = formatDelta(rawSize, originalSize);

      if (boldIndices?.has(i)) {
        // Best result: Bold and italics for improved visibility
        return '***' + cell + deltaStr + '***';
      }
      return cell + deltaStr;
    });
    output(formattedRow);
  });

  // Count only sites that were actually processed (not skipped due to download failure)
  const processedSites = fileNames.filter(name => rows[name] && rows[name].report).length;

  // Add sites succeeded row
  const sitesRow = ['**Sites processed (of sites overall)**', ''];
  minifierNames.forEach(function (name) {
    const successCount = successCounts[name];
    sitesRow.push(successCount + '/' + processedSites);
  });
  output(sitesRow);

  // Add average and median processing time rows (fastest in bold and italics)
  const timeStats = getTimeStats({ rows, fileNames, minifierNames, remoteMinifierNames });
  [['mean', 'isFastestMean', '**Average processing time**'], ['median', 'isFastestMedian', '**Median processing time**']].forEach(function ([key, fastestKey, label]) {
    const timeRow = [label, ''];
    minifierNames.forEach(function (name) {
      const stats = timeStats[name];
      if (!stats) {
        timeRow.push('n/a');
      } else if (!stats.isReliable) {
        timeRow.push('n/a<br>(network noise)');
      } else if (remoteMinifierNames.has(name)) {
        timeRow.push(formatTime(stats[key]) + '<br>(estimate)');
      } else if (stats[fastestKey]) {
        timeRow.push('***' + formatTime(stats[key]) + '***');
      } else {
        timeRow.push(formatTime(stats[key]));
      }
    });
    output(timeRow);
  });

  // Add average result row
  // Compute average original size across all processed sites
  let totalOrigBytes = 0;
  let origCount = 0;
  fileNames.forEach(function (fileName) {
    if (!rows[fileName] || !rows[fileName].originalSize) return;
    totalOrigBytes += rows[fileName].originalSize;
    origCount++;
  });
  const avgOrigKB = origCount > 0 ? Math.round(totalOrigBytes / origCount / 1024) : '';
  const savingsRow = ['**Average result (KB)**', String(avgOrigKB)];
  const { avgSizes, bestTotalBytes } = getSizeStats({ rows, fileNames, minifierNames });

  minifierNames.forEach(function (name) {
    if (avgSizes[name]) {
      const { avgKB, totalMinifierBytes, totalOriginalBytes } = avgSizes[name];
      const deltaStr = formatDelta(totalMinifierBytes, totalOriginalBytes);
      const display = avgKB + deltaStr;
      if (bestTotalBytes !== null && totalMinifierBytes === bestTotalBytes) {
        savingsRow.push('***' + display + '***');
      } else {
        savingsRow.push(display);
      }
    } else {
      savingsRow.push('n/a');
    }
  });
  output(savingsRow);

  return content;
}

function displayTable() {
  fileNames.forEach(function (fileName) {
    if (rows[fileName]) { // Ensure the `fileName` exists in rows
      table.push(rows[fileName].display);
    } else {
      benchmarkErrors.push(`No data available for ${fileName}`);
    }
  });

  // Add average and median processing time rows
  const timeStats = getTimeStats({ rows, fileNames, minifierNames, remoteMinifierNames });

  // Count only sites that were actually processed (not skipped due to download failure)
  const processedSites = fileNames.filter(name => rows[name]).length;

  [['mean', 'Average processing time'], ['median', 'Median processing time']].forEach(function ([key, label]) {
    const timeRow = [label, ''];
    minifierNames.forEach(function (name) {
      const stats = timeStats[name];
      const counts = styleText(['white'], ' (' + successCounts[name] + '/' + processedSites + ')');
      // Same rules as in the Markdown table (see `generateMarkdownTable`)
      if (!stats) {
        timeRow.push(styleText(['white'], 'n/a'));
      } else if (!stats.isReliable) {
        timeRow.push(styleText(['white'], 'n/a (noise)') + counts);
      } else if (remoteMinifierNames.has(name)) {
        timeRow.push(blueTime(Math.round(stats[key])) + styleText(['white'], ' est.') + counts);
      } else {
        timeRow.push(blueTime(Math.round(stats[key])) + counts);
      }
    });
    timeRow.push('', '');
    table.push(timeRow);
  });

  console.log();
  console.log(table.toString());
}

// Runs `task` for each item, up to `CONCURRENCY` at a time
async function runConcurrently(items, task) {
  const queue = [...items];
  async function next() {
    while (queue.length > 0) {
      const item = queue.shift();
      try {
        await task(item);
      } catch (err) {
        benchmarkErrors.push(`Unhandled error processing ${item}: ${err?.message || err}`);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, queue.length) }, next));
}

function getInputPath(fileName) {
  return path.join(dirInput, fileName + '.html');
}

// Paths of a file and its compressed versions, which are named after `baseName`
function createInfo(filePath, baseName) {
  return {
    filePath: filePath,
    gzFilePath: path.join(dirOutput, baseName + '.gz'),
    lzFilePath: path.join(dirOutput, baseName + '.lz'),
    brFilePath: path.join(dirOutput, baseName + '.br')
  };
}

function resetSizes(info) {
  info.size = 0;
  info.gzSize = 0;
  info.lzSize = 0;
  info.brSize = 0;
  info.time = null;
  info.hasOutput = false;
  // Remove a previous run’s output, which would otherwise pass for this run’s
  for (const filePath of [info.filePath, info.gzFilePath, info.lzFilePath, info.brFilePath]) {
    rmSync(filePath, { force: true });
  }
}

function failMinifier(name, fileName, message) {
  benchmarkErrors.push(`${minifierLabels[name]} failed for ${fileName}: ${message}`);
  resetSizes(sites[fileName].infos[name]);
}

async function readSizes(info) {
  info.compressStartTime = Date.now();

  // Apply Gzip on minified output
  await gzipFile(info.filePath, info.gzFilePath);
  info.gzTime = Date.now();
  info.gzSize = await readSize(info.gzFilePath);

  // Apply LZMA on minified output
  const data = await readBuffer(info.filePath);
  const lzmaResult = await promiseLzma(data);
  await writeBuffer(info.lzFilePath, lzmaResult);
  info.lzTime = Date.now();
  info.lzSize = await readSize(info.lzFilePath);

  // Apply Brotli on minified output
  await brotliFile(info.filePath, info.brFilePath);
  info.brTime = Date.now();
  info.brSize = await readSize(info.brFilePath);

  // Read the size of the minified output
  info.size = await readSize(info.filePath);
}

async function download(site, filePath, redirectCount = 0) {
  const MAX_REDIRECTS = 10;
  if (redirectCount >= MAX_REDIRECTS) {
    benchmarkErrors.push(`Too many redirects for ${site}`);
    return null;
  }

  const url = new URL(site);

  return new Promise((resolve) => {
    let resolved = false;

    function safeResolve(value) {
      if (!resolved) {
        resolved = true;
        resolve(value);
      }
    }

    const request = https.get({
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: {
        'Accept-Encoding': 'gzip, br, deflate',
        'User-Agent': user_agent
      }
    }, function (res) {
      const status = res.statusCode;

      if (status === 200) {
        let stream = res;
        let decompressionStream = null;

        // Handle compression
        if (res.headers['content-encoding'] === 'gzip') {
          decompressionStream = zlib.createGunzip();
          stream = res.pipe(decompressionStream);
        } else if (res.headers['content-encoding'] === 'br') {
          decompressionStream = zlib.createBrotliDecompress();
          stream = res.pipe(decompressionStream);
        } else if (res.headers['content-encoding'] === 'deflate') {
          decompressionStream = zlib.createInflate();
          stream = res.pipe(decompressionStream);
        }

        if (decompressionStream) {
          decompressionStream.on('error', function (err) {
            benchmarkErrors.push(`Decompression error for ${site}: ${err.message}`);
            safeResolve(null);
          });
        }

        const writeStream = createWriteStream(filePath);

        // Handle all possible stream errors
        res.on('error', function (err) {
          benchmarkErrors.push(`Response stream error for ${site}: ${err.message}`);
          safeResolve(null);
        });

        writeStream.on('error', function (err) {
          benchmarkErrors.push(`Write stream error for ${site}: ${err.message}`);
          safeResolve(null);
        });

        writeStream.on('finish', function () {
          safeResolve(String(site));
        });

        writeStream.on('close', function () {
          // Ensure cleanup if stream closes without finishing
          if (!resolved) {
            safeResolve(null);
          }
        });

        stream.pipe(writeStream);

      } else if (status >= 300 && status < 400 && res.headers.location) {
        res.resume(); // Consume response to free memory
        download(new URL(res.headers.location, site), filePath, redirectCount + 1).then(safeResolve);
      } else {
        benchmarkErrors.push(`HTTP error ${status} for ${site}`);
        res.resume(); // Consume response to free memory
        safeResolve(null);
      }
    });

    // Set request timeout (30 seconds)
    request.setTimeout(30000, function() {
      benchmarkErrors.push(`Request timeout for ${site}`);
      request.destroy();
      safeResolve(null);
    });

    request.on('error', function (err) {
      benchmarkErrors.push(`Failed to fetch ${site}: ${err.message}`);
      safeResolve(null);
    });
  });
}

// Step 1: Reuse or download the input and remove previous outputs
async function prepareFile(fileName) {
  const filePath = getInputPath(fileName);
  log(`Starting ${fileName}`);

  // Reuse cached input if less than 60 minutes old and valid
  let site = urls[fileName];
  let cached = false;
  try {
    const stats = await fs.stat(filePath);
    if (stats.size > 0 && (Date.now() - stats.mtimeMs) < CACHE_MAX_AGE_MS) {
      const content = await readText(filePath);
      if (content.includes('<!') || content.includes('</')) {
        cached = true;
        log(`${fileName}: Using cached input (${Math.round((Date.now() - stats.mtimeMs) / 1000)}s old)`);
      }
    }
  } catch {
    // File doesn’t exist or can’t be read, download it
  }

  if (!cached) {
    log(`Downloading ${fileName}…`);
    site = await download(urls[fileName], filePath);
    if (!site) {
      // Remove any partially written file
      try { await fs.unlink(filePath); } catch { /* ignore */ }
      benchmarkErrors.push(`Skipped ${fileName} due to download failure`);
      rows[fileName] = null; // Explicitly mark as skipped
      progress.tick(stepsPerSite, { fileName: `Skipped ${fileName}` });
      return;
    }
  }

  const infos = {};
  minifierNames.forEach(function (name) {
    const baseName = fileName + '.' + name + '.html';
    infos[name] = createInfo(path.join(dirOutput, baseName), baseName);
    resetSizes(infos[name]);
  });
  sites[fileName] = {
    site: site,
    original: createInfo(filePath, fileName + '.html'),
    infos: infos
  };
  progress.tick({ fileName: `Prepared ${fileName}` });
}

// Starts a persistent process for a local minifier (see `worker.js`), whose requests resolve
// to the worker’s response (or `{ error }`, also once the process is gone)
function startWorker(name) {
  const child = fork(path.join(__dirname, 'worker.js'), { stdio: ['ignore', 'inherit', 'inherit', 'ipc'] });
  const pending = new Map();
  let nextId = 0;
  let stopReason = null;

  function stop(reason) {
    if (stopReason) return;
    stopReason = reason;
    for (const resolve of pending.values()) resolve({ error: `No result (${reason})` });
    pending.clear();
  }

  child.on('message', function ({ id, ...response }) {
    const resolve = pending.get(id);
    pending.delete(id);
    resolve?.(response);
  });
  child.on('error', err => stop(err.message));
  child.on('exit', code => stop(`${minifierLabels[name]} process exited with code ${code}`));

  return {
    request(type, message = {}) {
      if (stopReason) return Promise.resolve({ error: `No result (${stopReason})` });
      const id = nextId++;
      return new Promise(function (resolve) {
        pending.set(id, resolve);
        child.send({ id, type, ...message }, function (err) {
          if (err && pending.delete(id)) resolve({ error: err.message });
        });
      });
    },
    close() {
      stop('closed');
      child.disconnect();
    }
  };
}

// Times all local minifiers on a site, one request at a time; runs are interleaved
// (in rotating order), so that system load affects all minifiers alike
async function timeFile(fileName, siteIndex, workers) {
  const { site } = sites[fileName];
  const times = {};
  const errors = {};

  for (const name of getRunOrder(Object.keys(workers), siteIndex)) {
    let response = await workers[name].request('load', { fileName, site });
    for (let run = 0; run < WARMUP_RUNS && !response.error; run++) {
      response = await workers[name].request('warmup');
    }
    if (response.error) {
      errors[name] = response.error;
    } else {
      times[name] = [];
    }
  }

  for (let run = 0; run < RUNS_PER_SITE; run++) {
    for (const name of getRunOrder(Object.keys(times), siteIndex + run)) {
      const response = await workers[name].request('run');
      if (response.error) {
        errors[name] = response.error;
        delete times[name];
      } else {
        times[name].push(response.time);
      }
    }
  }

  return { times, errors };
}

// Prints a message above the progress bar (or plainly, if output isn’t a terminal)
function notify(message) {
  if (process.stderr.isTTY) {
    progress.interrupt(message);
  } else {
    console.error(message);
  }
}

async function ensureLowLoad() {
  const isLow = await waitForLoad({
    getLoad: () => os.loadavg()[0],
    loadMax: LOAD_MAX,
    waitMaxMs: LOAD_WAIT_MAX_MS,
    pollMs: LOAD_POLL_MS,
    onWait: load => notify(`System load ${load.toFixed(1)} above ${LOAD_MAX}; waiting up to ${LOAD_WAIT_MAX_MS / 60000} minutes for it to drop`)
  });
  if (!isLow) {
    throw new AbortError(`System load stayed above ${LOAD_MAX} (1-minute average: ${os.loadavg()[0].toFixed(1)}) for ${LOAD_WAIT_MAX_MS / 60000} minutes`);
  }
}

// Step 2: Run each local minifier once on all sites (untimed), so that the first sites aren’t
// timed while JavaScript-based minifiers are still warming up
async function warmUpFile(fileName, siteIndex, workers) {
  const { site } = sites[fileName];
  for (const name of getRunOrder(Object.keys(workers), siteIndex)) {
    // Errors recur and get reported when timing
    const response = await workers[name].request('load', { fileName, site });
    if (!response.error) await workers[name].request('warmup');
  }
  progress.tick({ fileName: `Warmed up ${fileName}` });
}

// Step 3: Time a site once system load is low, re-measuring unsteady timings (and aborting if
// they stay unsteady), then write the outputs
async function measureFile(fileName, siteIndex, workers) {
  const { infos } = sites[fileName];
  let result;

  for (let attempt = 0; ; attempt++) {
    await ensureLowLoad();
    result = await timeFile(fileName, siteIndex, workers);
    const namesUnsteady = Object.keys(result.times).filter(name => isUnsteady(result.times[name]));
    if (namesUnsteady.length === 0) break;
    const details = namesUnsteady.map(name => `${minifierLabels[name]}: ${result.times[name].map(time => time.toFixed(1)).join(', ')} ms`).join('; ');
    if (attempt >= RETRIES_MAX) {
      throw new AbortError(`Timings for ${fileName} stayed unsteady after ${RETRIES_MAX} re-measurements (${details})`);
    }
    notify(`Unsteady timings for ${fileName} (${details}); re-measuring (${attempt + 1}/${RETRIES_MAX})`);
  }

  for (const [name, error] of Object.entries(result.errors)) {
    failMinifier(name, fileName, error);
  }
  for (const [name, times] of Object.entries(result.times)) {
    const response = await workers[name].request('write');
    if (response.error) {
      failMinifier(name, fileName, response.error);
      continue;
    }
    infos[name].hasOutput = true;
    infos[name].time = median(times);
  }

  progress.tick(localMinifierNames.length, { fileName: `Timed ${fileName}` });
}

// Sends `code` to htmlcompressor.com and resolves to the response time and content (or `{ error }`)
function requestHTMLCompressor(code, params) {
  const url = new URL('https://htmlcompressor.com/compress');
  const options = {
    method: 'POST',
    headers: {
      'Accept-Encoding': 'gzip',
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': user_agent
    }
  };
  const startTime = performance.now();

  return new Promise((resolve) => {
    // Guards against resolving twice (e.g., a rejection followed by a timeout)
    let isSettled = false;

    function settle(result) {
      if (isSettled) return;
      isSettled = true;
      resolve(result);
    }

    const request = https.request(url, options, function (res) {
      // Check HTTP status code
      if (res.statusCode < 200 || res.statusCode >= 300) {
        settle({ error: `HTTP ${res.statusCode}` });
        res.resume();
        request.destroy();
        return;
      }

      // Validate content type for better response parsing
      const contentType = res.headers['content-type'] || '';
      const isJson = contentType.includes('application/json');

      let stream = res;
      if (res.headers['content-encoding'] === 'gzip') {
        stream = stream.pipe(zlib.createGunzip());
      } else if (res.headers['content-encoding'] === 'br') {
        stream = stream.pipe(zlib.createBrotliDecompress());
      } else if (res.headers['content-encoding'] === 'deflate') {
        stream = stream.pipe(zlib.createInflate());
      }
      // Response and decompression errors (which `pipe` doesn’t forward) fail the request
      res.on('error', err => settle({ error: err.message }));
      stream.on('error', err => settle({ error: err.message }));
      stream.setEncoding('utf8');
      let response = '';
      stream.on('data', function (chunk) {
        response += chunk;
      }).on('end', function () {
        const time = performance.now() - startTime;
        let content = '';

        // Parse response based on content-type
        if (isJson) {
          // Try to parse as JSON first (old API format)
          try {
            const jsonResponse = JSON.parse(response);
            if (jsonResponse.success && jsonResponse.result) {
              content = jsonResponse.result;
            }
          } catch (err) {
            console.warn('Failed to parse JSON response from htmlcompressor.com');
          }
        } else if (response.includes('<')) {
          // Treat as direct text response (new API format)
          content = response;
        }

        settle(content ? { time, content } : { error: 'Service refused to process content or returned an error' });
      });
    });

    // Set request timeout (15 seconds)
    request.setTimeout(15000, function() {
      settle({ error: 'Timed out' });
      request.destroy();
    });

    request.on('error', (err) => {
      settle({ error: err.message });
    }).end(new URLSearchParams({ ...params, code }).toString());
  });
}

// Step 4: htmlcompressor.com, https://htmlcompressor.com/api/#:~:text=HTMLCompressor%20API%20reference
// Processing time is estimated as the difference to a baseline request with the same content and
// minification off (which still removes comments); network jitter only allows averages over many sites
async function testHTMLCompressor(fileName, siteIndex) {
  const data = await readText(getInputPath(fileName));
  const info = sites[fileName].infos.compressor;
  const params = {
    code_type: 'html',
    html_level: 3,
    html_single_line: 1,
    html_strip_quotes: 1,
    minimize_style: IS_HTML_ONLY ? 0 : 1,
    minimize_events: IS_HTML_ONLY ? 0 : 1,
    minimize_js_href: IS_HTML_ONLY ? 0 : 1,
    minimize_css: IS_HTML_ONLY ? 0 : 1,
    minimize_js: IS_HTML_ONLY ? 0 : 1,
    html_optional_cdata: 1,
    js_engine: 'yui',
    js_fallback: 1
  };
  const paramsBaseline = {
    code_type: 'html',
    html_level: 0,
    minimize_style: 0,
    minimize_events: 0,
    minimize_js_href: 0,
    minimize_css: 0,
    minimize_js: 0
  };

  const isBaselineFirst = siteIndex % 2 === 0;
  const first = await requestHTMLCompressor(data, isBaselineFirst ? paramsBaseline : params);
  const second = await requestHTMLCompressor(data, isBaselineFirst ? params : paramsBaseline);
  const [baseline, result] = isBaselineFirst ? [first, second] : [second, first];

  // Compare byte lengths instead of string lengths for accuracy
  if (result.error || Buffer.byteLength(result.content, 'utf8') > Buffer.byteLength(data, 'utf8')) {
    failMinifier('compressor', fileName, result.error || 'Output larger than input');
  } else {
    try {
      await writeText(info.filePath, result.content);
      info.hasOutput = true;
      if (baseline.error) {
        benchmarkErrors.push(`${minifierLabels.compressor} baseline request failed for ${fileName} (no time estimate): ${baseline.error}`);
      } else {
        info.time = result.time - baseline.time;
      }
    } catch (err) {
      failMinifier('compressor', fileName, err.message);
    }
  }

  progress.tick({ fileName: `${minifierLabels.compressor}: ${fileName}` });
}

// Step 5: Compress outputs and collect results
async function finishFile(fileName) {
  const { original, infos } = sites[fileName];

  await readSizes(original);
  for (const name of minifierNames) {
    const info = infos[name];
    if (!info.hasOutput) continue;
    try {
      await readSizes(info);
    } catch (err) {
      failMinifier(name, fileName, `Failed to compress output: ${err.message}`);
    }
  }

  const display = [
    [fileName, '+ gzip', '+ lzma', '+ brotli'].join('\n'),
    [redSize(original.size), redSize(original.gzSize), redSize(original.lzSize), redSize(original.brSize)].join('\n')
  ];
  const report = [
    '[' + fileName + '](' + urls[fileName] + ')',
    toKb(original.size)
  ];
  const rawSizes = [];
  for (const name of minifierNames) {
    const info = infos[name];
    display.push([greenSize(info.size), greenSize(info.gzSize), greenSize(info.lzSize), greenSize(info.brSize)].join('\n'));
    rawSizes.push(info.size || 0);
    // Use raw bytes to determine display logic
    if (info.size == null || info.size === undefined) {
      report.push('n/a');
    } else if (info.size === 0) {
      report.push('n/a'); // 0 bytes = failed/no output
    } else if (info.size < 1024) {
      report.push('<1'); // Sub-1KB files
    } else {
      report.push(toKb(info.size)); // 1KB+ files
    }
  }
  display.push(
    [
      blueSavings(original.size, infos.minifier.size),
      blueSavings(original.gzSize, infos.minifier.gzSize),
      blueSavings(original.lzSize, infos.minifier.lzSize),
      blueSavings(original.brSize, infos.minifier.brSize)
    ].join('\n'),
    [
      blueTime(infos.minifier.time != null ? Math.round(infos.minifier.time) : null),
      blueTime(infos.minifier.gzTime - infos.minifier.compressStartTime),
      blueTime(infos.minifier.lzTime - infos.minifier.gzTime),
      blueTime(infos.minifier.brTime - infos.minifier.lzTime)
    ].join('\n')
  );

  // Record per-site times (which can be missing for remote minifiers) and count successes
  const times = {};
  for (const name of minifierNames) {
    const info = infos[name];
    times[name] = info.size > 0 ? info.time : null;
    if (info.size > 0) successCounts[name]++;
  }

  rows[fileName] = {
    display: display,
    report: report,
    originalSize: original.size,
    rawSizes: rawSizes,
    times: times
  };

  progress.tick({ fileName: `Completed ${fileName}` });
}

// Log mode and concurrency settings
const modeLabel = IS_HTML_ONLY ? 'HTML' : 'max';
console.error(`\nRunning benchmarks in ${modeLabel} mode (${IS_HTML_ONLY ? 'HTML-only' : 'HTML, CSS, JS, and other available options'})`);
log(`Concurrency for downloads and compression: ${CONCURRENCY}`);

await runConcurrently(fileNames, prepareFile);

const fileNamesReady = fileNames.filter(fileName => sites[fileName]);

const workers = {};
for (const name of localMinifierNames) {
  const worker = startWorker(name);
  const response = await worker.request('init', { name, isHtmlOnly: IS_HTML_ONLY, minifierConfig, dirInput, dirOutput });
  if (response.error) {
    benchmarkErrors.push(`${minifierLabels[name]} failed to start: ${response.error}`);
    worker.close();
  } else {
    workers[name] = worker;
  }
}
for (const [siteIndex, fileName] of fileNamesReady.entries()) {
  await warmUpFile(fileName, siteIndex, workers);
}
try {
  for (const [siteIndex, fileName] of fileNamesReady.entries()) {
    await measureFile(fileName, siteIndex, workers);
  }
} catch (err) {
  if (!(err instanceof AbortError)) throw err;
  Object.values(workers).forEach(worker => worker.close());
  progress.terminate();
  console.error(styleText(['red'], `\nBenchmark aborted: ${err.message}`));
  console.error('README.md was not updated; re-run once the system is idle');
  process.exit(1);
}
Object.values(workers).forEach(worker => worker.close());

log(`Running ${minifierLabels.compressor}`);
for (const [siteIndex, fileName] of fileNamesReady.entries()) {
  await testHTMLCompressor(fileName, siteIndex);
}

await runConcurrently(fileNamesReady, finishFile);

displayTable();

// Display issues that occurred during benchmarking
if (benchmarkErrors.length > 0) {
  console.log();
  console.log('Benchmark warnings and errors:');
  benchmarkErrors.forEach(error => {
    console.log(styleText(['red'], `• ${error}`));
  });
  console.log();
}

const content = generateMarkdownTable();

// Generate date stamp in format “MMM D, YYYY”
const now = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dateStamp = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

const readme = path.join(dirRoot, 'README.md');
let data = await readText(readme);

// Update date stamp (used by HTML mode via regex, by max mode via content insertion)
const dateLinePattern = /Benchmarks last updated: .+/;
// Environment, as JavaScript-based minifiers’ times depend on the Node.js version
function getSystemName() {
  if (process.platform !== 'darwin') return `${os.type()} ${os.release()}`;
  try {
    return 'macOS ' + execFileSync('sw_vers', ['-productVersion'], { encoding: 'utf8' }).trim();
  } catch {
    return `macOS (Darwin ${os.release()})`;
  }
}
const environment = `Node.js ${process.versions.node}, ${getSystemName()}, ${os.cpus()[0]?.model ?? 'unknown CPU'}`;
const dateLine = `Benchmarks last updated: ${dateStamp} (${environment})`;
if (dateLinePattern.test(data)) {
  data = data.replace(dateLinePattern, dateLine);
} else if (IS_HTML_ONLY) {
  // Fallback: Insert before-end marker if date line is missing
  const endMarker = '<!-- End auto-generated -->';
  const markerPos = data.indexOf(endMarker);
  if (markerPos !== -1) {
    data = data.slice(0, markerPos) + dateLine + '\n' + data.slice(markerPos);
  }
}

// Target different sections based on mode
const sectionHeader = IS_HTML_ONLY
  ? '## 1. HTML Minification Compared'
  : '## 2. Maximum Minification Compared';

let start = data.indexOf(sectionHeader);
if (start === -1) {
  console.error(`Section “${sectionHeader}” not found in README.md`);
  process.exit(1);
}

// Use specific table header for more stable anchor
const tableHeader = '| Site | Original Size (KB) |';
let headerPos = data.indexOf(tableHeader, start);
if (headerPos !== -1) {
  start = headerPos;
} else {
  // Fallback to first pipe for backward compatibility
  start = data.indexOf('|', start);
}

// Find next section or end of file
let end = data.indexOf('\n##', start);
if (end !== -1) {
  end = end + 1; // Point to `##`, not the preceding newline
} else {
  end = data.length;
}

// Replace table content, normalize newlines to avoid double blank lines.
// In HTML mode, the date line is outside the replaced range and updated via the
// `dateLinePattern` regex above. In max mode, the date falls inside the replaced
// range (between the table and `## Notes`), so the regex is a no-op and the
// separator below provides the authoritative date insertion.
const trimmedContent = content.trimEnd();
const separator = IS_HTML_ONLY
  ? '\n\n'
  : '\n\n' + dateLine + '\n<!-- End auto-generated -->\n\n';
const newData = data.slice(0, start) + trimmedContent + separator + data.slice(end);
await writeText(readme, newData);

console.log(`\nUpdated ${modeLabel} README.md section`);