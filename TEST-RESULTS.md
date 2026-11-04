# Pre-deployment test results

Date: 4 November 2026

## Passed static checks

- Inline JavaScript in `index.html` and `categories.html` passes Node.js syntax validation.
- Local image, stylesheet and favicon references on the two customer pages resolve within the package.
- Responsive CSS includes tablet and mobile breakpoints at 850px and 600px.
- Existing age-verification key `nl_age_ok` and 30-day validity logic are present on both customer pages.
- The existing owner login link to `admin.html` remains present.
- The existing Supabase URL, public key and `public_catalogue` RPC request remain present in the catalogue page.
- `admin.html`, `networth.html` and `CNAME` are byte-identical to the supplied original ZIP.

## Not verified in this environment

- Browser visual rendering at desktop and mobile viewport sizes: Chromium navigation was blocked by the execution environment (`ERR_BLOCKED_BY_ADMINISTRATOR`).
- Live Supabase RPC response: the execution environment could not resolve `kikavlhdhdjeqqygfvbv.supabase.co` (DNS resolution failure). The site’s request/fallback code is present and syntactically valid, but a successful live catalogue response is not confirmed.
- Live GitHub Pages deployment: not performed. No GitHub write access was used.

## Required post-deployment checks

1. Open `https://nalagolacsshop.com` on desktop and mobile.
2. Confirm the age gate appears for a fresh browser session and remembers acceptance for 30 days.
3. Open the catalogue and confirm the Supabase list loads, including current brands, sizes and MRP.
4. Test a brand search and several category filters.
5. Confirm phone, WhatsApp, Google Maps and owner login links.
6. Confirm the admin login and accounting screens still work as before.
- Catalogue JavaScript smoke tests with a mocked empty RPC response and a representative row both passed: the fallback message is shown for an empty response, and a sample brand, pack size, MRP and as-of date render for a valid response. This tests client-side transformation/render logic with fixtures, not the live Supabase service.
