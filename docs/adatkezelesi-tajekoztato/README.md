# Adatkezelési tájékoztató — dokumentáció

Háttéranyag jövőbeli munkamenetekhez. A honlapra nem kerül ki.

## Hatályos változat: 2026/2 (hatályos 2026-10-12-től)

- Jóváhagyás: MP, 2026-10-11 (LEXORA ACT-81); négynyelvű kiadás elrendelve.
- Magyar forrás: Google Drive, „Adatkezelési tájékoztató – VÉGLEGES 2026/2 (honlapra)”, fájl-azonosító `13zRWWun9B0X35JPHoSLTA3nq3YhJLYN5bn00JZFSzsQ`. A honlapra a „# Adatkezelési tájékoztató” címtől kezdődő rész került; a „BELSŐ FEJLÉC” nem.
- Előző változat: „Adatvédelmi tájékoztató”, hatályos 2026-09-20-tól (a git-történetben: `src/pages/**/adatvedelmi-tajekoztato.astro`).

## Oldalak és címek

| Nyelv | Cím | URL | Fájl |
|---|---|---|---|
| HU | Adatkezelési tájékoztató | `/adatkezelesi-tajekoztato/` | `src/pages/adatkezelesi-tajekoztato.astro` |
| EN | Data Processing Notice | `/en/data-processing-notice/` | `src/pages/en/data-processing-notice.astro` |
| ZH | 数据处理告知书 | `/zh/data-processing-notice/` | `src/pages/zh/data-processing-notice.astro` |
| KO | 개인정보 처리 안내 | `/ko/data-processing-notice/` | `src/pages/ko/data-processing-notice.astro` |

- A cím és az útvonal egyetlen forrása: `notice` a `src/data/content.js`-ben (lábléc, cookie-sáv, hreflang, nyelvváltó innen dolgozik).
- A régi `/…/adatvedelmi-tajekoztato` címek (mind a négy nyelven) átirányítanak: `redirects` az `astro.config.mjs`-ben; a statikus build meta-refresh + canonical + noindex oldalt készít.
- A négy oldal HTML-váza azonos (ugyanazok az elemek, `id`-k: `s1` … `s12`, `s4-1` … `s4-10`, `s4-5-a/b/c`). Módosításnál mind a négyet együtt kell változtatni.

## Szabályok

1. A magyar szöveg az MP által jóváhagyott szöveg SZÓ SZERINTI átvétele. Tartalmi módosítás csak új jóváhagyott szöveg alapján; új változatnál a fejsor (hatály, verzió, előző változat) is frissítendő.
2. A fordítások forrása mindig a magyar szöveg; a fordításba nem kerül, ami abban nincs. Megengedett kivétel: a le nem fordított cég- és hatóságnevek melletti zárójeles magyarázat, illetve a magyar szakkifejezés zárójeles megadása.
3. Cég- és hatóságneveket nem fordítunk (az adatkezelő neve az 1. pontban magyarul áll, utána zárójelben a nyelvi arculati név).
4. Jogszabályhely-forma:
   - EN: „Section 53(3) of Act LXXVIII of 2017 on Attorneys-at-Law (Üttv.)”, utána „Section 53(3) Üttv.”; „Article 6(1)(b) GDPR”
   - ZH: 《律师执业法》（2017年第LXXVIII号法律）第53条第(3)款；GDPR 第6条第(1)款(b)项
   - KO: 「변호사 업무에 관한 2017년 법률 제LXXVIII호」(Üttv.) 제53조 제(3)항; GDPR 제6조 제(1)항 (b)호
5. Törzsadatok: ahol az arculati token (`brand.generated.js`) megegyezik a jóváhagyott szöveggel, a token szolgáltatja (név, aliroda címe, kamara + szám, e-mail, telefon). A székhely címe literál, mert a token („Szemere u. 23. I/1.”) eltér a jóváhagyott szövegtől („Szemere utca 23. I/1.”); egyiket sem írtuk felül. Az adószám és a cégkapu nincs a tokenekben, ezért literál.
6. A cookie-sáv és a térkép-consent működése a tájékoztatótól független (`Base.astro`); a 4.10. pont „Cookie-beállítások” / “Cookie settings” / “Cookie 设置” / “쿠키 설정” megnevezése a lábléc címkéjével egyezik — ha a címke változik, a szöveget követni kell.

## Fordítások állapota (2026/2)

EN/ZH/KO: gépi (MI) jogi fordítás, a fordítótól független MI-lektorálással és a számok, határidők, jogszabályhelyek egyeztetésével. Anyanyelvi jogász nem látta. Anyanyelvi lektornak elsőként jelzendő:

- **EN:** „ügyvédi titok” = legal professional privilege (a common law fogalom szűkebb); „irodagondnok” = practice custodian; belső utalások „Section 4.5” formában; „AI” rövidítés az 5. pontban.
- **ZH:** 安全凭证 (biztonsági okmány); 律师副署 (ellenjegyzés); 地区法院（törvényszék）; 替代律师 (helyettes ügyvéd); 其他数据处理者 (további adatfeldolgozó); 遗嘱处分 (végintézkedés); a „Sütik (cookie-k)” zárójele kínaiul elmaradt (tautológia).
- **KO:** 부서(ellenjegyzés); 수권대리인 (meghatalmazott); 대리 변호사 (helyettes ügyvéd); 보안 서식; 변호사 예치; 전자송달함(Cégkapu); 일회성 거래(ügyleti megbízás); az „N년째 되는 해의 3월 31일” selejtezési határidők (a magyar „megszűnésétől számított N. év” szerkezetet követi).

A koreai cím (개인정보 처리 안내) és jogszabályhely-forma MP-döntés; felülírja a `docs/koreai-valtozat` korábbi sorait.
