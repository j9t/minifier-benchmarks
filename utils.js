// Calculation and formatting helpers for `benchmark.js`

export function toKb(size, precision) {
  return (size / 1024).toFixed(precision || 0);
}

export function formatDelta(rawSize, originalSize) {
  if (!rawSize || rawSize <= 0 || !originalSize || originalSize <= 0) return '';
  const delta = ((rawSize - originalSize) / originalSize) * 100;
  let formatted = delta.toFixed(1).replace(/\.0$/, '');
  if (formatted === '-0') formatted = '0';
  if (delta > 0 && !formatted.startsWith('+')) formatted = '+' + formatted;
  formatted = formatted.replace('-', '–');
  return '<br>(' + formatted + '%)';
}

export function formatTime(time) {
  return (time < 1 ? '<1' : String(Math.round(time))) + ' ms';
}

export function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

// Returns a function that runs `run` once untimed (JIT warm-up, lazy-loaded dependencies,
// leftover garbage), then `runs` times timed, and resolves to the last result with the
// median time (forcing garbage collection would slow down JavaScript-based minifiers)
export function createMeasure(runs, now = () => performance.now()) {
  return async function measure(run) {
    let result = await run();
    const times = [];
    for (let i = 0; i < runs; i++) {
      const startTime = now();
      result = await run();
      times.push(now() - startTime);
    }
    return { result, time: median(times) };
  };
}

// Mean and median of per-site times; local minifiers are compared on the sites all of them
// processed, so that a failure on a large site doesn’t lower a minifier’s times
export function getTimeStats({ rows, fileNames, minifierNames, remoteMinifierNames }) {
  const sitesProcessed = fileNames.filter(name => rows[name]);
  const sitesCommon = sitesProcessed.filter(name => minifierNames.every(minifierName =>
    remoteMinifierNames.has(minifierName) || rows[name].times[minifierName] != null
  ));
  const stats = {};
  let fastestMean = null;
  let fastestMedian = null;

  minifierNames.forEach(function (name) {
    const sites = remoteMinifierNames.has(name) ? sitesProcessed : sitesCommon;
    const times = sites.map(site => rows[site].times[name]).filter(time => time != null);
    if (times.length === 0) return;
    stats[name] = {
      mean: times.reduce((sum, time) => sum + time, 0) / times.length,
      median: median(times)
    };
    if (!remoteMinifierNames.has(name)) {
      fastestMean = Math.min(fastestMean ?? Infinity, stats[name].mean);
      fastestMedian = Math.min(fastestMedian ?? Infinity, stats[name].median);
    }
  });

  minifierNames.forEach(function (name) {
    if (!stats[name]) return;
    stats[name].isFastestMean = stats[name].mean === fastestMean;
    stats[name].isFastestMedian = stats[name].median === fastestMedian;
  });

  return stats;
}

// Per-minifier average output sizes; failed sites count as unminified (original size),
// so that failures don’t advantage a minifier
export function getSizeStats({ rows, fileNames, minifierNames }) {
  const avgSizes = {};
  let bestTotalBytes = null;

  minifierNames.forEach(function (name, idx) {
    let totalMinifierBytes = 0;
    let totalOriginalBytes = 0;
    let count = 0;

    fileNames.forEach(function (fileName) {
      if (!rows[fileName] || !rows[fileName].rawSizes) return;
      const rawSize = rows[fileName].rawSizes[idx];
      const origSize = rows[fileName].originalSize;
      if (origSize > 0) {
        totalMinifierBytes += (rawSize > 0) ? rawSize : origSize;
        totalOriginalBytes += origSize;
        count++;
      }
    });

    if (count > 0) {
      const avgKB = Math.round(totalMinifierBytes / count / 1024);
      avgSizes[name] = { avgKB, totalMinifierBytes, totalOriginalBytes };
      if (bestTotalBytes === null || totalMinifierBytes < bestTotalBytes) {
        bestTotalBytes = totalMinifierBytes;
      }
    }
  });

  return { avgSizes, bestTotalBytes };
}