/* ============================================================
   NAVITECH · CONTACT / QUOTE FORM
   Static-site handler: validates required fields, then shows a
   confirmation. Wire to a real endpoint in a later pass.
   Error messages are localized via I18N (falls back to EN).
   ============================================================ */
(function () {
  "use strict";

  var I18N = window.I18N || null;

  var form = document.getElementById("quote-form");
  if (!form) return;

  var success = document.getElementById("form-success");

  function t(key) {
    if (I18N) return I18N.t(key);
    return key === "form.err.required" ? "Required field" : "Enter a valid email address";
  }

  function setError(input, key) {
    var field = input.closest(".form-field");
    var hint = field && field.querySelector(".form-field__error");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("data-err", key);
    if (hint) hint.textContent = t(key);
  }

  function clearError(input) {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("data-err");
    var field = input.closest(".form-field");
    var hint = field && field.querySelector(".form-field__error");
    if (hint) hint.textContent = "";
  }

  function refreshErrors() {
    form.querySelectorAll("[data-err]").forEach(function (input) {
      var field = input.closest(".form-field");
      var hint = field && field.querySelector(".form-field__error");
      if (hint) hint.textContent = t(input.getAttribute("data-err"));
    });
  }

  ["input", "change"].forEach(function (evt) {
    form.addEventListener(evt, function (e) {
      if (e.target.matches("input, select, textarea")) clearError(e.target);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var valid = true;
    form.querySelectorAll("[required]").forEach(function (input) {
      var value = input.value.trim();
      if (!value) {
        setError(input, "form.err.required");
        valid = false;
        return;
      }
      if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError(input, "form.err.email");
        valid = false;
      }
    });

    if (!valid) return;

    form.style.display = "none";
    if (success) success.classList.add("is-visible");
  });

  document.addEventListener("navitech:langchange", refreshErrors);
})();
