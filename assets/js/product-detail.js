/* ============================================================
   NAVITECH · PRODUCT DETAIL RENDERER
   Reads ?m=<id> and renders the full spec sheet from
   NAVITECH_PRODUCTS. Localized via NT_L + I18N.t; re-renders
   on language change.
   ============================================================ */
(function () {
  "use strict";

  var products = window.NAVITECH_PRODUCTS || [];
  var currentId = null;

  function param(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function fmt(n) {
    if (typeof n !== "number") return n;
    return n.toLocaleString("en-US");
  }

  function t(key, params) { return window.I18N.t(key, params); }

  function L(obj, key) { return window.NT_L(obj, key); }

  function row(label, value) {
    return "<tr><th>" + label + '</th><td class="spec-table__num">' + value + "</td></tr>";
  }

  function listHTML(items) {
    return items.map(function (i) { return "<span class='check-list__item'><span class='led led--on'></span>" + i + "</span>"; }).join("");
  }

  function tableHTML(rows) {
    return (
      '<div class="table-scroll">' +
        '<table class="spec-table"><tbody>' + rows + "</tbody></table>" +
      "</div>"
    );
  }

  function sectionHTML(title, body) {
    return (
      '<section class="spec-section">' +
        '<h3>' + title + "</h3>" +
        body +
      "</section>"
    );
  }

  function relatedCards(p) {
    var others = products.filter(function (o) { return o.id !== p.id; });
    return others.slice(0, 3).map(function (o) {
      return (
        '<a class="product-card" href="product.html?m=' + encodeURIComponent(o.id) + '">' +
          '<div class="product-card__visual">' +
            '<img src="' + o.photo + '" alt="' + o.name + ' product photo" loading="lazy">' +
          '</div>' +
          '<div class="product-card__body">' +
            '<div class="product-card__head">' +
              '<span class="product-card__name">' + o.name + "</span>" +
              '<span class="product-card__type">' + L(o, "typeLabel") + "</span>" +
            "</div>" +
            '<p class="product-card__tagline mb-0">' + L(o, "tagline") + "</p>" +
          "</div>" +
        "</a>"
      );
    }).join("");
  }

  function render(p) {
    var d = p.dimensions;
    var yesNo = function (v) { return v ? t("common.yes") : t("common.no"); };
    var facts = [
      [t("fact.hopper"), fmt(p.noteCapacity) + " " + t("unit.notes")],
      [t("fact.cassettes"), String(p.cassettes)],
      [t("fact.recycle"), yesNo(p.recycle)],
      [t("fact.width"), fmt(d.w) + " mm"],
      [t("fact.depth"), fmt(d.d) + " mm"],
      [t("fact.height"), fmt(d.h) + " mm"]
    ];

    var hero = document.getElementById("detail-hero");
    if (hero) {
      hero.innerHTML =
        '<div class="container page-hero__inner">' +
          '<nav class="breadcrumb" aria-label="Breadcrumb">' +
            '<a href="products.html">' + t("detail.breadcrumb") + "</a>" +
            '<span class="breadcrumb__sep">/</span>' +
            "<span>" + L(p, "series") + "</span>" +
          "</nav>" +
          '<span class="flag flag--dark mb-4">' + t("flag.spec") + "</span>" +
          '<h1 class="mb-1">' + p.name + "</h1>" +
          '<p class="kicker mb-2">' + L(p, "series") + " · " + L(p, "typeLabel") + "</p>" +
          '<p class="lede mb-0">' + L(p, "tagline") + "</p>" +
        "</div>";
    }

    var visual = document.getElementById("detail-visual");
    if (visual) {
      visual.innerHTML =
        '<img src="' + p.photo + '" alt="' + p.name + ' product photo">';
    }

    var factsEl = document.getElementById("detail-facts");
    if (factsEl) {
      factsEl.innerHTML = facts.map(function (f) {
        return (
          '<div class="product-card__spec">' +
            '<span class="product-card__spec-label">' + f[0] + "</span>" +
            '<span class="product-card__spec-value">' + f[1] + "</span>" +
          "</div>"
        );
      }).join("");
    }

    var overview = document.getElementById("detail-overview");
    if (overview) {
      overview.innerHTML =
        "<p>" + L(p, "tagline") + " " + t("detail.overview.trail") + "</p>" +
        sectionHTML(t("detail.section.functions"), '<div class="check-list">' + listHTML(L(p, "functions")) + "</div>") +
        sectionHTML(t("detail.section.auth"), '<div class="check-list">' + listHTML(L(p, "authentication")) + "</div>") +
        sectionHTML(t("detail.section.connect"), '<div class="check-list">' + listHTML(L(p, "connectivity")) + "</div>");
    }

    var specs = document.getElementById("detail-specs");
    if (specs) {
      specs.innerHTML =
        sectionHTML(t("detail.section.physical"), tableHTML(
          row(t("detail.row.dimensions"), fmt(d.w) + " × " + fmt(d.d) + " × " + fmt(d.h) + " mm") +
          row(t("detail.row.weight"), fmt(p.weight) + " kg") +
          row(t("detail.row.enclosure"), t("detail.enclosure.val"))
        )) +
        sectionHTML(t("detail.section.notehandling"), tableHTML(
          row(t("detail.row.input"), fmt(p.noteCapacity) + " " + t("unit.notes") + " " + t("detail.input.suffix")) +
          row(t("detail.row.depositCassettes"), String(p.cassettes)) +
          row(t("detail.row.reject"), yesNo(p.rejectCassette)) +
          row(t("detail.row.recycle"), p.recycle ? t("detail.recycle.yes") : t("detail.recycle.no"))
        )) +
        sectionHTML(t("detail.section.compliance"), '<div class="check-list">' + listHTML(L(p, "compliance")) + "</div>") +
        sectionHTML(t("detail.section.tamper"), '<div class="check-list">' + listHTML(L(p, "tamper")) + "</div>") +
        sectionHTML(t("detail.section.environment"), tableHTML(
          row(t("detail.row.temp"), p.environment.temp) +
          row(t("detail.row.humidity"), p.environment.humidity) +
          row(t("detail.row.weatherized"), yesNo(p.environment.weatherized))
        )) +
        sectionHTML(t("detail.section.power"), tableHTML(
          row(t("detail.row.input2"), p.power.input) +
          row(t("detail.row.consumption"), p.power.consumption)
        )) +
        sectionHTML(t("detail.section.options"), tableHTML(
          row(t("detail.row.options"), L(p, "options").join(" · "))
        ));
    }

    var dimBlock = document.getElementById("detail-dimensions");
    if (dimBlock) {
      // Reserved for the interactive dimension-check feature (later pass).
      // Currently a static elevation + dimension callouts, driven by data.
      dimBlock.innerHTML =
        '<div class="spec-visual">' +
          '<p class="kicker mb-4">' + t("detail.dimFlag") + "</p>" +
          '<div class="spec-visual__canvas">' +
            '<img src="' + p.photo + '" alt="' + p.name + ' product photo">' +
          "</div>" +
          '<div class="spec-visual__callouts">' +
            '<div class="spec-visual__callout"><span class="spec-visual__callout-label">' + t("fact.width") + "</span><span class=\"spec-visual__callout-value\">" + fmt(d.w) + " mm</span></div>" +
            '<div class="spec-visual__callout"><span class="spec-visual__callout-label">' + t("fact.depth") + "</span><span class=\"spec-visual__callout-value\">" + fmt(d.d) + " mm</span></div>" +
            '<div class="spec-visual__callout"><span class="spec-visual__callout-label">' + t("fact.height") + "</span><span class=\"spec-visual__callout-value\">" + fmt(d.h) + " mm</span></div>" +
            '<div class="spec-visual__callout"><span class="spec-visual__callout-label">' + t("detail.row.weight") + "</span><span class=\"spec-visual__callout-value\">" + fmt(p.weight) + " kg</span></div>" +
          "</div>" +
        "</div>";
    }

    var related = document.getElementById("detail-related");
    if (related) {
      var grid = document.getElementById("detail-related-grid");
      if (grid) grid.innerHTML = relatedCards(p);
      document.title = t("title.detail", { name: p.name, series: L(p, "series") });
    }
  }

  function renderNotFound() {
    var hero = document.getElementById("detail-hero");
    if (hero) {
      hero.innerHTML =
        '<div class="container page-hero__inner">' +
          '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="products.html">' + t("detail.breadcrumb") + '</a><span class="breadcrumb__sep">/</span><span>' + t("detail.notfound.h1") + "</span></nav>" +
          '<h1 class="mb-4">' + t("detail.notfound.h1") + "</h1>" +
          '<p class="lede">' + t("detail.notfound.p") + "</p>" +
        "</div>";
    }
  }

  function boot() {
    var id = param("m");
    var match = products.filter(function (p) { return p.id === id; })[0];
    currentId = id;
    if (match) render(match);
    else renderNotFound();
  }

  document.addEventListener("DOMContentLoaded", boot);
  document.addEventListener("navitech:langchange", boot);
})();
