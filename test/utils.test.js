import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createMeasure, formatDelta, formatTime, getSizeStats, getTimeStats, median, toKb } from '../utils.js';

const minifierNames = ['local1', 'remote', 'local2'];
const remoteMinifierNames = new Set(['remote']);

// Fake clock returning start/end pairs that yield the given durations
function createClock(durations) {
  const timestamps = durations.flatMap((duration, i) => [i * 100, i * 100 + duration]);
  return () => timestamps.shift();
}

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

describe('createMeasure', () => {
  it('Runs once untimed, then the given number of times timed', async () => {
    let calls = 0;
    const measure = createMeasure(3, createClock([1, 1, 1]));
    await measure(() => ++calls);
    assert.equal(calls, 4);
  });

  it('Returns the last result and the median time', async () => {
    let calls = 0;
    const measure = createMeasure(3, createClock([5, 1, 3]));
    assert.deepEqual(await measure(async () => ++calls), { result: 4, time: 3 });
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