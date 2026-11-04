# Investment Policy Statement v5.1: Direct Equity Book

**Status:** DRAFT FOR INVESTOR APPROVAL. Not approved. Not validated. Not production-ready.
**Last approved version:** v4.9 (adopted by the investor, 4 Nov 2026). v5.0 was a draft and was never approved. v5.1 replaces v5.0 as the controlling draft.
**Baseline information date:** 4 Nov 2026 (prices of 3 Nov 2026, Personal Networth Tracker)
**Effective date:** [APPROVAL DATE: to be entered when the investor signs]
**Companion documents:** Mutual Fund IPS v1.1; IPS v5.1 Review Pack (change log, memorandum, approval register, validation checklist); IPS v5.1 Pre-Rewrite Review

> This policy is a governance framework for one investor's own decisions. It is not personalised investment advice. Capital is at risk. Return objectives are targets, not guarantees. A chartered accountant must confirm tax treatment under the control in Part 14.5.

### How to read this document

Every rule carries one status tag.

- **[APPROVED v4.9]**: adopted in v4.9 and carried forward in substance.
- **[PROPOSED D-nn]**: changed or new in v5.0 or v5.1. It has no force until the decision D-nn is signed in the approval register. Until then the v4.9 rule it replaces is the operative rule.

A rule may also be waiting for data it cannot yet use. That is shown in the rule text as "needs data" and in Appendix G as AWAITING DATA. Such a rule reports UNVERIFIED or INCOMPLETE; it never reports PASS. The rule-status model is in Part 1.4.

Section references in this document are to Parts and numbered sub-sections (for example Part 9.7). Decision references D-01 onwards are listed in the approval register in the Review Pack. Nothing in this draft is marked approved except the v4.9 rules.

---

## Part 1: Document control and investment mandate

### 1.1 Parties and authority

| Role | Holder | Authority |
|---|---|---|
| Investor and beneficial owner | Byomkesh | Decides and approves everything: policy, exceptions, every discretionary trade |
| Investor Review | The investor acting alone | Quarterly self-review, exception approval, policy amendment. This is self-governance. It is **not** independent oversight, because the investor is the decision-maker, the approver and the reviewer |
| Portfolio monitoring system | Personal Networth Tracker and AlgoBot | Calculation, monitoring and recommendation only. Never places an order without investor confirmation |
| Tax adviser | Chartered accountant [name to be entered] | The only independent check in this framework. Role defined in Part 14.5 |

**Self-governance controls** (these replace the committee safeguards a larger body would provide):
1. Every sale, purchase decision, exception and policy change is written in the decision log (Appendix H) before it is executed, with the rule relied on.
2. A quarterly self-review using the pack in Part 16.3, signed and dated.
3. Quarterly confirmation of the sale plan by the chartered accountant (Part 14.5).
4. Every exception carries an expiry date (Part 18.1).
5. An annual policy review (Part 18.3).
6. An audit trail: inputs, outputs and data dates are stored with every review.

An independent reviewer or committee member may be added later by an amendment under Part 18.2. Until then no document may describe a decision as made by an independent committee.

### 1.2 Scope

This policy governs all securities in the investor's Zerodha and Angel One demat accounts (the **Direct Book**) and the uninvested cash in the two broker accounts. The Mutual Fund IPS v1.1 governs mutual fund holdings. Parts 3 and 13 of this policy govern the two together at household level.

Out of scope: the separate trading account and its mandate; real estate; bank deposits; PF/EPF; insurance; the wine shop's business capital.

### 1.3 Mandate summary

| Parameter | Policy | Status |
|---|---|---|
| Purpose | Long-term compounding through a concentrated book of high-quality Indian listed companies | [APPROVED v4.9] |
| Horizon | More than 5 years for individual holdings; 10 to 15 years for the book | [APPROVED v4.9] |
| Active sleeve | Long-Term Core only | [APPROVED v4.9] |
| Dormant sleeves | Medium-Term and Short-Term, 0%. They reopen only after the Part 11.6 validation gate and investor approval | [APPROVED v4.9]; gate [PROPOSED D-14] |
| Prohibited | F&O, leverage, short selling, intraday trading, unlisted securities | [APPROVED v4.9] |
| Return objective | Part 11.2. Nifty 500 TRI + 3% a year is an aspiration, not a validated target | [PROPOSED D-12] |

### 1.4 Rule-status model

| Status | Meaning |
|---|---|
| APPROVED (v4.9) | Adopted by the investor in v4.9 |
| PROPOSED | Written in v5.0 or v5.1; no force until the register decision is signed |
| ADVISORY | A PROPOSED rule that the dashboard calculates and displays. It must be labelled ADVISORY and must not be presented as the operative recommendation |
| AWAITING DATA | The rule cannot run because an input is missing. It reports UNVERIFIED or INCOMPLETE |
| PRODUCTION READY | The rule is approved, its data exists, and the checklist items for it have passed. **No rule has this status in this draft** |

Operating rules:
1. The operative recommendation uses APPROVED rules only.
2. PROPOSED rules may be shown only if each line says which rule set produced it (APPROVED or ADVISORY).
3. A PROPOSED rule becomes APPROVED when the investor signs its register entry and enters an effective date (Appendix I).
4. PRODUCTION READY is awarded rule by rule, after approval, data availability and the checklist in the Review Pack (section 4) have all been satisfied and recorded.
5. At this draft date the dashboard shows its Stocks recommendations under a banner that marks them advisory and names v4.9 as the approved policy, but it does not yet label each line by the rule set that produced it (Review Pack, dependencies DEP-01 and DEP-16). Until it does, every dashboard recommendation must be read as advisory.

### 1.5 Status vocabulary for tests

| Status | Meaning |
|---|---|
| PASS | Computed on valid, fresh, complete data and the condition is met |
| FAIL | Computed on valid data and the condition is not met |
| WARNING | Inside the warning zone of a limit (Part 9.2) |
| MISSING | A required input is absent |
| STALE | The input exists but is older than its freshness limit (Appendix A.4) |
| UNVERIFIED | The test depends on something that cannot be confirmed: a manual check not recorded, look-through data incomplete, broker cash not reconciled |
| INCOMPLETE | A calculation cannot be finished (a score or a scenario) because a required input is missing. No result is shown; the missing input is named |
| EXCEPTION | A failed test covered by an approved, unexpired exception |

**Only PASS is compliance.** MISSING, STALE, UNVERIFIED and INCOMPLETE are never PASS and are never read as zero.

---

## Part 2: Investment philosophy

1. **Quality compounds; weak businesses mean-revert.** Capital goes to companies with durable, high returns on capital, conservative balance sheets and cash-backed earnings.
2. **Concentration is a choice, not an accident.** The book holds a limited number of names on purpose, so every position has an explicit size limit and a written reason for being held.
3. **Rules before discretion.** Screening, sizing and exits follow written, reproducible rules. Discretion is allowed only through the documented exception process (Part 18).
4. **Risk is measured on actual holdings.** Diversification is tested by scenario on what is owned, including exposure through mutual funds and ETFs.
5. **Tax efficiency serves the policy.** Tax may shape the timing of a discretionary trade within the limits of Parts 9.7, 12.2 and 14.4. It never delays a Tier 1, 2 or 3 exit beyond its window, an emergency breach, or the minimum trim required by a severe stress condition.
6. **Low turnover.** A held name is not sold merely because something else ranks higher.

---

## Part 3: Household asset allocation

### 3.1 Denominators

| Symbol | Name | Definition | Baseline value |
|---|---|---|---:|
| **DB** | Direct Book | Stocks + equity ETFs + liquidity instruments + gold instruments + actual uninvested cash in the Zerodha and Angel One accounts | ₹20,01,521 in securities **plus broker cash [INPUT REQUIRED]** |
| **DEB** | Direct Equity Book | Stocks + equity ETFs | ₹20,01,521 |
| **CSC** | Core Stock Capital | Stocks only (bucket B1) | ₹17,90,557 |
| **MFE** | Mutual Fund Equity | Market value of all equity-oriented mutual funds and equity fund-of-funds, domestic and international, per the MF IPS | ₹34,49,867 |
| **HE** | Household Equity | DEB + MFE | ₹54,51,388 |

Liquidity instruments, gold and cash are excluded from HE and DEB. Every limit in this policy names its denominator.

**Broker cash rule.** DB must include the closing ledger balance of each broker account for the previous trading day, taken from the broker's statement. An unavailable cash balance is never treated as nil. If either balance is MISSING or older than one trading day (STALE), every test whose denominator is DB reports UNVERIFIED. The system may show a provisional figure computed on securities only and must label it. A securities-only percentage can only be an upper bound for a limit that caps a weight (cash can only increase DB), but neither a figure above nor below the limit is compliance until cash is reconciled. A test whose numerator is zero (for example, no gold instruments held) does not depend on the denominator and may report PASS. [PROPOSED D-28]

**Baseline status:** the securities-only values in this document, including every "% of DB" figure, are provisional until the two cash balances for 4 Nov 2026 are supplied.

### 3.2 Household split [APPROVED v4.9; confirmation D-02]

| Allocation | Target | Band | Baseline |
|---|---:|---:|---:|
| Direct equity (DEB ÷ HE) | 40% | 30–50% | 36.7% |
| Mutual fund equity (MFE ÷ HE) | 60% | 50–70% | 63.3% |

**Rationale:** a single investor holding 8 to 12 direct stocks carries idiosyncratic risk that diversified funds do not. Keeping direct stocks under half of household equity caps that risk while leaving enough capital for stock selection to matter. An earlier plan used the opposite split; v4.9 chose 40/60 and v5.1 does not reverse it. D-02 asks only for confirmation.

**Rebalancing:** new money goes to the side further below its target. Nothing is sold to move between the two books. If a side is outside its band at two consecutive quarterly action reviews, the investor decides, in writing, whether to change the split by amendment or direct new money to restore it. No automatic sale.

### 3.3 Household monitoring frequency [PROPOSED D-18]

Mutual funds must publish their full portfolio, with ISINs, within 10 days of each month-end (SEBI circular on monthly portfolio disclosure; the 2018 circular was read; the current master circular should be re-checked under D-18). Monthly monitoring is therefore practical.

1. **Monthly Household Exposure Report.** Produced at the 15th signal review of each month from the disclosures as at the previous month-end.
2. **Authoritative calculation.** The latest monthly report whose disclosures are 45 days old or less on the date it is used. The quarterly action review uses that report.
3. **Interim values.** The dashboard may show direct holdings at live prices plus the last report's indirect rupee exposure. These are labelled **indicative**. They can raise a WARNING or FAIL (for example when direct holdings alone breach a limit) but can never produce PASS for L3, L5 or L7.
4. If any needed disclosure is STALE, MISSING or materially incomplete (Part 13.2), the L3, L5 and L7 tests report UNVERIFIED.

---

## Part 4: Portfolio construction and investment buckets

### 4.1 The four buckets [PROPOSED D-03]

v4.9 treated NIFTYBEES, LIQUIDBEES and GOLDBEES as one "ballast" pool. That mixed equity, cash and gold. v5.1 keeps the v5.0 separation.

| Bucket | Instruments | Objective | Target (% of DB) | Band | Benchmark | Risk contribution | Rebalancing method | Performance treatment | Household treatment |
|---|---|---|---:|---:|---|---|---|---|---|
| **B1** Individual equities | Listed stocks that pass Part 6 | Compounding through stock selection | 90% | 80–95% | Nifty 500 TRI | Market risk plus company-specific risk | Part 9 limits; new money first (Part 14.4) | Core attribution (Part 11.4) | In DEB and HE; in L1 to L5 |
| **B2** Equity ETFs | NIFTYBEES and other broad index ETFs | Market exposure while Core names are built; holding place for unallocated capital (Part 4.3) | 10% | 0–15% | Nifty 50 TRI | Market risk; carries the index's own industry concentration | Part 4.4 | Equity; included in book return | In DEB and HE; counted in look-through (L3, L5), not in L1, L2, L4 |
| **B3** Liquidity | LIQUIDBEES, overnight and liquid funds in the demat, broker cash | Settlement and dry powder | 0% | 0–5% | NSE overnight rate | Negligible market risk | Part 4.4 | In Direct Book return; outside stock attribution | Excluded from HE |
| **B4** Gold | GOLDBEES and similar | Diversifier against equity and rupee risk | 0% | 0–5% | Domestic gold price | Gold price and rupee risk | Cap trim only (L6) | In Direct Book return | Excluded from HE |

What "100% Long-Term Core" meant in v4.9: Core is the only active sleeve. It does not mean 100% of DB is in individual stocks. All four buckets sit inside the Core sleeve's capital, and only B1 is subject to the stock-selection rules.

### 4.2 Reconciliation and precedence [PROPOSED D-03]

1. **Sum rule.** B1 + B2 + B3 + B4 = 100% of DB at every valuation. The upper bounds (95 + 15 + 5 + 5 = 120%) cannot all be reached at once. A movement in one bucket is funded by an offsetting movement in another.
2. **Precedence when rules conflict:**
   1. Investment eligibility and portfolio risk limits (Parts 6, 9, 12, 13);
   2. the household asset allocation (Part 3.2);
   3. the approved bucket targets (this Part);
   4. individual stock target weights (Part 9).
3. **No forcing.** Capital is never put into a stock merely to reach a bucket target or the 7.5% weight.
4. **At baseline** (provisional, securities only): B1 89.5% (₹17,90,557), B2 10.5% (₹2,10,964), B3 0%, B4 0%. This sums to 100%. Twelve names at 7.5% give 90%, the B1 target.

### 4.3 Fewer than 12 qualifying stocks [PROPOSED D-27]

Eligibility is never weakened to fill a slot. If fewer than 12 stocks pass every entry condition (Parts 5 to 8), money that cannot go into a qualifying stock is placed in this order:

1. an eligible existing holding that is below its target weight, up to that target and within Part 8.3;
2. B2 (NIFTYBEES or another broad index ETF), up to its 15% band;
3. B3 (LIQUIDBEES or broker cash), up to its 5% band;
4. beyond those bands, with the investor's written approval for each period (an exception under Part 18.1, expiring within 2 quarters): B2 first.

**Why B2 before B3 beyond the bands:** B2 is equity and counts in DEB, so the household 40% direct-equity target is preserved. B3 is outside HE and would lower DEB below its target.

**Effect on B1:** the B1 weight falls below 90% and may fall below its 80% lower bound. That is permitted only under the written approval in step 4. B1 below its band for two consecutive quarterly action reviews is reported in the quarterly pack with the reason (a count of names passing each test).

### 4.4 Funding order for purchases [PROPOSED D-27]

A purchase in B1 is funded in this order:
1. new money and sale proceeds (Part 14.4);
2. B3 above a working balance equal to the amount needed for orders already placed and for a 30-day settlement buffer [INPUT REQUIRED: investor to state the buffer];
3. B2 **only to the extent B2 stays at or above its 10% target.** A holding at or below target is not sold to fund purchases without the investor's written approval.

(v5.0 allowed B2 to fund purchases while above 5% of DB. That number matched neither the target nor the band and is withdrawn.)

B3 above 5% of DB for more than 30 days with no pending purchase must be deployed under Part 4.3.

### 4.5 Performance treatment

B1 and B2 are measured as equity. B3 and B4 are included in total Direct Book return but excluded from Core stock-selection attribution.

---

## Part 5: Investment universe and eligibility

| Rule | Definition | Status |
|---|---|---|
| U1 Universe | Constituents of the Nifty LargeMidcap 250 at the latest NSE reconstitution | [APPROVED v4.9] |
| U2 Held names outside the universe | Remain eligible to hold; frozen to new money; reviewed at each quarterly action review | [APPROVED v4.9] |
| U3 Minimum history | At least 3 full financial years of audited results. For valuation-band tests (Part 8) at least 3 years of price history; between 3 and 5 years the full history is used and the name is flagged "short history"; below 3 years the name is not eligible | [APPROVED v4.9 for the history rule; results rule PROPOSED D-07] |
| U4 Liquidity | The position must meet the liquidity rule in Part 9.5 | [PROPOSED D-10] |
| U5 Excluded | Companies under SEBI or exchange surveillance (ASM or GSM stage 2 or above), suspended, or with an auditor qualification, adverse opinion or disclaimer in the latest annual report | [PROPOSED D-07] |
| U6 Industry classification | NSE industry as published in the Nifty LargeMidcap 250 constituent file | [APPROVED v4.9] |

---

## Part 6: Fundamental quality framework

### 6.1 Classification [PROPOSED D-29]

Each company is assigned one business model: **Non-financial**, **Bank**, **NBFC/HFC**, **Life insurer**, **General insurer** or **Capital-markets business** (asset manager, broker, exchange, depository). The assignment is an ISIN-keyed table (Appendix B.2) that the investor approves. It is not derived by matching company names. A financial company missing from the table is UNVERIFIED and cannot be bought until classified. Rating agencies are classed as Non-financial.

### 6.2 Common rules

- **Data sources:** audited annual results (consolidated where available) through the automated feed; regulator filings and investor disclosures for bank, NBFC, insurer and capital-markets metrics.
- **Evaluation period:** the last 3 completed financial years unless stated.
- **Freshness (two separate tests, Appendix A.4):** *source age* (the latest results used are older than 15 months) and *fetch age* (the feed was last refreshed more than 45 days ago). Either makes the input STALE.
- **Status of every test:** PASS, FAIL, MISSING, STALE, UNVERIFIED or INCOMPLETE (Part 1.5). A company with any gate test that is not PASS cannot be bought.
- **Manual verification register [PROPOSED D-19].** The asset-quality, capital, funding and solvency tests for financial companies are not in the feed. A register record has: ISIN, date, the investor disclosure read (name and date), each metric value, PASS or FAIL, the person who checked, and a note. A PASS is valid for 120 days. A financial company without a valid PASS cannot be bought.
- **Abnormal year.** One year in three distorted by a disclosed one-off (impairment, exceptional gain, merger accounting) may be excluded by a written note, as an exception under Part 18.1, no more than once per company in any 3-year window.

### 6.2.1 Escalation for an unverified held financial company [PROPOSED D-19]

Day 0 is the later of the date the flag is first raised and the v5.1 effective date.

| Day | Event |
|---|---|
| 0 | Flag raised. No additional investment (automatic) |
| 30 | A manual disclosure review must have been done and a PASS or FAIL recorded in the register |
| 45 | If still unresolved, the status becomes a **Tier 4 gate failure** and the 2-quarter probation starts (Part 10.1) |
| End of probation | If the evidence is still unavailable, the position is exited at the next action review (Tier 4 outcome) |

UNVERIFIED therefore cannot last longer than 45 days without consequence.

### 6.3 Non-financial companies

| Metric | Formula | Threshold | Role | Status |
|---|---|---|---|---|
| ROCE | EBIT ÷ (equity share capital + reserves + borrowings), year-end values | 3-yr average ≥ 15% | Entry and holding gate | [APPROVED v4.9] |
| ROE | Net profit attributable ÷ average equity | 3-yr average ≥ 15% | Entry and holding gate | [APPROVED v4.9] |
| Consistency floor | Lowest single-year ROCE of the last 3 | ≥ 10% | Entry and holding gate | [APPROVED v4.9] |
| Leverage | Borrowings ÷ (equity share capital + reserves), latest year-end | ≤ 2.0 | Entry and holding gate | [APPROVED v4.9] |
| Cash conversion | Σ cash from operations (3 FY) ÷ Σ net profit (3 FY) | ≥ 70% | Entry and holding gate | [APPROVED v4.9] |
| Interest coverage | EBIT ÷ finance cost, latest year | ≥ 3.0× | Monitoring only until the feed carries interest expense (needs data, D-08); then an entry gate | [PROPOSED D-07] |
| Free cash flow | Σ (cash from operations − capex), 3 FY | Positive | Monitoring; negative for 3 years triggers a thesis review | [PROPOSED D-07] |
| Revenue growth | 3-yr revenue CAGR | – | Monitoring | [PROPOSED D-07] |
| Operating margin | EBITDA ÷ revenue | Fall of more than 5 percentage points over 2 years triggers a thesis review | Monitoring | [PROPOSED D-07] |
| Governance | Defined events in Part 10.2 | Any event | Tier 1 exit | [APPROVED v4.9; scope PROPOSED D-07] |

### 6.4 Banks [PROPOSED D-09 for every threshold except ROE]

Thresholds are proposals. A single number across all bank types is not justified (a large private bank, a public-sector bank and a small finance bank have different asset-quality profiles), so the asset-quality gates apply only after D-09 fixes a threshold per bank type. Until then the asset-quality and capital tests are manual PASS or FAIL judgements against the ratio definitions below, recorded in the register.

| Metric | Exact ratio | Period and source | Proposed test | Basis | Role |
|---|---|---|---|---|---|
| ROE | Net profit ÷ average equity | 3 FY, annual results | 3-yr average ≥ 15%; no year < 10% | v4.9 gate for financials | Entry and holding gate |
| ROA | Net profit ÷ average total assets | 3 FY | Monitoring only | ROA × equity multiplier = ROE, so a separate ROA gate repeats the ROE gate | Monitoring |
| Gross NPA | Gross NPAs ÷ gross advances | Latest quarter | ≤ 3.0% as a starting point for large private and public-sector banks; other types by D-09 | Judgement | Entry gate (after D-09); a rise over 1 pp in 4 quarters triggers a thesis review |
| Net NPA | Net NPAs ÷ net advances | Latest quarter | ≤ 1.0% as a starting point | Judgement | Entry gate (after D-09) |
| Provision coverage | Provisions held against gross NPAs ÷ gross NPAs | Latest quarter | Monitoring | | Monitoring |
| Credit cost | Loan-loss provisions ÷ average advances | 4 quarters | Above 2× its 5-year average triggers a review | | Monitoring |
| CET1 | As reported under RBI Basel III | Latest quarter | Regulatory minimum 5.5% plus conservation buffer 2.5% = 8.0%. Proposed policy margin: 3 pp above that (11.0%), plus any D-SIB surcharge that applies to the bank | Minimum is regulatory; the margin is judgement | Entry gate (after D-09) |
| Total capital (CRAR) | As reported | Latest quarter | Regulatory minimum 9.0% plus buffer 2.5% = 11.5%. Proposed margin 3 pp (14.5%) | Same | Entry gate (after D-09) |
| NIM | Net interest income ÷ average interest-earning assets | 4 quarters | A fall over 50 bps in 4 quarters triggers a review | | Monitoring |
| CASA ratio | CASA deposits ÷ total deposits | Latest quarter | Monitoring | | Monitoring |
| Credit-deposit growth gap | Credit growth − deposit growth, trailing 4 quarters | | Over 8 pp for 4 quarters triggers a funding review | | Monitoring |
| Liquidity coverage | As reported (regulatory minimum 100%) [verify] | Latest quarter | Monitoring | | Monitoring |

*Sources for the capital minima: RBI Basel III implementation guidelines (RBI press release of 30 Dec 2011 and bank disclosures quoting the RBI master circular). A 2026 secondary summary reports that the RBI has revised capital adequacy norms; the current RBI direction must be checked under D-09 before any capital threshold is used.*

### 6.5 NBFCs and housing finance companies [PROPOSED D-09 for every threshold except ROE]

| Metric | Exact ratio | Period | Proposed test | Role |
|---|---|---|---|---|
| ROE | Net profit ÷ average equity | 3 FY | 3-yr average ≥ 15%; no year < 10% [APPROVED v4.9] | Entry and holding gate |
| ROA | Net profit ÷ average assets | 3 FY | Monitoring only (same reasoning as banks) | Monitoring |
| Capital adequacy | As reported | Latest quarter | Regulatory minimum (15% for most NBFCs and HFCs; [verify under RBI scale-based regulation]) plus a proposed margin of 5 pp | Entry gate (after D-09) |
| Gross leverage | Total on-balance-sheet assets ÷ net worth (equity share capital + reserves) | Latest year-end | Threshold per sub-type set under D-09; monitoring until then, reported beside the sub-type median | Monitoring |
| Adjusted leverage | (Total assets + outstanding principal of securitised or assigned pools where the company keeps credit enhancement or a first-loss exposure) ÷ net worth | Latest year-end | Same | Monitoring |
| Stage 3 assets | Stage 3 loans ÷ gross loans (Ind AS 109) | Latest quarter | ≤ 3.5% as a starting point | Entry gate (after D-09) |
| Stage 3 coverage | Stage 3 provisions ÷ Stage 3 loans | Latest quarter | Monitoring | Monitoring |
| Credit cost | Credit losses ÷ average loans | 4 quarters | Above 2× 5-yr average triggers a review | Monitoring |
| ALM | Cumulative negative gap in the 1-year bucket ÷ total assets | Latest quarter | Monitoring | Monitoring |
| Funding concentration | Largest single funding source ÷ borrowings | Latest year-end | Monitoring | Monitoring |

The v5.0 cap of 7× leverage is **withdrawn**. It had no supporting evidence, applied one figure to retail lenders, housing lenders and infrastructure lenders (which run structurally higher leverage) and ignored securitised assets.

### 6.6 Insurers [PROPOSED D-09]

| Metric | Exact ratio | Proposed test | Role |
|---|---|---|---|
| Solvency ratio | Available solvency margin ÷ required solvency margin, as reported | Regulatory minimum 1.5× plus a proposed margin of 0.3× (1.8×) | Entry gate (life and general) |
| Operating return on embedded value (life) | (EV closing − EV opening − capital infused + dividends paid − economic variances − other non-operating variances) ÷ EV opening. Where the insurer publishes an "operating RoEV", use its figure and note the definition | 3-yr average ≥ 15% | Entry gate for life insurers; replaces accounting ROE |
| Value of new business margin (life) | VNB ÷ annualised premium equivalent | Stable or rising over 3 years | Monitoring |
| 13th-month persistency (life) | As reported | ≥ 80% | Monitoring |
| Combined ratio (general) | (Claims + commission + operating expenses) ÷ net earned premium | 3-yr average ≤ 105% | Entry gate for general insurers |
| Accounting ROE | Net profit ÷ average equity | – | **Monitoring only** for all insurers. It is not a gate. This resolves the v5.0 conflict between Part 6.6 and Appendix B |
| Cash conversion | | | Not used for insurers |

### 6.7 Capital-markets businesses [PROPOSED D-09]

| Type | Gate tests | Monitoring | Notes |
|---|---|---|---|
| Asset managers | ROE 3-yr average ≥ 15%, no year < 10%; cash conversion ≥ 70%; leverage ≤ 2.0 | Operating profit yield = operating profit (before treasury income) ÷ average of month-end AUM during the year, in basis points. No threshold is proposed; a threshold needs D-09. Largest single scheme as a share of AUM (flag above 25%) | Asset-light, so cash conversion and leverage apply |
| Brokers | ROE as above; cash conversion; leverage | Client-funding ratio = (margin funding + loans against securities + other loans to clients, on balance sheet) ÷ net worth. Off-balance-sheet guarantees to clearing corporations are reported separately as a memo item. Proposed limit 1.5× | |
| Exchanges and depositories | ROE as above; cash conversion; leverage (where there are borrowings) | ROCE is **not** used, because treasury and settlement-fund assets distort capital employed. Manual check each year of regulatory standing and, where relevant, settlement guarantee and default fund adequacy | These businesses are classed as Capital-markets, not Non-financial |

### 6.8 Implementation status at the baseline date

The automated feed supplies the Part 6.3 tests except interest coverage and free cash flow, and ROE for Parts 6.4 to 6.7. Asset quality, capital, funding, solvency, RoEV and combined ratio are not in the feed (D-08). Every financial company is therefore UNVERIFIED on those tests. ICICI Bank and HDFC Bank, the two largest holdings, fall under Part 6.2.1. Separately, Info Edge (Naukri) fails the ROE and ROCE tests at baseline, and its equity includes large holdings in listed companies, so whether the plain measures describe its business is a judgement item for the investor (D-21); it is on Tier 4 probation meanwhile.

---

## Part 7: Stock selection and quantitative scoring

### 7.1 Process

1. Apply Part 5 eligibility and the Part 6 gate for the company's business model.
2. Score every gate-passer using the one definition in Appendix C.
3. Build the 12-name target list (Part 7.5).

### 7.2 Ranking groups [PROPOSED D-11]

| Group | Members |
|---|---|
| RG1 | Non-financial companies |
| RG2 | Banks |
| RG3 | NBFCs and housing finance companies |
| RG4 | Life insurers |
| RG5 | General insurers |
| RG6 | Capital-markets businesses |

Percentile ranks are computed **within the company's own group**, never across groups, so economically different measures are not placed in one distribution. A group needs at least **5 companies with valid values** for a factor. Below that, the factor for that group is INCOMPLETE and no company in the group is ranked on it.

### 7.3 Factors and weights [weights PROPOSED D-11; v4.9 weights 40/30/15/15 remain operative until signed]

| Factor | Weight | Definition (full formula in Appendix C) |
|---|---:|---|
| **Quality (Q)** | 35% | RG1: 3-yr average ROCE. RG2, RG3, RG6: 3-yr average ROE. RG4: 3-yr average operating RoEV. RG5: 3-yr average combined ratio, lower ranks higher |
| **Normalised growth (G)** | 25% | Median of the valid 3-year and 5-year net profit CAGRs, each capped at 40%. Net profit (PAT), not pre-provision profit, in every group, so the measure is the same inside each group |
| **Cash conversion (C)** | 15% | RG1: Σ cash from operations ÷ Σ net profit over 3 FY, capped at 150%. All other groups: a constant 50 (not applicable by construction) |
| **Valuation (V)** | 15% | RG1: TTM earnings yield, ranked within the NSE industry (at least 5 valid companies, otherwise within RG1). RG2, RG3: book value ÷ market cap. RG4: embedded value ÷ market cap. RG5, RG6: TTM earnings yield |
| **Stability (S)** | 10% | Sample standard deviation of the annual quality measure over 3 FY (RG1 ROCE; RG2, RG3, RG6 ROE; RG4 operating RoEV; RG5 combined ratio); lower ranks higher |
| **Total** | **100%** | Score = 0.35·Q + 0.25·G + 0.15·C + 0.15·V + 0.10·S |

For banks and NBFCs the valuation measure is the reciprocal of P/B. ROE context is not added again because the quality factor already ranks ROE and the gate already requires it to be at least 15%, so every bank compared on valuation meets the same ROE test.

**Known effect of the constant 50 in C:** companies in RG2 to RG6 cannot exceed 92.5 in total, against 100 for RG1. This lowers financials slightly in a mixed list. It is accepted because it also leans against financial concentration, and is documented as a limitation for D-11.

**Data position:** RG4 and RG5 need embedded value, RoEV and combined ratio, which are not in the feed (D-08). Insurers are therefore INCOMPLETE and not ranked until the data exists.

### 7.4 Calculation rules

- **Percentile rank:** PR = 100 × (r − 1) ÷ (n − 1), where r is the rank with ties given the average rank and n is the number of valid companies in the group.
- **Outliers:** handled by the caps in the table (growth 40%, cash conversion 150%) and by rank-based scoring. No winsorising is used anywhere. (v5.0 Appendix G said the score was winsorised; that was wrong.)
- **Negative earnings:** a company whose latest-year net profit is zero or negative cannot pass the gate. If trailing-twelve-month profit is zero or negative the valuation factor is INCOMPLETE.
- **Undefined growth:** a CAGR is undefined when the opening-year or closing-year net profit is zero or negative. If one CAGR is valid it is used on its own; if both are undefined, the growth factor is INCOMPLETE. No substitute percentile is assigned.
- **Extraordinary income:** use net profit before exceptional items where the source separates it (needs data, D-08); otherwise use reported net profit and flag the candidate line "exceptional income not separated".
- **Corporate restructuring:** if a merger, demerger or amalgamation falls inside the 5-year window, use restated figures. If the source has none, growth is INCOMPLETE.
- **Missing factor:** a company missing any factor required for its group is **INCOMPLETE**. It is not ranked and it is not given a score on a reduced factor set. The missing factor is named. v5.0's rule of dropping the factor and rescaling the other weights is withdrawn.
- **Critical missing data:** if the missing item is Q or G, a manual validation is required before the company can be bought.

### 7.5 Target list [APPROVED v4.9 with PROPOSED additions]

- **Size:** 12 names [APPROVED v4.9].
- **Incumbency:** a held name whose gate status is PASS keeps its place even if it ranks lower than a non-held name, subject to the merit review below [APPROVED v4.9].
- **Eligibility for new names:** gate PASS, complete score, fresh data, and (for financial companies) a valid register PASS.
- **Fill order:** remaining places go to the highest-scoring eligible names, provided the planned weight of the name's NSE industry stays at or below 25% of DB. Planned weight is the current weight (capped at the name's hard cap) for held names and the target weight for new names [APPROVED v4.9].
- **Corporate groups:** no more than 2 names from the same corporate group (automated from a maintained group list). No more than 2 private-sector banks (checked by hand). [PROPOSED D-11]
- **Merit review:** a held name whose gate is PASS but whose score falls in the bottom quartile **of its own ranking group** at two consecutive quarterly action reviews goes to a merit review (Part 10.4). [PROPOSED D-13]
- **Annual re-underwriting:** every held name gets a written one-page thesis refresh at the annual review. A name cannot stay on the list indefinitely on incumbency alone. [PROPOSED D-13]

### 7.6 What the model does and does not show

The factors are quality, growth, cash conversion, value and low variability of returns. All five are established descriptions of companies that investors and academic work have studied. That makes the scoring approach **explainable and consistent with accepted practice**. It does not make the weights proven. The weights are judgement; no test here shows they predict returns after cost and tax. Two further limits:

- **Overlap.** Quality (the level of ROCE or ROE) and stability (its dispersion) use the same series, and for banks valuation (book value ÷ price) is linked to ROE. The overlap is limited by the 10% weight on stability and tested in validation (Part 11.6) by checking rank correlation between factors.
- **Sector bias.** Ranking within groups, the industry-relative valuation and the 25% industry cap reduce, but do not remove, a tilt toward sectors with high reported returns on capital (for example state-owned energy and defence names).

The claim made for the model is that it applies stated rules consistently. No claim of outperformance is made.

---

## Part 8: Valuation and entry rules

### 8.1 Valuation measures by business model

| Business model | Entry-filter measure (own 5-yr history) | Scoring measure (Part 7.3) | Also reported (monitoring) |
|---|---|---|---|
| Non-financial | Trailing P/E | Earnings yield (1 ÷ P/E) | EV/EBITDA, FCF yield, dividend yield, peer-relative P/E |
| Banks, NBFCs | Trailing P/B | Book value ÷ market cap (1 ÷ P/B) | P/E, P/B against ROE |
| Life insurers | P/EV | EV ÷ market cap | P/E |
| General insurers, asset managers, brokers, exchanges | Trailing P/E | Earnings yield | P/B |

The scoring measure is always the reciprocal of the entry-filter measure for the same business model. A company with negative earnings is not eligible (Part 7.4).

### 8.2 Entry filter [APPROVED v4.9 for P/E; extension to other measures PROPOSED D-15]

No new purchase and no addition while the entry-filter measure is more than **2 standard deviations above its own 5-year average**: Z5 > 2.

`Z5 = (current measure − mean of daily observations over the last 5 years) ÷ standard deviation of the same observations`

History rule [APPROVED v4.9]: with 3 to 5 years of history, use the full history and flag the name "short history". Below 3 years the filter cannot be applied and the name is not eligible (Part 5, U3). Where history for P/B, P/EV or P/E is not in the feed the filter reports UNVERIFIED and is applied by hand before each purchase (needs data, D-08).

Maximum acceptable valuation for a new purchase: Z5 ≤ 2, checked again before each tranche.

### 8.3 Purchase method [PROPOSED D-04]

**First tranche:** up to 50% of the target weight (3.75% of DB at a 7.5% target).
**Later tranches:** each at least 4 weeks after the previous one.
**Order type:** limit orders within 0.5% of the reference price [APPROVED v4.9].

**Cumulative purchase constraint.** The amount that may be bought in a name at any review is the **minimum** of:

1. the tranche allowance (first tranche as above; later tranches up to 2.5% of DB each);
2. the remaining gap to the target weight: `target × DB − current holding`;
3. the remaining headroom to the hard cap: `hard cap × DB − current holding`;
4. the remaining quarterly allowance: `5% × DB − purchases of that name already made in the calendar quarter`;
5. the eligible capital available (Part 4.4).

No purchase may take a holding above its target weight without an exception under Part 18.1. A holding already above target but below its hard cap receives no purchase (its gap is zero or negative). The previous wording (3.75% + 2.5% + 2.5% = 8.75%) could exceed 7.5% and is withdrawn. A worked example is in Appendix E.

### 8.4 200-day average [UNDER REVIEW, D-16]

v4.9 stops buying a stock that closes below its 200-day moving average and resumes after 3 closes above. That is a technical timing rule inside a fundamental mandate, and it can keep a quality stock unbought through a whole correction.

- **Recommendation (D-16):** replace the freeze with pacing: below the 200-day average, buy in at least 3 tranches over at least 8 weeks, never in one order.
- **Until D-16 is signed,** the approved v4.9 freeze is the operative rule. The system holds no price history for it, so the test reports UNVERIFIED and the investor applies it by hand.

### 8.5 Overvaluation alert and trim

- **Alert [PROPOSED D-15]:** a held name with Z5 > 2 receives no additions.
- **Trim [APPROVED v4.9 for P/E]:** measure more than 3 standard deviations above its own 10-year average (at least 5 years of history): `Z10 > 3`. The system recommends trimming 25% of the position at the next action review, within Part 14 timing.

### 8.6 What valuation never does

High valuation alone never triggers a full exit of a name that passes the gate. A 25% trim is the most a valuation signal can recommend.

---

## Part 9: Position sizing and portfolio limits

### 9.1 Limits

Where several limits apply to the same exposure, **the strictest applies.** Each test is computed on its own denominator, and a rupee of exposure appears once in each test it belongs to; it is not counted twice inside one test. Direct-ownership limits (L1, L2, L4, L6) and combined household limits (L3, L5, L7) are measured separately.

| ID | Limit | Denominator | Exact measure | Limit | Warning line (90%) | Status |
|---|---|---|---|---:|---:|---|
| L1 | Single stock, direct | DB | Market value of the direct holding ÷ DB | Target 7.5%; hard cap 10% | 9.0% | [APPROVED v4.9]; warning [PROPOSED D-04] |
| L2 | Industry, direct | DB | Σ market value of B1 holdings in one NSE industry ÷ DB | 25% | 22.5% | [APPROVED v4.9]; warning [PROPOSED D-04] |
| L3 | Single company, household | HE | HX(c) ÷ HE (Part 13.1) | 6% | 5.4% | [APPROVED v4.9]; combined measure [PROPOSED D-05] |
| L4 | Industry, direct, household level | HE | Σ market value of direct B1 holdings in one NSE industry ÷ HE (direct holdings only; ETF and fund exposure belongs to L5) | 10% | 9.0% | [APPROVED v4.9] |
| L5 | Industry, combined, household level | HE | HX(i) ÷ HE (Part 13.1) | 30% | 27.0% | [PROPOSED D-05] |
| L6 | Gold | DB | B4 ÷ DB | 5% | 4.5% | [APPROVED v4.9] |
| L7 | Emergency escalation, single company | HE | HX(c) ÷ HE | 15% | 13.5% | [APPROVED v4.9 as the exception level]; use [PROPOSED D-24] |

**Baseline comparison** (provisional; securities-only DB, HE ₹54,51,388): L1 at 10% of DB is ₹2.00 L and L3 at 6% of HE is ₹3.27 L, so L1 is the stricter direct limit once a name is inside its L1 limit. L2 (25% of DB, ₹5.00 L) and L4 (10% of HE, ₹5.45 L) are close; L2 binds while direct equity is below 40% of HE. L4 binds first when DEB ÷ HE exceeds 40%.

### 9.2 Direct concentration zones and responses (L1, L2, L6) [PROPOSED D-04]

Let w be the unrounded ratio. The zones do not overlap. Each boundary is inclusive on its upper side.

| Zone | L1, standard class (target 7.5, cap 10) | L1, reduced class (target 5.625, cap 7.5) | L2 | L6 | Required action |
|---|---|---|---|---|---|
| Below range | w < 5.625% | w < 4.219% | – | – | First in line for new money |
| Normal | 5.625% ≤ w ≤ 9.000% | 4.219% ≤ w ≤ 6.750% | w ≤ 22.5% | w ≤ 4.5% | None. A holding above its target receives no new money (Part 8.3) |
| Warning | 9.000% < w ≤ 10.000% | 6.750% < w ≤ 7.500% | 22.5% < w ≤ 25% | 4.5% < w ≤ 5% | No new money into the name or industry (automatic). Reported at the next signal review. No sale required |
| Hard breach | w > 10.000% | w > 7.500% | w > 25% | w > 5% | Freeze, then the remediation clock in Part 9.7 |

**Derivation.** The warning line is 90% of the cap, the same convention at every limit. The lower edge of the normal range is 75% of the target, which is the lower edge of the ±25% drift band in v4.9 §6. The upper edge of that band (9.375%) lies inside the Warning zone, so the upper side of the v4.9 drift band is superseded by the Warning and Hard zones; the lower side is kept. A holding at exactly 9.2% is in Warning (v5.0 classed it as both normal drift and soft breach). There is no emergency zone at L1; the emergency level is L7 (Part 13.6).

### 9.3 Equal weight versus conviction weight [APPROVED v4.9]

Equal target weight is retained. Conviction weighting needs a validated way to measure conviction and none exists. A higher screening score does not raise a position's target or cap. Size is adjusted only for risk (Part 9.4).

### 9.4 Risk classes [PROPOSED D-04]

v5.0 lowered the hard cap from 10% to 7.5% for riskier names. That equals the ordinary target, so a stock could breach merely by rising, and the change did not reduce the amount invested. v5.1 instead gives riskier names a **smaller target**.

| Class | Target | Hard cap | Warning line |
|---|---:|---:|---:|
| Standard | 7.5% | 10% | 9.0% |
| Reduced | 5.625% | 7.5% | 6.75% |

The reduced class keeps the standard class's cap-to-target ratio (10 ÷ 7.5 = 7.5 ÷ 5.625 = 4 ÷ 3), keeps the 7.5% cap proposed in v5.0, and sets the target at 75% of 7.5%.

A name moves to the Reduced class if **any** of these holds:

| Test | Measure | Data |
|---|---|---|
| Size | Full market capitalisation outside the top 100 listed companies (large-cap boundary of the SEBI and AMFI classification) at the latest list | Automated |
| Earnings volatility | Sample standard deviation of annual ROCE (non-financials) or ROE (financials) over 3 FY is above 8 percentage points | Automated |
| Leverage, non-financial only | Net debt ÷ EBITDA above 2.5 | Needs data; manual until D-08 |
| Market beta | Beta to the Nifty 500, 3-year weekly, above 1.3 | Needs data; manual |
| Financial-company stress | A financial company is not tested on net debt/EBITDA, which has no meaning for banks and insurers. Its leverage and asset-quality tests sit in Part 6 | n/a |

A manual or unavailable test can only move a name **into** the Reduced class, never out of it. Reclassification takes effect at the next action review. A holding above its new hard cap enters the Part 9.7 clock from that review.

Where a purchase is proposed and a test is UNVERIFIED, the purchase is sized to the Reduced class until the test is recorded.

### 9.5 Liquidity rule [PROPOSED D-10]

One rule replaces the "200 × position" test (Part 5) and the "0.5% of traded value" test (Part 9). They are the same inequality.

`Position value ≤ 0.5% × V20`, equivalently `V20 ≥ 200 × position value`

where V20 is the **20-day median daily traded value** of the stock on NSE and the position value is the larger of the current holding and the intended maximum (hard cap × DB).

Related measures reported with it:
- **Expected exit period** = position value ÷ (participation rate × V20). The participation rate is a proposed parameter of 10% of daily traded value (D-10). At the 0.5% rule the exit period is 0.05 trading days (about 5% of one session).
- **Maximum acceptable exit period:** 1 trading day (proposed, D-10). The 0.5% rule is stricter than this requires, so it is the binding rule at current size.
- Free-float market capitalisation, bid-ask spread and circuit-limit history are reported on the stock record but have no threshold until D-10 sets one.

At the baseline hard cap of ₹2.00 L (10% of the securities-only DB), V20 must be at least ₹4.0 crore. V20 data is not in the feed (needs data, D-08), so the test reports UNVERIFIED.

**Escalation:** a held name that fails the rule is frozen to new money and the investor decides, in writing, whether to reduce the position to the amount V20 supports within the Part 9.7 hard-breach clock.

### 9.6 Stock record

Each stock on the target list or held carries these fields in the review file: target weight and risk class; hard cap; first-tranche amount; maximum purchase this review (Part 8.3 minimum); gate status by test; score and rank within its group; NSE industry; direct weight (% of DB and of HE); household look-through exposure and its status (Part 13); zone; liquidity status; thesis note date. There is no conviction rating (Part 9.3).

### 9.7 Remediation clocks [PROPOSED D-26]

This is the single table of deadlines. **Where two deadlines could apply, the stricter (earlier) one prevails.** An exception ends at the earlier of its expiry and the resolution deadline.

| Event | Immediate (automatic) | Contributor analysis | Plan | Resolution | Exception | May tax delay? |
|---|---|---|---|---|---|---|
| **Tier 1 event** (Part 10.2) | Order placed at the next trading session | none | none | Full exit | **None possible** | No |
| Tier 2 finding | No new money | none | Decision log within 2 trading days | Full exit within 30 days | None. A finding may be withdrawn in writing with evidence | Timing inside the 30 days only |
| Tier 3 finding | No new money | none | Decision log within 2 trading days | Full exit within 60 days | Same | Timing inside the 60 days only |
| Tier 4 (quantitative gate failure) | No new money | none | Probation register entry | 2 quarters of probation; exit at the 3rd quarterly action review if not cured | Part 18.1 | Yes, within probation |
| **Emergency (L7)** | Freeze all additions; investor notified the same day | Within 2 trading days | Within 5 trading days | Trim at the first signal review after the plan and **in any case within 90 days** | One exception of up to 90 days; not renewable | No. Lot age is ignored |
| **Hard breach** (L1, L2, L3, L4, L5, L6; stress-loss breach) | Freeze additions | Within 5 trading days | Within 15 calendar days | Within **12 months** of the first measurement | Up to 2 quarters each; one renewal; never beyond the 12 months | Yes, within the 12 months. The severe stress override in Part 12.2 applies |
| Warning (90% line) | No new money | – | – | Clears when back inside the line; listed each quarter | – | n/a |

The Part 15 transition provision governs the breaches that existed at adoption and is not an exception (Part 15.6).

---

## Part 10: Exit and probation framework

### 10.0 Precedence of rules [PROPOSED D-25]

1. **A Tier 1 event overrides every other rule in this policy**: every concentration and household limit, the tax-aware timing rules, the rebalancing hierarchy, the quarterly action-review calendar, the exception rules and any approved exception. It requires a full exit at the first trading session on which the security can be sold, subject only to market and legal constraints (a suspension, a circuit limit, a legal bar on the seller). No exception for an ordinary concentration breach can defer or reduce a Tier 1 exit.
2. A lower-numbered tier governs the timing and amount for the same stock over a higher-numbered tier. A full exit under a lower tier satisfies any pending trim under a higher tier.
3. Tax may delay a sale only where Part 9.7 says it may.
4. An emergency breach under L7 is separate from Tier 1. It is a concentration event with its own clock.

### 10.1 Exit hierarchy

| Tier | Trigger | Action | Probation | Review frequency | Permitted exceptions | Tax treatment | Documentation |
|---|---|---|---|---|---|---|---|
| 1 | A defined event in Part 10.2 | Full exit at the next sellable session | None | Event-driven | None | Never delays | Decision log within 2 trading days after the order |
| 2 | Permanent deterioration in business economics (loss of licence, structural market loss, technology obsolescence), shown in a written thesis review | Full exit within 30 days | None | Event-driven | None; finding may be withdrawn in writing with evidence | Timing inside the window only | Thesis review note naming the evidence |
| 3 | The written thesis's own sell condition is met | Full exit within 60 days | None | Event-driven | Same | Timing inside the window only | Thesis note |
| 4 | Quantitative gate failure (Part 6), including an unresolved financial verification (Part 6.2.1) | Probation of 2 quarters with no new money; exit at the 3rd quarterly action review if not cured | 2 quarters | Each fortnightly review and each quarterly review | Part 18.1; one distorted year in three (Part 6.2) | May delay within probation | Probation register |
| 5 | Valuation overextension (Part 8.5) | Trim 25% at the next action review | None | Quarterly | Part 18.1 | May delay | Trade log |
| 6 | Concentration breach (Parts 9.2, 13.4 to 13.6) | Remediation clock (Part 9.7) | – | Each fortnightly review | Part 18.1 | May delay except emergency | Breach register |
| 7 | Ranking deterioration (Part 7.5) | Merit review with a written verdict; exit within 2 quarters if the verdict is exit | – | Quarterly | Part 18.1 | May delay | Merit review note |
| 8 | Normal drift | New money only | – | Fortnightly | – | May delay | – |

### 10.2 Tier 1 events [APPROVED v4.9 for pledge and regulatory red flags; list PROPOSED D-25]

1. A finding of fraud or material misstatement by a regulator, auditor or court.
2. An order of SEBI, an exchange, the RBI or the IRDAI debarring or suspending the company or its promoters, or cancelling a licence on which the business depends.
3. Resignation of the statutory auditor citing concerns, or an adverse opinion, qualified opinion or disclaimer on audited financial statements.
4. Admission of insolvency proceedings.
5. Any pledge of the promoters' shares. (v4.9 treats any pledge as an immediate hard fail. The investor should confirm whether any pledge, however small, should be Tier 1 or a Tier 4 failure above a stated threshold: D-33.)

**Execution.** Marketable limit orders are placed at each session until filled. The investor may set a wider limit than Part 8.3 and records it; the exit is not abandoned because of price. If the security is suspended or circuit-locked, the order is placed at each subsequent session on which it can trade. Order mechanics stay in the AlgoBot technical specification.

### 10.3 Metric failure versus thesis failure

A single failed metric is Tier 4. It becomes Tier 2 or 3 only if a written review concludes that the business economics or the thesis have changed, and names the evidence (segment data, management guidance, a regulatory change).

### 10.4 Ranking deterioration and merit review [PROPOSED D-13]

A name that passes the gate may remain on the target list only while it earns its place.
- **Trigger:** score in the bottom quartile of its ranking group at two consecutive quarterly action reviews.
- **Review contents (one page):** the original thesis, what has changed, the score and rank trend, and a verdict of retain or exit with the reason.
- **Retain** extends the position to the next annual review. **Exit** is executed within 2 quarters.
- Every held name also receives an annual thesis refresh (Part 7.5). No name stays on the list on incumbency alone.

### 10.5 The IOC decision: treatment

**History.** v4.9 Part T.3 directed an immediate IOC exit. IOC's 3-year averages passed the quality gate, but one of its last three years had ROCE of 7%, below the 10% consistency floor. Under the general rule a quantitative failure means 2-quarter probation. The two statements conflict.

**Treatment.**
- The exit is recorded as **one-time transitional decision DL-001**, taken on the investor's instruction ("exit IOC if it breaches our overall portfolio goal"). It is not an application of the Tier 4 rule. It is a Tier-2-type judgement about business economics (a refiner whose returns depend on crude prices and administered pricing does not fit a compounding mandate), made in writing.
- The decision is **not reversed** by v5.1.
- The general rule is corrected so the conflict cannot recur: a quantitative failure is Tier 4. An immediate exit for a quantitative failure needs a written Tier 2 or Tier 3 finding or an approved exception.

**Two records.**
1. **Historical baseline B-0:** the portfolio at 4 Nov 2026 before any IOC sale, including IOC (₹3,07,431). All baseline figures in this document are B-0.
2. **Actual portfolio B-1:** the portfolio after a *verified* IOC sale.

**Status: PENDING EXIT.** IOC stays in every holding, concentration and stress calculation until a sale is verified from a broker contract note. When a sale is verified, record: sale date, quantity sold, average sale price, realised gain or loss, tax classification (long-term or short-term), and the actual post-sale portfolio value. Until then these fields are [INPUT REQUIRED]. Transition and stress figures are recomputed on B-1 only when B-1 and its market values are available. (D-20)

### 10.6 Probation versus concentration trim [PROPOSED D-22]

Where a Tier 4 probation and a Tier 6 trim apply to the same stock (BEL at baseline):
1. The scheduled trim goes ahead on its eligibility date at the next action review; it does not wait for the probation outcome.
2. The probation clock keeps running on the remaining position and is not reset.
3. If the probation ends with the gate still failing, the Tier 4 exit sells the remainder and supersedes any trim still pending.
4. If the failure is cured, the remaining position stays subject to the Part 9.7 hard-breach clock until it is at or below its hard cap.

---

## Part 11: Performance measurement and benchmarking

### 11.1 Return definitions

| Measure | Use | Method |
|---|---|---|
| Time-weighted return (TWR) | Judging the rules and the process | Daily valuation of DB; sub-periods chained at each external cash flow; dividends included on the ex-date |
| XIRR | The investor's actual experience | All dated contributions and withdrawals; terminal value at period end |
| Pre-tax net return | Comparison with benchmarks | TWR after brokerage, STT, stamp duty, exchange and DP charges; before income tax |
| After-tax return | The investor's wealth outcome | Pre-tax net return less tax payable on realised gains and dividends in the period |

**Comparison rule:** benchmark comparisons use pre-tax net TWR against **total-return (TRI)** indices. After-tax return is reported separately and is never compared with a pre-tax index.

**Treatment of items.** Fresh contributions and withdrawals are external flows (they split TWR sub-periods and are dated in XIRR). Dividends are income to the book. Cash and B3 are part of DB, so cash drag is included. B2 ETFs are part of the book. Mutual funds are excluded (reported under the MF IPS). Realised and unrealised gains are both in TWR. Transaction charges are deducted.

### 11.2 Benchmarks and objective [PROPOSED D-12]

| Item | Policy |
|---|---|
| Primary hurdle | **Nifty 500 TRI**: the broad index the investor could hold passively instead |
| Universe-matched benchmark | **Nifty LargeMidcap 250 TRI**: the index closest to the 250-stock selection universe |
| Reporting | Both are reported every period. Neither is chosen after the fact. The objective is judged against the primary hurdle; the universe-matched benchmark shows whether a result comes from the universe's size tilt |
| B2 benchmark | Nifty 50 TRI |
| Objective | Match or beat the primary hurdle on pre-tax net TWR over rolling 3-year periods |
| Drawdown | v4.9 aims for a smaller maximum drawdown than the index. That aspiration is kept. The validation floor in Part 11.6 allows up to 5 percentage points worse. Which standard binds is decision D-14 |
| Aspiration | Primary hurdle + 3% a year [APPROVED v4.9] is not adopted as a target until Part 11.6 evidence supports it |
| Risk-adjusted measures | Sortino, information ratio, tracking error, downside capture, maximum drawdown, recovery period |

### 11.3 Reporting

- **Monthly:** TWR, XIRR, both benchmarks, maximum drawdown.
- **Quarterly:** the above plus attribution (11.4), rolling 1-year and 3-year figures, Sortino, information ratio, tracking error, turnover, downside capture.
- **Annually:** full review and after-tax return.

### 11.4 Attribution

Brinson-style split by NSE industry into allocation and selection effects against the Nifty 500, plus the contribution of B2, B3 and B4.

### 11.5 Underperformance protocol [PROPOSED D-12]

| Condition | Response |
|---|---|
| Below the primary hurdle over one rolling 3-year period | Written diagnosis in the quarterly pack: allocation or selection, one-offs |
| Below at two consecutive annual observations of the rolling 3-year figure | Review of the scoring model and gate thresholds; possible re-weighting by amendment |
| Below at three | Decide in writing between continuing, modifying the strategy, or moving the direct-equity allocation to index funds. The default recommendation is index funds unless evidence supports continuing |

Underperformance never triggers automatic liquidation.

### 11.6 Strategy validation gate [PROPOSED D-14]

**Status: NOT PERFORMED.** No backtest of the v4.9, v5.0 or v5.1 Core rules exists. No claim of outperformance is made.

**Method required:**
- Point-in-time membership of the Nifty LargeMidcap 250 and its predecessors, to prevent survivorship bias.
- Financial data used only from the date it was actually filed (as-filed data), to prevent look-ahead bias.
- Corporate actions, dividends and restated figures handled as they would have been known then.
- Costs: brokerage, STT, stamp duty, and 0.25% slippage per side.
- Capital-gains tax at the rates and holding periods in force in each historical tax year, not today's.
- Quarterly rebalancing with all the Part 9 limits and the historical household split.
- **No present-day criteria on past data** unless the criterion and its data would have existed at that date. In particular, criteria that need data not available historically (for example financial-company regulatory metrics) must be tested on the history that existed or excluded.

**Periods.** In-sample FY2011 to FY2019. FY2020 onward is **not independent out-of-sample evidence**: the rules were written in 2026 with knowledge of those years. It is labelled "pseudo out-of-sample". Genuine out-of-sample evidence comes only from the forward paper portfolio in Part 11.7.

**Benchmarks:** Nifty 500 TRI, Nifty LargeMidcap 250 TRI, Nifty 50 TRI.

**Metrics reported:** CAGR, annualised volatility, maximum drawdown, Sharpe, Sortino, Calmar, information ratio, tracking error, turnover, rolling 3-year returns, downside capture, recovery period.

**Acceptance criteria (proposed) with the reason for each:**

| Criterion | Reason and limit |
|---|---|
| Information ratio ≥ 0.3 over the full test, and excess return positive in more than half of rolling 3-year windows | The standard error of an information ratio over T years is roughly 1 ÷ √T, so over 10 years it is about 0.3. An information ratio of 0.3 is therefore about one standard error and **cannot by itself separate skill from luck**. It is a minimum screen, not proof, and is why the second condition and the forward test are added |
| Maximum drawdown no worse than the primary benchmark's plus 5 percentage points | A 12-stock book will not track the index's drawdown closely; 5 points is a tolerance for that noise. It is weaker than the v4.9 aspiration of a smaller drawdown. Whether to require "no worse" instead is D-14 |
| Annual turnover ≤ 40% | At an assumed 0.4% per side all-in cost (0.25% slippage plus an allowance for statutory charges [INPUT REQUIRED: confirm charges]), a round trip is 0.8% and 40% turnover costs about 0.3% a year. At 40% the average holding is about 2.5 years, so most sales would be long-term. Illustrative arithmetic, not a result |
| Stable when each factor weight is moved ±10 percentage points (others scaled to 100) | The information ratio stays positive in every case. A model whose result depends on exact weights is fitted, not robust |

**Data required:** point-in-time index constituents and an as-filed fundamentals database. Neither is held [D-14].

**Dormant sleeves** reopen only after their own strategy passes this gate and the investor approves in writing.

### 11.7 Forward paper-portfolio validation [PROPOSED D-14]

1. **Lock.** On the date the investor approves the rules, record the rule version (this document's version and effective date) and a fingerprint of the parameter file. Parameters are not changed afterwards except by an approved correction of an error, recorded in the change log.
2. **Run.** At every signal review the system records, without hindsight edits, the buys, sells and weights the locked rules would have produced, as if executed at the next session's price after costs.
3. **Measure.** After 8 quarters, compare with both benchmarks using the Part 11.6 metrics. After 12 quarters, a full evaluation.
4. **Claim.** No performance claim is made for the strategy before 8 quarters of locked forward results.
5. **Re-lock.** Any approved parameter change starts a new locked period.

---

## Part 12: Portfolio risk management

### 12.1 Risk measures

| Measure | Definition | Frequency |
|---|---|---|
| Realised drawdown | Peak-to-trough fall in daily DB value (TWR basis) | Daily |
| Stress loss | Estimated loss under a defined scenario on current holdings, as a share of DB (and of HE where look-through allows) | Quarterly and on any hard breach |
| Volatility | Annualised standard deviation of daily TWR, 1 year | Monthly |
| Concentration | Top-1, top-3 and top-5 weights; Herfindahl index of B1 | Fortnightly |
| Liquidity | Expected exit period at the Part 9.5 participation rate | Quarterly |
| Correlation | Average pairwise correlation of holdings, 1 year weekly | Quarterly |
| Fundamental impairment | Count of names on probation, under thesis review or UNVERIFIED | Fortnightly |

### 12.2 Stress-loss threshold and severity levels [PROPOSED D-06, D-26]

The v4.9 "25% drawdown budget" is renamed the **portfolio stress-loss threshold**. It is a forward-looking estimate under a named scenario, not a historical drawdown and not a guarantee.

- **Absolute threshold:** in sector, macro-factor and single-stock scenarios (S2, S3, S4, S5, S6, S7), stress loss as a share of DB must not exceed 25%.
- **Relative threshold:** in market-wide scenarios (S1b, S8), stress loss must not exceed the Nifty 500 loss in the same scenario by more than 5 percentage points. An all-equity book cannot hold an absolute 25% limit in a 2008- or 2020-type fall, so an absolute test there would only produce breaches no sensible action could fix.
- **Reference scenarios** (S1a, S8-ref) are reported without a pass or fail because they pass or fail by construction.

| Level | Condition | Required response | Approval | May tax delay? |
|---|---|---|---|---|
| **Normal stress warning** | Loss above 90% of its threshold (22.5% absolute; benchmark loss + 4.5 pp relative) but not above the threshold | Listed in the quarterly pack with the three largest contributors; no new money into the largest contributing industry | Automatic | n/a |
| **Stress-loss threshold breach** | Loss above the threshold | Treated as a hard breach (Part 9.7): freeze new money into the contributing exposures; contributors named within 5 trading days; remediation plan within 15 calendar days; resolution within 12 months. Remediation is **risk-based**: reduce the largest contributors enough to bring the scenario loss back inside the threshold. It is not a liquidation of every holding | Investor approves the plan; each sale is confirmed by the investor | Yes, within the 12 months |
| **Severe stress condition** | A threshold breach **and** any of: no approved remediation plan within 15 days; a milestone of the plan missed; a contributor in an L7 emergency | The **minimum trim** that brings the scenario loss back to the threshold is executed at the next action review, whatever the age of the lots. The investor chooses which contributors; the policy fixes the amount and the date | Investor approves the trim list. Never automatic | **No.** Tax does not delay this minimum trim |
| **Emergency concentration breach** | L7 (Part 13.6) | Part 13.6 and the emergency row of Part 9.7 | Investor | No |
| **Governance exit** | Tier 1 event (Part 10.2) | Full exit, Part 10.0 | Investor | No |

These levels are separate. A stress breach is not itself a tax-overriding event; the severe condition is, and only for the minimum trim. The choice of contributors and the order of sales is the investor's judgement.

### 12.3 Scenario definitions [PROPOSED D-06]

Shocks are scenario **assumptions** (inputs), not results. All DB-level results are computed on B-0 with the securities-only DB until cash is reconciled (Part 3.1). B3 (liquidity) is shocked 0%; B4 (gold) is shocked 0% unless the scenario says otherwise (no gain is assumed). Both stay in the denominator.

**Funds and ETFs are shocked once, through their constituents.** For a fund or ETF with market value MV and industry weights w, loss = MV × Σ (w_k × shock_k). Direct holdings are separate rupees. Nothing is counted in both. Where the weights are unknown, the loss is bounded between the smallest and the largest shock that could apply (the *bounds* below).

| ID | Scenario | Shock definition | Data status |
|---|---|---|---|
| S1a | Flat market reference | All equity −30% | Reference only |
| S1b | Market stress by sensitivity | Loss_i = β_i × 30%, β_i the 3-year weekly beta to the Nifty 500 (instrument-level for ETFs and funds). Relative test: portfolio loss ≤ 35%, which is equivalent to value-weighted portfolio beta ≤ 1.1667 | INCOMPLETE: betas not loaded |
| S2 | Banking and financial crisis | NSE industry Financial Services −35%; all other equity −20%. NIFTYBEES and funds by their financial-services weight | Direct part computed; ETF and funds bounded |
| S3 | Oil, gas and power shock | NSE industries "Oil Gas & Consumable Fuels" and "Power" −30%; all other equity −20% | Computed |
| S4 | Interest-rate shock, +200 bps | Loss_i = sensitivity_i × 2.0, with sensitivity estimated per NSE sector by regressing 2 years of weekly sector total returns on weekly changes in the 10-year government-bond yield. Confidence intervals reported. Funds and ETFs by constituent | INCOMPLETE: sector return and yield series not loaded |
| S5 | Rupee depreciation, −15% | Per company, from the foreign-currency note in its annual report (revenue, costs, borrowings and hedging): percentage change in EBITDA from a 15% depreciation applied to the net unhedged foreign-currency operating position; value assumed to move one-for-one with EBITDA. **No company is called an exporter or importer from its industry name** | INCOMPLETE: no disclosure data entered |
| S6 | Liquidity crisis | By market-cap class at the scenario date (large: top 100; mid: ranks 101 to 250; small: below 250, SEBI and AMFI classification): large −20%, mid −35%, small [INPUT REQUIRED: no small-cap shock is assumed]. Plus an estimated cost of selling each position, from the Part 9.5 exit period and a price-impact assumption [INPUT REQUIRED] | INCOMPLETE: classification and impact inputs not set |
| S7 | Single-stock shock | Largest direct holding −50%. Reports DB loss and household loss (HX(c) × 50% ÷ HE) | DB computed; household UNVERIFIED |
| S8 | Severe multi-sector correction, historical factor window | Take the worst peak-to-trough 3-month window of the Nifty 500 TRI in the last 10 years. Loss_i = the NSE-sector total return over that same window for each holding's sector (ETFs and funds by constituent). Correlation is embedded because every sector return comes from one window. Benchmark loss is the Nifty 500 TRI return in that window | INCOMPLETE: sector return series not loaded |
| S8-ref | Flat multi-sector reference | Financial Services −40%; all other equity −30% | Reference only |

(v5.0 called its S8 a "correlation spike" but modelled no correlation. v5.0's S5 classed pharma as an exporter and refiners as importers by industry, and S6 labelled BEL and Torrent as mid caps without any classification. All three are withdrawn.)

**Correlation sensitivity.** Each quarter S2 and S3 are re-run with the "all other equity" shock raised by 10 percentage points, to show the effect of correlations rising in a crisis.

### 12.4 Baseline results (B-0, provisional, securities-only DB ₹20,01,521)

| ID | DB loss | Reading | Status |
|---|---:|---|---|
| S1a | 30.0% (₹6,00,456) | Reference | n/a |
| S1b | not computed | needs betas | INCOMPLETE |
| S2 | **27.0%** (₹5,40,741) if NIFTYBEES falls 20%; **28.6%** (₹5,72,386) if it is wholly financial | Both above 25%. Exact value needs NIFTYBEES's financial weight | UNVERIFIED (securities-only figure above 25%) |
| S3 | 21.9% (₹4,39,230) | Below 25% | UNVERIFIED (securities-only figure below 25%) |
| S4, S5, S6 | not computed | needs inputs | INCOMPLETE |
| S7 | 13.2% of DB (₹2,63,532); 4.8% of HE on direct holdings only | Household figure excludes funds | DB: UNVERIFIED (cash); household: UNVERIFIED |
| S8 | not computed | needs data | INCOMPLETE |
| S8-ref | 34.7% (₹6,94,081) | Reference | n/a |

**Cash can cure S2 only if it is large.** Cash raises DB and lowers every loss percentage. The S2 result would fall to 25% only if broker cash were at least ₹1,61,443 (NIFTYBEES at 20%) or ₹2,88,023 (NIFTYBEES wholly financial). Until cash is known, S2 stays UNVERIFIED, with the securities-only figure above the threshold.

Contributions by holding are in Appendix D.

**Planned effect of the Part 15 trims** (illustrative arithmetic on B-0, not a forecast): if each private bank is cut to 10% of DB and the proceeds go to non-financial equity falling 20%, S2 is 0.35 × 20% + 0.20 × 80% = **23.0%** and S7 is 5.0%. Recompute on B-1 when it exists.

### 12.5 Risk register

| ID | Risk | Likelihood | Impact | Control | Residual |
|---|---|---|---|---|---|
| R1 | Private-bank concentration | Present | High | L1, L2, L4; Part 15 | High until the plan completes |
| R2 | Look-through overlap with mutual funds and NIFTYBEES | Likely | Medium | L3, L5, L7; monthly report | Unmeasured |
| R3 | Screen favours cyclical or state-owned names | Observed | Medium | Consistency floor; stability factor; industry-relative valuation | Medium |
| R4 | Data errors in the automated fundamentals | Possible | Medium | Statuses; fetch-age and source-age tests; manual register | Medium |
| R5 | Unvalidated strategy | Present | High | Part 11.6 and 11.7; index-fund fallback | High |
| R6 | Tax timing delays risk reduction | Present | Medium | Severe stress override; emergency; Tier 1 | Medium |
| R7 | Key-person risk | Possible | High | Succession (Part 16.6) | Medium |
| R8 | Broker cash unknown, so every DB percentage is provisional | Present | Medium | Part 3.1 | Open until reconciled |

### 12.6 Household stress and reliance

| Result | May it be relied on? |
|---|---|
| DB-level S2, S3, S7 on the securities-only DB | **Indicative only.** Cash is missing |
| DB-level scenarios after cash is reconciled and NIFTYBEES and fund weights are loaded | Yes, for DB |
| Any scenario at household level | **No** until every fund and ETF disclosure is fresh and complete. Reported UNVERIFIED. No household risk compliance is claimed |
| S1b, S4, S5, S6, S8 | Not available. INCOMPLETE |

---

## Part 13: Household exposure and look-through

### 13.1 Authoritative calculation

For company c, with ISIN as the key:

`HX(c) = Direct(c) + Σ_f [ MV(f) × w(f,c) ] + Σ_e [ MV(e) × w(e,c) ]`

- Direct(c): market value of direct shares (B1);
- f: each mutual fund held; MV(f) its market value in the portfolio; w(f,c) the weight of c in its latest disclosed portfolio;
- e: each ETF held; w(e,c) the weight of c in its index at the latest factsheet.

Household company share: `HX(c) ÷ HE`. Industry exposure HX(i) is the same sum over the companies in NSE industry i.

Rules that keep the sum clean:
- **ISIN is the key.** Exposures are aggregated by ISIN, never by name.
- **Funds of funds** are looked through to the underlying fund's disclosure once.
- **Index funds and ETFs** use index constituents and weights.
- **One count per rupee.** Direct rupees and fund rupees are different rupees; a fund's market value is spread over its constituents once.
- **Unknown is not zero.** The unidentified share of fund f is `u(f) = 1 − Σ identified weights (securities plus disclosed cash and other assets)`. The upper bound for company c is `UB(c) = HX_known(c) + Σ_f MV(f) × u(f) + Σ_e MV(e) × u(e)`.

### 13.2 Data statuses and test outcomes [PROPOSED D-18]

v5.0 scaled disclosed weights up when disclosure covered less than 90% of a fund. That invents exposure and is withdrawn. Disclosed holdings are used at their actual weights and the rest is recorded as unidentified.

| Exposure status | Condition |
|---|---|
| Fully verified | Every fund and ETF has a disclosure dated within 45 days and u = 0 (or is mandate-excluded) |
| Partially verified | Disclosures are fresh but some u > 0, and the result of the limit test is the same whether or not the unidentified share is counted |
| Stale | A disclosure is 46 to 90 days old |
| Missing | No disclosure, or one older than 90 days |
| Materially incomplete | `HX_known ≤ limit < UB`: the unidentified share could change the outcome |

**Test outcome rule (L3, L5, L7):**
- **FAIL** if HX_known is above the limit, whatever data is missing.
- **PASS** only if the exposure is fully verified, or partially verified with UB at or below the limit.
- Otherwise **UNVERIFIED** (stale, missing or materially incomplete). An unverified exposure is never PASS.

**Other rules:**
- **Reporting dates differ.** Each fund is taken at its own latest disclosure; the as-of date is recorded per fund; no interpolation. The report's authoritative date is the month-end of its disclosures.
- **Overseas funds.** A fund-of-funds whose stated mandate invests only in non-Indian securities is "mandate-excluded" from Indian company exposure. The mandate is checked once from the scheme document and recorded. A scheme whose mandate allows Indian holdings is looked through like any other.
- **Material change between disclosures:** a fund-manager change, a net outflow of more than 25% of fund assets, or a scheme merger triggers a fresh disclosure check at the next monthly report.
- **Duplicates and overlap:** ISIN keying removes duplicates; the decomposition table (Part 13.4) shows each contributor.

### 13.3 Monitoring frequency

Monthly, as in Part 3.3.

### 13.4 L3 response: one company above 6% of HE [PROPOSED D-23]

Let D = Direct(c) ÷ HE, I = (indirect exposure) ÷ HE, T = D + I.

| Element | Rule |
|---|---|
| Early warning | T above 5.4% (90% of 6%): no new direct money into the company (automatic). Reported with the decomposition |
| Hard-breach condition | T above 6% using HX_known (status FAIL), or UB above 6% with HX_known at or below it (status UNVERIFIED, same freeze) |
| Investment freeze | Immediate. No additional direct investment in the company. Mutual fund purchases are governed by the MF IPS, to which the breach is reported |
| What is calculated | The decomposition: Direct(c); each mutual fund (name, ISIN, as-of date, rupees, % of HE); each ETF; the unidentified share |
| What can be controlled | Direct holdings (fully). ETF units (fully, within B2). Fund holdings only by changing the fund holding under the MF IPS; the fund manager's choices cannot be controlled |
| Cause | **Direct-remediable (Case A)** if I < 6%: selling direct shares can cure the breach. **Indirect-dominated (Case B)** if I ≥ 6%: selling direct shares cannot cure it |
| Action, direct-remediable (Case A) | Reduce the direct holding to `D* = max(0, 6% − I)` of HE, scheduled under Part 14.4 and the Part 9.7 clock. Investor approves the plan |
| Action, indirect-dominated (Case B) | Direct holding frozen. Within 15 days the investor decides in writing between (a) exiting the direct holding, (b) a mutual fund allocation change under the MF IPS, (c) an exception under Part 18.1 with the risk impact stated. With no decision after 30 days the default, (a), appears as a pending action at the next action review for the investor to confirm. It is never executed automatically |
| Passive or active overlap | The decomposition marks each contributor as index/passive (an ETF or index fund, whose weight follows the index and can be reduced only by reducing the holding) or active (a fund manager's choice). When I is more than half of T, a **recommendation to review the mutual fund allocation** is added to the quarterly pack as an advisory item |
| The four restrictions | R1: direct-stock buying restriction (automatic at 5.4% and above). R2: household monitoring (monthly report until T is back at or below 5.4%). R3: recommendation for mutual fund allocation change (advisory, as above). R4: mandatory action requiring approval (the Case A plan or the Case B decision) |
| Maximum remediation period | 12 months from the first measurement of the breach (Part 9.7) |
| Tax | Part 14.4, order 3. Tax may delay within the 12 months |
| Approval authority | R1, R2: automatic. R3: advisory, investor decides. R4: investor |
| Documentation | Breach register entry with the decomposition table, each contributor's source and as-of date, the cause (Case A or B) and the plan |
| Escalation | Unresolved after two consecutive quarterly action reviews: the R4 default is shown as pending and any exception needs a written risk impact. T above 15% is an L7 emergency |

### 13.5 L4, L5 and L6 responses [PROPOSED D-23]

| Element | L4 (direct industry, 10% of HE) | L5 (combined industry, 30% of HE) | L6 (gold, 5% of DB) |
|---|---|---|---|
| Early warning | Above 9.0%: no new direct money into the industry | Above 27.0%: no new direct money into the industry | Above 4.5%: no new gold purchases |
| Hard breach | Above 10% (status FAIL; HE does not depend on broker cash) | HX_known above 30% (FAIL), or UB above 30% with HX_known at or below it (UNVERIFIED, same freeze) | Above 5% of DB (UNVERIFIED while cash is unreconciled) |
| Freeze | Immediate: no direct additions in the industry | Immediate: no direct additions in the industry | Immediate: no further purchases |
| Required action | Reduce direct holdings in the industry to at most 10% of HE (also within L2) by trims scheduled under Part 14.4 | Case A (indirect below 30%): reduce direct industry holdings to `min(10% of HE, 25% of DB, 30% of HE − I_i)`. Case B (indirect at or above 30%): direct trims to the L4 level at least, a mutual fund allocation recommendation, and an investor decision as in Part 13.4 | Trim B4 to 5% or less |
| Maximum remediation | 12 months | 12 months | 12 months |
| Tax | Part 14.4, order 3 | Same | Same |
| Approval | Investor approves the trim plan | Investor approves; mutual fund changes under the MF IPS | Investor |
| Documentation | Breach register entry | Entry with the industry decomposition | Entry |
| Escalation | Two unresolved action reviews: Part 9.7 hard-breach escalation | Same | Same |

L4 is purely direct and fully controllable. L5 includes exposure the investor does not control, so it has a monitoring side (R2) and an advisory side (R3) as well as a direct action.

### 13.6 L7: emergency escalation trigger [PROPOSED D-24]

**What L7 is.** An escalation trigger for a single company exposure of more than 15% of HE (direct plus look-through). **It is not a permitted investment weight and it does not replace L3.** The permitted weight is 6% (L3). A company between 6% and 15% is a hard breach under Part 13.4. Above 15% the slower 12-month remediation is no longer acceptable.

**Why 15%.** A 50% loss in one company at 15% of HE is 7.5% of household equity, which uses 30% of the whole 25% stress-loss threshold on a single name. At 6% the same loss is 3.0% (12% of the threshold). The level is 2.5 times L3. Lowering it to 10% would make most L3 breaches emergencies. Raising it would let one name absorb more than a third of the risk budget before escalation. **15% is retained and D-24 asks for confirmation.**

**Distinction among the three:**
1. *Normal limit* (L3, 6%): the permitted level.
2. *Severe concentration escalation*: a hard breach unresolved after two action reviews (Part 13.4).
3. *Immediate emergency action* (L7, 15%): clock of Part 9.7: plan in 5 trading days, trim at the first signal review after the plan and within 90 days whatever the lot age.

**Response.** Freeze all additions; notify the investor the same day; decomposition within 2 trading days; direct holding trimmed first (controllable); where I alone exceeds 15%, a mutual fund allocation decision within 30 days. **Tier 1 events are separate** (Part 10.0) and are not emergency breaches.

**Data.** L7 reports FAIL if HX_known is above 15%, PASS only if fully verified or UB is at most 15%, otherwise UNVERIFIED.

### 13.7 Baseline status (B-0; HE ₹54,51,388, unaffected by broker cash)

| Test | Direct-only result | Status |
|---|---|---|
| L3, ICICI Bank | 9.7% of HE (₹5,27,065) | **FAIL** on direct holdings alone |
| L3, HDFC Bank | 7.5% (₹4,09,182) | **FAIL** on direct holdings alone |
| L3, IOC | 5.6% | Below the limit, above the 5.4% warning line; indirect UNVERIFIED |
| L3, BEL | 5.2% | Below 5.4%; indirect UNVERIFIED |
| L3, other holdings | 1.5% to 1.7% | Indirect UNVERIFIED |
| L4, Financial Services | 17.2% (₹9,36,247) | **FAIL** |
| L4, Oil Gas & Consumable Fuels; Capital Goods | 5.6%; 5.2% | Within |
| L5, Financial Services | at least 17.2% direct, plus unknown NIFTYBEES and fund exposure | UNVERIFIED (limit 30%) |
| L6 | No gold instruments held | 0% of DB; PASS |
| L7 | Largest direct exposure 9.7% (ICICI Bank), plus unknown indirect | UNVERIFIED |

Each bank breaches on direct holdings alone. Whether the cause is Case A (indirect exposure below 6% of HE) or Case B is unknown until look-through exists; the Part 15 plan assumes Case A. Trimming each to the L1 limit of 10% of DB (₹2,00,152, 3.67% of HE) satisfies L3 only if the funds and NIFTYBEES together hold no more than 2.33% of HE (₹1,26,931) of that bank. If they hold more, D* is lower and a further trim is needed. **Input required:** the disclosures of the 11 funds and NIFTYBEES's constituent weights (D-18).

---

## Part 14: Tax and rebalancing

### 14.1 Applicable law, with what was and was not verified

Read on the Income Tax Department website (incometaxindia.gov.in): Section 198, Income-tax Act, 2025 (long-term capital gains in certain cases), and the department's table "Determination of tax in certain special cases", described as containing the provisions of the Act as amended by the Finance Act, 2026. Section 196 (short-term capital gains) was read in part through the department's table and its section page.

| Item | Position | How verified |
|---|---|---|
| Act | The Income-tax Act, 2025 applies from 1 April 2026 (tax year 2026–27). Transfers before 1 April 2026 fall under the 1961 Act | Secondary sources and the department's page |
| Short-term gains, listed shares and units of equity-oriented funds, STT-chargeable (s.196) | 20% | Department's table; section 196 text on secondary legal sites |
| Long-term gains, same assets (s.198) | 12.5% on the amount of long-term gains **exceeding ₹1,25,000** | Department page, s.198(2) |
| STT condition, equity shares (s.198(1)(c)(i)) | STT paid on **both acquisition and transfer** | Department page |
| STT condition, units of an equity-oriented fund or business trust (s.198(1)(c)(ii)) | STT paid on **transfer** only | Department page |
| Acquisition-STT exceptions (s.198(5)) | The Central Government may notify types of acquisition to which the acquisition condition does not apply. The notification was not read | Department page for the power; notification **not verified** |
| Equity-oriented fund (s.198(8)) | At least 65% of proceeds in listed domestic equity shares; a fund-of-funds needs 90% in units of another fund that itself holds at least 90% in such equity | Department page. So an international fund-of-funds is not equity-oriented |
| Who gets the ₹1,25,000 | Each **assessee**. It is not a household amount | Department page (s.198 speaks of "an assessee") |
| Resident individuals and unused basic exemption (s.198(3)) | Unused basic exemption can reduce the long-term gain before the 12.5% applies. Effect depends on total income | Department page; CA to apply |
| Holding period | Listed equity and equity-oriented fund units held more than 12 months are long-term | Secondary sources only. Section defining the period **not read** |
| Loss set-off and carry-forward | Under the 1961 Act, short-term loss sets off against short- and long-term gains, long-term loss against long-term gains only, carry-forward for 8 years if the return is filed on time. Whether this is unchanged in the 2025 Act was **not verified** | Not verified |
| Surcharge and 4% cess | Additional | Secondary |
| International fund-of-funds | Governed by the MF IPS v1.1 §H (24-month test and rates) | **Not verified** here |
| STT rates and conditions | Not examined | Not verified |

**Unverified items are not relied on for any decision until the chartered accountant confirms them (D-17).** The Income-tax Rules, 2026 were not read.

### 14.2 Legal requirements and policy conventions

*Legal requirements* are those in the table above, as confirmed by the CA.

*Policy conventions* (the investor's own planning rules, not law):
- **Exemption allocation order** within one taxpayer's ledger: (1) Tier 1 to 3 exits; (2) mutual fund consolidations under the MF IPS; (3) stock concentration trims; (4) drift trims; (5) loss harvesting in February and March.
- **No short-term gains for discretionary reasons:** lots held 12 months or less are not sold for Tier 5 to 8 reasons.
- **What tax never delays:** Tier 1 exits; Tier 2 and 3 exits beyond their windows; emergency breaches; the minimum trim of a severe stress condition (Part 12.2).

### 14.3 Taxpayer ledgers [PROPOSED D-17]

The ₹1,25,000 threshold belongs to each individual taxpayer. **There is no household exemption.** Each beneficial owner has a separate ledger. Gains are aggregated for one taxpayer across all that taxpayer's brokers and platforms (both demat accounts and the mutual fund platform), and never across taxpayers. Each lot records:

- taxpayer (beneficial owner);
- broker or platform and demat account;
- security and ISIN;
- acquisition date, quantity and cost;
- the date the lot becomes long-term;
- classification (long-term or short-term) and the STT condition met;
- realised gain or loss and its classification;
- exemption used to date in the tax year and estimated exemption remaining;
- capital losses brought forward and set off;
- the estimated tax on any proposed sale.

FIFO applies **per demat account**. Choosing which lots to sell therefore means choosing which account to sell from (Appendix F).

### 14.4 Rebalancing hierarchy

| Order | Trigger | Permitted delay | Maximum remediation | Method |
|---|---|---|---|---|
| 1 | Tier 1 exit | None | Full exit at the next sellable session | Marketable limit orders |
| 1 | Tier 2 and 3 exits | Timing inside the window only | 30 and 60 days | Marketable limit orders |
| 2 | Emergency breach (L7) | None | First signal review after the plan, and within 90 days | Any lots |
| 2 | Severe stress condition (minimum trim only) | None | Next action review | Any lots |
| 3 | Hard concentration breach (L1 to L6; stress breach) | To the lot's long-term date and the exemption, within the clock | 12 months from first measurement | New money first, then long-term lots |
| 4 | Normal drift and Warning | Indefinite | None | New money only |
| 5 | New money allocation | n/a | n/a | Most under-target eligible name first (Part 8.3) |

**Immediate action is required** for Tier 1 and for an emergency breach; nothing else is immediate.
**Proceeds:** dividends and sale proceeds join new money and are deployed within 30 days under Part 4.4.
**Partial fills:** an unfilled quantity carries to the next session in the same review cycle at the same limit, and is not chased beyond it. Where V20 limits the quantity that can be sold at the Part 9.5 participation rate, the sale is spread over as many sessions as needed.
**No dashboard-driven sales:** no sale is made only to improve a dashboard figure. Every sale cites the policy rule that requires it.

### 14.5 Chartered accountant control [PROPOSED D-30]

One control replaces the two in v5.0 (CA before any transaction; CA only above ₹50,000 of gain):

1. Before each quarterly action review the investor sends the planned sale list and the dashboard's tax estimate to the CA.
2. The CA confirms in writing the classification, the rate and the use of the exemption. This confirmation covers the Tier 5 to 8 sales in that quarter's plan.
3. A Tier 5 to 8 sale is not executed without a confirmation dated within the previous 90 days for that plan.
4. Tier 1, 2 and 3 exits and emergency trims are **not** held up for confirmation. The CA confirms them within 30 days afterwards.
5. The unverified items in Part 14.1 are put to the CA at the same time.

---

## Part 15: Portfolio transition plan

### 15.1 Baseline records

| Record | Content | Status |
|---|---|---|
| **B-0** historical baseline | The portfolio at 4 Nov 2026 before any IOC sale, at the prices of 3 Nov 2026: ICICI Bank ₹5,27,065; HDFC Bank ₹4,09,182; IOC ₹3,07,431; BEL ₹2,83,555; NIFTYBEES ₹2,10,964; Torrent Pharma ₹93,000; Info Edge ₹88,500; Torrent Power ₹81,824. Securities total ₹20,01,521. Broker cash [INPUT REQUIRED] | Fixed. All figures in this document are B-0 unless marked |
| **B-1** actual portfolio | The portfolio after a verified IOC sale, with its market values at that date and broker cash | INCOMPLETE: sale not verified; no updated prices supplied |

Disclosed values are kept as historical figures. No updated price, quantity or tax-lot gain is invented.

### 15.2 Baseline breaches (B-0, securities-only DB, provisional)

Excess = value − limit × DB. Each amount shrinks if broker cash is added to DB.

| Item | Value | % of DB | Limit | Excess |
|---|---:|---:|---:|---:|
| ICICI Bank | ₹5,27,065 | 26.3% | 10% | ₹3,26,913 |
| HDFC Bank | ₹4,09,182 | 20.4% | 10% | ₹2,09,030 |
| IOC | ₹3,07,431 | 15.4% | 10% | Exit (DL-001, PENDING EXIT) |
| BEL | ₹2,83,555 | 14.2% | 10% | ₹83,403 |
| Financial Services, direct (L2) | ₹9,36,247 | 46.8% | 25% | ₹4,35,867 |
| Financial Services, direct, household (L4) | 17.2% of HE | | 10% of HE | ₹3,91,108 |

### 15.3 Schedule: eligibility versus execution

A sale in Tier 5 to 8 happens only at a quarterly action review (the first review of January, April, July and October). The **eligibility date** is when a lot may be sold under the tax rule; the **execution date** is the first action review on or after it. Lot dates come from the tracker's transaction records with FIFO per broker and must be checked against contract notes.

| Step | Action | Eligibility date | Execution (first action review on or after) | Constraint |
|---|---|---|---|---|
| T1 | IOC exit (DL-001) | Now | 4 Nov 2026, once a sale is verified | All lots bought Dec 2024 to Feb 2025: long-term. Status PENDING EXIT |
| T2 | HDFC Bank: lots already long-term, up to the taxpayer's remaining FY 2026–27 exemption | Now | 4 Nov 2026 | The exemption is shared with the Bandhan Small Cap consolidation under the MF IPS, in the same taxpayer ledger |
| T3 | HDFC Bank: part that waits for the new exemption year | 1 Apr 2027 | 1 Apr 2027 | |
| T4 | HDFC Bank: lot bought 16 Apr 2026 | 17 Apr 2027 | **1 Jul 2027** | |
| T5 | ICICI Bank to 10% of DB | 4 Jun 2027 (lot of 3 Jun 2026) | **1 Jul 2027** | |
| T6 | BEL to 10% of DB | 12 Jun 2027 (lot of 11 Jun 2026) | **1 Jul 2027** | Part 10.6: BEL is also on probation |
| T7 | New money and proceeds into under-weight target names | Continuous | Continuous | Part 8.3 and 4.4. Not into Financial Services until L2 and L4 clear |

The v5.0 milestones of 30 Apr and 30 Jun 2027 could not be met under the action-review rule (the last lots become eligible on 17 Apr, 4 Jun and 12 Jun 2027 and are executed on 1 Jul 2027). They are corrected below.

### 15.4 Precedence

1. A Tier 1 event overrides everything in this Part (Part 10.0).
2. BEL: Part 10.6.
3. The severe stress override (Part 12.2) applies during the transition only if a milestone is missed or an emergency arises.

### 15.5 Milestones

| By | Position expected | Status |
|---|---|---|
| 31 Jan 2027 | T1 and T2 done; proceeds deployed within Part 8.3 limits | [ ] |
| 30 Apr 2027 | T3 done | [ ] |
| 31 Jul 2027 | T4, T5 and T6 done; ICICI Bank, HDFC Bank and BEL at or below 10% of DB; Financial Services at or below 25% of DB; S2 recomputed on B-1 and within 25% | [ ] |
| 31 Oct 2027 | L1, L2 and L4 clear; look-through measured (L3, L5, L7 PASS or FAIL, not UNVERIFIED); transition closed | [ ] |

With each bank at 10% of DB, direct Financial Services is 20% of DB (L2 clears) and about 7.3% of HE at today's HE (L4 clears).

### 15.6 Transition provision [PROPOSED D-31]

- **Term:** 4 Nov 2026 to 31 Oct 2027.
- **Scope:** the hard breaches that existed at adoption (ICICI Bank, HDFC Bank, BEL, and Financial Services under L2 and L4) and the IOC exit.
- **Nature:** this is the approved remediation plan for those breaches. It is **not an exception** and the two-quarter exception limit (Part 18.1) does not apply to it. It cannot be extended except by amendment.
- **Breaches arising after adoption** follow Part 9.7.
- **Until D-31 is signed,** the v4.9 transition rules (new money first, trims only after one year, IOC exit) remain the approved plan.

### 15.7 What the plan is not

No sale is made only to improve a dashboard figure. The stress-test improvement in Part 12.4 is a result of the concentration trims, not a reason for them.

---

## Part 16: Governance and Investor Review

### 16.1 Review calendar

| Review | When | What happens |
|---|---|---|
| Signal review | 1st and 15th of each month | Data refresh, gates, scores, limits, breach flags and the buy and sell list. The monthly Household Exposure Report is produced at the 15th. **No sales at signal reviews except Tier 1, 2 and 3 exits and emergency trims** |
| Quarterly action review | The first review of January, April, July and October (the 1st) | All Tier 4 to 8 actions, probation outcomes, scheduled trims, the stress tests, the CA-confirmed sale plan, the quarterly pack. The adoption review of 4 Nov 2026 counts as an action review |
| Annual strategic review | The January action review | Thesis refresh for every holding, the Part 3.2 split, benchmarks, tax-law check, dormant sleeves, policy amendments |
| Critical event | Tier 1: order at the next sellable session, investor notified the same day, decision-log entry within 2 trading days. Emergency breach, severe stress condition, financial verification unresolved at day 45: investor notified the same day, plan within the Part 9.7 times | Part 9.7, Part 10.0 |

### 16.2 Decision authority

| Category | Examples | Authority |
|---|---|---|
| A. Automatic | Calculations, warnings, freezes of new money, status labels, report production | The system. It never places an order |
| B. Investor approval | Every order; any new name; Tier 2 and 3 findings; remediation plans; Case B decisions (Part 13.4) | The investor, recorded in the decision log before execution |
| C. Material exception | Any breach of Parts 6, 8, 9, 12 or 13 allowed to persist | The investor, under Part 18.1, with an expiry date |
| D. Policy amendment | Any change to a limit, threshold, weight, definition or process | The investor, by a signed register entry (Part 18.2) |
| E. Mandatory escalation | Tier 1 event; emergency breach; severe stress condition; unresolved verification at day 45; a hard breach unresolved after two action reviews | The investor is notified the same day. Escalation does not delay a Tier 1 exit |

### 16.3 Quarterly pack (generated from the dashboard)

1. Executive summary. 2. Allocation (Parts 3 and 4). 3. Performance and attribution. 4. Stock-level table: weight, zone, risk class, gate status, score, valuation, thesis date. 5. Industry exposure (L2, L4). 6. Household look-through (L3, L5, L7) with data statuses. 7. Quality-gate results, probation register and the financial verification register. 8. Valuation flags. 9. Stress tests and risk register. 10. Rebalancing and pending actions. 11. Taxpayer ledger and exemption used. 12. Exceptions register with expiry dates. 13. Recommendations. 14. Decisions required.

### 16.4 Sign-off

Each pack ends with the Appendix I block, signed and dated by the investor. The block states plainly that the investor is decision-maker, approver and reviewer.

### 16.5 Records

The decision log (Appendix H), breach register, probation register, verification register, exception register and change log are kept for 8 years.

### 16.6 Succession [APPROVED v4.9]

Nominees are matched on both demat accounts. A read-only dashboard and this policy are available to a named family trustee. Written manual-liquidation instructions assume no automation is running.

### 16.7 Approval register and rule status

Every decision cited in this document (D-01 onwards) has an entry in the approval register in the Review Pack with: existing policy, proposed policy, rationale, evidence, risk, approver, status, effective date and dashboard implementation status. A decision is "Approved" only when the investor has signed it and entered an effective date. No decision is approved in this draft.

---

## Part 17: AlgoBot and reporting requirements

### 17.1 What the system must do

1. Calculate every rule in Appendix G and show each result with its status (Part 1.5) and the rule set that produced it (APPROVED or ADVISORY).
2. Keep the audit trail: inputs, data dates, outputs and rule version for every review.
3. Produce the monthly Household Exposure Report and the quarterly pack.

### 17.2 What the system must never do

- Interpret a missing, stale or unverified value as zero or as a pass.
- Treat UNVERIFIED or INCOMPLETE as PASS.
- Execute a discretionary sale or purchase without the investor's confirmation.
- Apply a threshold that has not been approved as an operative rule (a PROPOSED rule may be shown only as ADVISORY).
- Encode an investment decision that is not written in this policy. Operational mechanics (order routing, broker failover, idempotency keys, ledger signatures, FIFO matching, token refresh, report pruning) stay in the AlgoBot technical specification.

### 17.3 Dependencies

The Stocks tab was built from the v4.9 and v5.0 drafts and differs from this policy in the 17 ways listed in the Pre-Rewrite Review (section 3) and carried as dependencies DEP-01 to DEP-17 in the Review Pack. Until they are closed, dashboard output is advisory (Part 1.4).

---

## Part 18: Review, exceptions and amendment

### 18.1 Exceptions

Each exception records: the rule breached; the reason; the exposure in rupees and as a percentage; the financial and risk impact (the change in the stress-test result); the approving authority; the start date; the **expiry date**; and the remediation plan.

| Rule | Limit |
|---|---|
| Maximum duration | 2 quarters per exception, one renewal, and never beyond the resolution deadline in Part 9.7 |
| Emergency (L7) | One exception of up to 90 days, not renewable |
| Tier 1 | **No exception can exist.** An exception for any other rule cannot defer a Tier 1 exit |
| Transition | The Part 15.6 provision is not an exception |
| Indefinite exceptions | Not permitted |
| Where deadlines differ | The stricter prevails |

An expired exception reverts the test to its true status the same day.

### 18.2 Amendments

1. The change is proposed in writing with its reason, its evidence and its expected effect.
2. It is approved by a signed register entry with an effective date (Appendix I).
3. The version number and change log are updated.
4. Urgent risk changes may be approved ad hoc and are ratified at the next review.
5. The system applies no amendment before its effective date.

### 18.3 Policy review

A full review at least annually. An immediate review on any change in tax law, in the investor's circumstances, or when household equity changes by more than 30% in a year.

---

## Appendix A: Definitions and formulas

This appendix is the authoritative list of formulas. Other sections refer to it and do not restate a different version.

### A.1 Denominators and exposures

| Term | Definition |
|---|---|
| DB | Stocks + equity ETFs + liquidity instruments + gold instruments + actual Zerodha and Angel One cash (Part 3.1) |
| DEB, CSC, MFE, HE | Part 3.1 |
| B-0, B-1 | Baseline before any IOC sale; actual portfolio after a verified IOC sale (Part 10.5) |
| HX(c) | `Direct(c) + Σ_f MV(f)·w(f,c) + Σ_e MV(e)·w(e,c)` (Part 13.1) |
| Unidentified share u(f) | `1 − Σ identified weights (securities plus disclosed cash and other assets)` |
| Upper bound UB(c) | `HX_known(c) + Σ_f MV(f)·u(f) + Σ_e MV(e)·u(e)` |
| V20 | 20-trading-day median of daily traded value on NSE |

### A.2 Company measures

| Term | Formula |
|---|---|
| ROCE | EBIT ÷ (equity share capital + reserves + borrowings), year-end values |
| ROE | Net profit attributable to shareholders ÷ average of opening and closing equity |
| ROA | Net profit ÷ average total assets |
| Cash conversion | Σ cash from operations (3 FY) ÷ Σ net profit (3 FY), capped at 150% in scoring |
| Leverage, non-financial | Borrowings ÷ (equity share capital + reserves) |
| Interest coverage | EBIT ÷ finance cost |
| Financial-company ratios | Defined in Parts 6.4 to 6.7 and not restated |
| Net profit CAGR | `CAGR_n = (PAT_t ÷ PAT_(t−n))^(1/n) − 1`, where t is the latest completed financial year and n is 3 or 5. Defined only if PAT_t > 0 and PAT_(t−n) > 0. Capped at 40% |
| Normalised growth G | Median of the valid CAGR_3 and CAGR_5. If both are valid, the median is their average; if one is valid, it is used; if neither, G is INCOMPLETE |
| Earnings yield | TTM net profit attributable ÷ current market capitalisation (equal to EPS ÷ price when the share count is unchanged) |
| Book-to-market | (Equity share capital + reserves) ÷ current market capitalisation |
| Embedded-value-to-market | Embedded value ÷ current market capitalisation |
| Sample standard deviation | `sqrt( Σ (x_i − mean)² ÷ (n − 1) )`, n = 3 annual values (5 when the feed supports it) |
| Percentile rank | `PR = 100 × (r − 1) ÷ (n − 1)`; ties take the average rank; n is the number of valid companies in the group; n must be at least 5 |
| Score | `0.35·Q + 0.25·G + 0.15·C + 0.15·V + 0.10·S`, each factor a percentile rank (Appendix C) |
| Z5 (entry filter) | `(x_now − mean of daily observations over 5 years) ÷ sample standard deviation of the same observations`, x the entry-filter measure (Part 8.1). Full history if 3 to 5 years |
| Z10 (trim) | Same with a 10-year window and at least 5 years of history |

### A.3 Zones and sizing

| Term | Formula |
|---|---|
| Weight w | Market value ÷ DB, unrounded |
| Standard class | Target T = 7.5%; cap H = 10% |
| Reduced class | T = 5.625%; H = 7.5% |
| Zones (L1) | Below range: `w < 0.75·T`. Normal: `0.75·T ≤ w ≤ 0.9·H`. Warning: `0.9·H < w ≤ H`. Hard breach: `w > H` |
| Zones (L2, L4, L5, L6, L3, L7) | Warning line `0.9 × limit`; hard breach above the limit |
| Trim amount | `max(0, MV − L × DB)` for DB limits; for household limits the target direct holding D* (Parts 13.4, 13.5) × HE minus the current holding |
| Purchase at a review | `min( tranche allowance, T·DB − holding, H·DB − holding, 5%·DB − purchases this quarter, eligible capital )`, never below zero |
| Liquidity | `position ≤ 0.5% × V20`; expected exit period `= position ÷ (participation rate × V20)` |

### A.4 Data freshness

| Input | STALE when | MISSING when |
|---|---|---|
| Prices | Older than 1 trading day | Absent |
| Broker cash (Zerodha, Angel One) | Older than 1 trading day | Absent |
| Fundamentals, fetch age | Feed last refreshed more than 45 days ago | Never fetched |
| Fundamentals, source age | Latest annual results more than 15 months old | No results |
| Manual register check (financial companies) | PASS older than 120 days | No record |
| Mutual fund disclosure; index factsheet | As-of date 46 to 90 days before use | Older than 90 days, or none |
| Betas, price history, V20 | Older than 90 days | Absent |
| Taxpayer ledger | Not updated within 1 trading day of a trade | Lot missing |

### A.5 Return and risk

| Term | Formula |
|---|---|
| TWR | `Π (1 + r_sub-period) − 1`, sub-periods split at each external flow |
| XIRR | The rate r solving `Σ CF_t ÷ (1 + r)^(t/365) = 0` |
| Stress loss | `Σ_positions MV × shock`, funds and ETFs through constituents (Part 12.3) |
| Portfolio beta | `Σ (MV_i ÷ DB) × β_i` |
| Herfindahl index | `Σ w_i²` over B1 weights |

---

## Appendix B: Quality-gate matrix and classification

### B.1 Matrix

G = gate (blocks entry; Tier 4 if failed while held). M = monitoring (triggers a review). \* = proposed, pending D-07 or D-09. – = not used.

| Metric | Non-financial | Bank | NBFC/HFC | Life insurer | General insurer | Capital markets |
|---|---|---|---|---|---|---|
| ROE ≥ 15% (3-yr average), no year < 10% | G | G | G | M | M | G |
| ROCE ≥ 15%, floor 10% | G | – | – | – | – | – |
| Borrowings ÷ equity ≤ 2.0 | G | – | – | – | – | G (where borrowings exist) |
| Cash conversion ≥ 70% | G | – | – | – | – | G |
| Interest coverage ≥ 3× | M\* | – | – | – | – | – |
| Asset quality (GNPA, NNPA; Stage 3) | – | G\* | G\* | – | – | – |
| Capital (CET1, CRAR; solvency) | – | G\* | G\* | G\* (solvency) | G\* (solvency) | – |
| Leverage (gross, adjusted) | – | – | M\* (threshold by sub-type) | – | – | – |
| Operating RoEV ≥ 15% | – | – | – | G\* | – | – |
| Combined ratio ≤ 105% | – | – | – | – | G\* | – |
| Governance (Tier 1 events) | G | G | G | G | G | G |

### B.2 Business-model classification table [PROPOSED D-29]

Keyed by ISIN. The investor approves entries and changes. A financial company not in the table is UNVERIFIED. Initial entries (the held names; ISINs from the NSE Nifty LargeMidcap 250 constituent file):

| ISIN | Company | Business model | Ranking group |
|---|---|---|---|
| INE090A01021 | ICICI Bank | Bank | RG2 |
| INE040A01034 | HDFC Bank | Bank | RG2 |
| INE263A01024 | Bharat Electronics | Non-financial | RG1 |
| INE242A01010 | Indian Oil Corporation | Non-financial | RG1 |
| INE685A01028 | Torrent Pharmaceuticals | Non-financial | RG1 |
| INE663F01032 | Info Edge (India) | Non-financial | RG1 |
| INE813H01021 | Torrent Power | Non-financial | RG1 |

NIFTYBEES is an equity ETF (bucket B2), not classified here. [INPUT REQUIRED: its ISIN and constituent weights]

---

## Appendix C: Scoring methodology

### C.1 Steps

1. For each company, assign the business model (Appendix B.2) and ranking group (Part 7.2).
2. Compute the gate tests (Part 6). Only gate status PASS companies are scored.
3. Compute the raw factor values below. A company missing any factor required for its group is **INCOMPLETE** and is not ranked.
4. Within each ranking group, and only if the group has at least 5 valid companies for that factor, convert each raw value to a percentile rank (Appendix A.2). Lower-is-better measures are ranked in reverse.
5. Combine: `Score = 0.35·Q + 0.25·G + 0.15·C + 0.15·V + 0.10·S`.
6. Order companies by score within the group; build the list under Part 7.5.

### C.2 Raw factors

| Factor | RG1 | RG2 | RG3 | RG4 | RG5 | RG6 |
|---|---|---|---|---|---|---|
| Q | 3-yr average ROCE | 3-yr average ROE | 3-yr average ROE | 3-yr average operating RoEV | 3-yr average combined ratio (lower better) | 3-yr average ROE |
| G | Median of valid CAGR_3 and CAGR_5 (A.2), all groups | | | | | |
| C | Σ OCF ÷ Σ PAT, capped 150% | 50 (constant) | 50 | 50 | 50 | 50 |
| V | Earnings yield, ranked within NSE industry (at least 5 valid, else within RG1) | Book-to-market | Book-to-market | Embedded-value-to-market | Earnings yield | Earnings yield |
| S | Sample SD of annual ROCE | Sample SD of annual ROE | Same | Sample SD of annual operating RoEV | Sample SD of annual combined ratio | Sample SD of annual ROE |

### C.3 Illustration of the arithmetic only (the values are not data)

Percentile ranks for six valid raw values 12, 15, 15, 18, 21, 25: ranks are 1, 2.5, 2.5, 4, 5, 6, so PR = 100 × (r − 1) ÷ 5 = 0, 30, 30, 60, 80, 100.

A non-financial company with Q = 80, G = 60, C = 70, V = 40, S = 90 scores 0.35×80 + 0.25×60 + 0.15×70 + 0.15×40 + 0.10×90 = 28 + 15 + 10.5 + 6 + 9 = **68.5**.
A financial company with the same ranks and C = 50 scores 28 + 15 + 7.5 + 6 + 9 = **65.5**. The most a financial company can score is 35 + 25 + 7.5 + 15 + 10 = **92.5**.

### C.4 One definition per rule

| Item | Defined in | Restated elsewhere? |
|---|---|---|
| Weights | Part 7.3 | Appendix A.2 (score), Appendix G (SCR-02) quote the same numbers |
| Outliers: caps and ranks, no winsorising | Part 7.4 | Appendix G SCR-02 says the same |
| Z5 and Z10 | Appendix A.2 | Parts 8.2 and 8.5 cite A.2 |
| Undefined growth | Part 7.4 and A.2 | Both say INCOMPLETE |
| Insurer ROE | Part 6.6 | Appendix B says M |
| Missing factor | Part 7.4 | Appendix G SCR-03 |

---

## Appendix D: Risk scenario framework

Method: Part 12.3. Baseline results: Part 12.4. All figures are B-0, securities-only DB ₹20,01,521, provisional until broker cash is reconciled.

### D.1 S2 contributions (Financial Services −35%, all other equity −20%)

| Holding | Value | Shock | Loss |
|---|---:|---:|---:|
| ICICI Bank | ₹5,27,065 | 35% | ₹1,84,473 |
| HDFC Bank | ₹4,09,182 | 35% | ₹1,43,214 |
| IOC | ₹3,07,431 | 20% | ₹61,486 |
| BEL | ₹2,83,555 | 20% | ₹56,711 |
| NIFTYBEES | ₹2,10,964 | 20% to 35% (bound) | ₹42,193 to ₹73,837 |
| Torrent Pharma | ₹93,000 | 20% | ₹18,600 |
| Info Edge | ₹88,500 | 20% | ₹17,700 |
| Torrent Power | ₹81,824 | 20% | ₹16,365 |
| **Total** | **₹20,01,521** | | **₹5,40,741 to ₹5,72,386** (27.0% to 28.6%) |

(Components are rounded, so they may differ from the total by ₹1.)

### D.2 S3 contributions (Oil Gas & Consumable Fuels and Power −30%, all other equity −20%)

| Holding | NSE industry | Loss |
|---|---|---:|
| IOC | Oil Gas & Consumable Fuels | ₹92,229 |
| Torrent Power | Power | ₹24,547 |
| ICICI Bank, HDFC Bank | Financial Services | ₹1,05,413 and ₹81,836 |
| BEL | Capital Goods | ₹56,711 |
| NIFTYBEES | Equity ETF | ₹42,193 |
| Torrent Pharma, Info Edge | Healthcare; Consumer Services | ₹18,600 and ₹17,700 |
| **Total** | | **₹4,39,230** (21.9%) |

### D.3 Items not computed and the input each needs

| Scenario | Input required |
|---|---|
| S1b | Beta of each holding and of NIFTYBEES to the Nifty 500 |
| S2, exact | NIFTYBEES's financial-services weight; each fund's financial-services weight |
| S4 | Sector total-return series and the 10-year yield series |
| S5 | Foreign-currency exposure disclosure for each holding |
| S6 | Market-cap class at the scenario date; small-cap shock; price-impact assumption |
| S8 | Sector total-return series for the chosen window |
| Household versions | Fresh, complete disclosures for the 11 funds |

---

## Appendix E: Concentration and position-sizing rules

Rules: Parts 9.1 to 9.7 and 8.3. Formulas: Appendix A.3.

### E.1 Baseline zone classification (provisional, securities-only DB, standard class shown)

The risk class of each name is UNVERIFIED (market-cap rank and earnings variability were not computed for this document), so the standard class is shown. Every zone below is read on the securities-only DB, so its status is UNVERIFIED until broker cash is reconciled (Part 3.1).

| Holding | % of DB | Zone (L1, standard class) | Note |
|---|---:|---|---|
| ICICI Bank | 26.33% | Hard breach | Part 15 |
| HDFC Bank | 20.44% | Hard breach | Part 15 |
| IOC | 15.36% | Hard breach | DL-001, PENDING EXIT |
| BEL | 14.17% | Hard breach | Part 15; Part 10.6 |
| Torrent Pharma | 4.65% | Below range | Eligible for new money |
| Info Edge | 4.42% | Below range | If Reduced class, 4.42% would be Normal (lower edge 4.219%) |
| Torrent Power | 4.09% | Below range | Same note |
| NIFTYBEES | 10.54% | Bucket B2 (not subject to L1) | Within its 0 to 15% band |

### E.2 Worked purchase (new stock, standard class, DB ₹20,01,521)

Target 7.5% = ₹1,50,114. First tranche (50%) = ₹75,057. Later-tranche allowance (2.5%) = ₹50,038. Quarterly allowance (5%) = ₹1,00,076. Hard-cap headroom at 10% = ₹2,00,152.

| Step | Calculation | Purchase |
|---|---|---:|
| Review 1 | min(75,057; gap 1,50,114; headroom 2,00,152; quarter 1,00,076; capital) | ₹75,057 |
| Same quarter, at least 4 weeks later | min(50,038; gap 75,057; headroom 1,25,095; quarter remaining 25,019) | ₹25,019 |
| Next quarter | min(50,038; gap 50,038; headroom 1,00,076; quarter 1,00,076) | ₹50,038 |
| Cumulative | 75,057 + 25,019 + 50,038 | **₹1,50,114 = target** |
| A holding already at 8.5% (₹1,70,129) | gap = 1,50,114 − 1,70,129 < 0 | ₹0 |

The 8.75% total of the v5.0 rule cannot occur. A Reduced-class name has target ₹1,12,586 and a first tranche of ₹56,293.

---

## Appendix F: Tax-lot and rebalancing method

Applies to each taxpayer separately (Part 14.3). Legal points are subject to the CA confirmation in Part 14.5.

**F.1 Inputs.** The taxpayer's ledger: every lot with demat account, date, quantity and cost; the taxpayer's realised gains and losses this tax year across all platforms (both demat accounts and mutual funds); losses brought forward; the remaining ₹1,25,000 threshold; transfer expenses; the planned sales from Part 15.

**F.2 Lot choice.** FIFO applies within each demat account, so the lots sold are the oldest in the account chosen. Choosing a lot means choosing the account. Classification: held more than 12 months = long-term (subject to D-17); otherwise short-term.

**F.3 Gain for a lot.** `proceeds − cost − transfer expenses`. STT is not treated as a deductible cost [CA to confirm].

**F.4 Netting order** [CA to confirm under the 2025 Act]: short-term losses against short-term gains, then against long-term gains; long-term losses against long-term gains; then the ₹1,25,000 threshold against net long-term gains. The taxpayer's other realisations this year (mutual funds, other brokers) are included before any new sale is planned.

**F.5 Whole shares.** Orders are in whole shares. The quantity that fits the remaining threshold is found by whole-share steps rounding down; the rest is scheduled. A partial-lot sale is allowed only to the extent the depository records the sale against the oldest lots in that account.

**F.6 Scheduling order.** Within one taxpayer's ledger: (1) Tier 1 to 3 exits; (2) mutual fund consolidations; (3) concentration trims by earliest deadline in Part 9.7; (4) drift trims; (5) loss harvesting.

**F.7 Eligibility versus execution.** A lot becomes eligible on its long-term date; it is executed at the first action review on or after it (Part 15.3).

**F.8 Overrides.** Tier 1 to 3 exits, emergency trims and the minimum trim of a severe stress condition are sold whatever the lot age and the remaining threshold. The tax is estimated and recorded afterwards.

**F.9 Not assumed.** That any fraction of a lot can be sold; that a loss can be used without being set off in the order above; that gains in one taxpayer's ledger can use another's threshold.

---

## Appendix G: Rules matrix (implementation)

Every row names the policy section it implements. Status: **APP** = approved in v4.9; **PROP D-nn** = proposed, advisory until signed; **DATA** = needs data that does not yet exist, so it reports UNVERIFIED or INCOMPLETE. No row is PRODUCTION READY. Where a row shows a threshold from both v4.9 and v5.1, the v4.9 value is operative until the decision is signed. Output statuses are those of Part 1.5. Frequency "Fortnightly" means the 1st and 15th of each month.

### G.1 Allocation

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ALC-01 | 3.2 | Household split | DEB ÷ HE | DEB, MFE | 30–50% (target 40%) | Prices 1 day | Fortnightly | PASS, WARNING, FAIL | Direct new money to the lagging side | Auto; investor for any sale | Snapshot | APP; D-02 confirms |
| ALC-02 | 4.2 | Sum rule | B1 + B2 + B3 + B4 | Bucket values | = 100% of DB | Cash 1 day | Fortnightly | PASS, FAIL | Block the report if FAIL | Auto | Snapshot | PROP D-03 |
| ALC-03 | 4.1 | Bucket bands | Bucket ÷ DB | B1 to B4 | B1 80–95%; B2 0–15%; B3 0–5%; B4 0–5% | Cash 1 day | Fortnightly | PASS, WARNING, FAIL, UNVERIFIED | Part 4.3 funding order | Investor | Snapshot | PROP D-03; DATA (cash) |
| ALC-04 | 4.4 | B2 funding limit | B2 after funding ≥ 10% target | B2 value, target | B2 not sold below 10% to fund a buy | Prices 1 day | Each buy | PASS, FAIL | Block funding from B2 | Investor | Order log | PROP D-27 |
| ALC-05 | 3.1 | Broker cash | Cash_Zerodha + Cash_Angel | Broker ledgers | Present, 1 trading day old or less | 1 day | Each review | PASS, STALE, MISSING | DB tests UNVERIFIED unless PASS | Auto | Ledger statements | PROP D-28; DATA |
| ALC-06 | 4.3 | Idle liquidity | B3 ÷ DB and days above 5% | B3 | ≤ 5% or ≤ 30 days | Cash 1 day | Fortnightly | WARNING | Deploy per Part 4.3 | Investor | Snapshot | PROP D-27 |

### G.2 Stock concentration and sizing

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CON-01 | 9.2 | L1 zones | Holding ÷ DB | Holding, DB, risk class | Normal 0.75T to 0.9H; Warning to H; Hard above H (T, H by class) | Prices and cash 1 day | Fortnightly | PASS, WARNING, FAIL; UNVERIFIED if cash not PASS | Warning: no new money. Hard: Part 9.7 | Freeze auto; plan by investor | Breach register | APP (7.5%, 10%); PROP D-04 (zones) |
| CON-02 | 9.4 | Risk class | Any of: market-cap rank > 100; return-on-capital SD > 8 pp; net debt/EBITDA > 2.5 (non-financial); beta > 1.3 | Market cap, ROCE or ROE series, beta | Any = Reduced | 45 and 90 days | Quarterly | Standard, Reduced, UNVERIFIED | Size to class | Investor | Class record | PROP D-04; DATA (beta, net debt/EBITDA) |
| CON-03 | 9.5 | Liquidity | Position ÷ V20 | V20, position | ≤ 0.5% | 90 days | Quarterly | PASS, FAIL, UNVERIFIED | Freeze; reduce within the clock | Investor | V20 file | PROP D-10; DATA |
| CON-04 | 8.3 | Purchase constraint | `min(tranche, T·DB − holding, H·DB − holding, 5%·DB − quarter purchases, capital)` | Target, holding, quarter purchases, capital | Result ≥ 0 and never above target | Prices 1 day | Each proposed buy | Amount | Cap the proposed order | Investor confirms | Order proposal | PROP D-04 |

### G.3 Industry concentration

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| IND-01 | 9.2 | L2 | Σ B1 holdings in NSE industry ÷ DB | Holdings, industry | Normal ≤ 22.5%; Warning ≤ 25%; Hard > 25% | Prices and cash 1 day | Fortnightly | PASS, WARNING, FAIL, UNVERIFIED | Freeze; Part 9.7 | Auto; investor | Breach register | APP (25%); PROP D-04 (22.5% line) |
| IND-02 | 13.5 | L4 | Σ direct B1 in industry ÷ HE | Holdings, HE | Warning 9.0%; Hard > 10% | Prices 1 day | Fortnightly | PASS, WARNING, FAIL | Freeze; plan | Investor | Breach register | APP (10%); PROP D-23 (response) |
| IND-03 | 9.1 | L6 gold | B4 ÷ DB | B4 | Warning 4.5%; Hard > 5% | Cash 1 day | Fortnightly | PASS, WARNING, FAIL, UNVERIFIED | Stop purchases; trim | Investor | Snapshot | APP; PROP D-04 (line) |

### G.4 Household look-through

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| LKT-01 | 13.1 | Exposure report | HX(c) as in Part 13.1 | Direct holdings; fund and ETF disclosures | – | 45 days | Monthly (15th) | Report with data status | Feed LKT-02 to LKT-04 | Auto | Exposure report | PROP D-18; DATA |
| LKT-02 | 13.4 | L3 | HX(c) ÷ HE | HX, HE | Warning 5.4%; Hard > 6% | 45 days | Monthly | PASS, FAIL, UNVERIFIED (Part 13.2) | R1 to R4 | Freeze auto; investor plan | Breach register with decomposition | APP (6%); PROP D-05, D-23; DATA |
| LKT-03 | 13.5 | L5 | HX(i) ÷ HE | HX(i), HE | Warning 27%; Hard > 30% | 45 days | Monthly | Same | Same | Same | Same | PROP D-05, D-23; DATA |
| LKT-04 | 13.6 | L7 | HX(c) ÷ HE | HX, HE | 15% | 45 days | Monthly | FAIL, PASS, UNVERIFIED | Emergency clock (Part 9.7) | Investor | Exception log | APP (exception level); PROP D-24; DATA |
| LKT-05 | 13.2 | Data status | u(f); ages | Disclosures | Fully / Partially verified; Stale 46–90 days; Missing > 90 days; Materially incomplete | 45 and 90 days | Monthly | Status | Test outcome rule of Part 13.2 | Auto | Exposure report | PROP D-18 |

### G.5 Fundamental quality

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| QLT-01 | 6.3 | Non-financial gate | Appendix A.2 | Annual results | Appendix B.1 | Fetch 45 days; source 15 months | Fortnightly | PASS, FAIL, MISSING, STALE | Block buy; Tier 4 | Auto; investor for exits | Fundamentals snapshot | APP (gate); PROP D-07 (additions) |
| QLT-02 | 6.4–6.7 | Financial-company gate | Part 6 ratios | Investor disclosures; register | Appendix B.1, after D-09 | Register 120 days | Quarterly | PASS, FAIL, UNVERIFIED | Block buy; Tier 4 | Investor | Register record | PROP D-09, D-19; DATA |
| QLT-03 | 6.2.1 | Verification escalation | Days since flag | Register | Day 30 review; day 45 becomes Tier 4 | – | Fortnightly | PASS, FAIL, UNVERIFIED | Start probation | Investor | Register | PROP D-19 |
| QLT-04 | 6.1 | Classification | ISIN lookup | Table B.2 | Entry exists | – | Each review | PASS, UNVERIFIED | Block financial buys if missing | Investor | Table | PROP D-29 |
| QLT-05 | 10.2 | Tier 1 event detection | Any listed event | Filings, orders, pledge data | Any event | 1 day | Daily | FAIL | Alert; Tier 1 exit | Investor places the order | Decision log | APP (pledge); PROP D-25; DATA (manual feed) |

### G.6 Scoring and valuation

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SCR-01 | 7.2 | Ranking groups | Group per Table B.2 | Classification | At least 5 valid per factor | – | Fortnightly | Rank or INCOMPLETE | – | Auto | Score file | PROP D-11 |
| SCR-02 | 7.3 | Score | `0.35·Q + 0.25·G + 0.15·C + 0.15·V + 0.10·S`; percentile ranks; **no winsorising** | Factors (Appendix C) | – | Fetch 45 days | Fortnightly | Score | Target list | Auto | Score file | PROP D-11 (v4.9 weights 40/30/15/15 operative until signed) |
| SCR-03 | 7.4 | Incomplete score | Any required factor missing | Factors | – | – | Fortnightly | INCOMPLETE, factor named | Not ranked | Auto | Score file | PROP D-11 |
| SCR-04 | 7.5 | Target list | Rules of Part 7.5 | Scores, holdings, groups | 12 names; 25% industry; at most 2 per group | – | Fortnightly | List | Buy candidates | Investor | List snapshot | APP (12, 25%); PROP D-11 |
| SCR-05 | 10.4 | Merit review | Bottom quartile of group at 2 action reviews | Rank history | – | – | Quarterly | WARNING | Merit review | Investor | Review note | PROP D-13 |
| VAL-01 | 8.2 | Entry filter | Z5 (Appendix A.2) | 5-year history of the measure | Z5 ≤ 2 | 90 days | Fortnightly | PASS, FAIL, UNVERIFIED | Block buy | Auto | Valuation snapshot | APP (P/E); PROP D-15; DATA |
| VAL-02 | 8.5 | Overvaluation | Z5 > 2 alert; Z10 > 3 trim 25% | 10-year history | As stated | 90 days | Quarterly | WARNING, FAIL | No adds; trim | Investor | Trade log | APP (P/E trim); PROP D-15; DATA |
| VAL-03 | 8.4 | 200-day average | Close vs 200-day average | Price history | v4.9: freeze below. D-16: pace over 3 tranches and 8 weeks | 1 day | Daily | UNVERIFIED | Applied by hand | Investor | – | APP (freeze); PROP D-16; DATA |

### G.7 Exit

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EXT-01 | 10.0 | Tier 1 override | Event present | Event list | Overrides every other rule | – | Event | FAIL | Full exit at the next sellable session. No exception | Investor places the order | Decision log within 2 trading days | PROP D-25 |
| EXT-02 | 10.1 | Tier 2 and 3 windows | Days since finding | Finding date | 30 days; 60 days | – | Daily | WARNING, FAIL | Exit by the deadline | Investor | Thesis note | PROP D-25 |
| EXT-03 | 10.1 | Probation clock | Quarters in failure | Gate history | 2 quarters; exit at the 3rd review | – | Quarterly | Status | Exit | Investor | Probation register | APP; PROP D-13 |
| EXT-04 | 10.5 | Pending exit | Status of DL-001 | Contract note | Until a verified sale | – | Each review | PENDING | Keep in all calculations | Investor | Contract note | PROP D-20 |
| EXT-05 | 10.6 | Probation vs trim | Precedence | Both statuses | Part 10.6 | – | Each review | Status | Follow Part 10.6 | Investor | Review note | PROP D-22 |

### G.8 Portfolio risk

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RSK-01 | 12.3 | S1b relative | `Σ (MV·β) × 30% ÷ DB ≤ 35%` | Betas | Portfolio beta ≤ 1.1667 | 90 days | Quarterly | PASS, FAIL, INCOMPLETE | Part 12.2 | Investor | Stress report | PROP D-06; DATA |
| RSK-02 | 12.3 | S2 to S7 absolute | `Σ MV × shock ÷ DB` | Holdings, shocks, constituent weights | ≤ 25% | 45 days; prices 1 day | Quarterly | PASS, FAIL, INCOMPLETE, UNVERIFIED | Part 12.2 | Investor | Stress report | APP (25%, renamed); DATA |
| RSK-03 | 12.2 | Severity | Warning above 90% of threshold; breach; severe | Results; plan status | Part 12.2 | – | Quarterly | Level | Part 12.2 | Investor | Stress report | PROP D-26 |
| RSK-04 | 12.6 | Household stress | Scenarios on HE | Fund and ETF weights | – | 45 days | Quarterly | UNVERIFIED | No compliance claim | Auto | – | PROP D-18; DATA |
| RSK-05 | 12.1 | Drawdown | Peak-to-trough, daily DB | Daily DB | Report | 1 day | Daily | Value | Report | – | Series | APP |

### G.9 Performance

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| PRF-01 | 11.1 | TWR and XIRR | Appendix A.5 | Values, flows | – | 1 day | Monthly | Values | Report | – | Report | PROP D-12 |
| PRF-02 | 11.2 | Both benchmarks | TRI returns | Index data | Both reported | 1 day | Monthly | Values | Report | – | Report | PROP D-12 |
| PRF-03 | 11.5 | Underperformance | Rolling 3-year vs primary hurdle | Series | 1, 2, 3 periods | – | Quarterly | Level | Part 11.5 | Investor | Pack | PROP D-12 |
| PRF-04 | 11.7 | Forward paper portfolio | Locked-rule log | Locked parameters | 8 quarters before a claim | – | Each signal review | Log | No claim earlier | – | Locked log | PROP D-14; DATA |

### G.10 Tax

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TAX-01 | 14.3 | Taxpayer exemption | ₹1,25,000 − net long-term gains realised by that taxpayer | Taxpayer ledger | Per taxpayer | 1 trading day | Each trade | Remaining amount | Schedule trims | Investor | Ledger | PROP D-17 |
| TAX-02 | 14.3 | Lot age | Acquisition date + 12 months | Ledger | More than 12 months | – | Each proposal | Eligibility date | Schedule | Auto | Ledger | PROP D-17 |
| TAX-03 | 14.5 | CA confirmation | Confirmation date within 90 days | CA letter | Before a Tier 5 to 8 sale | – | Each action review | PASS, MISSING | Hold the sale | Investor | CA letter | PROP D-30 |

### G.11 Rebalancing

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| REB-01 | 14.4 | New-money routing | Largest gap first, within CON-04 | Gaps, eligibility | – | – | Each inflow | Order proposal | Propose buys | Investor | Order log | APP; PROP D-04 |
| REB-02 | 9.7 | Remediation clocks | Days since first measurement | Breach register | Table 9.7 | – | Fortnightly | PASS, WARNING, FAIL | Escalate | Investor | Register | PROP D-26 |
| REB-03 | 16.1 | Sale timing | Event type vs calendar | Proposal | Sales only at action reviews except Tier 1 to 3 exits and emergency trims | – | Each proposal | PASS, FAIL | Block a mistimed sale | Investor | – | PROP D-26 |
| REB-04 | 15.6 | Transition milestones | Status vs Part 15.5 | Milestone log | Dates in 15.5 | – | Quarterly | PASS, FAIL | Severe stress rule if missed | Investor | Milestone log | PROP D-31 |

### G.12 Exceptions, data and governance

| ID | Ref | Rule | Formula | Inputs | Threshold | Freshness | Freq. | Output | Action | Approval | Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EXC-01 | 18.1 | Exception expiry | Days to expiry | Register | ≤ 0 | – | Fortnightly | EXCEPTION, FAIL | Revert the test; escalate | Investor | Register | PROP D-26 |
| EXC-02 | 10.0 | No exception to Tier 1 | Exception covering a Tier 1 event | Register | None valid | – | Each review | FAIL | Reject the entry | – | – | PROP D-25 |
| DAT-01 | A.4 | Data freshness | Age per input | Timestamps | Appendix A.4 | – | Each review | PASS, STALE, MISSING | Downstream tests UNVERIFIED | Auto | Timestamps | PROP D-08 |
| GOV-01 | 1.4 | Rule-set label | Each line shows APPROVED or ADVISORY | Rule register | Every output labelled | – | Each output | Label | Show the label | Auto | Rule-set id | PROP D-32 |
| GOV-02 | 17.2 | No automatic execution | – | – | None | – | – | – | Never place an order | Auto | – | APP |

---

## Appendix H: Investment decision log

| ID | Date | Security | Decision | Rule or tier | Rationale | Evidence | Approver | Status | Execution record | Tax impact | Follow-up |
|---|---|---|---|---|---|---|---|---|---|---|---|
| DL-001 | 4 Nov 2026 | IOC | Exit in full | One-time transitional decision (v4.9 T.3); Tier-2-type judgement. Not a Tier 4 application | A refiner whose returns depend on crude prices and administered pricing does not fit a compounding mandate. One of the last three years had ROCE of 7% | Fundamentals snapshot of 4 Nov 2026 | Investor | **PENDING EXIT** | Sale date [INPUT]; quantity [INPUT]; average price [INPUT]; realised gain or loss [INPUT]; classification [INPUT]; post-sale portfolio value [INPUT] | Long-term expected (lots bought Dec 2024 to Feb 2025); amount [INPUT] | Enter the contract note and move to B-1 |

---

## Appendix I: Investor Review approval template

| Item | Entry |
|---|---|
| Review date | |
| Documents reviewed | Review Pack Qx FYxx; Household Exposure Report; stress tests; CA confirmation dated ____ |
| Decisions signed (IDs and effective dates) | |
| Decisions deferred | |
| Exceptions approved (with expiry) | |
| Policy amendments (with version) | |
| Rules moved to PRODUCTION READY (with checklist reference) | |
| Statement | The investor is the decision-maker, the approver and the reviewer. No independent committee has reviewed this decision |
| Signed | ______________________ (Investor)   Date ________ |
| Tax adviser acknowledgement | ______________________   Date ________ |

---

## Appendix J: Policy change log

| Version | Date | Summary | Approved by |
|---|---|---|---|
| v4.8 | 11 Jul 2026 | Three-horizon framework; ballast pool | Investor |
| v4.9 | 4 Nov 2026 | Rebased to the live book; screen-driven Core; transition plan; household section | Investor (adopted) |
| v5.0 | 4 Nov 2026 | Draft restructure. Never approved | None |
| v5.1 | 4 Nov 2026 | Corrections to v5.0: household concentration controls; Tier 1 precedence; allocation and sizing arithmetic; scoring formulas; financial gates; stress tests; look-through data; tax law check; IOC and transition status; validation gate; governance and rule-status model. See Review Pack | [pending] |
