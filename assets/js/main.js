/* ============================================================
   NAVITECH · MAIN
   Shared layout (status strip / nav / footer), mobile menu,
   language toggle, scroll state. Re-renders on lang change.
   ============================================================ */
(function () {
  "use strict";

  var I18N = window.I18N;

  /* Hide any image that fails to load (e.g. product photos not yet
     uploaded) so the card keeps its neutral panel instead of a
     broken-image icon. Capture phase catches errors on dynamic imgs. */
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG") t.style.display = "none";
  }, true);

  var NAV_LINKS = [
    { href: "index.html", labelKey: "nav.home", page: "home" },
    { href: "solutions.html", labelKey: "nav.solutions", page: "solutions" },
    { href: "clients.html", labelKey: "nav.clients", page: "clients" },
    { href: "about.html", labelKey: "nav.about", page: "about" },
    { href: "contact.html", labelKey: "nav.contact", page: "contact" }
  ];

  var PAGE_TITLES = {
    home: "title.home",
    products: "title.products",
    solutions: "title.solutions",
    clients: "title.clients",
    about: "title.about",
    contact: "title.contact"
  };

  var currentPage = document.body && document.body.dataset.page
    ? document.body.dataset.page
    : "home";

  function t(key) { return I18N.t(key); }

  function el(html) {
    var wrap = document.createElement("div");
    wrap.innerHTML = html;
    return wrap.firstElementChild;
  }

  function setTitle() {
    var key = PAGE_TITLES[currentPage];
    if (key) document.title = t(key);
  }

  function buildLangButton() {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-btn";
    btn.setAttribute("aria-label", "Language");
    var render = function () {
      btn.textContent = t("nav.lang");
    };
    render();
    btn.addEventListener("click", function () {
      I18N.set(I18N.isZh() ? "en" : "zh");
    });
    return btn;
  }

  function buildBrand() {
    var brand = window.NAVITECH_BRAND || {};
    if (brand.logo) {
      return '<a class="brand" href="index.html" aria-label="Navitech | home">' +
        '<img class="brand__logo" src="' + brand.logo + '" alt="Navitech">' +
        "</a>";
    }
    return '<a class="brand" href="index.html" aria-label="Navitech | home">' +
      '<span class="brand__glyph" aria-hidden="true"></span>' +
      '<span class="brand__text">' +
        '<span class="brand__name">NAVITECH</span>' +
        '<span class="brand__sub">' + t("brand.sub") + "</span>" +
      "</span>" +
    "</a>";
  }

  function buildNav() {
    var wrap = document.getElementById("site-nav");
    if (!wrap) return;
    wrap.classList.add("nav");
    wrap.innerHTML = "";

    var links = NAV_LINKS.map(function (l) {
      var current = l.page === currentPage ? ' aria-current="page"' : "";
      return '<li><a class="nav__link" href="' + l.href + '"' + current + ">" + t(l.labelKey) + "</a></li>";
    }).join("");

    var inner = el(
      '<div class="container nav__inner">' +
        buildBrand() +
        '<nav aria-label="Primary">' +
          '<ul class="nav__links">' + links + "</ul>" +
        "</nav>" +
        '<a class="btn btn--primary nav__cta" href="contact.html">' + t("nav.cta") + "</a>" +
        '<button class="nav__toggle" type="button" aria-expanded="false" aria-controls="primary-menu">Menu</button>' +
      "</div>"
    );

    var langBtn = buildLangButton();
    inner.querySelector(".nav__cta").insertAdjacentElement("beforebegin", langBtn);
    wrap.appendChild(inner);

    var toggle = wrap.querySelector(".nav__toggle");
    var menu = wrap.querySelector(".nav__links");
    menu.id = "primary-menu";
    toggle.textContent = t("nav.menu");
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function buildFooter() {
    var wrap = document.getElementById("site-footer");
    if (!wrap) return;
    wrap.classList.add("footer");
    wrap.innerHTML = "";
    wrap.appendChild(el(
      '<div class="container">' +
        '<div class="footer__top">' +
          '<div class="footer__about">' +
            buildBrand() +
            '<p class="mt-0" style="margin-top:16px">' + t("footer.tagline") + "</p>" +
          "</div>" +
          '<div>' +
            "<h4>" + t("footer.site") + "</h4>" +
            '<nav class="footer__links" aria-label="Footer">' +
              '<a href="solutions.html">' + t("nav.solutions") + "</a>" +
              '<a href="clients.html">' + t("nav.clients") + "</a>" +
              '<a href="about.html">' + t("nav.about") + "</a>" +
              '<a href="contact.html">' + t("nav.contact") + "</a>" +
            "</nav>" +
          "</div>" +
          '<div class="footer__contact">' +
            "<h4>" + t("footer.contact") + "</h4>" +
            '<p class="text-mono">sales@navitech.cn</p>' +
            '<p class="text-mono">+855 23 000 000</p>' +
            "<p>" + t("footer.addr") + "</p>" +
          "</div>" +
        "</div>" +
      "</div>"
    ));
  }

  function initScroll() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle("nav--scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function render() {
    buildNav();
    buildFooter();
    setTitle();
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    initScroll();
  });

  document.addEventListener("navitech:langchange", function () {
    render();
  });
})();
