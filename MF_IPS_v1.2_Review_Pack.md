# Mutual Fund IPS v1.2: Review Pack

**Prepared:** 10 Nov 2026 · **For:** Mutual_Fund_IPS_v1.2.md (draft for investor approval; v1.1 stays operative until you sign)
**Contents:** 1. What was and was not possible · 2. Change log · 3. Data freshness report · 4. Quantitative validation report · 5. Open decision register · 6. Final quality-control report

---

## 1. What was and was not possible

**Verified from primary or official sources**
- All 11 NAVs and their dates, from the AMFI NAV file downloaded late on 9 Nov 2026 and re-checked on the morning of 10 Nov (no scheme changed). All 11 match the tracker exactly.
- Units, from your portfolio record. Lot totals tie to the unit counts for every fund.
- Axis Greater China: AUM as on 31 Aug 2026 (₹4,061.57 cr), benchmark (MSCI Golden Dragon, INR), underlying fund (Schroder ISF Greater China), manager, geographic split, from Axis's own factsheets.
- Edelweiss US Technology: underlying fund (JPMorgan Funds – US Technology Fund), declared benchmark (Russell 1000 Equal Weighted Technology), Direct all-in ratio 1.51%, exit load, from Edelweiss's own factsheet, dated 30 Sep 2025 (stale).

**Not verifiable in this pass, so marked UNVERIFIED and not used as PASS**
- Expense ratios, AUM and managers for most funds. Fund-ranking pages disagree widely (for example Bandhan Small Cap's AUM is quoted from ₹5,166 cr to ₹35,856 cr, and its ratio from 0.35% to 0.63%), and none is an AMC or AMFI document.
- Security-level portfolio disclosures from the AMCs, benchmark return data, international subscription windows, the Nifty 500 200-DMA reading, and the tax inputs listed in Appendix 1.

**About your prompt.** The first paste stopped in the middle of a sentence in §6.1. The second paste was complete (sections 1 to 12) and I applied all of it.

---

## 2. Change log

| Section | v1.1 issue | v1.2 change | Reason |
|---|---|---|---|
| Header | Valuation quoted as ₹34.5 L at 3 Nov NAVs | ₹35,54,638 at AMFI NAVs of 6 and 9 Nov 2026; status line: draft, v1.1 operative until signed | Latest-data rule; proposed rules must not be treated as approved |
| What changed | Only v1.1 changes listed | v1.2 table added; v1.1 table kept as history | Preserve the audit trail |
| A | Book benchmark: S&P 500 for the whole international sleeve | Blended at strategic weights: 78 / 8 / 6 / 8 = 100% | International sleeve holds three different exposures |
| B.1 | Tech slot "6% max" with no rule for the unused part; China slot labelled EM | Both marked OPEN (D-03, D-05); slot shares shown to add to 100% only with a fixed 6% | Do not convert a maximum into a target silently |
| B.2 | Fund count 8–10 while 11 funds are held | Transitional exception to 1 Jan 2027 | Documented, with an end date |
| B.3 (new) | Target, band and hard limit used interchangeably | Three terms defined; a bucket above target takes no new money | Prevent drift towards the band edge |
| B.4 (new) | 20% slot with a single fund against an 18% at-cost limit | Rule for single-fund slots; OPEN D-01 | The conflict is real and was unstated |
| C | Value snapshot at 3 Nov NAVs presented as holdings | Recomputed table with NAV, date and units per fund | No stale-number carry-forward |
| D.3 | Slot indices for domestic slots and US broad only | Added US thematic and China slot benchmarks | Measurement of the whole sleeve |
| D.4 | Gates silent on evidence quality | Evidence rule: PASS needs a dated official source | Aggregator figures disagree |
| F.1 | Bucket, slot, fund, then size | Precedence of limits; amount is the least of five limits; bucket above target gets nothing | Prevent a fund getting money that breaches a limit |
| F.2 | "Nothing idle" with no rule when no eligible bucket exists | Not forced; OPEN D-06; liquid fund up to 30 days | Avoid forcing money into a bucket above target |
| G.5 (new) | Consolidation judged by fund count | Ten computed checks; executable only when every input is verified | Consolidation could breach the ceiling |
| H.3 | Tax lots not considered for Bandhan | Lot-level note, and a record check before the 24-month test | Lot ages and cost drive the cost of acting |
| I.1 | International window treated as a manual check | A required input; unverified means no international purchase | Fresh money needs a verified window |
| I.3 (new) | One benchmark for three slots | Slot benchmarks with basis and limits | §6 of your brief |
| J | Small-cap row only | Thirteen decisions with IDs, deadlines and defaults | Every open item has an owner date |
| K | Gate checks manual; no output specification | Dashboard output fields; note that code still implements v1.1 | Traceability |
| L | No prohibition on stale data or limit-breaching transfers | Three added | Enforce Part M and §B.2 |
| M (new) | No data-freshness rules | Valuation date, sources, freshness by calculation, missing data, five statuses, twelve record fields | §2 and §7 of your brief |
| N (new) | Benchmark described in one line | Blended benchmark table, three measurement levels, attribution list, annual review | §6.4 and §6.5 of your brief |
| Appendices | None | Data freshness register; quantitative validation with formulas; decision register | §2.6, §9, §11 |

Unchanged on purpose: objectives, return objective, horizon, risk tolerance, the five buckets and their targets and bands, the scoring model, the challenger rule, exit rules, the tax rules in §H.2, the glide path, and the disclaimer.

---

## 3. Data freshness report

| Input | Latest date | Source | Verification | Limitation |
|---|---|---|---|---|
| NAV, 7 domestic schemes | 9 Nov 2026 | AMFI file | PASS | |
| NAV, Parag Parikh and 4 international schemes | 6 Nov 2026 | AMFI file | PASS | These schemes lag by design; the date is shown per fund |
| Units, 11 funds | Last entry 30 Jun 2026 | Investor record | PASS | Not reconciled to a CAS; Axis cost record wrong (A2.8) |
| Cost basis, 10 of 11 funds | | Investor record | PASS | Axis Greater China cost understated by ₹65,795.42 |
| AUM: Axis Greater China | 31 Aug 2026 | Axis e-factsheet | PASS | |
| AUM: Bandhan, Invesco, Edelweiss US Tech | Sep 2026, Sep 2026, Apr 2026 | Aggregators | UNVERIFIED | Pages disagree for Invesco and Bandhan |
| TER: Edelweiss US Tech | 30 Sep 2025 | Edelweiss factsheet | UNVERIFIED (stale) | 1.51% against a 1.5% gate |
| TER: all others | | Aggregators | UNVERIFIED | Ranges: Bandhan 0.35–0.63%, Invesco 0.40–0.66% |
| Managers | | Axis and Bandhan factsheets; aggregators | UNVERIFIED | Axis's foreign manager since 1 Mar 2024 (under 3 years) |
| Holdings and overlap | | None retrieved from an AMC | UNVERIFIED | |
| Exit load: Bandhan, Invesco | | AMC-linked and aggregator pages agree | INDICATIVE | Read the SID before acting |
| Benchmark identity: Axis, Edelweiss US Tech | | AMC factsheets | PASS | |
| Benchmark return data | Not downloaded | | UNVERIFIED | |
| International windows, 200-DMA | Not checked | | UNVERIFIED | |
| Tax inputs | | Records; v1.1 rules | UNVERIFIED | Exemption used this FY not on file |

---

## 4. Quantitative validation report

### 4.1 Before and after

"Before" is the v1.1 snapshot (3 Nov 2026 NAVs). It is historical and is shown only for comparison.

| Fund | v1.1 value (₹) | v1.1 % | v1.2 value (₹) | v1.2 % | Change in value (₹) |
|---|---:|---:|---:|---:|---:|
| Parag Parikh Flexi Cap | 628,116 | 18.2% | 650,582 | 18.3% | +22,466 |
| Invesco India Smallcap | 531,499 | 15.4% | 560,195 | 15.8% | +28,696 |
| Invesco India Contra | 401,165 | 11.6% | 422,319 | 11.9% | +21,154 |
| Edelweiss Mid Cap | 384,669 | 11.2% | 397,844 | 11.2% | +13,175 |
| Motilal Oswal Midcap | 348,883 | 10.1% | 362,801 | 10.2% | +13,918 |
| Bandhan Small Cap | 291,119 | 8.4% | 301,036 | 8.5% | +9,917 |
| Kotak Large & Midcap | 263,857 | 7.6% | 277,288 | 7.8% | +13,431 |
| Axis Greater China FoF | 238,341 | 6.9% | 236,418 | 6.7% | -1,923 |
| Edelweiss Greater China | 128,094 | 3.7% | 125,087 | 3.5% | -3,007 |
| Edelweiss US Technology | 119,348 | 3.5% | 112,718 | 3.2% | -6,630 |
| Franklin US Opportunities | 114,771 | 3.3% | 108,350 | 3.0% | -6,421 |
| **Total** | **3,449,862** | **100%** | **3,554,638** | **100%** | **+104,776** |

### 4.2 The figures v1.1 told you not to reuse, recomputed

| v1.1 figure | v1.1 value | Recomputed (9 Nov 2026) |
|---|---:|---:|
| Total portfolio | ₹34,49,862 | ₹35,54,638 |
| Invesco India Smallcap | ₹5,31,499 | ₹5,60,195 |
| Bandhan Small Cap | ₹2,91,119 | ₹3,01,036 |
| Combined small cap | 23.8% | 24.23% (**above the 24% band**) |
| Illustrative small-cap need | ₹1,58,473 | No need: bucket is ₹1,50,304 above target. After Bandhan leaves, need is ₹1,49,760 |
| Illustrative residual proceeds | ₹1,32,646 | ₹2,03,308 (§A2.6 of the IPS) |

### 4.3 Allocation after the indicative consolidation

| Measure | Before | After (INDICATIVE) | Limit | Result |
|---|---:|---:|---|---|
| Invesco, % of book (value) | 15.76% | 18.40% | 22% ceiling | PASS |
| Invesco, % of total cost | 15.16% | 18.00% | 18% at cost | At the limit |
| Small-cap bucket | 24.23% | 18.40% | Band 16–24%, target 20% | Band PASS; below target |
| International bucket | 16.39% | 21.36% | Band 15–25%, target 22% | Band PASS; if the window is open |
| Fund count | 11 | 10 | 8–10 | PASS (transitional exception ends) |

v1.1's own plan (all of Bandhan into Invesco) gives Invesco 24.23%: **FAIL**, ₹79,211 over the ceiling.

---

## 5. Open decision register

See Appendix 3 of the IPS: D-01 to D-13, each with description, recommended default, reason, who approves, deadline and the consequence of not deciding.

---

## 6. Final quality-control report

| # | Check | Status | Evidence |
|---|---|---|---|
| 1 | Latest NAVs used | PASS | AMFI file of 9 Nov 2026; 11 of 11 match the tracker (dates 6 and 9 Nov) |
| 2 | Units and fund values verified | PASS | Lot totals tie to units for all 11 funds. Limit: no CAS reconciliation |
| 3 | Allocation totals reconcile | PASS | Buckets 30+20+20+8+22 = 100; domestic 78; international 22 |
| 4 | Slot shares reconcile with the international bucket | OPEN | 8+6+8 = 22 only if the technology slot is a fixed 6% (D-03) |
| 5 | Small-cap consolidation does not breach the single-fund ceiling | PASS | Capped transfer gives Invesco 18.40% against 22%. The v1.1 version fails at 24.23% |
| 6 | Small-cap bucket within its band today | FAIL | 24.23% against 24% (above by ₹8,118); acts at the 1 Jan 2027 action review under §H.1 |
| 7 | Fund count within 8–10 or a documented exception | PASS | 11 funds today; exception to 1 Jan 2027 (D-08) |
| 8 | Single fund within 18% at cost and 22% ceiling | FAIL | Parag Parikh is 19.65% of corrected cost (limit 18%). Within the 22% ceiling, so no trim; no new money under §F.1 |
| 9 | Benchmark weights total 100% | PASS | 78 + 8 + 6 + 8 = 100 |
| 10 | International benchmarks appropriate | OPEN | China: identity verified from Axis's factsheet. US technology: choice open (D-04). US broad: incumbent's own benchmark not retrieved. Return data not downloaded |
| 11 | Deployment and consolidation rules consistent | PASS | §F.1 step 6, §G.5 and A2.6 use the same five limits and give the same transfer |
| 12 | Cross-references correct | PASS | Scripted check: every § reference resolves to a heading or to a numbered item in Part G |
| 13 | No recommendation presented as executable on stale or unverified data | PASS | The Bandhan consolidation is labelled INDICATIVE throughout |
| 14 | Tracker records | FAIL | Axis Greater China cost understated by ₹65,795.42 (A2.8; D-07) |
| 15 | Gate data (TER, AUM, managers, holdings) | UNVERIFIED | Official sources not retrieved for most funds |
| 16 | International windows, 200-DMA regime, benchmark returns, tax exemption | UNVERIFIED | Not retrieved |
| 17 | Proposed rules not treated as approved | PASS | Status line and [PROPOSED] marks; v1.1 stays operative until signed |

**Reading this report.** Items 1 to 3, 5, 7, 9, 11 to 13 and 17 are in order. Items 6, 8 and 14 are real findings in the live book and its records. Items 4, 10 and the decisions in Appendix 3 need you. Items 15 and 16 need data that is not in this pass. No action in v1.2 is executable until they are cleared.
