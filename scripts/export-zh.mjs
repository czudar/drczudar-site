// Teljes kínai (中文) tartalom exportja DeepSeek-review-hoz.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const { ui, home, practices, network } = await import(pathToFileURL(path.join(root, 'src/data/content.js')).href);

let out = [];
const H = (s) => out.push('\n## ' + s + '\n');
const L = (s) => out.push(s);

out.push('# Czudar DHH — a honlap teljes kínai (中文) tartalma — DeepSeek-review');
out.push('');
out.push('Ez a fájl a drczudar.hu tervezett honlap MINDEN kínai szövegét tartalmazza, hogy egyben átnézhető legyen: nyelvtan, szakmai regiszter, ázsiai kulturális kontextus. Kérjük „eredeti → javasolt" párokban a javaslatokat.');

H('0) Cégnevek, regisztráció, névhasználati szabály (fix adatok)');
L('- Bejegyzett/megjelenő cégnév (ZH): 北京德和衡（布达佩斯）律师事务所');
L('- Rövid latin márkanév: Czudar DHH / CZUDAR DHH LAW FIRM');
L('- Hálózati anyacég (ZH): 北京德和衡律师事务所 (angol: DeHeng Law Offices / Beijing DHH Law Firm)');
L('- Mottó (ZH, jelenleg hagyományos írásjegy): 和實生物，同則不繼 (a《国语·郑语》-ból)');
L('- Munkatárs-nevek (a kínai oldalon jelenleg latin betűvel, nyugati sorrendben, „dr." előtaggal):');
L('  - dr. Balázs Czudar — 创始合伙人、主任律师');
L('  - dr. Domokos Simon — 律师');
L('  - dr. Anna Lőrincz-Csiri — 律师');
L('- KÉRDÉS a review-hoz: a kínai közönségnek egyszerűsített (简体) írásjegyre váltsunk-e a mottónál/általában, és a magyar neveket adjuk-e meg kínai átírással is? Kérünk javaslatot a következetes név- és cégnév-rendszerre.');

H('1) Navigáció, felület-feliratok, gombok (ui.zh)');
const u = ui.zh;
L('- Menü: ' + Object.values(u.nav).join(' / '));
L('- „Ugrás a tartalomra": ' + u.skipToContent);
L('- Fő CTA: ' + u.contactCta);
L('- „Tovább": ' + u.readMore);
L('- Budapesti iroda: ' + u.officeBudapest);
L('- Balassagyarmati iroda: ' + u.officeBalassagyarmat);
L('- Nyelv neve: ' + u.langName);

H('2) Nyitóoldal — hero, értékek, bemutatkozás, pro bono (home.zh)');
const h = home.zh;
L('### Hero'); L('- Cím: ' + h.heroTitle); L('- Alcím: ' + h.heroSub);
L('### Értékek (' + h.valuesTitle + ')');
h.values.forEach(v => L(`- ${v.t}: ${v.d}`));
L('### Bemutatkozás (' + h.aboutTitle + ')');
h.aboutBody.forEach(p => L('- ' + p));
L('### Pro Bono (' + h.proBonoTitle + ')'); L('- ' + h.proBonoBody);
L('### Egyéb címek'); L(`- Szakterületek: ${h.practiceTitle} · Munkatársak: ${h.teamTitle} · Blog: ${h.blogTitle}`);

H('3) DHH hálózati sáv (network.zh) — ÚJ');
const n = network.zh;
L('- Eyebrow: ' + n.eyebrow);
L('- Cím: ' + n.title);
L('- Szlogen: ' + n.tagline);
L('- Szöveg: ' + n.body);
L('- Statisztikák: ' + n.stats.map(s => `${s.n} ${s.l}`).join(' · '));
L('- CTA: ' + n.cta);

H('4) Szakterületek (practices, zh)');
practices.forEach(pr => L(`- ${pr.zh[0]}: ${pr.zh[1]}`));

// Blog ZH
const blogDir = path.join(root, 'src/content/blog');
const zhFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.zh.md')).sort();
H('5) Blogcikkek (中文) — ' + zhFiles.length + ' db');
for (const f of zhFiles) {
  const raw = fs.readFileSync(path.join(blogDir, f), 'utf8');
  out.push('\n---\n\n### Fájl: ' + f + '\n');
  out.push(raw.trim());
}

fs.writeFileSync('/mnt/user-data/outputs/zh-content-review.md', out.join('\n'), 'utf8');
console.log('OK → zh-content-review.md (' + zhFiles.length + ' blogcikk, ' + practices.length + ' szakterület)');
