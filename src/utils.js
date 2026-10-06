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

// Rotates `names` by `offset`, so that minifiers take turns being first (and last)
export function getRunOrder(names, offset) {
  const shift = ((offset % names.length) + names.length) % names.length;
  return [...names.slice(shift), ...names.slice(0, shift)];
}

// Whether the median of `times` exceeds the fastest run by more than `ratio` and `minMs`,
// which suggests that interference (like system load) affected at least half of the runs
export function isUnsteady(times, { ratio = 0.5, minMs = 2 } = {}) {
  const fastest = Math.min(...times);
  return median(times) - fastest > Math.max(fastest * ratio, minMs);
}

// Resolves to whether `getLoad()` is at or below `loadMax`, or drops there within `waitMaxMs`
// (checked every `pollMs`); calls `onWait` with the load once if it has to wait
export async function waitForLoad({ getLoad, loadMax, waitMaxMs, pollMs, onWait = () => {}, sleep = ms => new Promise(resolve => setTimeout(resolve, ms)) }) {
  let waited = 0;
  while (getLoad() > loadMax) {
    if (waited >= waitMaxMs) return false;
    if (waited === 0) onWait(getLoad());
    await sleep(pollMs);
    waited += pollMs;
  }
  return true;
}

function getStandardError(values, mean) {
  if (values.length < 2) return Infinity;
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (values.length - 1);
  return Math.sqrt(variance / values.length);
}

// Mean and median of per-site times; local minifiers are compared on the sites
// all of them processed, so that a failure on a large site doesn’t lower a
// minifier’s times; times within `tieRatio` of the fastest count as fastest,
// too, as smaller differences are within noise
export function getTimeStats({ rows, fileNames, minifierNames, remoteMinifierNames, tieRatio = 0.05 }) {
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
    const mean = times.reduce((sum, time) => sum + time, 0) / times.length;
    stats[name] = {
      mean,
      median: median(times),
      // Estimates count as reliable if their mean exceeds twice its standard error
      isReliable: !remoteMinifierNames.has(name) || mean > 2 * getStandardError(times, mean)
    };
    if (!remoteMinifierNames.has(name)) {
      fastestMean = Math.min(fastestMean ?? Infinity, stats[name].mean);
      fastestMedian = Math.min(fastestMedian ?? Infinity, stats[name].median);
    }
  });

  minifierNames.forEach(function (name) {
    if (!stats[name]) return;
    const isLocal = !remoteMinifierNames.has(name);
    stats[name].isFastestMean = isLocal && stats[name].mean <= fastestMean * (1 + tieRatio);
    stats[name].isFastestMedian = isLocal && stats[name].median <= fastestMedian * (1 + tieRatio);
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