# Korean (ko-KR) site copy review — drczudar-site

Reviewer pass of 2026-10-11. Scope: `ko:` entries in `src/data/content.js`, `src/layouts/Base.astro`, `src/components/Home.astro`, `src/pages/ko/**` (blog articles excluded), `src/data/brand.generated.js` (+ the `KO_TITLES` fallback in `scripts/sync-brand.mjs`). Compared against the Hungarian (authoritative) and English. No repo file was modified.

Format: file — current text (verbatim) → proposed → reason → severity.

Overall: no overclaim versus the Hungarian was found (languages served, years of experience and network figures all match the HU; `10년이 넘는 경험` is in fact more conservative than the EN "decades"). One must-fix (a professional-title issue), 17 should-fix, 16 optional.

---

## A. Must-fix

1. `src/data/content.js` (peopleContent, lorincz-csiri-anna) and `scripts/sync-brand.mjs` (`KO_TITLES`)
   - Current: `2021년 수습 변호사로 본 사무소에 합류하였으며, 2025년 변호사 자격시험에 합격하였습니다.` / `'ügyvédjelölt': '수습 변호사'`
   - Proposed: `2021년 변호사 시보(ügyvédjelölt)로 본 사무소에 합류하였으며, 2025년 변호사 자격시험에 합격하였습니다.` / `'ügyvédjelölt': '변호사 시보'`
   - Reason: in Korea a `수습 변호사` is someone who has already passed the bar and is in the mandatory post-qualification training period. A Hungarian ügyvédjelölt has not passed the bar exam. As written, the sentence calls her a 변호사 four years before the exam it then mentions — internally contradictory for a Korean reader and an overstatement of professional status. `변호사 시보` is the term Korean texts use for German/Austrian pre-qualification trainees; `수습 법조인` is an acceptable alternative. The glossary entry (glossary-B line 431, confidence B) should be changed too, so the blog articles do not repeat it.
   - Severity: must-fix

---

## B. Should-fix

2. `src/pages/ko/blog/index.astro` (meta description)
   - Current: `Czudar DHH 법률사무소의 전문 발간 자료: 헝가리 내 외국인 투자, 행정 규제 집행, 국제 계약 및 헝가리 기업법.`
   - Proposed: `Czudar DHH 법률사무소의 발간 자료: 중국 기업의 헝가리 투자, 행정 당국의 규제 집행, 국제 계약, 헝가리 기업법무.`
   - Reason: HU says `kínai befektetések` (Chinese investment); the KO silently generalises to "foreign investment". If that was a deliberate choice for the Korean audience it needs an explicit decision, because the articles themselves are about Chinese investors. `헝가리 기업법` is not a Korean term for `üzleti jog`; `기업법무` is. `전문 발간 자료` is redundant.
   - Severity: should-fix

3. `src/pages/ko/adatvedelmi-tajekoztato.astro` §2.3
   - Current: `지도는 <strong>기본적으로 표시되지 않으며</strong>, 귀하가 쿠키 배너 또는 지도 자리에 표시되는 버튼을 클릭하여 명시적으로 동의한 경우에만 표시됩니다.`
   - Proposed: `지도는 <strong>기본적으로 불러오지 않으며</strong>, 귀하가 쿠키 배너 또는 지도 자리에 표시되는 버튼을 클릭하여 명시적으로 동의한 경우에만 불러와 표시합니다.`
   - Reason: HU `nem töltődik be` = is not loaded. The data-protection point is that no request goes to Google before consent; "not displayed" is weaker and technically a different statement. §9 of the same page already says `로드되지 않으며`.
   - Severity: should-fix

4. `src/data/content.js` (cookie.message)
   - Current: `삽입된 Google 지도는 귀하가 동의하신 경우에만 표시되며, 이 경우 Google이 쿠키를 설정할 수 있습니다.`
   - Proposed: `삽입된 Google 지도는 귀하가 동의하신 경우에만 불러오며, 이 경우 Google이 쿠키를 설정할 수 있습니다.`
   - Reason: same as item 3 (`töltődik be`); also matches the button label `지도 불러오기` and `cookie.mapNotice`.
   - Severity: should-fix

5. `src/pages/ko/adatvedelmi-tajekoztato.astro` §9 (two places)
   - Current: `<strong>귀하의 동의 없이는 로드되지 않으며</strong>` and `삽입된 콘텐츠가 로드되고`
   - Proposed: `<strong>귀하의 동의 없이는 불러오지 않으며</strong>` and `삽입된 콘텐츠를 불러오고`
   - Reason: the page mixes three verbs for the same act (`표시`, `로드`, `불러오기`). The UI button is `지도 불러오기`; use that verb throughout.
   - Severity: should-fix

6. `src/pages/ko/adatvedelmi-tajekoztato.astro` §2.3, §2.4, §2.5, §9 (four places)
   - Current: `Google의 개인정보처리방침이 적용됩니다` / `자체 개인정보처리방침에 따라` / `해당 서비스 제공자의 개인정보처리방침이 적용됩니다` / `해당 서비스 제공자의 개인정보처리방침 및 쿠키 정책이 적용됩니다`
   - Proposed: replace `개인정보처리방침` with `개인정보 처리방침` in all four.
   - Reason: the decided spelling (page title, footer label, cookie link) is `개인정보 처리방침` with a space; the body uses the unspaced form.
   - Severity: should-fix

7. `src/pages/ko/adatvedelmi-tajekoztato.astro` §6 (rights list)
   - Current: `본인의 개인정보에 대한 열람;` / `정정(부정확한 정보의 수정, 불완전한 정보의 보완);` / `삭제(‘잊힐 권리’);` / `처리의 제한;` / `정당한 이익에 근거한 처리에 대한 반대;` / `개인정보 이동;`
   - Proposed: `본인의 개인정보에 대한 열람권` / `정정권(부정확한 정보의 수정, 불완전한 정보의 보완)` / `삭제권(‘잊힐 권리’)` / `처리 제한권` / `정당한 이익에 근거한 처리에 반대할 권리` / `개인정보 이동권` — no trailing semicolons; the last item keeps its closing period.
   - Reason: the semicolon is not a Korean punctuation mark; it was carried over from the Hungarian list. The introductory sentence says `다음의 권리를 행사할 수 있습니다`, so each item should name a right; the proposed forms are the ones in gdpr-C.md (열람권, 정정권, 삭제권, 반대할 권리, 개인정보 이동권).
   - Severity: should-fix

8. `src/pages/ko/adatvedelmi-tajekoztato.astro` (honorific consistency, whole page)
   - Current (with -시-): `연락하시는 경우` (§2.1), `컨트롤러에게 하실 수 있습니다` (§1), `제출하실 수 있습니다` (§6), `판단하시는 경우` (§7) — versus (without) `귀하가 제공한 정보`, `입력한 정보`, `동의한 경우에만`, `철회할 수 있습니다`, `행사할 수 있습니다`, `제기할 수 있습니다`, `클릭한 경우에만`.
   - Proposed: drop -시- in the four places: `연락하는 경우`, `컨트롤러에게 할 수 있습니다`, `제출할 수 있습니다`, `판단하는 경우`.
   - Reason: the subject honorific is applied to `귀하` in some sentences and not in others, sometimes inside one paragraph. Korean privacy notices are normally written without -시- (`정보주체는 … 할 수 있습니다`); removing it needs the fewest edits. The cookie banner (UI text, `동의하신 경우`) can keep it.
   - Severity: should-fix

9. `src/pages/ko/adatvedelmi-tajekoztato.astro` §8
   - Current: `변호사 비밀의 보호와 직업적·법적 책임은 전적으로 사건을 수행하는 변호사가 부담합니다. 변호사 비밀에 속하는 정보에 관하여`
   - Proposed: `직무상 비밀의 보호와 직업적·법적 책임은 전적으로 담당 변호사가 부담합니다. 변호사의 직무상 비밀에 해당하는 정보에 관하여`
   - Reason: `변호사 비밀` is a calque of `ügyvédi titok`; Korean law (변호사법 제26조) speaks of `직무상 알게 된 비밀` and the `비밀유지의무`. `사건을 수행하는 변호사` → `담당 변호사` is the idiomatic term for `eljáró ügyvéd`. Glossary-B line 460 (confidence B) should follow.
   - Severity: should-fix

10. `src/pages/ko/adatvedelmi-tajekoztato.astro` (lead and §8) — statute citation format
    - Current: `헝가리의 「정보자기결정권 및 정보의 자유에 관한 2011년 법률 제CXII호」(Infotv.)` and `「변호사 활동에 관한 2017년 법률 제LXXVIII호」(Üttv.)`
    - Proposed: `헝가리의 「정보자기결정권 및 정보의 자유에 관한 법률」(2011년 법률 제CXII호, Infotv.)` and `「변호사 활동에 관한 법률」(2017년 법률 제LXXVIII호, Üttv.)`
    - Reason: glossary-B §1.2 and lines 260–261 fix the house style as title + (year, number, abbreviation). The blog articles will follow the glossary, so the site would otherwise cite the same act in two formats. The proposed form also reads better: the number is not part of the title.
    - Severity: should-fix

11. `src/pages/ko/adatvedelmi-tajekoztato.astro` §7 vs glossary-B line (NAIH)
    - Current: `헝가리 국가 개인정보보호·정보자유청(Nemzeti Adatvédelmi és Információszabadság Hatóság, NAIH)`
    - Proposed: keep this wording on the page, and change the glossary entry `헝가리 국가정보보호·정보자유청` to match it.
    - Reason: the two differ; the page's version is the more accurate (`adatvédelmi` = 개인정보보호; `국가정보보호` reads like "state-information protection"). Flagged so the blog translations do not introduce a second name for the same authority.
    - Severity: should-fix (consistency; edit is in the glossary/blog, not the page)

12. `src/data/content.js` (home.ko.aboutBody) — 고객 / 의뢰인
    - Current: `저희는 다수의 헝가리 국내외 의뢰인에게 회사법 및 기업법무, 부동산, …`
    - Proposed: `저희는 헝가리 국내외의 다수 고객에게 회사법 및 기업법무, 부동산, …`
    - Reason: the paragraph directly above says `모든 고객에게`, and values, hero and network all use `고객`. Recommended rule: `고객` in marketing copy; `의뢰인` only where the mandate relationship is the point (`의뢰인을 대리`, footer `의뢰인의 권리`, privacy notice). Those other uses are fine as they are.
    - Severity: should-fix

13. `src/data/content.js` (network.ko.stats)
    - Current: `{ n: '4', l: '개 대륙' }`
    - Proposed: `{ n: '4', l: '대륙' }`
    - Reason: number and label are rendered as two stacked lines (`.net-stat` is a column flex). A line consisting of `개 대륙` starts with a bare counter, which cannot stand alone in Korean. (`진출 대륙` also works.)
    - Severity: should-fix

14. `src/data/content.js` (network.ko.body)
    - Current: `헝가리 국내 기업, 국가 및 지방자치단체 기관, 그리고 국제 고객에게`
    - Proposed: `헝가리 국내 기업, 국가기관 및 지방자치단체, 그리고 해외 고객에게`
    - Reason: `국가 및 지방자치단체 기관` parses badly (기관 attaches only to 지방자치단체); `국제 고객` is translationese for `nemzetközi ügyfelek` — Korean says `해외 고객`.
    - Severity: should-fix

15. `src/data/content.js` (whyus.ko.items[0].d)
    - Current: `헝가리어로 수행하는 현지 변호사 대리와 함께, DHH 국제 네트워크에 직접 연결됩니다.`
    - Proposed: `현지 변호사가 헝가리어로 직접 대리하며, DHH 국제 네트워크를 바로 활용할 수 있습니다.`
    - Reason: the current sentence has no recoverable subject for `연결됩니다` and `변호사 대리와 함께` reads as "together with a deputy lawyer". Meaning unchanged (Hungarian-language local representation + direct access to the network); it still follows the HU, which mentions Hungarian only.
    - Severity: should-fix

16. `src/data/content.js` (whyus.ko.items[1].d)
    - Current: `두 법체계와 비즈니스 문화를 잇는 업무 방식과 이중 언어 조율을 제공합니다.`
    - Proposed: `두 법체계와 비즈니스 문화를 잇는 방식으로 일하며, 업무를 이중 언어로 조율합니다.`
    - Reason: `업무 방식을 제공합니다` / `조율을 제공합니다` are noun-heavy calques; Korean needs verbs here.
    - Severity: should-fix

17. `src/data/content.js` (practices, szellemi)
    - Current: `특허, 상표 및 그 밖의 지식재산권 분야에서 자문과 제반 절차의 처리를 제공합니다.`
    - Proposed: `특허, 상표 및 그 밖의 지식재산권 분야에서 자문하고, 제반 절차를 대행합니다.`
    - Reason: `처리를 제공합니다` is not Korean; `teljes körű ügyintézés` is 절차 대행.
    - Severity: should-fix

18. `src/data/content.js` (peopleContent, czudar-balazs), `scripts/sync-brand.mjs` (`KO_TITLES`) and `src/data/brand.generated.js`
    - Current: title `설립자 · 대표변호사`; bio `본 사무소의 설립 파트너이자 대표변호사입니다.` and `… 복잡한 계약 구조 분야에서 탁월한 경험을 보유하고 있습니다.`
    - Proposed: title `설립자 겸 대표변호사`; bio `본 사무소의 설립자이자 대표변호사입니다.` and `… 복잡한 계약 구조 분야에서 특히 풍부한 경험을 보유하고 있습니다.`
    - Reason: (a) the card title and the first bio sentence, shown one above the other, name the same role differently (`설립자` / `설립 파트너`); research-A §3 found no Korean usage of `설립 파트너` and recommends `설립자 겸 대표변호사`; a middle dot is not how Korean firms join two titles. (b) `탁월한 경험` is a false collocation (탁월한 goes with 역량/성과, 경험 takes 풍부한); the proposed wording is also the safer one for self-description on a regulated site while still rendering `kiemelkedő`.
    - Severity: should-fix

19. `src/data/content.js` (peopleContent, simon-domokos)
    - Current: `2006년 페치 대학교에서 유럽법 전문 법률가 학위를 취득하였으며`
    - Proposed: `2006년 페치 대학교에서 유럽법 전문과정(법학 석사 후 과정)을 수료하여 학위를 취득하였으며`
    - Reason: `전문 법률가 학위` does not tell a Korean reader what the qualification is and can be read as a professional licence. `szakjogász` is a postgraduate specialist diploma; glossary-B line 434 already glosses it as a 석사 후 과정.
    - Severity: should-fix

---

## C. Optional

20. `content.js` ui.ko — `officeBalassagyarmat: '벌러셔저르머트 사무소'` → `벌러셔저르머트(Balassagyarmat) 사무소`. The rule-based transliteration is correct, but no Korean reader can map it back to the town; the Latin form once helps (the booking button under it already says "Balassagyarmat").
21. `content.js` home.ko.values[0].d — `법적 구조의 최적화를 바탕으로` → `법률적 최적화를 바탕으로`. HU `jogi optimalizáció` has no "structure"; small addition.
22. `content.js` home.ko.values[0].t — `전문적인 서비스` → `전문 서비스`. Tighter as a card heading.
23. `content.js` home.ko.aboutBody[2] — `헝가리와 국제 비즈니스 세계, 특히 중국 비즈니스 세계를 잇는 가교 역할` → `헝가리와 해외, 특히 중국의 비즈니스 현장을 잇는 가교 역할`. `비즈니스 세계` twice is translationese.
24. `content.js` home.ko.proBonoBody — `사회적 약자와 그 가족` → `어려운 처지에 있는 개인과 가정`. HU is "disadvantaged persons and families", not "the disadvantaged and their families".
25. `content.js` network.ko.tagline — `현지에 뿌리내리고, 세계와 연결됩니다.` → `현지에 뿌리내리고, 세계와 연결합니다.` Active/passive mismatch between the two halves.
26. `content.js` practices, nemzetkozi — `외국 개인 및 법인의` → `외국인 및 외국 법인의`. Standard pairing.
27. `content.js` practices, nemzetkozi-kap — `투자, 현지 진출 및 상사 사안을` → `투자, 현지 법인 설립·정착 및 상사 사안을`. `letelepedés` is establishment/settling in, narrower than `진출`.
28. `content.js` practices, szerzodesek — `분쟁 해결 및 권리 행사 과정에서` → `분쟁 해결 및 청구권 행사 과정에서`. `igényérvényesítés` is enforcement of claims.
29. `Base.astro` footer — `청약이나 법률 자문에 해당하지 않습니다` → `계약의 청약(제안)이나 법률 자문에 해당하지 않습니다`. `청약` alone is correct legal Korean but lay readers associate it with housing subscription.
30. `Base.astro` footer — `변호사에게 적용되는 법령 및 내부 규정에 따라` → `변호사에게 적용되는 법령 및 변호사회 규정에 따라`. `내부 규정` can be read as the firm's own internal rules; the HU means the bar's regulations.
31. `ko/adatvedelmi-tajekoztato.astro` lead — `EU 규정 2016/679(일반 개인정보보호법, GDPR)` → `규정 (EU) 2016/679(일반 개인정보보호법, GDPR)`. Glossary-B §1.2 citation pattern.
32. `ko/adatvedelmi-tajekoztato.astro` §3 — `반드시 필요하지는 않은 쿠키` → `필수적이지 않은 쿠키`. Matches the established `필수 쿠키` vocabulary.
33. `ko/adatvedelmi-tajekoztato.astro` §6 — `제1항에 기재된 연락처로` and `(제8항 참조)` → `위 1.에 기재된 연락처로` and `(아래 8. 참조)`. The page's sections are numbered "1.", "8."; `항` suggests a paragraph of an article.
34. `ko/adatvedelmi-tajekoztato.astro` §5 — `DHH 네트워크 내부로 개인정보를 이전하는 것은 오로지 <strong>의뢰인의 명시적인 수권</strong>이 있는 경우에 한하며` → `DHH 네트워크 내부로의 개인정보 이전은 오로지 <strong>의뢰인의 명시적인 수권</strong>이 있는 경우에 한하여 이루어지며`. Grammar smoothing only; `수권` is acceptable for `felhatalmazás` (deliberately not `동의`).
35. `ko/adatvedelmi-tajekoztato.astro` — `최종 업데이트: 2026년 9월 20일.` → `최종 개정일: 2026년 9월 20일`. Usual wording on Korean notices; no trailing period after a date line.

---

## D. Sections with no findings

- `ui.ko` nav and buttons (`사무소 소개 / 업무분야 / 구성원 / 인사이트 / 연락처`, `문의하기`, `본문 바로가기`, `더 보기`): match Korean law-firm conventions in research-A; short enough for the nav bar.
- `contact.book` / `contact.followUs`, `cookie.accept/reject/settings/more/mapNotice/mapLoad`, `trust.title`: fine.
- `home.ko` hero, values 2–3, about paragraph 1; `network.ko` eyebrow/title/cta; `whyus` items 3–4 and title: fine.
- Practices: 형사법, 부동산법, 회사법, 손해배상, 에너지법, 경쟁법, EU법, 개인정보보호: fine.
- `Home.astro` ko strings (`전체 글 보기 →`, team image alt): fine.
- `ko/index.astro` title and description; `ko/blog/[slug].astro` (`← 인사이트 목록으로`, `최초 게재:`, disclaimer): fine.
- Privacy notice §1, §2.1, §2.2, §2.4, §2.5, §4 and all GDPR citations (`제6조 제1항 (a)/(b)/(f)호`, `제37조`): accurate and complete against the HU, paragraph by paragraph; nothing omitted.
- Particles after Latin-script words and brackets (`Google은/이`, `GitHub가`, `법률사무소(北京德和衡)의`, `DHH인가`, `{name}가`): all correct.
- Decided conventions (firm name, parent-firm name, 합니다체, Latin attorney names, 컨트롤러/프로세서 with first-mention gloss): applied consistently; no 더헝/DeHeng anywhere.

---

## E. Notes that are not Korean-copy defects

- HU source, privacy §5: `általános szerződési feltételek` literally means general terms and conditions; the EN and KO (`표준계약조항`) both render the legally intended "standard contractual clauses". The KO is right; the Hungarian original is the one to correct.
- HU source, privacy §5 lists the embedded Google Map under processors, while §2.3 calls it Google's independent processing. All language versions inherit this inconsistency.
- The Korean page states services are provided `헝가리어와 영어로` (faithful to the HU). A Korean-language site can itself imply Korean-language service; whether to add an explicit line about working languages is a decision for the firm, not a translation fix.
- Not localised for any locale, so left alone: footer line `Budapesti Ügyvédi Kamara 5160` (from `office.bar`), booking buttons `— Budapest ↗` / `— Balassagyarmat ↗`, `aria-label="Menu"`, language switcher code `KO`.
- Not verified here: rendered layout (line breaks, nav wrapping) — this review read the source only, no build or browser check was run.
# Revision log — 2026-09-hatosagi-szigor.ko.md (independent bilingual revision, HU → KO)

Method: full sentence-by-sentence comparison with the Hungarian source; every amount, date, percentage and section number checked individually (no number errors found). Structure unchanged: 149 lines, 12 H2 headings, 7 table rows, 1 blockquote, 9 source items; frontmatter untouched.

## (A) Accuracy / additions / omissions (17)

1. `CATL(닝더스다이, 宁德时代, 데브레첸)` → `CATL(宁德时代, 데브레첸)` — Hangul reading not in the source (addition).
2. `통합환경허가(IPPC) 위반` → `통합환경허가 위반` — "(IPPC)" not in the source.
3. `궁타오(龚韬) 주헝가리 중국대사는 영문 매체 Daily News Hungary와의 인터뷰` → `궁타오(Gong Tao) 주헝가리 중국대사는 Daily News Hungary와의 인터뷰` — hanzi for the name and the gloss "영문 매체" are not in the source; Latin original given instead.
4. `임시구제(azonnali jogvédelem, 집행정지에 해당)로` → `임시구제(azonnali jogvédelem)로` — explanatory addition removed.
5. `법인에 대한 형사조치에 관한 법률(2001년 법률 제CIV호)에 따른 조치` → `2001년 법률 제CIV호에 따른 조치` — the source cites only the act number; the title was added.
6. `임원배상책임보험(D&O)` → `임원배상책임보험` — "D&O" not in the source.
7. `헝가리 이민청(국가외국인관리총국, OIF)` → `헝가리 이민청(Országos Idegenrendészeti Főigazgatóság)` — abbreviation OIF and second name not in the source; replaced by the Hungarian original.
8. `헝가리 국세청(NAV)` → `헝가리 국세청(Nemzeti Adó- és Vámhivatal)` — the source does not use "NAV".
9. `산업시설 안전 당국(중대사고 예방)이` → `산업시설 안전 당국이` — bracketed explanation not in the source.
10. `베이징 DHH 법률사무소(北京德和衡律师事务所, 이하 'DHH')의` → `베이징 DHH 법률사무소(北京德和衡)의` — per brief; "이하 'DHH'" was an addition (source: "DHH Beijing").
11. `코마롬 소재 SK온(SK Battery) 공장에 대해서는` → `코마롬의 SK Battery에 대해서는`; `SK온 코마롬(SK Battery)` (2× in section VI, 1× in sources) → `SK Battery` / `SK Battery 코마롬` — the source names "SK Battery" separately from "SK On"; identity with SK온 is not stated in the source, and "공장" was added.
12. `이 판결을 파기하고 새로운 절차의 진행을 명하였습니다` → `이 판결을 파기하고 다시 심리하도록 사건을 환송하였습니다` — "hatályon kívül helyezte és új eljárást rendelt el" by the Kúria against a court judgment is a set-aside with remand for a new court proceeding; "새로운 절차의 진행" is not a Korean procedural term and left the meaning open.
13. `지금까지 배터리 산업에 속하지 않는 여러 투자사업의 중점사업 지위를` → `여러 투자사업(현재까지는 배터리 산업 외의 사업)의 중점사업 지위를` — "eddig nem akkumulátoripari" qualifies which projects have been affected so far; the old wording read as a permanent attribute.
14. `위법 상태가 해소될 때까지, 그리고 최소 6개월 동안` → `위법 상태가 해소될 때까지, 다만 최소 6개월 동안은` — "de legalább" is a floor ("but at least"), not a cumulative "and".
15. `사업장 폐쇄 처분에 대한 불복 절차에서의 승소, 지방자치단체의 환경 조례에 대한 법률 의견` → `사업장 폐쇄 처분에 대한 성공적인 불복, 지방자치단체의 환경 조례를 다투는 법률 의견` — "sikeres jogorvoslat" is not necessarily a court win (승소 too strong); "rendelet elleni" = against the ordinance.
16. `당국과 협의된 복구 프로그램` → `협의된 복구 프로그램` — "당국과" not in the source ("egyeztetett").
17. Smaller meaning fixes: `배관 손상 사고가 발생` → `배관 손상이 발생` ("사고" added); `대규모 제조업` → `대규모 산업` (nagyipar); `공공하수도의 정화` → `공공하수도의 청소` (tisztítás of a sewer); `추가 공장동 건설` → `추가 생산시설 건설` (gyáregységek are plant units, not buildings); `이 점은 주헝가리 중국대사도 … 공개적으로 언급` → `주헝가리 중국대사는 … 이 점을 공개적으로도 밝혔습니다` ("nyilvánosan is": the "also" belongs to "publicly", not to the ambassador); `대금 청구 구조를 설계할 때 이 점도` → `대금 청구 구조에서도 이 점을` ("설계할 때" added); `CATL은 과징금을 납부합니다` → `납부하기로 하였습니다` (present "befizeti" = will pay; the bare present read as habitual).

## (B) Terminology / names (9)

1. Byline: `추더르 벌라주(Czudar Balázs) 변호사(Czudar DHH 법률사무소(Czudar DHH Ügyvédi Iroda) / DHH 부다페스트 사무소) – 청타오(成焘, Cheng Tao)(…)` → `Czudar Balázs 변호사(Czudar DHH 법률사무소 / DHH 부다페스트 사무소) – Cheng Tao(成焘) 변호사(北京德和衡（青岛）律师事务所 / DHH 칭다오)` — firm people in Latin script per brief (成焘 kept: it is in the source); nested brackets removed.
2. Last source item: `Czudar DHH – 청타오: 새 정부하의 헝가리 내 중국 투자: …(제1부)` → `Czudar DHH – Cheng Tao: 새 정부 출범 이후 헝가리의 중국 투자: 컴플라이언스를 위한 법률 실무 가이드(제1부)` — identical to the current `title:` of 2026-07-kinai-befektetesek.ko.md.
3. `비야디` → `BYD` (15 occurrences, incl. table and sources) — source name; all following particles remain correct (vowel-final in both readings).
4. `'세 번째 스트라이크'` → `'삼진아웃'(세 번째 위반)` — consistent with `'삼진아웃' 원칙` in section III.
5. `부식토` → `표토` (2×) — "humusz" here is the humus-bearing topsoil layer removed from a construction site; 표토 is the Korean term.
6. `당국의 판단을 다투는` → `당국의 확인 내용을 다투는` — megállapítás = finding.
7. `독립기관과 중앙행정기관` → `독립 행정기관과 중앙행정기관` — consistent with section I ("독립 행정기관으로서").
8. `아직 총리 취임 전의 신분으로` → `아직 차기 총리의 신분으로` — "leendő miniszterelnökként".
9. `헝가리 대표이사(업무집행자)` → `헝가리 현지 대표이사(업무집행자)` — "헝가리 대표이사" read as an odd title; see doubt 6.

## (C) Style (6)

1. Heading `II. 전례 없는 일이 아니다: …` → `II. 전례가 있는 일: …` — headings as noun phrases, not 해라체 clauses.
2. Heading `V. 당국 지도: …` → `V. 당국 지형도: …` — "지도" is ambiguous (map / administrative guidance).
3. HALMS/Semcorp sentence in section II restructured (the old version had no predicate for the first two clauses and a stray "이어서 … 에는, 즉 …,").
4. `…에 관한 정부령의 틀 안에서 움직입니다` → `… 분야 정부령의 틀 안에 있습니다` — removed the doubled "정부령, 즉 … 에 관한 정부령" and the calque "움직입니다".
5. `과징금은 이전 정부가 제정한 현행 틀 안에서 움직입니다` → `… 마련한 현행 틀 안에 머물러 있습니다` — same calque; aligned with the summary wording.
6. `사전 예방적 규제 강화 대응 감사` → `예방적 규제 강화 대응 감사` — pleonasm.

## Examined and left unchanged

- 에코프로 (source: "dél-koreai EcoPro" — Korean group name certain; 에코프로비엠 not stated in the source), SK온 (SK On), 삼성SDI, 성일하이텍.
- 셈코프(Semcorp Hungary Kft., 恩捷股份, …), 테무(Temu, …), 알레그로(Allegro): transcriptions with the Latin original at first mention.
- "경제 전문 매체 G7": gloss kept on the disambiguation rule (bare "G7" reads as the Group of Seven).
- "유의하고 있으며" (tudomásul veszi), "과징금·과태료" for generic "bírságok" covering both types, "헝가리는 외국 자본에 열려 있되" (subject supplied for an elliptical Hungarian phrase).
- Hungarian-original glosses of coined terms at first mention (사용승인(használatbavételi engedély), 재난관리 당국(katasztrófavédelem), 국가경제 중점 투자사업(kiemelt beruházás), court and authority names).
- FSR without regulation number; Ákr. short form in II and full citation in V (follows the source).

## Remaining doubts for a human (native Korean lawyer / the firm)

1. Kúria: "파기하고 … 환송" assumes remand to the court below (the only reading under Hungarian procedure, but the source does not name the forum). Confirm the wording.
2. Chinese company names: BYD is now Latin, while 셈코프 and 테무 remain in Hangul. Decide one site-wide rule (Part I ko currently uses 셈코프).
3. SK Battery (Komárom) is kept in Latin as a name distinct from SK온. If the firm confirms it is SK온's Komárom plant, "SK온 코마롬 공장" could be used.
4. Removed glosses that a Korean reader may miss: "집행정지에 해당" after 임시구제, the title of Act CIV of 2001, "D&O", "NAV". Reinstate only if the no-additions rule is relaxed.
5. Coinages not verified against Korean sources: 절차 과태료, 산업시설 안전 당국, 규제 강화 대응 감사, 컴플라이언스 확약서, 손해배상의 연쇄 구조, 국가생활환경감독청, 주(州) 정부청, 포소화 펌프, 공정 구역, 배치도 오류.
6. "a magyar ügyvezető": rendered "헝가리 현지 대표이사(업무집행자)" — the source may mean the Hungarian company's director or a Hungarian-national director.
7. "belépési kontroll / belépési engedély" → 출입 통제 / 출입 허가 (site access); it could mean onboarding control of subcontractors.
8. Part I title in the last source item must be re-aligned if the title of 2026-07-kinai-befektetesek.ko.md changes.
9. "tanulmányunk" → "저희 연구" left as is; "논고" or "기고문" may fit better.
# Revision log — 2026-07-kinai-befektetesek.ko.md (independent bilingual revision, 2026-10-11)

Frontmatter: unchanged (title kept verbatim; lang/key/date/draft/author/coauthor intact; no reviewNote). Structure: 6 H2, 14 H3, 144 lines, same order as HU. All figures, dates, percentages and section numbers re-verified one by one against the source — no number errors found.

## (A) Accuracy / additions / omissions (12)

1. Author line: "청타오(成焘, Cheng Tao) (…) – 추더르 벌라주(Czudar Balázs) 변호사 (…)" → "Cheng Tao 변호사(…) – Czudar Balázs 변호사(…)" — 成焘 is not in the HU source (imported from ZH); Hangul transcriptions removed per brief; names in Latin as in the source.
2. Abstract: "데브레첸 셈코프(Semcorp, 恩捷) 사건" → "데브레첸 셈코프(Semcorp) 사건" — 恩捷 appears in the source only at II.1 (kept there), not in the abstract.
3. I.2: "환경영향평가(EIA) 및 통합환경허가(IPPC) 절차 60일" → "환경영향평가 및 통합환경허가 절차 60일" — "(EIA)" is nowhere in the source; "(IPPC)" appears in the source only at I.3 (kept there as first gloss).
4. I.3: "감독기구가 업무를 개시합니다" → "개시할 예정입니다" — source is a reported future event ("a bejelentések szerint … kezdi meg"); flat present read as accomplished fact.
5. II.1: "포(泡) 소화설비" → "포소화설비" — added hanja removed; 포소화설비 is the standard Korean fire-code term.
6. II.1: "측정 센서 주변에서 당국의 견해로는 측정값에 영향을 미치기에 적합할 수 있었던 규정 위반의 개입 행위가 발견되었습니다" → "측정 센서 부근에서 규정에 어긋난 개입 행위가 발견되었는데 당국은 이것이 측정값에 영향을 미칠 수 있었던 것으로 보고 있습니다" — unreadable calque; the hedge ("a hatóság szerint alkalmasak lehettek") is now clearly attributed to the authority.
7. II.1: "환경훼손죄의 중죄(bűntett) 혐의" → "중죄(bűntett)에 해당하는 환경훼손죄 혐의" — "X죄의 중죄" is not a possible Korean construction; bűntett kept in brackets (no Korean equivalent of the bűntett/vétség split).
8. II.1: "현지 시장이 … 정부 구성원들은" → "데브레첸 시장이 … 정부 각료들은" — 시장 ambiguous (mayor/market); "a kormány tagjai" = members of the Government (ministers), 구성원 was vague.
9. III.3: "이의신청(일반행정절차법(…))" → "일반행정절차법(2016년 법률 제CL호, Ákr.)에 따른 행정상 불복신청(fellebbezés)" — Korean 이의신청 is a request to the same authority (행정기본법 제36조) and 행정심판 is a commission procedure; the Hungarian fellebbezés (appeal to the superior authority) is neither, so a neutral term + Hungarian in brackets.
10. III.3: "임시구제(azonnali jogvédelem, 집행정지에 해당)" → "임시구제(azonnali jogvédelem)" (bracket moved to the true first mention in the run-in heading; second mention plain "임시구제를 신청하여야 합니다(Kp. 제50조)") — "집행정지에 해당" was an addition and narrows Kp. 50. §, which also covers interim measures and preliminary evidence.
11. III.3: "당국과 협의된 복구 및 컴플라이언스 프로그램" → "협의에 기초한 복구 및 컴플라이언스 프로그램" — "당국과" not in the heading phrase ("Egyeztetett …"); the authority is named later in the paragraph, as in the source.
12. Frontmatter excerpt: "반중(反中) 선회" → "반중 선회" — added hanja removed (not in source; unambiguous without it).

## (B) Terminology (4)

1. Abstract: "일원적 제도 개혁" → "통일적 제도 개혁" — "egységes" is rendered 통일(된) everywhere else; 일원적 means "monist/single-track".
2. Abstract: "종전의 특혜적 투자자 대우" → "종전 시기의 특혜적 투자자 대우" — "a korábbi korszak" consistent with the rest of the article.
3. I.4: "비공개로 분류된 국제 협정" → "기밀로 분류된 국제 협정" — "titkosított" = classified.
4. III.4: "집행위원회에 대한 대리" → "집행위원회 절차에서의 대리" — "Bizottság előtti képviselet" = representation before the Commission, not "against/towards".

## (C) Style (15)

1. Abstract: "분석하며 – … 포함하여 –, 변호사 실무의" → dash parenthesis dissolved into the clause.
2. Abstract: "준비되어 있고 … 중국 기업에게 … 더 예측 가능하고" → "준비를 갖추고 … 중국 기업에 … 더 예측 가능하며".
3. I.2: "대규모 중국 투자 – 재생에너지, 배터리 제조 – 는" → "대규모 중국 투자(재생에너지, 배터리 제조)는" — particle detached after dash.
4. I.2: "병합된 절차에서" → "통합된 절차에서" (병합 is litigation joinder).
5. I.3: "통합환경허가(IPPC) 제도(…) – 그 핵심은 …점입니다 –, 지하수 보호" → "실제 운영이 허가 조건에서 결코 벗어나지 않아야 한다는 점이 핵심인 통합환경허가(IPPC) 제도(…), 지하수 보호".
6. I.4: FDI sentence with embedded full sentence between dashes → single flowing sentence.
7. I.4: "계약상 조건 – … – 이" → "계약상 조건(…)이".
8. II.1: "6월 24일 – 환경오염 혐의를 이유로 – 생산에" → dashes removed.
9. II.1: "현장 점검 – 그중 한 차례는 … – 을 실시" → "현장 점검(그중 한 차례는 사전 통지 없는 야간 점검)을 실시".
10. II.1 ¶2: "… 확보 – 새로운 감독 환경에서 조업의 기본 조건입니다 – 를" → relative clause moved in front.
11. II.2: "서로 다른 두 주체 – … 다른 – 라는 점" → "경우에 따라서는 소속 정당도 이해관계도 다른, 별개의 두 주체라는 점".
12. II.2: "홍보의 문제가 아니라 – 소속 정당과 무관하게 – 실질적인" → "소속 정당과 무관하게 홍보의 문제가 아니라 실질적인".
13. II.4: "거래 능력 – … – 을" → "거래 능력(…)을".
14. IV: "조약상 틀은 – … 과 함께 – 정부 임기를" → "…협정을 비롯한 양자 관계의 조약상 틀은"; "2025년 – 아직 전 정부 시기에 –" → "아직 전 정부 시기이던 2025년에"; "새 정부의 중국 특정 조치" → "새 정부가 중국만을 겨냥하여 취한 조치".
15. V: "자체 점검 – 환경, 소방, 수질 보전, 노동법 –. 2026년" → "자체 점검(환경, 소방, 수질 보전, 노동법). 2026년".

## Translator's doubts examined and left as is

- Btk. cited without act number (source has none) — correct, nothing added. "(BIT)" at I.1 and "역외보조금규정(FSR, …)", "외국인직접투자(FDI)", "연구개발(R&D)" kept as pure first-mention abbreviation glosses.
- 고정식 소화설비 (beépített tűzoltó berendezés), 소방 과징금, 허가의 효력을 정지, 조업 정지/조업 중단 처분, 신고된 지분(bejelentett részesedés), 갭(gap) 분석, 투 트랙, 지역사회 정착, 주(州) 정부청, 제2심 기관, "법 집행이 가장 두드러지게 드러나는 시기" — acceptable.

## Remaining doubts for a human (native Korean lawyer / the firm)

1. "Cheng Tao 변호사": the HU source gives no title for Cheng Tao; 변호사 added per the brief's model. Confirm.
2. azonnali jogvédelem: now "임시구제(azonnali jogvédelem)" with no Korean-law analogue. A Korean lawyer may prefer 가구제 or a gloss "집행정지 등"; the latter is an addition to the source — firm's call.
3. fellebbezés: "행정상 불복신청(fellebbezés)" deviates from glossary "이의신청" — align glossary/other articles if accepted.
4. "tudomásul vette" → "수용하였고": literally "took note of"; 수용 may suggest a waiver of remedies. Alternative: "당국의 처분을 받아들였고" / "이의 없이 받아들였고" — depends on what the company actually declared.
5. "stratégiai megállapodás" → "전략적 협력 협정" (glossary): "협력" is not in the Hungarian; kept for site-wide consistency.
6. "soron kívüli vizsgálat" → "우선적인 조사": possibly "긴급 조사" / "우선 처리 조사".
7. "kiemelt térségek" (aid map, 60%) → "우대 지역": check against Korean state-aid usage.
8. "polgármesteri hivatallal fenntartott korrekt viszony" → "올바른 관계": "korrekt" (proper, fair) — a native editor may prefer "원만하고 공정한 관계".
9. Remaining " – " dashes in run-in leads and list-like paragraphs mirror the source layout; a house-style decision (colon vs dash).
# revlog-short — independent bilingual revision HU→KO, three short articles (2026-10-11)

All three files checked sentence by sentence against the .hu.md. Structure (headings, list items, paragraphs, frontmatter keys; lang "ko"; key/date/draft/author unchanged; no reviewNote) matches the source in all three. Numbers/dates (2020, 2021, 2021년 11월, frontmatter dates) verified individually; no amounts. No firm/person names in the body; no 더헝/DeHeng; no hanja or statute numbers added.

## 1. 2026-03-eu-kinai-szerzodesek.ko.md

### (A) Accuracy / numbers
1. "영향을 과소평가하는 경우가 많습니다" → "영향을 과소평가하는 경향을 보이는 경우가 많습니다" — source "sok esetben hajlamosak alábecsülni" (tend to underestimate); the hedge "hajlamosak" was dropped.
2. "중국의 법원이든 EU의 법원이든 또는 중재판정부 앞에서든" → "중국의 법원이든 EU 역내의 법원이든, 또는 중재판정부 앞에서든" — "uniós bíróságok" means courts in the EU (Member State courts), "EU의 법원" reads as the CJEU.

### (B) Terminology
3. "## 요약" → "## 결론" — Összegzés closes the article (conclusions, not an abstract); also consistent with 2026-07-kinai-befektetesek.ko.md, where "V. Összegzés" is already "V. 결론".

### (C) Style
4. "유보적으로 다루어야 하며" → "신중하게 다루어야 하며" — "fenntartással kezelendők"; 유보적으로 다루다 is translationese.

### Examined and kept
- “good faith” / “best efforts”: left in English with no Korean gloss — the Hungarian source gives none.
- "통상 기대되는 행위 기준" (elvárható magatartás elve): glossary form kept (see doubts).
- "데이터 처리 규정", "(일부) 무효", "중국의 판례", "다른 국가에 본거지를 둔 거래 상대방": correct.
- "계약자유의 원칙" (glossary) for szerződési szabadság: kept.

## 2. energiapiac-ellatasi-kockazatok.ko.md

### (A) Accuracy / numbers
1. "잘 작동하던 것이 위기 시에도 유효하다고 장담할 수는 없습니다" → "잘 작동하는 것이라도 위기 시에는 쓸 수 있다고 장담할 수 없습니다" — source is present tense, general statement ("jól működik … nem biztos, hogy használható"); past tense and "유효" (valid) shifted the meaning.
2. "현저히 불리한 조건으로(더 높은 가격으로)" → "훨씬 더 불리한 조건으로(더 높은 가격으로)" — "jelentősen kedvezőtlenebb": comparative was lost.
3. "계통운영자(망 사업자)는" → "망 운영사업자는" — "hálózatüzemeltető" is the generic network operator; the sentence covers both electricity and natural gas and does not say transmission or distribution. 계통운영자 means the (electricity) system operator/TSO and is too narrow; 배전망 사업자 would be equally unsupported. Neutral term used, bracket removed.

### (B) Terminology
4. Body: "파산보호(csődvédelem)를 신청하였습니다. 이 판매사업자는 회생절차(csődeljárás)가 개시되기 전에" → "회생절차상 보호(csődvédelem)를 신청하였습니다. 이 판매사업자는 해당 회생절차(csődeljárás)가 개시되기 전에" — Hungarian csődeljárás is a reorganisation/moratorium procedure, not liquidation; 파산 suggests liquidation and the two terms read as two different procedures. Both now belong to the 회생 family; "해당" renders the definite article ("a csődeljárás") and ties the two together.
5. Excerpt: "파산보호 사건" → "회생절차상 보호 사건" — same reason, consistency. ("도산하다/도산한" for csődbe megy/ment kept: 도산 is the neutral umbrella term.)

### (C) Style
6. Excerpt: "…대응의 여지를 살펴봅니다." → "…대응의 여지." — source is a noun phrase; the verb "살펴봅니다" was an addition.

### Examined and kept
- 판매사업자 / 수요자 / 전력 / 가스 vs 천연가스 / 우크라이나 위기 / 코로나19 / 영업규정 / 서비스의 정지(공급 차단) / present tense "청구하고 있으며 … 배제하고 있습니다": all correct. 11 list items present, in order.

## 3. onkormanyzati-beszerzesek-afaja.ko.md

### (A) Accuracy / numbers
1. Excerpt: "사실상 동일한 활동에 대하여 부가가치세 면제로 재원을 조달할 수도 있습니다" → "사실상 동일한 활동을 부가가치세 없이 재정 지원할 수도 있습니다" — "finanszírozni a tevékenységet" = the municipality funds the activity; "재원을 조달하다" means raising funds (reverses the direction). "áfamentesen" here = without VAT (a subsidy is outside VAT), not a statutory exemption (면제).
2. Body §3: "사실상 동일한 활동의 수행에 대하여 부가가치세 면제로 재원을 조달할 수 있을 것입니다" → "사실상 동일한 활동의 수행을 부가가치세 없이 재정 지원할 수 있을 것입니다" — same.
3. List item 5: "재원 조달이 금지된 국가보조금에 해당하지 않도록" → "재정 지원이 금지된 국가보조금에 해당하지 않도록" — "a finanszírozás" is the funding given, which is what may qualify as State aid.
4. Last paragraph: "더 유리한 방식으로 재원을 조달할 수 있도록" → "더 유리한 방식으로 재원이 뒷받침될 수 있도록" — "finanszírozhatók legyenek": the services are the thing financed.
5. "지방자치단체가 자기 회사를 하나의 사업자로 삼아 그 회사에 해당 서비스를 발주하고" → "지방자치단체가 사업자로서의 자기 회사에 해당 서비스를 발주하고" — "a saját cégétől, mint vállalkozástól rendeli meg" = orders from its own company as (from) an undertaking; "삼아" (treating it as) added an interpretive act not in the Hungarian.
6. "그 목적으로 직접 설립한 자체 기업" → "그 목적으로 설립한 자체 기업" — "직접" not in the source.

### (B) Terminology
7. "용역–반대급부 관계" → "급부–반대급부 관계" — "szolgáltatás-ellenszolgáltatás" is the performance/counter-performance pair; the Korean legal pair is 급부–반대급부.

### (C) Style
8. Excerpt: "…법적 쟁점을 살펴봅니다." → "…법적 쟁점." — source is a noun phrase; added verb removed.

### Examined and kept
- "부가가치세 납세의무자" (áfa alany): kept — it is the statutory term of the Korean VAT Act (부가가치세법 제3조 "납세의무자") and maps onto "taxable person"; 과세사업자 is in Korean law the opposite of 면세사업자, which is a different distinction.
- "용역 대금" (vállalkozási díj): kept — the object is a service (local media services) ordered by a municipality; in Korean public-procurement usage that is 용역계약/용역 대금. 도급 대금/보수 reads as construction work.
- "공공서비스의 재원 조달과 관련하여" (közszolgáltatásaik finanszírozása terén): kept, correct in that sentence.
- "(있을 수도 없기)", "본질적인 차이/조건", "법적 구조 최적화" (glossary), 보조금/대가/반대급부: kept. 7 list items present, in order.

## Remaining doubts for a human (native Korean lawyer / the firm)
1. csődvédelem → "회생절차상 보호": accurate as to the nature of the procedure, but not a set Korean phrase. Alternatives: "파산보호" (press term, used for Chapter 11; literal but suggests liquidation), "지급유예(모라토리엄) 보호". Firm to choose; glossary row should be updated to match.
2. hálózatüzemeltető → "망 운영사업자": if the firm knows that in the case the distribution system operator was meant, "배전망 사업자(배전사업자)" would be more precise; for gas, "배관망 사업자".
3. elvárható magatartás elve → glossary "통상 기대되는 행위 기준" drops "elve" (원칙) although it stands next to "신의성실의 원칙". Possible: "통상 기대되는 행위의 원칙". Left as is for site-wide consistency.
4. vállalkozási díj → "용역 대금" vs "도급 보수": depends on whether the firm wants the contract type (vállalkozási szerződés = 도급) visible.
5. "áfamentesen" → "부가가치세 없이": if the firm means a formal exemption, "부가가치세 면제로" would have to be restored.
6. Frontmatter author stays "dr. Czudar Balázs" (unchanged per brief); whether the site template should show "Czudar Balázs 변호사" is a template matter.
7. Excerpt punctuation " – " (spaced en dash) in the EU–China excerpt/titles is not native Korean typography; kept to mirror the source.
