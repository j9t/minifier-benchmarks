#!/usr/bin/env node

import { createReadStream, createWriteStream } from 'fs';
import fs from 'fs/promises';
import https from 'https';
import path from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { styleText } from 'node:util';
import zlib from 'zlib';
import lzma from 'lzma';
import Progress from 'progress';
import Table from 'cli-table3';
import { minify as minifyHMN } from 'html-minifier-next';
import htmlnano from 'htmlnano';
import { minify as minifySWC } from '@swc/html';
import minifyHTMLPkg from '@minify-html/node';
import Minimize from 'minimize';

const { minify: minifyHTML } = minifyHTMLPkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Output directory based on mode
const outputDir = path.join(__dirname, 'output', MODE);

// Ensure required directories exist for fresh runs
await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(path.join(__dirname, 'input'), { recursive: true });

const user_agent = 'html-minifier-next-benchmarks/0.0';
const urls = JSON.parse(await fs.readFile(path.join(__dirname, 'sites.json'), 'utf8'));
const fileNames = Object.keys(urls);
const minifierConfig = JSON.parse(await fs.readFile(path.join(__dirname, 'html-minifier.json'), 'utf8'));
const minimize = new Minimize();
const benchmarkErrors = [];

// Verbose logging flag (run via `VERBOSE=true npm run benchmarks`)
const VERBOSE = process.env.VERBOSE === 'true';
function log(message) {
  if (VERBOSE) {
    console.error(`[DEBUG] ${message}`);
  }
}

const progress = new Progress(':current/:total [:bar] :percent :etas :fileName', {
  width: 40,
  total: fileNames.length,
  complete: '=',
  incomplete: '-',
  clear: !VERBOSE,
  stream: process.stderr
});

// Concurrency for site processing
// Default to 1 (sequential) for accurate per-minifier performance comparison
// Set `BENCH_CONCURRENCY=6` for faster parallel execution (may show CPU contention)
const BENCH_CONCURRENCY = Math.max(1, parseInt(process.env.BENCH_CONCURRENCY || '1', 10) || 1);

const table = new Table({
  head: ['File', 'Before', '@swc/html', 'HTML Minifier Next', 'htmlcompressor.com', 'htmlnano', 'minify-html', 'Minimize', 'Savings', 'Time'],
  colWidths: [fileNames.reduce(function (length, fileName) {
    return Math.max(length, fileName.length);
  }, 0) + 2, 25, 25, 25, 25, 25, 25, 25, 25, 20]
});

function toKb(size, precision) {
  return (size / 1024).toFixed(precision || 0);
}

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
const totalTimes = {
  swchtml: 0,
  minifier: 0,
  compressor: 0,
  htmlnano: 0,
  minifyhtml: 0,
  minimize: 0
};
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
    '[@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html)',
    '[HTML Minifier Next](https://github.com/j9t/html-minifier-next)<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next)',
    '[html­com­pressor.­com](https://htmlcompressor.com/)',
    '[htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano)',
    '[minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node)',
    '[minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize)'
  ];

  fileNames.forEach(function (fileName) {
    // Add a check for `rows[fileName]`
    if (!rows[fileName] || !rows[fileName].report) {
      benchmarkErrors.push(`Skipping ${fileName}: row or report is missing`);
      return;
    }

    const row = rows[fileName].report;

    // Find the best (smallest) size among all minifiers
    // Minifier results start at index 2 (@swc/html)
    const minifierResults = [];
    for (let i = 2; i < row.length; i++) {
      const raw = row[i];
      // Skip non-numeric markers
      if (raw === 'n/a' || raw === '<1') continue;

      const numericValue = parseFloat(raw);
      if (!Number.isNaN(numericValue)) {
        minifierResults.push({ index: i, value: numericValue });
      }
    }

    if (minifierResults.length > 0) {
      // Find and store indices of cells with minimum value
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
    // Apply bold formatting during output without modifying the original data
    const formattedRow = row.map((cell, i) => boldIndices?.has(i) ? `**${cell}**` : cell);
    output(formattedRow);
  });

  // Add average processing time row
  const timeRow = ['**Average processing time**', ''];
  const minifierNames = ['swchtml', 'minifier', 'compressor', 'htmlnano', 'minifyhtml', 'minimize'];

  // Count only sites that were actually processed (not skipped due to download failure)
  const processedSites = fileNames.filter(name => rows[name] && rows[name].report).length;

  // Calculate averages and find fastest
  const averages = {};
  let fastestAvg = null;
  minifierNames.forEach(function (name) {
    const successCount = successCounts[name];
    if (successCount > 0) {
      averages[name] = totalTimes[name] / successCount;
      // Find the fastest average across all tools that succeeded on at least one site
      if (fastestAvg === null || averages[name] < fastestAvg) {
        fastestAvg = averages[name];
      }
    }
  });

  minifierNames.forEach(function (name) {
    const successCount = successCounts[name];
    if (successCount > 0) {
      const avgTime = Math.round(averages[name]);
      const display = avgTime + ' ms (' + successCount + '/' + processedSites + ')';
      // Bold if this is the fastest average
      if (fastestAvg !== null && averages[name] === fastestAvg) {
        timeRow.push('**' + display + '**');
      } else {
        timeRow.push(display);
      }
    } else {
      timeRow.push('n/a');
    }
  });
  output(timeRow);

  return content;
}

function displayTable() {
  fileNames.forEach(function (fileName) {
    if (rows[fileName]) { // Ensure the `fileName` exists in rows
      table.push(rows[fileName].display);
    } else {
      benchmarkErrors.push(`No data available for ${fileName}. Skipping.`);
    }
  });

  // Add average processing time row
  const timeRow = ['Average processing time', ''];
  const minifierNames = ['swchtml', 'minifier', 'compressor', 'htmlnano', 'minifyhtml', 'minimize'];

  // Count only sites that were actually processed (not skipped due to download failure)
  const processedSites = fileNames.filter(name => rows[name]).length;

  minifierNames.forEach(function (name) {
    const successCount = successCounts[name];
    if (successCount > 0) {
      const avgTime = Math.round(totalTimes[name] / successCount);
      const display = styleText(['cyan', 'bold'], String(avgTime)) +
                      styleText(['white'], ' ms (' + successCount + '/' + processedSites + ')');
      timeRow.push(display);
    } else {
      timeRow.push(styleText(['white'], 'n/a'));
    }
  });
  timeRow.push('', '');
  table.push(timeRow);

  console.log();
  console.log(table.toString());
}

async function processFiles() {
  // Generator that yields file names to process
  function* fileNameGenerator() {
    for (const name of fileNames) {
      yield name;
    }
  }

  const generator = fileNameGenerator();

  // Thread-safe (single-threaded JS) function to get next file name
  // Returns undefined when all files have been assigned
  function getNextFile() {
    const next = generator.next();
    return next.done ? undefined : next.value;
  }

  async function worker() {
    while (true) {
      const name = getNextFile();
      if (name === undefined) break;
      try {
        await processFile(name);
      } catch (err) {
        benchmarkErrors.push(`Unhandled error processing ${name}: ${err?.message || err}`);
      }
    }
  }

  const workers = Array.from({ length: Math.min(BENCH_CONCURRENCY, fileNames.length) }, () => worker());
  await Promise.all(workers);
}

async function processFile(fileName) {
  const filePath = path.join(__dirname, 'input', fileName + '.html');

  async function processFileInternal(site) {
    const original = {
      filePath: filePath,
      gzFilePath: path.join(outputDir, fileName + '.html.gz'),
      lzFilePath: path.join(outputDir, fileName + '.html.lz'),
      brFilePath: path.join(outputDir, fileName + '.html.br')
    };
    const infos = {};
    ['swchtml', 'minifier', 'compressor', 'htmlnano', 'minifyhtml', 'minimize'].forEach(function (name) {
      infos[name] = {
        filePath: path.join(outputDir, fileName + '.' + name + '.html'),
        gzFilePath: path.join(outputDir, fileName + '.' + name + '.html.gz'),
        lzFilePath: path.join(outputDir, fileName + '.' + name + '.html.lz'),
        brFilePath: path.join(outputDir, fileName + '.' + name + '.html.br')
      };
    });

    function resetSizes(info) {
      info.size = 0;
      info.gzSize = 0;
      info.lzSize = 0;
      info.brSize = 0;
    }

    async function readSizes(info) {
      info.endTime = Date.now();

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

    // @swc/html, https://swc.rs/docs/usage/html
    async function testSWCHTML() {
      const data = await readText(filePath);
      const info = infos.swchtml;
      info.startTime = Date.now();

      try {
        const result = await minifySWC(data, {
          // Use most aggressive settings
          minifyJs: !IS_HTML_ONLY,
          minifyCss: !IS_HTML_ONLY,
          minifyJson: !IS_HTML_ONLY,
          collapseWhitespaces: 'all',
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: 'all',
          collapseBooleanAttributes: true,
          normalizeAttributes: true,
          removeEmptyMetadataElements: true,
          minifyConditionalComments: true,
          tagOmission: true,
          quotes: true
        });
        await writeText(info.filePath, result.code);
        await readSizes(info);
      } catch (err) {
        benchmarkErrors.push(`@swc/html failed for ${fileName}: ${err.message}`);
        resetSizes(info);
      }
    }

    // HTML Minifier Next
    async function testHTMLMinifier() {
      const data = await readText(filePath);
      const info = infos.minifier;
      info.startTime = Date.now();

      try {
        // Load config and add site-specific minifyURLs
        const config = { ...minifierConfig, minifyURLs: site };

        // HTML-only mode: Disable CSS, JS, SVG, and other minification
        if (IS_HTML_ONLY) {
          config.minifyCSS = false;
          config.minifyJS = false;
          config.minifySVG = false;
          config.minifyURLs = false;
        }

        const result = await minifyHMN(data, config);
        await writeText(info.filePath, result);
        await readSizes(info);
      } catch (err) {
        benchmarkErrors.push(`HTML Minifier Next failed for ${fileName}: ${err.message}`);
        resetSizes(info);
      }
    }

    // htmlcompressor.com, https://htmlcompressor.com/api/#:~:text=HTMLCompressor%20API%20reference
    async function testHTMLCompressor() {
      const data = await readText(filePath);
      const url = new URL('https://htmlcompressor.com/compress');
      const options = {
        method: 'POST',
        headers: {
          'Accept-Encoding': 'gzip',
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': user_agent
        }
      };

      let info = infos.compressor;
      info.startTime = Date.now();

      function failed() {
        // Site refused to process content
        if (info) {
          resetSizes(info);
          info = null;
        }
      }

      return new Promise((resolve) => {
        const request = https.request(url, options, function (res) {
          // Check HTTP status code
          if (res.statusCode < 200 || res.statusCode >= 300) {
            benchmarkErrors.push(`htmlcompressor.com failed for ${fileName}: HTTP ${res.statusCode}`);
            failed();
            resolve();
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
          stream.setEncoding('utf8');
          let response = '';
          stream.on('data', function (chunk) {
            response += chunk;
          }).on('end', async function () {
            let compressedContent = '';
            let isSuccess = false;

            // Parse response based on content-type
            if (isJson) {
              // Try to parse as JSON first (old API format)
              try {
                const jsonResponse = JSON.parse(response);
                if (jsonResponse.success && jsonResponse.result) {
                  compressedContent = jsonResponse.result;
                  isSuccess = true;
                }
              } catch (err) {
                console.warn('Failed to parse JSON response from htmlcompressor.com');
              }
            } else {
              // Treat as direct text response (new API format)
              // Compare byte lengths instead of string lengths for accuracy
              const responseBytes = Buffer.byteLength(response, 'utf8');
              const originalBytes = Buffer.byteLength(data, 'utf8');

              if (response && response.length > 0 && response.includes('<') && responseBytes <= originalBytes) {
                compressedContent = response;
                isSuccess = true;
              }
            }

            if (info && isSuccess && compressedContent) {
              await writeText(info.filePath, compressedContent);
              await readSizes(info);
            } else { // Site refused to process content or returned error
              failed();
            }
            resolve();
          });
        });

        // Set request timeout (15 seconds)
        request.setTimeout(15000, function() {
          benchmarkErrors.push(`htmlcompressor.com timed out for ${fileName}`);
          request.destroy();
          failed();
          resolve();
        });

        request.on('error', (err) => {
          benchmarkErrors.push(`htmlcompressor.com error for ${fileName}: ${err.message}`);
          failed();
          resolve();
        }).end(new URLSearchParams({
          code_type: 'html',
          html_level: 3,
          html_single_line: 1,
          html_strip_quotes: 1,
          minimize_style: 1,
          minimize_events: 1,
          minimize_js_href: IS_HTML_ONLY ? 0 : 1,
          minimize_css: IS_HTML_ONLY ? 0 : 1,
          minimize_js: IS_HTML_ONLY ? 0 : 1,
          html_optional_cdata: 1,
          js_engine: 'yui',
          js_fallback: 1,
          code: data
        }).toString());
      });
    }

    // htmlnano, https://htmlnano.netlify.app/presets
    async function testhtmlnano() {
      const info = infos.htmlnano;

      // Temporary workaround for Terser crashes—remove when htmlnano/Terser stability improves
      // URLs that cause Terser crashes in htmlnano (add more as needed)
      const SKIP_URLS = [
        'https://vivaldi.com/'
      ];

      if (!IS_HTML_ONLY && SKIP_URLS.includes(site)) {
        benchmarkErrors.push(`htmlnano skipped for ${fileName} (known Terser crash)`);
        resetSizes(info);
        return;
      }
      // End workaround

      const data = await readText(filePath);
      info.startTime = Date.now();

      try {
        // Always use "max" preset for most aggressive HTML minification
        const preset = htmlnano.presets.max;
        const options = IS_HTML_ONLY
          ? {
              collapseWhitespace: 'aggressive',
              removeEmptyElements: true,
              minifyCss: false,
              minifyJs: false,
              minifySvg: false,
              removeUnusedCss: false
            }
          : {
              collapseWhitespace: 'aggressive',
              removeEmptyElements: true,
              removeUnusedCss: { tool: 'purgeCSS' },
              minifyUrls: site
            };
        const result = await htmlnano.process(data, options, preset);
        await writeText(info.filePath, result.html);
        await readSizes(info);
      } catch (err) {
        benchmarkErrors.push(`htmlnano failed for ${fileName}: ${err.message}`);
        resetSizes(info);
      }
    }

    // minify-html, https://github.com/wilsonzlin/minify-html
    async function testMinifyHTML() {
      const data = await readBuffer(filePath);
      const info = infos.minifyhtml;
      info.startTime = Date.now();

      try {
        const result = minifyHTML(data, {
          keep_closing_tags: false,
          keep_comments: false,
          keep_html_and_head_opening_tags: false,
          keep_input_type_text_attr: false,
          keep_ssi_comments: false,
          minify_css: !IS_HTML_ONLY,
          minify_js: !IS_HTML_ONLY, // Disable if Rust panics get too frequent
          preserve_brace_template_syntax: false,
          preserve_chevron_percent_template_syntax: false,
          remove_bangs: true,
          remove_processing_instructions: true,
          // Possibly non-compliant options (output still works in all browsers):
          allow_noncompliant_unquoted_attribute_values: true,
          allow_optimal_entities: true,
          allow_removing_spaces_between_attributes: true,
          minify_doctype: true
        });
        await writeBuffer(info.filePath, result);
        await readSizes(info);
      } catch (err) {
        benchmarkErrors.push(`minify-html failed for ${fileName}: ${err.message}`);
        resetSizes(info);
      }
    }

    // Minimize, https://github.com/Swaagie/minimize
    async function testMinimize() {
      const data = await readText(filePath);
      const info = infos.minimize;
      info.startTime = Date.now();

      return new Promise((resolve) => {
        minimize.parse(data, function (err, minified) {
          if (err) {
            benchmarkErrors.push(`Minimize failed for ${fileName}: ${err.message}`);
            resetSizes(info);
            return resolve();
          }

          Promise.resolve()
            .then(() => writeBuffer(info.filePath, minified))
            .then(() => readSizes(info))
            .then(() => resolve())
            .catch(err => {
              benchmarkErrors.push(`Failed after minimize processing ${fileName}: ${err.message}`);
              resetSizes(info);
              resolve();
            });
        });
      });
    }

    await readSizes(original);

    log(`${fileName}: Running @swc/html`);
    await testSWCHTML();

    log(`${fileName}: Running HTML Minifier Next`);
    await testHTMLMinifier();

    log(`${fileName}: Running htmlcompressor.com`);
    await testHTMLCompressor();

    log(`${fileName}: Running htmlnano`);
    await testhtmlnano();

    log(`${fileName}: Running minify-html`);
    await testMinifyHTML();

    log(`${fileName}: Running Minimize`);
    await testMinimize();

    const display = [
      [fileName, '+ gzip', '+ lzma', '+ brotli'].join('\n'),
      [redSize(original.size), redSize(original.gzSize), redSize(original.lzSize), redSize(original.brSize)].join('\n')
    ];
    const report = [
      '[' + fileName + '](' + urls[fileName] + ')',
      toKb(original.size)
    ];
    for (const name in infos) {
      const info = infos[name];
      display.push([greenSize(info.size), greenSize(info.gzSize), greenSize(info.lzSize), greenSize(info.brSize)].join('\n'));
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
        blueTime(infos.minifier.endTime - infos.minifier.startTime),
        blueTime(infos.minifier.gzTime - infos.minifier.endTime),
        blueTime(infos.minifier.lzTime - infos.minifier.gzTime),
        blueTime(infos.minifier.brTime - infos.minifier.lzTime)
      ].join('\n')
    );
    rows[fileName] = {
      display: display,
      report: report
    };

    // Accumulate total processing times and count successes
    for (const name in infos) {
      const info = infos[name];
      if (info.startTime && info.endTime && info.size > 0) {
        totalTimes[name] += (info.endTime - info.startTime);
        successCounts[name]++;
      }
    }

    progress.tick({ fileName: `Completed ${fileName}` });
  }

  async function get(site, redirectCount = 0) {
    const MAX_REDIRECTS = 10;
    if (redirectCount >= MAX_REDIRECTS) {
      benchmarkErrors.push(`Too many redirects for ${site}`);
      return null;
    }

    const url = new URL(site);

    await fs.mkdir(path.dirname(filePath), { recursive: true });
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
            safeResolve(site);
          });

          writeStream.on('close', function () {
            // Ensure clean-up if stream closes without finishing
            if (!resolved) {
              safeResolve(null);
            }
          });

          stream.pipe(writeStream);

        } else if (status >= 300 && status < 400 && res.headers.location) {
          res.resume(); // Consume response to free memory
          get(new URL(res.headers.location, site), redirectCount + 1).then(safeResolve);
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

  log(`Starting ${fileName}`);
  progress.tick(0, { fileName: `Starting ${fileName}` });

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
    site = await get(urls[fileName]);
    if (!site) {
      // Remove any partially written file
      try { await fs.unlink(filePath); } catch { /* ignore */ }
      benchmarkErrors.push(`Skipping ${fileName} due to download failure`);
      rows[fileName] = null; // Explicitly mark as skipped
      return;
    }
  }

  log(`Processing ${fileName}…`);
  await processFileInternal(site);
}

// Log mode and concurrency settings
const modeLabel = IS_HTML_ONLY ? 'HTML' : 'max';
console.error(`\nRunning benchmarks in ${modeLabel} mode (${IS_HTML_ONLY ? 'HTML-only' : 'HTML, CSS, JS, and other available options'})`);
const actualConcurrency = Math.min(BENCH_CONCURRENCY, fileNames.length);
if (VERBOSE || BENCH_CONCURRENCY > 1) {
  console.error(`Concurrency: ${actualConcurrency} (BENCH_CONCURRENCY=${BENCH_CONCURRENCY})`);
}

// Reset progress bar for this run
progress.curr = 0;

await processFiles();

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

const readme = path.join(__dirname, 'README.md');
let data = await readText(readme);

// Update the single date at the start of the benchmarks section
const dateLinePattern = /Benchmarks last updated: .+/;
if (dateLinePattern.test(data)) {
  data = data.replace(dateLinePattern, `Benchmarks last updated: ${dateStamp}`);
}

// Target different sections based on mode
const sectionHeader = IS_HTML_ONLY
  ? '## 1. HTML Minification Compared'
  : '## 2. Maximum Minification Compared';

let start = data.indexOf(sectionHeader);
if (start === -1) {
  console.error(`Section "${sectionHeader}" not found in README.md`);
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

// Replace table content, normalize newlines to avoid double blank lines
// Add end comment after max table (marks end of auto-generated content)
const endComment = IS_HTML_ONLY ? '' : '<!-- End auto-generated -->';
const trimmedContent = content.trimEnd();
const separator = endComment ? '\n' + endComment + '\n\n' : '\n\n';
const newData = data.slice(0, start) + trimmedContent + separator + data.slice(end);
await writeText(readme, newData);

console.log(`\nUpdated ${modeLabel} README.md section`);