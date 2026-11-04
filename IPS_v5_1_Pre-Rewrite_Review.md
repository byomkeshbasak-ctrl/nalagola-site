# Pre-rewrite review of IPS v5.0

**Purpose:** list every defect in v5.0 and every section and appendix it touches, before any rewriting starts.
**Documents read in full:** Investment Policy Statement v5.0 (902 lines, Parts 1 to 18, Appendices A to J) and the v5.0 Committee Pack (260 lines). Also compared with the logic the Stocks tab currently runs.
**Date of review:** 4 Nov 2026 (baseline information date).
**Status:** working document. It does not change policy.

How to use it: section 1 lists findings. Section 2 maps them onto every Part and Appendix of v5.0, so nothing is missed when v5.1 is written. Section 3 lists where the dashboard disagrees with the policy it is meant to implement. Section 4 lists what cannot be resolved without new data. Severity: **Critical** can produce a wrong action or false compliance; **High** leaves a rule ambiguous or unenforceable; **Medium** causes inconsistency; **Low** is cosmetic.

---

## 1. Findings

### A. Household concentration controls

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-01 | Critical | 9.2 | The graded response covers only direct limits L1 and L2. L3, L4, L5 and L6 have no early-warning level, freeze, remediation period, tax treatment, approval authority or escalation. ICICI Bank and HDFC Bank already exceed L3 on direct holdings alone | 9.1, 12.4, 13.1 to 13.3, 14.4, 16.2, App E, App G | New household response matrix (Part 13.4 to 13.6) with attribution of each breach to direct and indirect exposure | D-23 |
| F-02 | High | 9.1, 9.2 | L7 (15% of HE) has no rationale and can be read as a permitted weight above L3 (6%) | 9.2, App G (CON-04) | State that L7 is an emergency escalation trigger, derive 15% from the stress budget, and bar any reading as a permitted weight | D-24 |
| F-03 | High | 13.1, 16.1 | Authoritative look-through is quarterly only. SEBI requires each fund to publish its full portfolio with ISINs within 10 days of month-end, so monthly is supportable | 3, 16.1, App G (LKT-01, LKT-02) | Monthly Household Exposure Report; quarterly pack uses the latest monthly report; interim values labelled indicative | D-18 |
| F-04 | Critical | 13.2 | Disclosures covering under 90% are scaled up proportionally, which invents exposure. International funds are assumed to hold no Indian company | 12.7, App A, App G | Use disclosed holdings at actual weights; record the unidentified share; upper-bound test; five exposure data statuses; mandate-based exclusion for overseas funds documented, not assumed | D-18 |
| F-05 | Medium | 9.1, App A | L4 numerator is direct holdings only, but this is not stated in the appendix formulas or the rules matrix | App A, App G (CON-03) | Define L4 numerator as direct B1 holdings by NSE industry ÷ HE; ETF and fund exposure belongs to L5 | D-05 |

### B. Exit precedence and risk overrides

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-06 | Critical | 9.2 vs 10.1, 14.4, 16.1, 16.2 | 9.2 lists "any tier 1 event" under the emergency row (trim at next action review, 90-day exception). 10.1 requires a full exit at the next trading session. 16.1 gives 2 trading days for critical events. These cannot all hold | 12.5 (R6), 18.1, App G (QLT-03, CON-04) | Part 10.0 precedence rule: Tier 1 overrides every concentration, tax, rebalancing and review-calendar rule and cannot be excepted. Emergency means L7 only | D-25 |
| F-07 | High | Part 2 item 5, 12.2, 14.2 | "Tax never delays a severe risk breach", but no severe breach is defined. A stress-loss breach is not stated to override tax | 12.4, 14.4 | Define normal stress warning, threshold breach, severe stress condition and emergency; state exactly which override tax and for how much | D-26 |
| F-08 | High | 9.2, 12.4, 14.4, 18.1 | Clocks conflict: 15-day plan, 90-day emergency exception, two-quarter exception limit, two-review escalation, 12-month remediation | 15.4 | One clock table (Part 9.7); the stricter deadline prevails | D-26 |
| F-09 | Medium | 10.1 vs 14.2 | 14.2 says tax never delays tier 1 to 3 exits. 10.1 says tier 3 tax may delay within 60 days | 14.4 | Tier 2 and 3 have fixed windows; tax may shape timing inside the window, never beyond it | D-25 |
| F-10 | Low | 10.1 | "A higher-tier trigger is never delayed by a lower-tier consideration" is ambiguous (number or importance) | none | Reword using tier numbers only | none |

### C. Asset allocation and position-sizing mathematics

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-11 | High | 4.1 | Upper bounds (95 + 15 + 5 + 5) exceed 100%. No reconciliation rule, no allocation precedence | 3.2, App E, App G (ALC) | Add B1+B2+B3+B4 = 100% of DB, offsetting-movement rule and a four-level precedence | D-03 |
| F-12 | High | 4.1 | No rule for fewer than 12 qualifying stocks. B2 funds purchases "when above 5% of DB", a number that matches neither its 10% target nor its band | 14.4, App G | Unallocated-capital hierarchy; eligibility never weakened; B2 funds purchases only above its 10% target | D-27 |
| F-13 | Critical | 3.1, 4.1, 9, 12.3, 15.1, App E, App F | DB takes broker cash as nil. Every DB-denominated test is therefore on an incomplete denominator | 17.1, App G | DB includes actual Zerodha and Angel One cash; if unavailable, DB-dependent tests report UNVERIFIED with a provisional figure | D-28 |
| F-14 | Critical | 8.3 | 3.75% + 2.5% + 2.5% = 8.75% of DB, above the 7.5% target | 9.2, App E, App G | Purchase = minimum of five constraints (tranche, gap to target, hard-cap headroom, quarterly allowance, eligible capital) | D-04 |
| F-15 | High | 9.2 | Normal drift (5.6% to 9.4%) overlaps soft breach (above 9.0%). Industry rows leave 20% to 22% undefined, and 22% is not 90% of 25% | App E, App G (CON-01, CON-02) | Mutually exclusive zones derived from target and cap: warning line at 90% of the limit (9.0%; 22.5%) | D-04 |
| F-16 | High | 9.4 | The reduced cap (7.5%) equals the target, so a rising stock breaches the moment it exceeds target. Net debt/EBITDA is applied to banks and insurers, where it is meaningless. Beta is not in any feed | 6, App G | A reduced size class with target 5.625% and cap 7.5% (the standard 4:3 cap-to-target ratio kept); leverage test restricted to non-financials | D-04 |
| F-17 | Medium | 5 (U4), 9.5 | The 200× traded-value rule and the 0.5% rule are the same inequality stated twice. No exit-period definition. No rule in App G | 9, App G | One rule in Part 9.5 with the equivalent forms stated | D-10 |
| F-18 | Medium | 5 (U3) vs 8.2 | U3 requires 5 years for valuation-band tests; 8.2 allows 3 to 5 years with full history (the v4.5 rule) | 8, App G | U3 aligned to 8.2: minimum 3 years; 3 to 5 years use full history and are flagged | D-07 |

### D. Scoring and formula reconciliation

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-19 | Critical | 7.3 vs App G (SCR-01) | 7.3 says no winsorising; App G says the score is winsorised | App C | Single definition; no winsorising | D-11 |
| F-20 | High | 8.5, App A | Appendix A defines one z-score on 5 years; 8.5 uses 10 years | 8.2, App G | Define Z5 (entry) and Z10 (trim) separately | D-15 |
| F-21 | High | 7.3 vs App A | Negative base year: 7.3 scores the 10th percentile; App A says "undefined" | 7.2 | Undefined growth makes the score INCOMPLETE; no substitute percentile | D-11 |
| F-22 | High | 6.6 vs App B | 6.6 says accounting ROE is not a gate for insurers; App B marks it G for general insurers | App G | ROE is monitoring for insurers; combined ratio and solvency are the general-insurer gates | D-09 |
| F-23 | High | 7.3 | A missing factor is dropped and weights rescaled per company, giving totals on different factor sets | App C | INCOMPLETE status; no per-company rescaling | D-11 |
| F-24 | High | 7.2 vs 8.1 | 7.2 uses inverse P/B for every financial. 8.1 prescribes P/EV for life insurers and P/E for general insurers and capital-markets businesses | App C, App G | Valuation measure fixed per business model (Part 7.2 table) | D-15 |
| F-25 | High | 7.2, 7.3 | Bank growth uses pre-provision profit where available, others use PAT; only two ranking groups; groups under 3 fall back to the whole set, mixing economics | App C | Six ranking groups; one growth metric (PAT CAGR) everywhere; minimum 5 companies, else INCOMPLETE | D-11 |
| F-26 | Medium | 7.3, App A | Normalised growth lacks opening and closing years, restructuring rule, one-versus-two CAGR rule, floor | App C | Full formula | D-11 |
| F-27 | Medium | App C | Appendix C is a placeholder; definitions are scattered across 6, 7, 8 and Appendices A, B, G | App A, B, G | One authoritative definition per rule; appendices reference, never restate | D-11 |
| F-28 | Medium | 7 | No statement on whether the model is defensible, on factor overlap, or on sector bias | none | New 7.6: what is and is not evidenced | D-11 |

### E. Financial-company gates

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-29 | High | 6.4 | ROA is gated although ROA × leverage = ROE, so it duplicates the ROE gate. One threshold for all bank types. "Regulatory minimum + 3 pp" does not say which minimum | App B | ROA becomes monitoring; GNPA, NNPA, CET1, CRAR thresholds stay proposals by bank type; minimum and policy margin shown separately | D-09 |
| F-30 | High | 6.5 | The 7× leverage cap has no evidence and ignores sub-type and securitised assets. It would exclude infrastructure and housing lenders by construction | App B | Withdraw the number. Define gross and adjusted leverage. Threshold set per sub-type under D-09; monitoring until then | D-09 |
| F-31 | Medium | 6.6 | Operating RoEV and the solvency margin are not defined | App A | Define RoEV and solvency; regulatory minimum shown separately from the proposed margin | D-09 |
| F-32 | Medium | 6.7, 6.1 | "Stable operating profit ÷ AUM" and "client-funding book" are undefined. Exchanges are called non-financial but the dashboard classes them as capital markets because classification uses name matching | App B, App G | Define each ratio; classification becomes an ISIN-keyed table, not name matching | D-09, D-29 |
| F-33 | High | 6.2 vs 6.8 | 6.2 says verify within 30 days of the flag; 6.8 says at the first quarterly action review. A held name can stay UNVERIFIED indefinitely | 17.1 | 30-day deadline, then a defined escalation ending in probation and exit | D-19 |
| F-34 | Medium | 6.2, App G (DAT-01), dashboard | STALE is defined three ways (data older than 15 months; "15 months / 45 days"; fetched over 45 days ago) | App A | Two named tests: source age (15 months) and fetch age (45 days) | D-08 |

### F. Stress tests

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-35 | Critical | 12.2, 12.3 (S1) | S1 shocks the portfolio and the benchmark by the same 30%, so the relative test passes by construction | App D, App G | S1a flat reference kept, labelled; S1b beta-differentiated; test becomes portfolio beta ≤ 1.1667 | D-06 |
| F-36 | High | 12.3 (S2) | NIFTYBEES shocked at 20% although it holds financials. No look-through to funds | 13, App D | NIFTYBEES and funds shocked by constituent weights; bounds reported when weights are missing | D-06 |
| F-37 | High | 12.3 (S5, S6) | S5 classes pharma as exporter and refiners as importers from the industry name. S6 calls BEL and Torrent "mid caps" without a classification | App D | S5 uses disclosed currency exposure per company; S6 uses the market-cap class at the scenario date | D-06 |
| F-38 | Medium | 12.3 (S4, S8) | S4 shocks have no source. S8 is called a correlation spike but no correlation is modelled and no benchmark loss is set | App D | S4 by estimated sensitivity; S8 renamed and defined from a historical factor window | D-06 |
| F-39 | High | 12.3 | Household stress is "not computed" but no rule says which scenario outputs may be relied on | 13 | Household stress UNVERIFIED until disclosures are loaded; reliance table | D-18 |

### G. Tax

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-40 | Critical | 14.1 | Rested on secondary summaries. STT described as one condition, though the statute differs: shares need STT on acquisition and transfer; fund units on transfer only | App F | Sections 196 and 198 of the Income-tax Act, 2025 read on the Income Tax Department site; STT conditions stated separately | D-17 |
| F-41 | High | 14.2, 14.3, 15.2, App F | "Household exemption" and "one ledger for both books". Section 198 taxes each assessee; the ₹1,25,000 is per taxpayer | MF IPS v1.1 §H, dashboard labels | Per-taxpayer ledgers; no household exemption language | D-17 |
| F-42 | Medium | header, 1.1, 14 | The document says a CA must confirm before any transaction, and also only for sales with gains above ₹50,000 | 16 | One control: CA confirms the quarterly sale plan; non-delayable sales confirmed after | D-30 |
| F-43 | Medium | App F | Lot method ignores loss set-off, gains in other accounts, MF realisations, costs and whole-share constraints. FIFO is per demat, so "choosing a lot" really means choosing an account | 14.4 | Rewritten lot method | D-17 |
| F-44 | Medium | 14.1 | Holding-period definition, set-off and carry-forward not read from official text | none | Marked as not verified from official text; D-17 stays open | D-17 |

### H. IOC and the transition plan

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-45 | High | 10.3, 12.3, 15.1 | The baseline and every stress figure include IOC, while its execution is "to be confirmed". No separate record for the pre-exit and actual portfolios | App H | Two records; status PENDING EXIT until a verified sale; no removal without it | D-20 |
| F-46 | Critical | 15.2, 15.4 | Sales happen only at action reviews. The HDFC lot becomes long-term on 17 Apr 2027, the ICICI lot on 4 Jun 2027, the BEL lot on 12 Jun 2027. Their first action review is 1 Jul 2027, yet the milestones say 30 Apr and 30 Jun 2027 and expect S2 within threshold by 30 Jun | 14.4, 16.1 | Separate eligibility date from execution date; milestones moved to 31 Jul 2027 | D-31 |
| F-47 | Medium | 15.2 (T5) | BEL probation versus the June 2027 trim: "may convert" with no rule | 10 | Precedence in Part 10.6 | D-22 |
| F-48 | Medium | 15, 18.1 | The 12-month plan is not an "exception", yet 18.1 limits exceptions to two quarters | 9.7 | Transition provision with its own term, outside the exception rules | D-31 |

### I. Validation and benchmarks

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-49 | High | 11.2, 11.6 | FY2020 onward is called out-of-sample although the rules were designed with knowledge of those years. Acceptance criteria have no rationale. The objective says lower drawdown; the test allows +5 pp. No forward test | none | Label as design-contaminated; add a locked forward paper portfolio; explain each criterion; flag the drawdown inconsistency | D-12, D-14 |
| F-50 | Medium | 11.2 | Roles of the two benchmarks are unclear | none | Nifty 500 TRI is the primary hurdle; LargeMidcap 250 TRI the universe-matched benchmark; both reported | D-12 |

### J. Governance, approval status and the dashboard

| ID | Sev | v5.0 location | Finding | Also affects | v5.1 correction | Decision |
|---|---|---|---|---|---|---|
| F-51 | Critical | header, "How to read", 7.2, 8.4, 17.1 | The document says an unapproved rule leaves the v4.9 rule in force (and names the v4.9 weights and the 200-DMA freeze as still operative). The Stocks tab runs the v5.0 weights, has no freeze, and presents v5.0 output as the recommendation | App G, register | Rule-status model; proposed rules advisory only; dashboard gap list; no rule marked production-ready | D-32 |
| F-52 | High | 1.1, 16, App I | "Investment Committee" implies independent oversight; the investor is decision-maker, approver and committee | 6.2, 9, 18 | Rename "Investor Review"; state self-governance controls honestly | D-01 |
| F-53 | High | Pack register | Register lacks existing policy, proposed policy, evidence, effective date and dashboard status; IDs beyond D-19 are not cross-referenced from the IPS | none | Register rebuilt; reference check run on the final text | D-32 |
| F-54 | High | App G | No rules for liquidity, Tier 1 override, purchase constraint, risk class, verification escalation, per-input freshness. CON-02 uses 22%. SCR-01 says winsorised. No status column | all | App G rebuilt; every row has status, freshness and approval authority | D-32 |
| F-55 | Medium | 17.1 | Claims several items are "in the dashboard now" that differ from how it works | App G | Replaced by a dashboard gap list | D-32 |

---

## 2. Impact map: every Part and Appendix of v5.0

| Section | Affected? | Findings | Action in v5.1 |
|---|---|---|---|
| Header and "How to read" | Yes | F-51 | Rewrite with rule-status model |
| Part 1 Document control | Yes | F-42, F-51, F-52 | Rewrite |
| Part 2 Philosophy | Yes (item 5) | F-07 | Amend one item |
| Part 3 Household allocation | Yes | F-03, F-13, F-41 | Rewrite 3.1; add 3.3 monitoring |
| Part 4 Buckets | Yes | F-11, F-12, F-13 | Rewrite |
| Part 5 Universe | Yes | F-17, F-18 | Amend U3, U4 |
| Part 6 Quality framework | Yes | F-22, F-29 to F-34 | Rewrite |
| Part 7 Scoring | Yes | F-19 to F-28 | Rewrite |
| Part 8 Valuation and entry | Yes | F-14, F-18, F-20 | Rewrite 8.2 to 8.5 |
| Part 9 Sizing and limits | Yes | F-01, F-08, F-14 to F-17 | Rewrite |
| Part 10 Exit | Yes | F-06, F-09, F-10, F-45, F-47 | Rewrite |
| Part 11 Performance | Yes | F-49, F-50 | Amend 11.2, 11.6; add 11.7 |
| Part 12 Risk | Yes | F-07, F-35 to F-39 | Rewrite |
| Part 13 Household look-through | Yes | F-01 to F-05 | Rewrite |
| Part 14 Tax | Yes | F-40 to F-44 | Rewrite |
| Part 15 Transition | Yes | F-45 to F-48 | Rewrite |
| Part 16 Governance | Yes | F-06, F-52 | Amend |
| Part 17 AlgoBot | Yes | F-51, F-55 | Rewrite |
| Part 18 Exceptions | Yes | F-08, F-48 | Amend |
| Appendix A Definitions | Yes | F-05, F-20, F-21, F-26, F-34 | Rewrite |
| Appendix B Quality matrix | Yes | F-22, F-29 to F-32 | Rewrite; add classification table |
| Appendix C Scoring | Yes | F-19, F-27 | Rewrite in full |
| Appendix D Risk scenarios | Yes | F-35 to F-39 | Rewrite |
| Appendix E Concentration and sizing | Yes | F-14 to F-16 | Rewrite with zones and worked purchase |
| Appendix F Tax lots | Yes | F-40 to F-43 | Rewrite |
| Appendix G Rules matrix | Yes | F-54 | Rebuild |
| Appendix H Decision log | Yes | F-45 | Add pending-exit fields |
| Appendix I Approval template | Yes | F-52 | Rename; self-governance fields |
| Appendix J Change log | Yes | all | Add v5.1 |

**Kept unchanged in substance:** the 40/60 household split (3.2), 12-name Core, 7.5% target, 10% cap, 25% industry cap, 6% and 10% household limits, 15% L7 level, bucket targets 90/10/0/0, dormant sleeves, the IOC exit decision, equal weighting (9.3), valuation never causes a full exit alone (8.6), the 2-standard-deviation entry filter and 3-standard-deviation trim, no automatic discretionary execution, succession (16.6).

---

## 3. Where the Stocks tab differs from the policy it implements

These become dependency items in the register. None is fixed in this revision; the dashboard is not changed here.

| # | Dashboard behaviour | Policy position (v5.0 or v5.1) |
|---|---|---|
| 1 | Applies the v5.0 scoring (35/25/15/15/10) as the operative recommendation | v5.0 says v4.9 weights stay in force until D-11 is signed |
| 2 | Treats broker cash as nil | DB includes actual broker cash |
| 3 | Warning line for industries is 22% | 90% of 25% is 22.5% |
| 4 | Reduced-size class sets the cap to 7.5%, equal to the target; uses market-cap rank and return-on-capital variability only | Reduced class has its own target (5.625%) and cap (7.5%) |
| 5 | Allows 5% of DB per name per review run; no hard-cap headroom check; remaining tranches listed without the five-way minimum | Quarterly cumulative allowance and a five-way minimum |
| 6 | Growth: median of the feed's 3-year and 5-year profit growth; a missing value scores the 10th percentile | Undefined growth makes the score INCOMPLETE |
| 7 | Two ranking groups (financial, non-financial); groups under 3 fall back to the whole set | Six groups; minimum 5; otherwise INCOMPLETE |
| 8 | Inverse P/B for every financial company | Measure fixed per business model |
| 9 | Business model from name matching | ISIN-keyed classification table |
| 10 | No Tier 1 detection or override | Tier 1 overrides all other rules |
| 11 | S1 flat; NIFTYBEES at 20% in S2; no S4 to S6; no household stress | S1b, S2 by constituent, S4 to S6 defined; household UNVERIFIED |
| 12 | IOC exit shown from a decisions list whatever the execution state | PENDING EXIT until a verified sale |
| 13 | STALE means fetched over 45 days ago | Source age and fetch age tested separately |
| 14 | "Verify" flag has no 30-day or 45-day escalation | Escalation ends in probation and exit |
| 15 | Tax labelled "household ₹1.25 L" | Per taxpayer |
| 16 | v5.0 output shown without an approved/advisory label (a card-level advisory banner was added after this review) | Proposed rules shown as ADVISORY, each line labelled |
| 17 | Look-through shown only for direct holdings | Monthly look-through with five data statuses |

---

## 4. What cannot be resolved from the evidence available

| Input missing | Blocks |
|---|---|
| Zerodha and Angel One cash balances | Every DB-denominated percentage |
| Mutual fund portfolio disclosures for the 11 funds, with ISINs and dates | L3, L5, L7 and household stress |
| NIFTYBEES constituent weights | Exact S2 and L5 |
| Contract note for any IOC sale | IOC status, post-exit baseline, realised gain |
| Betas, net debt/EBITDA, traded values | Complete risk class, S1b, liquidity rule |
| Sector sensitivity to rates; disclosed currency exposure | S4, S5 |
| Nifty 500 loss under the S8 window | S8 relative test |
| Point-in-time index constituents and as-filed financials | Any backtest |
| Official text for holding period, loss set-off, carry-forward, Income-tax Rules 2026, international fund-of-fund rules | Part of Part 14 |
| Sub-type thresholds for financial companies | Automated financial gates |
