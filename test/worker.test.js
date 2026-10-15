import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { fork } from 'child_process';
import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const dirRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const minifierConfig = JSON.parse(await fs.readFile(path.join(dirRoot, 'html-minifier-next.config.json'), 'utf8'));

// Starts the worker like `benchmark.js` does (plus `execArgv`);
// requests resolve to the worker’s responses
function startWorker(execArgv = []) {
  const child = fork(path.join(dirRoot, 'src', 'worker.js'), { execArgv: [...process.execArgv, ...execArgv], stdio: ['ignore', 'ignore', 'ignore', 'ipc'] });
  const pending = new Map();
  let nextId = 0;
  child.on('message', ({ id, ...response }) => {
    pending.get(id)(response);
    pending.delete(id);
  });
  // Fails pending requests if the worker exits (e.g., on a failed import),
  // rather than leaving them hanging
  child.on('exit', code => {
    for (const resolve of pending.values()) resolve({ error: `Worker exited with code ${code}` });
    pending.clear();
  });
  return {
    request(type, message = {}) {
      const id = nextId++;
      return new Promise(resolve => {
        pending.set(id, resolve);
        child.send({ id, type, ...message });
      });
    },
    close() {
      return new Promise(resolve => {
        child.on('exit', resolve);
        child.disconnect();
      });
    }
  };
}

describe('worker', () => {
  let dirTemp;

  before(async () => {
    dirTemp = await fs.mkdtemp(path.join(os.tmpdir(), 'minifier-benchmarks-'));
    await fs.writeFile(path.join(dirTemp, 'a.html'), '<!DOCTYPE html><title>A</title><p>  A  </p>');
    // Simulates a platform without a prebuilt library for minify
    await fs.writeFile(path.join(dirTemp, 'no-minify.mjs'), `import { registerHooks } from 'module';
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === '@tdewolff/minify') throw new Error('Native library not found');
    return nextResolve(specifier, context);
  }
});`);
  });

  after(async () => {
    await fs.rm(dirTemp, { recursive: true, force: true });
  });

  async function startMinifier(name) {
    const worker = startWorker();
    assert.deepEqual(await worker.request('init', { name, isHtmlOnly: true, minifierConfig, dirInput: dirTemp, dirOutput: dirTemp }), {});
    return worker;
  }

  it('Times runs and writes the output', async () => {
    const worker = await startMinifier('minifier');
    try {
      assert.deepEqual(await worker.request('load', { fileName: 'a', site: 'https://a.example/' }), {});
      assert.deepEqual(await worker.request('warmup'), {});
      const { time } = await worker.request('run');
      assert.equal(typeof time, 'number');
      assert.ok(time >= 0);
      assert.deepEqual(await worker.request('write'), {});
      assert.equal(await fs.readFile(path.join(dirTemp, 'a.minifier.html'), 'utf8'), '<!doctype html><title>A</title><p>A');
    } finally {
      await worker.close();
    }
  });

  it('Reports errors and keeps handling requests', async () => {
    const worker = await startMinifier('swchtml');
    try {
      assert.match((await worker.request('load', { fileName: 'missing', site: 'https://a.example/' })).error, /ENOENT/);
      assert.deepEqual(await worker.request('load', { fileName: 'a', site: 'https://a.example/' }), {});
      assert.equal(typeof (await worker.request('run')).time, 'number');
    } finally {
      await worker.close();
    }
  });

  it('Starts minify, which loads its package on init', async () => {
    const worker = await startMinifier('minify');
    await worker.close();
  });

  it('Reports a minifier whose package fails to load as failing to start, without affecting other minifiers', async () => {
    const execArgv = ['--import', path.join(dirTemp, 'no-minify.mjs')];
    const workerMinify = startWorker(execArgv);
    const workerHMN = startWorker(execArgv);
    try {
      assert.match((await workerMinify.request('init', { name: 'minify', isHtmlOnly: false, minifierConfig })).error, /Native library not found/);
      assert.deepEqual(await workerHMN.request('init', { name: 'minifier', isHtmlOnly: false, minifierConfig }), {});
    } finally {
      await Promise.all([workerMinify.close(), workerHMN.close()]);
    }
  });

  it('Rejects unknown minifiers', async () => {
    const worker = startWorker();
    try {
      assert.match((await worker.request('init', { name: 'unknown', isHtmlOnly: true, minifierConfig })).error, /Unknown minifier/);
    } finally {
      await worker.close();
    }
  });

  it('Exits once disconnected', async () => {
    const worker = await startMinifier('minimize');
    assert.equal(await worker.close(), 0);
  });
});