/* ============================================================
   NAVITECH · SUCCESSFUL CASES
   Renders full, readable case sections: client logo, copy,
   a concise detail paragraph, and a captioned photo gallery.
   Case copy lives in
   NAVITECH_CASES (products-data.js); client logos live in
   NAVITECH_LOGOS. Replace placeholder detail / highlights copy
   and add gallery images as they are approved.
   ============================================================ */
(function () {
  "use strict";

  var CASES = window.NAVITECH_CASES || [];
  var LOGOS = window.NAVITECH_LOGOS || [];

  function L(s, key) {
    return window.NT_L(s, key);
  }

  function t(key) {
    return window.I18N.t(key);
  }

  function logoFor(c) {
    var entry = null;
    LOGOS.forEach(function (l) {
      if (l.id === c.id) entry = l;
    });
    return entry;
  }

  function logoHTML(c) {
    var entry = logoFor(c);
    if (entry && entry.logo) {
      return '<img class="case__logo-img" src="' + entry.logo + '" alt="' + c.name + ' logo">';
    }
    return '<span class="case__logo-text">' + c.name + "</span>";
  }

  function mediaHTML(m, c) {
    var alt = m.alt || c.name;
    var media;
    if (m.type === "video") {
      media =
        '<div class="case__photo case__photo--video">' +
          '<video controls preload="metadata" playsinline' +
            (m.poster ? ' poster="' + m.poster + '"' : "") + ">" +
            '<source src="' + m.src + '" type="video/mp4">' +
          "</video>" +
        "</div>";
    } else {
      media = '<div class="case__photo"><img loading="lazy" src="' + m.src + '" alt="' + alt + '"></div>';
    }
    var caption = window.I18N.isZh() ? (m.captionZh || m.caption || "") : (m.caption || "");
    var full = m.type === "video" || m.full ? " case__figure--full" : "";
    return (
      '<figure class="case__figure' + full + '">' +
        media +
        (caption ? '<figcaption class="case__photo-cap">' + caption + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function galleryHTML(c) {
    var media = c.media || [];
    if (!media.length) {
      return (
        '<div class="case__gallery">' +
          '<div class="case__photo case__photo--ph"><span class="case__photo-note">' + t("detail.photoNote") + "</span></div>" +
          '<div class="case__photo case__photo--ph"><span class="case__photo-note">' + t("detail.photoNote") + "</span></div>" +
        "</div>"
      );
    }
    return (
      '<div class="case__gallery">' +
        media.map(function (m) { return mediaHTML(m, c); }).join("") +
      "</div>"
    );
  }

  function caseHTML(c, i) {
    var alt = i % 2 === 1 ? " case--alt" : "";
    return (
      '<article class="case' + alt + '" id="case-' + c.id + '">' +
        '<div class="container">' +
          '<div class="case__head">' +
            '<span class="case__num">' + c.num + "</span>" +
            '<span class="case__logo">' + logoHTML(c) + "</span>" +
          "</div>" +
          '<div class="case__layout">' +
            '<div class="case__copy">' +
              '<h2 class="case__name">' + c.name + "</h2>" +
              '<p class="case__country">' + L(c, "country") + "</p>" +
              '<p class="case__intro">' + L(c, "intro") + "</p>" +
              '<p class="case__detail">' + L(c, "detail") + "</p>" +
            "</div>" +
            galleryHTML(c) +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    var list = document.getElementById("case-list");
    if (!list) return;
    list.innerHTML = CASES.map(caseHTML).join("");
  }

  document.addEventListener("navitech:langchange", render);
  document.addEventListener("DOMContentLoaded", render);
})();
