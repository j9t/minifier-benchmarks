import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatDelta, formatTime, getDelta, getResultsData, getRunOrder, getSizeStats, getTimeStats, isUnsteady, median, toKb, waitForLoad } from '../src/utils.js';

const minifierNames = ['local1', 'remote', 'local2'];
const remoteMinifierNames = new Set(['remote']);

describe('median', () => {
  it('Returns the middle value for an odd count', () => {
    assert.equal(median([9, 1, 5]), 5);
  });

  it('Returns the mean of the two middle values for an even count', () => {
    assert.equal(median([4, 1, 3, 2]), 2.5);
  });

  it('Leaves the input unchanged', () => {
    const values = [3, 1, 2];
    median(values);
    assert.deepEqual(values, [3, 1, 2]);
  });
});

describe('getRunOrder', () => {
  it('Rotates the names by the offset', () => {
    assert.deepEqual(getRunOrder(['a', 'b', 'c'], 1), ['b', 'c', 'a']);
  });

  it('Wraps offsets beyond the number of names', () => {
    assert.deepEqual(getRunOrder(['a', 'b', 'c'], 5), ['c', 'a', 'b']);
  });

  it('Puts each name first equally often over consecutive offsets', () => {
    const firsts = [0, 1, 2, 3, 4, 5].map(offset => getRunOrder(['a', 'b', 'c'], offset)[0]);
    assert.deepEqual(firsts, ['a', 'b', 'c', 'a', 'b', 'c']);
  });

  it('Leaves the input unchanged', () => {
    const names = ['a', 'b'];
    getRunOrder(names, 1);
    assert.deepEqual(names, ['a', 'b']);
  });
});

describe('isUnsteady', () => {
  it('Accepts a single slow run, which the median absorbs', () => {
    assert.equal(isUnsteady([10, 10, 11, 10, 40]), false);
  });

  it('Flags runs whose median is far above the fastest run', () => {
    assert.equal(isUnsteady([10, 25, 30, 11, 40]), true);
  });

  it('Ignores differences below the minimum in milliseconds', () => {
    assert.equal(isUnsteady([1, 2.5, 2.5, 1, 2.5]), false);
  });
});

describe('waitForLoad', () => {
  // Returns the given loads in turn (repeating the last one) and records the sleeps
  function createLoad(loads) {
    const sleeps = [];
    return {
      sleeps,
      options: {
        getLoad: () => loads.length > 1 ? loads.shift() : loads[0],
        loadMax: 5,
        waitMaxMs: 30,
        pollMs: 10,
        sleep: async ms => { sleeps.push(ms); }
      }
    };
  }

  it('Resolves to true without waiting if the load is low', async () => {
    const { sleeps, options } = createLoad([2]);
    assert.equal(await waitForLoad(options), true);
    assert.deepEqual(sleeps, []);
  });

  it('Waits until the load drops', async () => {
    const { sleeps, options } = createLoad([8, 8, 7, 4]);
    let waitCalls = 0;
    assert.equal(await waitForLoad({ ...options, onWait: () => waitCalls++ }), true);
    assert.equal(sleeps.length, 2);
    assert.equal(waitCalls, 1);
  });

  it('Resolves to false if the load stays high for the maximum wait', async () => {
    const { sleeps, options } = createLoad([9]);
    assert.equal(await waitForLoad(options), false);
    assert.deepEqual(sleeps, [10, 10, 10]);
  });
});

describe('getTimeStats', () => {
  it('Compares local minifiers on the sites all of them processed', () => {
    const rows = {
      a: { times: { local1: 10, remote: 100, local2: 20 } },
      b: { times: { local1: 30, remote: 300, local2: null } }
    };
    const stats = getTimeStats({ rows, fileNames: ['a', 'b'], minifierNames, remoteMinifierNames });
    assert.equal(stats.local1.mean, 10);
    assert.equal(stats.local2.mean, 20);
  });

  it('Bases remote minifiers’ times on the sites they processed', () => {
    const rows = {
      a: { times: { local1: 10, remote: 100, local2: 20 } },
      b: { times: { local1: 30, remote: null, local2: 40 } },
      c: { times: { local1: 50, remote: 300, local2: 60 } }
    };
    const stats = getTimeStats({ rows, fileNames: ['a', 'b', 'c'], minifierNames, remoteMinifierNames });
    assert.equal(stats.remote.mean, 200);
    assert.equal(stats.local1.mean, 30);
  });

  it('Returns mean and median per minifier', () => {
    const rows = {
      a: { times: { local1: 1, remote: 1, local2: 1 } },
      b: { times: { local1: 2, remote: 1, local2: 1 } },
      c: { times: { local1: 9, remote: 1, local2: 1 } }
    };
    const stats = getTimeStats({ rows, fileNames: ['a', 'b', 'c'], minifierNames, remoteMinifierNames });
    assert.equal(stats.local1.mean, 4);
    assert.equal(stats.local1.median, 2);
  });

  it('Marks the fastest local minifier by mean and by median separately', () => {
    const rows = {
      a: { times: { local1: 1, remote: 1, local2: 2 } },
      b: { times: { local1: 1, remote: 1, local2: 2 } },
      c: { times: { local1: 10, remote: 1, local2: 2 } }
    };
    const stats = getTimeStats({ rows, fileNames: ['a', 'b', 'c'], minifierNames, remoteMinifierNames });
    assert.equal(stats.local1.isFastestMean, false);
    assert.equal(stats.local2.isFastestMean, true);
    assert.equal(stats.local1.isFastestMedian, true);
    assert.equal(stats.local2.isFastestMedian, false);
  });

  it('Counts times within 5% of the fastest as fastest, too', () => {
    const rows = { a: { times: { local1: 100, remote: 1, local2: 104 } } };
    const stats = getTimeStats({ rows, fileNames: ['a'], minifierNames, remoteMinifierNames });
    assert.equal(stats.local1.isFastestMean, true);
    assert.equal(stats.local2.isFastestMean, true);
  });

  it('Doesn’t count times beyond 5% of the fastest as fastest', () => {
    const rows = { a: { times: { local1: 100, remote: 1, local2: 106 } } };
    const stats = getTimeStats({ rows, fileNames: ['a'], minifierNames, remoteMinifierNames });
    assert.equal(stats.local2.isFastestMean, false);
  });

  it('Applies a custom tie ratio', () => {
    const rows = { a: { times: { local1: 100, remote: 1, local2: 104 } } };
    const stats = getTimeStats({ rows, fileNames: ['a'], minifierNames, remoteMinifierNames, tieRatio: 0 });
    assert.equal(stats.local2.isFastestMean, false);
  });

  it('Never marks a remote minifier as fastest', () => {
    const rows = { a: { times: { local1: 10, remote: 1, local2: 20 } } };
    const stats = getTimeStats({ rows, fileNames: ['a'], minifierNames, remoteMinifierNames });
    assert.equal(stats.remote.isFastestMean, false);
    assert.equal(stats.local1.isFastestMean, true);
  });

  it('Marks remote estimates as reliable if clearly above noise', () => {
    const rows = Object.fromEntries([700, 800, 750, 650, 720].map((time, i) => [i, { times: { local1: 1, remote: time, local2: 1 } }]));
    const stats = getTimeStats({ rows, fileNames: Object.keys(rows), minifierNames, remoteMinifierNames });
    assert.equal(stats.remote.isReliable, true);
  });

  it('Marks remote estimates as unreliable if within noise', () => {
    const rows = Object.fromEntries([400, -500, 300, -350, 200].map((time, i) => [i, { times: { local1: 1, remote: time, local2: 1 } }]));
    const stats = getTimeStats({ rows, fileNames: Object.keys(rows), minifierNames, remoteMinifierNames });
    assert.equal(stats.remote.isReliable, false);
    assert.equal(stats.local1.isReliable, true);
  });

  it('Marks a single remote estimate as unreliable', () => {
    const rows = { a: { times: { local1: 1, remote: 700, local2: 1 } } };
    const stats = getTimeStats({ rows, fileNames: ['a'], minifierNames, remoteMinifierNames });
    assert.equal(stats.remote.isReliable, false);
  });

  it('Ignores skipped sites and omits minifiers without times', () => {
    const rows = {
      a: null,
      b: { times: { local1: 10, remote: null, local2: 20 } }
    };
    const stats = getTimeStats({ rows, fileNames: ['a', 'b'], minifierNames, remoteMinifierNames });
    assert.equal(stats.local1.mean, 10);
    assert.equal(stats.remote, undefined);
  });

  it('Omits excluded minifiers and doesn’t let their missing times reduce the common sites', () => {
    const rows = {
      a: { times: { local1: 10, remote: 100, local2: null } },
      b: { times: { local1: 30, remote: 300, local2: null } }
    };
    const stats = getTimeStats({ rows, fileNames: ['a', 'b'], minifierNames, remoteMinifierNames, excludedMinifierNames: new Set(['local2']) });
    assert.equal(stats.local1.mean, 20);
    assert.equal(stats.local1.isFastestMean, true);
    assert.equal(stats.local2, undefined);
  });
});

describe('getSizeStats', () => {
  it('Counts failed sites as unminified', () => {
    const rows = {
      a: { originalSize: 1024, rawSizes: [512, 0, 256] },
      b: { originalSize: 2048, rawSizes: [1024, 1024, 0] }
    };
    const { avgSizes } = getSizeStats({ rows, fileNames: ['a', 'b'], minifierNames });
    assert.equal(avgSizes.remote.totalMinifierBytes, 1024 + 1024);
    assert.equal(avgSizes.local2.totalMinifierBytes, 256 + 2048);
    assert.equal(avgSizes.local1.totalOriginalBytes, 3072);
  });

  it('Returns the smallest total as the best result', () => {
    const rows = { a: { originalSize: 4096, rawSizes: [3072, 2048, 1024] } };
    const { avgSizes, bestTotalBytes } = getSizeStats({ rows, fileNames: ['a'], minifierNames });
    assert.equal(bestTotalBytes, 1024);
    assert.equal(avgSizes.local2.avgKB, 1);
  });

  it('Ignores skipped sites', () => {
    const rows = { a: null, b: { originalSize: 2048, rawSizes: [1024, 1024, 1024] } };
    const { avgSizes } = getSizeStats({ rows, fileNames: ['a', 'b'], minifierNames });
    assert.equal(avgSizes.local1.totalOriginalBytes, 2048);
  });

  it('Omits excluded minifiers instead of counting them as unminified', () => {
    const rows = { a: { originalSize: 4096, rawSizes: [3072, 0, 2048] } };
    const { avgSizes, bestTotalBytes } = getSizeStats({ rows, fileNames: ['a'], minifierNames, excludedMinifierNames: new Set(['remote']) });
    assert.equal(avgSizes.remote, undefined);
    assert.equal(avgSizes.local2.totalMinifierBytes, 2048);
    assert.equal(bestTotalBytes, 2048);
  });
});

describe('getDelta', () => {
  it('Returns the change in percent, rounded to one decimal', () => {
    assert.equal(getDelta(900, 1000), -10);
    assert.equal(getDelta(1015, 1000), 1.5);
    assert.equal(getDelta(8764, 10000), -12.4);
  });

  it('Returns zero (not negative zero) for rounded-away changes', () => {
    assert.ok(Object.is(getDelta(9999, 10000), 0));
  });

  it('Returns null for missing sizes', () => {
    assert.equal(getDelta(0, 1000), null);
    assert.equal(getDelta(1000, 0), null);
  });
});

describe('getResultsData', () => {
  const minifierInfo = {
    local1: { name: 'Local 1', url: 'https://example.org/local1' },
    remote: { name: 'Remote', url: 'https://example.org/remote' },
    local2: { name: 'Local 2', url: 'https://example.org/local2' }
  };
  const urls = { a: 'https://example.org/a', b: 'https://example.org/b', c: 'https://example.org/c' };
  const rows = {
    a: { originalSize: 10240, rawSizes: [8192, 9216, 8192], times: { local1: 10, remote: 100, local2: 20 } },
    b: { originalSize: 20480, rawSizes: [10240, 0, 15360], times: { local1: 30, remote: null, local2: 40 } },
    c: null
  };

  function getData(options = {}) {
    return getResultsData({ rows, fileNames: ['a', 'b', 'c'], urls, minifierNames, minifierInfo, remoteMinifierNames, mode: 'html', date: new Date(2026, 9, 14), environment: 'Node.js 24.0.0', ...options });
  }

  it('Returns mode, date, environment, and the number of processed sites', () => {
    const data = getData();
    assert.equal(data.mode, 'html');
    assert.equal(data.date, '2026-10-14');
    assert.equal(data.environment, 'Node.js 24.0.0');
    assert.equal(data.siteCount, 2);
  });

  it('Returns the average original size in kilobytes', () => {
    assert.equal(getData().averageOriginalKb, 15);
  });

  it('Leaves out skipped sites', () => {
    assert.deepEqual(getData().sites.map(site => site.name), ['a', 'b']);
  });

  it('Returns per-site sizes, deltas, and the best results', () => {
    const [siteA, siteB] = getData().sites;
    assert.equal(siteA.url, 'https://example.org/a');
    assert.equal(siteA.kb, 10);
    assert.deepEqual(siteA.results.local1, { kb: 8, delta: -20, isBest: true });
    assert.deepEqual(siteA.results.local2, { kb: 8, delta: -20, isBest: true });
    assert.deepEqual(siteA.results.remote, { kb: 9, delta: -10, isBest: false });
    assert.equal(siteB.results.remote, null);
  });

  it('Returns per-minifier summaries', () => {
    const [local1, remote] = getData().minifiers;
    assert.deepEqual(local1, {
      id: 'local1', name: 'Local 1', url: 'https://example.org/local1', isRemote: false, isExcluded: false,
      processed: 2, kb: 9, delta: -40, isSmallest: true,
      averageMs: 20, medianMs: 20, isTimeReliable: true, isFastestAverage: true, isFastestMedian: true
    });
    assert.equal(remote.isRemote, true);
    assert.equal(remote.processed, 1);
    assert.equal(remote.delta, -3.3);
    assert.equal(remote.isSmallest, false);
    assert.equal(remote.isTimeReliable, false);
  });

  it('Rounds times to one decimal', () => {
    const rowsFractional = { a: { ...rows.a, times: { local1: 1.234, remote: null, local2: 5.678 } } };
    const [local1] = getData({ rows: rowsFractional, fileNames: ['a'] }).minifiers;
    assert.equal(local1.averageMs, 1.2);
  });

  it('Returns null reliability for minifiers without times', () => {
    const rowsUntimed = { a: { ...rows.a, times: { local1: 10, remote: null, local2: 12 } } };
    const remote = getData({ rows: rowsUntimed, fileNames: ['a'] }).minifiers.find(minifier => minifier.id === 'remote');
    assert.equal(remote.isTimeReliable, null);
    assert.equal(remote.averageMs, null);
  });

  it('Marks excluded minifiers and leaves their results empty', () => {
    const data = getData({ excludedMinifierNames: new Set(['local2']) });
    const local2 = data.minifiers.find(minifier => minifier.id === 'local2');
    assert.equal(local2.isExcluded, true);
    assert.equal(local2.processed, null);
    assert.equal(local2.kb, null);
    assert.equal(local2.averageMs, null);
    assert.equal(data.sites[0].results.local2, null);
  });
});

describe('formatDelta', () => {
  it('Formats reductions with an en dash', () => {
    assert.equal(formatDelta(900, 1000), '<br>(–10%)');
  });

  it('Formats increases with a plus sign', () => {
    assert.equal(formatDelta(1015, 1000), '<br>(+1.5%)');
  });

  it('Formats rounded-away changes as zero', () => {
    assert.equal(formatDelta(9999, 10000), '<br>(0%)');
  });

  it('Returns an empty string for missing sizes', () => {
    assert.equal(formatDelta(0, 1000), '');
    assert.equal(formatDelta(1000, 0), '');
  });
});

describe('formatTime', () => {
  it('Rounds to whole milliseconds', () => {
    assert.equal(formatTime(24.6), '25 ms');
  });

  it('Formats sub-millisecond times as “<1”', () => {
    assert.equal(formatTime(0.4), '<1 ms');
  });
});

describe('toKb', () => {
  it('Converts bytes to kilobytes with the given precision', () => {
    assert.equal(toKb(1536), '2');
    assert.equal(toKb(1536, 2), '1.50');
  });
});