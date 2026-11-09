/* ==========================================================================
   MAISON IVOIRE — entrance & scroll animations
   Plain JS, no libraries. Respects "reduce motion". If anything fails the
   page simply shows normally (the hidden states are only active while the
   .js-motion class is on <html>).
   ========================================================================== */
(function () {
  "use strict";
  var root = document.documentElement;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  root.classList.add("js-motion");

  function fail() { root.classList.remove("js-motion"); root.classList.add("is-loaded"); }
  try {
    var page = document.body.getAttribute("data-page");
    var io = null, seen = typeof WeakSet === "function" ? new WeakSet() : null;

    /* ---- 1. split the hero headline into letters ------------------------ */
    function splitHero() {
      var h = document.querySelector(".hero__title");
      if (!h || h.dataset.split) return;
      h.dataset.split = "1";
      h.setAttribute("aria-label", h.innerHTML.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
      var n = 0;
      function walk(node, inGold) {
        Array.prototype.slice.call(node.childNodes).forEach(function (ch) {
          if (ch.nodeType === 3) {
            var frag = document.createDocumentFragment();
            ch.nodeValue.split(/(\s+)/).forEach(function (part) {
              if (!part) return;
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
              var w = document.createElement("span");
              w.className = "w"; w.setAttribute("aria-hidden", "true");
              Array.prototype.forEach.call(part, function (c) {
                var s = document.createElement("span");
                s.className = "c"; s.textContent = c; s.style.setProperty("--i", n++);
                w.appendChild(s);
              });
              frag.appendChild(w);
            });
            ch.parentNode.replaceChild(frag, ch);
          } else if (ch.nodeType === 1 && ch.tagName !== "BR") {
            if (ch.classList.contains("gold-text")) {
              /* gold word: animated as one piece so the gradient stays intact */
              ch.classList.add("hero__gold"); ch.style.setProperty("--i", n); n += 4;
              ch.setAttribute("aria-hidden", "true");
            } else walk(ch);
          }
        });
      }
      walk(h);
    }

    /* ---- 2. scroll reveal ------------------------------------------------ */
    var SEL = [
      ".section-head", ".collections__title", ".collection", ".ritual__media",
      ".ritual__title", ".ritual__step", ".ritual__note", ".ritual > div > .eyebrow",
      ".offer > div", ".philosophy__inner > *", ".reviews > .eyebrow", ".reviews__title",
      ".reviews__stars", ".review", ".newsletter > *", ".product-card",
      ".shop__bar", ".shop__side", ".shop__tabs", ".pdp__gallery", ".pdp__info",
      ".about-hero__title", ".about-hero .eyebrow", ".about main section > *",
      ".cart", ".empty", ".page-title", ".site-footer"
    ].join(",");

    function register(el) {
      if (seen) { if (seen.has(el)) return; seen.add(el); }
      if (el.closest(".hero, .contact-hero, .contact__side, .contact__card, .care-tiles, .order, .langgate, .search")) return;
      var sibs = el.parentNode ? Array.prototype.filter.call(el.parentNode.children, function (c) { return c.matches(SEL); }) : [el];
      var idx = Math.max(0, sibs.indexOf(el));
      el.style.setProperty("--d", Math.min(idx % 4, 3) * 110 + "ms");
      el.setAttribute("data-reveal", "");
      if (io) io.observe(el);
    }
    function scan(node) {
      if (node.nodeType !== 1) return;
      if (node.matches(SEL)) register(node);
      Array.prototype.forEach.call(node.querySelectorAll(SEL), register);
    }
    function show(el) {
      el.classList.add("is-in");
      if (el.matches(".ritual__media")) countUp(el.querySelector(".ritual__stat-num"));
      /* drop the reveal state afterwards so hover transitions behave normally */
      setTimeout(function () { el.removeAttribute("data-reveal"); el.classList.remove("is-in"); el.style.removeProperty("--d"); }, 2400);
    }
    function countUp(el) {
      if (!el || el.dataset.counted) return;
      el.dataset.counted = "1";
      var m = /^(\D*)(\d+)(.*)$/.exec(el.textContent.trim()); if (!m) return;
      var target = +m[2], t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / 1600), e = 1 - Math.pow(1 - p, 3);
        el.textContent = m[1] + Math.round(target * e) + m[3];
        if (p < 1) requestAnimationFrame(step);
      }
      el.textContent = m[1] + "0" + m[3];
      requestAnimationFrame(step);
    }

    /* ---- 3. hero parallax ------------------------------------------------ */
    function parallax() {
      var media = document.querySelector(".hero__media");
      if (!media) return;
      var ticking = false;
      window.addEventListener("scroll", function () {
        if (ticking) return; ticking = true;
        requestAnimationFrame(function () {
          var y = Math.min(window.scrollY, 900);
          media.style.transform = "translate3d(0," + (y * 0.16).toFixed(1) + "px,0)";
          ticking = false;
        });
      }, { passive: true });
    }

    /* ---- boot ------------------------------------------------------------ */
    function start() {
      if ("IntersectionObserver" in window) {
        io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) { io.unobserve(en.target); show(en.target); }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      }
      scan(document.body);
      new MutationObserver(function (list) {
        list.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, scan); });
      }).observe(document.body, { childList: true, subtree: true });
      if (!io) Array.prototype.forEach.call(document.querySelectorAll("[data-reveal]"), show);
      parallax();
    }
    function go() {
      splitHero();
      start();
      var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
      var done = false;
      function loaded() { if (done) return; done = true; requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add("is-loaded"); }); }); }
      Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 1200); })]).then(function () {
        /* wait for the language picker (first visit) before playing the intro */
        if (!root.classList.contains("lang-pending")) return loaded();
        var mo = new MutationObserver(function () { if (!root.classList.contains("lang-pending")) { mo.disconnect(); loaded(); } });
        mo.observe(root, { attributes: true, attributeFilter: ["class"] });
      });
      setTimeout(function () { if (!root.classList.contains("lang-pending")) loaded(); }, 3500);
    }
    /* run after i18n.js has translated the page */
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
  } catch (e) { fail(); }
})();
