// sync-brand.mjs — a czudar-brand/brand-tokens.yaml → src/data/brand.generated.js
// EGYETLEN IGAZSÁGFORRÁS a brand-tokens.yaml. Ez a szkript minden build előtt lefut,
// így az arculat bármely változása (szín, betű, cégnév, munkatárs, elérhetőség)
// AUTOMATIKUSAN átkerül a honlapra újrabuildeléskor.
//
// A tokens-fájl helye a BRAND_TOKENS_PATH env-ből jön; alapértelmezés a repo-gyökér
// brand-tokens.yaml-ja (CI-ben ezt a czudar-brand submodule / checkout adja).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as yamlLoad } from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const tokensPath = process.env.BRAND_TOKENS_PATH || path.join(root, 'brand-tokens.yaml');
const outPath = path.join(root, 'src', 'data', 'brand.generated.js');

function slugify(s) {
  return s.replace(/^dr\.?\s*/i, '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const genJs = path.join(root, 'src', 'data', 'brand.generated.js');
const genCss = path.join(root, 'src', 'styles', 'brand.generated.css');
if (!fs.existsSync(tokensPath)) {
  // CI / publikus repó: a brand-tokens.yaml (érzékeny: bank, adószám) NEM kerül be.
  // Ha a site-biztos generált fájlok megvannak, azokból építünk.
  if (fs.existsSync(genJs) && fs.existsSync(genCss)) {
    console.warn('[sync-brand] brand-tokens.yaml nincs jelen — a meglévő generált arculati fájlokból építünk (CI mód).');
    process.exit(0);
  }
  console.error(`[sync-brand] brand-tokens.yaml nem található (${tokensPath}) és nincs generált fájl sem.`);
  process.exit(1);
}

const T = yamlLoad(fs.readFileSync(tokensPath, 'utf8'));
const c = T.colors || {};
const hex = (k, fallback) => (c[k] && c[k].hex) || fallback;

const data = {
  _generatedAt: new Date().toISOString(),
  _source: 'czudar-brand/brand-tokens.yaml',
  brand: {
    name: { hu: T.brand.name_hu, en: T.brand.name_en, zh: T.brand.name_zh },
    networkLabel: T.brand.network_label,
    networkParent: { latin: 'Beijing DHH Law Firm', zh: T.brand.network_parent_zh || '北京德和衡' },
    networkFooter: (T.documents && T.documents.network_footer) || 'DHH Budapest Office · 北京德和衡',
    tagline: {
      hu: T.brand.tagline_hu,
      en: T.brand.tagline_en,
      // a 中文 tagline nincs a tokenekben (szerkesztői tartalom) — fallback:
      zh: T.brand.tagline_zh || '量身定制的法律解决方案 —— 高效、优化的法律保护。',
    },
    mottoZh: T.brand.motto_zh || null,
  },
  colors: {
    navy: hex('navy', '#002A6C'), navy2: '#001B47', red: hex('red', '#C7000A'),
    gold: hex('gold', '#9C7B3E'), goldSoft: hex('gold_soft', '#C6A15C'),
    ivory: hex('ivory', '#F6F3EC'), stone: hex('stone', '#EBE6DA'), line: hex('line', '#D9D3C5'),
    slate: hex('slate', '#565C68'), mist: hex('mist', '#8A8F99'), ink: hex('ink', '#16181D'),
  },
  fonts: {
    cinzel: (T.typography?.wordmark_titles?.family) || 'Cinzel',
    display: (T.typography?.display?.family) || 'Cormorant Garamond',
    body: (T.typography?.body?.family) || 'Libre Franklin',
  },
  office: {
    hqAddress: T.office.hq,
    branchAddress: T.office.branch,
    phone: T.office.phone_landline,
    phoneHref: (T.office.phone_landline || '').replace(/[^+0-9]/g, ''),
    email: T.office.email_general,
    web: T.office.web,
    bar: T.office.bar,
    barRegNo: String(T.office.bar_reg_no),
    // taxNo és bankadat SZÁNDÉKOSAN kimarad — nem kell az oldalnak, és nem kerülhet publikus repóba.
  },
  peopleTokens: (T.people || []).map((p) => ({
    slug: slugify(p.name_hu),
    name: { hu: p.name_hu, en: p.name_en, zh: p.name_zh || p.name_en },
    title: { hu: p.title_hu, en: p.title_en, zh: p.title_zh || p.title_en },
    email: p.email,
    mobile: p.mobile || null,
  })),
};

const banner = `// AUTOMATIKUSAN GENERÁLT — NE SZERKESZD KÉZZEL.\n` +
  `// Forrás: ${data._source} · generálva: ${data._generatedAt}\n` +
  `// Újragenerálás: npm run sync (a build ezt automatikusan lefuttatja).\n`;
fs.writeFileSync(outPath, banner + `export default ${JSON.stringify(data, null, 2)};\n`, 'utf8');

// CSS-változók a tokenekből — így a szín/betű változása is automatikusan átkerül.
const cssPath = path.join(root, 'src', 'styles', 'brand.generated.css');
const col = data.colors, f = data.fonts;
const css = `/* AUTOMATIKUSAN GENERÁLT a brand-tokens.yaml-ból — ne szerkeszd. */\n:root{\n` +
  `  --navy:${col.navy};--navy2:${col.navy2};--red:${col.red};\n` +
  `  --gold:${col.gold};--gold-soft:${col.goldSoft};\n` +
  `  --ivory:${col.ivory};--stone:${col.stone};--line:${col.line};\n` +
  `  --slate:${col.slate};--mist:${col.mist};--ink:${col.ink};\n` +
  `  --cinzel:'${f.cinzel}',Georgia,serif;\n` +
  `  --display:'${f.display}',Georgia,serif;\n` +
  `  --sans:'${f.body}',Arial,Helvetica,sans-serif;\n` +
  `  --cjk:'Noto Serif SC',serif;--cjks:'Noto Sans SC',sans-serif;\n}\n`;
fs.writeFileSync(cssPath, css, 'utf8');
console.log(`[sync-brand] OK → ${path.relative(root, outPath)} + ${path.relative(root, cssPath)} (${data.peopleTokens.length} munkatárs, forrás: ${path.relative(root, tokensPath)})`);
