# Investment Policy Statement: Stock Portfolio

**Version:** v4.9 (supersedes v4.8) **Effective:** 4 Nov 2026
**Book at v4.9:** ₹20,01,521 in 8 holdings across Zerodha and Angel One (Personal Networth Tracker, prices of 3 Nov 2026)
**Review cycle:** Fortnightly signal reviews (1st and 15th) · Quarterly action reviews · Annual restatement

> This is a risk-management framework for my own decisions, not personalised investment advice. Capital is at risk. Tax statements reflect the rules as understood on the effective date and must be confirmed with a chartered accountant before acting.

---

## What changed in v4.9

| # | Problem in v4.8 | Fix in v4.9 | Where |
|---|---|---|---|
| 1 | Written for an ₹80L book with ₹-denominated sleeves, caps and floors | Every limit is a percentage of the live book read from the tracker. ₹80L is an aspiration, not an input | Part A |
| 2 | Four names and one sector above their caps, with no way back that avoids short-term tax | A 12-month transition plan: new money first, trims only on shares held over a year, inside the household exemption | Part T |
| 3 | IOC (15% of the book) sat outside the policy | IOC is tested against the Core gate; it is exited if it fails | §T.3 |
| 4 | A fixed list of 18 named stocks, 13 of them not held | The Core list is the output of a fortnightly screen of the top 250 stocks | §7 |
| 5 | Stocks and mutual funds governed separately, each assuming the full ₹1.25 L exemption | A household section above both IPSs: stocks/MF split, cross-book sector limits, one shared tax plan | Part H |
| 6 | Drawdown budget tested on a diversified book that doesn't exist | Stress test on actual holdings | §A.4 |
| 7 | Roughly half the document was software specification | Execution, failover, ledger and report rules move to the AlgoBot technical spec. The 50/50 broker split is dropped as an investment objective | Appendix |
| 8 | Short-Term sleeve carried a stale backtest; Medium-Term rules never backtested | Both sleeves dormant at 0% until funded and validated | §A.2 |

---

## Part H: Household equity (governs this IPS and the Mutual Fund IPS v1.1)

### H.1 Split between stocks and mutual funds

| | Target | Band | 4 Nov 2026 |
|---|---:|---:|---:|
| Direct stocks (this IPS) | 40% | 30–50% | 36.7% (₹20.0 L) |
| Mutual funds (MF IPS v1.1) | 60% | 50–70% | 63.3% (₹34.5 L) |

[confirm] An earlier plan set 60/40 the other way. 40/60 is used here because it matches the book as it stands and keeps stock-picking risk below the diversified fund book. New money is directed to whichever side is further below target; nothing is sold to rebalance between the two.

### H.2 Cross-book limits

- **Direct stock exposure to any one NSE industry ≤ 10% of household equity** (stocks + mutual funds). On 4 Nov 2026 Financial Services is 17.2%.
- **Any single stock ≤ 6% of household equity.**
- Mutual fund look-through (for example, the banks held inside Parag Parikh Flexi Cap and Invesco Contra) is checked by hand at the annual restatement from fund factsheets. If look-through exposure to one industry exceeds 30% of household equity, new money to direct stocks in that industry stops.

### H.3 Shared tax plan

There is one ₹1.25 L long-term capital gains exemption per person per financial year for listed equity and equity funds. Both IPSs draw on it in this order:

1. Gate exits and thesis breaks (they happen whatever the tax).
2. Mutual fund consolidations under MF IPS §J.
3. Stock cap trims under Part T of this IPS.
4. Tax-loss harvesting in February–March.

Anything that doesn't fit this year waits for 1 April, unless it is a gate exit. Shares held 12 months or less are not sold for drift or cap reasons (short-term gains are taxed at 20%). The dashboard tracks the exemption used so far across both books.

---

## Part A: Mandate, rebased

### A.1 Objective

Compound the stock book at Nifty 500 TRI + 3% a year, net of costs and tax, over rolling 3-year periods, with a smaller maximum drawdown than the index. This is a target, not a promise.

### A.2 Sleeves

| Sleeve | v4.8 target | v4.9 position |
|---|---:|---|
| Long-Term Core | 65% | **100% of the live book** |
| Medium-Term tactical | 20% | **0%, dormant** |
| Short-Term swing | 15% | **0%, dormant** |

The Medium-Term sleeve reopens only when the stock book is above ₹40 L and its v4.6 rules have passed a backtest. The Short-Term sleeve stays closed; swing trading belongs to the separate trading mandate, which runs from its own account [confirm]. Neither sleeve receives money from the Core.

### A.3 Ballast

NIFTYBEES and LIQUIDBEES (₹2.1 L, 10.5% on 4 Nov 2026) sit in an unbanded ballast pool. They are excluded from name and sector caps, are not counted as Core names, and are used last to fund a buy (after cash). GOLDBEES, if bought, counts as a Core position capped at 5%.

### A.4 Risk budget and stress test

- Book drawdown budget: **25%**.
- Every quarterly review runs two stress tests on the actual holdings: (a) Financial Services −35% and everything else −20%; (b) Oil, Gas & Power −30% and everything else −20%.
- On 4 Nov 2026 test (a) gives about **−27%**, outside the budget. After the Part T plan (Financial Services at about 20%) it gives about −23%.
- A stress result outside the budget is treated as a cap breach: no new money into the stressed industry until it is back inside.

### A.5 Prohibitions

No F&O, no leverage, no shorting, no intraday. Cash equity, ETFs, REITs and InvITs only.

---

## Part B: Long-Term Core

### §2 Quality gate (applies to every holding and every buy)

Data: screener.in annual results (consolidated where available), refreshed on the 1st and 15th of each month.

| Test | Non-financials | Financials (NSE industry "Financial Services") |
|---|---|---|
| Return | 3-year average ROCE ≥ 15% **and** 3-year average ROE ≥ 15% | 3-year average ROE ≥ 15% |
| Consistency ("sustained") | No single year of the last three with ROCE below 10% | No single year with ROE below 10% |
| Leverage | Borrowings ÷ (equity + reserves) ≤ 2.0 | Exempt |
| Cash conversion | 3-year operating cash flow ≥ 70% of 3-year net profit | Exempt |
| Size | Nifty LargeMidcap 250 member for new entries; existing holdings that drop out are frozen to new money | Same |
| Governance | Promoter pledging or a regulatory red flag is a hard fail and an immediate exit | Same |

A test with missing data counts as unproven, not passed; the name cannot be bought until the data is there.

### §2.1 Probation

A held name that fails a quantitative test goes on probation for two quarters: no new money, no forced sale. If it still fails at the third quarterly review it is sold (inside the tax rules of Part H). Governance failures and thesis breaks skip probation.

### §3 Entry

- Buy only names on the §7 target list.
- **Euphoria filter:** no buying while trailing P/E is more than 2 standard deviations above its own 5-year average. Checked by hand before each buy until the data feed carries P/E history.
- **200-DMA freeze:** no buying while the stock closes below its 200-day moving average; lifts after 3 closes back above it.
- Stage entries in up to 3 tranches; limit orders within 0.5% of the trigger.

### §4 Exits

1. Thesis break or governance fail: exit in full at once.
2. Probation failure under §2.1.
3. Valuation trim: trailing P/E more than 3 standard deviations above its 10-year average → trim 25%.
4. Cap trims under §5 and Part T.

Tax never triggers a sale. Tax can delay a cap trim (Part T) but never a §4.1 exit.

### §5 Caps (percent of the live stock book)

| Cap | Limit |
|---|---:|
| Target weight per Core name | 7.5% |
| Hard cap per name | 10% |
| Per NSE industry | 25% |
| Ballast pool | No cap |

A breach is fixed under Part T, never by an immediate short-term sale.

### §6 Drift

Rebalance a name when it is more than 25% (relative) away from its target weight, using new money first. Trims follow Part T.

### §7 Screen-driven Core list

- **Universe:** the 250 stocks in the Nifty LargeMidcap 250 (top 250 by market cap), refreshed at each index reconstitution.
- **Gate:** §2.
- **Score** (percentile rank among gate-passers): quality 40% (ROCE for non-financials, ROE for financials), 5-year profit growth 30%, cash conversion 15% (neutral for financials), earnings yield 15%.
- **Target list:** 12 names. Held names that pass the gate keep their place, so a holding is never sold just because something ranks higher. Remaining places go to the highest-scoring names, as long as no NSE industry exceeds 25% at planned weights.
- **Funding order:** sale proceeds first, then new money, always to the target name furthest below 7.5%.
- **Out of scope for the score:** P/E history, governance and the 200-DMA. These are checked by hand at §3 before buying.

---

## Part T: 12-month transition plan (4 Nov 2026 to 31 Oct 2027)

### T.1 New money first

All new money and all sale proceeds go to target-list names that are below 7.5%, largest gap first. Nothing goes into a name or industry that is above its cap, on probation, or frozen.

### T.2 Trims only on shares held over a year

A cap breach is trimmed only from lots held more than 12 months, and only as far as the household exemption (Part H.3) allows this financial year. The rest is scheduled for the date the lots turn long-term or for 1 April, whichever applies.

### T.3 IOC

IOC is exited if it fails the §2 gate or does not make the §7 target list. At adoption its 3-year averages pass (ROE 17%, ROCE 16%, debt/equity 0.6, cash conversion 181%), but one of its last three years had ROCE of 7%, below the 10% consistency floor. A refiner's returns swing with crude and government pricing; that is the opposite of the compounding this book is for. **IOC is therefore exited at the adoption review.** All lots are over 12 months old, so the gain is long-term.

### T.4 Breaches at adoption and their schedule

| Name | Weight | Cap | Fix | Earliest date |
|---|---:|---:|---|---|
| ICICI Bank | 26.3% | 10% | Trim to 10% | 4 Jun 2027 (lot bought 3 Jun 2026) |
| HDFC Bank | 20.4% | 10% | Trim older lots now within this year's exemption; the rest after 1 Apr 2027 and 17 Apr 2027 | Now, then Apr 2027 |
| IOC | 15.4% | 10% | Exit (T.3) | Now |
| BEL | 14.2% | 10% | Trim to 10% | 12 Jun 2027 (lot bought 11 Jun 2026) |
| Financial Services | 46.7% | 25% | Falls to about 20% once ICICI and HDFC are at 10% | Jun 2027 |

The dashboard recomputes these amounts at every review from live prices and lots.

### T.5 Milestones

| By | Expected position |
|---|---|
| 31 Jan 2027 | IOC exited; first HDFC Bank trim done; proceeds invested in the top-ranked target names |
| 30 Apr 2027 | HDFC Bank at 10% |
| 30 Jun 2027 | ICICI Bank and BEL at 10%; Financial Services at or below 25% |
| 31 Oct 2027 | No name above 10%; target list at least 8 names; transition closed at the annual restatement |

---

## Part E: Governance

| Review | When | What happens |
|---|---|---|
| Signal review | 1st and 15th of each month | Fundamentals refreshed, gate and screen re-run, caps checked, buy and sell list updated. Nothing is sold except under the exceptions below |
| Action review | First review of January, April, July and October, plus the adoption review on 4 Nov 2026 | Act on exits, probation outcomes and scheduled trims; redeploy proceeds the same day |
| Annual restatement | January action review | Restate Part H split, caps, the stress test, the tax plan and whether the dormant sleeves reopen |

**Exceptions that act at once:** governance fail, thesis break, a single name above 15% of the household equity.

**Monthly scorecard:** book vs Nifty 500 TRI, Sortino and Calmar on daily NAV, maximum drawdown vs budget, cap and probation status, exemption used, and one line on what to stop and what to do more of.

**Succession:** nominee details matched on both demat accounts; a read-only dashboard and this IPS available to a named family trustee; written instructions for manual liquidation that assume no automation is running.

---

## Appendix: moved to the AlgoBot technical spec

These v4.3–v4.8 rules are implementation detail, not investment policy, and now live in the AlgoBot technical specification: dual-venue order routing and failover, the cross-venue symbol firewall, order idempotency keys, ledger signatures and FIFO matching, LIQUIDBEES par-value handling, token refresh, slippage timers and report pruning. The 50/50 broker split is no longer an objective; which broker holds a lot is an operational choice.

---

*This IPS governs decisions for this stock book. It is a risk-management framework, not personalised investment advice. Capital is at risk and the return objective is a target, not a guarantee.*

**Investor:** ____________________ **Date:** ____________
