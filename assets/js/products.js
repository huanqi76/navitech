/* ============================================================
   NAVITECH · PRODUCT CATALOG
   Renders filter tabs and cards from NAVITECH_PRODUCTS.
   Filtering is a plain visibility toggle. Re-renders on
   language change, preserving the active filter.
   ============================================================ */
(function () {
  "use strict";

  var products = window.NAVITECH_PRODUCTS || [];
  var types = window.NAVITECH_TYPES || [];
  var activeFilter = "all";

  function fmt(n) {
    if (typeof n !== "number") return n;
    return n.toLocaleString("en-US");
  }

  function cardHTML(p) {
    var alt = (p.name || "") + " product photo";
    return (
      '<a class="product-card" href="product.html?m=' + encodeURIComponent(p.id) + '">' +
        '<div class="product-card__visual">' +
          '<img src="' + p.photo + '" alt="' + alt + '" loading="lazy">' +
        '</div>' +
        '<div class="product-card__body">' +
          '<div class="product-card__head">' +
            '<span class="product-card__name">' + p.name + '</span>' +
            '<span class="product-card__type">' + window.NT_L(p, "typeLabel") + '</span>' +
          '</div>' +
          '<p class="product-card__tagline mb-0">' + window.NT_L(p, "tagline") + '</p>' +
          '<div class="product-card__specs">' +
            '<div class="product-card__spec">' +
              '<span class="product-card__spec-label">' + window.I18N.t("fact.hopper") + '</span>' +
              '<span class="product-card__spec-value">' + fmt(p.noteCapacity) + " " + window.I18N.t("unit.notes") + '</span>' +
            '</div>' +
            '<div class="product-card__spec">' +
              '<span class="product-card__spec-label">' + window.I18N.t("fact.cassettes") + '</span>' +
              '<span class="product-card__spec-value">' + p.cassettes + '</span>' +
            '</div>' +
            '<div class="product-card__spec">' +
              '<span class="product-card__spec-label">' + window.I18N.t("detail.row.weight") + '</span>' +
              '<span class="product-card__spec-value">' + fmt(p.weight) + ' kg</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function buildFilters(container) {
    container.innerHTML = "";
    var btn = function (id, label) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "filter-btn";
      b.setAttribute("aria-pressed", id === activeFilter ? "true" : "false");
      b.dataset.type = id;
      b.textContent = label;
      b.addEventListener("click", function () {
        activeFilter = id;
        container.querySelectorAll(".filter-btn").forEach(function (n) {
          n.setAttribute("aria-pressed", n === b ? "true" : "false");
        });
        applyFilter(id);
      });
      return b;
    };

    container.appendChild(btn("all", window.I18N.t("products.filter.all")));
    types.forEach(function (t) {
      var label = window.I18N.isZh() ? t.labelZh : t.label;
      container.appendChild(btn(t.id, label));
    });
  }

  function applyFilter(typeId) {
    var grid = document.getElementById("product-grid");
    var count = document.getElementById("product-count");
    if (!grid) return;
    grid.querySelectorAll(".product-card").forEach(function (card) {
      card.classList.toggle("is-hidden", typeId !== "all" && card.dataset.type !== typeId);
    });
    if (count) {
      var shown = grid.querySelectorAll(".product-card:not(.is-hidden)").length;
      count.textContent = window.I18N.t("products.count", { count: shown, total: products.length });
    }
  }

  function init() {
    var grid = document.getElementById("product-grid");
    var filterBar = document.getElementById("product-filters");
    var count = document.getElementById("product-count");
    if (!grid) return;

    if (filterBar) buildFilters(filterBar);
    grid.innerHTML = "";

    products.forEach(function (p) {
      var wrap = document.createElement("div");
      wrap.innerHTML = cardHTML(p);
      var card = wrap.firstElementChild;
      card.dataset.type = p.type;
      grid.appendChild(card);
    });

    applyFilter(activeFilter);
    if (count) {
      count.textContent = window.I18N.t("products.count", { count: products.length, total: products.length });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("navitech:langchange", init);
})();
