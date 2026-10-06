// Runs one local minifier in its own process, so that minifiers can’t affect each other’s times;
// executes one request at a time from the parent (`benchmark.js`), which interleaves all
// minifiers’ runs so that system load affects them alike

import fs from 'fs/promises';
import path from 'path';
import { createMinifiers } from './minifiers.js';

let name;
let minifier;
let dirInput;
let dirOutput;
let fileName;
let site;
let data;
let result;

const handlers = {
  init(message) {
    ({ name, dirInput, dirOutput } = message);
    minifier = createMinifiers(message)[name];
    if (!minifier) throw new Error(`Unknown minifier: ${name}`);
  },

  // Read a site’s input once, so that reading doesn’t affect timed runs
  async load(message) {
    ({ fileName, site } = message);
    result = undefined;
    data = await fs.readFile(path.join(dirInput, fileName + '.html'), minifier.isBufferInput ? undefined : 'utf8');
  },

  // Untimed run (JIT warm-up, lazy-loaded dependencies, leftover garbage)
  async warmup() {
    result = await minifier.minify(data, site);
  },

  async run() {
    const startTime = performance.now();
    result = await minifier.minify(data, site);
    return { time: performance.now() - startTime };
  },

  async write() {
    await fs.writeFile(path.join(dirOutput, fileName + '.' + name + '.html'), result);
  }
};

process.on('message', async function ({ id, type, ...message }) {
  try {
    const response = await handlers[type](message);
    process.send({ id, ...response });
  } catch (err) {
    process.send({ id, error: err?.message || String(err) });
  }
});