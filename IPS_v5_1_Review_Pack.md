# IPS v5.1 Review Pack

**Companion to:** Investment Policy Statement v5.1 (draft) and the Pre-Rewrite Review
**Baseline information date:** 4 Nov 2026 (prices of 3 Nov 2026, Personal Networth Tracker)
**Status:** DRAFT. Nothing in this pack is approved. No rule is production-ready. No strategy test has been run.

Contents: 1 Change log (v5.0 to v5.1) · 2 Memorandum to the Investor Review · 3 Approval register, open issues and dependencies · 4 Validation and implementation checklist · 5 Second consistency review and baseline validation · 6 Independent red-team review

---

## 1. Change log: v5.0 to v5.1

"Approval" says which register decision must be signed before the change has force. Where it says "none", the change corrects an error or a drafting conflict and creates no new policy.

| # | Section | Existing v5.0 issue | Corrected v5.1 provision | Reason | Approval |
|---|---|---|---|---|---|
| 1 | Header, How to read | Said an unapproved rule leaves v4.9 in force, while the dashboard ran v5.0 rules | Rule-status model: APPROVED, PROPOSED, ADVISORY, AWAITING DATA; no rule PRODUCTION READY; dashboard output advisory | The document contradicted the system it governs | D-32 |
| 2 | 1.1, 16, App I | "Investment Committee" implied independent oversight | "Investor Review": self-governance with six controls; CA the only independent check | Honest description of who decides | D-01 |
| 3 | 1.5 | Statuses not defined in one place | PASS, FAIL, WARNING, MISSING, STALE, UNVERIFIED, INCOMPLETE, EXCEPTION | One vocabulary | none |
| 4 | 3.1, 4.1, 12 | Broker cash taken as nil | DB includes actual Zerodha and Angel One cash; unavailable cash makes DB tests UNVERIFIED; zero-numerator tests exempt | Never treat an unknown as nil | D-28 |
| 5 | 3.3, 13.1 | Look-through quarterly only | Monthly Household Exposure Report; quarterly pack uses it; interim values indicative | SEBI monthly portfolio disclosure | D-18 |
| 6 | 4.2 | B1 to B4 upper bounds sum above 100% | Sum rule; offsetting movements; four-level precedence; no forcing | Arithmetic and priority | D-03 |
| 7 | 4.3, 4.4 | No rule for fewer than 12 qualifying stocks; B2 funds buys above 5% of DB | Unallocated-capital hierarchy; B2 funds buys only above its 10% target; eligibility never weakened | Policy never lowers the bar to fill a slot | D-27 |
| 8 | 5 (U3) | U3 contradicted the v4.5 history rule in 8.2 | U3 aligned: 3 years minimum, 3 to 5 flagged | Internal conflict | D-07 |
| 9 | 5 (U4), 9.5 | Same liquidity inequality stated twice, no exit period | One rule: position ≤ 0.5% × V20; exit-period definitions | Consolidation | D-10 |
| 10 | 6.1, App B.2 | Business model found by name matching | ISIN-keyed classification table | Auditability | D-29 |
| 11 | 6.2 | STALE defined three ways | Source age (15 months) and fetch age (45 days) tested separately | One definition each | D-08 |
| 12 | 6.2, 6.8 | "30 days" vs "first quarterly review"; unverified could last forever | Escalation: day 30 review, day 45 Tier 4, exit at end of probation | No indefinite UNVERIFIED | D-19 |
| 13 | 6.4 | ROA gated though it repeats ROE; one threshold for all banks; "minimum + 3 pp" unclear | ROA monitoring; asset-quality gates by bank type after D-09; regulatory minimum and margin shown separately | Avoid false precision | D-09 |
| 14 | 6.5 | 7× leverage cap unsupported | Withdrawn; gross and adjusted leverage defined; per sub-type threshold; monitoring | Would exclude infrastructure and housing lenders | D-09 |
| 15 | 6.6 | RoEV undefined; ROE gate conflict with Appendix B | RoEV formula; ROE monitoring only for insurers | Conflict removed | D-09 |
| 16 | 6.7 | AUM yield, client-funding book undefined; exchanges called non-financial | Ratios defined; exchanges and depositories in Capital markets with ROE not ROCE | Business-model fit | D-09 |
| 17 | 7.2, 7.4 | Two ranking groups; fallback to whole set; bank PPOP growth vs PAT | Six groups; minimum 5 valid; PAT CAGR in every group; INCOMPLETE otherwise | Comparable distributions | D-11 |
| 18 | 7.4, App A | Negative base year: 10th percentile vs "undefined" | Undefined growth makes the factor INCOMPLETE | One rule | D-11 |
| 19 | 7.4, App G | No winsorising (text) vs winsorised (App G) | No winsorising anywhere | Conflict removed | D-11 |
| 20 | 7.4 | Missing factor: drop and rescale | INCOMPLETE; not ranked; missing factor named | No scores on different factor sets | D-11 |
| 21 | 7.3 | Inverse P/B for all financials | Valuation measure fixed per business model | Matches Part 8.1 | D-15 |
| 22 | 7.6 (new) | Model's defensibility not addressed | What is and is not evidenced; overlap and sector bias | Honesty | D-11 |
| 23 | 8.2, 8.5, App A | One 5-year z-score defined; 10-year used in 8.5 | Z5 and Z10 each defined | Reproducibility | D-15 |
| 24 | 8.3 | 3.75% + 2.5% + 2.5% = 8.75% of DB | Minimum of five constraints; never above target | Could exceed target | D-04 |
| 25 | 8.4 | "v4.9 freeze remains in force" but the system had no freeze | Freeze stays approved and manual; reports UNVERIFIED; pacing proposed | Honest status | D-16 |
| 26 | 9.2 | Zones overlap; industry gap 20% to 22%; 22% not 90% of 25% | Mutually exclusive zones; warning at 90% of each limit (22.5% for L2) | Boundary precision | D-04 |
| 27 | 9.4 | Reduced cap equal to target; net debt/EBITDA for banks | Reduced class: target 5.625%, cap 7.5%; leverage test non-financial only | Real size reduction | D-04 |
| 28 | 9.7 (new) | Clocks of 15 days, 90 days, 2 quarters, 12 months conflicted | One table; stricter deadline prevails | Conflict removed | D-26 |
| 29 | 9.2 | Household limits L3, L4, L5, L6 had no response | Part 13.4 and 13.5 matrices with attribution, restrictions, clocks, tax, approval, escalation | Largest gap in v5.0 | D-23 |
| 30 | 13.6 | L7 unexplained; could read as a permitted weight | Emergency escalation trigger, derived from the stress budget; 15% retained | Clarity | D-24 |
| 31 | 13.2 | Proportional scale-up; overseas funds assumed zero | Actual weights; unidentified share; upper-bound test; five statuses; mandate-based exclusion | Unknown is not zero | D-18 |
| 32 | 10.0, 9.2, 16.1 | Tier 1 listed under an emergency rule with a 90-day exception; 2-day "critical event" | Tier 1 overrides everything; no exception; emergency means L7 only | Direct conflict | D-25 |
| 33 | 10.1 | Tier 3 tax delay vs "tax never delays tier 1 to 3" | Fixed windows; tax shapes timing inside only | Conflict removed | D-25 |
| 34 | 12.2 | "Severe risk breach" undefined | Warning, breach, severe, emergency, governance exit; severe overrides tax for the minimum trim only | Defined escalation | D-26 |
| 35 | 12.3 | S1 passes by construction | S1a reference; S1b beta test (β ≤ 1.1667) | Meaningful relative test | D-06 |
| 36 | 12.3 | S2 treated NIFTYBEES at 20%; no fund look-through | Constituent shocks and bounds; cash sensitivity stated | Hidden concentration | D-06 |
| 37 | 12.3 | S5 by industry name; S6 labelled BEL and Torrent mid caps unsupported | Disclosed currency exposure; market-cap class at scenario date | Unsupported assertions | D-06 |
| 38 | 12.3 | S8 "correlation spike" without correlation | Historical factor window; flat version kept as reference | Honest naming | D-06 |
| 39 | 12.6 (new) | No rule on which results can be relied on | Reliance table; household stress UNVERIFIED | No false compliance | D-18 |
| 40 | 14.1 | Secondary tax sources; one STT condition | Sections 196 and 198 read on the ITD site; STT conditions separated; unverified items listed | Official evidence | D-17 |
| 41 | 14.2, 14.3, App F | "Household exemption", one ledger | Per-taxpayer ledgers; no household exemption | Section 198 taxes each assessee | D-17 |
| 42 | 1.1, 14 | CA control stated two ways | One quarterly control | Practical and consistent | D-30 |
| 43 | App F | Lot method incomplete | Netting order, whole shares, other realisations, per-demat FIFO | Reproducibility | D-17 |
| 44 | 10.5, 15.1 | IOC in baseline and stress with unknown execution | B-0 and B-1; PENDING EXIT; execution fields | Do not assume execution | D-20 |
| 45 | 15.3, 15.5 | Milestones of 30 Apr and 30 Jun 2027 unreachable under action-review sales | Eligibility versus execution; milestones 31 Jul 2027 | Internal conflict | D-31 |
| 46 | 10.6 (new) | BEL probation versus trim undefined | Precedence rule | Gap | D-22 |
| 47 | 15.6, 18.1 | Transition plan treated like an exception | Separate transition provision with its own term | Clock conflict | D-31 |
| 48 | 11.2 | Roles of two benchmarks unclear; drawdown wording inconsistent | Primary hurdle and universe benchmark; both reported; drawdown standard raised as D-14 | Avoid benchmark selection | D-12, D-14 |
| 49 | 11.6, 11.7 | FY2020 on called out-of-sample; criteria unexplained; no forward test | Pseudo out-of-sample label; reasons for each criterion including the statistical limit of an information ratio of 0.3; locked forward paper portfolio | Honest evidence standard | D-14 |
| 50 | App G | Missing rules; 22%; winsorised; no status columns | Rebuilt in 12 areas with status, freshness and approval; no PRODUCTION READY | Implementation accuracy | D-32 |
| 51 | App H | IOC row without execution fields | Pending-exit record | Traceability | D-20 |
| 52 | App A to F | Duplicated or conflicting formulas | One authoritative definition per rule; appendices refer to it | Consistency | none |

**Kept unchanged:** 40/60 household split, 12-name Core, 7.5% target, 10% cap, 25% industry cap, 6% and 10% household limits, 15% emergency level, bucket targets 90/10/0/0, dormant sleeves, the IOC exit decision, equal weighting, "valuation never causes a full exit alone", the 2- and 3-standard-deviation filters, no automatic execution, succession.

---

## 2. Memorandum to the Investor Review

**To:** The investor, acting as the Investor Review
**Subject:** Corrections to the direct equity IPS (v5.0 to v5.1)
**Note on independence:** the investor wrote the policy, will approve it and will review it. This memorandum is for the investor's own use and has not been seen by an independent reviewer.

**1. Purpose.** An independent read of v5.0 found places where it contradicted itself, left a limit without any enforcement, or described the dashboard in terms that were not true. v5.1 corrects those specific defects. It is not a redesign. The 40/60 split, the 12-stock Core, the 7.5% and 10% weights, the industry and household limits and the IOC exit decision are all kept.

**2. What v5.0 already achieved.** Four separate buckets in place of the ballast pool; named denominators; a status for every test where only PASS counts; an exit hierarchy; a tax-aware transition plan; a stress-test framework run on real holdings; and a clear statement that no backtest exists.

**3. Remaining portfolio risks.**
- ICICI Bank is 26.3% and HDFC Bank 20.4% of the securities in the Direct Book; both exceed the 10% cap and both exceed the 6% household limit (9.7% and 7.5% of household equity) on direct holdings alone. These percentages are provisional because broker cash is not known.
- Financial Services is 46.8% of the Direct Book and 17.2% of household equity, against 25% and 10%.
- A banking-crisis scenario (financials −35%, other equity −20%) costs 27.0% to 28.6% of the securities, above the 25% threshold. It stays UNVERIFIED until broker cash is supplied, and cash of at least ₹1.61 L would be needed to bring the result inside 25%.
- Look-through exposure through eleven mutual funds and NIFTYBEES is not measured.
- The two banks cannot be tested on asset quality or capital because the data feed does not carry those metrics.

**4. Changes introduced in v5.1.**
- *Household concentration:* complete responses for L3, L4, L5, L6 and L7, with the cause of a breach split into what the investor controls (direct holdings, ETF units) and what they do not (a fund manager's holdings), and a 12-month limit so a breach cannot sit indefinitely.
- *Exit precedence:* a Tier 1 event overrides every other rule and cannot be excepted; the emergency rule now means L7 only.
- *Arithmetic:* a cumulative purchase rule that cannot exceed the 7.5% target (v5.0 allowed 8.75%); non-overlapping weight zones; a sum rule for the four buckets; broker cash in the denominator.
- *Scoring:* one authoritative definition for every formula; six ranking groups; INCOMPLETE rather than a substitute value.
- *Financial companies:* ratios defined; the 7× leverage cap withdrawn; thresholds that cannot be defended left as decisions; an escalation that ends an unverified status within 45 days.
- *Stress tests:* S1 now has a meaningful relative test; S2 looks through ETFs; scenarios S4 to S6 and S8 have stated methods and report INCOMPLETE until data exists.
- *Tax:* Sections 196 and 198 of the 2025 Act read from the Income Tax Department site; per-taxpayer ledgers; one chartered-accountant control.
- *Transition:* IOC kept as PENDING EXIT until a sale is verified; milestones corrected to 31 Jul 2027 because sales happen at quarterly reviews.
- *Governance:* a rule-status model so a proposed rule is never presented as operative.

**5. Decisions needing the investor's signature.** 33 decisions are in the register (section 3). Those that change money or a limit: D-02 (split), D-04 (zones, risk classes, purchase rule), D-11 (scoring), D-16 (200-day average), D-23 and D-24 (household responses and L7), D-25 and D-26 (Tier 1 and the clocks), D-28 (broker cash), D-31 (transition term).

**6. Evidence still required.** Broker cash balances; the portfolio disclosures of the 11 funds and NIFTYBEES's constituents; an IOC contract note; betas and traded values; sector and currency data for four scenarios; point-in-time index and fundamentals data for any backtest; official text for the tax holding period, loss rules and Income-tax Rules 2026; sub-type thresholds for financial companies.

**7. Residual risks after v5.1.**
- The strategy is unvalidated and may not beat a Nifty 500 index fund. The first honest evidence comes from eight quarters of locked forward results.
- The dashboard still runs v5.0 logic and does not yet separate approved from advisory output (17 dependencies).
- Until cash, fund disclosures and financial-company data exist, much of the household risk picture is UNVERIFIED by design.
- The transition leaves the banking breach in place until 1 Jul 2027 by choice, to use long-term lots and the tax-free allowance.
- Several thresholds are judgement: the financial-company gates, the 8-point earnings-variability test, the 5.625% reduced target, the 120-day and 45-day freshness limits.
- One person is the manager, the approver and the reviewer.

---

## 3. Approval register, open issues and dependencies

### 3.1 Decision register (D-01 onwards)

Approver for every decision is the investor. **Status for every decision is Open: no decision is signed.** "Effective date" is entered on signature. "Dashboard" says what the Stocks tab does today. v4.9 is the last approved policy; "existing policy" means v4.9 unless stated.

| ID | Existing policy | Proposed policy | Rationale | Evidence | Risk of not deciding | Dashboard today | Approver | Status | Effective date |
|---|---|---|---|---|---|---|---|---|---|
| D-01 | Not defined in v4.9; v5.0 called the investor "the IC" | Investor Review as self-governance with six controls; independent reviewer optional by amendment (1.1) | Say plainly that no independent committee exists | None needed | Decisions described as independently reviewed when they are not | n/a | Investor | Open | [on signature] |
| D-02 | 40/60 direct/MF, bands 30–50 / 50–70 | Confirm unchanged (3.2) | Not reversed because an earlier plan differed | Investor's view of stock-picking risk | Routing of new money unclear | Shows split, advisory | Investor | Open | [on signature] |
| D-03 | Ballast pool (NIFTYBEES, LIQUIDBEES, GOLDBEES) | Four buckets 90/10/0/0, bands, sum rule, precedence (4.1, 4.2) | Correct asset classification | Holdings list | Equity, cash and gold mixed | Advisory | Investor | Open | [on signature] |
| D-04 | 7.5% target, 10% cap, 25% industry cap, ±25% drift | Warning at 90% of each cap; non-overlapping zones; Standard and Reduced risk classes; five-way purchase minimum (8.3, 9.2, 9.4) | Early warning; arithmetic that cannot overshoot | Worked example E.2 | A purchase can exceed target; boundaries ambiguous | Advisory; differs (DEP-03, 04, 05) | Investor | Open | [on signature] |
| D-05 | L3 6% and L5 30% as limits; L4 10% | L3 measured on combined exposure; L5 enforced; strictest limit prevails (9.1) | Same rupee counted once per test | Part 13 formulas | Overlap unresolved | Direct part only (DEP-17) | Investor | Open | [on signature] |
| D-06 | 25% drawdown budget on assumed book | Renamed stress-loss threshold; absolute for sector and single-stock, relative for market-wide; eight scenarios (12.2, 12.3) | Measurable and actionable | Appendix D | Permanent unfixable breach in a market fall | Partial (DEP-11) | Investor | Open | [on signature] |
| D-07 | ROE, ROCE, floor, leverage, cash conversion; history rule | Add interest cover, FCF, margins as monitoring; U3, U5 (5, 6.3) | Coverage without inventing data | Feed contents | Gaps in coverage | Not implemented | Investor | Open | [on signature] |
| D-08 | Screener.in annual data only | Obtain quarterly regulatory metrics, price history, traded value, P/B and P/EV history, interest expense, exceptional items; define freshness (6.2, A.4) | Financial companies and valuation filters cannot run without it | Data source and cost | Financial gates stay manual | Fetch age only (DEP-13) | Investor | Open | [on signature] |
| D-09 | ROE only for financials | Business-model gates and ratios; thresholds per type; withdrawn 7× (6.4 to 6.7) | Banks, NBFCs, insurers differ | Regulator minima; sector benchmarks; RBI revised norms check | False precision or no test | Not implemented | Investor | Open | [on signature] |
| D-10 | v4.8 participation cap | 0.5% × V20; exit period; 10% participation; 1-day limit (9.5) | One liquidity rule | Traded-value data | Illiquid positions unnoticed | Not implemented | Investor | Open | [on signature] |
| D-11 | Quality 40, growth 30, cash 15, earnings yield 15 | 35/25/15/15/10; six groups; minimum 5; INCOMPLETE; group limit; merit review (7) | Removes sector and peak-year bias; reproducible | No test of effect | Screen favours cyclical names | Running v5.0 version (DEP-01, 06, 07, 08) | Investor | Open | [on signature] |
| D-12 | Nifty 500 TRI + 3%, lower drawdown | Primary hurdle Nifty 500 TRI; universe benchmark LargeMidcap 250 TRI; +3% aspiration (11.2) | No claim without evidence | Index data | Claim without evidence | Not implemented | Investor | Open | [on signature] |
| D-13 | 2-quarter probation | Probation for Tier 4; merit review for ranking decay; annual thesis refresh (7.5, 10.4) | Incumbency cannot last forever | Rank history builds | Stale names kept | Probation and merit running | Investor | Open | [on signature] |
| D-14 | No validation | Part 11.6 gate and 11.7 forward paper portfolio; confirm drawdown standard | Evidence standard | Point-in-time data | Unproven strategy with real money | Not implemented | Investor | Open | [on signature] |
| D-15 | P/E z-score filter | Measure by business model; Z5 and Z10; alert and trim (8) | Banks need P/B, life insurers P/EV | History data | Mispriced entries | Not implemented | Investor | Open | [on signature] |
| D-16 | 200-day freeze | Pacing rule (3 tranches over 8 weeks); freeze stays operative until signed | A timing filter can miss corrections | Price history | Freeze costs compounding | Not tested (no data) | Investor | Open | [on signature] |
| D-17 | "Household ₹1.25 L" language | Per-taxpayer ledger; sections 196 and 198; CA to confirm unverified items (14) | Section 198 taxes each assessee | CA letter; Rules 2026 text | Wrong rate, wrong taxpayer | Label says household (DEP-15) | Investor | Open | [on signature] |
| D-18 | Quarterly household review | Monthly report; five data statuses; actual weights and upper bound (3.3, 13.2) | SEBI monthly disclosure | 11 disclosures; NIFTYBEES weights | L3, L5, L7 stay UNVERIFIED | Direct part only | Investor | Open | [on signature] |
| D-19 | None | Manual verification register; 120 days; escalation day 30 and 45 (6.2) | Financial tests not in feed | Investor disclosures | Banks bought or held unchecked | Flags "Verify" without escalation (DEP-14) | Investor | Open | [on signature] |
| D-20 | v4.9 T.3: exit IOC | DL-001 stays; PENDING EXIT until verified; B-0 and B-1 (10.5) | Do not assume execution | Contract note | Dashboard recommends an exit already done | Shows exit regardless (DEP-12) | Investor | Open | [on signature] |
| D-21 | Standard ROE/ROCE gate | Decide whether to adjust Info Edge's equity for listed investments or exit | ROE 1% and ROCE 3% reflect its balance sheet | Investment breakdown in annual report | Misread as business failure, or kept wrongly | Probation running | Investor | Open | [on signature] |
| D-22 | n/a | Probation versus trim precedence (10.6) | Gap in v5.0 | None | BEL treatment unclear | Both shown | Investor | Open | [on signature] |
| D-23 | v4.9 limits only | Response matrices for L3, L4, L5, L6 (13.4, 13.5) | Largest gap in v5.0 | Part 13 | Breach without a process | Not implemented | Investor | Open | [on signature] |
| D-24 | 15% emergency level | Retain; define as escalation trigger, not a weight (13.6) | 15% × 50% = 7.5% of HE = 30% of the stress budget | Arithmetic in 13.6 | L7 read as permission | Not implemented | Investor | Open | [on signature] |
| D-25 | v4.9: pledge or red flag = immediate exit | Tier 1 overrides all rules; event list; no exception (10.0, 10.2) | v5.0 conflict | None | Tier 1 deferred by tax or exception | No detection (DEP-10) | Investor | Open | [on signature] |
| D-26 | n/a | Stress severity levels; one clock table (9.7, 12.2) | Conflicting deadlines | None | Deadlines argued | Not implemented | Investor | Open | [on signature] |
| D-27 | v5.0: B2 funds buys above 5% of DB | Unallocated-capital order; B2 funds buys only above 10% (4.3, 4.4) | Eligibility never weakened | None | Forced investment in poor stocks | Not implemented | Investor | Open | [on signature] |
| D-28 | v5.0: cash taken as nil | DB includes actual broker cash (3.1) | Never treat unknown as nil | Two broker statements | Every DB percentage unreliable | Treats as nil (DEP-02) | Investor | Open | [on signature] |
| D-29 | Name matching in dashboard | ISIN-keyed table (B.2) | Auditability | Table entries | Misclassified financials | Name matching (DEP-09) | Investor | Open | [on signature] |
| D-30 | CA before any transaction; above ₹50,000 | One quarterly confirmation (14.5) | Practical, consistent | CA agreement | Uncontrolled or impractical control | Not implemented | Investor | Open | [on signature] |
| D-31 | v4.9 Part T plan | Transition provision 4 Nov 2026 to 31 Oct 2027; milestones 31 Jul 2027 (15) | Sales only at action reviews | Lot dates; contract notes | Plan conflicts with its own timing | Shows trims | Investor | Open | [on signature] |
| D-32 | None | Rule-status model; register; Appendix G; dashboard labelling (1.4) | A proposed rule must not look operative | None | Unapproved rules treated as policy | Not separated (DEP-01, 16) | Investor | Open | [on signature] |
| D-33 | v4.9: any promoter pledge is a hard fail | Keep as Tier 1; decide whether a minimum pledge level should apply (10.2) | Any pledge may be too strict | Pledge data for the universe | Over-triggering exits | Not implemented | Investor | Open | [on signature] |

### 3.2 Open issues and data requests

| ID | Issue | Recommendation | Evidence required | Authority | Status |
|---|---|---|---|---|---|
| I-01 | Broker cash unknown | Supply both closing ledger balances for 3 Nov 2026 and each trading day after | Zerodha and Angel One statements | Investor | Open |
| I-02 | Fund disclosures missing | Load the latest monthly portfolio of the 11 funds, with ISINs and dates | AMC disclosure files | Investor | Open |
| I-03 | NIFTYBEES composition | Load constituent weights and ISIN of NIFTYBEES | Index factsheet | Investor | Open |
| I-04 | IOC execution | Provide the contract note, or confirm not sold | Contract note | Investor | Open |
| I-05 | Betas, net debt/EBITDA, V20 | Source and load | Market data | Investor | Open |
| I-06 | Rate sensitivity and currency exposure | Run S4 regression; collect each holding's currency note | Sector TRI, 10-year yield; annual reports | Investor | Open |
| I-07 | S8 window and sector returns | Select the window and load sector TRI | Index data | Investor | Open |
| I-08 | Backtest data | Point-in-time constituents and as-filed fundamentals | Data licence | Investor | Open |
| I-09 | Tax text not read | Holding period; loss set-off and carry-forward; Rules 2026; international funds; STT conditions notification | Official text; CA letter | Chartered accountant | Open |
| I-10 | Financial thresholds | Set per sub-type with documented rationale; check the current RBI capital direction (2026 revision reported) | RBI directions; sector data | Investor | Open |
| I-11 | SEBI disclosure circular | Re-check the current master circular for monthly disclosure timing | SEBI circular | Investor | Open |
| I-12 | Settlement buffer for B3 | State the amount (4.4) | Investor | Investor | Open |
| I-13 | Statutory charges | Confirm the all-in cost assumption for 11.6 | Broker charge sheet | Investor | Open |
| I-14 | S6 inputs | Small-cap shock and price-impact assumption | Judgement documented | Investor | Open |
| I-15 | CA | Name the chartered accountant; agree the quarterly control | Engagement | Investor | Open |
| I-16 | Independent reviewer | Decide whether to add one by amendment | None | Investor | Open |

### 3.3 Dashboard dependencies

These differences between the Stocks tab and v5.1 are listed in the Pre-Rewrite Review (section 3). They are **not** closed in this revision. Each closes when the related decision is signed and the dashboard is rebuilt.

| ID | Difference | Needed for |
|---|---|---|
| DEP-01 | Applies v5.0 scoring as the operative recommendation; no APPROVED/ADVISORY label | D-32, D-11 |
| DEP-02 | Treats broker cash as nil | D-28 |
| DEP-03 | Industry warning line 22%, not 22.5% | D-04 |
| DEP-04 | Reduced class sets cap 7.5% equal to target | D-04 |
| DEP-05 | 5% of DB per run, no quarterly cumulative allowance or hard-cap headroom check | D-04 |
| DEP-06 | Missing growth scores the 10th percentile | D-11 |
| DEP-07 | Two ranking groups; fallback of 3 | D-11 |
| DEP-08 | Inverse P/B for all financials | D-15 |
| DEP-09 | Business model from name matching | D-29 |
| DEP-10 | No Tier 1 detection or override | D-25 |
| DEP-11 | S1 flat; NIFTYBEES at 20%; no S4 to S6; no household stress | D-06 |
| DEP-12 | IOC exit shown regardless of execution status | D-20 |
| DEP-13 | STALE means fetched over 45 days ago only | D-08 |
| DEP-14 | "Verify" flag with no 30- or 45-day escalation | D-19 |
| DEP-15 | Tax labelled "household ₹1.25 L" | D-17 |
| DEP-16 | v5.0 output has no per-line rule-set label. A card-level banner marking the whole card advisory was added in this revision; per-line labels are outstanding | D-32 |
| DEP-17 | Look-through for direct holdings only | D-18 |

---

## 4. Validation and implementation checklist

Record the date, the person and the result beside each item. "Done" means checked in this draft by arithmetic on the disclosed baseline; it does not mean the rule is ready for use. An item marked "Blocked" needs the input named.

### 4.1 Denominators and allocation

| # | Test | Pass condition | State |
|---|---|---|---|
| 1 | DB definition | DB = stocks + equity ETFs + liquidity + gold + Zerodha cash + Angel One cash | Blocked: cash (I-01) |
| 2 | HE excludes cash, liquidity, gold | HE = DEB + MFE = ₹54,51,388 | Done |
| 3 | Four-bucket sum | B1 + B2 + B3 + B4 = 100% of DB | Done: 89.46 + 10.54 + 0 + 0 on securities |
| 4 | Twelve names × 7.5% | 90% = B1 target | Done |
| 5 | Household split | DEB ÷ HE = 36.72%; MFE ÷ HE = 63.28%; sum 100% | Done |
| 6 | Insufficient-names rule | With 7 stocks held, unallocated capital follows 4.3 | Pending test run |

### 4.2 Position sizing and concentration

| # | Test | Pass condition | State |
|---|---|---|---|
| 7 | Purchase minimum | Worked example E.2 totals ₹1,50,114 = target; a holding at 8.5% gets ₹0 | Done |
| 8 | Zones do not overlap | Every weight maps to exactly one zone; 9.000% Normal, 10.000% Warning | Done |
| 9 | L1 | ICICI 26.33%, HDFC 20.44%, IOC 15.36%, BEL 14.17% | Done (UNVERIFIED: cash) |
| 10 | L2 | Financial Services 46.78% of DB | Done (UNVERIFIED: cash) |
| 11 | L3 direct | ICICI 9.67% of HE, HDFC 7.51% | Done |
| 12 | L4 | Financial Services 17.17% of HE | Done |
| 13 | L5, L7 | Combined exposure | Blocked: disclosures (I-02, I-03) |
| 14 | L6 | No gold held: 0% | Done |
| 15 | Risk class | Market-cap rank and earnings variability computed for each holding | Blocked: data (I-05) |
| 16 | Liquidity | V20 ≥ 200 × position for each holding | Blocked: V20 (I-05) |

### 4.3 Household look-through

| # | Test | Pass condition | State |
|---|---|---|---|
| 17 | Disclosure freshness | All 11 fund disclosures dated within 45 days | Blocked (I-02) |
| 18 | ISIN aggregation | Each company has one HX(c) row | Blocked |
| 19 | No double count | A fund's market value appears once, through its constituents | Blocked |
| 20 | Unidentified share | u(f) recorded per fund; UB computed | Blocked |
| 21 | Data status | Fully / partially verified, stale, missing, materially incomplete assigned | Blocked |
| 22 | Overseas funds | Mandate-excluded status recorded from the scheme document | Blocked |

### 4.4 Quality gates, scoring and valuation

| # | Test | Pass condition | State |
|---|---|---|---|
| 23 | Non-financial gate | Recompute ROCE, ROE, leverage and cash conversion for one company by hand from its annual report; matches the feed | Pending |
| 24 | Growth formula | The feed's "compounded profit growth" is reconciled to `(PAT_t ÷ PAT_(t−n))^(1/n) − 1` for one company | Pending (unknown how the feed defines it) |
| 25 | Financial company | A register record is made for ICICI Bank and for HDFC Bank from the latest investor presentation | Pending |
| 26 | Missing data | A missing or stale value shows MISSING or STALE, never PASS | Pending dashboard (DEP-13) |
| 27 | Score arithmetic | Weights 35 + 25 + 15 + 15 + 10 = 100; example in C.3 reproduces | Done |
| 28 | Ranking groups | Each group has at least 5 valid companies per factor or is INCOMPLETE | Pending |
| 29 | Appendix match | Appendices A, B, C and G agree with Parts 6 to 8 (second review, section 5) | Done |
| 30 | Entry filter and trim | Z5 and Z10 computed for one company on a spreadsheet | Blocked: history (D-08) |

### 4.5 Exit, probation and Tier 1

| # | Test | Pass condition | State |
|---|---|---|---|
| 31 | Tier 1 override | A test event produces a full-exit recommendation for the next session and cannot be excepted | Pending dashboard (DEP-10) |
| 32 | Probation | BEL and Info Edge carry a start date and an end date | Pending dashboard confirmation |
| 33 | IOC | Status PENDING EXIT until a contract note is recorded | Blocked (I-04) |
| 34 | Precedence | A full Tier 4 exit replaces a pending Tier 6 trim | Pending |

### 4.6 Stress tests

| # | Test | Pass condition | State |
|---|---|---|---|
| 35 | Positions reconcile | Positions sum to the DB (₹20,01,521 on securities) | Done |
| 36 | S1a, S2, S3, S7, S8-ref | 30.0%, 27.0% to 28.6%, 21.9%, 13.2%, 34.7% reproduce from Appendix D | Done |
| 37 | S2 cash sensitivity | Cash of ₹1,61,443 to ₹2,88,023 would bring S2 to 25% | Done |
| 38 | ETF through constituents | NIFTYBEES weights loaded and S2 recomputed | Blocked (I-03) |
| 39 | S1b, S4, S5, S6, S8 | Run on the stated methods | Blocked (I-05 to I-07) |
| 40 | Household stress | Reported UNVERIFIED until disclosures are complete | Done as a rule |

### 4.7 Tax

| # | Test | Pass condition | State |
|---|---|---|---|
| 41 | Statute | CA confirms sections 196 and 198 as read, the holding period, loss rules, Rules 2026 and the international fund position | Blocked (I-09, I-15) |
| 42 | Per-taxpayer | Each taxpayer has a separate ledger; MF realisations included for the same taxpayer | Pending (DEP-15) |
| 43 | Holding periods | ICICI lot of 3 Jun 2026 long-term from 4 Jun 2027; BEL 11 Jun 2026 from 12 Jun 2027; HDFC 16 Apr 2026 from 17 Apr 2027 | Done; check against contract notes |
| 44 | Lot reconciliation | Lots in the tracker agree with contract notes and demat statements | Pending |
| 45 | Losses | Set-off and carry-forward applied in the order of Appendix F | Blocked: law not verified |

### 4.8 Benchmarks, performance and validation

| # | Test | Pass condition | State |
|---|---|---|---|
| 46 | Both benchmarks | Nifty 500 TRI and LargeMidcap 250 TRI series loaded and reported | Pending |
| 47 | Return bases | TWR, XIRR, pre-tax net and after-tax produced separately; comparison on pre-tax net TWR only | Pending |
| 48 | Backtest | Not performed; data licence in place before any attempt | Blocked (I-08) |
| 49 | Forward paper portfolio | Rule version and parameter file locked on the approval date | Pending approval |

### 4.9 Dashboard, exceptions and governance

| # | Test | Pass condition | State |
|---|---|---|---|
| 50 | Rule-set label | Every line shows APPROVED or ADVISORY | Pending (DEP-01, 16) |
| 51 | Never-do list | No missing value read as zero; no UNVERIFIED shown as PASS; no automatic order | Pending test |
| 52 | Exceptions | Each has an expiry within the Part 9.7 deadline; none covers a Tier 1 event | Done as a rule |
| 53 | Register | Every D-ID cited in the IPS exists in the register; none is marked approved | Done (section 5) |
| 54 | Sign-off | Appendix I completed for each rule moved to PRODUCTION READY | Pending |

---

## 5. Second consistency review and baseline validation

The first review (the Pre-Rewrite Review) examined v5.0 before any change. This second review examined the finished v5.1 as a whole. It combined mechanical checks run on the document text with a reading of every Part against every other.

### 5.1 Mechanical checks run on the v5.1 text

| Check | Result |
|---|---|
| Every "Part n.n" cross-reference points to a section that exists | 0 broken references |
| Every "Appendix X.n" reference points to an existing appendix section | 0 broken references |
| Every Markdown table has the same number of columns in every row | 0 mismatches |
| Decision IDs cited in the IPS (D-01 to D-33) all exist in the register | Passed |
| No decision marked approved | Passed: every status is Open |
| Old values removed: 22% industry line, 5.6% and 9.4% drift band, winsorised score, 7× cap, ₹50,000 trigger, "household exemption" | Each appears only where it is withdrawn or negated |
| Score weights | 35 + 25 + 15 + 15 + 10 = 100 in Parts 7.3, A.2, C.1, G.6 |
| Em dashes | 0 |
| Baseline arithmetic | The rupee and percentage figures derived from the holdings (weights, limits, excesses, stress losses, purchase examples, cash sensitivities) were recomputed by script from the disclosed values |

### 5.2 Defects the second review found in the v5.1 draft, now corrected

| # | Defect | Correction |
|---|---|---|
| SR-01 | Part 3.1 said every DB-based test is UNVERIFIED until cash is known, but Part 12.4 labelled S2 "FAIL (provisional)" and S3 "PASS (provisional)" | Both now UNVERIFIED with the securities-only figure shown; a carve-out added for tests whose numerator is zero (L6) |
| SR-02 | The 90-day emergency deadline could not always be met if the trim waited for the next quarterly action review, which can be about 92 days away | Emergency trims execute at the first signal review after the plan and within 90 days; severe-stress minimum trims stay at action reviews; Parts 9.7, 13.6, 14.4, 16.1 and rule REB-03 aligned |
| SR-03 | The L3 cause classification made a case "direct-driven" if direct holdings alone exceeded 6% even where selling them could not cure the breach | Case A is defined only as indirect exposure below 6%; the baseline text no longer assumes the case |
| SR-04 | Part 1.4 pointed to "Review Pack (Part 4)" | Corrected to section 4 |
| SR-05 | Decision D-21 (Info Edge) was in the register but not cited in the policy | Cited in Part 6.8 |
| SR-06 | Part 12.2 described the absolute threshold as for "sector and single-stock" scenarios although S4 to S6 also use it | Reworded to include macro-factor scenarios |

### 5.3 Cross-part reading: conflicts looked for and result

| Area | Conflict looked for | Result |
|---|---|---|
| Exit order | Tier 1 versus emergency, exception, tax, review calendar | One rule (Part 10.0); consistent in 9.7, 12.2, 14.2, 14.4, 16.1, 18.1, G |
| Clocks | 15 days, 90 days, 2 quarters, 12 months, 30/45 days | One table (9.7); exceptions end at the earlier of expiry and the deadline |
| Scoring | Weights, outliers, growth, missing factors, insurer ROE | One definition each (Part 7, Appendix C); appendices cite it |
| Valuation | 5-year versus 10-year; history length | Z5 and Z10 defined; history rule matches v4.5 |
| Sizing | Purchase total, zones, risk class | Minimum of five terms; mutually exclusive zones; reduced class has its own target |
| Allocation | Bucket sum, precedence, funding | Sum rule; four levels; B2 funding tied to its 10% target |
| Household | L3, L4, L5, L7 scope and denominators | Each has a response and a data rule; L4 numerator is direct only |
| Tax | Per taxpayer, CA control, STT, timing | Single control; separate STT conditions; execution at action reviews |
| Governance | IC wording; approved versus proposed; dashboard claims | Investor Review; rule-status model; dependencies listed |
| Data | STALE, MISSING, UNVERIFIED, INCOMPLETE | Defined once (1.5, A.4); never read as PASS or zero |

### 5.4 Mandatory baseline validation (B-0, 4 Nov 2026)

Prices are those of 3 Nov 2026. Every "% of DB" is on the securities-only DB ₹20,01,521 and is therefore UNVERIFIED until broker cash is supplied. HE (₹54,51,388) does not depend on broker cash.

**Portfolio allocation**

| Check | Result |
|---|---|
| B1 + B2 + B3 + B4 | 89.46% + 10.54% + 0% + 0% = 100% (securities) |
| DEB and HE reconcile | DEB ₹20,01,521 + MFE ₹34,49,867 = HE ₹54,51,388 |
| DB includes actual broker cash | **INCOMPLETE: cash not supplied** |
| Liquidity and gold excluded from HE | Yes; none is held |

**Concentration**

| Rule | Value | Zone or status |
|---|---|---|
| L1 ICICI Bank, HDFC Bank, IOC, BEL | 26.33%, 20.44%, 15.36%, 14.17% of DB | Hard breach (UNVERIFIED: cash) |
| L1 Torrent Pharma, Info Edge, Torrent Power | 4.65%, 4.42%, 4.09% | Below range |
| L2 Financial Services; Oil Gas & Consumable Fuels; Capital Goods | 46.78%; 15.36%; 14.17% of DB | Hard breach for all three (UNVERIFIED: cash) |
| L3 direct, ICICI Bank; HDFC Bank; IOC; BEL | 9.67%; 7.51%; 5.64%; 5.20% of HE | FAIL; FAIL; Warning; below warning. Indirect UNVERIFIED |
| L4 Financial Services | 17.17% of HE | FAIL |
| L5 Financial Services | at least 17.17% direct | UNVERIFIED |
| L6 | 0% (none held) | PASS |
| L7 | Largest direct 9.67% of HE | UNVERIFIED |

**Position sizing**

| Check | Result |
|---|---|
| First tranche at a 7.5% target | ₹75,057 (3.75% of DB) |
| Second and third tranches | ₹25,019 in the same quarter, ₹50,038 the next; total ₹1,50,114 = target |
| Quarterly allowance | 5% of DB = ₹1,00,076 binds the second tranche |
| Target ceiling and hard-cap headroom | Never exceeded; a holding above target gets ₹0 |
| Reduced class | Target ₹1,12,586; first tranche ₹56,293 |

**Screening**

| Check | Result |
|---|---|
| Factor weights total 100% | Yes |
| One definition per formula | Yes (Appendix A.2, C.2) |
| Peer groups comparable | Six groups; minimum 5 |
| Missing factor | INCOMPLETE, not a rescaled score |
| Insurers | INCOMPLETE until embedded value, RoEV and combined-ratio data exist |

**Risk**

| Check | Result |
|---|---|
| Scenario positions reconcile to the DB | Positions sum to ₹20,01,521 |
| ETF look-through | S2 bounded: ₹5,40,741 to ₹5,72,386 (27.0% to 28.6%) |
| Fund look-through, no double count | INCOMPLETE: disclosures not loaded |
| Cash, gold, liquidity | None held; cash unknown |
| S1b, S4, S5, S6, S8; household versions | INCOMPLETE; inputs named in Appendix D.3 |

**Tax**

| Check | Result |
|---|---|
| Taxpayer-specific exemption | Stated per assessee (section 198 read on the ITD site) |
| Holding periods | ICICI Bank lot 3 Jun 2026: long-term from 4 Jun 2027; BEL 11 Jun 2026: 12 Jun 2027; HDFC Bank 16 Apr 2026: 17 Apr 2027 |
| Lot reconciliation, loss handling | INCOMPLETE: contract notes and loss history not supplied |
| Historical tax rates | Not relevant until a backtest is run |

**Governance**

| Check | Result |
|---|---|
| Conflicting exit instructions | None found after SR-02 |
| Approval references without a register entry | None |
| A proposed rule treated as approved | None in the policy. The dashboard does so today (DEP-01) |
| Automated decision without authority | None; the system never places orders |

### 5.5 Illustrative rule test on the disclosed holdings

| Case | How v5.1 treats it |
|---|---|
| ICICI Bank, 26.33% of DB, 9.67% of HE | Hard breach on L1 and L3. No new money. The lot of 3 Jun 2026 is long-term from 4 Jun 2027; trim executed 1 Jul 2027. Excess over 10% of DB: ₹3,26,913 (falls if cash is added). Case A or B for L3 unknown until look-through |
| HDFC Bank, 20.44%, 7.51% | Same. Older lots within the taxpayer's remaining exemption now; the rest 1 Apr 2027 and 1 Jul 2027 |
| IOC exit and probation conflict | IOC's 3-year averages pass but one year failed the consistency floor. The exit is DL-001, a recorded one-time decision, not a Tier 4 result. Status PENDING EXIT. B-0 keeps it; B-1 exists only after a verified sale |
| BEL, 14.17% | Hard breach (L1) and Tier 4 probation (cash conversion 44% against 70%). Trim on 1 Jul 2027; probation runs on; a failed probation replaces the trim with a full exit (10.6) |
| Financial Services | L2 46.78% of DB and L4 17.17% of HE. Both banks trimmed to 10% of DB would leave 20% of DB and 7.34% of HE. L5 UNVERIFIED |
| NIFTYBEES and LIQUIDBEES | NIFTYBEES (10.54%) is bucket B2, equity: in DEB, HE and look-through, outside L1, L2, L4. No LIQUIDBEES is held. LIQUIDBEES would be B3 and outside HE |
| Direct and fund look-through | L3, L5, L7 UNVERIFIED. Direct holdings alone already fail L3 for both banks. Missing: 11 fund disclosures; NIFTYBEES weights |
| Portfolio stress-loss breach | S2 27.0% to 28.6% against 25%. UNVERIFIED because cash is missing. Freeze new money into financials; contributors named in 5 days; plan in 15 days; resolution within 12 months. Severe only if there is no plan, a milestone is missed or an L7 emergency exists. After the trims, 23.0% (illustrative) |

---

## 6. Independent red-team review

Written as a sceptical committee member who did not draft the policy. It answers the ten questions set for the review and lists the ten weaknesses that remain.

### 6.1 The ten questions

| # | Question | Answer from v5.1 | Remaining weakness |
|---|---|---|---|
| 1 | Could a company stay above 6% of household equity indefinitely because the exposure is partly indirect? | No. Any breach starts a 12-month clock. Case B (indirect at or above 6%) requires a written decision within 15 days; with none, an exit of the direct holding appears at the next action review for confirmation | It depends on monthly disclosure data. Until loaded, the status is UNVERIFIED, and UNVERIFIED carries the freeze but not a sale |
| 2 | Could a Tier 1 exit be delayed by tax or an emergency exception? | No. Part 10.0, 18.1 and rules EXT-01 and EXC-02 forbid it | Market or legal constraints (suspension, circuit limit) can delay the sale |
| 3 | Could the purchase engine exceed 7.5%? | Not under the policy: the minimum of five terms never exceeds target | The dashboard still uses the old logic (DEP-05) |
| 4 | Could allocation rules force money into a non-qualifying stock? | No. Parts 4.2 and 4.3 route unallocated capital to B2 or B3 | B1 can fall below its band; that needs written approval each period |
| 5 | Could two systems rank the same stock differently? | Less likely: one definition per formula, ranks within groups, INCOMPLETE for gaps | The feed's growth figures are not yet reconciled to the formula (checklist item 24) |
| 6 | Could a financial company pass despite an asset-quality or solvency warning? | Not for a new purchase: it needs a register PASS. A held bank can keep a PASS for 120 days | Monitoring metrics only trigger a review. The thresholds are proposals. A stale register entry is the weak point |
| 7 | Could NIFTYBEES and funds hide sector concentration? | L3, L5 and L7 count ETFs and funds | Nothing is measured until I-02 and I-03 are done |
| 8 | Could the risk framework claim compliance when household stress is unmeasurable? | No. Household stress is UNVERIFIED and may not be relied on | The investor may still read DB-level results as the whole picture |
| 9 | Could tax be duplicated or assigned to the wrong taxpayer? | Per-taxpayer ledgers; mutual fund realisations in the same ledger | The ledger across the fund platform does not exist yet |
| 10 | Could the dashboard apply a proposed policy before approval? | The policy forbids it | **It does today.** The dashboard runs v5.0 rules without an advisory label (DEP-01) |

### 6.2 The ten most material remaining weaknesses

| # | Weakness | Where it is carried |
|---|---|---|
| 1 | The Stocks tab implements unapproved rules as if operative | DEP-01, D-32 |
| 2 | Broker cash is unknown, so every percentage of DB is provisional | I-01, D-28 |
| 3 | Look-through is unmeasured: L3, L5, L7 and household stress are UNVERIFIED | I-02, I-03, D-18 |
| 4 | The two largest holdings are banks whose asset quality and capital cannot be tested from the feed | D-08, D-09, D-19 |
| 5 | The strategy is unvalidated; real evidence needs eight quarters of forward results | D-14, I-08 |
| 6 | The scoring weights are judgement; insurers cannot be ranked; financials are capped at a score of 92.5 | D-11 |
| 7 | Tax law was verified only in part; the ledger across platforms is not built | D-17, I-09 |
| 8 | One person is manager, approver and reviewer; the chartered accountant is the only independent check | D-01, I-16 |
| 9 | The transition keeps the banking breach in place until 1 Jul 2027 by design | D-31 |
| 10 | Many thresholds are proposals without outside evidence (financial gates, 8-point earnings variability, 5.625% reduced target, freshness limits) | D-04, D-09 |

Every one of these is in the register. The policy does not describe itself as approved or validated, and no rule in it is marked PRODUCTION READY.
