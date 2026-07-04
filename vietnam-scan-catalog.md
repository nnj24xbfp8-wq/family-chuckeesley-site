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

## orphan fragments (need their other pages)

- **dad239** — tiny closing ("Mrs. Hauser sent it... She is funny. Keep studying. Love Charles" + "got your package" P.S.).
- **dad241** — closing ("phones here not very private... may call you on my birthday [~Feb 17]... reading Catch-22... Love Charles").
- **dad246** — Dec 1970 MIDDLE page ("...when we are living together... if there is a 10 month tour I would be home middle of March... I leave here Feb 4... meet in Hawaii... mail it to Florida... I'll finish the letter tomorrow"). Page 1 AND page 3 both missing (multi-day letter). Mild "if we are both horny" tease.

## Vietnam Dec 1970 — published this pass

- **dad244** → **PUBLISHED** charlie-to-terrie-1970-12-08-call-and-the-mess-hall (Dec 8: "hope to call you Dec 13," rear-area good life; sets up the existing Dec 14 phone-call letter). Anne/Jeanne "breakdowns" passage TRIMMED per standing call.
- **dad259 (p1) + dad260 (p2)** → **PUBLISHED** charlie-to-terrie-1970-12-28-ten-month-rumor-and-married-early (Dec 28: 10-month tour rumor / "married early"; the "platoon wiped out" scare that was a lie; "stop sending magazines... they have a library").

## Vietnam Oct 1970 run — published this pass (dad263, dad265–dad278) — a clean contiguous sequence

- **dad263 + dad265 + dad266 + dad267 + dad268** → **PUBLISHED** charlie-to-terrie-1970-10-03-malaria-cam-ranh-bay (Oct 3, 5pp: recovering from MALARIA at Cam Ranh Bay; "no damage... medicine to cure Malaria where they didn't in WWII"; avoiding return to company; FSB Kathryn closed, ARVN holds O'Reilly, "still 70-100 GI's die every week"; degree push; drop rumors; "china/silver next summer... depends on me and the service"; day 144, 252 left). Intimate/teasing "mistress/sex" passage on p2 TRIMMED — the passage Charlie himself flags with the closing line "Ignore the offensive parts of this letter."
- **dad269 + dad270 + dad271 + dad272** → **PUBLISHED** charlie-to-terrie-1970-10-06-back-to-the-field-raise-hell (Oct 6, 4pp: back from hospital, pushed to field; company went 3 days without food, 2 men lost a foot to booby traps; "How I hate this army and the 101st in particular"; wrote congressman, voting "immediate pull out candidates"; new captain, racial tensions; the telegram/$3-a-minute call; "raise hell" via Red Cross if letters stop; in field til Thanksgiving).
- **dad273 + dad274** → **PUBLISHED** charlie-to-terrie-1970-10-08-leaving-for-the-field (Oct 8, 2pp short: "I leave for the damn field today"; disbelief at staying in the mountains through monsoon; finances not straightened; "5 months over, 3 left if out in June").
- **dad275 + dad276** → **PUBLISHED** charlie-to-terrie-1970-10-10-still-alive-lowlands (Oct 10, 2pp short: resupply note "to let you know I'm still alive"; lowlands, taking another company's place; dean's-list push; "hope Nixon announces a plan for faster withdrawal").
- **dad277 + dad278** → **PUBLISHED** charlie-to-terrie-1970-10-14-the-hawaii-idea (Oct 14, 2pp: FIRST appearance of the Hawaii R&R plan — "Do you want to meet in Hawaii in Feb?" — origin of the later "Hawaii deal"; "out of the field May 1, 1971"; 240 left / 140 in field; "the end is in sight").

⚠️ **dad264 = a DIFFERENT letter — NOT part of the Oct 3 run.** It's a **March 22, 1971** R&R-orders letter ("I have the orders... You are listed as Mrs. Eesley (the clerk who typed them did that) so you could get the reduced fare... I will buy all my clothes here or in Hawaii"). Belongs with the 1971 Hawaii-trip / second-R&R-booking thread. Held as an orphan page — needs its other page(s); flag for the Hawaii-trip cluster. (dad264 exists as .png only.)

⚠️ **dad270 / Woodstock conflict — NEEDS CHUCK'S DECISION.** The existing private entry `charlie-to-terrie-1970-spring-woodstock.md` cites **dad270.jpg** and describes a faded spring-1970 letter whose only surfaced line is "I saw the movie Woodstock today. Quite interesting!!" But dad270.jpg is in fact **page 2 of the Oct 6 1970 letter** (booby traps / "I don't walk point" / the telegram) — verified by its clean flow between dad269 p1 and dad271 p3. So the Woodstock entry's scan citation is wrong (an earlier-pass error). The real "Woodstock" scan is elsewhere (spring 1970, so a lower/earlier dad# — not in the Oct block). **RESOLVED this pass:** OCR-swept all 252 scans for "woodstock/movie/festival/interesting" — no hit (tesseract can't read the faded cursive, so inconclusive). Numbering is NOT chronological (June 22 1970 = dad1; June 26 = dad224; Aug 17 = dad248/249; Sept 21 = dad316; Oct 3 = dad263), so no neighborhood search is possible; the scans were almost certainly renumbered after the woodstock entry was first written (earliest commit), which is why its dad270 citation now lands on the Oct 6 p2. FIX APPLIED: removed the false dad270 ref from charlie-to-terrie-1970-spring-woodstock.md (scans: [] now), rewrote its source note to say the scan is UNLOCATED and the line was transcribed from the physical letter, redated the screening to late-spring/summer 1970 (after he reached Vietnam ~mid-May). Entry preserved as a text-only cultural-record note. **Only Chuck can finish this** — match the Woodstock line to its physical letter/envelope, then we can repoint the scan.

## faint orphan middle pages (relationship/marriage; low-res, hard to place)

- **dad250** ("2") — "still serious about you... faithful... clear my doubts... still a good boy so don't worry."
- **dad251** ("5"?) — "I just don't want to be rushed... I want to be married also just as bad as you... the army is one hell of a strain."
(These belong to one or more long marriage-discussion letters; page 1s/other pages not yet matched. dad246 may belong with these.)

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

## dad279–336 block — fully read and mined this pass (16 new letters + 2 existing entries completed)

Surveyed the entire dad279–336 range. Found a much richer seam than expected: 16 new complete, datable letters spanning 1 July – 28 October 1970, plus the true closing pages for two letters that were already on the site as page-1-only stubs. All published this pass:

**New letters published:**
- **dad321+322+323** → **PUBLISHED** charlie-to-terrie-1970-07-01-the-month-is-over (1 July 1970, 3pp — one of the earliest surviving tour letters; "the month is over with, I have survived," 50 days in, marriage location left entirely up to her, enemy complex spotted by helicopter).
- **dad324+325+326+327** → **PUBLISHED** charlie-to-terrie-1970-08-05-ripcord-and-casualties (5 Aug 1970, 4pp — FSB Ripcord reference: he left it in June before it took 1000+ shells; 12 dead in one company, 9 in D Co; Japan trip idea from Joanne; dad's new car; "don't want to marry a big debt").
- **dad328+329** → **PUBLISHED** charlie-to-terrie-1970-08-05-beach-and-the-village (a SECOND, shorter letter also dated 5 Aug 1970 — beach day, Daytona Beach daydream, the village/prostitution/children-as-brokers passage, "I've been a good boy for the 85 days." No formal sign-off — letter just stops).
- **dad330+333+336+331** → **PUBLISHED** charlie-to-terrie-1970-08-09-the-beard-and-slow-down-on-marriage (9–11 Aug 1970 multi-day letter — captain rotation, "calm down a little" on wedding planning, beard restarted, parents' address requested). ⚠️ **dad334 WITHHELD** — the same undated run includes a page with a much harsher jealousy/moral passage (a tasteless "joke" about his own reaction, questions about Terrie's dating history) than anything else in the corpus; Chuck's call was to publish the rest and cut this passage entirely, no placeholder. The opening fragment of dad331 ("really can't tell.") is the tail of that same passage and is also omitted — published transcription of dad331 starts at its next sentence.
- **dad308+309** → **PUBLISHED** charlie-to-terrie-1970-08-29-109-days-and-the-wedding-plan (29 Aug 1970, 2pp — O'Reilly/Katherine status, 109 days in, contingency wedding plan if she doesn't graduate on time).
- **dad304** → **PUBLISHED** charlie-to-terrie-1970-09-04-new-captain-and-the-monsoon (4 Sept 1970, page 1 only — writing under a poncho, new captain's questionable patrol call. NOTE: dad305, initially guessed as this letter's closing, turned out on close reading to be a duplicate scan of the Sept 28 letter's closing (dad319) — NOT this letter's page 2. This letter's true closing is still unlocated.).
- **dad306+307** → **PUBLISHED** charlie-to-terrie-1970-09-07-firebases-and-the-honeymoon (7 Sept 1970, 2pp — O'Reilly/Katheryn evacuated for the monsoon, not the enemy; honeymoon location ideas; $130 check).
- **dad310+311** → **PUBLISHED** charlie-to-terrie-1970-09-10-helicopter-crash-and-canada (10 Sept 1970, 2pp — helicopter crash killed 33 ("one of the minor things to worry about"), camera/radio shopping list, "I'd be a resident of Canada now," overheard conversation on race).
- **dad312+313+314+315** → **PUBLISHED** charlie-to-terrie-1970-09-14-jungle-mountains-and-first-contact (14 Sept 1970, 4pp — 50-day no-contact streak broken, one enemy killed ("a terrible, cruel business"), Harty's draft lottery number, Dorothy Hauser's care packages, reading list).
- **dad320** → **PUBLISHED** charlie-to-terrie-1970-09-30-twenty-inches-of-rain (30 Sept 1970, 1pp — dreading forecast October rain, $130 confirmed received, pulled onto guard duty the same night).
- **dad279+280** → **PUBLISHED** charlie-to-terrie-1970-10-15-first-kill-in-three-months (15 Oct 1970, 2pp — VIPs by helicopter after the brigade's first kill in 3 months; Marjie's sorority rush; still hasn't written Terrie's parents).
- **dad281+282** → **PUBLISHED** charlie-to-terrie-1970-10-17-the-only-group-with-contact (17 Oct 1970, 2pp — "the only group that has contact anymore"; June 12 out-date, 240 days).
- **dad291+292+293+294** → **PUBLISHED** charlie-to-terrie-1970-10-20-the-apartment-and-other-girls (20 Oct 1970, 4pp — Sandy reassurance/Hawaii suggestion, GE stock, apartment-before-marriage idea, "you still get the most letters" re: other girls writing him).
- **dad295+296+297** → **PUBLISHED** charlie-to-terrie-1970-10-24-typhoon-alert-and-165-days (24 Oct 1970, 3pp — typhoon alert, congressman's reply pending, 9 GIs killed in a booby trap, stereo brochures).
- **dad299+300+301** → **PUBLISHED** charlie-to-terrie-1970-10-28-one-year-in-the-army (28 Oct 1970, 3pp — "I do think I came back out too soon" re: his malaria evacuation, 1-year-in-Army milestone 9 Nov, no support "at this time").

**Existing page-1-only entries completed with their true closing pages:**
- charlie-to-terrie-1970-09-21-malaria-hospital — added page 2 from **dad317** (Woodstock tape, flush toilets, "keep writing and I love you").
- charlie-to-terrie-1970-09-28-cam-ranh-bay-convalescence — added page 2 from **dad319** ("I guess I'm in good enough health... getting ready to move now").

**Non-byte-identical duplicate scans identified this pass** (same content as an already-used scan, different scan pass — add to the dedup list): dad283=dad289, dad284=dad290, dad302=dad301, dad305=dad319.

**Still open from this block:**
- **dad298** — tiny orphan fragment: "...my uncle says you may move soon... landlord problems... most landlords are bastards so don't have any guilt feelings about moving." Not yet matched to a letter.
- **dad335** — "August 14" letter, page 1 only ("We are finally in the lowlands but only for a week... company lost 8 men over an 8-month period... 301 days left"). Continuation/closing not located in this block — check the low-number stragglers.
- The true closing of the **4 September letter** (dad304) is still unlocated.

## Still to catalog

**Low-number stragglers — NOT YET SURVEYED** (next priority): dad6 dad11 dad12 dad18 dad26 dad101 dad103 dad119 dad125 dad137 dad147 dad148 dad152 dad153 dad154 dad155 dad156 dad157 dad166 dad181

**Still-open orphans from earlier passes** (unchanged): dad239, dad241, dad246, dad250, dad251, dad264, dad298, dad335 (see above), plus the Woodstock scan (unlocated — Chuck to match from the physical letter/envelope).
