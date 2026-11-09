/* ==========================================================================
   MAISON IVOIRE — application script
   Plain JavaScript, no build step, works when opened straight from disk.
   Sections: 1. Data  2. Helpers  3. Storage  4. Templates  5. Cart & wishlist
             6. Page renderers  7. Shared UI  8. Boot
   ========================================================================== */
(function () {
  "use strict";

  /* language layer (js/i18n.js): t("English text") returns the visitor's language */
  var I = window.I18N || { t: function (s, v) { if (v) for (var k in v) s = s.split("{" + k + "}").join(v[k]); return s; },
    plural: function (n) { return n + (n === 1 ? " product" : " products"); }, product: function () { return null; } };
  var t = I.t;

  /* 1. DATA ---------------------------------------------------------------
     To add or edit a product, change this list only.
     category: serum | moisturizer | cleanser | makeup | body | fragrance | hair
     tag:      best | new          oldPrice: optional (shows a sale badge)  */
  var PRODUCTS = [
    { id: "lumiere", concerns: ["renewal", "firming", "radiance"], name: "Lumière Renewal Serum",   desc: "Bakuchiol & golden peptide night serum",  price: 128, size: "30 ml",  category: "serum",       tag: "best", img: "b1.jpg", rating: 5,
      long: "A silky night serum pairing bakuchiol with golden peptides to visibly smooth texture while you sleep. Gentle enough for daily use." },
    { id: "velours", concerns: ["hydration", "sensitive"], name: "Velours Rich Cream",      desc: "Ceramide barrier cream with shea butter", price: 96,  size: "50 ml",  category: "moisturizer", tag: "best", img: "b2.jpg", rating: 5,
      long: "A rich, cocooning cream with ceramides and cold-pressed shea butter that restores the skin barrier without feeling greasy." },
    { id: "clarte", concerns: ["sensitive", "hydration"],  name: "Clarté Gel Cleanser",     desc: "Gentle amino acid daily cleanser",        price: 42,  size: "150 ml", category: "cleanser",    tag: "best", img: "b3.jpg", rating: 5,
      long: "A gentle amino-acid gel that melts away the day while leaving skin soft and comfortable." },
    { id: "nuit", concerns: ["renewal", "radiance"],    name: "Nuit Overnight Mask",     desc: "Lavender & PHA resurfacing mask",         price: 88,  size: "50 ml",  category: "moisturizer", tag: "best", img: "b4.jpg", rating: 5,
      long: "A lavender and PHA overnight mask that gently resurfaces while you sleep for a smoother morning glow." },
    { id: "rose", concerns: ["radiance", "hydration"],    name: "Rose Absolue Facial Oil", desc: "Damask rose & rosehip glow oil",          price: 84,  oldPrice: 105, size: "30 ml", category: "serum", tag: "new", img: "n1.jpg", rating: 4.5,
      long: "A glow oil of Damask rose and rosehip, pressed in as the last step for a luminous, cushioned finish." },
    { id: "soie", concerns: ["radiance"],    name: "Soie Satin Lipstick",     desc: "Nude Rosé — refillable satin colour",     price: 48,  size: "3.5 g",  category: "makeup",      tag: "new", img: "n2.jpg", rating: 4.5,
      long: "A refillable satin lipstick in Nude Rosé with comfortable, creamy colour." },
    { id: "silk", concerns: ["radiance"],    name: "Ivoire Silk Foundation",  desc: "Second-skin serum foundation SPF 20",     price: 64,  size: "30 ml",  category: "makeup",      tag: "new", img: "n3.jpg", rating: 4.5,
      long: "A second-skin serum foundation with SPF 20 that evens tone and leaves a natural, radiant finish." },
    { id: "eclat", concerns: ["firming", "radiance"],   name: "Éclat Eye Cream",         desc: "Caffeine & chamomile depuffing balm",     price: 72,  oldPrice: 88, size: "15 ml", category: "moisturizer", tag: "new", img: "n4.jpg", rating: 5,
      long: "A depuffing balm with caffeine and chamomile to brighten and refresh the eye area." },
    { id: "aube", concerns: ["hydration", "sensitive"],    name: "Aube Hydrating Mist",     desc: "Eucalyptus & hyaluronic dawn mist", price: 38,  size: "100 ml", category: "cleanser",    tag: "new", img: "n5.jpg", rating: 4.5,
      long: "A fine, refreshing mist of eucalyptus and hyaluronic acid that rehydrates skin throughout the day." },
    { id: "ambre", concerns: ["hydration", "radiance"],   name: "Ambre Body Elixir",       desc: "Amber, neroli & marula body oil",         price: 58,  oldPrice: 72, size: "200 ml", category: "body", tag: "new", img: "n6.jpg", rating: 5,
      long: "A silky dry body oil of amber, neroli and marula that melts in, leaving skin soft with a quiet golden glow." },
    { id: "revitalift", concerns: ["firming", "renewal", "hydration"], name: "Revitalift Filler Day Cream", desc: "Hyaluronic filler day cream for firmer skin", price: 54, size: "50 ml", category: "moisturizer", tag: "", img: "revitalift.jpg", rating: 4.5,
      long: "A daytime cream with hyaluronic acid that plumps and visibly refills fine lines, leaving skin smoother, firmer and comfortably hydrated." },
    { id: "uomo", concerns: [], name: "Uomo Felice Eau de Toilette", desc: "Warm, spicy-woody everyday fragrance", price: 38, size: "30 ml", category: "fragrance", tag: "", img: "uomo.jpg", rating: 4.5,
      long: "A warm, spicy-woody eau de toilette in a clean glass flacon, easy to wear from morning through evening." },
    { id: "heart", concerns: ["radiance"], name: "The One Heart & Hue Lipstick", desc: "Creamy satin lip colour in a rosy nude", price: 22, size: "3.5 g", category: "makeup", tag: "", img: "heart.jpg", rating: 4.5,
      long: "A creamy, comfortable satin lipstick in a wearable rosy nude that glides on evenly and leaves lips soft." },
    { id: "everlasting", concerns: ["radiance"], name: "The One Everlasting Sync Foundation", desc: "Stress-free foundation with SPF 20 + UVA", price: 46, size: "30 ml", category: "makeup", tag: "", img: "everlasting.jpg", rating: 4.5,
      long: "A comfortable, long-wearing liquid foundation with SPF 20 and UVA protection for an even, natural finish." },
    { id: "variete", concerns: ["radiance"], name: "Variété Lashes Show Mascara", desc: "Full-volume, ultra-length black mascara", price: 24, size: "10 g", category: "makeup", tag: "", img: "variete.jpg", rating: 4.5,
      long: "A black mascara that lengthens and builds full volume with a flexible brush, for a dramatic lash look that lasts." },
    { id: "neutrogena", concerns: ["sensitive", "renewal"], name: "Neutrogena Salicylic Acid Cleansing Gel", desc: "2% salicylic acid gel cleanser for blemish-prone skin", price: 16, size: "200 ml", category: "cleanser", tag: "", img: "neutrogena.jpg", rating: 4.5,
      long: "An oil-free 2% salicylic acid cleansing gel that deeply cleans pores while respecting the skin's natural balance, for daily use on blemish-prone skin." },
    { id: "spacelatte", concerns: ["renewal", "radiance"], name: "Space Latte Young Facial Scrub", desc: "Gentle facial scrub for intensive cleansing", price: 9, size: "100 ml", category: "cleanser", tag: "", img: "spacelatte.jpg", rating: 4.5,
      long: "A facial scrub that intensively cleanses, helps fight blackheads and polishes the skin without irritating it." },
    { id: "baregrape", concerns: ["radiance"], name: "Lip Tint #25 Bare Grape", desc: "Glossy tinted lip colour in a soft grape-pink", price: 14, size: "4 g", category: "makeup", tag: "new", img: "baregrape.jpg", rating: 5,
      long: "A glossy, lightweight lip tint in the soft grape-pink shade Bare Grape, with a doe-foot applicator for easy, precise colour." },
    { id: "medipeel", concerns: ["renewal", "sensitive"], name: "Medi-Peel Algo-Tox Deep Clear", desc: "Bubble cleanser with wheat sprout extract", price: 20, size: "150 ml", category: "cleanser", tag: "", img: "medipeel.jpg", rating: 4.5,
      long: "A high-concentration bubble cleanser with wheat sprout extract that removes make-up and fine impurities while gently exfoliating for a glowing look." },
    { id: "vivienne", concerns: ["radiance"], name: "Vivienne Sabó Satin Lipstick", desc: "Creamy lipstick in a soft nude", price: 18, size: "3.5 g", category: "makeup", tag: "", img: "vivienne.jpg", rating: 4.5,
      long: "A creamy lipstick in a soft, wearable nude shade, presented in a gold case with a mint cap." },
    { id: "lushsilk", concerns: ["hydration", "renewal"], name: "Vitex Lush Silk Hair Keratin Serum", desc: "Leave-in keratin & lipido-protein hair serum", price: 15, size: "50 ml", category: "hair", tag: "", img: "lushsilk.jpg", rating: 4.5,
      long: "A leave-in keratin hair serum with a lipido-protein complex for deep repair, smoother, shinier and stronger-looking hair." },
    { id: "wonderlash", concerns: ["radiance"], name: "The One Wonder Lash 2-in-1 Mascara", desc: "Volume & length mascara with two brushes", price: 19, size: "8 g", category: "makeup", tag: "", img: "wonderlash.jpg", rating: 5,
      long: "A 2-in-1 mascara with two interchangeable brushes — one for dramatic volume, one for length — so you can build the lash look you want." },
    { id: "brushset", concerns: [], name: "Soft Touch 7-Piece Brush Set", desc: "Mini makeup brush set in a soft beige", price: 12, size: "7 pcs", category: "makeup", tag: "new", img: "brushset.jpg", rating: 4.5,
      long: "A compact set of seven soft-bristle brushes for powder, blush, shadow and brows, with a spoolie for finishing. Light enough to travel with." },
    { id: "browmascara", concerns: ["radiance"], name: "Suake Brow & Lash Mascara", desc: "Slim-wand black mascara with a precise brush", price: 11, size: "5 g", category: "makeup", tag: "new", img: "browmascara.jpg", rating: 4.5,
      long: "A black mascara with a fine, precise wand that separates and defines lashes and brows for a neat, natural look." },
    { id: "kaoyo", concerns: ["hydration", "renewal"], name: "Kaoyo Snail Moisturizing Face Cream", desc: "Light snail-extract cream for supple skin", price: 8, size: "50 ml", category: "moisturizer", tag: "", img: "kaoyo.jpg", rating: 4.5,
      long: "A light, creamy moisturizer with snail extract that hydrates and softens skin, leaving it smooth and comfortable through the day." },
    { id: "prettyskin", concerns: ["hydration", "sensitive"], name: "Pretty Skin Super Aqua Sun Cream", desc: "Lightweight hydrating sunscreen SPF 50+ PA++++", price: 14, size: "50 ml", category: "moisturizer", tag: "best", img: "prettyskin.jpg", rating: 4.5,
      long: "A lightweight, water-like sun cream with SPF 50+ PA++++ that hydrates while protecting against UVA and UVB, with no heavy residue under makeup." },
    { id: "joseon", concerns: ["sensitive", "hydration"], name: "Beauty of Joseon Relief Sun: Rice + Probiotics", desc: "Gentle daily sunscreen SPF 50+ PA++++", price: 18, size: "50 ml", category: "moisturizer", tag: "best", img: "joseon.jpg", rating: 5,
      long: "A gentle daily sunscreen with rice extract and probiotics, SPF 50+ PA++++, that soothes the skin and leaves a soft, non-sticky finish." },
    { id: "irisgoat", concerns: ["hydration", "firming"], name: "Iris Phytotherapy Goat Milk Face Cream", desc: "Nourishing face cream with goat milk", price: 6, size: "150 ml", category: "moisturizer", tag: "", img: "irisgoat.jpg", rating: 4.5,
      long: "A nourishing face cream with goat milk that actively feeds, hydrates and softens the skin and helps it look younger and more supple." },
    { id: "eyepalette", concerns: ["radiance"], name: "Nude Eye Palette — 9 Shades", desc: "Nine warm nude and glitter eyeshadows", price: 15, size: "9 g", category: "makeup", tag: "new", img: "eyepalette.jpg", rating: 4.5,
      long: "A nine-pan eyeshadow palette of warm nudes, rosy browns and glittering shimmers, for soft everyday looks or a deeper evening eye." }
  ];

  var CONCERNS = {
    radiance: "Radiance",
    hydration: "Hydration",
    firming: "Firming",
    sensitive: "Sensitive skin",
    renewal: "Renewal"
  };

  var CATEGORIES = {
    serum: "Serums & Oils",
    moisturizer: "Moisturizers",
    cleanser: "Cleansers & Mists",
    makeup: "Makeup",
    body: "Body",
    fragrance: "Fragrance",
    hair: "Hair"
  };

  PRODUCTS.forEach(function (p) {
    p.en = { desc: p.desc, long: p.long };          /* keep English for search */
    var tr = I.product(p.id);
    if (tr) { p.desc = tr.desc; p.long = tr.long; }
  });
  [CONCERNS, CATEGORIES].forEach(function (map) {
    Object.keys(map).forEach(function (k) { map[k] = t(map[k]); });
  });

  var PROMO_CODE = "IVOIRE20";
  var PROMO_RATE = 0.20;
  var FREE_SHIPPING_FROM = 120;
  var SHIPPING_FEE = 8;

  /* 2. HELPERS ------------------------------------------------------------ */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function money(n) { return "$" + n.toFixed(2); }
  function find(id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0] || null; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* sizes: ml products come in 30/50/100/150 ml; price scales with volume (bigger = better value per ml) */
  var SIZE_OPTIONS = [30, 50, 100, 150];
  function baseMl(p) { var m = /^(\d+(?:\.\d+)?)\s*ml$/i.exec(p.size); return m ? parseFloat(m[1]) : 0; }
  function sizesFor(p) {
    var b = baseMl(p);
    if (!b) return [];
    var list = SIZE_OPTIONS.slice();
    if (list.indexOf(b) < 0) list.push(b);
    return list.sort(function (x, y) { return x - y; });
  }
  function scalePrice(p, v, ml) {
    var b = baseMl(p);
    if (!b || !ml || ml === b) return v;
    return Math.round(v * Math.pow(ml / b, 0.85));
  }
  function priceFor(p, ml) { return scalePrice(p, p.price, ml); }
  function oldPriceFor(p, ml) { return p.oldPrice ? scalePrice(p, p.oldPrice, ml) : 0; }
  function unit(s) { return String(s).replace(/ ml$/, " " + t("ml")).replace(/ g$/, " " + t("g")); }
  function sizeLabel(p, ml) { return ml ? ml + " " + t("ml") : unit(p.size); }
  function discount(p) { return p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0; }
  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  var params = new URLSearchParams(window.location.search);
  var page = document.body.getAttribute("data-page");

  /* 3. STORAGE (safe even if the browser blocks localStorage) -------------- */
  function load(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  }
  var cart = load("ivoire_cart", []);
  var wishlist = load("ivoire_wishlist", []);
  var promo = load("ivoire_promo2", "");

  /* 4. TEMPLATES ---------------------------------------------------------- */
  var ICON = {
    heart: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/></svg>',
    arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>',
    close: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };

  function stars(rating) {
    return '<span class="stars" style="--rating:' + rating + '" role="img" aria-label="' + t("Rated {n} out of 5", { n: rating }) + '"></span>';
  }

  function card(p) {
    var off = discount(p);
    var badge = off ? '<span class="tag tag--sale">−' + off + '%</span>'
      : p.tag === "new" ? '<span class="tag tag--new">' + t("New") + '</span>'
      : p.tag === "best" ? '<span class="tag">' + t("Bestseller") + '</span>' : "";
    var on = wishlist.indexOf(p.id) > -1;
    return '<article class="product-card" data-id="' + p.id + '">' +
      '<div class="product-card__media">' +
        '<a href="product.html?id=' + p.id + '" aria-label="' + esc(p.name) + '"><img class="product-card__img" src="img/' + p.img + '" alt="' + esc(p.name) + '" width="632" height="790">' +
          '<img class="product-card__alt" src="img/' + p.img.replace(/\.\w+$/, "-hover.jpg") + '" alt="" width="632" height="790" loading="lazy" aria-hidden="true"></a>' +
        badge +
        '<button type="button" class="wish-btn' + (on ? ' is-on' : '') + '" data-action="wish" aria-pressed="' + on + '" aria-label="' + esc(t("Save {n} to wishlist", { n: p.name })) + '">' + ICON.heart + '</button>' +
        '<button type="button" class="quick-add" data-action="add">' + t("+ Add to bag") + '</button>' +
      '</div>' +
      '<div class="product-card__body">' + stars(p.rating) +
        '<h3 class="product-card__name"><a href="product.html?id=' + p.id + '">' + esc(p.name) + '</a></h3>' +
        '<p class="product-card__desc">' + esc(p.desc) + '</p>' +
        '<p class="product-card__price"><span>' + money(p.price) + '</span>' +
          (p.oldPrice ? '<s>' + money(p.oldPrice) + '</s>' : '') +
          '<small>' + esc(unit(p.size)) + '</small></p>' +
      '</div></article>';
  }

  /* 5. CART & WISHLIST ---------------------------------------------------- */
  function toast(message) {
    var el = $(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("is-on");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("is-on"); }, 1900);
  }

  function updateCount() {
    var n = cart.reduce(function (sum, i) { return sum + i.qty; }, 0);
    $$("[data-cart-count]").forEach(function (el) { el.textContent = n || ""; });
    var w = wishlist.length;
    $$("[data-wish-count]").forEach(function (el) { el.textContent = w || ""; });
  }

  function addToCart(id, qty, ml) {
    var line = cart.filter(function (i) { return i.id === id && (i.ml || 0) === (ml || 0); })[0];
    if (line) line.qty += qty || 1; else cart.push({ id: id, qty: qty || 1, ml: ml || 0 });
    save("ivoire_cart", cart);
    updateCount();
    toast(t("Added to your bag"));
  }

  function toggleWish(id) {
    var has = wishlist.indexOf(id) > -1;
    wishlist = has ? wishlist.filter(function (x) { return x !== id; }) : wishlist.concat(id);
    save("ivoire_wishlist", wishlist);
    updateCount();
    paintWishButtons();
    if (page === "wishlist") renderWishlist();
    toast(t(has ? "Removed from wishlist" : "Saved to wishlist"));
  }

  function paintWishButtons() {
    $$(".product-card").forEach(function (c) {
      var b = $(".wish-btn", c);
      if (!b) return;
      var on = wishlist.indexOf(c.getAttribute("data-id")) > -1;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }

  /* Product-card clicks (event delegation, works for every grid) */
  document.addEventListener("click", function (e) {
    var action = e.target.closest("[data-action]");
    var cardEl = e.target.closest(".product-card");
    if (action && cardEl) {
      e.preventDefault();
      var id = cardEl.getAttribute("data-id");
      if (action.getAttribute("data-action") === "wish") toggleWish(id);
      if (action.getAttribute("data-action") === "add") addToCart(id, 1);
      return;
    }
    if (cardEl && !e.target.closest("a")) {
      window.location.href = "product.html?id=" + cardEl.getAttribute("data-id");
    }
  });

  /* 6. PAGE RENDERERS ----------------------------------------------------- */
  function renderHome() {
    var best = $("[data-products='best']");
    if (best) best.innerHTML = PRODUCTS.filter(function (p) { return p.tag === "best"; }).map(card).join("");
    var fresh = $("[data-products='new']");
    if (fresh) {
      fresh.innerHTML = PRODUCTS.filter(function (p) { return p.tag === "new"; }).map(card).join("");
      setupCarousel();
    }
  }

  function setupCarousel() {
    var track = $(".carousel__track");
    if (!track) return;
    var prev = $("[data-carousel='prev']");
    var next = $("[data-carousel='next']");
    function step() { var c = $(".product-card", track); return c ? c.offsetWidth + 32 : 300; }
    function sync() {
      if (prev) prev.disabled = track.scrollLeft <= 4;
      if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    }
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();

    /* mouse drag-to-scroll (touch and trackpad already scroll natively) */
    var down = false, moved = false, startX = 0, startLeft = 0;
    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) { moved = true; track.classList.add("is-dragging"); }
      if (moved) track.scrollLeft = startLeft - dx;
    });
    window.addEventListener("pointerup", function () {
      if (!down) return;
      down = false;
      track.classList.remove("is-dragging");
    });
    /* a drag must not open the product or fire buttons */
    track.addEventListener("click", function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
    }, true);
    track.addEventListener("dragstart", function (e) { e.preventDefault(); });
  }

  function renderShop() {
    var cat = params.get("c"), filter = params.get("f"), q = (params.get("q") || "").trim();
    var titles = { best: t("The <em>bestsellers</em>"), new: t("New &amp; <em>noteworthy</em>"), offers: t("The <em>offers</em>") };
    var title = q ? t("Results for") + " <em>“" + esc(q) + "”</em>"
      : filter && titles[filter] ? titles[filter] : "";
    var titleEl = $("#shop-title");
    titleEl.innerHTML = title;
    $("#shop-intro").classList.toggle("is-empty", !title);
    if (!title) titleEl.hidden = true;

    /* category tabs */
    $("#shop-tabs").innerHTML = '<a class="shop__tab' + (!cat ? " is-active" : "") + '" href="shop.html">' + t("All") + '</a>' +
      Object.keys(CATEGORIES).map(function (k) {
        return '<a class="shop__tab' + (cat === k ? " is-active" : "") + '" href="shop.html?c=' + k + '">' + CATEGORIES[k] + "</a>";
      }).join("");

    /* skin-concern checkboxes */
    $("#concern-list").innerHTML = Object.keys(CONCERNS).map(function (k) {
      return '<label class="check"><input type="checkbox" value="' + k + '"><span class="check__box" aria-hidden="true"></span><span>' + CONCERNS[k] + "</span></label>";
    }).join("");

    /* price slider: from the cheapest product (rounded down) to the dearest (rounded up) */
    var prices = PRODUCTS.map(function (p) { return p.price; });
    var lo = Math.floor(Math.min.apply(null, prices) / 10) * 10, hi = Math.ceil(Math.max.apply(null, prices) / 10) * 10;
    var range = $("#price-range");
    range.min = lo; range.max = hi; range.step = 1; range.value = hi;
    function paintRange() {
      var pct = (range.value - lo) / (hi - lo) * 100;
      range.style.setProperty("--fill", pct + "%");
      $("#price-out").textContent = t("Up to {n}", { n: money(+range.value) });
    }

    var offersBox = $("#offers-only");
    offersBox.checked = filter === "offers";

    function draw() {
      var picked = $$("#concern-list input:checked").map(function (c) { return c.value; });
      var max = +range.value, offersOnly = offersBox.checked;
      var list = PRODUCTS.filter(function (p) {
        if (cat && p.category !== cat) return false;
        if ((filter === "best" || filter === "new") && p.tag !== filter) return false;
        if (q && (p.name + " " + p.en.desc + " " + p.desc).toLowerCase().indexOf(q.toLowerCase()) < 0) return false;
        if (picked.length && !picked.some(function (c) { return (p.concerns || []).indexOf(c) > -1; })) return false;
        if (p.price > max) return false;
        if (offersOnly && !p.oldPrice) return false;
        return true;
      });
      var sort = $("#sort").value;
      if (sort === "asc") list.sort(function (a, b) { return a.price - b.price; });
      if (sort === "desc") list.sort(function (a, b) { return b.price - a.price; });
      $("#shop-count").textContent = I.plural(list.length);
      $("#shop-grid").innerHTML = list.length ? list.map(card).join("")
        : '<p class="empty">' + t("Nothing matches these filters.") + ' <a href="shop.html">' + t("See the full collection") + '</a></p>';
      paintWishButtons();
    }
    range.addEventListener("input", function () { paintRange(); draw(); });
    $("#concern-list").addEventListener("change", draw);
    offersBox.addEventListener("change", draw);
    $("#sort").addEventListener("change", draw);
    paintRange();
    draw();
  }

  function renderProduct() {
    var p = find(params.get("id")) || PRODUCTS[0];
    var qty = 1;
    document.title = p.name + " — Maison Ivoire";
    var on = wishlist.indexOf(p.id) > -1;
    var off = discount(p);
    var badge = off ? '<span class="pdp__badge pdp__badge--sale">−' + off + '%</span>'
      : p.tag === "new" ? '<span class="pdp__badge pdp__badge--new">' + t("New") + '</span>'
      : p.tag === "best" ? '<span class="pdp__badge">' + t("Bestseller") + '</span>' : "";
    var imgs = [p.img, p.img.replace(/\.\w+$/, "-hover.jpg")];
    var sizes = sizesFor(p);
    var ml = baseMl(p);
    var chips = (sizes.length ? "" : '<li>' + esc(unit(p.size)) + '</li>') + (p.concerns || []).map(function (c) { return '<li>' + esc(CONCERNS[c]) + '</li>'; }).join("");
    var svg = function (d) { return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; };

    $("#crumbs").innerHTML = '<a href="index.html">' + t("Home") + '</a><span aria-hidden="true">/</span><a href="shop.html">' + t("Shop") + '</a><span aria-hidden="true">/</span>' +
      '<a href="shop.html?c=' + p.category + '">' + esc(CATEGORIES[p.category]) + '</a><span aria-hidden="true">/</span><span aria-current="page">' + esc(p.name) + '</span>';

    $("#product").innerHTML =
      '<div class="pdp__gallery">' +
        '<ul class="pdp__thumbs" aria-label="' + t("Product images") + '">' + imgs.map(function (src, n) {
          return '<li><button type="button" class="pdp__thumb' + (n === 0 ? " is-active" : "") + '" data-src="img/' + src + '" aria-label="' + t("Show image {n}", { n: n + 1 }) + '"><img src="img/' + src + '" alt="" width="80" height="100"></button></li>';
        }).join("") + '</ul>' +
        '<div class="pdp__media" id="pdp-media"><img id="pdp-main" src="img/' + p.img + '" alt="' + esc(p.name) + '" width="632" height="790"></div>' +
      '</div>' +
      '<div class="pdp__info">' +
        '<div class="pdp__top"><p class="eyebrow">' + esc(CATEGORIES[p.category]) + '</p>' + badge + '</div>' +
        '<h1 class="pdp__title">' + esc(p.name) + '</h1>' +
        '<div class="pdp__rate">' + stars(p.rating) + '<span>' + p.rating.toFixed(1) + '</span></div>' +
        '<p class="pdp__text">' + esc(p.long) + '</p>' +
        (sizes.length ? '<div class="pdp__sizes" role="radiogroup" aria-label="' + t("Size") + '">' + sizes.map(function (s) {
          return '<button type="button" class="pdp__size' + (s === ml ? ' is-active' : '') + '" role="radio" aria-checked="' + (s === ml) + '" data-ml="' + s + '">' + s + ' ' + t("ml") + '</button>';
        }).join("") + '</div>' : '') +
        '<ul class="pdp__chips">' + chips + '</ul>' +
        '<p class="pdp__price"><span id="price-now">' + money(priceFor(p, ml)) + '</span>' +
          '<s id="price-old">' + (p.oldPrice ? money(oldPriceFor(p, ml)) : '') + '</s></p>' +
        '<div class="pdp__buy">' +
          '<button type="button" class="btn pdp__add" id="buy"><span>' + t("Add to bag") + '</span><span id="buy-price">' + money(priceFor(p, ml)) + '</span></button>' +
          '<button type="button" class="pdp__wish' + (on ? " is-on" : "") + '" id="wish-product" aria-pressed="' + on + '" aria-label="' + t(on ? "Remove from wishlist" : "Save to wishlist") + '">' + ICON.heart + '</button>' +
        '</div>' +
        '<ul class="pdp__perks">' +
          '<li>' + svg('<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/>') + '<span>' + t("Free shipping over $120") + '</span></li>' +
          '<li>' + svg('<path d="M4 12a8 8 0 1 0 3-6.2M4 4v4.5h4.5"/>') + '<span>' + t("30-day returns") + '</span></li>' +
          '<li>' + svg('<path d="M12 21c-5-3.5-7-7-7-11a7 7 0 0 1 14 0c0 4-2 7.5-7 11z"/><path d="M9 10.5l2 2 4-4"/>') + '<span>' + t("Cruelty-free · Refillable") + '</span></li>' +
        '</ul>' +
        '<div class="pdp__acc">' +
          '<details><summary>' + t("Shipping &amp; returns") + '</summary><p>' + t("Free standard shipping on orders over $120, otherwise {fee}. Not right for you? Return it within 30 days.", { fee: money(SHIPPING_FEE) }) + '</p></details>' +
          '<details><summary>' + t("Our promise") + '</summary><p>' + t("Cruelty-free, refillable and made in France.") + '</p></details>' +
        '</div>' +
      '</div>';

    /* gallery: thumbnails swap the main image with a soft fade */
    var main = $("#pdp-main"), media = $("#pdp-media");
    $$(".pdp__thumb").forEach(function (t) {
      t.addEventListener("click", function () {
        if (t.classList.contains("is-active")) return;
        $$(".pdp__thumb").forEach(function (x) { x.classList.toggle("is-active", x === t); });
        main.classList.add("is-fading");
        setTimeout(function () { main.src = t.getAttribute("data-src"); main.classList.remove("is-fading"); }, 180);
      });
    });

    function paintPrice() {
      $("#buy-price").textContent = money(priceFor(p, ml) * qty);
      $("#price-now").textContent = money(priceFor(p, ml));
      if (p.oldPrice) $("#price-old").textContent = money(oldPriceFor(p, ml));
      var st = $("#size-text"); if (st) st.textContent = sizeLabel(p, ml);
    }
    var paintQty = paintPrice;
    $$(".pdp__size").forEach(function (b) {
      b.addEventListener("click", function () {
        ml = parseFloat(b.getAttribute("data-ml"));
        $$(".pdp__size").forEach(function (x) {
          var on = x === b;
          x.classList.toggle("is-active", on);
          x.setAttribute("aria-checked", String(on));
        });
        paintPrice();
      });
    });
    $("#buy").addEventListener("click", function () { addToCart(p.id, qty, ml); });
    $("#wish-product").addEventListener("click", function () {
      toggleWish(p.id);
      var now = wishlist.indexOf(p.id) > -1;
      this.classList.toggle("is-on", now);
      this.setAttribute("aria-pressed", String(now));
      this.setAttribute("aria-label", t(now ? "Remove from wishlist" : "Save to wishlist"));
    });

    var related = PRODUCTS.filter(function (x) { return x.id !== p.id && (x.category === p.category || (p.tag && x.tag === p.tag)); }).slice(0, 4);
    $("#related-grid").innerHTML = related.map(card).join("");
  }

  function renderWishlist() {
    var items = wishlist.map(find).filter(Boolean);
    $("#wishlist-grid").innerHTML = items.length ? items.map(card).join("")
      : '<p class="empty">' + t("Your wishlist is empty.") + ' <a href="shop.html">' + t("Discover the collection") + '</a></p>';
  }

  function renderCart() {
    var host = $("#cart");
    var lines = cart.map(function (i) {
      var p = find(i.id);
      if (!p) return null;
      var m = i.ml || baseMl(p);
      return { p: p, qty: i.qty, ml: i.ml || 0, price: priceFor(p, m), label: sizeLabel(p, m) };
    }).filter(Boolean);
    if (!lines.length) {
      host.innerHTML = '<p class="empty">' + t("Your bag is empty.") + ' <a href="shop.html">' + t("Continue shopping") + '</a></p>';
      return;
    }
    var subtotal = lines.reduce(function (s, l) { return s + l.price * l.qty; }, 0);
    var off = promo === PROMO_CODE ? subtotal * PROMO_RATE : 0;
    var shipping = subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FEE;
    var total = subtotal - off + shipping;
    var AUTH = window.IvoireAuth;
    var authUser = AUTH.user();

    host.innerHTML = '<div class="cart"><div>' +
      lines.map(function (l) {
        return '<div class="cart-row" data-id="' + l.p.id + '" data-ml="' + l.ml + '">' +
          '<img class="cart-row__img" src="img/' + l.p.img + '" alt="" width="96" height="120">' +
          '<div><h3 class="cart-row__name"><a href="product.html?id=' + l.p.id + '">' + esc(l.p.name) + '</a></h3><p class="cart-row__meta">' + esc(l.label) + ' · ' + (promo === PROMO_CODE ? '<s style="opacity:.55">' + money(l.price) + '</s> ' + money(l.price * (1 - PROMO_RATE)) : money(l.price)) + '</p></div>' +
          '<div class="qty"><button type="button" data-cart="minus" aria-label="' + t("Decrease quantity") + '">−</button><span>' + l.qty + '</span><button type="button" data-cart="plus" aria-label="' + t("Increase quantity") + '">+</button></div>' +
          '<button type="button" class="cart-row__remove" data-cart="remove" aria-label="' + esc(t("Remove {n}", { n: l.p.name })) + '">' + ICON.close + '</button></div>';
      }).join("") + '</div>' +
      '<aside class="summary"><p class="eyebrow">' + t("Summary") + '</p>' +
        '<div class="promo"><label class="sr-only" for="promo-input">' + t("Promo code") + '</label><input id="promo-input" placeholder="' + t("Promo code") + '" value="' + esc(promo) + '" autocomplete="off"><button type="button" id="promo-apply">' + t("Apply") + '</button></div><p class="promo__msg" id="promo-msg" role="status" aria-live="polite"></p>' +
        '<div class="summary__line"><span>' + t("Subtotal") + '</span><span>' + money(subtotal) + '</span></div>' +
        (off ? '<div class="summary__line"><span>' + t("Code {c}", { c: PROMO_CODE }) + '</span><span>−' + money(off) + '</span></div>' : '') +
        '<div class="summary__line"><span>' + t("Shipping") + '</span><span>' + (shipping ? money(shipping) : t("Free")) + '</span></div>' +
        '<div class="summary__line summary__total"><span>' + t("Total") + '</span><span>' + money(total) + '</span></div>' +
        '<button type="button" class="btn btn--block" id="checkout" style="margin-top:24px">' + (authUser ? t("Checkout") : AUTH.tr("Sign in to checkout")) + '</button>' +
        '<p class="summary__note">' + esc(authUser ? AUTH.tr("Ordering as {e}", { e: authUser.email }) : AUTH.tr("Sign in or create an account to place your order.")) + '</p>' +
      '</aside></div>';

    function applyPromo() {
      var v = $("#promo-input").value.trim().toUpperCase();
      if (v === "" || v === PROMO_CODE) {
        promo = v; save("ivoire_promo2", promo); renderCart();
        promoMsg(v ? t("Code applied") + " · −" + Math.round(PROMO_RATE * 100) + "%" : t("Code removed"), v ? "ok" : "");
      } else promoMsg(t("This code is not valid"), "err");
    }
    function promoMsg(text, kind) {
      var m = $("#promo-msg"); if (!m) return;
      m.textContent = text; m.className = "promo__msg" + (kind ? " is-" + kind : "");
    }
    if (promo === PROMO_CODE) promoMsg(t("Code applied") + " · −" + Math.round(PROMO_RATE * 100) + "%", "ok");
    $("#promo-apply").addEventListener("click", applyPromo);
    $("#promo-input").addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); applyPromo(); } });
    $("#promo-input").addEventListener("input", function () { promoMsg("", ""); });
    $("#checkout").addEventListener("click", function () {
      /* ordering needs an account: send guests to the sign-in page, their bag stays saved */
      if (!AUTH.user()) { AUTH.goLogin("cart.html"); return; }
      var count = lines.reduce(function (n, l) { return n + l.qty; }, 0);
      cart = []; promo = "";
      save("ivoire_cart", cart); save("ivoire_promo2", promo);
      updateCount();
      showOrderDone(total, count);
    });
  }

  /* order confirmation (demo checkout: nothing is sent anywhere) */
  function showOrderDone(total, count) {
    var no = "IV-" + String(Math.floor(100000 + Math.random() * 900000));
    var el = document.createElement("div");
    el.className = "order";
    el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true");
    el.innerHTML = '<div class="order__card">' +
      '<div class="order__check"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>' +
      '<p class="eyebrow">' + t("Order confirmed") + '</p>' +
      '<h2 class="order__title">' + t("Purchase complete") + '</h2>' +
      '<p class="order__text">' + t("Thank you for your order. We are preparing your ritual with care.") + '</p>' +
      '<dl class="order__meta"><div><dt>' + t("Order No.") + '</dt><dd>' + no + '</dd></div>' +
      '<div><dt>' + t("Items") + '</dt><dd>' + count + '</dd></div>' +
      '<div><dt>' + t("Total") + '</dt><dd>' + money(total) + '</dd></div></dl>' +
      '<a class="btn btn--block" href="shop.html">' + t("Continue shopping") + '</a></div>';
    document.body.appendChild(el);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function () { el.classList.add("is-open"); });
    function done() { el.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); renderCart(); }
    function onKey(e) { if (e.key === "Escape") done(); }
    document.addEventListener("keydown", onKey);
    el.addEventListener("click", function (e) { if (e.target === el) done(); });
    var a = el.querySelector("a"); if (a) a.focus();
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-cart]");
    if (!btn) return;
    var row = btn.closest(".cart-row");
    var id = row.getAttribute("data-id");
    var rowMl = parseFloat(row.getAttribute("data-ml")) || 0;
    var line = cart.filter(function (i) { return i.id === id && (i.ml || 0) === rowMl; })[0];
    if (!line) return;
    var a = btn.getAttribute("data-cart");
    if (a === "plus") line.qty += 1;
    if (a === "minus") line.qty -= 1;
    if (a === "remove" || line.qty < 1) cart = cart.filter(function (i) { return i !== line; });
    save("ivoire_cart", cart);
    updateCount();
    renderCart();
  });

  /* 7. SHARED UI ---------------------------------------------------------- */
  function setupHeader() {
    var search = $(".search"), searchBtn = $("[data-search-toggle]"), input = $(".search__input");
    var menu = $(".mobile-nav"), menuBtn = $("[data-menu-toggle]");
    if (searchBtn && search) {
      document.body.appendChild(search); /* keep overlay above everything */
      var setSearch = function (open) {
        search.classList.toggle("is-open", open);
        search.setAttribute("aria-hidden", String(!open));
        searchBtn.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
        if (open) setTimeout(function () { input.focus(); }, 150);
      };
      searchBtn.addEventListener("click", function () { setSearch(true); });
      search.addEventListener("click", function (e) {
        if (e.target === search || e.target.closest("[data-search-close]")) setSearch(false);
      });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") setSearch(false); });
    }
    if (menuBtn && menu) {
      menuBtn.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", String(open));
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (search) search.classList.remove("is-open");
      if (menu) menu.classList.remove("is-open");
    });
  }

  function setupForms() {
    /* newsletter (page + footer) */
    $$("[data-newsletter]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = $("input", form), msg = $(".form-msg", form), field = $(".field", form);
        if (isEmail(input.value.trim())) {
          field.classList.remove("field--invalid");
          msg.textContent = t("Thank you — welcome to the Maison.");
          input.value = "";
        } else {
          field.classList.add("field--invalid");
          msg.textContent = t("Please enter a valid email address.");
        }
      });
    });
    /* contact */
    var contact = $("#contact-form");
    if (contact) {
      var cmsg = $("#c-msg"), ccount = $("#c-count");
      function fieldOf(el) { return el.closest("[data-field]"); }
      function setErr(el, text) {
        var f = fieldOf(el);
        f.classList.toggle("is-invalid", !!text);
        $(".float__err", f).textContent = text || "";
        el.setAttribute("aria-invalid", text ? "true" : "false");
      }
      function check(el) {
        var v = el.value.trim();
        if (!v) return setErr(el, t(el.id === "c-msg" ? "Please tell us how we can help." : "This field is required.")), false;
        if (el.type === "email" && !isEmail(v)) return setErr(el, t("Please enter a valid email address.")), false;
        if (el.id === "c-msg" && v.length < 10) return setErr(el, t("Please write at least a few words.")), false;
        setErr(el, "");
        return true;
      }
      $$("#contact-form input[type=text], #contact-form input[type=email], #contact-form textarea").forEach(function (el) {
        el.addEventListener("blur", function () { if (el.value) check(el); });
        el.addEventListener("input", function () { if (fieldOf(el).classList.contains("is-invalid")) check(el); });
      });
      cmsg.addEventListener("input", function () { ccount.textContent = cmsg.value.length + " / 600"; });
      contact.addEventListener("submit", function (e) {
        e.preventDefault();
        var fields = $$("#contact-form input[type=text], #contact-form input[type=email], #contact-form textarea");
        var ok = fields.map(check).every(Boolean);
        if (!ok) { var bad = fields.filter(function (f) { return fieldOf(f).classList.contains("is-invalid"); })[0]; if (bad) bad.focus(); return; }
        var first = $("#c-name").value.trim().split(/\s+/)[0];
        $("#thanks-text").textContent = t("Thank you, {n} — we have your message and will reply to {e} within one business day.", { n: first, e: $("#c-email").value.trim() });
        $("#contact-panel").hidden = true;
        var t = $("#contact-thanks"); t.hidden = false;
        t.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      $("#contact-again").addEventListener("click", function () {
        contact.reset();
        ccount.textContent = "0 / 600";
        $$("[data-field]", contact).forEach(function (f) { f.classList.remove("is-invalid"); });
        $("#contact-thanks").hidden = true;
        $("#contact-panel").hidden = false;
        $("#c-name").focus();
      });
    }
    /* search drawer */
    var sf = $(".search__form");
    if (sf) {
      sf.addEventListener("submit", function (e) {
        e.preventDefault();
        var v = $(".search__input").value.trim();
        if (v) window.location.href = "shop.html?q=" + encodeURIComponent(v);
      });
    }
    /* copy promo code */
    var box = $("[data-copy-code]");
    if (box) {
      box.addEventListener("click", function () {
        var done = function () { toast(t("Code copied")); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(PROMO_CODE).then(done, done);
        } else done();
      });
    }
  }

  /* custom dropdown: replaces the native <select class="select"> look, keeps the select as the source of truth */
  function setupSelects() {
    $$("select.select").forEach(function (sel) {
      if (sel.dataset.enhanced) return;
      sel.dataset.enhanced = "1";
      var wrap = document.createElement("div");
      wrap.className = "dd";
      sel.parentNode.insertBefore(wrap, sel);
      wrap.appendChild(sel);
      sel.classList.add("dd__native");
      sel.tabIndex = -1;
      sel.setAttribute("aria-hidden", "true");
      var btn = document.createElement("button");
      btn.type = "button"; btn.className = "dd__btn";
      btn.setAttribute("aria-haspopup", "listbox"); btn.setAttribute("aria-expanded", "false");
      var lab = document.createElement("span"); lab.className = "dd__label";
      btn.appendChild(lab);
      btn.insertAdjacentHTML("beforeend", '<svg class="dd__chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>');
      var list = document.createElement("ul");
      list.className = "dd__list"; list.setAttribute("role", "listbox"); list.hidden = true;
      wrap.appendChild(btn); wrap.appendChild(list);
      var idx = -1;
      function sync() { lab.textContent = sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].textContent : ""; }
      function build() {
        list.innerHTML = "";
        Array.prototype.forEach.call(sel.options, function (o, i) {
          var li = document.createElement("li");
          li.setAttribute("role", "option"); li.dataset.i = i; li.textContent = o.textContent;
          if (i === sel.selectedIndex) { li.className = "is-selected"; li.setAttribute("aria-selected", "true"); }
          list.appendChild(li);
        });
      }
      function mark(i) {
        var items = list.children; idx = Math.max(0, Math.min(items.length - 1, i));
        Array.prototype.forEach.call(items, function (li, k) { li.classList.toggle("is-active", k === idx); });
      }
      function open() { build(); list.hidden = false; wrap.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); mark(sel.selectedIndex); }
      function close() { list.hidden = true; wrap.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
      function choose(i) {
        sel.selectedIndex = i; sync(); close(); btn.focus();
        sel.dispatchEvent(new Event("change", { bubbles: true }));
      }
      btn.addEventListener("click", function () { list.hidden ? open() : close(); });
      list.addEventListener("click", function (e) { var li = e.target.closest("li"); if (li) choose(+li.dataset.i); });
      list.addEventListener("mousemove", function (e) { var li = e.target.closest("li"); if (li) mark(+li.dataset.i); });
      wrap.addEventListener("keydown", function (e) {
        var isOpen = !list.hidden;
        if (e.key === "Escape" && isOpen) { close(); btn.focus(); e.preventDefault(); }
        else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          if (!isOpen) open(); else mark(idx + (e.key === "ArrowDown" ? 1 : -1));
        } else if ((e.key === "Enter" || e.key === " ") && isOpen) { e.preventDefault(); choose(idx); }
        else if (e.key === "Tab" && isOpen) close();
      });
      document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) close(); });
      sel.addEventListener("change", sync);
      sync();
      setTimeout(sync, 300); /* after the language layer has translated the options */
    });
  }

  /* 8. BOOT ---------------------------------------------------------------- */
  var pages = { home: renderHome, shop: renderShop, product: renderProduct, wishlist: renderWishlist, cart: renderCart };
  if (pages[page]) pages[page]();
  setupHeader();
  setupForms();
  setupSelects();
  updateCount();
  paintWishButtons();
})();
