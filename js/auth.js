/* ==========================================================================
   MAISON IVOIRE — accounts (sign in / register)
   Plain JavaScript, no libraries. Loaded on every page BEFORE app.js.

   - window.IvoireAuth.user()        -> { name, email } or null
   - window.IvoireAuth.goLogin(next) -> sends the visitor to auth.html
   - The header gets an account icon; auth.html is built here.

   NOTE: this is a front-end demo. Accounts live in this browser's
   localStorage (passwords are salted + hashed, never stored as plain text).
   A real shop needs a server for accounts — the checkout gate in app.js
   already asks IvoireAuth, so only this file has to change later.
   ========================================================================== */
(function () {
  "use strict";

  var USERS_KEY = "ivoire_users", SESSION_KEY = "ivoire_session";
  var lang = (window.I18N && window.I18N.lang) || "en";

  /* 1. translations (uz / ru; English is the source text) ------------------ */
  var D = {
    uz: {
      "Account": "Hisob", "Sign in": "Kirish", "Create account": "Ro'yxatdan o'tish",
      "Account · Maison Ivoire": "Hisob · Maison Ivoire",
      "Welcome to": "Xush kelibsiz,",
      "Create an account or sign in to place your order. Your bag stays saved while you do.": "Buyurtma berish uchun hisob yarating yoki tizimga kiring. Savatingiz saqlanib turadi.",
      "Please sign in or create an account to place your order — your bag is saved and waiting.": "Buyurtma berish uchun tizimga kiring yoki ro'yxatdan o'ting — savatingiz saqlangan va sizni kutyapti.",
      "Sign in to your <em>account</em>": "Hisobingizga <em>kiring</em>",
      "Create your <em>account</em>": "Hisob <em>yarating</em>",
      "Your name": "Ismingiz", "Email address": "Elektron pochta", "Password": "Parol",
      "Password must be at least 6 characters.": "Parol kamida 6 ta belgidan iborat bo'lishi kerak.",
      "This field is required.": "Bu maydon to'ldirilishi shart.",
      "Please enter a valid email address.": "To'g'ri elektron pochta manzilini kiriting.",
      "An account with this email already exists. Try signing in.": "Bu pochta bilan hisob allaqachon mavjud. Tizimga kirib ko'ring.",
      "Incorrect email or password.": "Pochta yoki parol noto'g'ri.",
      "Something went wrong. Please try again.": "Xatolik yuz berdi. Qayta urinib ko'ring.",
      "Your bag is saved": "Savatingiz saqlanadi", "Items stay in your bag while you sign in.": "Kirish vaqtida mahsulotlar savatda qoladi.",
      "Faster ordering": "Tezroq buyurtma", "Place your order in a single step.": "Buyurtmani bir qadamda bering.",
      "Private by design": "Maxfiylik", "Your details are only used for your orders.": "Ma'lumotlaringiz faqat buyurtmalaringiz uchun ishlatiladi.",
      "Your <em>account.</em>": "Sizning <em>hisobingiz.</em>",
      "Thank you for being part of Maison Ivoire.": "Maison Ivoire oilasiga qo'shilganingiz uchun rahmat.",
      "Hello, <em>{n}</em>": "Salom, <em>{n}</em>",
      "You are signed in as {e}.": "Siz {e} sifatida tizimdasiz.",
      "Go to my bag": "Savatga o'tish", "Continue shopping": "Xaridni davom ettirish", "Sign out": "Chiqish",
      "Sign in to checkout": "Buyurtma uchun kirish",
      "Sign in or create an account to place your order.": "Buyurtma berish uchun tizimga kiring yoki ro'yxatdan o'ting.",
      "Ordering as {e}": "Buyurtma beruvchi: {e}",
      "Don't have an account?": "Hisobingiz yo'qmi?", "Already have an account?": "Hisobingiz bormi?"
    },
    ru: {
      "Account": "Аккаунт", "Sign in": "Войти", "Create account": "Регистрация",
      "Account · Maison Ivoire": "Аккаунт · Maison Ivoire",
      "Welcome to": "Добро пожаловать в",
      "Create an account or sign in to place your order. Your bag stays saved while you do.": "Создайте аккаунт или войдите, чтобы оформить заказ. Ваша корзина сохранится.",
      "Please sign in or create an account to place your order — your bag is saved and waiting.": "Войдите или зарегистрируйтесь, чтобы оформить заказ — ваша корзина сохранена и ждёт вас.",
      "Sign in to your <em>account</em>": "Войдите в <em>аккаунт</em>",
      "Create your <em>account</em>": "Создайте <em>аккаунт</em>",
      "Your name": "Ваше имя", "Email address": "Эл. почта", "Password": "Пароль",
      "Password must be at least 6 characters.": "Пароль — не менее 6 символов.",
      "This field is required.": "Обязательное поле.",
      "Please enter a valid email address.": "Введите корректный адрес эл. почты.",
      "An account with this email already exists. Try signing in.": "Аккаунт с этой почтой уже существует. Попробуйте войти.",
      "Incorrect email or password.": "Неверная почта или пароль.",
      "Something went wrong. Please try again.": "Что-то пошло не так. Попробуйте ещё раз.",
      "Your bag is saved": "Корзина сохранена", "Items stay in your bag while you sign in.": "Товары остаются в корзине, пока вы входите.",
      "Faster ordering": "Быстрый заказ", "Place your order in a single step.": "Оформляйте заказ в один шаг.",
      "Private by design": "Конфиденциально", "Your details are only used for your orders.": "Данные используются только для ваших заказов.",
      "Your <em>account.</em>": "Ваш <em>аккаунт.</em>",
      "Thank you for being part of Maison Ivoire.": "Спасибо, что вы с Maison Ivoire.",
      "Hello, <em>{n}</em>": "Здравствуйте, <em>{n}</em>",
      "You are signed in as {e}.": "Вы вошли как {e}.",
      "Go to my bag": "Перейти в корзину", "Continue shopping": "Продолжить покупки", "Sign out": "Выйти",
      "Sign in to checkout": "Войти для оформления",
      "Sign in or create an account to place your order.": "Войдите или зарегистрируйтесь, чтобы оформить заказ.",
      "Ordering as {e}": "Заказ на имя: {e}",
      "Don't have an account?": "Нет аккаунта?", "Already have an account?": "Уже есть аккаунт?"
    }
  };
  function tr(s, v) {
    var d = D[lang], out = d && d[s] != null ? d[s] : s;
    if (v) for (var k in v) out = out.split("{" + k + "}").join(v[k]);
    return out;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* 2. storage (safe even if the browser blocks localStorage) -------------- */
  var memory = {};
  function load(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return memory[key] != null ? memory[key] : fallback; }
  }
  function save(key, value) {
    memory[key] = value;
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  }
  function drop(key) { delete memory[key]; try { localStorage.removeItem(key); } catch (e) { /* ignore */ } }

  /* 3. passwords: salted SHA-256 (falls back to a simple hash if unavailable) */
  function fallbackHash(str) {
    var h1 = 0xdeadbeef, h2 = 0x41c6ce57, i, ch;
    for (i = 0; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return "f" + (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
  }
  function hash(pw, salt) {
    var text = salt + ":" + pw;
    if (window.crypto && crypto.subtle && window.TextEncoder) {
      return crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)).then(function (buf) {
        return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
      }).catch(function () { return fallbackHash(text); });
    }
    return Promise.resolve(fallbackHash(text));
  }
  function newSalt() {
    var a = "";
    if (window.crypto && crypto.getRandomValues) {
      var r = crypto.getRandomValues(new Uint8Array(12));
      for (var i = 0; i < r.length; i++) a += ("0" + r[i].toString(16)).slice(-2);
      return a;
    }
    return String(Date.now()) + Math.random().toString(16).slice(2);
  }

  /* 4. accounts ------------------------------------------------------------ */
  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function users() { return load(USERS_KEY, []); }
  function findUser(email) {
    var e = String(email).trim().toLowerCase();
    return users().filter(function (u) { return u.email === e; })[0] || null;
  }
  function user() {
    var email = load(SESSION_KEY, "");
    var u = email ? findUser(email) : null;
    return u ? { name: u.name, email: u.email } : null;
  }
  function register(name, email, pw) {
    email = String(email).trim().toLowerCase();
    if (findUser(email)) return Promise.resolve({ ok: false, error: "An account with this email already exists. Try signing in." });
    var salt = newSalt();
    return hash(pw, salt).then(function (h) {
      var list = users();
      list.push({ name: String(name).trim(), email: email, salt: salt, hash: h, created: Date.now() });
      save(USERS_KEY, list);
      save(SESSION_KEY, email);
      return { ok: true };
    });
  }
  function login(email, pw) {
    var u = findUser(email);
    if (!u) return Promise.resolve({ ok: false, error: "Incorrect email or password." });
    return hash(pw, u.salt).then(function (h) {
      if (h !== u.hash) return { ok: false, error: "Incorrect email or password." };
      save(SESSION_KEY, u.email);
      return { ok: true };
    });
  }
  function logout() { drop(SESSION_KEY); }

  /* only same-site pages are allowed as a "go back to" target */
  function safeNext(v) {
    return /^[a-z0-9-]+\.html(\?[^#\s]*)?$/i.test(v || "") && !/^auth\.html/i.test(v) ? v : "";
  }
  function goLogin(next) {
    window.location.href = "auth.html" + (safeNext(next) ? "?next=" + encodeURIComponent(next) : "");
  }

  window.IvoireAuth = { user: user, goLogin: goLogin, logout: logout, tr: tr };

  /* 5. header: account icon (+ mobile menu link) --------------------------- */
  var ICON_USER = '<svg aria-hidden="true" class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.8"></circle><path d="M4.5 20c.9-3.7 3.7-5.6 7.5-5.6s6.6 1.9 7.5 5.6"></path></svg>';
  function mountHeader() {
    var u = user();
    var label = u ? tr("Account") + ": " + u.name : tr("Sign in");
    var icons = document.querySelector(".nav__icons");
    if (icons && !icons.querySelector(".account-btn")) {
      var a = document.createElement("a");
      a.className = "icon-btn account-btn";
      a.href = "auth.html";
      a.setAttribute("aria-label", label);
      a.title = label;
      a.innerHTML = ICON_USER + (u ? '<span class="account-btn__dot" aria-hidden="true"></span>' : "");
      var bag = icons.querySelector('a[href="cart.html"]');
      icons.insertBefore(a, bag || null);
    }
    var mobile = document.querySelector(".mobile-nav");
    if (mobile && !mobile.querySelector(".mobile-nav__account")) {
      var m = document.createElement("a");
      m.className = "mobile-nav__account";
      m.href = "auth.html";
      m.textContent = u ? tr("Account") : tr("Sign in");
      mobile.appendChild(m);
    }
  }

  /* 6. the auth.html page -------------------------------------------------- */
  function field(id, type, label, auto) {
    return '<div class="float" data-field><input id="' + id + '" name="' + id + '" type="' + type + '" autocomplete="' + auto +
      '" placeholder=" " required><label for="' + id + '">' + esc(tr(label)) + '</label><p class="float__err" role="alert"></p></div>';
  }
  function perk(path, title, text) {
    return '<li><span class="contact__icon"><svg aria-hidden="true" class="icon" viewBox="0 0 24 24">' + path + '</svg></span>' +
      '<div><p class="contact__label">' + esc(tr(title)) + '</p><p class="contact__value">' + esc(tr(text)) + '</p></div></li>';
  }
  var ARROW = '<svg aria-hidden="true" class="icon" viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"></path></svg>';

  function renderAuthPage() {
    var root = document.getElementById("auth-root");
    if (!root) return;
    var params = new URLSearchParams(window.location.search);
    var next = safeNext(params.get("next"));
    var u = user();
    document.title = tr("Account") + " — Maison Ivoire";

    var hero = function (title, lead) {
      return '<header class="contact-hero"><p class="eyebrow">' + esc(tr("Account · Maison Ivoire")) + '</p>' +
        '<h1 class="contact-hero__title">' + title + '</h1><p class="contact-hero__lead">' + esc(lead) + '</p></header>';
    };
    var side = '<aside class="contact__side"><figure class="contact__figure contact__figure--auth"><img alt="" height="1080" loading="eager" src="img/auth-model.jpg" width="1080">' +
      '<figcaption class="contact__badge"><span aria-hidden="true" class="contact__dot"></span>Maison Ivoire · Paris</figcaption></figure>' +
      '<ul class="contact__list">' +
        perk('<path d="M5 8h14l-1 12H6z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path>', "Your bag is saved", "Items stay in your bag while you sign in.") +
        perk('<path d="M13 3 5 13.5h6L10 21l9-11h-6z"></path>', "Faster ordering", "Place your order in a single step.") +
        perk('<rect x="5" y="10.5" width="14" height="9.5" rx="1.5"></rect><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"></path>', "Private by design", "Your details are only used for your orders.") +
      '</ul></aside>';

    if (u) {
      root.innerHTML = hero(tr("Your <em>account.</em>"), tr("Thank you for being part of Maison Ivoire.")) +
        '<div class="contact">' + side + '<section class="contact__card"><h2 class="contact__title">' + tr("Hello, <em>{n}</em>", { n: esc(u.name.split(/\s+/)[0]) }) + '</h2>' +
        '<p class="auth__lead">' + esc(tr("You are signed in as {e}.", { e: u.email })) + '</p>' +
        '<div class="auth__actions"><a class="btn" href="' + (next || "cart.html") + '">' + esc(tr("Go to my bag")) + '</a>' +
        '<a class="cform__again" href="shop.html">' + esc(tr("Continue shopping")) + '</a>' +
        '<button class="cform__again" id="auth-out" type="button">' + esc(tr("Sign out")) + '</button></div></section></div>';
      document.getElementById("auth-out").addEventListener("click", function () { logout(); window.location.reload(); });
      return;
    }

    var lead = next === "cart.html"
      ? tr("Please sign in or create an account to place your order — your bag is saved and waiting.")
      : tr("Create an account or sign in to place your order. Your bag stays saved while you do.");
    root.innerHTML = hero(esc(tr("Welcome to")) + ' <em>Ivoire.</em>', lead) +
      '<div class="contact">' + side + '<section class="contact__card" aria-label="' + esc(tr("Account")) + '">' +
      '<fieldset class="topics"><div class="topics__row" role="tablist">' +
        '<label class="topic"><input checked name="mode" type="radio" value="login"><span>' + esc(tr("Sign in")) + '</span></label>' +
        '<label class="topic"><input name="mode" type="radio" value="register"><span>' + esc(tr("Create account")) + '</span></label>' +
      '</div></fieldset>' +
      '<div class="auth__panel" id="auth-login"><h2 class="contact__title">' + tr("Sign in to your <em>account</em>") + '</h2>' +
        '<form class="cform" id="login-form" novalidate>' + field("l-email", "email", "Email address", "email") + field("l-pass", "password", "Password", "current-password") +
        '<p class="auth__error" id="login-error" role="alert"></p>' +
        '<div class="cform__foot"><button class="cform__send" type="submit"><span>' + esc(tr("Sign in")) + '</span>' + ARROW + '</button></div></form></div>' +
      '<div class="auth__panel" id="auth-register" hidden><h2 class="contact__title">' + tr("Create your <em>account</em>") + '</h2>' +
        '<form class="cform" id="register-form" novalidate>' + field("r-name", "text", "Your name", "name") + field("r-email", "email", "Email address", "email") + field("r-pass", "password", "Password", "new-password") +
        '<p class="cform__note">' + esc(tr("Password must be at least 6 characters.")) + '</p>' +
        '<p class="auth__error" id="register-error" role="alert"></p>' +
        '<div class="cform__foot"><button class="cform__send" type="submit"><span>' + esc(tr("Create account")) + '</span>' + ARROW + '</button></div></form></div>' +
      '</section></div>';

    var loginPanel = document.getElementById("auth-login"), regPanel = document.getElementById("auth-register");
    function setMode(m) {
      loginPanel.hidden = m !== "login"; regPanel.hidden = m !== "register";
      var first = document.getElementById(m === "login" ? "l-email" : "r-name"); if (first) first.focus();
    }
    Array.prototype.forEach.call(root.querySelectorAll('input[name="mode"]'), function (r) {
      r.addEventListener("change", function () { if (r.checked) setMode(r.value); });
    });
    if (params.get("mode") === "register") { root.querySelector('input[value="register"]').checked = true; setMode("register"); }

    function setErr(el, key) {
      var f = el.closest("[data-field]");
      f.classList.toggle("is-invalid", !!key);
      f.querySelector(".float__err").textContent = key ? tr(key) : "";
      el.setAttribute("aria-invalid", key ? "true" : "false");
    }
    function check(el) {
      var v = el.value.trim();
      if (el.type === "password") v = el.value;
      if (!v) return setErr(el, "This field is required."), false;
      if (el.type === "email" && !isEmail(v)) return setErr(el, "Please enter a valid email address."), false;
      if (el.id === "r-pass" && v.length < 6) return setErr(el, "Password must be at least 6 characters."), false;
      setErr(el, ""); return true;
    }
    function wire(formId, errId, submit) {
      var form = document.getElementById(formId), err = document.getElementById(errId);
      var inputs = Array.prototype.slice.call(form.querySelectorAll("input"));
      inputs.forEach(function (el) {
        el.addEventListener("blur", function () { if (el.value) check(el); });
        el.addEventListener("input", function () { err.textContent = ""; if (el.closest("[data-field]").classList.contains("is-invalid")) check(el); });
      });
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var ok = inputs.map(check).every(Boolean);
        if (!ok) { var bad = inputs.filter(function (i) { return i.closest("[data-field]").classList.contains("is-invalid"); })[0]; if (bad) bad.focus(); return; }
        var btn = form.querySelector("button[type=submit]"); btn.disabled = true;
        submit(inputs).then(function (res) {
          if (res.ok) { window.location.href = next || "index.html"; return; }
          err.textContent = tr(res.error); btn.disabled = false;
        }).catch(function () { err.textContent = tr("Something went wrong. Please try again."); btn.disabled = false; });
      });
    }
    wire("login-form", "login-error", function (i) { return login(i[0].value, i[1].value); });
    wire("register-form", "register-error", function (i) { return register(i[0].value, i[1].value, i[2].value); });
  }

  /* boot */
  function boot() { mountHeader(); renderAuthPage(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
