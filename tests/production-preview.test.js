import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const PREVIEW_URL = process.env.PREVIEW_URL || 'http://127.0.0.1:4173';

test('Production SEO identifies Lenard and exposes consistent crawlable URLs', async () => {
  const canonical = 'https://lenardangeloolajay.onrender.com/';
  const response = await fetch(`${PREVIEW_URL}/`);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.doesNotMatch(response.headers.get('x-robots-tag') || '', /noindex|none/i);
  assert.doesNotMatch(html, /<meta[^>]+content=["'][^"']*\b(?:noindex|none)\b/i);
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`));
  assert.match(html, /<title>Lenard Angelo Olajay \| Developer &amp; Builder Portfolio<\/title>/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  const data = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const website = data['@graph'].find(item => item['@type'] === 'WebSite');
  const profile = data['@graph'].find(item => item['@type'] === 'ProfilePage');
  assert.equal(website.url, canonical);
  assert.equal(profile.url, canonical);
  assert.equal(profile.isPartOf['@id'], website['@id']);
  assert.equal(profile.mainEntity['@type'], 'Person');
  assert.equal(profile.mainEntity.name, 'Lenard Angelo Olajay');
  assert.equal(profile.mainEntity.url, canonical);
  for (const url of profile.mainEntity.sameAs) {
    assert.ok(html.includes(`href="${url}"`), `Identity link must match visible content: ${url}`);
  }
  assert.ok(html.includes(`<meta property="og:url" content="${canonical}">`));
  assert.ok(html.includes(`<meta property="og:image" content="${profile.mainEntity.image}">`));
  const portrait = await fetch(`${PREVIEW_URL}${new URL(profile.mainEntity.image).pathname}`);
  assert.equal(portrait.status, 200);
  assert.match(portrait.headers.get('content-type'), /^image\//);
  const robots = await fetch(`${PREVIEW_URL}/robots.txt`);
  assert.equal(robots.status, 200);
  assert.match(robots.headers.get('content-type'), /^text\/plain/);
  assert.equal((await robots.text()).replace(/\r\n/g, '\n').trim(), `User-agent: *\nAllow: /\n\nSitemap: ${canonical}sitemap.xml`);
  const sitemap = await fetch(`${PREVIEW_URL}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  assert.match(sitemap.headers.get('content-type'), /xml/);
  const xml = await sitemap.text();
  assert.ok(xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'));
  assert.deepEqual([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]), [canonical]);
});

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
  const assetMatches = html.matchAll(/(?:src|href|data-thumb)=["'](\/assets\/[^"']+)["']/g);
  for (const m of assetMatches) {
    assetUrls.add(m[1]);
  }

  for (const urlPath of assetUrls) {
    const fullUrl = `${PREVIEW_URL}${urlPath}`;
    const res = await fetch(fullUrl);
    assert.equal(res.status, 200, `Asset ${urlPath} should resolve with 200 on preview, got ${res.status}`);
  }
});
