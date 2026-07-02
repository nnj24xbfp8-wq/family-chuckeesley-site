# Vietnam letters — scan catalog (mining worktable)

Working index for reconstructing letters from the remaining `dad###` scans.
Not part of the site build (Astro ignores non-collection files here); delete when mining is done.

Columns: **scan** | **date** | **page role** (p1 / mid / last / single / unknown) | **first line / notes** | **assignment**

## Byte-identical duplicate clusters (same md5 — catalog once, skip the twin)

dad3=dad4, dad8=dad16, dad109=dad110, dad111=dad112, dad119=dad120, dad185=dad186,
dad200=dad201, dad202=dad203, dad213=dad215, dad214=dad216, dad279=dad285,
dad280=dad286, dad281=dad287, dad282=dad288, dad302=dad303, dad331=dad332

(dad8, dad112 are byte-twins of already-used scans dad16/dad111 → treat as duplicates of published letters.)

## Identified so far

| scan | date | role | notes | assignment |
|---|---|---|---|---|
| dad202/203 | ~mid-Nov 1970 | mid | "...move in with me it is" — marriage timing, Kool-aid, 30-day early-out | **Letter A** (p1 missing) |
| dad204 | ~mid-Nov 1970 | mid | "fine with me next summer... eligible after Nov 16... be home Xmas"; $1000 stereo, Hawaii 1wk | **Letter A** |
| dad205 | ~mid-Nov 1970 | last | "I'll confirm or deny it next week... mail more regular" / Love Charles | **Letter A** |
| dad206 | early 1970 (training) | p1 | "Dear Terrie / physical test... mental test... one step above a trainee... I hate this place" | **Letter B** (pre-Vietnam; continuation missing) |

**Letter A** = a substantial mid-November 1970 letter (marriage timing, moving in together next summer, $1000 stereo, the 2-week-leave-home rumor, "try to be home Xmas"). Have pages mid→last (dad202/204/205); **page 1 not yet located**. Undatable to the exact day until p1 surfaces.

**Letter B** = a pre-Vietnam basic/AIT training letter, early 1970 ("physical test / mental test / trainee / I hate this place"). A NEW era not yet represented on the site.

## Key insight: the jp2 series (dad207-220, dad289-290) is a parallel re-scan

The 16 `.jp2` files overlap in content with the `.jpg` series and with each other; they scan at lower resolution than the jpgs. Confirmed so far:
- dad207 (jp2) = same page as dad206 (jpg) — Letter B p1.
- dad208 (jp2) = Letter B closing page: "Can't think of much else to say that we won't already have discussed when I call. Love Charles." (So **Letter B** = dad206/207 p1 + dad208 last — likely complete, 2pp, pre-Vietnam training.)

## More identified (jp2 block)

| scan | date | role | notes | assignment |
|---|---|---|---|---|
| dad208 | early 1970 | last | "...discussed when I call / Love Charles" | **Letter B** (closing) |
| dad209 | Dec 17-18 1970 | single | "Dec 17 Dear Terrie, Not much happening..." + "Dec 18" addition, Love Charles | **New letter — Dec 17/18 1970** (no Dec 17 on site) |
| dad210 | Dec 9 1970 | p1 | "Dec 9 Dear Terrie, My address for the next 6 days is... HHC XXIV Corp, Security Platoon, APO SF 96369. I have an easy and safe job for the next 6 days here in Da Nang..." | **New letter — Dec 9 1970** (temp Da Nang security-platoon posting; check for service # to redact) |

## Scope estimate (as of this pass)

Remaining unreferenced ≈ 120 scans after twins. Sampling dad202-210 shows the seam holds **genuinely new letters** — Dec 9, Dec 17/18, a mid-Nov 1970 letter (Letter A), and a pre-Vietnam training letter (Letter B) — **interleaved with duplicates and lower-res jp2 re-scans**. Fully cataloging + publishing the remainder is a multi-session effort; each letter needs page-matching across the jpg/jp2 series. NOT a quick sequential read.

Still to catalog: dad214, dad217-220 (jp2), dad289-290 (jp2), then the jpg tail dad222-336 and the low-number stragglers (dad6,11,12,18,26,101,103,119,125,137,147,148,152-157,166,181).

## jp2 block mapped (dad208-213) — a PRE-VIETNAM TRAINING CLUSTER + Dec 1970 letters

| scan | date | role | notes | assignment |
|---|---|---|---|---|
| dad209 | 17–18 Dec 1970 | single | "Dec 17 Dear Terrie, Not much happening. One of the towers we pull guard from was fired at..." + Dec 18; Love Charles | **PUBLISHED** → charlie-to-terrie-1970-12-17-tower-fired-on (converted dad209.jp2→dad209.jpg) |
| dad210 | 9 Dec 1970 | p1 | "Dec 9 Dear Terrie, My address for the next 6 days... HHC XXIV Corp, Security Platoon, Da Nang... easy and safe job" | **Dec 9 letter** (likely missing a middle page before dad211) |
| dad211 | 9 Dec 1970 | last | "...me a little. Otherwise things couldn't be brighter... hard to make a call around here but I'll try before X-mas." Love Charles | **Dec 9 letter** closing |
| dad212 | training (pre-VN) | p1 | "Dear Terrie, ...preparing for this damn inspection on Saturday... Another company just graduated. All went to Germany except their NCO's. They went to Viet Nam... refusing NCO school... beginning to hate the army... G-3 test" | **Training Letter C** (AIT/NCO-school decision) |
| dad213 (=dad215) | training (pre-VN) | last | "The guy from Sears was Doug Hass... I still haven't sent my income tax in... due back from US & Maryland... had my wart treated, they froze it..." Love Charles | **Training closing** (pairs with a training p1 — income-tax ref ⇒ ~Jan–Apr) |

**Big finding:** the jp2 series holds a cluster of Charlie's **pre-Vietnam Army training letters** (Basic/AIT, the NCO-school-vs-Vietnam decision, "beginning to hate the army" before he ever shipped) — a genuinely NEW chapter the site doesn't yet cover. These are **undated** (no date headers), multi-page, and interleaved, with likely page gaps — so they need the whole cluster read and assembled by content/ink/handwriting before publishing cleanly. Identified so far: Letter B (dad206/207 p1 + dad208 close), Letter C (dad212 p1 + a closing), plus the dad213 training closing.

**Note on jp2:** these scans are `.jp2` (native 1190×1541). Astro/sharp on Vercel may not read jp2, so each one published must be converted to `.jpg` in the assets folder first (as done for dad209, dad214).

## DATING WORKFLOW (per Chuck): undated letters have postmarks on their envelopes

Chuck will add the real dates later from the original envelopes. So: publish undated training letters marked **UNDATED** (no `postmarkDate`; provisional `sortDate` only for ordering; a "date on the envelope" note in `source` and an aside), and don't fabricate a display date. Slugs for undated letters are **yearless** (e.g. `charlie-to-terrie-basic-training-first-day`) so Chuck can date + rename without fighting a wrong year in the URL.

## Existing pre-Vietnam training letters already on the site (DEDUP against these!)

Scans already used: nco-school=dad5, christmas-leave=dad221, 1970-02-basic-training-orders=dad236, 1970-02-18-nco-training=dad240, fort-bragg-pistol-and-grenades=dad228, 1970-04-12-orders=dad226/227, 1970-03-29-ticket-cash, 1970-spring-woodstock. **None overlap** with the jp2 training scans (dad206/208/212/213/214), so those are NEW content. (Caution: the "nine weeks into training" anchor in the 18 Feb 1970 letter is NCO training, not basic — don't use it to date basic.)

| scan | status |
|---|---|
| dad214 (=dad216) | **PUBLISHED** → charlie-to-terrie-basic-training-first-day (undated; first day of basic, KP 3:30AM) |
| dad206/207 (p1) + dad208 (close) | Training "Letter B" — tests/promotion/"I hate this place" → "discussed when I call" — NOT yet published (verify 2pp vs missing middle) |
| dad212 (=dad5) | Page 1 of **`charlie-to-terrie-1969-nco-school`** — Chuck un-withheld it June 2026 (was private). Now PUBLIC with full transcription; scan dad5 shown. dad212 is a second scan of the same page. Closing page still not identified. |
| dad213 (=dad215) | Training closing — Doug Hass/Sears, income tax, wart — pairs with a training p1 — NOT yet published |
| dad217 | **PUBLISHED** → charlie-to-terrie-reception-basic-begins-monday (single; reception week, "Basic begins Monday", visit 20 Dec) |
| dad218 (p1) + dad219 (close) | **PUBLISHED** → charlie-to-terrie-training-m72-and-the-ring (AIT; M-72 launchers, the $20 ring, "still willing to marry you"; ~Easter/spring 1970) |
| dad220 | training p1 — "Dear Terry, this place isn't much better than a prison. Thanksgiving day eve, a day off from training..." — NOT yet published (needs continuation) |
| dad289 (p1) + dad290 (close) | **PUBLISHED** → charlie-to-terrie-1970-10-19-160-days (VIETNAM, dated Oct 19 1970; chopper mail, 160 days, lowlands ~Nov 2) |

**jp2 block (dad207–220, 289–290) fully read.** Published from it this session: dad209 (Dec 17), dad214 (first day basic), dad217 (reception), dad218+219 (M-72/ring), dad289+290 (Oct 19). Still to pair/publish (training, undated, need continuations): **dad206/207 p1 + dad208 close** (Letter B — tests/"I hate this place"), **dad212 p1 + a closing** (Letter C — NCO-school-vs-Vietnam), **dad213** (Doug-Hass closing), **dad220** (Thanksgiving-eve p1). Their continuation pages may be in the un-read jpg tail (dad222+) or low-number stragglers.

| dad222 (p1) + dad223 (close) | **PUBLISHED** → charlie-to-terrie-training-mortar-and-nco-decision (mortar training, 50/50 Vietnam, why NCO school "isn't worth it"). Chuck: "publish both." |
| dad213 (=dad215) | Training closing (Doug Hass/Sears, income tax, wart) — unpaired; could be the closing of the withheld nco-school letter OR a separate letter. Hold until its p1 is found. |

**PRIVACY NOTE:** the family withheld the `1969-nco-school` letter (private: true). When mining training letters, check each against the private entries before publishing — a readable scan of a withheld letter must NOT be published or attached (the template hides scans of private letters, so attaching would be pointless anyway).

## ⚠️ NON-CHARLIE / SENSITIVE finds — DO NOT PUBLISH

- **dad242 (p1) + dad243 (p2)** — 13 Oct 1967 love letter to Terrie ("Dearest Tari") from an unknown serviceman stationed at **Yamada, Japan** ("relieve Butch... TDY to Korea"), an **earlier suitor** from Terrie's Air-Force-dependent years (her father Robert Earl was the commanding officer; "the commander's daughter... stay away from Dependents"). NOT Charlie (he was at Marietta College in 1967). Signed with an illegible short name. **Chuck: "Hold it — don't publish."** Kept in private archive only.
- **Implication:** the dad### scan set is NOT all Charlie's letters — it includes some of Terrie's other/earlier correspondence. Watch every letter's author/date before publishing.

## orphan closing fragments (need their page-1s)

- **dad239** — tiny closing ("Mrs. Hauser sent it... She is funny. Keep studying. Love Charles" + "got your package" P.S.).
- **dad241** — closing ("phones here not very private... may call you on my birthday [~Feb 17]... reading Catch-22... Love Charles").

## jpg tail — dad222+ (mining in progress)

| scan | date | role | notes | assignment |
|---|---|---|---|---|
| dad222 (p1) + dad223 (close) | training | 2pp | **PUBLISHED** → charlie-to-terrie-training-mortar-and-nco-decision |
| dad224 | 26 Jun 1970 | single | **PUBLISHED** → charlie-to-dorothy-hauser-1970-06-26-keep-working-for-peace |
| dad229 | fall 1969 ("618 days left") | p1 | **PUBLISHED** → charlie-to-terrie-training-dc-guard (D.C. guard / Tomb of the Unknown Soldier interview). Opening family-health passage (Anne + living Jeanne psychiatric) TRIMMED per Chuck ("trim the whole passage"). Page 2 still not located. |
| dad232 (p1) + dad230 (p2) | ~early Mar 1970 | 2pp | **PUBLISHED** → charlie-to-terrie-training-washington-after-april (first day of mortar training; NCO school turned down; "chances excellent I'll be in Washington after 18 April... at least I won't be going overseas"; Easter leave). Anne/Jeanne passage TRIMMED per Chuck's standing call. dad230 was the "orphan Easter closing" — it's this letter's p2. |
| dad231 | training (E-2, clerk) | single | **PUBLISHED** → charlie-to-terrie-training-clerk-e2 (clerk training, "not a PFC... only an E-2," types too slow) |
| dad233 | training (D.C. guard) | close | **ATTACHED** as closing of charlie-to-terrie-training-dc-guard (dad229) — "interview Saturday for the 'guard' job... from the 15 April on"; mail messed up, slumber party, "don't rush into it like I did." Middle page may be missing between dad229 p1 and this. |
| dad237 (p1) + dad238 (p2) | ~mid-Apr 1970 | 2pp (close missing) | **PUBLISHED** → charlie-to-terrie-training-orders-decide-everything ("a lot depends on my orders now... I probably would force you to marry me when I just see you and I don't want that... spur-of-the-moment cure-all"; finish school, loans, 17 April). Anne line TRIMMED. dad238 breaks off "I got a letter from..." — closing page not located. |

Provisional training-arc order (Chuck to fix from envelopes): dad220 (Thanksgiving eve, ~Nov 1969) → dad217 (reception, "basic begins Monday", ~mid-Dec 1969) → dad214 (first day of basic, ~late Dec 1969) → [basic/AIT letters] → dad218+219 (M-72/ring, ~spring 1970, Easter) → existing Fort Bragg/orders letters (Mar–Apr 1970) → Vietnam (May 1970).

## To catalog (unreferenced, minus twins)

dad6 dad11 dad12 dad18 dad26 dad101 dad103 dad119 dad125 dad137 dad147 dad148 dad152 dad153 dad154 dad155 dad156 dad157 dad166 dad181 dad207 dad208 dad209 dad210 dad211 dad212 dad213 dad214 dad217 dad218 dad219 dad220 dad222 dad223 dad224 dad229 dad230 dad231 dad232 dad233 dad237 dad238 dad239 dad241 dad242 dad243 dad244 dad246 dad250 dad251 dad252 dad259 dad260 dad263 dad264 dad265 dad266 dad267 dad268 dad269 dad271 dad272 dad273 dad274 dad275 dad276 dad277 dad278 dad279 dad280 dad281 dad282 dad283 dad284 dad289 dad290 dad291 dad292 dad293 dad294 dad295 dad296 dad297 dad298 dad299 dad300 dad301 dad302 dad304 dad305 dad306 dad307 dad308 dad309 dad310 dad311 dad312 dad313 dad314 dad315 dad317 dad319 dad320 dad321 dad322 dad323 dad324 dad325 dad326 dad327 dad328 dad329 dad330 dad331 dad333 dad334 dad335 dad336
