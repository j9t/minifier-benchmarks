import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs/promises';

const urls = JSON.parse(await fs.readFile(new URL('../sites.json', import.meta.url), 'utf8'));

for (const mode of ['html', 'max']) {
  describe(`site/data/${mode}.json`, async () => {
    const data = JSON.parse(await fs.readFile(new URL(`../site/data/${mode}.json`, import.meta.url), 'utf8'));

    it('Matches its mode and has an ISO date', () => {
      assert.equal(data.mode, mode);
      assert.match(data.date, /^\d{4}-\d{2}-\d{2}$/);
    });

    it('Lists only sites from sites.json, with their URLs', () => {
      assert.equal(data.sites.length, data.siteCount);
      for (const site of data.sites) {
        assert.equal(site.url, urls[site.name], site.name);
      }
    });

    it('Has results for each minifier on each site', () => {
      const ids = data.minifiers.map(minifier => minifier.id);
      for (const site of data.sites) {
        assert.deepEqual(Object.keys(site.results), ids, site.name);
      }
    });

    it('Marks a minifier as smallest', () => {
      assert.ok(data.minifiers.some(minifier => minifier.isSmallest));
    });
  });
}