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

  // How short codes in the stock sheet read on the website. Same map as the
  // previous catalogue page, plus two names approved for the redesign.
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

  // Product photographs, keyed by the label code (item name without type
  // letter and size). Add a line here only once the image file is in
  // assets/products/ and its source and licence are recorded in
  // product-image-manifest.csv. Labels without a line show "Photo pending".
  var PRODUCT_IMAGES = {
    // "OLD MONK XXX": "assets/products/rum/old-monk-xxx.png",
  };

  // One featured label per category on the homepage. If a label is not in
  // today's price list, the first label of that category is used instead.
  var FEATURED = {
    "Beer": "KINGFISHER ULTRA",
    "Whisky": "RS",
    "Rum": "OLD MONK XXX",
    "Vodka": "MAGIC MOMENT",
    "Gin": "BLUE LAGOON",
    "Country Spirits": "COSMOS FIFTY",
    "Overseas Spirits": "TEACHERS HIGHLAND",
    "Wine": "BRO CODE"
  };

  var CATEGORIES = [
    { name: "Beer", slug: "beer" },
    { name: "Whisky", slug: "whisky" },
    { name: "Rum", slug: "rum" },
    { name: "Vodka", slug: "vodka" },
    { name: "Gin", slug: "gin" },
    { name: "Country Spirits", slug: "country-spirits" },
    { name: "Overseas Spirits", slug: "overseas-spirits" },
    { name: "Wine", slug: "wine" }
  ];
  // The database calls wine "Wines"; the site shows "Wine".
  var CATEGORY_ALIASES = { "Wines": "Wine" };

  // Type letters in stock-sheet item names ("RS W 750"). IML is left out on
  // purpose: it is part of country-spirit names such as "Bazigar IML".
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
  function norm(s) { return String(s).toLowerCase().replace(/[\u2018\u2019]/g, "'"); }
  function baseName(item) {
    var t = String(item).trim().toUpperCase().split(/\s+/);
    // A type letter run into the size with no space ("XCLAMATION W750")
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
  function fmtSize(ml) {
    ml = Number(ml);
    if (!ml) return "";
    return ml >= 1000 ? (ml / 1000).toString() + " L" : ml + " ml";
  }
  var inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  function money(n) { return inr.format(n); }
  function labels(n) { return n === 1 ? "1 label" : n + " labels"; }
  function waLink(msg) { return "https://wa.me/" + SHOP_NUMBER + (msg ? "?text=" + encodeURIComponent(msg) : ""); }

  /* ---------- data ---------- */
  // Turns the RPC rows into categories -> labels -> sizes.
  // Where the same label and size appears more than once with different MRPs,
  // the highest MRP is shown (owner rule: when in doubt, show the higher price).
  function buildModel(rows) {
    var byKey = {}, asOf = null;
    rows.forEach(function (r) {
      if (!r || r.item_name == null) return;
      var cat = CATEGORY_ALIASES[r.category] || r.category || "Other";
      var base = baseName(r.item_name);
      var key = cat + "|" + base;
      var lab = byKey[key] || (byKey[key] = { key: base, name: displayName(base), cat: cat, sizes: {} });
      var ml = Number(r.size_ml) || 0, mrp = Number(r.mrp);
      if (!isFinite(mrp)) return;
      if (!(ml in lab.sizes) || mrp > lab.sizes[ml]) lab.sizes[ml] = mrp;
      if (r.as_of && (!asOf || r.as_of > asOf)) asOf = r.as_of;
    });
    var list = Object.keys(byKey).map(function (k) {
      var l = byKey[k];
      l.rows = Object.keys(l.sizes).map(Number).sort(function (a, b) { return b - a; })
        .map(function (ml) { return { ml: ml, mrp: l.sizes[ml] }; });
      l.search = norm(l.name + " " + l.key + " " + l.cat);
      return l;
    });
    var cats = CATEGORIES.slice();
    list.forEach(function (l) {
      if (!cats.some(function (c) { return c.name === l.cat; })) cats.push({ name: l.cat, slug: slugify(l.cat) });
    });
    var order = cats.map(function (c) { return c.name; });
    list.sort(function (a, b) { return order.indexOf(a.cat) - order.indexOf(b.cat) || a.name.localeCompare(b.name); });
    var sizes = {};
    list.forEach(function (l) { l.rows.forEach(function (r) { if (r.ml) sizes[r.ml] = 1; }); });
    return {
      labels: list,
      cats: cats,
      sizes: Object.keys(sizes).map(Number).sort(function (a, b) { return a - b; }),
      asOf: asOf
    };
  }

  function loadCatalogue() {
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
  function mediaHtml(l) {
    var src = PRODUCT_IMAGES[l.key];
    if (src) {
      return '<div class="media"><img src="' + esc(src) + '" alt="' + esc(l.name) + ' bottle" loading="lazy" decoding="async" width="600" height="600"></div>';
    }
    return '<div class="media">' + BOTTLE_SVG + '<span class="pending">Photo pending</span></div>';
  }

  function productCard(l, hitSize) {
    return '<article class="card">' + mediaHtml(l) +
      '<div class="info"><h4>' + esc(l.name) + '</h4><div class="sizes">' +
      l.rows.map(function (r) {
        return '<div class="size' + (hitSize && r.ml === hitSize ? " hit" : "") + '"><span class="ml">' + esc(fmtSize(r.ml)) +
          '</span><span class="mrp">' + money(r.mrp) + "</span></div>";
      }).join("") + "</div></div></article>";
  }

  /* ---------- page chrome ---------- */
  function initChrome() {
    var yr = document.getElementById("yr");
    if (yr) yr.textContent = new Date().getFullYear();
    var btn = document.getElementById("menu-btn"), nav = document.getElementById("site-nav");
    if (btn && nav) {
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.focus(); }
      });
    }
  }

  /* ---------- homepage ---------- */
  function initHome() {
    var featGrid = document.getElementById("featured-grid");
    var featSection = document.getElementById("featured");
    loadCatalogue().then(function (m) {
      if (!m.labels.length) throw new Error("Empty price list");
      // Category counts on the tiles
      m.cats.forEach(function (c) {
        var el = document.querySelector('[data-count="' + c.slug + '"]');
        if (el) {
          var n = m.labels.filter(function (l) { return l.cat === c.name; }).length;
          el.textContent = n ? labels(n) : "Ask us about availability";
        }
      });
      var total = document.getElementById("label-total");
      if (total) total.textContent = m.labels.length + " labels";
      // Featured: one label per category
      var picks = [];
      CATEGORIES.forEach(function (c) {
        var inCat = m.labels.filter(function (l) { return l.cat === c.name; });
        if (!inCat.length) return;
        var want = FEATURED[c.name];
        picks.push(inCat.filter(function (l) { return l.key === want; })[0] || inCat[0]);
      });
      featGrid.innerHTML = picks.map(function (l) {
        var top = l.rows[0], more = l.rows.length - 1;
        var slug = (CATEGORIES.filter(function (c) { return c.name === l.cat; })[0] || {}).slug || slugify(l.cat);
        return '<a class="card" href="categories.html?q=' + encodeURIComponent(l.name) + "#" + slug + '">' + mediaHtml(l) +
          '<div class="info"><span class="cat">' + esc(l.cat) + "</span><h3>" + esc(l.name) + "</h3>" +
          '<div class="sizes"><div class="size"><span class="ml">' + esc(fmtSize(top.ml)) + '</span><span class="mrp">' + money(top.mrp) + "</span></div></div>" +
          '<span class="more">' + (more ? "+" + more + (more > 1 ? " more sizes" : " more size") : "One size") + "</span></div></a>";
      }).join("");
      featSection.hidden = false;
      var asof = document.getElementById("feat-asof");
      if (asof && m.asOf) asof.textContent = "MRP from the shop\u2019s price list, updated " + fmtDate(m.asOf) + ".";
    }).catch(function () {
      // Price list unavailable: keep the tiles, drop counts and the featured row.
      document.querySelectorAll("[data-count]").forEach(function (el) { el.textContent = "See the range"; });
      if (featSection) featSection.hidden = true;
    });
  }

  /* ---------- catalogue page ---------- */
  function initCatalogue() {
    var state = { cat: "All", q: "", size: 0 };
    var model = null;
    var $ = function (id) { return document.getElementById(id); };
    var out = $("catalogue"), tabsEl = $("tabs"), pillsEl = $("size-pills"), selectEl = $("size-select");
    var qEl = $("search"), clearEl = $("clear"), headEl = $("results-title"), sumEl = $("results-summary");

    // Starting state from the link: categories.html?q=Old%20Monk#rum
    var params = new URLSearchParams(location.search);
    if (params.get("q")) state.q = params.get("q");
    qEl.value = state.q;

    function catFromHash() {
      var h = decodeURIComponent(location.hash.replace(/^#/, "")).toLowerCase();
      if (!h || !model) return "All";
      var c = model.cats.filter(function (x) { return x.slug === h; })[0];
      return c ? c.name : "All";
    }
    function setCat(name, push) {
      state.cat = name;
      if (push) {
        var slug = name === "All" ? "" : (model.cats.filter(function (c) { return c.name === name; })[0] || {}).slug;
        history.replaceState(null, "", location.pathname + location.search + (slug ? "#" + slug : ""));
      }
      render();
    }

    function renderControls() {
      var tabs = [{ name: "All", n: model.labels.length }].concat(model.cats.map(function (c) {
        return { name: c.name, n: model.labels.filter(function (l) { return l.cat === c.name; }).length };
      }).filter(function (t) { return t.n; }));
      tabsEl.innerHTML = tabs.map(function (t) {
        return '<button type="button" class="tab" data-cat="' + esc(t.name) + '" aria-pressed="' + (t.name === state.cat) + '">' +
          esc(t.name) + '<span class="n">' + t.n + "</span></button>";
      }).join("");
      var opts = [0].concat(model.sizes);
      pillsEl.innerHTML = opts.map(function (s) {
        return '<button type="button" class="pill" data-size="' + s + '" aria-pressed="' + (s === state.size) + '">' + (s ? esc(fmtSize(s)) : "All sizes") + "</button>";
      }).join("");
      selectEl.innerHTML = opts.map(function (s) {
        return '<option value="' + s + '"' + (s === state.size ? " selected" : "") + ">" + (s ? esc(fmtSize(s)) : "All sizes") + "</option>";
      }).join("");
    }

    function render() {
      if (!model) return;
      renderControls();
      clearEl.hidden = !state.q;
      var q = norm(state.q.trim());
      var hits = model.labels.filter(function (l) {
        return (state.cat === "All" || l.cat === state.cat) &&
          (!q || l.search.indexOf(q) >= 0) &&
          (!state.size || l.rows.some(function (r) { return r.ml === state.size; }));
      });
      headEl.textContent = state.cat === "All" ? "All categories" : state.cat;
      sumEl.textContent = labels(hits.length) + " shown of " + model.labels.length;
      if (!hits.length) {
        var why = state.q ? "Nothing matches \u201c" + state.q + "\u201d" : "Nothing in that size here";
        out.innerHTML = '<div class="notice"><p class="big">' + esc(why) + "</p>" +
          "<p>Try another name or size, or ask us on WhatsApp whether we can get it.</p>" +
          '<div class="actions"><button type="button" class="btn btn-outline" id="reset">Show everything</button>' +
          '<a class="btn btn-wine" target="_blank" rel="noopener" href="' + esc(waLink(state.q ? "Hi, do you have " + state.q + "?" : "")) + '">Ask on WhatsApp</a></div></div>';
        $("reset").addEventListener("click", function () {
          state.q = ""; state.size = 0; qEl.value = ""; setCat("All", true);
        });
        return;
      }
      out.innerHTML = model.cats.map(function (c) {
        var items = hits.filter(function (l) { return l.cat === c.name; });
        if (!items.length) return "";
        // With one category selected the page heading already names it.
        var head = state.cat === "All"
          ? '<div class="group-head"><h3 id="h-' + esc(c.slug) + '">' + esc(c.name) + "</h3><span>" + labels(items.length) + "</span></div>"
          : '<h3 class="sr-only" id="h-' + esc(c.slug) + '">' + esc(c.name) + "</h3>";
        return '<section class="group" id="group-' + esc(c.slug) + '" aria-labelledby="h-' + esc(c.slug) + '">' + head + '<div class="prod-grid">' +
          items.map(function (l) { return productCard(l, state.size); }).join("") + "</div></section>";
      }).join("");
    }

    function showError(kind) {
      $("asof").textContent = "";
      tabsEl.innerHTML = ""; pillsEl.innerHTML = ""; selectEl.innerHTML = '<option value="0">All sizes</option>';
      headEl.textContent = "Price list unavailable";
      sumEl.textContent = "";
      var msg = kind === "empty"
        ? "The shop\u2019s price list is empty at the moment."
        : "The price list didn\u2019t load. Check your connection and reload the page.";
      out.innerHTML = '<div class="notice"><p class="big">' + esc(msg) + "</p>" +
        "<p>You can still call or WhatsApp us to check what\u2019s on the shelf today.</p>" +
        '<div class="actions"><button type="button" class="btn btn-outline" id="retry">Try again</button>' +
        '<a class="btn btn-wine" target="_blank" rel="noopener" href="' + esc(waLink("Hi, which brands do you have in stock today?")) + '">Ask on WhatsApp</a></div></div>';
      $("retry").addEventListener("click", start);
    }

    // Events
    tabsEl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]"); if (b) setCat(b.getAttribute("data-cat"), true);
    });
    pillsEl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-size]"); if (b) { state.size = Number(b.getAttribute("data-size")); render(); }
    });
    selectEl.addEventListener("change", function () { state.size = Number(selectEl.value); render(); });
    qEl.addEventListener("input", function () { state.q = qEl.value; render(); });
    clearEl.addEventListener("click", function () { state.q = ""; qEl.value = ""; render(); qEl.focus(); });
    window.addEventListener("hashchange", function () { if (model) { state.cat = catFromHash(); render(); } });

    function start() {
      out.innerHTML = '<div class="loading" role="status"><div class="spinner"></div>Loading today\u2019s price list\u2026</div>';
      loadCatalogue().then(function (m) {
        if (!m.labels.length) { showError("empty"); return; }
        model = m;
        state.cat = catFromHash();
        if (m.asOf) $("asof").textContent = "Price list updated " + fmtDate(m.asOf) + ".";
        render();
      }).catch(function () { showError("error"); });
    }
    start();
  }

  // Exposed for the test harness only; pages do not rely on it.
  window.NalagolaCatalogue = { buildModel: buildModel, baseName: baseName, displayName: displayName };

  document.addEventListener("DOMContentLoaded", function () {
    initChrome();
    var page = document.body.getAttribute("data-page");
    if (page === "home") initHome();
    if (page === "catalogue") initCatalogue();
  });
})();
