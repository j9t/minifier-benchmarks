import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs/promises';

const readSites = async file => JSON.parse(await fs.readFile(new URL(`../${file}`, import.meta.url), 'utf8'));
const sites = await readSites('sites.json');
const sitesBackup = await readSites('sites.backup.json');

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