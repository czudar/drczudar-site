// dist → dist-artifact: abszolút útvonalak (/x) átírása relatívra, hogy file:// alatt
// és artifactban is működjön. Route-linkekhez index.html-t fűz.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'dist');
const out = path.resolve(process.argv[3] || 'dist-artifact');

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

// tiszta másolat
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(root, out, { recursive: true });

const htmlFiles = walk(out).filter((f) => f.endsWith('.html'));
const hasExt = (s) => /\.[a-z0-9]{2,5}(\?|#|$)/i.test(s);

for (const file of htmlFiles) {
  const rel = path.relative(out, file);
  const depth = rel.split(path.sep).length - 1; // index.html → 0
  const prefix = depth === 0 ? './' : '../'.repeat(depth);
  let html = fs.readFileSync(file, 'utf8');

  html = html.replace(/(href|src)="(\/[^"]*)"/g, (m, attr, url) => {
    if (url.startsWith('//')) return m;            // protokoll-relatív
    // fragment/query leválasztása, hogy a /#about ne váljon #about/index.html-lé
    const mm = url.match(/^([^#?]*)([#?].*)?$/);
    let pathpart = mm[1];
    const suffix = mm[2] || '';
    let target = pathpart.slice(1);                  // vezető / le
    if (target === '') target = 'index.html';        // '/' vagy '/#x' → index.html
    else if (target.endsWith('/')) target += 'index.html';
    else if (!hasExt(target)) target += '/index.html'; // route → mappa/index.html
    return `${attr}="${prefix}${target}${suffix}"`;
  });

  fs.writeFileSync(file, html, 'utf8');
}
console.log(`[make-artifact] ${htmlFiles.length} HTML átírva → ${path.relative(process.cwd(), out)}`);
