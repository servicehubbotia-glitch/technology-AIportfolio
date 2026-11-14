/* No build dependencies: protect inline JS, locale coverage and local links. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const homepage = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const entries = JSON.parse(homepage.match(/const entries=(\[.*?\]);/s)[1]);
const cases = JSON.parse(homepage.match(/const cases=(\{.*?\});\s*for/s)[1]);
for (const entry of entries) {
  for (const lang of ['en', 'nl', 'es']) assert.ok(typeof entry[lang] === 'string' && entry[lang].trim(), `${entry.selector}: missing ${lang}`);
}
for (const lang of ['nl', 'es']) assert.deepEqual(Object.keys(cases[lang]).sort(), ['botia','creative','dutch','knowledge','marginalia','reintegration']);
for (const lang of ['nl', 'es']) {
  for (const [id, item] of Object.entries(cases[lang])) {
    for (const key of ['title', 'index', 'intro', 'problem', 'proof']) assert.ok(typeof item[key] === 'string' && item[key].trim(), `${lang}/${id}: missing ${key}`);
  }
}
const publicPages = ['index.html','case-studies.html','knowledge-monitor.html','marketing-campaign.html','excel-to-app.html','cv.html','card/index.html','tests/responsive.html'];
let checkedLinks = 0;
for (const page of publicPages) {
  const full = path.join(root, page);
  const text = fs.readFileSync(full, 'utf8');
  for (const [i, match] of [...text.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries()) {
    if (match[1].trim()) new vm.Script(match[1], { filename: `${page}:inline-${i}` });
  }
  const markup = text.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: duplicate id`);
  for (const [, url] of markup.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|\/\/)/.test(url)) continue;
    const [local, hash] = url.split('#');
    const file = local.split('?')[0];
    if (file) assert.ok(fs.existsSync(path.resolve(path.dirname(full), file)), `${page}: missing ${file}`);
    else if (hash && !hash.startsWith('explore-')) assert.ok(ids.includes(hash), `${page}: missing anchor ${hash}`);
    checkedLinks++;
  }
}
console.log(`PASS: ${entries.length} EN/NL/ES entries, six case definitions per translation, inline JavaScript, unique IDs and ${checkedLinks} local references.`);
