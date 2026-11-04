# IPS v5.0 Committee Pack

**Companion to:** Investment Policy Statement v5.0 (draft)
**Baseline information date:** 4 Nov 2026 (prices of 3 Nov 2026, Personal Networth Tracker)
**Status:** DRAFT. Rules are live in the Stocks tab on the investor's instruction. Nothing here is signed off or validated.

Contents: 0 What was adopted from the review prompt · 1 Change log (v4.9 to v5.0) · 2 Executive memorandum · 3 Open issues and approval register · 4 Validation and implementation checklist · 5 Policy consistency review and rule test · 6 Independent review

---

## 0. What was adopted from the review prompt, and what was not

The prompt describes an institutional process. This book is ₹20 L held by one person, so I kept the parts that change a decision and trimmed the parts that only add paperwork.

| Recommendation | Decision | Reason |
|---|---|---|
| Four buckets instead of one "ballast" pool | **Adopted** | NIFTYBEES is equity (it holds HDFC Bank and ICICI Bank), LIQUIDBEES is cash, GOLDBEES is gold. v4.9 mixed them. |
| Denominators defined everywhere (DB, DEB, CSC, MFE, HE) | **Adopted** | v4.9 used "book" for four different bases. This was the largest source of ambiguity. |
| Strictest-limit precedence; direct limits and combined limits measured separately | **Adopted** | Removes the L1, L3, L4 overlap. |
| Business-model gates (bank, NBFC, insurer, capital markets) | **Adopted in part** | The feed has ROE and ROCE only. Asset-quality and capital tests are written into the policy but run as a manual register, and they show UNVERIFIED rather than passing. Thresholds I could not source are labelled proposals. |
| MISSING, STALE, UNVERIFIED statuses; missing data never passes | **Adopted** | The single most useful control for automated screens. |
| Exit hierarchy with 8 tiers; IOC treated as a recorded decision | **Adopted** | Resolves the v4.9 contradiction without reversing the exit. |
| Graded concentration response (soft 90%, hard, emergency) | **Adopted** | Early warning below the cap. |
| Stress-test redesign with actual holdings | **Adopted** | S1, S2, S3, S7 are computed live. S8 needs a benchmark input; S4 to S6 need sensitivity inputs. |
| Scoring changes (normalised growth, industry-relative valuation, stability factor) | **Adopted, flagged as proposals (D-11)** | They fix a real bias: raw earnings yield favours low-P/E PSU names. |
| Drop winsorising | **Corrected** | The draft listed it, but it cannot change a percentile rank. Removed. |
| 200-DMA purchase freeze | **Replaced by pacing (D-16)** | A technical timing filter inside a fundamental mandate can keep a quality name unbought through a whole correction. |
| Benchmarks: add LargeMidcap 250 TRI; TWR, XIRR, pre-tax and after-tax kept apart | **Adopted** | Objective softened to "match or beat" until evidence exists. |
| Full backtest framework | **Written as a gate; not run** | No point-in-time data is held. No result is claimed. |
| Tax update to the Income-tax Act, 2025 | **Adopted** | Rates and holding periods carried over; sections renumbered. CA to confirm (D-17). |
| Investment Committee, 14-section quarterly pack, formal sign-off | **Trimmed** | The IC defaults to the investor with a written record (D-01). The pack is generated from the dashboard, not written by hand. |
| 11-column rules matrix with audit evidence | **Adopted** | Appendix G. |
| Liquidity limits (traded value, spreads, free float) | **Written; not automated** | No traded-value feed. Reports UNVERIFIED. |
| Conviction weighting | **Declined** | No validated way to measure conviction. Equal target weight kept. |
| Many new numeric thresholds | **Trimmed** | Where a threshold could not be defended it is a decision in the register, not a number in the policy. |

---

## 1. Change log: v4.9 to v5.0

R = retained, M = modified, N = new.

| # | Existing section | Existing rule | Identified weakness | v5.0 rule | Reason | Approval |
|---|---|---|---|---|---|---|
| 1 | A.1, A.3 | 100% Core, NIFTYBEES and LIQUIDBEES as unbanded ballast, GOLDBEES capped as Core | Equity, cash and gold in one pool; "100% Core" never defined | M: four buckets B1 to B4 with targets 90/10/0/0 and bands (Part 4) | Correct asset classification; reconciles to 12 × 7.5% | D-03 |
| 2 | Throughout | "Book", "sleeve" and "Core" used for different bases | Limits could not be reproduced | N: denominators DB, DEB, CSC, MFE, HE (Part 3.1) | Reproducibility | Informational |
| 3 | H (v4.9) | Direct 40% / MF 60%, bands 30–50 / 50–70 | None found; an older plan differed | R: kept; D-02 asks for confirmation only | Not reversed because an earlier plan differed | D-02 |
| 4 | §5 | 10% name cap, 25% industry cap | One size for all names | R: 10% hard cap kept; M: 7.5% for riskier names; N: soft line at 90% | Early warning; risk-based size | D-04 |
| 5 | H.2 | 6% company and 10% direct-industry household limits | Overlap with stock-book limits not defined | M: precedence rule; L3 measured on combined exposure; L5 30% household combined industry | Same rupee not counted twice within one test | D-05 |
| 6 | §2 | One gate for all companies; banks on ROE only | Insurers and NBFCs measured like manufacturers | M: gates by business model (Part 6); N: statuses and manual register | Different economics | D-07, D-09, D-19 |
| 7 | §2 | ROE, ROCE, floor, D/E, CFO/PAT | Interest coverage, FCF and margins absent | N: interest coverage, FCF, margin monitoring; coverage becomes a gate when data exists | Completeness without inventing data | D-07, D-08 |
| 8 | §2.1 | 2-quarter probation | Conflicts with the IOC immediate exit | M: tiers 1 to 8 (Part 10); probation only for tier 4 | Removes the contradiction | D-13 |
| 9 | T.3 | IOC exit now | Rule conflict | R: exit kept as DL-001, a recorded one-time decision | Not silently reversed | D-20 (execution) |
| 10 | §7 | Score 40/30/15/15 | Raw growth CAGR, raw earnings yield, no stability measure | M: 35/25/15/15/10; normalised growth; industry-relative valuation; group-relative ranking | Removes sector and cyclical-peak bias | D-11 |
| 11 | §7 | 12 names; incumbents keep their place | No periodic merit test | N: merit review after two bottom-quartile action reviews; annual thesis refresh | Incumbency cannot last forever | D-13 |
| 12 | §7 | No correlated-name limit | Torrent Pharma and Torrent Power are one group | N: max 2 names per corporate group | Concentration through ownership | D-11 |
| 13 | §3 | Euphoria filter on P/E only | Wrong for banks | M: P/B for banks and NBFCs, P/EV for life insurers | Business-model fit | D-15 |
| 14 | §4(b) | 200-DMA purchase freeze | Technical timing in a fundamental mandate | M: pacing rule (3 tranches over 8 weeks) | Avoids missing corrections | D-16 |
| 15 | §3 | Tranches up to 3 | No size rule | N: first tranche half the target; 2.5% per tranche; 5% max per review | Position building discipline | D-04 |
| 16 | A.2, A.5 | 25% drawdown budget on an assumed book | Not measured on holdings; absolute limit unfixable in a broad fall | M: renamed stress-loss threshold; relative test for broad market, absolute 25% for sector and single-stock | Measurable and actionable | D-06 |
| 17 | A.2 | One stress arithmetic | No scenarios | N: eight scenarios; S1, S2, S3, S7 live | Uses actual holdings | D-06 |
| 18 | F.1 | Nifty 500 TRI + 3% | Unproven; benchmark mismatch with universe | M: match or beat Nifty 500 TRI; secondary LargeMidcap 250 TRI; +3% stays an aspiration | No claim without evidence | D-12 |
| 19 | F.2 | Sortino, Calmar, CAGR | TWR vs XIRR vs after-tax mixed | N: four return measures kept separate; compare pre-tax TWR to TRI only | Comparable bases | D-12 |
| 20 | N/A | No underperformance rule | | N: 1, 2, 3 periods below benchmark trigger diagnosis, model review, index-fund decision | Review, not abandonment | D-12 |
| 21 | N/A | No validation | Rules never tested | N: Part 11.6 gate with method and acceptance criteria. Not run. | Honest status | D-14 |
| 22 | T.2 | Trims on shares over 12 months | Tax delaying a risk breach | M: tiers 1 to 3 and emergency breaches override tax; hierarchy in Part 14.4 | Tax never blocks a necessary exit | D-04 |
| 23 | H.3 | Shared exemption | Taxpayer ledger fields thin | M: lot-level ledger; FIFO per demat; exemption order stated | Reproducibility | D-17 |
| 24 | Appendix (v4.8 parts) | Order routing, failover, ledger signatures in the IPS | Operational, not policy | R: stays in the AlgoBot technical spec | Separation | None |
| 25 | A.4 (v4.8) | 50/50 broker split | No investment value | R: remains dropped | | None |
| 26 | E | Review cycle | No decision authority table | N: authority categories A to E; exception register with expiry | Governance | D-01 |
| 27 | N/A | Statuses | Missing data could read as a pass | N: PASS, FAIL, MISSING, STALE, UNVERIFIED; only PASS passes | False compliance risk | D-08 |
| 28 | N/A | Dormant sleeves | Reopening undefined | N: reopen only after Part 11.6 gate and investor approval | | D-14 |

---

## 2. Executive memorandum

**To:** Investment Committee (investor)
**Subject:** Upgrade of the direct equity IPS from v4.9 to v5.0

**Why now.** v4.9 fixed the biggest practical problems: it rebased the policy to the live book, replaced a fixed stock list with a screen, and set a tax-aware plan for the cap breaches. A line-by-line check found contradictions and gaps that would show up as soon as the rules ran unattended: the IOC exit conflicted with the probation rule, several limits used different denominators, banks were tested like manufacturers, and a missing data point could read as a pass.

**Portfolio weaknesses.** The Direct Book is ₹20.0 L in eight holdings. ICICI Bank is 26.3% of it and HDFC Bank 20.4%. Both are above the 10% cap, as are IOC (15.4%) and BEL (14.2%). Financial Services is 46.8% of the book against a 25% limit and 17.2% of household equity against 10%. ICICI Bank and HDFC Bank are 9.7% and 7.5% of household equity, above the 6% household limit on direct holdings alone, before counting what the mutual funds hold.

**Principal risk concerns.**
- Banking concentration: a financial-sector shock (financials −35%, other equity −20%) costs 27.0% of the Direct Book, over the 25% threshold.
- Look-through exposure through mutual funds is unmeasured.
- The scoring model's results are untested, and in the screen as built, high-return state-owned names rank well on a few good years.
- Fundamental data comes from one public source and has no asset-quality or capital data for financial companies.

**Structural improvements.** Four buckets that classify instruments correctly; named denominators; a single precedence rule for overlapping limits; business-model gates; five data statuses where only PASS passes; an eight-tier exit hierarchy; graded concentration responses with soft limits; live stress tests on actual holdings; a transition plan that fixes breaches with new money first and trims only from long-term lots inside the household exemption.

**Expected benefits.** Fewer arguments about what a rule means; early warning before a cap is breached; no false pass from missing data; an exit process that treats a single failed ratio differently from a broken business; and a clear route to restore the stress test to within the threshold by June 2027.

**Trade-offs.**
- The tax-led transition leaves the book above its caps for up to seven months; speed was traded for lower tax and fewer short-term lots.
- The manual register for financial companies adds work and delays buying banks, which are most of the current exposure.
- The scoring changes lower the weight on pure quality and add a stability factor that favours steadier but not necessarily better businesses.
- Rules that cannot yet be automated (P/E history, liquidity, look-through) depend on manual checks.

**Decisions needed.** See the register. The ones that change money: D-02 (household split), D-04 (graded limits and risk-based sizing), D-11 (scoring changes), D-16 (200-DMA), D-18 (look-through data) and D-20 (IOC execution).

**Residual risks after implementation.** The strategy is unvalidated and may not beat a Nifty 500 index fund. Concentration in private banks remains until mid-2027. Stress scenarios are estimates. The screen uses three years of results and may rank cyclical peaks too high. A single investor serves as both manager and committee.

---

## 3. Open issues and approval register

Authority for every item is the investor unless stated. Status for all is **Open** unless marked. "Adopted in dashboard" means the rule is running on the investor's instruction and still needs a signature.

| ID | Issue | Background | Recommended | Alternatives | Risk of not deciding | Information needed | Status |
|---|---|---|---|---|---|---|---|
| D-01 | Committee composition | One investor; a formal committee adds little | Investor plus written record; CA consulted on tax | Add a trusted adviser as second signer | Exceptions lack an independent check | Name of second signer, if any | Open |
| D-02 | Confirm 40/60 household split | Earlier plan was 60/40 the other way; v4.9 chose 40/60 | Keep 40/60 | 50/50; 60/40 | Targets drift; new money routing unclear | Investor's view of stock-picking risk | Open |
| D-03 | Four-bucket targets and bands | 90/10/0/0 reconciles 12 × 7.5% and today's 89.5/10.5 | Adopt | B2 target 0%; B3 target 3% as cash reserve | B2 and cash treated ad hoc | Whether a cash reserve is wanted | Adopted in dashboard |
| D-04 | Graded limits, risk-based 7.5% limit, entry sizing | Soft 90%, hard 10%, emergency 15% of HE | Adopt | Hard cap only | Breaches found late | Beta and net debt data to complete the risk test | Adopted in dashboard |
| D-05 | Precedence and L5 30% household combined industry | v4.9 had no combined industry limit | Adopt strictest-limit rule and 30% | 25% or 35% | Overlap unresolved | Look-through data | Adopted in dashboard |
| D-06 | Stress-loss threshold definition and scenario inputs | 25% absolute fails in a broad fall | Relative for broad market, 25% absolute for sector and single-stock | Keep 25% everywhere | A permanent breach nobody can fix | Shocks for S4 to S6; Nifty 500 loss for S8 | Partly adopted |
| D-07 | Additional gate metrics and eligibility rules | FCF, margins, coverage, U3 and U5 | Adopt as monitoring first | Make all hard gates | Gaps in coverage | Data feed with interest and exceptional items | Open |
| D-08 | Data source for regulatory metrics, P/E history, exceptional items | Only screener.in annual data today | Source quarterly disclosures and price history | Manual entry | Financial companies cannot be tested | Data source choice and budget | Open |
| D-09 | Financial-sector thresholds | Proposed numbers are accepted practice, not mandated | Review each with a banking analyst or CA | Use only ROE until data exists | False precision | Sector benchmarks at the date | Open |
| D-10 | Liquidity rule (0.5% of median traded value) | No traded-value feed | Adopt rule; build feed | Drop until the book is larger | Illiquid positions unnoticed | Traded value data | Open |
| D-11 | Scoring changes: weights, normalised growth, relative valuation, stability, group limit | Fixes sector and peak-year bias | Adopt | Keep v4.9 weights | Screen favours cyclicals | Validation per D-14 | Adopted in dashboard |
| D-12 | Benchmark and objective | +3% unproven | Match or beat Nifty 500 TRI; secondary LargeMidcap 250 TRI | Keep +3% | Claim without evidence | Index TRI data | Open |
| D-13 | Merit review and probation rules | Two bottom-quartile reviews trigger a note | Adopt | Annual only | Stale incumbents | Rank history (builds from first review) | Adopted in dashboard |
| D-14 | Strategy validation gate and data | No backtest exists | Buy or build point-in-time data, then test | Hold index funds instead | Unproven strategy with real money | Constituent history, as-filed fundamentals | Open |
| D-15 | Valuation measures for financials | P/E misleading for banks | P/B for banks and NBFCs, P/EV for life insurers | P/E throughout | Mispriced entries | 5-year P/B and P/EV history | Open |
| D-16 | Replace 200-DMA freeze with pacing | Freeze blocks buying in corrections | Pacing: 3 tranches over 8 weeks | Keep freeze; drop filter | Timing rule hurts compounding | Price history | Open (not automated; the dashboard shows the pacing advice) |
| D-17 | Tax law confirmation | Summaries confirm unchanged rates under the 2025 Act | CA to confirm against statute and Rules 2026 | N/A | Wrong rate or section | CA sign-off | Open |
| D-18 | Look-through data | Mutual fund disclosures not loaded | Load monthly AMC disclosures for 11 funds | Quarterly | L3, L5 stay UNVERIFIED | 11 disclosures | Open |
| D-19 | Manual verification register for financials | Asset quality and capital not in feed | Record PASS or FAIL with date and note; 120 days valid | Exclude financials | New financial buys blocked | Latest investor disclosures | Adopted in dashboard |
| D-20 | IOC exit execution and tax | DL-001 recorded | Confirm date executed; enter realised gain | N/A | Dashboard keeps recommending exit | Contract note | Open |
| D-21 | Info Edge (Naukri) gate result | ROE 1% because equity includes large listed investments | Decide whether to adjust equity for investments or exit | Keep on probation | Misread as business failure or kept wrongly | Investment breakup | Open |
| D-22 | Naukri and BEL probation timing | Both start 4 Nov 2026 | Review at 3rd action review | Earlier review | None material | Q2 FY27 results | Adopted in dashboard |

---

## 4. Validation and implementation checklist

Tick each item with the date and who checked it. Items marked [dashboard] are produced by the Stocks tab; the rest are checked by hand.

**Allocation reconciliation**
- [ ] B1 + B2 + B3 + B4 = 100% of DB (89.5 + 10.5 + 0 + 0). [dashboard]
- [ ] 12 × 7.5% = 90% = B1 target.
- [ ] DEB ÷ HE = 36.7% and MFE ÷ HE = 63.3%; they add to 100%.
- [ ] HE = DEB + MFE (₹54,51,388) and excludes B3 and B4.

**Household exposure**
- [ ] Each of the 11 funds has a disclosure dated within 45 days; stale or missing ones are flagged.
- [ ] HX(c) uses ISINs, not names.
- [ ] L3 and L5 show UNVERIFIED until step 1 is done.
- [ ] Direct L3 test: ICICI Bank 9.7% and HDFC Bank 7.5% of HE flag as above 6%. [dashboard]

**Caps**
- [ ] L1: name ÷ DB; ICICI 26.3%, HDFC 20.4%, IOC 15.4%, BEL 14.2%. [dashboard]
- [ ] L2: industry ÷ DB; Financial Services 46.8%. [dashboard]
- [ ] L4: industry ÷ HE; Financial Services 17.2%. [dashboard]
- [ ] Soft line = 90% of the applicable limit.

**Quality gate and screen**
- [ ] For one non-financial company, recompute ROCE, ROE, D/E and cash conversion by hand from the annual report; they match the dashboard.
- [ ] For one bank, read the latest investor presentation and record a manual check.
- [ ] For one stock, recompute the score from the five factor ranks and confirm the weights (35/25/15/15/10).
- [ ] A missing or stale data point produces MISSING or STALE, never PASS. [dashboard]
- [ ] No more than 2 names from one corporate group in the target list. [dashboard]

**Exit hierarchy and probation**
- [ ] BEL and Naukri show Tier 4 probation with a start date and an end date. [dashboard]
- [ ] IOC shows DL-001 and is not described as a quality-gate result. [dashboard]
- [ ] A held name with stale data shows "Verify data", not a pass. [dashboard]

**Valuation**
- [ ] Euphoria filter checked by hand before each buy (P/E or P/B vs own 5-year band).
- [ ] 200-DMA pacing applied where relevant.

**Stress tests**
- [ ] S1 = 30.0%, S2 = 27.0%, S3 = 21.9%, S7 = 13.2%, S8 = 34.7%, recomputed from the holdings table. [dashboard]
- [ ] After the trim plan S2 = 23.0% and S7 = 5.0%. [dashboard]
- [ ] S4 to S6 inputs agreed (D-06).

**Tax**
- [ ] CA confirms 12.5% LTCG above ₹1.25 L, 20% STCG, 12-month holding period under the Income-tax Act, 2025 (D-17).
- [ ] Exemption used = MF consolidations + stock gains realised this tax year; remaining shown. [dashboard]
- [ ] FIFO is per demat account.

**Benchmarks and performance**
- [ ] TWR, XIRR, pre-tax net and after-tax are four separate numbers.
- [ ] Benchmark comparison uses TRI series and pre-tax net TWR.
- [ ] Book-level TWR built (not yet in the dashboard).

**AlgoBot and data**
- [ ] No rule in the system lacks an IPS reference (Appendix G ID).
- [ ] The system never submits an order without investor confirmation.
- [ ] Data timestamps are stored with each review.

**Exceptions and reporting**
- [ ] Every exception has an expiry date no more than two quarters away.
- [ ] A quarterly pack exists for the next action review (1 Jan 2027) with the Appendix I sign-off block.

---

## 5. Policy consistency review and rule test

### 5.1 Consistency review

| # | Check | Result |
|---|---|---|
| 1 | Allocation percentages add up | Pass: 90 + 10 + 0 + 0 = 100; 12 × 7.5 = 90 |
| 2 | Denominators defined | Pass: Part 3.1 |
| 3 | Stock-book and household limits do not conflict | Pass after fix: the draft implied L3 was looser than L1; it is breached on direct holdings today |
| 4 | Direct and indirect exposure consistent | Partly: direct is known, look-through is UNVERIFIED |
| 5 | Asset classification | Pass: NIFTYBEES equity, LIQUIDBEES liquidity, GOLDBEES gold |
| 6 | Entry, exit, probation consistent | Pass after fix: emergency level no longer overrides the transition for ICICI |
| 7 | Tax consistent with law | Pass subject to D-17 |
| 8 | Formulas reproducible | Pass: Appendix A; winsorising removed |
| 9 | Every exception has an approval route | Pass: Part 18 |
| 10 | Stress rules lead to action | Pass: Part 12.4 |
| 11 | Benchmarks comparable | Pass: pre-tax net TWR against TRI |
| 12 | No undefined terms in screens | Pass after fix: interest coverage demoted to monitoring |
| 13 | Missing data cannot pass | Pass: statuses; financial companies need a register entry |
| 14 | Existing decisions not silently reversed | Pass: IOC exit kept as DL-001; 40/60 kept |
| 15 | Executable without personal judgement | Partly: manual checks listed in Part 17.1 |

**Errors found in my own first draft and corrected:** S7 was marked a breach against the wrong limit (it is −13.2%, within 25%); S8 was marked "within" against an assumed benchmark; L3 was described as "likely" breached when direct holdings already breach it; the winsorising step had no effect; interest coverage was a gate the data could not supply.

### 5.2 Illustrative rule test on the baseline holdings

The engine was run on the tracker holdings. Stock prices are those of 3 Nov 2026. Trim amounts and exemption use are recomputed by the dashboard at each review; dates follow the actual lot dates.

| Case | Rule applied | Result |
|---|---|---|
| ICICI Bank, 26.3% of DB | Tier 6 hard breach (L1). Lot bought 3 Jun 2026 is short-term | Excess ₹3,26,913 over the 10% limit. No new money. Trim from 4 Jun 2027 |
| HDFC Bank, 20.4% | Tier 6 hard breach. Older lots are long-term | Trim now within the remaining exemption after the MF consolidation; remainder on 1 Apr 2027 and 17 Apr 2027 |
| IOC, 15.4% | DL-001, a recorded decision. Not a tier 4 result | Exit in full; lots are long-term. Rule text now stops the conflict recurring |
| BEL, 14.2% | Tier 6 breach and Tier 4 probation (3-year cash conversion 44% against 70%) | Trim from 12 Jun 2027; probation may convert it to a full exit at the third review |
| Financial Services | L2 (46.8% against 25%) and L4 (17.2% of HE against 10%) | After trims to 10% each: about 20% of DB and 7.3% of HE |
| NIFTYBEES and LIQUIDBEES | B2 equity; B3 liquidity | NIFTYBEES (10.5%) counts in HE and look-through but not in name or industry caps. No LIQUIDBEES held |
| Look-through | L3, L5 | UNVERIFIED. Direct alone already breaches L3 for ICICI and HDFC. Missing input: portfolio disclosures for 11 funds |
| Stress-loss breach | S2 | −27.0% against 25%. Freeze money into financials, remediation plan within 15 days, escalate if unresolved after two reviews. After the plan −23.0% |

---

## 6. Independent review

Written as a sceptical committee member who did not draft the policy.

| # | Weakness | Response |
|---|---|---|
| 1 | The objective may be unrealistic: beating an index with 12 stocks after tax is hard | Objective softened to match or beat; index-fund fallback at three periods of underperformance (Part 11.5) |
| 2 | Nothing has been backtested | Stated plainly in the policy and register; validation gate written. **Not resolved.** D-14 |
| 3 | The screen is vulnerable to cyclical peaks and to PSU names | Stability factor and industry-relative valuation added. Not tested. D-11 |
| 4 | Financial companies, nearly half the book, are not properly tested | Manual register; they cannot be bought without a PASS. D-08, D-19 |
| 5 | Look-through exposure is unknown | Direct breaches shown; combined stays UNVERIFIED. D-18 |
| 6 | Tax timing keeps the book above caps for seven months | Accepted trade-off, documented; S2 breach has an explicit remediation clock. Residual risk |
| 7 | Naukri fails the ROE gate because of how its equity is built | Flagged as a judgement item, not an automatic exit. D-21 |
| 8 | Automation could cause unintended trades | The system recommends only; no order is placed without confirmation (Part 17) |
| 9 | One person is both manager and committee | Written decision log, exception expiry and CA review. Residual risk |
| 10 | Single data source with three years of history | Missing and stale data cannot pass; five-year history and a second source in D-08. Residual risk |

The document does not describe itself as approved or validated. Items 2, 4, 5, 6, 9 and 10 remain open and are carried in the register.
