import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createMinifiers } from '../src/minifiers.js';

const dirRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const minifierConfig = JSON.parse(await fs.readFile(path.join(dirRoot, 'html-minifier-next.config.json'), 'utf8'));
const site = 'https://example.com/';
const html = `<!DOCTYPE html>
<html>
<head>
<title>Test</title>
<style>
  p { color: #ff0000; }
</style>
</head>
<body>
  <!-- Comment -->
  <p class="a">  Hello,   world  </p>
<script>
  const message = "Hi";
  console.log(message);
</script>
</body>
</html>
`;

async function minifyAll(isHtmlOnly) {
  const outputs = {};
  for (const [name, minifier] of Object.entries(createMinifiers({ isHtmlOnly, minifierConfig }))) {
    outputs[name] = String(await minifier.minify(minifier.isBufferInput ? Buffer.from(html) : html, site));
  }
  return outputs;
}

describe('createMinifiers', () => {
  it('Provides all local minifiers', () => {
    const minifiers = createMinifiers({ isHtmlOnly: true, minifierConfig });
    assert.deepEqual(Object.keys(minifiers), ['swchtml', 'minifier', 'htmlnano', 'minifyhtml', 'minimize']);
  });

  for (const isHtmlOnly of [true, false]) {
    it(`Reduces the input with every minifier (${isHtmlOnly ? 'HTML' : 'max'} mode)`, async () => {
      for (const [name, output] of Object.entries(await minifyAll(isHtmlOnly))) {
        assert.ok(output.length < html.length, name);
        assert.ok(output.includes('Hello, world'), name);
      }
    });
  }

  it('Leaves CSS and JavaScript unminified in HTML mode', async () => {
    for (const [name, output] of Object.entries(await minifyAll(true))) {
      assert.ok(output.includes('p { color: #ff0000; }'), name);
      assert.ok(output.includes('console.log(message)'), name);
    }
  });

  it('Minifies CSS and JavaScript in max mode (except for Minimize, which only minifies HTML)', async () => {
    const { minimize, ...outputs } = await minifyAll(false);
    for (const [name, output] of Object.entries(outputs)) {
      assert.ok(output.includes('p{color:red}'), name);
      assert.ok(!output.includes('console.log(message)'), name);
    }
    assert.ok(minimize.includes('p { color: #ff0000; }'));
  });
});