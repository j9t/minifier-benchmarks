import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs/promises';
import { existsSync } from 'fs';

const readSites = async file => JSON.parse(await fs.readFile(new URL(`../${file}`, import.meta.url), 'utf8'));
const sites = await readSites('sites.json');
const sitesBackup = await readSites('sites.backup.json');

// HTML Minifier’s backtest uses the same sample set; keep both in sync when changing either
const fileSitesBacktest = '../html-minifier/backtest/sites.json';
const hasSitesBacktest = existsSync(new URL(`../${fileSitesBacktest}`, import.meta.url));

describe('sites.json', () => {
  it('Lists HTTPS URLs only', () => {
    for (const [name, url] of Object.entries(sites)) {
      assert.equal(new URL(url).protocol, 'https:', name);
    }
  });

  it('Lists no URL twice', () => {
    const urls = Object.values(sites);
    assert.equal(new Set(urls).size, urls.length);
  });

  // Names double as input and output file names
  it('Uses names that are valid file names', () => {
    for (const name of Object.keys(sites)) {
      assert.match(name, /^[^/\\:*?"<>|]+$/, name);
    }
  });

  it('Matches HTML Minifier’s backtest sites.json', { skip: !hasSitesBacktest && 'html-minifier not checked out next to this project' }, async () => {
    assert.deepEqual(Object.entries(sites), Object.entries(await readSites(fileSitesBacktest)));
  });
});

describe('sites.backup.json', () => {
  it('Lists HTTPS URLs only', () => {
    for (const [name, url] of Object.entries(sitesBackup)) {
      assert.equal(new URL(url).protocol, 'https:', name);
    }
  });

  it('Shares no names or URLs with sites.json', () => {
    const urls = new Set(Object.values(sites));
    for (const [name, url] of Object.entries(sitesBackup)) {
      assert.ok(!(name in sites), name);
      assert.ok(!urls.has(url), url);
    }
  });
});