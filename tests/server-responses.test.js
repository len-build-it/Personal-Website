import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DEV_URL = 'http://127.0.0.1:5173';

test('Dev server serves index.html with 200 OK and valid content', async () => {
  const res = await fetch(`${DEV_URL}/`);
  assert.equal(res.status, 200, 'Home page should respond with 200');
  const html = await res.text();
  assert.ok(html.includes('Lenard Angelo Olajay'), 'Should contain Lenard Angelo Olajay');
  assert.ok(html.includes('Developer / Builder'), 'Should contain Developer / Builder');
  assert.ok(html.includes('AqOne'), 'Should contain AqOne build');
  assert.ok(html.includes('Warang'), 'Should contain Warang build');
  assert.ok(html.includes('Project Tabang'), 'Should contain Project Tabang build');
});

test('All local asset paths in index.html resolve with 200 OK on dev server', async () => {
  const html = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');
  
  // Extract all src="..." and href="/assets/..."
  const assetUrls = new Set();
  const srcMatches = html.matchAll(/src=["'](\/assets\/[^"']+)["']/g);
  for (const m of srcMatches) {
    assetUrls.add(m[1]);
  }
  const hrefMatches = html.matchAll(/href=["'](\/assets\/[^"']+)["']/g);
  for (const m of hrefMatches) {
    assetUrls.add(m[1]);
  }

  assert.ok(assetUrls.size >= 15, `Found ${assetUrls.size} local assets in markup`);

  for (const urlPath of assetUrls) {
    const fullUrl = `${DEV_URL}${urlPath}`;
    const res = await fetch(fullUrl);
    assert.equal(res.status, 200, `Asset ${urlPath} should resolve with 200, got ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    assert.ok(arrayBuffer.byteLength > 0, `Asset ${urlPath} must not be empty`);
  }
});
