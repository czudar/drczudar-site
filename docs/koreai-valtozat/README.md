# Koreai (한국어) nyelvi változat — dokumentáció · 2026-10-11

> Az adatkezelési tájékoztató (2026/2) külön dokumentációja: `docs/adatkezelesi-tajekoztato/README.md`. A lektori napló és a szószedet a régi `ko/adatvedelmi-tajekoztato.astro` fájlra hivatkozik; az oldal új helye `src/pages/ko/data-processing-notice.astro`.

A `/ko/` nyelvi változat háttéranyaga jövőbeli munkamenetekhez. A honlapra nem kerül ki (az Astro csak a `src/` és `public/` tartalmát építi).

- `szoszedet.md` — magyar–koreai szószedet és konvenciók (hatóságok, jogszabályok, nevek, összegek). Minden sor jelölve: A = koreai forrásból igazolt, R = átírási szabály szerinti, B = legjobb megfeleltetés.
- `kutatas.md` — a DHH koreai megnevezése, koreai ügyvédi honlapok konvenciói, GDPR-terminológia.
- `lektori-naplo.md` — a független lektorok változásnaplói és a nyitva hagyott kétségek.

## Rögzített döntések (új koreai szövegnél is ezek érvényesek)

| Tárgy | Döntés | Indok |
|---|---|---|
| Irodanév | **Czudar DHH 법률사무소** | a 법무법인 koreai jogi forma, kerülendő |
| Anyairoda | **베이징 DHH 법률사무소(北京德和衡)**, utána „DHH” | a DHH-nak nincs hivatalos koreai neve |
| Tilos | „더헝”, „DeHeng” | ez a 德恒 (DeHeng Law Offices), másik iroda |
| Regiszter | 합니다체 | koreai ügyvédi irodák gyakorlata |
| Az iroda munkatársai, társszerzők | latin betű, pl. „Czudar Balázs 변호사” | |
| Magyar közszereplők, helynevek | koreai átírási szabály, magyar névsorrend (머저르 페테르; 벌러셔저르머트) | |
| Titulusok | 설립자 겸 대표변호사 / 변호사 / ügyvédjelölt = 변호사 시보 | a „수습 변호사” Koreában már szakvizsgázott |
| Ügyvédi titok | (변호사의) 직무상 비밀 | a szószedet 10. részének „변호사 비밀” sora elavult |
| NAIH | 헝가리 국가 개인정보보호·정보자유청(NAIH) | a szószedet 2. részének sora elavult |
| fellebbezés (Ákr.) | 행정상 불복신청(fellebbezés) | a szószedet „이의신청” sora elavult |
| GDPR | 컨트롤러(개인정보처리자), 프로세서(수탁자), 정보주체, 감독기관 | a koreai adatvédelmi hatóság fordítása |
| Tájékoztató címe | **개인정보 처리 안내** (önhivatkozás: 본 안내); a korábbi „개인정보 처리방침” elavult | MP-döntés, 2026-10-11 (2026/2-es Adatkezelési tájékoztató) |
| Jogszabályhely | 「변호사 업무에 관한 2017년 법률 제LXXVIII호」(Üttv.) 제53조 제(3)항; GDPR 제6조 제(1)항 (b)호 | MP-döntés, 2026-10-11; a szószedet korábbi „변호사 활동에 관한 법률” sora elavult |
| Belső utalás a tájékoztatóban | „위 4.1.”, „아래 9.” (nem 제…항) | ne keveredjen a jogszabályi 항-nal |
| Címzettnek átadás / harmadik országba továbbítás | 제공 / 이전 | koreai adatvédelmi szóhasználat |
| Bírság | közigazgatási = 과징금; eljárási = 절차 과태료; 벌금 csak büntetőjogi | |
| Összegek | millió = 100만, milliárd = 10억; „포린트”, „유로” | |
| Cikkek célközönsége | marad az eredeti | fordítás, nem átírás |
| Forrás | mindig a magyar szöveg; a fordításba semmi nem kerül, ami abban nincs | |

## Új cikk koreai változata

`src/content/blog/<kulcs>.ko.md`, frontmatter: `lang: "ko"`, a `key`, `date`, `author`, `coauthor` változatlan. Fordítás a magyarból a szószedettel, utána a fordítótól független összevetés a magyar eredetivel, és a számok, dátumok, jogszabályhelyek gépi egyeztetése.

## Arculati tokenek

A `brand-tokens.yaml` nem tartalmaz koreai mezőket; a `scripts/sync-brand.mjs` fallbackkel dolgozik. Felvehető: `brand.name_ko`, `brand.tagline_ko`, munkatársanként `name_ko`, `title_ko`.

## Mi nem történt meg

Koreai anyanyelvű jogász nem olvasta át a szöveget; MI-fordítás, MI-lektorálással. A KOTRA hírportál, a koreai nagykövetség, a koreai jogszabály-portál és a KISA oldalai géppel nem voltak olvashatók, ezért a szószedet sok sora B jelölésű.
