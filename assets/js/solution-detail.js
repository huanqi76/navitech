/* ============================================================
   NAVITECH · SOLUTION DETAIL RENDERER
   Reads ?id=<solution id> and renders the detail page from
   window.NAVITECH_SOLUTIONS (defined in solutions.js).
   Localized via NT_L + I18N.t; re-renders on language change.
   ============================================================ */
(function () {
  "use strict";

  var FALLBACK_IMAGE = "assets/img/kiosks/k2.png";

  function param(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function t(key) { return window.I18N.t(key); }

  function L(obj, key) { return window.NT_L(obj, key); }

  /* Scenario lines ("Scenario 1: ..." / "场景一、...") render as
     group titles; everything else becomes a list item. */
  var GROUP_RE = /^(scenario\s*\d|场景[一二三四五六七八九十])/i;

  function renderFeatures(s) {
    var wrap = document.getElementById("solution-features");
    if (!wrap) return;
    wrap.innerHTML = "";
    var ul = null;
    L(s, "features").forEach(function (f) {
      if (GROUP_RE.test(f)) {
        ul = null;
        var h = document.createElement("p");
        h.className = "solution-detail__group mb-2";
        h.textContent = f;
        wrap.appendChild(h);
        return;
      }
      if (!ul) {
        ul = document.createElement("ul");
        ul.className = "check-list";
        wrap.appendChild(ul);
      }
      var li = document.createElement("li");
      li.className = "check-list__item";
      li.innerHTML = "<span class='led led--on'></span>";
      li.appendChild(document.createTextNode(f));
      ul.appendChild(li);
    });
  }

  function render(s) {
    var hero = document.getElementById("solution-hero");
    if (hero) {
      hero.innerHTML =
        '<div class="container page-hero__inner">' +
          '<a class="btn btn--ghost-light mb-4" href="solutions.html">&larr; ' + t("solutions.back") + "</a>" +
          '<h1 class="mb-1">' + L(s, "name") + "</h1>" +
        "</div>";
    }

    var wrap = document.getElementById("solution-detail");
    if (wrap) wrap.classList.toggle("solution-detail--stacked", s.layout === "stacked");

    var visual = document.getElementById("solution-visual");
    if (visual) {
      var img = document.createElement("img");
      img.src = s.modalImage || s.image;
      img.alt = L(s, "name") + " illustration";
      img.onerror = function () {
        this.onerror = null;
        this.src = FALLBACK_IMAGE;
      };
      visual.innerHTML = "";
      visual.appendChild(img);
    }

    var intro = document.getElementById("solution-intro");
    if (intro) intro.textContent = L(s, "intro");

    var text = document.getElementById("solution-text");
    if (text) text.textContent = L(s, "detail");

    renderFeatures(s);

    document.title = L(s, "name") + " | Navitech";
  }

  function renderNotFound() {
    var hero = document.getElementById("solution-hero");
    if (hero) {
      hero.innerHTML =
        '<div class="container page-hero__inner">' +
          '<a class="btn btn--ghost-light mb-4" href="solutions.html">&larr; ' + t("solutions.back") + "</a>" +
          '<h1 class="mb-4">' + t("solutions.notfound.h1") + "</h1>" +
          '<p class="lede">' + t("solutions.notfound.p") + "</p>" +
        "</div>";
    }
    var section = hero ? hero.parentElement.nextElementSibling : null;
    if (section && section.matches("section")) section.hidden = true;
  }

  function boot() {
    var id = param("id");
    var match = (window.NAVITECH_SOLUTIONS || []).filter(function (s) {
      return s.id === id;
    })[0];
    if (match) render(match);
    else renderNotFound();
  }

  document.addEventListener("DOMContentLoaded", boot);
  document.addEventListener("navitech:langchange", boot);
})();
