# Investment Policy Statement v5.0: Direct Equity Book

**Status:** DRAFT FOR SIGN-OFF. The investor has instructed that the rules below be built into the Stocks tab of the Personal Networth Tracker, so the dashboard applies them from 4 Nov 2026. That is an implementation instruction, not Investment Committee approval. The register in the Committee Pack lists what still needs a signature. Not validated: no backtest of these rules has been run.
**Supersedes on approval:** IPS v4.9 (effective 4 Nov 2026)
**Baseline information date:** 4 Nov 2026 (prices of 3 Nov 2026, Personal Networth Tracker)
**Effective date:** [APPROVAL DATE - to be entered at sign-off]
**Companion documents:** Mutual Fund IPS v1.1; IPS v5.0 Committee Pack (change log, memorandum, approval register, validation checklist)

> This policy is a governance framework for one investor's own decisions. It is not personalised investment advice. Capital is at risk. Return objectives are targets, not guarantees. Tax treatment must be confirmed by a chartered accountant before any transaction.

### How to read this document

Every rule carries one of three labels:

- **[RETAINED]**: approved in v4.9 and carried forward unchanged in substance.
- **[MODIFIED]**: approved in v4.9, changed here; the change takes effect only on approval of the listed decision.
- **[NEW]**: introduced in v5.0; takes effect only on approval of the listed decision.

Decision references (D-01, D-02 …) point to the Approval Register in the Committee Pack. Until a decision is approved, the v4.9 rule it replaces stays in force. Where v4.9 had no rule, the new rule applies only on approval.

---

## Part 1: Document control and investment mandate

### 1.1 Parties and authority

| Role | Holder | Authority |
|---|---|---|
| Investor and beneficial owner | Byomkesh | Final approval of policy, exceptions and all discretionary trades |
| Investment Committee (IC) | [D-01: composition to be approved; default is the investor acting alone with a written record] | Quarterly review, exception approval, policy amendment |
| Portfolio monitoring system | Personal Networth Tracker and AlgoBot | Calculation, monitoring and recommendations only. Never places a trade without investor confirmation |
| Tax adviser | [Chartered accountant: name to be entered] | Confirms tax treatment before execution of any sale with a realised gain above ₹50,000 |

### 1.2 Scope

This policy governs all securities held in the investor's Zerodha and Angel One demat accounts (the **Direct Book**). The Mutual Fund IPS v1.1 governs mutual fund holdings. Part 3 and Part 13 of this policy govern the two together at household level.

Out of scope: the separate trading account and trading mandate; real estate; bank deposits; PF/EPF; insurance; business capital of the wine shop.

### 1.3 Mandate summary

| Parameter | Policy | Label |
|---|---|---|
| Purpose | Long-term compounding through a concentrated book of high-quality Indian listed companies | RETAINED |
| Horizon | More than 5 years for individual holdings; 10 to 15 years for the book | RETAINED |
| Active sleeve | Long-Term Core only | RETAINED |
| Dormant sleeves | Medium-Term and Short-Term, 0%, reopen only through the Part 11.6 validation gate | RETAINED (gate MODIFIED, D-14) |
| Prohibited | F&O, leverage, short selling, intraday trading, unlisted securities | RETAINED |
| Return objective | See Part 11.2. Nifty 500 TRI + 3% a year is an aspiration pending validation, not a committed target | MODIFIED (D-12) |

---

## Part 2: Investment philosophy

1. **Quality compounds; weak businesses mean-revert.** Capital goes to companies with durable, high returns on capital, conservative balance sheets and cash-backed earnings.
2. **Concentration is a choice, not an accident.** The book holds a limited number of names on purpose, so every position has an explicit size limit and a written reason for being held.
3. **Rules before discretion.** Screening, sizing and exits follow written, reproducible rules. Discretion is allowed only through the documented exception process (Part 18).
4. **Risk is measured on actual holdings.** Diversification is not assumed; it is tested by scenario on what is actually owned, including look-through exposure via mutual funds.
5. **Tax efficiency serves the policy; it never overrides it.** Tax shapes the timing of discretionary trades. It never delays a governance exit, a thesis exit or a severe risk breach.
6. **Low turnover.** A held name is not sold merely because something else ranks higher.

---

## Part 3: Household asset allocation

### 3.1 Denominators (used everywhere in this policy)

| Symbol | Name | Definition | Value at baseline |
|---|---|---|---:|
| **DB** | Direct Book | Market value of everything in both demat accounts: individual stocks + diversified equity ETFs + liquidity instruments + gold instruments + uninvested broker cash | ₹20,01,521 (broker cash taken as nil per tracker) |
| **DEB** | Direct Equity Book | Individual stocks + diversified equity ETFs | ₹20,01,521 |
| **CSC** | Core Stock Capital | Individual stocks only | ₹17,90,557 |
| **MFE** | Mutual Fund Equity | Market value of all equity-oriented mutual funds and equity fund-of-funds (domestic and international) | ₹34,49,867 |
| **HE** | Household Equity | DEB + MFE | ₹54,51,388 |

Liquidity instruments, gold and cash are **excluded** from HE. All limits state their denominator explicitly.

### 3.2 Household split [RETAINED]

| Allocation | Target | Band | Baseline |
|---|---:|---:|---:|
| Direct equity (DEB ÷ HE) | 40% | 30–50% | 36.7% |
| Mutual fund equity (MFE ÷ HE) | 60% | 50–70% | 63.3% |

**Rationale for retaining 40/60:** a single investor holding 8 to 12 direct stocks carries idiosyncratic risk that diversified funds do not. Keeping direct stocks below half of household equity caps that risk while still giving the stock-selection process enough capital to matter. An earlier plan used 60/40 in the opposite direction; v5.0 does not reverse the v4.9 decision. Whether to confirm it is decision **D-02**.

**Rebalancing:** new money goes to whichever side is further below target. Nothing is sold to move between the two books unless a side is outside its band for two consecutive quarterly reviews, in which case the IC decides (no automatic sale).

---

## Part 4: Portfolio construction and investment buckets

### 4.1 Four buckets inside the Direct Book [NEW, D-03]

v4.9 treated NIFTYBEES, LIQUIDBEES and GOLDBEES as one "ballast" pool. That mixed equity, cash and gold. v5.0 separates them.

| Bucket | Instruments | Objective | Proposed target (% of DB) | Proposed band | Benchmark | Counts in HE? | Counts toward stock/industry caps? |
|---|---|---|---:|---:|---|---|---|
| B1 Individual equities (Core) | Individual listed stocks passing Part 6 | Compounding through stock selection | 90% | 80–95% | Nifty 500 TRI | Yes | Yes |
| B2 Diversified equity ETFs | NIFTYBEES and other broad index ETFs | Market exposure while Core names are being built; parking equity sale proceeds | 10% | 0–15% | Nifty 50 TRI | Yes | No for name caps; **yes** for look-through (Part 13) |
| B3 Liquidity | LIQUIDBEES, broker cash, overnight/liquid funds held in demat | Settlement and dry powder | 0% | 0–5% | NSE overnight rate | No | No |
| B4 Gold and alternatives | GOLDBEES, gold ETFs | Diversifier against equity and rupee risk | 0% | 0–5% | Domestic gold price | No | No (separate 5% cap) |

**Reconciliation:** 12 Core names × 7.5% = 90% (B1) + 10% (B2) + 0% (B3) + 0% (B4) = 100% of DB. At baseline B1 is 89.5% (₹17,90,557) and B2 is 10.5% (₹2,10,964); B3 and B4 are nil.

**What "100% Long-Term Core" meant in v4.9:** the Core is the only active sleeve; it does not mean 100% of DB is in individual stocks. B2 to B4 sit inside the Core sleeve's capital but outside its stock-selection rules.

**Bucket rules:**
- B2 is equity, not cash. It is included in DEB, HE, stress tests and look-through exposure (NIFTYBEES holds HDFC Bank and ICICI Bank).
- B2 funds new Core purchases only after B3 and fresh money, and only when B2 is above 5% of DB (avoids timing calls on index exposure).
- B3 above 5% of DB for more than 30 days with no pending purchase must be deployed per Part 14.4.
- B4 is capped at 5% of DB [RETAINED from v4.9 GOLDBEES cap].

### 4.2 Performance treatment

B1 and B2 are measured as equity and included in book return. B3 and B4 are included in total Direct Book return (Part 11) but excluded from the Core stock-selection attribution.

---

## Part 5: Investment universe and eligibility

| Rule | Definition | Label |
|---|---|---|
| U1 Universe | Constituents of the Nifty LargeMidcap 250 at the latest NSE reconstitution | RETAINED |
| U2 Held names outside the universe | Remain eligible to hold; frozen to new money; reviewed at each quarterly action review | RETAINED |
| U3 Minimum history | At least 3 full financial years of audited results; 5 years for valuation-band tests (Part 8) | NEW (D-07) |
| U4 Liquidity | 20-day median traded value at least 200 × the intended position size (Part 9.5) | NEW (D-10) |
| U5 Excluded | Companies under SEBI/exchange surveillance (ASM/GSM stage 2 or above), suspended, or with an auditor qualification in the latest annual report | NEW (D-07) |
| U6 Industry classification | NSE industry as published in the Nifty LargeMidcap 250 constituent file | RETAINED |

---

## Part 6: Fundamental quality framework

### 6.1 Classification

Each company is assigned to one business model from its NSE industry and line of business: **Non-financial**, **Bank**, **NBFC/HFC**, **Insurer (life or general)**, **Capital-markets business** (asset manager, broker, exchange, depository, rating agency). Classification is reviewed at each reconstitution.

### 6.2 Common rules

- **Data source:** audited consolidated annual results (standalone where consolidated are unavailable), via the automated feed; bank, NBFC and insurer regulatory metrics from quarterly investor disclosures. [D-08: automated source for regulatory metrics not yet in place.]
- **Evaluation period:** last 3 completed financial years unless stated.
- **Status of each test:** PASS, FAIL, MISSING (no data), STALE (data older than 15 months), UNVERIFIED (manual metric not yet checked). Only PASS counts as passing. **A name with any MISSING, STALE or UNVERIFIED gate metric cannot be bought; a held name in that state is flagged for manual verification within 30 days.**
- **Manual verification register [NEW, D-19]:** for banks, NBFCs, insurers and capital-markets businesses, the asset-quality, capital and funding tests are not in the data feed. A record of PASS or FAIL with a date and a note is entered in the register after reading the latest investor disclosure. A PASS is valid for 120 days. A financial company without a valid PASS cannot be bought; a held one is flagged "Verify" and must be checked within 30 days of the flag.
- **Cyclical abnormality:** a single year distorted by a disclosed one-off (impairment, exceptional gain, merger accounting) may be excluded by the IC with a written note. Never more than one year in three.

### 6.3 Non-financial companies

| Metric | Formula | Threshold | Role | Label |
|---|---|---|---|---|
| ROCE | EBIT ÷ (equity + reserves + borrowings), each year | 3-yr average ≥ 15% | Entry gate and holding gate | RETAINED |
| ROE | Net profit ÷ average shareholders' equity | 3-yr average ≥ 15% | Entry and holding gate | RETAINED |
| Consistency floor | Lowest single-year ROCE of the last 3 | ≥ 10% | Entry and holding gate | RETAINED (introduced v4.9) |
| Leverage | Borrowings ÷ (equity + reserves), latest year-end | ≤ 2.0 | Entry and holding gate | RETAINED |
| Cash conversion | Σ operating cash flow (3 yrs) ÷ Σ net profit (3 yrs) | ≥ 70% | Entry and holding gate | RETAINED |
| Interest coverage | EBIT ÷ interest expense, latest year | ≥ 3.0× | **Monitoring only** until the data feed carries interest expense (D-08); it becomes an entry gate then | NEW (D-07) |
| Free cash flow | Σ (operating cash flow − capex) over 3 years | Positive | Monitoring only; negative for 3 yrs triggers thesis review | NEW (D-07) |
| Revenue growth | 3-yr revenue CAGR | Monitoring only | Monitoring | NEW |
| Operating margin | EBITDA ÷ revenue | Monitoring only; fall of > 5 percentage points over 2 years triggers thesis review | Monitoring | NEW (D-07) |
| Governance | Promoter pledge > 0% of promoter holding; SEBI/RBI order; auditor resignation or qualification | Any instance = FAIL | Hard gate, immediate exit path (Part 10, tier 1) | RETAINED (scope widened, D-07) |

### 6.4 Banks

The v4.9 gate tested banks on ROE only. That is insufficient: bank risk sits in asset quality, capital and funding. The ROE test is retained; the rest are added as monitored metrics. Thresholds marked [D-09] are proposals, not approved policy.

| Metric | Formula | Proposed threshold | Role |
|---|---|---|---|
| ROE | Net profit ÷ average equity | 3-yr average ≥ 15%; no year < 10% [RETAINED] | Entry and holding gate |
| ROA | Net profit ÷ average total assets | ≥ 1.3% 3-yr average [D-09] | Entry gate; monitoring |
| Gross NPA | Gross NPAs ÷ gross advances | ≤ 3.0% [D-09] | Entry gate; rise of > 1 pp in 4 quarters triggers thesis review |
| Net NPA | Net NPAs ÷ net advances | ≤ 1.0% [D-09] | Entry gate |
| Provision coverage | Specific provisions ÷ gross NPAs | ≥ 70% [D-09] | Monitoring |
| Credit cost | Loan-loss provisions ÷ average advances | Monitoring; > 2× 5-yr average triggers review | Monitoring |
| CET1 ratio | As reported under RBI Basel III | ≥ regulatory minimum + 3 pp [D-09] | Entry gate |
| Capital adequacy (CRAR) | As reported | ≥ regulatory minimum + 3 pp [D-09] | Entry gate |
| NIM | Net interest income ÷ average interest-earning assets | Monitoring; fall > 50 bps in 4 quarters triggers review | Monitoring |
| CASA | CASA deposits ÷ total deposits | Monitoring | Monitoring |
| Deposit vs credit growth | Credit growth − deposit growth, trailing 4 quarters | Monitoring; > 8 pp gap for 4 quarters triggers funding review | Monitoring |
| Leverage and cash conversion | Not applicable | | |

### 6.5 NBFCs and housing finance companies

| Metric | Proposed threshold [D-09] | Role |
|---|---|---|
| ROE (3-yr average, floor 10%) | ≥ 15% [RETAINED] | Entry and holding gate |
| ROA | ≥ 2.0% | Entry gate |
| Capital adequacy | ≥ regulatory minimum + 5 pp | Entry gate |
| Leverage (total assets ÷ equity) | ≤ 7× | Entry gate; monitoring |
| Stage 3 assets (gross) | ≤ 3.5% | Entry gate |
| Stage 3 provision coverage | ≥ 50% | Monitoring |
| Credit cost | Monitoring; > 2× 5-yr average triggers review | Monitoring |
| ALM: cumulative 1-year gap | Positive or within 10% of assets | Monitoring |
| Funding concentration | Largest funding source ≤ 40% of borrowings | Monitoring |

### 6.6 Insurers

| Metric | Proposed threshold [D-09] | Role |
|---|---|---|
| Solvency ratio | ≥ 1.8× (regulatory minimum 1.5×) | Entry gate |
| Life: VNB margin | Monitoring; stable or rising over 3 years | Monitoring |
| Life: Embedded value growth | Operating RoEV ≥ 15% | Entry gate (replaces accounting ROE) |
| Life: 13th-month persistency | ≥ 80% | Monitoring |
| General: Combined ratio | ≤ 105% 3-yr average | Entry gate |
| Accounting ROE and cash conversion | Not used as gates for insurers | |

### 6.7 Capital-markets businesses

| Type | Gate metrics | Notes |
|---|---|---|
| Asset managers | ROE ≥ 15%; operating profit ÷ average AUM stable; no single scheme > 25% of AUM [D-09] | Cash conversion and leverage tests apply |
| Brokers | ROE ≥ 15%; client-funding book ≤ 1.5× net worth [D-09] | Leverage test applies |
| Exchanges, depositories, rating agencies | Non-financial rules (Part 6.3) | Treated as non-financial operating businesses |

### 6.8 Implementation status

At baseline the automated feed covers Part 6.3 metrics except interest coverage and FCF, and only ROE for Parts 6.4 to 6.7. Until D-08 is resolved, bank, NBFC and insurer metrics are **UNVERIFIED** and must be checked by hand before any purchase. Held financials (ICICI Bank, HDFC Bank) require a manual check at the first quarterly action review after approval.

---

## Part 7: Stock selection and quantitative scoring

### 7.1 Process

1. Apply Part 5 eligibility and the Part 6 gate for the company's business model.
2. Score every gate-passer (Part 7.2).
3. Build the 12-name target list (Part 7.4).

### 7.2 Scoring model [MODIFIED, D-11]

| Factor | v4.9 weight | v5.0 proposed weight | Non-financial calculation | Financial calculation |
|---|---:|---:|---|---|
| Quality | 40% | 35% | 3-yr average ROCE | 3-yr average ROE (banks: ROA used as tie-break) |
| Normalised growth | 30% | 25% | Median of 3-yr and 5-yr net profit CAGR, each capped at 40% | Same, using pre-provision operating profit for banks where available |
| Cash conversion | 15% | 15% | Σ OCF ÷ Σ PAT (3 yrs), capped at 150% | Neutral score of 50 |
| Valuation | 15% | 15% | Industry-relative earnings yield: (1 ÷ P/E) percentile within the company's NSE industry | Industry-relative inverse P/B |
| Stability | – | 10% | Inverse of the standard deviation of annual ROCE over the last 3 years (5 years once the feed supports it) | Same, using annual ROE |

**Why the changes:**
- **Normalised growth:** a 5-year CAGR from a depressed base (a loss year, a commodity trough) produces extreme numbers. The median of 3- and 5-year growth with a 40% cap reduces this.
- **Industry-relative valuation:** raw earnings yield structurally favours low-P/E sectors (PSU energy, metals, public banks). Ranking within each industry removes that sector bias.
- **Stability factor:** the baseline screen ranked cyclical companies near the top on recent peak returns. A stability factor rewards consistency. It is new and requires approval.
- **Weights still sum to 100%.** Until D-11 is approved, the v4.9 weights (40/30/15/15) remain in force.

### 7.3 Calculation rules

- **Normalisation:** each factor is converted to a percentile rank (0 to 100) among all gate-passers; ties share the average rank.
- **Outliers:** handled by the caps in the factor table (growth 40%, cash conversion 150%) and by rank-based scoring, which is insensitive to extreme values. No separate winsorising step is applied, because it would not change a percentile rank.
- **Group-relative ranking:** quality and stability are ranked within "financial" and "non-financial" separately, so a bank's ROE is never ranked against a manufacturer's ROCE. Valuation is ranked within the company's own industry (within bank, NBFC and so on for financials). A group of fewer than 3 companies falls back to the whole set.
- **Negative earnings:** a company with negative net profit in the latest year fails the gate (ROE/ROCE). A negative base year in a growth calculation makes that CAGR undefined; the other period is used; if both are undefined the growth score is set to the 10th percentile.
- **Extraordinary income:** use profit before exceptional items where the data source separates it [D-08]; otherwise reported net profit.
- **Missing factor:** the factor is dropped and the remaining weights are rescaled, but a name missing two or more factors is not ranked.

### 7.4 Target list construction [RETAINED with additions]

- **Size:** 12 names. [RETAINED]
- **Incumbency:** held names that pass the gate keep their place. [RETAINED]
- **Fill order:** remaining places go to the highest-ranked gate-passers, provided the industry's planned weight stays at or below 25% of DB. Planned weight = current weight capped at 10% for held names; 7.5% for new names. [RETAINED]
- **Correlated businesses:** no more than 2 names from the same corporate group (automated from a maintained list of major groups such as Tata, Adani, Bajaj, HDFC, ICICI, Torrent), and no more than 2 private-sector banks (checked by hand). [NEW, D-11]
- **Ranking deterioration:** a held name that passes the gate but ranks in the bottom quartile of gate-passers at two consecutive quarterly action reviews goes to a **merit review** (Part 10, tier 7). [NEW, D-13]
- **Annual re-underwriting:** every held name gets a written one-page thesis refresh at the annual strategic review. [NEW]

---

## Part 8: Valuation and entry rules

### 8.1 Valuation measures by business model

| Business model | Primary measure | Secondary measures |
|---|---|---|
| Non-financial | Trailing P/E vs own 5-yr history | EV/EBITDA vs own history; FCF yield; industry-relative P/E |
| Banks, NBFCs | Trailing P/B vs own 5-yr history | P/E; P/B ÷ ROE ratio vs peers |
| Life insurers | P/EV vs own history | |
| General insurers, AMCs, exchanges | Trailing P/E vs own history | |

### 8.2 Entry filter (Euphoria filter) [RETAINED, extended to financials D-15]

No new purchase while the primary measure is more than **2 standard deviations above its own 5-year average** (daily observations). Names with 3 to 5 years of history use the full history; below 3 years the filter cannot be applied and the name is not eligible (Part 5, U3).

### 8.3 Purchase method [RETAINED with sizing added]

- **Initial entry:** up to 50% of the target weight (3.75% of DB).
- **Additions:** in up to 2 further tranches, each no more than 2.5% of DB, at least 4 weeks apart.
- **Maximum addition per quarterly review:** 5% of DB into any one name.
- **Order type:** limit orders within 0.5% of the reference price. [RETAINED]

### 8.4 200-DMA freeze [UNDER REVIEW, D-16]

v4.9 halts buying while a stock is below its 200-day moving average. This is a technical timing rule inside a fundamental mandate. It can keep a quality name unbought through an entire correction, which is often the best time to buy a long-term holding.

- **Recommendation:** replace the freeze with a pacing rule. Below the 200-DMA, purchases are spread over at least 3 tranches and 8 weeks, never as a single order.
- **Until D-16 is decided,** the v4.9 freeze remains in force.

### 8.5 Overvaluation trim [RETAINED]

Primary measure more than **3 standard deviations above its 10-year average** (5-year minimum history) → trim 25% of the position at the next action review, subject to Part 14 tax rules. A valuation trim is never a full exit.

### 8.6 What valuation never does

High valuation alone never triggers a full exit of a gate-passing name.

---

## Part 9: Position sizing and portfolio limits

### 9.1 Limits and precedence

Where several limits apply to the same exposure, **the strictest applies.** Direct-ownership limits and combined (look-through) limits are measured separately so the same rupee is not double counted within one test.

| ID | Limit | Denominator | Measure | Level | Label |
|---|---|---|---|---:|---|
| L1 | Single stock, direct | DB | Direct holding only | Target 7.5%; hard 10% | RETAINED |
| L2 | Industry, direct | DB | Direct holdings in the NSE industry (B1 only) | 25% | RETAINED |
| L3 | Single company, household | HE | Direct + look-through via MFs and B2 ETFs (Part 13) | 6% | RETAINED (now measured on combined exposure, D-05) |
| L4 | Industry, household direct | HE | Direct holdings in the NSE industry | 10% | RETAINED |
| L5 | Industry, household combined | HE | Direct + look-through | 30% | MODIFIED (v4.9 used this as a stop rule; D-05) |
| L6 | Gold | DB | B4 | 5% | RETAINED |
| L7 | Emergency single stock | HE | Direct + look-through | 15% | RETAINED (v4.9 Part E exception) |

**At baseline, for a ₹20.0 L DB and ₹54.5 L HE:**
- L1 (10% of DB = ₹2.00 L) is stricter than L3 (6% of HE = ₹3.27 L) for direct holdings once a name is inside its L1 limit. Today ICICI Bank (₹5.27 L, 9.7% of HE) and HDFC Bank (₹4.09 L, 7.5% of HE) exceed both. They clear L3 on direct holdings when trimmed to 10% of DB (about 3.7% of HE); whether look-through keeps them above 6% is unverified.
- L2 (25% of DB = ₹5.00 L) and L4 (10% of HE = ₹5.45 L) are close. L2 binds today; L4 binds once DB grows above 40% of HE.

### 9.2 Graded response [NEW, D-04]

| Level | Trigger (per name, % of DB) | Industry trigger (% of DB) | Required action | Deadline | Escalation |
|---|---|---|---|---|---|
| Normal drift | Within ±25% of 7.5% target (5.6%–9.4%) | ≤ 20% | None | – | – |
| Target deviation | Below 5.6% | – | Eligible for new money first | Next new-money event | – |
| Soft breach | Above 9.0% | Above 22% | Stop all new money into the name or industry | Immediate | Noted in quarterly IC pack |
| Hard breach | Above 10% | Above 25% | Remediation plan: new money elsewhere; trims under Part 14 within the transition rules | Plan within 15 days; resolution within 12 months | IC review each quarter until cleared |
| Emergency breach | L7: a single company above 15% of HE (direct plus look-through), or any tier 1 event | – | Trim at the next action review regardless of tax lot age; IC may grant a documented exception of up to 90 days | 90 days | Immediate IC notification |

### 9.3 Equal weight vs conviction weight

**Decision:** equal target weight (7.5%) is retained.

- Conviction weighting needs a validated way to measure conviction, and none exists.
- Higher screen scores have not been shown to predict higher returns in this framework (Part 11.6).
- Size limits are adjusted only for risk (Part 9.4), never upward for score.

### 9.4 Risk-based size reduction [NEW, D-04]

The maximum weight of a name is reduced from 10% to 7.5% if any of these apply:
- market capitalisation outside the top 100;
- annual ROCE (or ROE) standard deviation above 8 percentage points over 5 years;
- net debt ÷ EBITDA above 2.5;
- beta to the Nifty 500 above 1.3 (3-year weekly).

### 9.5 Liquidity sizing [NEW, D-10]

A position may not exceed 0.5% of the stock's 20-day median daily traded value. At baseline all holdings clear this by a wide margin; the rule matters only as the book grows.

---

## Part 10: Exit and probation framework

### 10.1 Exit hierarchy

Lower numbers take precedence. A higher-tier trigger is never delayed by a lower-tier consideration.

| Tier | Trigger | Action | Probation | Tax may delay? | Documentation |
|---|---|---|---|---|---|
| 1 | Fraud, governance failure, regulatory disqualification, promoter pledge, auditor resignation with concerns | Exit in full at next trading session | None | No | Decision log entry within 2 days |
| 2 | Permanent deterioration in business economics (loss of licence, structural market loss, technology obsolescence) as documented in a written thesis review | Exit in full within 30 days | None | No | Thesis review note |
| 3 | Thesis failure: the written thesis's own stated sell condition is met | Exit within 60 days | None | Only within the 60 days | Thesis note |
| 4 | Quantitative gate failure (Part 6) | Probation: 2 quarters, no new money; exit at the 3rd quarterly action review if not cured | 2 quarters | Yes, within probation | Probation register |
| 5 | Valuation overextension (Part 8.5) | Trim 25% | None | Yes | Trade log |
| 6 | Concentration breach (Part 9.2) | Graded response | – | Yes, except emergency | Breach register |
| 7 | Ranking deterioration (Part 7.4) | Merit review with a written retain or exit decision; exit if chosen within 2 quarters | – | Yes | Merit review note |
| 8 | Normal drift | New money only | – | Yes | – |

### 10.2 Distinguishing a metric failure from a thesis failure

- A single failed metric is tier 4 (probation).
- It becomes tier 2 or 3 only if a written review concludes the business economics or the thesis have changed. That conclusion must name the evidence: segment data, management guidance, regulatory change.

### 10.3 The IOC decision: treatment

**What happened.** v4.9 Part T.3 directed an immediate IOC exit. IOC's 3-year averages passed the gate, but it failed the consistency floor (ROCE of 7% in one of three years). Under v4.9 §2.1 a quantitative failure means 2-quarter probation, not immediate exit. The two clauses conflict.

**Treatment in v5.0.**
- The IOC exit is recorded as a **one-time transitional decision** taken on the investor's explicit instruction ("exit IOC if it breaches our overall portfolio goal"), not as an application of the general rule.
- It is logged as **Decision DL-001** (Appendix H) with its rationale: a refiner whose returns depend on crude prices and administered pricing does not fit a compounding mandate. That is a tier-2 judgement about business economics, made in writing.
- The decision is **not reversed** by v5.0.
- The general rule is corrected so the conflict cannot recur: quantitative failures go to probation (tier 4). Any future immediate exit for a quantitative failure needs a written tier-2 or tier-3 finding or an IC-approved exception.
- **Execution status:** [to be confirmed: whether the IOC sale has been executed, date, realised gain].

---

## Part 11: Performance measurement and benchmarking

### 11.1 Return definitions

| Measure | Use | Method |
|---|---|---|
| Time-weighted return (TWR) | Judging the manager and the rules | Daily valuation; sub-periods chained at each external cash flow; dividends included on ex-date |
| XIRR | Investor's actual experience | All external contributions and withdrawals dated; terminal value at period end |
| Pre-tax net return | Comparison with benchmarks | TWR after brokerage, STT, stamp duty, exchange and DP charges; before income tax |
| After-tax return | Investor's wealth outcome | Pre-tax net return less tax actually payable on realised gains and dividends in the period |

**Comparison rule:** benchmark comparisons use **pre-tax net TWR** against **TRI** indices (dividends reinvested, no tax). After-tax return is reported separately and never compared with a pre-tax index.

**Treatment of items:** dividends are income to the book; cash and B3 are part of the book; B2 ETFs are part of the book; mutual funds are excluded (reported under the MF IPS); realised and unrealised gains are both included in TWR; transaction charges are deducted.

### 11.2 Benchmarks and objective [MODIFIED, D-12]

| Item | Proposal |
|---|---|
| Primary benchmark | Nifty 500 TRI [RETAINED] |
| Secondary benchmark | Nifty LargeMidcap 250 TRI (matches the selection universe) [NEW] |
| Objective | Match or beat the primary benchmark on pre-tax net TWR over rolling 3-year periods, with lower maximum drawdown |
| Aspiration | Primary benchmark + 3% a year (the v4.9 objective), adopted as a target only after the Part 11.6 validation shows evidence for it |
| Risk-adjusted measures | Sortino ratio, information ratio, downside capture, maximum drawdown |

### 11.3 Reporting

- **Monthly:** TWR, XIRR, benchmark returns and maximum drawdown.
- **Quarterly:** the above plus attribution (Part 11.4), rolling 1-year and 3-year figures, Sortino, information ratio, tracking error, turnover and downside capture.
- **Annually:** full review, plus after-tax return.

### 11.4 Attribution

Brinson-style split by NSE industry into allocation effect and selection effect against the Nifty 500, plus the contribution of B2, B3 and B4.

### 11.5 Underperformance protocol [NEW]

| Condition | Response |
|---|---|
| Below primary benchmark over one rolling 3-year period | Written diagnosis in the quarterly pack: allocation or selection, one-offs |
| Below for two consecutive annual observations of the rolling 3-year figure | IC review of the scoring model and gate thresholds; possible re-weighting via the amendment process |
| Below for three | IC must decide between continuing, modifying the strategy, or moving the direct-equity allocation to index funds. The default recommendation is index funds unless evidence supports continuing |

Underperformance never triggers automatic liquidation.

### 11.6 Strategy validation gate [NEW, D-14]

**Status at baseline: NOT PERFORMED.** No backtest of the v4.9 or v5.0 Core rules exists. No claim of outperformance is made.

**Required method:**
- Point-in-time Nifty LargeMidcap 250 membership (and its predecessors) to prevent survivorship bias.
- Financial data available only after the actual filing date (to prevent look-ahead bias).
- Adjustment for corporate actions and dividends.
- Costs: brokerage, STT, stamp duty and 0.25% slippage per side.
- Quarterly rebalancing with all Part 9 limits.
- Taxes modelled at the rates in Part 14 for the after-tax series.

**Periods and benchmarks:**
- In-sample FY2011 to FY2019; out-of-sample FY2020 onwards.
- Benchmarks: Nifty 500 TRI, Nifty LargeMidcap 250 TRI, Nifty 50 TRI.

**Metrics reported:** CAGR, volatility, maximum drawdown, Sharpe, Sortino, Calmar, information ratio, tracking error, turnover, rolling 3-year returns, downside capture and recovery period.

**Acceptance criteria (proposed):**
- Out-of-sample information ratio ≥ 0.3.
- Maximum drawdown no worse than the primary benchmark's plus 5 percentage points.
- Annual turnover ≤ 40%.
- Results stable when each factor weight is changed by ±10 percentage points.

**Data required:** a point-in-time index constituent history and an as-filed fundamentals database; neither is currently held [D-14].

**Dormant sleeves** reopen only after their own strategy passes this gate and the investor approves.

---

## Part 12: Portfolio risk management

### 12.1 Risk measures (distinguished)

| Measure | Definition | Frequency |
|---|---|---|
| Realised drawdown | Peak-to-trough fall in daily DB value (TWR basis) | Daily |
| Stress loss | Estimated loss under a defined scenario on current holdings | Quarterly and on any hard breach |
| Volatility | Annualised standard deviation of daily TWR, 1 year | Monthly |
| Concentration | Top-1, top-3 and top-5 weights; Herfindahl index of B1 | Fortnightly |
| Liquidity | Days to exit each position at 20% of median daily value traded | Quarterly |
| Correlation | Average pairwise correlation of holdings, 1 year weekly | Quarterly |
| Impairment | Count of names on probation or under thesis review | Fortnightly |

### 12.2 Stress-loss threshold [MODIFIED, D-06]

The v4.9 "25% drawdown budget" is renamed the **portfolio stress-loss threshold** and split in two:

- **Relative threshold:** in a broad-market scenario, the DB stress loss must not exceed the Nifty 500 scenario loss by more than 5 percentage points. An all-equity book cannot hold an absolute 25% limit in a 2008- or 2020-type market fall, so an absolute test there only produces breaches that no reasonable action can fix.
- **Absolute threshold:** in sector and single-stock scenarios (where concentration, not market beta, drives the loss), DB stress loss must not exceed 25%.

Stress-test results are estimates under stated assumptions. They are not a forecast or a guarantee of maximum loss.

### 12.3 Scenario framework (baseline holdings, 4 Nov 2026)

Baseline values: ICICI Bank ₹5,27,065; HDFC Bank ₹4,09,182; IOC ₹3,07,431; BEL ₹2,83,555; NIFTYBEES ₹2,10,964; Torrent Pharma ₹93,000; Info Edge ₹88,500; Torrent Power ₹81,824. DB ₹20,01,521.

| ID | Scenario | Assumption | Most exposed | DB loss | Threshold | Status |
|---|---|---|---|---:|---|---|
| S1 | Broad equity correction | All equity −30%; Nifty 500 −30% | All | −30.0% (₹6.00 L) | Relative: ≤ −35% | Within |
| S2 | Banking and financial crisis | Financial Services −35%, all other equity −20% (NIFTYBEES −20%) | ICICI, HDFC | −27.0% (₹5.41 L) | Absolute 25% | **BREACH** |
| S3 | Oil, gas and power shock | IOC and Torrent Power −30%, rest −20% | IOC | −21.9% (₹4.39 L) | 25% | Within |
| S4 | Interest-rate shock (+200 bps) | Financials −20%, rate-sensitive (power) −20%, rest −12% | Banks | [Inputs: sector sensitivities, D-06] | 25% | Not computed |
| S5 | Rupee depreciation (−15%) | Importers (refiners) −15%, exporters (pharma) +5%, rest −8% | IOC | [Inputs required] | 25% | Not computed |
| S6 | Liquidity crisis | Mid caps −35%, large caps −20% | BEL, Torrent | [Inputs: cap classification at date] | 25% | Not computed |
| S7 | Single-stock shock | Largest holding −50% | ICICI | −13.2% (₹2.64 L) | Absolute 25% | Within |
| S8 | Multi-sector correction with correlation spike | Financials −40%, all other −30% | All | −34.7% (₹6.94 L) | Relative: Nifty 500 loss in the same scenario + 5 pp | **Not assessable**: needs the Nifty 500 scenario loss as an input |

**Household impact:** requires mutual fund look-through (Part 13) and the MF IPS scenario shocks. Not computed at baseline [input required: October 2026 portfolio disclosures for the 11 funds held].

**Correlation sensitivity:** each quarter, S2 and S8 are re-run with "all other equity" losses increased by 10 percentage points to show the effect of correlations rising in a crisis.

### 12.4 Required responses to a threshold breach

1. Freeze new money into the exposures driving the breach (immediate).
2. Identify contributors: name, industry, share of the loss (within 5 days).
3. Remediation plan with dated actions (within 15 days).
4. Escalate to IC if not resolved within 2 quarterly reviews.
5. Exceptions only through Part 18, with an expiry date.

**Baseline status:** S2 breaches (−27.0% against 25%). It arises from the ICICI Bank and HDFC Bank concentration, which the Part 15 transition plan addresses. After the planned trims (each bank at 10% of DB, proceeds in non-financial equity falling 20%), S2 falls to −23.0% and S7 to −5.0%. S1 (−30.0%) is within its relative limit by construction, because the scenario assumes the benchmark falls by the same amount. S4 to S6 are not computed.

### 12.5 Risk register

| ID | Risk | Likelihood | Impact | Current control | Residual |
|---|---|---|---|---|---|
| R1 | Private-bank concentration | Present | High | L1, L2, Part 15 | High until Jun 2027 |
| R2 | Look-through overlap with MF banking holdings | Likely | Medium | L3, L5 (pending data) | Unmeasured |
| R3 | Screen favours cyclical peaks | Observed | Medium | Consistency floor, proposed stability factor | Medium |
| R4 | Data errors in automated fundamentals | Possible | Medium | MISSING/STALE handling; manual checks | Medium |
| R5 | Unvalidated strategy | Present | High | Part 11.6 gate; index-fund fallback | High |
| R6 | Tax constraints delay risk reduction | Present | Medium | Emergency level overrides tax | Low |
| R7 | Key-person risk | Possible | High | Succession plan (Part 16.6) | Medium |

---

## Part 13: Household exposure and look-through

### 13.1 Authoritative calculation

The **Household Exposure Report** produced at each quarterly action review is the only authoritative calculation. Dashboard figures between reviews are indicative.

**Company exposure (company c):**

`HX(c) = Direct(c) + Σ_f [ MV(f) × w(f,c) ] + Σ_e [ MV(e) × w(e,c) ]`

where:
- Direct(c) is the market value of direct shares;
- f runs over the mutual funds held, MV(f) is the fund holding's market value, and w(f,c) is company c's weight in the fund's latest disclosed portfolio;
- e runs over the B2 ETFs, with index weights.

`Household company share = HX(c) ÷ HE`

**Industry exposure (industry i):** the same formula with industry weights, mapped to NSE industry.

### 13.2 Data rules

| Situation | Rule |
|---|---|
| Source | AMC monthly portfolio disclosure (SEBI-mandated); index factsheets for ETFs |
| Stale | Disclosure older than 45 days is STALE; use it but flag; older than 90 days counts as MISSING |
| Different dates | Use each fund's latest disclosure; record the date per fund; no interpolation |
| Incomplete | If disclosed holdings cover < 90% of fund assets, scale the disclosed weights up proportionally and flag |
| Overlap and duplicates | Aggregate by ISIN across all sources; never by name |
| International funds | Look-through to Indian companies is nil; overseas exposure reported by country only |
| Material change | A fund manager change or a > 25% fund outflow triggers a fresh disclosure check |
| Missing look-through | L3 and L5 tests report UNVERIFIED (never PASS). Purchases in the affected company or industry need manual confirmation |

### 13.3 Baseline status

- **Direct-only figures** are known:
  - Financial Services direct = ₹9,36,247, which is 17.2% of HE (L4 breach, 10% limit);
  - ICICI Bank direct 9.7% of HE and HDFC Bank direct 7.5% of HE: **both already breach L3 (6%) on direct holdings alone**. BEL (5.2%) and IOC (5.6%) are below 6%.
- **Look-through figures** are UNVERIFIED and may only add to these. The status of L3 and L5 stays UNVERIFIED until the 11 funds' portfolio disclosures are loaded [input required: October 2026 disclosures, D-18].

---

## Part 14: Tax and rebalancing

### 14.1 Applicable law (as understood on the baseline date; verify on the effective date)

- **Act:** the Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026 and applies from tax year 2026–27. Capital gains rates and holding periods carried over unchanged; only section numbering changed. Transactions in FY 2025–26 remain under the 1961 Act.
- **Listed equity shares and equity-oriented funds** (STT paid):
  - held more than 12 months: long-term, taxed at 12.5% on gains above ₹1,25,000 per tax year, without indexation;
  - held 12 months or less: short-term, taxed at 20%;
  - surcharge and 4% cess are extra.
- **International fund-of-funds:** these are not equity-oriented and are governed by the MF IPS v1.1 §H.
- **Losses:** short-term capital losses can be set off against short-term and long-term gains; long-term losses only against long-term gains; unabsorbed losses can be carried forward for 8 years if the return is filed on time [confirm under the 2025 Act].
- **Exemption scope:** the ₹1,25,000 exemption is per individual taxpayer per tax year, shared across all listed equity and equity-fund gains.
- **STT** applies on delivery sales of equity shares and on redemption of equity-fund units.

*Sources: Business Standard (Sep 2026), Taxguru and Patron Accounting (Apr 2026) summaries of the 2025 Act; official text of the Income-tax Act, 2025 and Rules, 2026 to be checked by the CA [D-17].*

### 14.2 Policy conventions (not legal requirements)

- **Exemption order:** the household exemption is allocated in this order:
  1. tier 1 to 3 exits;
  2. MF IPS consolidations;
  3. stock concentration trims;
  4. drift trims;
  5. loss harvesting in February and March.
- **No short-term sales:** lots held 12 months or less are not sold for tiers 5 to 8.
- **What tax never delays:** tier 1 to 3 exits and emergency breaches.

### 14.3 Household tax ledger [MODIFIED]

One ledger covers both books. Each lot records:
- taxpayer;
- broker or platform;
- ISIN;
- acquisition date;
- quantity;
- cost;
- the date it becomes long-term;
- realised gain or loss with its classification;
- exemption used to date;
- remaining exemption;
- estimated tax on any proposed sale.

FIFO is applied **per demat account**, as depositories do.

### 14.4 Rebalancing hierarchy

| Order | Trigger | Permitted delay | Maximum remediation period | Method |
|---|---|---|---|---|
| 1 | Tier 1 to 3 exits | None (tier 1); 30 to 60 days (tiers 2 and 3) | As stated | Market or marketable limit orders |
| 2 | Emergency breach | To next action review | 90 days | Any lots |
| 3 | Hard concentration breach | Until lots turn long-term and exemption allows | 12 months from breach | New money first, then long-term lots |
| 4 | Normal drift | Indefinite | – | New money only |
| 5 | New money allocation | – | – | Most under-target eligible name first |

- **Proceeds:** dividends and sale proceeds join new money and are redeployed within 30 days (B3 rule, Part 4.1).
- **Partial fills:** unfilled quantity carries to the next session within the same review cycle and is not chased beyond the limit price.
- **No dashboard-driven sales:** no sale is made only to improve a dashboard figure.

---

## Part 15: Portfolio transition plan (illustrative, from baseline)

### 15.1 Baseline breaches (4 Nov 2026)

| Item | Value | % of DB | Limit | Excess over limit (formula: value − limit × DB) |
|---|---:|---:|---:|---:|
| ICICI Bank | ₹5,27,065 | 26.3% | 10% (L1) | ₹3,26,913 |
| HDFC Bank | ₹4,09,182 | 20.4% | 10% | ₹2,09,030 |
| IOC | ₹3,07,431 | 15.4% | 10% | Exit (DL-001) |
| BEL | ₹2,83,555 | 14.2% | 10% | ₹83,403 |
| Financial Services | ₹9,36,247 | 46.8% | 25% (L2) | ₹4,35,867 |
| Financial Services, household direct | 17.2% of HE | | 10% (L4) | ₹3,91,108 |

### 15.2 Schedule

Lot dates are taken from the tracker's transaction records. Amounts recompute at each review from live prices.

| Step | Action | Earliest date | Constraint |
|---|---|---|---|
| T1 | IOC exit (DL-001) | Adoption review, 4 Nov 2026 | All lots acquired Dec 2024 to Feb 2025: long-term |
| T2 | HDFC Bank trim from lots held over 12 months, up to remaining FY 2026–27 exemption | Adoption review | Exemption shared with the MF Bandhan consolidation |
| T3 | HDFC Bank remaining excess | 1 Apr 2027 (new exemption year) and 17 Apr 2027 (lot of 16 Apr 2026 becomes long-term) | |
| T4 | ICICI Bank trim to 10% | 4 Jun 2027 (lot of 3 Jun 2026) | |
| T5 | BEL trim to 10% (BEL is also on probation for cash conversion of 44%) | 12 Jun 2027 (lot of 11 Jun 2026) | Probation outcome may convert this to a full exit at the third quarterly review |
| T6 | New money and proceeds to under-weight target names | Continuous | Not into Financial Services until L2 and L4 clear |

### 15.3 Remaining gap after the plan

- With each private bank at 10% of DB, direct Financial Services is about 20% of DB (L2 clears) but about 7.3% of HE at today's HE (L4 clears).
- L3 and L5 (look-through) remain **UNVERIFIED**.

### 15.4 Milestones

| By | Target | Status field |
|---|---|---|
| 31 Jan 2027 | T1 and T2 complete; proceeds invested | [ ] |
| 30 Apr 2027 | HDFC Bank ≤ 10% of DB | [ ] |
| 30 Jun 2027 | ICICI Bank and BEL ≤ 10%; Financial Services ≤ 25% of DB; S2 within threshold | [ ] |
| 31 Oct 2027 | All L1, L2, L4 limits clear; look-through measured; transition closed | [ ] |

---

## Part 16: Governance and Investment Committee

### 16.1 Review calendar

| Review | When | Scope |
|---|---|---|
| Signal review | 1st and 15th of each month | Data refresh, gate, score, limits, breach flags. No sales except tier 1 to 3 and emergency breaches |
| Quarterly action review (IC) | First review in January, April, July and October | All actions, probation outcomes, scheduled trims, Household Exposure Report, stress tests, IC pack |
| Annual strategic review | January action review | Thesis refresh for every holding, Part 3 split, benchmark, tax law check, dormant sleeves, policy amendments |
| Critical event | Within 2 trading days | Tier 1 triggers, emergency breaches, data or system failure affecting a decision |

### 16.2 Decision authority

| Category | Examples | Authority |
|---|---|---|
| A. Automatic (rule-driven, recommended by the system, confirmed by the investor) | New money to the most under-target name; drift additions within Part 8.3 | Investor confirmation at execution |
| B. Investor approval | Any sale; any new name; tier 2 or 3 findings | Investor, recorded in the decision log |
| C. Material exception | Any breach of Parts 6, 8, 9 or 12 allowed to persist | IC, under Part 18 |
| D. Policy amendment | Any change to a limit, threshold, weight or process | IC, with a change log entry |
| E. Mandatory escalation | Tier 1 events; emergency breaches; unresolved hard breaches after two reviews | IC within 2 trading days |

### 16.3 Quarterly IC pack (contents)

1. Executive summary.
2. Allocation (Part 3 and Part 4 buckets).
3. Performance and attribution.
4. Stock-level table: weight, gate status, score, valuation, thesis status.
5. Industry exposure.
6. Household look-through.
7. Quality gate exceptions and probation register.
8. Valuation flags.
9. Stress tests and risk register.
10. Rebalancing and pending actions.
11. Tax ledger and exemption use.
12. Exceptions register.
13. Recommendations.
14. Decisions required.

### 16.4 Sign-off

Each pack ends with the Appendix I approval block, signed and dated by the investor (and any IC member).

### 16.5 Records

The decision log (Appendix H), breach register, probation register, exception register and change log are kept for 8 years.

### 16.6 Succession [RETAINED]

- Nominees are matched on both demat accounts.
- A read-only dashboard and this IPS are available to a named family trustee.
- Written manual-liquidation instructions assume no automation is running.

---

## Part 17: AlgoBot and reporting requirements

### 17.1 Implementation status at 4 Nov 2026

| Area | In the dashboard now | Not yet automated (reports UNVERIFIED) |
|---|---|---|
| Buckets B1 to B4, household split | Yes | Broker cash balance (not in the tracker) |
| L1, L2, L4, soft and hard levels | Yes | Beta and net debt/EBITDA inputs to the 7.5% risk limit; only market-cap rank and return-on-capital variability are used |
| L3, L5 look-through, L7 | Direct part only | Mutual fund disclosures (D-18) |
| Non-financial gate (ROE, ROCE, floor, leverage, cash conversion) | Yes | Interest coverage, free cash flow, margins (D-08) |
| Financial-company gates | ROE, floor | Asset quality, capital, funding, solvency; manual register (D-19) |
| Score and target list, group limit | Yes | Private-bank limit (manual) |
| Probation clock, DL-001, merit review | Yes | |
| Euphoria filter, 200-DMA pacing, liquidity limit | No | Needs P/E and P/B history, price history, traded value |
| Stress tests S1, S2, S3, S7 | Yes | S8 benchmark input; S4 to S6 inputs |
| Tax lots, FIFO per demat, exemption used | Yes | Taxpayer-level ledger across other assets |
| Book TWR, XIRR by stock, attribution | XIRR by stock | Book-level TWR and attribution |
| Strategy validation (Part 11.6) | No | Point-in-time data (D-14) |

The full rules matrix is in Appendix G. The system:

- **Calculates and recommends; it never executes a sale** without investor confirmation.
- **Reports every test** as PASS, FAIL, WARNING, MISSING, STALE, UNVERIFIED or EXCEPTION. MISSING, STALE and UNVERIFIED never count as PASS.
- **Implements no rule** that is not in this policy. Operational mechanics (order routing, broker failover, idempotency keys, ledger signatures, FIFO matching, token refresh, report pruning) stay in the AlgoBot technical specification and must not encode investment decisions.
- **Keeps an audit trail:** inputs, outputs and data dates for every review.

---

## Part 18: Review, exceptions and amendment

### 18.1 Exceptions

Each exception records:
- the rule breached;
- the reason;
- the exposure in ₹ and %;
- the risk impact (stress-test delta);
- the approver;
- the start date;
- an **expiry date no more than 2 quarters out**;
- the remediation plan.

Renewal needs fresh IC approval. Indefinite exceptions are not permitted.

### 18.2 Amendments

- Proposed in writing with the reason, evidence and expected effect.
- Approved by the IC at a quarterly or annual review, except for urgent risk changes, which may be approved ad hoc and ratified at the next review.
- Version number and change log updated.

### 18.3 Policy review

- Full review at least annually.
- An immediate review on any change in tax law, investor circumstances, or a household equity change of more than 30% in a year.

---

## Appendix A: Definitions and formulas

| Term | Formula or definition |
|---|---|
| ROCE | EBIT ÷ (equity share capital + reserves + borrowings), year-end values |
| ROE | Net profit attributable to shareholders ÷ average shareholders' equity |
| ROA | Net profit ÷ average total assets |
| Cash conversion | Σ cash from operations (3 FY) ÷ Σ net profit (3 FY) |
| Leverage (non-financial) | Borrowings ÷ (share capital + reserves) |
| Interest coverage | EBIT ÷ finance cost |
| Normalised growth | Median(3-yr PAT CAGR, 5-yr PAT CAGR), each capped at 40%; undefined if the base year is ≤ 0 |
| Earnings yield | Trailing 12-month EPS ÷ price |
| Valuation z-score | (current multiple − 5-yr mean) ÷ 5-yr standard deviation, daily observations |
| TWR | Π(1 + r_sub-period) − 1, sub-periods split at each external flow |
| XIRR | Rate r solving Σ CF_t ÷ (1 + r)^(t/365) = 0 |
| Stress loss | Σ_positions MV × scenario shock |
| Herfindahl index | Σ w_i² over B1 weights |

## Appendix B: Quality-gate matrix

See Parts 6.3 to 6.7. Gate (G) means it blocks entry and starts probation if failed while held; monitoring (M) means it triggers a review.

| Metric | Non-fin | Bank | NBFC | Life ins. | Gen. ins. | AMC/Broker |
|---|---|---|---|---|---|---|
| ROE ≥ 15%, floor 10% | G | G | G | – | G | G |
| ROCE ≥ 15%, floor 10% | G | – | – | – | – | Exch./rating only |
| Leverage | G (≤ 2.0) | – | G (≤ 7×) | – | – | Broker G |
| Cash conversion ≥ 70% | G | – | – | – | – | G |
| Interest cover ≥ 3× | M* | – | – | – | – | – |
| Asset quality | – | G* | G* | – | – | – |
| Capital | – | G* | G* | G* (solvency) | G* | – |
| Operating RoEV ≥ 15% | – | – | – | G* | – | – |
| Combined ratio ≤ 105% | – | – | – | – | G* | – |
| Governance | G | G | G | G | G | G |

\* Proposed, pending D-07 or D-09.

## Appendix C: Scoring methodology

See Parts 7.2 and 7.3. Worked example to be added to the first IC pack after approval, using the live screen [placeholder].

## Appendix D: Risk scenario framework

See Part 12.3. Scenario shocks are reviewed annually against recent history.

## Appendix E: Concentration and sizing rules

See Parts 9.1 to 9.5.

## Appendix F: Tax-lot and rebalancing method

**Trim amount:** `max(0, MV − L × DB)`, where L is the applicable limit.

**Lot selection** (FIFO per demat account), for each lot from oldest to newest:
- if the lot is held more than 12 months and its gain fits the remaining exemption, sell;
- if the gain exceeds the remaining exemption, sell the fraction that fits and schedule the rest for 1 April;
- if the lot is held 12 months or less, schedule it for the day after 12 months.

**Exception:** tiers 1 to 3 and emergency breaches sell regardless.

## Appendix G: Rules matrix (implementation)

| Rule ID | Policy ref | Rule | Inputs | Calculation | Threshold | Frequency | Output | Action | Approval | Audit evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| ALC-01 | 3.2 | Household split | DEB, MFE | DEB ÷ HE | 30–50% | Fortnightly | Pass/Warn | Direct new money | Auto | Snapshot |
| ALC-02 | 4.1 | B2 band | B2 MV, DB | B2 ÷ DB | ≤ 15% | Fortnightly | Pass/Warn | Freeze B2 buys | Auto | Snapshot |
| ALC-03 | 4.1 | B3 idle | B3 MV, days | B3 ÷ DB and days | ≤ 5% or ≤ 30 days | Fortnightly | Warn | Deploy | Investor | Snapshot |
| ALC-04 | 4.1 | Gold cap | B4 MV | B4 ÷ DB | ≤ 5% | Fortnightly | Pass/Fail | Trim | Investor | Snapshot |
| CON-01 | 9.1 L1 | Name cap | MV, DB | MV ÷ DB | 9% soft / 10% hard | Fortnightly | Pass/Warn/Fail | Freeze / remediate | Auto / Investor | Breach register |
| CON-02 | 9.1 L2 | Industry cap | MV by industry | Σ ÷ DB | 22% / 25% | Fortnightly | Pass/Warn/Fail | Freeze / remediate | Auto / Investor | Breach register |
| CON-03 | 9.1 L4 | Household direct industry | Σ direct by industry, HE | ÷ HE | 10% | Fortnightly | Pass/Fail | Freeze | Auto | Snapshot |
| CON-04 | 9.1 L7 | Emergency | HX(c), HE | ÷ HE | 15% | Fortnightly | Fail | Escalate | IC | Exception log |
| LKT-01 | 13 / L3 | Household company | Direct + MF disclosures | HX(c) ÷ HE | 6% | Quarterly | Pass/Fail/Unverified | Freeze / review | IC | Exposure report |
| LKT-02 | 13 / L5 | Household industry | Same | HX(i) ÷ HE | 30% | Quarterly | Same | Same | IC | Exposure report |
| QLT-01 | 6.3 | Non-fin gate | Annual financials | Appendix A | Appendix B | Fortnightly | Pass/Fail/Missing/Stale | Block buy / probation | Auto | Fundamentals snapshot |
| QLT-02 | 6.4–6.7 | Financial gate | Regulatory disclosures | Appendix A | Appendix B | Quarterly | Pass/Fail/Unverified | Block buy / probation | Investor | Manual check record |
| QLT-03 | 6.3 | Governance | Pledge, orders, auditor | Any event | 0 | Fortnightly | Fail | Tier 1 exit | Investor | Decision log |
| SCR-01 | 7.2 | Score | Gate-passers | Percentile, winsorised | – | Fortnightly | Rank | Target list | Auto | Score file |
| SCR-02 | 7.4 | Target list | Ranks, holdings, industries | Part 7.4 | 12 names, 25% industry | Fortnightly | List | Buy candidates | Investor | List snapshot |
| SCR-03 | 7.4 | Rank deterioration | Rank history | Bottom quartile × 2 action reviews | – | Quarterly | Warn | Merit review | Investor | Review note |
| VAL-01 | 8.2 | Euphoria filter | Multiple history | z-score | > 2 | Fortnightly | Pass/Fail/Missing | Block buy | Auto | Valuation snapshot |
| VAL-02 | 8.5 | Overvaluation trim | 10-yr history | z-score | > 3 | Quarterly | Fail | Trim 25% | Investor | Trade log |
| VAL-03 | 8.4 | 200-DMA | Price history | Close vs 200-DMA | Below | Daily | Flag | Freeze or pace (D-16) | Auto | Snapshot |
| RSK-01 | 12.3 | Stress tests | Holdings, shocks | Σ MV × shock | Part 12.2 | Quarterly | Pass/Fail | Part 12.4 | IC | Stress report |
| RSK-02 | 12.1 | Drawdown | Daily TWR | Peak-to-trough | Report | Daily | Value | Report | – | Series |
| PRF-01 | 11 | Performance | NAV, flows, TRI | TWR, XIRR | – | Monthly | Values | Report | – | Report |
| TAX-01 | 14 | Exemption tracker | Ledger | Σ realised LTCG | ₹1,25,000 | Each trade | Remaining | Schedule trims | Auto | Ledger |
| TAX-02 | 14 | Lot age | Ledger | Date + 12 months | – | Each proposal | Eligible date | Schedule | Auto | Ledger |
| REB-01 | 14.4 | New money routing | Gaps, eligibility | Largest gap first | – | Each inflow | Order list | Buy | Investor | Trade log |
| EXC-01 | 18 | Exception expiry | Register | Days to expiry | ≤ 0 | Fortnightly | Fail | Escalate | IC | Register |
| DAT-01 | 6.2 | Data freshness | Data dates | Age | 15 months / 45 days | Each review | Stale | Flag | Auto | Snapshot |

## Appendix H: Investment decision log template

| ID | Date | Security | Decision | Tier or rule | Rationale | Evidence | Approver | Tax impact | Follow-up date |
|---|---|---|---|---|---|---|---|---|---|
| DL-001 | 4 Nov 2026 | IOC | Exit in full | One-time transitional decision (v4.9 T.3); tier-2-type business-economics judgement | Cyclical refiner; ROCE 7% in one of three years; returns depend on crude and administered pricing; not a compounder | Fundamentals snapshot of 4 Nov 2026 | Investor | Long-term; amount to be entered | [execution date] |

## Appendix I: Investment Committee approval template

| Item | Entry |
|---|---|
| Meeting date | |
| Members present | |
| Documents reviewed | IC pack Qx FYxx; Household Exposure Report; stress tests |
| Decisions approved (IDs) | |
| Decisions deferred | |
| Exceptions approved (with expiry) | |
| Policy amendments | |
| Signed | ______________________ (Investor) Date ________ |

## Appendix J: Policy change log

| Version | Date | Summary | Approved by |
|---|---|---|---|
| v4.8 | 11 Jul 2026 | Three-horizon framework; ballast pool | Investor |
| v4.9 | 4 Nov 2026 | Rebased to the live book; screen-driven Core; transition plan; household section | Investor |
| v5.0 | [approval date] | IC-ready restructure; see Committee Pack, Deliverable 2 | [pending] |
