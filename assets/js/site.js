/* Nalagola CS Shop: customer pages (index.html, categories.html).
   Reads the public, read-only price list from Supabase through the existing
   public_catalogue RPC. It never writes to the database.
   Owner pages (admin.html, networth.html) do not load this file. */
(function () {
  "use strict";

  // EDIT: shop phone / WhatsApp number with country code 91, digits only.
  var SHOP_NUMBER = "918073436030";

  // Same public endpoint and publishable key the site already uses.
  var SUPABASE_URL = "https://kikavlhdhdjeqqygfvbv.supabase.co";
  var SUPABASE_KEY = "sb_publishable_Xe16oJpxjHO31iWW_u9fNw_qtj2Vmc0";

  // How short codes in the stock sheet read on the website.
  var DISPLAY_NAMES = {
    "RS": "Royal Stag",
    "BP": "Blenders Pride",
    "BP RESERVE": "Blenders Pride Reserve",
    "RC": "Royal Challenge",
    "IB": "Imperial Blue",
    "IB DUAL CASK": "Imperial Blue Dual Cask",
    "MCD NO1": "McDowell\u2019s No.1",
    "MCD NO1 LUXURY": "McDowell\u2019s No.1 Luxury",
    "MCD XXX": "McDowell\u2019s XXX Rum",
    "MCD PREMIUM": "McDowell\u2019s Premium",
    "OC ELITE": "Officer\u2019s Choice Elite",
    "JW RED LEBEL": "Johnnie Walker Red Label",
    "JW BLACK LEBEL": "Johnnie Walker Black Label",
    "TEACHERS HIGHLAND": "Teacher\u2019s Highland Cream",
    "MAGIC MOMENT": "Magic Moments",
    "MAGIC MOMENT APPLE": "Magic Moments Green Apple",
    "MAGIC MOMENT PINK": "Magic Moments Pink",
    "MAGIC MO LEMON": "Magic Moments Lemon",
    "MAGIC MOMENT JAMUN": "Magic Moments Jamun",
    "SMIRNOFF MINTY JAMUN": "Smirnoff Minty Jamun",
    "WILLIAM LAWSON'S": "William Lawson\u2019s",
    "VAT 69": "VAT 69",
    "OLD MONK XXX": "Old Monk XXX Rum",
    "BLACK & WHITE": "Black & White",
    "HAYWARDS 5000": "Haywards 5000",
    "COSMOS FIFTY": "Cosmos Fifty",
    "100 PIPERS": "100 Pipers",
    "BUDWEISER PREM": "Budweiser Premium",
    "OAKSMITH INT": "Oaksmith International"
  };

  // Product photographs (unchanged by the redesign).
  var PRODUCT_IMAGES = {
    "BUDWEISER MAGNUM": "assets/products/beer/budweiser-magnum.webp",
    "CARLSBERG ELEPHANT": "assets/products/beer/carlsberg-elephant.webp",
    "KINGFISHER DELUXE": "assets/products/beer/kingfisher-strong.webp",
    "ANTIQUITY BLUE": "assets/products/whisky/antiquity-blue.webp",
    "BP": "assets/products/whisky/bp.webp",
    "BP RESERVE": "assets/products/whisky/bp-reserve.webp",
    "IB DUAL CASK": "assets/products/whisky/ib-dual-cask.webp",
    "MCD NO1": "assets/products/whisky/mcd-no1.webp",
    "MCD NO1 LUXURY": "assets/products/whisky/mcd-no1-luxury.webp",
    "ICONIQ": "assets/products/whisky/iconiq.webp",
    "OAKSMITH GOLD": "assets/products/whisky/oaksmith-gold.webp",
    "RC": "assets/products/whisky/rc.webp",
    "ROYAL GREEN": "assets/products/whisky/royal-green.webp",
    "RS": "assets/products/whisky/rs.webp",
    "ALL SEASONS": "assets/products/whisky/all-seasons.webp",
    "MAQINTOSH": "assets/products/whisky/maqintosh.webp",
    "OC ELITE": "assets/products/whisky/oc-elite.webp",
    "XCLAMATION": "assets/products/whisky/xclamation.webp",
    "GREEN LABEL": "assets/products/whisky/green-label.webp",
    "MANSION HOUSE": "assets/products/whisky/mansion-house.webp",
    "SIGNATURE PREMIER": "assets/products/whisky/signature-premier.webp",
    "BACARDI BLACK": "assets/products/rum/bacardi-black.webp",
    "MCD XXX": "assets/products/rum/mcd-xxx.webp",
    "OLD MONK GOLD": "assets/products/rum/old-monk-gold.webp",
    "OLD MONK COFFEE": "assets/products/rum/old-monk-coffee.webp",
    "OLD MONK XXX": "assets/products/rum/old-monk-xxx.webp",
    "BACARDI WHITE": "assets/products/rum/bacardi-white.webp",
    "BACARDI LIMON": "assets/products/rum/bacardi-limon.webp",
    "BACARDI MANGO": "assets/products/rum/bacardi-mango.webp",
    "CARLSBERG PREMIUM": "assets/products/beer/carlsberg-premium.webp",
    "TUBORG CLASSIC": "assets/products/beer/tuborg-classic.webp",
    "TUBORG STRONG": "assets/products/beer/tuborg-strong.webp",
    "TUBORG GREEN": "assets/products/beer/tuborg-green.webp",
    "HAYWARDS 5000": "assets/products/beer/haywards-5000.webp",
    "HAYWARDS BOLD": "assets/products/beer/haywards-bold.webp",
    "DANSBERG": "assets/products/beer/dansberg.webp",
    "KINGFISHER ULTRA": "assets/products/beer/kingfisher-ultra.webp",
    "MAGIC MOMENT": "assets/products/vodka/magic-moment.webp",
    "MAGIC MOMENT APPLE": "assets/products/vodka/magic-moment-apple.webp",
    "MAGIC MO LEMON": "assets/products/vodka/magic-mo-lemon.webp",
    "MAGIC MOMENT PINK": "assets/products/vodka/magic-moment-pink.webp",
    "MAGIC MOMENT JAMUN": "assets/products/vodka/magic-moment-jamun.webp",
    "SMIRNOFF MINTY JAMUN": "assets/products/vodka/smirnoff-minty-jamun.webp",
    "SNOSKI": "assets/products/vodka/snoski.webp",
    "SNOSKI APPLE": "assets/products/vodka/snoski-apple.webp",
    "SNOSKI JAMUN": "assets/products/vodka/snoski-jamun.webp",
    "100 PIPERS": "assets/products/overseas-spirits/100-pipers.webp",
    "BLACK & WHITE": "assets/products/overseas-spirits/black-and-white.webp",
    "BLACK DOG": "assets/products/overseas-spirits/black-dog.webp",
    "JW RED LEBEL": "assets/products/overseas-spirits/jw-red-label.webp",
    "TEACHERS HIGHLAND": "assets/products/overseas-spirits/teachers-highland.webp",
    "VAT 69": "assets/products/overseas-spirits/vat-69.webp",
    "COSMOS FIFTY": "assets/products/country-spirits/cosmos-fifty.webp",
    "BLUE LAGOON": "assets/products/gin/blue-lagoon.webp",
    "BRO CODE": "assets/products/wine/bro-code.webp",
    "SHOTGUN": "assets/products/wine/shotgun.webp"
  };

  // Website category names. The database keeps its own names; these are display labels only.
  // Website categories: the same names as the database, except "Wines", which shows as "Wine".
  var CATEGORIES = [
    { name: "Whisky", slug: "whisky", blurb: "Indian whisky, from everyday blends to premium labels." },
    { name: "Rum", slug: "rum", blurb: "Dark, white and flavoured rum." },
    { name: "Beer", slug: "beer", blurb: "Lager and strong beer." },
    { name: "Vodka", slug: "vodka", blurb: "Plain and flavoured vodka." },
    { name: "Gin", slug: "gin", blurb: "Gin for the home bar." },
    { name: "Country Spirits", slug: "country-spirits", blurb: "Indian-made liquor (IML)." },
    { name: "Overseas Spirits", slug: "overseas-spirits", blurb: "Imported Scotch whisky." },
    { name: "Wine", slug: "wine", blurb: "Wine and wine-based drinks." }
  ];
  var DB_TO_DISPLAY = { "Wines": "Wine" };
  // Links from the previous version (?category=premium-whisky, ?category=iml) keep working
  var SLUG_ALIASES = { "premium-whisky": "overseas-spirits", "iml": "country-spirits" };

  // Brand families, matched at the start of the display name. Anything else uses its first word.
  var BRANDS = ["Magic Moments", "Old Monk", "Johnnie Walker", "Blenders Pride", "Imperial Blue", "Royal Stag", "Royal Challenge",
    "Royal Green", "Officer\u2019s Choice", "McDowell\u2019s", "Teacher\u2019s", "William Lawson\u2019s", "Black & White", "Black Dog",
    "100 Pipers", "VAT 69", "Mansion House", "Green Label", "All Seasons", "Mountain Oak", "Disco Panda", "Blue Lagoon",
    "Bro Code", "Cosmos Fifty", "Millenium Royal", "Signature", "Antiquity", "Haywards", "Kingfisher", "Budweiser", "Carlsberg",
    "Tuborg", "Bacardi", "Smirnoff", "Snoski", "Oaksmith", "Brothers"];

  // Homepage collections: neutral selections from the live price list (no popularity claims).
  var COLLECTIONS = [
    { id: "whisky", label: "Whisky selection", cat: "Whisky", codes: ["RS", "BP", "RC", "ANTIQUITY BLUE"] },
    { id: "overseas", label: "Overseas Spirits selection", cat: "Overseas Spirits", codes: ["TEACHERS HIGHLAND", "BLACK DOG", "100 PIPERS", "VAT 69"] },
    { id: "beer", label: "Beer selection", cat: "Beer", codes: ["KINGFISHER ULTRA", "BUDWEISER MAGNUM", "CARLSBERG ELEPHANT", "TUBORG CLASSIC"] }
  ];

  var PRICE_RANGES = [
    { id: "u200", label: "Under \u20b9200", min: 0, max: 199.99 },
    { id: "200-500", label: "\u20b9200 to \u20b9500", min: 200, max: 500 },
    { id: "500-1000", label: "\u20b9500 to \u20b91,000", min: 500.01, max: 1000 },
    { id: "1000-2000", label: "\u20b91,000 to \u20b92,000", min: 1000.01, max: 2000 },
    { id: "2000", label: "Above \u20b92,000", min: 2000.01, max: Infinity }
  ];
  var SORTS = [
    { id: "rec", label: "By category" },
    { id: "az", label: "Name: A to Z" },
    { id: "za", label: "Name: Z to A" },
    { id: "plh", label: "Price: low to high" },
    { id: "phl", label: "Price: high to low" }
  ];

  // Type letters in stock-sheet item names ("RS W 750"). IML is part of country-spirit names.
  var TYPE_CODES = ["W", "R", "V", "B", "G", "CL", "WN", "WINE", "BR", "T", "TQ"];
  var KEEP_UPPER = ["XXX", "VAT", "IB", "BP", "RC", "OC", "MCD", "JW", "IML", "II", "III", "XO", "VSOP", "VS"];

  var BOTTLE_SVG = '<svg viewBox="0 0 70 250" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M27 4h16v46c14 8 22 20 22 36v152a8 8 0 0 1-8 8H13a8 8 0 0 1-8-8V86c0-16 8-28 22-36z"/></svg>';

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function norm(s) { return String(s).toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, " ").trim(); }
  // Stock sheets sometimes spell one label two ways; fold them into one card.
  var NAME_ALIASES = { "MAGIC MOMENTS JAMUN": "MAGIC MOMENT JAMUN" };
  function baseName(item) { var b = rawBase(item); return NAME_ALIASES[b] || b; }
  function rawBase(item) {
    var t = String(item).trim().toUpperCase().split(/\s+/);
    var last = /^([A-Z]+)(\d+)$/.exec(t[t.length - 1]);
    if (t.length > 1 && last && TYPE_CODES.indexOf(last[1]) >= 0) return t.slice(0, -1).join(" ");
    for (var i = t.length - 2; i >= 1; i--) { if (TYPE_CODES.indexOf(t[i]) >= 0) return t.slice(0, i).join(" "); }
    if (/^\d+$/.test(t[t.length - 1])) t.pop();
    return t.join(" ");
  }
  function titleCase(s) {
    return s.split(" ").map(function (w) {
      if (KEEP_UPPER.indexOf(w) >= 0 || /\d/.test(w)) return w;
      return w.charAt(0) + w.slice(1).toLowerCase();
    }).join(" ");
  }
  function displayName(base) { return DISPLAY_NAMES[base] || titleCase(base).replace(/'/g, "\u2019"); }
  function brandOf(name) {
    var hit = BRANDS.filter(function (b) { return name === b || name.indexOf(b + " ") === 0; })
      .sort(function (a, b) { return b.length - a.length; })[0];
    var brand = hit || name.split(" ")[0];
    return { brand: brand, variant: name.slice(brand.length).trim() };
  }
  function fmtSize(ml) { ml = Number(ml); if (!ml) return ""; return ml >= 1000 ? ml / 1000 + " L" : ml + " ml"; }
  var inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  function money(n) { return inr.format(n); }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
  function products(n) { return plural(n, "product", "products"); }
  function brands(n) { return plural(n, "brand", "brands"); }
  function brandCount(list) { var b = {}; list.forEach(function (l) { b[l.brand] = 1; }); return Object.keys(b).length; }
  function waLink(msg) { return "https://wa.me/" + SHOP_NUMBER + (msg ? "?text=" + encodeURIComponent(msg) : ""); }
  function catBySlug(slug) {
    slug = SLUG_ALIASES[slug] || slug;
    return CATEGORIES.filter(function (c) { return c.slug === slug; })[0] || null;
  }
  function slugOf(name) { var c = CATEGORIES.filter(function (x) { return x.name === name; })[0]; return c ? c.slug : slugify(name); }

  /* ---------- data ---------- */
  // Rows -> labels with sizes. Where the same label and size has more than one MRP,
  // the highest is shown (owner rule: when in doubt, show the higher price).
  function buildModel(rows) {
    var byKey = {}, asOf = null;
    rows.forEach(function (r) {
      if (!r || r.item_name == null) return;
      var cat = DB_TO_DISPLAY[r.category] || r.category || "Other";
      var base = baseName(r.item_name);
      var key = cat + "|" + base;
      var lab = byKey[key];
      if (!lab) {
        var name = displayName(base), bv = brandOf(name);
        lab = byKey[key] = { key: base, name: name, brand: bv.brand, variant: bv.variant, cat: cat, sizes: {}, items: [] };
      }
      if (lab.items.indexOf(r.item_name) < 0) lab.items.push(r.item_name);
      var ml = Number(r.size_ml) || 0, mrp = Number(r.mrp);
      if (!isFinite(mrp)) return;
      if (!(ml in lab.sizes) || mrp > lab.sizes[ml]) lab.sizes[ml] = mrp;
      if (r.as_of && (!asOf || r.as_of > asOf)) asOf = r.as_of;
    });
    var cats = CATEGORIES.slice();
    var list = Object.keys(byKey).map(function (k) {
      var l = byKey[k];
      l.rows = Object.keys(l.sizes).map(Number).sort(function (a, b) { return b - a; })
        .map(function (ml) { return { ml: ml, mrp: l.sizes[ml] }; });
      l.search = norm([l.name, l.brand, l.variant, l.key, l.cat].join(" "));
      if (!cats.some(function (c) { return c.name === l.cat; })) cats.push({ name: l.cat, slug: slugify(l.cat), blurb: "" });
      return l;
    });
    var order = cats.map(function (c) { return c.name; });
    list.sort(function (a, b) { return order.indexOf(a.cat) - order.indexOf(b.cat) || a.name.localeCompare(b.name); });
    return { labels: list, cats: cats, asOf: asOf };
  }

  // Badges: Best Seller = the two best-selling labels of each category (last 30 days, categories with 4+ labels);
  // New = every size first stocked in the last 30 days; Premium = imported (Overseas Spirits). One badge per card.
  function loadBadges() {
    return fetch(SUPABASE_URL + "/rest/v1/rpc/public_badges", {
      method: "POST", headers: { "apikey": SUPABASE_KEY, "Content-Type": "application/json" }, body: "{}"
    }).then(function (res) { return res.ok ? res.json() : []; }).catch(function () { return []; });
  }
  function applyBadges(m, rows) {
    var by = {};
    (Array.isArray(rows) ? rows : []).forEach(function (r) { if (r && r.item_name) by[r.item_name] = r; });
    m.labels.forEach(function (l) {
      var ranks = l.items.map(function (n) { return by[n] && by[n].sold_rank; }).filter(function (x) { return x != null; });
      l.rank = ranks.length ? Math.min.apply(null, ranks) : null;
      l.isNew = l.items.length > 0 && l.items.every(function (n) { return by[n] && by[n].is_new; });
      l.badge = null;
    });
    m.cats.forEach(function (c) {
      var inCat = m.labels.filter(function (l) { return l.cat === c.name; });
      if (inCat.length < 4) return;
      inCat.filter(function (l) { return l.rank != null; }).sort(function (a, b) { return a.rank - b.rank; })
        .slice(0, 2).forEach(function (l) { l.badge = "bestseller"; });
    });
    m.labels.forEach(function (l) {
      if (!l.badge && l.isNew) l.badge = "new";
      else if (!l.badge && l.cat === "Overseas Spirits") l.badge = "premium";
    });
    return m;
  }
  var BADGE_TEXT = { bestseller: "Best Seller", "new": "New Arrival", premium: "Premium" };
  function badgeHtml(l) { return l.badge ? '<span class="badge badge-' + l.badge + '">' + BADGE_TEXT[l.badge] + "</span>" : ""; }
  function lowest(l) { return Math.min.apply(null, l.rows.map(function (r) { return r.mrp; })); }
  // Hover panel over the photo (desktop). asButton: a real button for cards that aren't links themselves.
  function quickViewHtml(l, asButton) {
    var n = l.rows.length, sizes = l.rows.slice().sort(function (a, b) { return a.ml - b.ml; }).map(function (r) { return fmtSize(r.ml); }).join(" \u00b7 ");
    var btn = asButton
      ? '<button type="button" class="quick-btn" data-key="' + esc(l.cat + "|" + l.key) + '" tabindex="-1">Quick view &rarr;</button>'
      : '<span class="quick-btn">View details &rarr;</span>';
    return '<div class="quick-view" aria-hidden="true"><div class="quick-price">' + (n > 1 ? "From " : "") + money(lowest(l)) + "</div>" +
      '<div class="quick-sizes">' + esc(sizes) + "</div>" + btn + "</div>";
  }
  function loadCatalogue() {
    return Promise.all([fetchCatalogue(), loadBadges()]).then(function (x) { return applyBadges(x[0], x[1]); });
  }
  function fetchCatalogue() {
    return fetch(SUPABASE_URL + "/rest/v1/rpc/public_catalogue", {
      method: "POST",
      headers: { "apikey": SUPABASE_KEY, "Content-Type": "application/json" },
      body: "{}"
    }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    }).then(function (rows) {
      if (!Array.isArray(rows)) throw new Error("Unexpected response");
      return buildModel(rows);
    });
  }
  function fmtDate(iso) {
    var p = String(iso).split("-");
    if (p.length < 3) return "";
    return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  }

  /* ---------- shared rendering ---------- */
  function mediaHtml(l, big, quick) {
    var src = PRODUCT_IMAGES[l.key], extra = big ? "" : badgeHtml(l) + (quick ? quickViewHtml(l, quick === "button") : "");
    if (src) return '<div class="media">' + extra + '<img src="' + esc(src) + '" alt="' + esc(l.name) + ' bottle" loading="' + (big ? "eager" : "lazy") + '" decoding="async" width="800" height="800"></div>';
    return '<div class="media">' + extra + BOTTLE_SVG + '<span class="pending">Photo pending</span></div>';
  }
  function sizeRows(l, hitSize) {
    return l.rows.map(function (r) {
      return '<div class="size' + (hitSize && r.ml === hitSize ? " hit" : "") + '"><span class="ml">' + esc(fmtSize(r.ml)) + '</span><span class="mrp">' + money(r.mrp) + "</span></div>";
    }).join("");
  }

  /* ---------- page chrome ---------- */
  function initChrome() {
    var yr = document.getElementById("yr");
    if (yr) yr.textContent = new Date().getFullYear();
    var btn = document.getElementById("menu-btn"), panel = document.getElementById("menu-panel");
    if (btn && panel) {
      var set = function (open) {
        panel.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      };
      btn.addEventListener("click", function () { set(!panel.classList.contains("open")); });
      panel.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel.classList.contains("open")) { set(false); btn.focus(); } });
    }
  }

  /* ---------- homepage ---------- */
  /* ---------- testimonials ---------- */
  // Real customer reviews only, in the customer's own words, with their permission.
  // The section stays hidden while this list is empty.
  // Example: { quote: "...", name: "Amit K.", note: "Regular customer since 2018", stars: 5 }
  var TESTIMONIALS = [];
  function initTestimonials() {
    var sec = document.getElementById("testimonials"), grid = document.getElementById("testimonial-grid");
    if (!sec || !grid || !TESTIMONIALS.length) return;
    grid.innerHTML = TESTIMONIALS.map(function (t) {
      var n = Math.max(0, Math.min(5, t.stars || 0));
      return '<figure class="testimonial-card">' + (n ? '<div class="stars" role="img" aria-label="' + n + ' out of 5 stars">' + "\u2605".repeat(n) + "</div>" : "") +
        "<blockquote><p>" + esc(t.quote) + '</p></blockquote><figcaption class="testimonial-author"><strong>' + esc(t.name) + "</strong>" +
        (t.note ? "<span>" + esc(t.note) + "</span>" : "") + "</figcaption></figure>";
    }).join("");
    sec.hidden = false;
  }

  /* ---------- stats bar: numbers count up when they scroll into view ---------- */
  function initStats() {
    var els = Array.prototype.slice.call(document.querySelectorAll(".stat-number[data-stat]"));
    if (!els.length) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var yrs = document.querySelector('[data-stat="years"]');
    if (yrs) yrs.setAttribute("data-target", String(new Date().getFullYear() - 1975));
    function run(el) {
      var target = parseInt(el.getAttribute("data-target"), 10);
      if (!(target > 0) || el.getAttribute("data-done")) return;
      el.setAttribute("data-done", "1");
      if (reduce) { el.textContent = target; return; }
      var current = 0, step = Math.ceil(target / 40);
      var timer = setInterval(function () {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 30);
    }
    var seen = [];
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          seen.push(entry.target); run(entry.target); io.unobserve(entry.target);
        });
      }, { threshold: 0.5 });
      els.forEach(function (el) { io.observe(el); });
    } else { els.forEach(function (el) { seen.push(el); run(el); }); }
    // Product and brand counts come from the price list; start them once it arrives
    return function (m) {
      var set = function (k, v) { var el = document.querySelector('[data-stat="' + k + '"]'); if (el) { el.setAttribute("data-target", String(v)); if (seen.indexOf(el) >= 0) run(el); } };
      if (m) { set("products", m.labels.length); set("brands", brandCount(m.labels)); }
      else ["products", "brands"].forEach(function (k) { var el = document.querySelector('[data-stat="' + k + '"]'); if (el) el.closest(".stat").hidden = true; });
    };
  }

  function initHome() {
    var section = document.getElementById("collections");
    var tabsEl = document.getElementById("coll-tabs"), gridEl = document.getElementById("coll-grid"), noteEl = document.getElementById("coll-note");
    var statsReady = initStats();
    initTestimonials();
    loadCatalogue().then(function (m) {
      if (!m.labels.length) throw new Error("Empty price list");
      if (statsReady) statsReady(m);
      CATEGORIES.forEach(function (c) {
        var el = document.querySelector('[data-count="' + c.slug + '"]');
        if (!el) return;
        var inCat = m.labels.filter(function (l) { return l.cat === c.name; });
        var keep = function (t) { return t.replace(" ", "\u00a0"); }; // keep "21 brands" on one line
        el.textContent = inCat.length ? keep(products(inCat.length)) + " \u00b7 " + keep(brands(brandCount(inCat))) : "Ask us about this range";
      });
      var tot = document.getElementById("label-total");
      var nCats = m.cats.filter(function (c) { return m.labels.some(function (l) { return l.cat === c.name; }); }).length;
      if (tot) tot.textContent = products(m.labels.length) + " from " + brands(brandCount(m.labels)) + " across " + plural(nCats, "category", "categories") + ".";
      var sets = COLLECTIONS.map(function (c) {
        var inCat = m.labels.filter(function (l) { return l.cat === c.cat; });
        var picks = c.codes.map(function (k) { return inCat.filter(function (l) { return l.key === k; })[0]; }).filter(Boolean);
        inCat.forEach(function (l) { if (picks.length < 4 && picks.indexOf(l) < 0) picks.push(l); });
        return { c: c, picks: picks };
      }).filter(function (s) { return s.picks.length; });
      if (!sets.length) throw new Error("Nothing to show");
      var active = 0;
      function draw() {
        tabsEl.innerHTML = sets.map(function (s, i) {
          return '<button type="button" class="coll-tab" role="tab" id="ct-' + s.c.id + '" aria-controls="coll-grid" aria-selected="' + (i === active) + '" tabindex="' + (i === active ? 0 : -1) + '" data-i="' + i + '">' + esc(s.c.label) + "</button>";
        }).join("");
        gridEl.setAttribute("aria-labelledby", "ct-" + sets[active].c.id);
        gridEl.innerHTML = sets[active].picks.map(function (l) {
          var top = l.rows[0], more = l.rows.length - 1;
          return '<a class="card" href="categories.html?category=' + slugOf(l.cat) + "&product=" + encodeURIComponent(l.key) + '">' + mediaHtml(l, false, "link") +
            '<div class="info"><span class="brand-line">' + esc(l.variant ? l.brand : l.cat) + "</span><h3>" + esc(l.name) + "</h3>" +
            '<div class="sizes"><div class="size"><span class="ml">' + esc(fmtSize(top.ml)) + '</span><span class="mrp">' + money(top.mrp) + "</span></div></div>" +
            '<span class="more">' + (more ? "+" + more + (more > 1 ? " more sizes" : " more size") + " \u00b7 View details" : "View details") + "</span></div></a>";
        }).join("");
      }
      tabsEl.addEventListener("click", function (e) { var b = e.target.closest("[data-i]"); if (b) { active = +b.getAttribute("data-i"); draw(); tabsEl.querySelector('[aria-selected="true"]').focus(); } });
      tabsEl.addEventListener("keydown", function (e) {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        active = (active + (e.key === "ArrowRight" ? 1 : sets.length - 1)) % sets.length; draw(); tabsEl.querySelector('[aria-selected="true"]').focus();
      });
      draw();
      if (noteEl && m.asOf) noteEl.textContent = "MRP from the shop\u2019s price list, updated " + fmtDate(m.asOf) + ". A selection, not a ranking.";
      section.hidden = false;
    }).catch(function () {
      document.querySelectorAll("[data-count]").forEach(function (el) { el.textContent = "See the range"; });
      if (section) section.hidden = true;
      if (statsReady) statsReady(null);
    });
  }

  /* ---------- catalogue page ---------- */
  function initCatalogue() {
    var $ = function (id) { return document.getElementById(id); };
    var state = { cat: "All", q: "", brand: "", size: 0, price: "", sort: "rec" };
    var model = null, pendingProduct = null;
    var out = $("catalogue"), tabsEl = $("tabs"), qEl = $("search"), clearEl = $("clear");
    var brandEl = $("f-brand"), sizeEl = $("f-size"), priceEl = $("f-price"), sortEl = $("f-sort");
    var filtersEl = $("filters"), openBtn = $("filter-open"), scrim = $("scrim"), dlg = $("pd");

    // Starting state from the link: categories.html?category=whisky&q=old%20monk&product=RS
    var params = new URLSearchParams(location.search);
    state.q = params.get("q") || "";
    qEl.value = state.q;
    pendingProduct = params.get("product");
    function catFromUrl() {
      var p = new URLSearchParams(location.search).get("category") || decodeURIComponent(location.hash.replace(/^#/, ""));
      var c = p ? catBySlug(p.toLowerCase()) : null;
      return c ? c.name : "All";
    }
    function syncUrl() {
      var p = new URLSearchParams();
      if (state.cat !== "All") p.set("category", slugOf(state.cat));
      if (state.q.trim()) p.set("q", state.q.trim());
      var qs = p.toString();
      history.replaceState(null, "", location.pathname + (qs ? "?" + qs : ""));
    }

    function inCat(l) { return state.cat === "All" || l.cat === state.cat; }
    function eligibleRows(l) {
      var pr = PRICE_RANGES.filter(function (x) { return x.id === state.price; })[0];
      return l.rows.filter(function (r) {
        return (!state.size || r.ml === state.size) && (!pr || (r.mrp >= pr.min && r.mrp <= pr.max));
      });
    }
    function activeCount() { return (state.brand ? 1 : 0) + (state.size ? 1 : 0) + (state.price ? 1 : 0) + (state.sort !== "rec" ? 1 : 0); }

    function fillSelect(el, opts, val) {
      el.innerHTML = opts.map(function (o) { return '<option value="' + esc(o.v) + '"' + (String(o.v) === String(val) ? " selected" : "") + ">" + esc(o.t) + "</option>"; }).join("");
      el.classList.toggle("active", !!val && val !== "rec");
    }
    function renderControls() {
      var tabs = [{ name: "All", label: "All Products", n: model.labels.length }].concat(model.cats.map(function (c) {
        return { name: c.name, label: c.name, n: model.labels.filter(function (l) { return l.cat === c.name; }).length };
      }).filter(function (t) { return t.n; }));
      tabsEl.innerHTML = tabs.map(function (t) {
        return '<button type="button" class="tab" data-cat="' + esc(t.name) + '" aria-pressed="' + (t.name === state.cat) + '" aria-label="' + esc(t.label + ", " + products(t.n)) + '">' + esc(t.label) + '<span class="n" aria-hidden="true">' + t.n + "</span></button>";
      }).join("");
      var pool = model.labels.filter(inCat);
      var byBrand = {}; pool.forEach(function (l) { byBrand[l.brand] = (byBrand[l.brand] || 0) + 1; });
      var bList = Object.keys(byBrand).sort(function (a, b) { return a.localeCompare(b); });
      if (state.brand && !byBrand[state.brand]) state.brand = "";
      fillSelect(brandEl, [{ v: "", t: "All brands (" + bList.length + ")" }].concat(bList.map(function (b) { return { v: b, t: b + " (" + products(byBrand[b]) + ")" }; })), state.brand);
      var sizes = {}; pool.forEach(function (l) { l.rows.forEach(function (r) { if (r.ml) sizes[r.ml] = 1; }); });
      var sList = Object.keys(sizes).map(Number).sort(function (a, b) { return a - b; });
      if (state.size && !sizes[state.size]) state.size = 0;
      fillSelect(sizeEl, [{ v: 0, t: "All sizes" }].concat(sList.map(function (s) { return { v: s, t: fmtSize(s) }; })), state.size || 0);
      fillSelect(priceEl, [{ v: "", t: "Any price" }].concat(PRICE_RANGES.map(function (p) { return { v: p.id, t: p.label }; })), state.price);
      fillSelect(sortEl, SORTS.map(function (s) { return { v: s.id, t: s.label }; }), state.sort);
      var n = activeCount();
      openBtn.textContent = n ? "Filters & sort (" + n + ")" : "Filters & sort";
    }

    function compute() {
      var q = norm(state.q);
      var hits = model.labels.filter(function (l) {
        return inCat(l) && (!q || l.search.indexOf(q) >= 0) && (!state.brand || l.brand === state.brand) && eligibleRows(l).length;
      });
      var low = function (l) { return Math.min.apply(null, eligibleRows(l).map(function (r) { return r.mrp; })); };
      if (state.sort === "az") hits.sort(function (a, b) { return a.name.localeCompare(b.name); });
      if (state.sort === "za") hits.sort(function (a, b) { return b.name.localeCompare(a.name); });
      if (state.sort === "plh") hits.sort(function (a, b) { return low(a) - low(b) || a.name.localeCompare(b.name); });
      if (state.sort === "phl") hits.sort(function (a, b) { return low(b) - low(a) || a.name.localeCompare(b.name); });
      return hits;
    }
    function card(l) {
      return '<article class="card">' + mediaHtml(l, false, "button") + '<div class="info"><span class="brand-line">' + esc(l.cat) + " \u00b7 " + esc(l.brand) + "</span><h4>" + esc(l.name) + "</h4>" +
        (l.variant ? '<span class="variant">' + esc(l.variant) + "</span>" : "") +
        '<div class="sizes">' + sizeRows(l, state.size) + '</div><button type="button" class="details" data-key="' + esc(l.cat + "|" + l.key) + '">View details<span class="sr-only"> for ' + esc(l.name) + "</span></button></div></article>";
    }

    function render() {
      if (!model) return;
      renderControls();
      clearEl.hidden = !state.q;
      var hits = compute();
      var filtered = state.q.trim() || state.brand || state.size || state.price || state.cat !== "All";
      $("clear-filters").hidden = !filtered;
      $("results-title").textContent = state.cat === "All" ? "All Products" : state.cat;
      var sortNote = state.sort === "plh" || state.sort === "phl" ? " \u00b7 sorted by the lowest listed MRP" + (state.size || state.price ? " within your filters" : "") : "";
      $("results-summary").textContent = products(hits.length) + " shown of " + model.labels.length + sortNote;
      $("apply-btn").textContent = "Show " + products(hits.length);
      if (!hits.length) {
        var why = state.q.trim() ? "Nothing matches \u201c" + state.q.trim() + "\u201d" : "Nothing matches these filters";
        out.innerHTML = '<div class="notice"><p class="big">' + esc(why) + "</p><p>Try another name, brand, size or price, or ask us on WhatsApp whether we can get it.</p>" +
          '<div class="actions"><button type="button" class="btn btn-outline" data-reset="all">Show everything</button>' +
          '<a class="btn btn-dark" target="_blank" rel="noopener" href="' + esc(waLink(state.q.trim() ? "Hi, do you have " + state.q.trim() + "?" : "")) + '">Ask on WhatsApp</a></div></div>';
        return;
      }
      if (state.sort === "rec") {
        out.innerHTML = model.cats.map(function (c) {
          var items = hits.filter(function (l) { return l.cat === c.name; });
          if (!items.length) return "";
          var head = state.cat === "All"
            ? '<div class="group-head"><h3 id="h-' + esc(c.slug) + '">' + esc(c.name) + "</h3><span>" + products(items.length) + " \u00b7 " + brands(brandCount(items)) + "</span></div>"
            : '<h3 class="sr-only" id="h-' + esc(c.slug) + '">' + esc(c.name) + "</h3>";
          return '<section class="group" aria-labelledby="h-' + esc(c.slug) + '">' + head + '<div class="prod-grid">' + items.map(card).join("") + "</div></section>";
        }).join("");
      } else {
        out.innerHTML = '<div class="prod-grid">' + hits.map(card).join("") + "</div>";
      }
    }

    /* Product details */
    var lastFocus = null;
    function openDetails(l) {
      lastFocus = document.activeElement;
      $("pd-content").innerHTML = '<div class="pd-body">' + mediaHtml(l, true) + '<div class="pd-info"><span class="eyebrow">' + esc(l.cat) + "</span>" +
        '<h2 id="pd-title">' + esc(l.name) + "</h2><dl><dt>Brand</dt><dd>" + esc(l.brand) + "</dd>" +
        (l.variant ? "<dt>Variant</dt><dd>" + esc(l.variant) + "</dd>" : "") + "<dt>Category</dt><dd>" + esc(l.cat) + "</dd></dl>" +
        '<table><thead><tr><th scope="col">Bottle size</th><th scope="col">MRP</th></tr></thead><tbody>' +
        l.rows.map(function (r) { return "<tr><td>" + esc(fmtSize(r.ml)) + "</td><td>" + money(r.mrp) + "</td></tr>"; }).join("") + "</tbody></table>" +
        '<p class="note">MRP as listed in the shop\u2019s price list' + (model.asOf ? ", updated " + esc(fmtDate(model.asOf)) : "") + ". Prices can change; please confirm in store. Sold in person at the shop only.</p>" +
        '<div class="actions"><a class="btn btn-dark" target="_blank" rel="noopener" href="' + esc(waLink("Hi, do you have " + l.name + " in stock?")) + '">Ask about this bottle</a>' +
        '<button type="button" class="btn btn-outline" data-close="1">Close</button></div></div></div>';
      if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
      $("pd-close").focus();
    }
    function closeDetails() { if (dlg.open) { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); } }
    dlg.addEventListener("close", function () { if (lastFocus && lastFocus.focus) lastFocus.focus(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg || e.target.closest("[data-close]")) closeDetails(); });
    $("pd-close").addEventListener("click", closeDetails);

    /* Mobile filter drawer */
    function setDrawer(open) {
      filtersEl.classList.toggle("open", open);
      scrim.hidden = !open;
      openBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      if (open) brandEl.focus(); else openBtn.focus();
    }
    openBtn.addEventListener("click", function () { setDrawer(true); });
    scrim.addEventListener("click", function () { setDrawer(false); });
    $("drawer-close").addEventListener("click", function () { setDrawer(false); });
    $("apply-btn").addEventListener("click", function () { setDrawer(false); });
    $("reset-btn").addEventListener("click", function () { state.brand = ""; state.size = 0; state.price = ""; state.sort = "rec"; render(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && filtersEl.classList.contains("open")) setDrawer(false); });

    /* Events */
    tabsEl.addEventListener("click", function (e) { var b = e.target.closest("[data-cat]"); if (b) { state.cat = b.getAttribute("data-cat"); syncUrl(); render(); } });
    brandEl.addEventListener("change", function () { state.brand = brandEl.value; render(); });
    sizeEl.addEventListener("change", function () { state.size = Number(sizeEl.value); render(); });
    priceEl.addEventListener("change", function () { state.price = priceEl.value; render(); });
    sortEl.addEventListener("change", function () { state.sort = sortEl.value; render(); });
    qEl.addEventListener("input", function () { state.q = qEl.value; syncUrl(); render(); });
    clearEl.addEventListener("click", function () { state.q = ""; qEl.value = ""; syncUrl(); render(); qEl.focus(); });
    $("clear-filters").addEventListener("click", function () { resetAll(); qEl.focus(); });
    function resetAll() { state = { cat: "All", q: "", brand: "", size: 0, price: "", sort: "rec" }; qEl.value = ""; syncUrl(); render(); }
    out.addEventListener("click", function (e) {
      if (e.target.closest("[data-reset]")) { resetAll(); return; }
      var d = e.target.closest("[data-key]");
      if (d) { var k = d.getAttribute("data-key"); var l = model.labels.filter(function (x) { return x.cat + "|" + x.key === k; })[0]; if (l) openDetails(l); }
    });
    /* Live search preview: the top matches under the box, with photo and price */
    var dd = document.createElement("div"), ddItems = [], ddActive = -1;
    dd.className = "search-results-dropdown"; dd.id = "search-results"; dd.setAttribute("role", "listbox"); dd.setAttribute("aria-label", "Matching products");
    var searchBox = qEl.closest(".search");
    if (searchBox) {
      searchBox.classList.add("search-wrapper"); searchBox.appendChild(dd);
      qEl.setAttribute("role", "combobox"); qEl.setAttribute("aria-controls", "search-results"); qEl.setAttribute("aria-expanded", "false"); qEl.setAttribute("aria-autocomplete", "list");
    }
    function ddClose() { dd.classList.remove("active"); dd.innerHTML = ""; ddItems = []; ddActive = -1; qEl.setAttribute("aria-expanded", "false"); qEl.removeAttribute("aria-activedescendant"); }
    function ddMark() {
      Array.prototype.forEach.call(dd.children, function (el, i) { el.setAttribute("aria-selected", i === ddActive ? "true" : "false"); });
      if (ddActive >= 0) { qEl.setAttribute("aria-activedescendant", "sr-" + ddActive); dd.children[ddActive].scrollIntoView({ block: "nearest" }); }
      else qEl.removeAttribute("aria-activedescendant");
    }
    function ddOpen() {
      var q = norm(qEl.value);
      if (!model || !q || !searchBox) { ddClose(); return; }
      ddItems = model.labels.filter(function (l) { return l.search.indexOf(q) >= 0; })
        .sort(function (a, b) { return (a.name.toLowerCase().indexOf(q) === 0 ? 0 : 1) - (b.name.toLowerCase().indexOf(q) === 0 ? 0 : 1); }).slice(0, 6);
      if (!ddItems.length) { ddClose(); return; }
      ddActive = -1;
      dd.innerHTML = ddItems.map(function (l, i) {
        var src = PRODUCT_IMAGES[l.key];
        return '<div class="search-result-item" role="option" id="sr-' + i + '" data-i="' + i + '" aria-selected="false">' +
          (src ? '<img src="' + esc(src) + '" alt="" loading="lazy" width="40" height="56">' : '<span class="result-noimg">' + BOTTLE_SVG + "</span>") +
          '<span class="result-text"><span class="result-name">' + esc(l.name) + '</span><span class="result-price">' + (l.rows.length > 1 ? "From " : "") + money(lowest(l)) +
          ' <span class="result-cat">\u00b7 ' + esc(l.cat) + "</span></span></span></div>";
      }).join("");
      dd.classList.add("active"); qEl.setAttribute("aria-expanded", "true");
    }
    function ddPick(i) { var l = ddItems[i]; ddClose(); if (l) openDetails(l); }
    qEl.addEventListener("input", ddOpen);
    qEl.addEventListener("focus", ddOpen);
    qEl.addEventListener("keydown", function (e) {
      if (!dd.classList.contains("active")) return;
      if (e.key === "ArrowDown") { e.preventDefault(); ddActive = (ddActive + 1) % ddItems.length; ddMark(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); ddActive = ddActive <= 0 ? ddItems.length - 1 : ddActive - 1; ddMark(); }
      else if (e.key === "Enter") { if (ddActive >= 0) { e.preventDefault(); ddPick(ddActive); } else ddClose(); }
      else if (e.key === "Escape") { ddClose(); }
    });
    dd.addEventListener("mousedown", function (e) { e.preventDefault(); });
    dd.addEventListener("click", function (e) { var it = e.target.closest("[data-i]"); if (it) ddPick(+it.getAttribute("data-i")); });
    document.addEventListener("click", function (e) { if (searchBox && !searchBox.contains(e.target)) ddClose(); });
    clearEl.addEventListener("click", ddClose);

    window.addEventListener("popstate", function () { if (model) { state.cat = catFromUrl(); render(); } });
    window.addEventListener("hashchange", function () { if (model) { state.cat = catFromUrl(); syncUrl(); render(); } });

    function showError(kind) {
      $("asof").textContent = "";
      tabsEl.innerHTML = "";
      $("results-title").textContent = "Price list unavailable";
      $("results-summary").textContent = "";
      var msg = kind === "empty" ? "The shop\u2019s price list is empty at the moment." : "The price list didn\u2019t load. Check your connection and try again.";
      out.innerHTML = '<div class="notice"><p class="big">' + esc(msg) + "</p><p>You can still call or WhatsApp us to check what\u2019s on the shelf today.</p>" +
        '<div class="actions"><button type="button" class="btn btn-outline" id="retry">Try again</button>' +
        '<a class="btn btn-dark" target="_blank" rel="noopener" href="' + esc(waLink("Hi, which brands do you have in stock today?")) + '">Ask on WhatsApp</a></div></div>';
      $("retry").addEventListener("click", start);
    }
    function start() {
      out.innerHTML = '<div class="loading" role="status"><div class="spinner"></div>Loading today\u2019s price list\u2026</div>';
      loadCatalogue().then(function (m) {
        if (!m.labels.length) { showError("empty"); return; }
        model = m;
        state.cat = catFromUrl();
        syncUrl();
        if (m.asOf) $("asof").textContent = "Price list updated " + fmtDate(m.asOf) + ".";
        render();
        if (pendingProduct) {
          var l = m.labels.filter(function (x) { return x.key === pendingProduct.toUpperCase() && (state.cat === "All" || x.cat === state.cat); })[0];
          pendingProduct = null;
          if (l) openDetails(l);
        }
      }).catch(function () { showError("error"); });
    }
    if (params.get("focus") === "search") qEl.focus();
    start();
  }

  // Exposed for the test harness only; pages do not rely on it.
  window.NalagolaCatalogue = { buildModel: buildModel, baseName: baseName, displayName: displayName, brandOf: brandOf };

  /* ---------- scroll effects ---------- */
  // 1. Scroll-triggered fade-in. Mapped to the site's classes: .card (product), .cat-card (category), .why > div
  //    (benefit), .store-card, top-level <main> sections and the footer columns. Anything already on screen when it
  //    appears is left alone, so the first view never flashes and the catalogue's cards don't fade again each time a
  //    search or filter redraws them. Cards drawn later (from the price list) are picked up as they arrive.
  // Mobile info strip: "Open till 10 PM" during hours, "Opens at 10 AM" otherwise (shop time, IST)
  function initOpenNote() {
    var el = document.getElementById("open-note");
    if (!el) return;
    var now = new Date(), ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60000), h = ist.getHours();
    el.textContent = h >= 10 && h < 22 ? "\ud83d\udd50 Open till 10 PM" : "\ud83d\udd50 Opens at 10 AM";
  }
  function initScrollFx() {
    // Gold line at the top that fills as the page scrolls
    var bar = document.getElementById("scrollProgress");
    if (bar) {
      var paint = function () {
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0) + "%";
      };
      window.addEventListener("scroll", paint, { passive: true });
      window.addEventListener("resize", paint);
      paint();
    }
    var SEL = ".card, .cat-card, .why > div, .store-card, main > section:not(.hero):not(.cat-head), .site-footer .cols > div";
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if ("IntersectionObserver" in window && !reduce) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.classList.add("is-visible");
          io.unobserve(el);
          // once shown, drop the helper classes so the stagger delay never slows a later hover
          setTimeout(function () { el.classList.remove("fade-target", "is-visible"); }, 900);
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
      var seen = typeof WeakSet === "function" ? new WeakSet() : null;
      var take = function (el) {
        if (seen) { if (seen.has(el)) return; seen.add(el); }
        if (el.getBoundingClientRect().top < window.innerHeight) return;   // already in view: no fade
        el.classList.add("fade-target");
        io.observe(el);
      };
      document.querySelectorAll(SEL).forEach(take);
      if ("MutationObserver" in window) {
        new MutationObserver(function (muts) {
          muts.forEach(function (m) {
            m.addedNodes.forEach(function (n) {
              if (n.nodeType !== 1) return;
              if (n.matches(SEL)) take(n);
              n.querySelectorAll(SEL).forEach(take);
            });
          });
        }).observe(document.body, { childList: true, subtree: true });
      }
    }

    // 2. Lazy-load images: swap in any data-src, and let every image after the first three load lazily
    document.querySelectorAll("img[data-src]").forEach(function (img) {
      img.setAttribute("loading", "lazy");
      img.src = img.getAttribute("data-src");
      img.removeAttribute("data-src");
    });
    document.querySelectorAll("img:not([loading])").forEach(function (img, i) { if (i > 2) img.setAttribute("loading", "lazy"); });

    // 3. Back-to-top button (bottom left; the WhatsApp button is bottom right)
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(btn);
    var onScroll = function () { btn.classList.toggle("visible", window.scrollY > 600); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initChrome();
    initScrollFx();
    initOpenNote();
    var page = document.body.getAttribute("data-page");
    if (page === "home") initHome();
    if (page === "catalogue") initCatalogue();
  });
})();
