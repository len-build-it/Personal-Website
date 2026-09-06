import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

test('Public resume exists and is readable', () => {
  const resumePath = path.join(projectRoot, 'public/assets/documents/Lenard-Olajay-Resume-Updated.pdf');
  assert.ok(fs.existsSync(resumePath), 'Resume PDF must exist in public assets');
  const stat = fs.statSync(resumePath);
  assert.ok(stat.size > 10000, 'Resume PDF must not be empty');
});

test('All certificate preview images exist and are under 200 KB', () => {
  const imagesDir = path.join(projectRoot, 'public/assets/images');
  assert.ok(fs.existsSync(imagesDir), 'Images directory must exist');
  
  const expectedImages = [
    'cert-aifest-aquanons.webp',
    'cert-ictweek-programming.webp',
    'cert-komsai-tabang.webp',
    'cert-dict-python.webp',
    'cert-dict-cybersecurity.webp',
    'cert-wvsu-aws.webp',
    'cert-wvsu-ai.webp',
    'cert-energy-nexus.webp',
    'cert-digital-storytelling.webp',
    'cert-datacamp-openai.webp',
    'cert-datacamp-python.webp',
    'cert-datacamp-java-beginner.webp',
    'cert-datacamp-java-intermediate.webp',
    'cert-aifest-workshop-human-ai.webp',
    'cert-aifest-workshop-tech-arch.webp',
    'cert-aifest-webinar-agile.webp',
    'project-aqone.webp',
    'project-tabang.webp',
    'project-warang.webp',
    'idpic.jpg'
  ];

  for (const imgName of expectedImages) {
    const imgPath = path.join(imagesDir, imgName);
    assert.ok(fs.existsSync(imgPath), `Image ${imgName} must exist`);
    const stat = fs.statSync(imgPath);
    assert.ok(stat.size <= 200 * 1024, `Image ${imgName} must be <= 200KB, was ${stat.size / 1024}KB`);
  }
});

test('index.html contains essential semantic sections and no private data', () => {
  const htmlPath = path.join(projectRoot, 'index.html');
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist');
  const html = fs.readFileSync(htmlPath, 'utf-8');

  // Must have skip link, single H1, and main sections
  assert.match(html, /<a\s+[^>]*href=["']#main-content["']/i, 'Must contain skip link to main content');
  assert.match(html, /<h1[^>]*>Lenard Angelo Olajay<\/h1>/i, 'Must contain H1 with full name');
  assert.match(html, /id=["']builds["']/i, 'Must contain builds section');
  assert.match(html, /id=["']background["']/i, 'Must contain background section');
  assert.match(html, /id=["']credentials["']/i, 'Must contain credentials section');
  assert.match(html, /id=["']contact["']/i, 'Must contain contact section');

  // Privacy Policy in footer
  assert.match(html, /Privacy Policy:/i, 'Must contain Privacy Policy in footer');

  // Contact links
  assert.match(html, /mailto:olajaylenardangelo@gmail\.com/i, 'Must contain valid mailto');
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/lenard-angelo-olajay-35b083366\/?/i, 'Must contain LinkedIn link');
  assert.match(html, /https:\/\/github\.com\/len-build-it/i, 'Must contain GitHub link');
  assert.match(html, /https:\/\/www\.facebook\.com\/Ark\.Dcl\/?/i, 'Must contain Facebook link');
  assert.match(html, /https:\/\/www\.instagram\.com\/len\.build\.it\/?/i, 'Must contain Instagram link');
  assert.match(html, /https:\/\/ph\.jobstreet\.com\/profiles\/lenardangelo-olajay-n2tQmgnjYd/i, 'Must contain JobStreet link');

  // Privacy: Private phone number must NOT be present
  assert.doesNotMatch(html, /09944891004/, 'Must not leak private phone number');
});
