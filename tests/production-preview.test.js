import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const PREVIEW_URL = 'http://127.0.0.1:4173';

test('Production preview server serves index.html with 200 OK', async () => {
  const start = Date.now();
  const res = await fetch(`${PREVIEW_URL}/`);
  const elapsed = Date.now() - start;
  assert.equal(res.status, 200, 'Production preview should respond with 200');
  assert.ok(elapsed < 1000, `Response time should be under 1s, was ${elapsed}ms`);

  const html = await res.text();
  assert.ok(html.includes('Lenard Angelo Olajay'), 'Must contain Lenard Angelo Olajay');
  assert.ok(html.includes('Developer / Builder'), 'Must contain Developer / Builder');
  assert.ok(html.includes('AqOne — Offline Maritime Safety'), 'Must contain AqOne build');
  assert.ok(html.includes('Warang — Offline-First Photograph Map'), 'Must contain Warang build');
  assert.ok(html.includes('Project Tabang — Community Disaster Response'), 'Must contain Project Tabang');
  assert.ok(html.includes('ASU DevGuild Founder'), 'Must contain ASU DevGuild');
  assert.ok(html.includes('Bachelor of Science in Information Technology, Major in Software Engineering'), 'Must contain verified degree');
  assert.ok(html.includes('All Verified Credentials &amp; Documents') || html.includes('All Verified Credentials & Documents'), 'Must contain credentials list');
});

test('Production preview serves dist CSS and JS assets with 200 OK', async () => {
  const res = await fetch(`${PREVIEW_URL}/`);
  const html = await res.text();

  const scriptMatch = html.match(/src=["'](\/assets\/[^"']+\.js)["']/);
  assert.ok(scriptMatch, 'Must find production script in HTML');
  const jsRes = await fetch(`${PREVIEW_URL}${scriptMatch[1]}`);
  assert.equal(jsRes.status, 200, 'Production JS bundle must respond with 200');

  const cssMatch = html.match(/href=["'](\/assets\/[^"']+\.css)["']/);
  assert.ok(cssMatch, 'Must find production stylesheet in HTML');
  const cssRes = await fetch(`${PREVIEW_URL}${cssMatch[1]}`);
  assert.equal(cssRes.status, 200, 'Production CSS bundle must respond with 200');
});

test('Production preview serves all public documents and image assets with 200 OK', async () => {
  const html = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');
  
  const assetUrls = new Set();
  const srcMatches = html.matchAll(/src=["'](\/assets\/[^"']+)["']/g);
  for (const m of srcMatches) {
    assetUrls.add(m[1]);
  }
  const hrefMatches = html.matchAll(/href=["'](\/assets\/[^"']+)["']/g);
  for (const m of hrefMatches) {
    assetUrls.add(m[1]);
  }

  for (const urlPath of assetUrls) {
    const fullUrl = `${PREVIEW_URL}${urlPath}`;
    const res = await fetch(fullUrl);
    assert.equal(res.status, 200, `Asset ${urlPath} should resolve with 200 on preview, got ${res.status}`);
  }
});
