/* ============================================================
   NAVITECH · CLIENT LOGO WALL
   Renders client logos from NAVITECH_LOGOS. Shows the uploaded
   image when `logo` is set, otherwise falls back to a text
   wordmark. Drop files in assets/img/logos/ and set the path
   in products-data.js.
   ============================================================ */
(function () {
  "use strict";

  function itemHTML(c) {
    var href = "successful_cases.html";
    if (c.logo) {
      return '<a class="logo-wall__item" href="' + href + '"><img src="' + c.logo + '" alt="' + c.name + '"></a>';
    }
    return '<a class="logo-wall__item" href="' + href + '">' + c.name + "</a>";
  }

  function render() {
    var wrap = document.querySelector("[data-logo-wall]");
    if (!wrap) return;
    wrap.innerHTML = (window.NAVITECH_LOGOS || []).map(itemHTML).join("");
  }

  document.addEventListener("DOMContentLoaded", render);
})();
