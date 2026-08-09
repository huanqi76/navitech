/* ============================================================
   NAVITECH · SOLUTIONS
   Renders the three solution cards and the detail modal.
   Card copy lives in NAVITECH_SOLUTIONS below (EN top-level,
   Chinese in each item's `zh` object). Replace the placeholder
   detail copy with the real content as it is approved.
   ============================================================ */
(function () {
  "use strict";

  var SOLUTIONS = [
    {
      id: "cash-deposit",
      num: "01",
      name: "Cash Deposit Solution",
      intro: "Self-service deposit terminals for branch lobbies, 24-hour walls, retail sites, and cash centers.",
      image: "assets/img/kiosks/k1.png",
      detail: "Deposit automation for every placement a bank network uses. Terminals, note handling, secure cassettes, and the operations contract that keeps them running are delivered together.",
      features: [
        "Lobby, through-the-wall, compact, and cash-center terminals",
        "Multi-denomination counting and counterfeit detection",
        "Secure cassettes with 24/7 remote monitoring",
        "Installation, training, and cash logistics under one contract"
      ],
      zh: {
        name: "投款机解决方案",
        intro: "适用于分行大堂、24 小时外墙、零售网点与现金中心的自助存款终端。",
        detail: "覆盖银行网络全部部署形态的存款自动化。终端、纸币处理、安全钞箱以及保障其持续运行的运营合同，一站式交付。",
        features: [
          "大堂、穿墙式、紧凑型与现金中心终端",
          "多面额点钞与假币检测",
          "安全钞箱与 7×24 远程监控",
          "同一合同下的安装、培训与现金物流"
        ]
      }
    },
    {
      id: "safedoor",
      num: "02",
      name: "Fingerprint Safedoor Lock Solution",
      intro: "Biometric access control for cash rooms, vaults, and safedoor entries.",
      image: "assets/img/solutions/safedoor-lock.png",
      modalImage: "assets/img/solutions/lock-large.png",
      detail: "Access control for the rooms where cash is handled. Fingerprint and dynamic-password locking on safedoors, with audit trails and remote authorization from the operations desk.",
      features: [
        "Fingerprint and dynamic-password access for safedoor entries",
        "Two-person authorization with full audit trails",
        "Remote lockout and scheduled unlocking",
        "Tamper alarms integrated with 24/7 monitoring"
      ],
      zh: {
        name: "动态密码锁解决方案",
        intro: "面向现金室、金库与安全门入口的生物识别门禁控制。",
        detail: "面向现金处理空间的门禁控制。安全门采用指纹与动态密码双重锁控，并支持审计记录与运维中心的远程授权。",
        features: [
          "安全门指纹与动态密码双重验证",
          "双人授权与完整审计记录",
          "远程锁定与定时解锁",
          "与 7×24 监控联动的防破坏告警"
        ]
      }
    },
    {
      id: "qr",
      num: "03",
      name: "QR Code Withdrawal & Deposit Solution",
      intro: "Cardless, QR-based cash deposit and withdrawal for self-service banking.",
      image: "assets/img/kiosks/k3.png",
      detail: "Put self-service cash on a phone. QR-based deposit and withdrawal that works with the bank's mobile app, with secure note handling and settlement built in.",
      features: [
        "Cardless deposit and withdrawal via QR code",
        "Works with the bank's mobile banking app",
        "Self-service machines with secure note handling",
        "Settlement and reconciliation built in"
      ],
      zh: {
        name: "二维码存取款解决方案",
        intro: "基于二维码的无卡存取款，让自助现金操作迁移至手机端。",
        detail: "将自助现金操作迁移至手机端。基于二维码的存取款对接银行手机银行 App，并内置安全纸币处理与结算对账。",
        features: [
          "通过二维码实现无卡存取款",
          "对接银行手机银行 App",
          "安全纸币处理的自助终端",
          "内置结算与对账"
        ]
      }
    }
  ];

  window.NAVITECH_SOLUTIONS = SOLUTIONS;

  var lastTrigger = null;

  function L(s, key) {
    return window.NT_L(s, key);
  }

  function t(key) {
    return window.I18N.t(key);
  }

  var FALLBACK_IMAGE = "assets/img/kiosks/k2.png";

  function cardHTML(s) {
    return (
      '<button type="button" class="solution-card" data-solution="' + s.id + '" aria-haspopup="dialog">' +
        '<span class="solution-card__visual">' +
          '<img src="' + s.image + '" alt="" onerror="this.onerror=null;this.src=\'' + FALLBACK_IMAGE + '\'">' +
        '</span>' +
        '<span class="solution-card__body">' +
          '<span class="solution-card__num">' + s.num + "</span>" +
          '<span class="solution-card__name">' + L(s, "name") + "</span>" +
          '<span class="solution-card__intro">' + L(s, "intro") + "</span>" +
          '<span class="solution-card__cta">' + t("solutions.card.cta") + ' &rarr;</span>' +
        "</span>" +
      "</button>"
    );
  }

  function renderCards() {
    var grid = document.getElementById("solution-grid");
    if (!grid) return;
    grid.innerHTML = SOLUTIONS.map(cardHTML).join("");
  }

  function openModal(s) {
    var modal = document.getElementById("solution-modal");
    if (!modal) return;
    document.getElementById("solution-modal-kicker").textContent = s.num;
    document.getElementById("solution-modal-title").textContent = L(s, "name");
    document.getElementById("solution-modal-detail").textContent = L(s, "detail");

    var visual = modal.querySelector(".modal__visual img");
    visual.src = s.modalImage || s.image;
    visual.onerror = function () {
      this.onerror = null;
      this.src = FALLBACK_IMAGE;
    };
    visual.alt = L(s, "name");

    var list = document.getElementById("solution-modal-features");
    list.innerHTML = "";
    var ul = document.createElement("ul");
    L(s, "features").forEach(function (f) {
      var li = document.createElement("li");
      li.textContent = f;
      ul.appendChild(li);
    });
    list.appendChild(ul);

    modal.hidden = false;
    document.body.classList.add("modal-open");
    var close = modal.querySelector(".modal__close");
    if (close) close.focus();
  }

  function closeModal() {
    var modal = document.getElementById("solution-modal");
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastTrigger) lastTrigger.focus();
  }

  document.addEventListener("click", function (e) {
    var card = e.target.closest("[data-solution]");
    if (card) {
      var s = null;
      SOLUTIONS.forEach(function (item) {
        if (item.id === card.getAttribute("data-solution")) s = item;
      });
      if (s) {
        lastTrigger = card;
        openModal(s);
      }
      return;
    }
    if (e.target.closest("[data-modal-close]")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  document.addEventListener("navitech:langchange", renderCards);

  document.addEventListener("DOMContentLoaded", renderCards);
})();
