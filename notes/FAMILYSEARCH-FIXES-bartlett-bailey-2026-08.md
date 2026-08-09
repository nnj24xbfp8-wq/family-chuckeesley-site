# FamilySearch fix list — Bartlett / Bailey line

**Prepared 9 August 2026.** Source of truth for the corrections: Robert Earl Wildermuth's research file, 11 July 1990 — Family Group Records **0019** (Bailey), **0094** (Thomas Bartlett), **0118** (William Bartlett), plus the two typed narrative sketches.

Fix these **in FamilySearch**, then re-sync RootsMagic and re-export the GEDCOM. Changes made only in RootsMagic won't correct the shared tree, and the next sync may overwrite them.

> **Before anything else:** upload the four sheets to FamilySearch as **Memories**, then attach each as a **Source** on the profiles below. Every correction here should carry a reason statement citing them. FamilySearch is a shared tree — an unexplained detach gets reverted by another user; a sourced one usually sticks.

---

## Tier 1 — outright errors, no judgment required

### 1. Nancy Bartlett — `L1ZC-CZY`
**Delete the Death event: "1803, Monogalia Co. VA."**
That is her *marriage* (Thomas Bailey, October 1803, Monongalia County) entered in the death field. She cannot have died in 1803 — her son Thornsberry Jr. was born August 1804 and her daughter Synthia married in 1827.
*Already removed from the local GEDCOM; it will return on the next export unless fixed here.*

### 2. Betsey Bartlett — `KNX4-N5Q`
**Detach as a child of Thomas L. Bartlett Jr. and Sarah.**
Born 24 Dec 1808 in **Cumberland, Maine**; died 1845 in **Mason Township, Oxford County, Maine**. This is a Maine family with no connection to Preston County, Virginia. Two further impossibilities: Sarah would be about fifty, and two of her daughters had already married (1803, 1806). Almost certainly also a duplicate of **Elizabeth Bartlett `L4B5-LTH`**, who is already correctly attached.

### 3. Bad standardized places — 3 profiles
The place-standardizer matched "Harrison" to a magisterial district in Charles City County, in Tidewater — roughly 300 miles from where this family lived.

| Profile | Field | Currently | Should be |
|---|---|---|---|
| Nancy Bartlett `L6T9-J13` | Birth | Harrison Magisterial District, **Charles City County**, Virginia | **Harrison County, Virginia** |
| Amelia Bartlett `L6YH-2VZ` | Birth | Harrison Magisterial District, **Charles City County**, Virginia | **Harrison County, Virginia** |
| Catherine Bartlett `K2XD-3ZW` | Birth | **Kingswood, Nelson**, Virginia | **Kingwood, Preston County, Virginia** — Kingwood is the Preston County seat |

### 4. Thomas Bartlett (b. 1733) — `GWD6-W1Z`
Two problems on this profile regardless of what happens to the parentage in Tier 2:

- **Death place** reads **"Harrison, Clay, Virginia"** — Harrison and Clay are two different counties mashed into one string. Pick one and standardize.
- **Marriage to Anne Settle dated 1748**, when he was **fifteen** and she was about **thirteen**. Either the date or the couple is wrong.

### 5. Thomas Bartlett (b. 1706) — `9VHN-KMQ`
**Name suffix field contains `of Eng. DNA is E1b1b1a`.** Junk in a name field. Move to a note or a discussion post; a haplogroup is not a name suffix.

### 6. Sarah — `LHG5-VL5`
**Clear the surname "Bartlett."** Her maiden name is unknown — the 1990 sketch writes her as *"Sarah ( )"* with the parenthesis left open. FamilySearch convention is to leave the surname blank rather than assign the husband's. As entered she also collides with her own daughter, **Sarah F Bartlett `LCRM-9YX`**.

**The record that would supply it:** the **Fauquier County marriage bond or register, c. 1783** — FamilySearch already places the wedding there, and Fauquier's marriage records survive from the county's formation in 1759. A bond names the bride and normally her father or a kinsman bondsman.

**A lead, not an answer — the Carrolls.** Three Carrolls are already in the tree, and their geography tracks the Bartlett migration county for county:

| | Born | Died |
|---|---|---|
| Sarah Carroll `G3HY-61H` | 1739, **Fairfax** | 1792, **Harrison Co.** |
| **Sanford** Carroll | 1748, Virginia | Jul 1777, **Leeds, Fauquier** |
| Mary Anne Heath Carroll | 1766, **Loudoun** | Jun 1846, **Clarksburg, Harrison Co.** |

William Bartlett's seventh son is named **Sanford** and settled in **Clarksburg**; the Carrolls use Sanford as a given name and have a Loudoun-born daughter who died at Clarksburg. Surname-as-given-name is a documented habit in this family (Hannah Thornsberry → Thornsberry Bailey; Thomas Bailey → Thomas Bailey Fleming).

Two cautions before anyone acts on this:

- The pattern points at **William Bartlett's unknown wife (`UNKNOWN-0339`)**, not at Sarah.
- **Sarah Carroll is not this Sarah.** Born 1739 against Sarah's c. 1758, and she is already attached as a second wife of Thomas Bartlett `GWD6-W1Z` — the profile being detached in item 7. Do not merge them.

Test it against Fauquier and Loudoun deeds and marriage bonds naming both surnames. **Attach nothing on the strength of the name pattern alone.**

---

## Tier 2 — the parentage correction (the big one)

### 7. Thomas L. Bartlett Jr. — `L1ZC-DZF`

**a. Detach the current parents.** He is presently a child of **Thomas Bartlett `GWD6-W1Z`** (b. 1733, Richmond County) and **Anne Settle `G8DL-P7Q`** — a Northern Neck / North Farnham Parish family.

**b. Search FamilySearch for `William Bartlett, b. 1720, Loudoun County, Virginia`.** If he exists, attach. If not, create him:

> **William Bartlett** · b. 1720, Virginia · residence Loudoun County, Virginia · wife unknown
> Children: **William Jr.** (settled Simpson, Taylor Co.) · **Thomas** (the Glades, Preston Co.) · **Benjamin** (Bridgeport, Harrison Co.) · **Robert** (West Fork, s. of Clarksburg) · **John** (West Fork) · **James** (Clarksburg) · **Sanford** (Clarksburg)

**c. Attach Thomas as his son**, with FGR 0118 and the William Bartlett sketch as the source, and a reason statement along these lines:

> Detached from Thomas Bartlett (b. 1733, Richmond Co.) and attached to William Bartlett of Loudoun Co. per Family Group Record 0118 and narrative sketch, Robert E. Wildermuth, 11 July 1990, which names all seven sons and each one's place of settlement — "Thomas settled in the Glades, Preston County, West Virginia." Supporting: (1) Loudoun adjoins Fauquier, where this profile's own birth (1756) and marriage (c. 1783) are recorded, while Richmond County is ~90 miles east; (2) the previous father is recorded as marrying in 1748 at age fifteen; (3) his burial at Simpson, Taylor Co. duplicates the recorded settlement place of his brother William Jr.

**d. Reconsider the suffix "Jr."** It is the main evidence for the old parentage. Thomas named one of his own sons Thomas L. as well, so the suffix may belong to the next generation.

**e. Burial — `Union Baptist Church Cemetery, Simpson, Taylor County`.** Suspect. Simpson is where brother **William Jr.** settled; both Wildermuth sheets place Thomas's death and burial in **Preston County**. Note that the same cemetery is also attached to `GWD6-W1Z`. Either verify with a headstone or Find a Grave record, or remove.

**f. Death date — `1832` vs FGR 0094's `June 1836`.** Both agree on Preston County. Leave both as alternates until a probate or estate record settles it; do not silently pick one.

**g. Death place** reads "Preston, Preston County, West Virginia" — county duplicated, and West Virginia did not exist until 1863. Standardize to **Preston County, Virginia**.

---

## Tier 3 — missing people and probable duplicates

### 8. Add two missing sons of Thomas L. Bartlett Jr. and Sarah
FGR 0094 lists thirteen children; FamilySearch has thirteen but not the same thirteen. **Missing entirely:**

- **Starling Bartlett** (male, no dates)
- **Benjamin Bartlett** (male, no dates)

### 9. Merge candidate — the two Nancys
Both are attached as daughters of the same couple:

- **`L1ZC-CZY`** — b. 1785, Virginia; married Thomas Bailey 1803; mother of Synthia
- **`L6T9-J13`** — b. 1789; d. 1867; no spouse, no children

FGR 0094 lists only one Nancy. Likely the same woman. **Check both profiles' sources before merging.**

The hazard is the **1867 death date**. Neither Wildermuth sheet gives Nancy a birth or death date — FGR 0019 leaves both blank for her and for Thomas Bailey — and nothing turns up on Find a Grave or in the regional cemetery indexes. The 1867 on `L6T9-J13` has no source and no place attached. Merge carelessly and it lands on a well-populated profile looking authoritative. **Carry it over as an alternate with a reason statement noting it is unsourced**, and leave `L1ZC-CZY`'s death blank until something supports it.

What can be bracketed from the records in hand: married October 1803, son Thornsberry Jr. born August 1804, later children born in Taylor County, daughter Synthia married March 1827. Alive well into the 1820s at minimum.

Two records would settle it:

1. **1850 and 1860 census, Preston / Taylor / Harrison County.** 1850 is the first census naming every household member. Her presence or absence brackets the death and probably resolves the 1867 either way.
2. **Virginia county death registers, 1853 onward.** Registration was required statewide from 1853 and kept at county level. If the 1867 is right, there should be an entry.

### 10. Add William Bartlett's other six sons
Only if you want the collateral lines in the tree. Each needs the settlement place from the sketch as a residence: William Jr. (Simpson, Taylor Co.), Benjamin (Bridgeport, Harrison Co.), Robert (West Fork), John (West Fork), James (Clarksburg), Sanford (Clarksburg).

---

## Tier 4 — Bailey side

### 11. Thomas Bailey — `GHDT-ZLX`
- **No mother attached.** FGR 0019 gives her as **Hannah Thornsberry**. Create and attach.
- **Father is entered as "Thomas Bailey" (`PQX9-L3D`).** FGR 0019 gives the father as **"I.B.Y. or J.B.Y. Bailey"** — the compiler explicitly unsure of the initials. Don't overwrite; **add as an alternate name** and attach FGR 0019 as a source so the discrepancy is visible.
- **Marriage date `11 Oct 1803`** vs FGR 0019's **`21 Oct 1803`**. A one-digit difference; a Monongalia County marriage bond would settle it. Add the alternate.

### 12. Thornberry Bailey — `LHPW-LSS`
- **Marriage place** to Mary Bartlett is entered as **Monongalia**; FGR 0094 says **the Glades, Preston County**. Add the alternate.
- **Do not attach parents.** He is very likely Thomas Bailey's brother — b. 1782 against Thomas's c. 1780, both named for Hannah Thornsberry, both marrying Bartlett sisters — but **no source states it.** Leave unattached and record the reasoning in a note or discussion.

### 13. Anachronistic jurisdictions — housekeeping
Several events before 1863 are placed in "West Virginia," which did not exist until then: Charlotte Bartlett `L6YH-286` (b. 1786, "Harrison, West Virginia"), Thomas L. Bartlett `L4B5-LQ8` (b. c. 1789, "Nr. Clarksburg, Harrison, West Virginia"), the two Bailey marriages, and Thomas Bartlett `GWD6-W1Z`'s 1806 burial. Standardize to **Virginia** for pre-1863 events.

---

## After the fixes

1. Re-sync RootsMagic against FamilySearch.
2. Re-export the GEDCOM over `public/docs/eesley-wildermuth-tree.ged` **and** `src/assets 2/family/eesley_wildermuth_zhou_tree.ged`.
3. Tell me, and I'll re-check the archive pages against the new export — the Bartlett pages currently cite specific FamilySearch values that will change.

## Deliberately not on this list

- **Edith Bartlett `LZFM-X7J`**, b. 20 Aug 1801 in **Culpeper, Virginia**. Out of step with the family's geography by 1801, and FGR 0094 lists her fourth of thirteen while the date would make her near-youngest. But FGR 0094 gives no birth dates at all, so its ordering carries little weight. Flagged, not corrected.
- **Whether Thomas's father is really William of Loudoun.** Tier 2 is the best reading of the evidence, not proof. A Loudoun County will or deed naming the seven sons would close it, and is the single highest-value record still to be found on this line.
