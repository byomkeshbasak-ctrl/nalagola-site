# Nalagola CS Shop — customer-facing website refresh

## Package contents
This ZIP is a complete repository-root snapshot based on the supplied site ZIP. The redesigned customer pages are:

- `index.html` — refreshed homepage
- `categories.html` — refreshed product catalogue
- `assets/site.css` — responsive styling

Existing files are included for reference and preservation. **For deployment, replace only the two customer-facing HTML files and add/replace `assets/site.css`.** Keep all other existing repository files as they are.

## Protected scope
The following were not modified:

- `admin.html` — owner login and shop administration
- `networth.html`
- `CNAME`
- Existing logos, favicon and background image
- Supabase database/schema, authentication, write operations and admin code

The catalogue retains the existing read-only Supabase RPC endpoint `public_catalogue`, its existing public key, and the existing response mapping logic. The catalogue does not add online ordering, payment or delivery functionality.

The age-verification gate retains the existing `nl_age_ok` local-storage key and 30-day expiry behaviour. The owner login link continues to point to `admin.html`.

## Product images
Brand-specific product images are intentionally not included yet. The catalogue uses a neutral bottle placeholder until exact, approved product images are supplied. When images are added later, place them under `images/products/` and update the product-to-image mapping. Recommended source: high-resolution, front-facing bottle only; exact product/variant; full cap and base visible; square transparent PNG; consistent scale. Do not use a different variant as a substitute.

## GitHub Pages deployment
Your supplied GitHub Pages screenshot confirmed:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

Deployment steps:
1. Download a backup of the current repository or create a Git commit before changing files.
2. From this ZIP, copy `index.html` and `categories.html` into the repository root, replacing the existing customer pages.
3. Copy `assets/site.css` into the existing `assets/` folder (create it if needed).
4. Do **not** replace `admin.html`, `networth.html`, `CNAME`, Supabase settings, or other owner/accounting files.
5. Commit and push to `main`. GitHub Pages should deploy from the root as currently configured.
6. After deployment, verify the site on a desktop and a phone. Check catalogue loading from Supabase, search, category filters, age verification, contact links and owner login.

## Test limitations
Static HTML asset references and JavaScript syntax were checked. Desktop/mobile browser rendering could not be completed in this environment because Chromium navigation was blocked by the execution environment. The Supabase host could not be resolved from this environment, so a live RPC response could not be verified here. See `TEST-RESULTS.md` for exact results. This is not a claim that the live production site has been tested.
