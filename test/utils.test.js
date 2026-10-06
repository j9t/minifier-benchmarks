import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatDelta, formatTime, getRunOrder, getSizeStats, getTimeStats, isUnsteady, median, toKb, waitForLoad } from '../src/utils.js';

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