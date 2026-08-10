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
      modalImage: "assets/img/solutions/deposit-connect-large.png",
      detail: "Deposit automation for every placement a bank network uses. Terminals, note handling, secure cassettes, and the operations contract that keeps them running are delivered together.",
      features: [
        "Automatic counting and counterfeit detection with banknote serial-number capture",
        "Deposit results returned directly to the treasury management system",
        "Real-time monitoring and alerts on the management platform"
      ],
      zh: {
        name: "投款机解决方案",
        intro: "适用于分行大堂、24 小时外墙、零售网点与现金中心的自助存款终端。",
        detail: "覆盖银行网络全部部署形态的存款自动化。终端、纸币处理、安全钞箱以及保障其持续运行的运营合同，一站式交付。",
        features: [
          "自动点钞、验钞记录钞票冠字号信息",
          "直接将投款结果返回给零管系统",
          "管理平台实时监控、预警"
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
      image: "assets/img/solutions/qr-code.png",
      modalImage: "assets/img/solutions/qr-code-large.png",
      detail: "Cardless QR withdrawal at the cash recycler: the customer starts the withdrawal on the CRS, scans the KHQR code with the mobile app, and the machine dispenses the cash on success.",
      features: [
        "Customer selects the QR withdrawal function on the CRS",
        "Customer selects the currency (USD or KHR)",
        "Customer selects or enters the withdrawal amount",
        "Customer scans the KHQR code with the mobile application",
        "Customer completes the payment flow in the mobile application (enters PIN, confirms payment, etc.)",
        "If the payment succeeds, the CRS dispenses the cash"
      ],
      zh: {
        name: "二维码存取款解决方案",
        intro: "基于二维码的无卡存取款，让自助现金操作迁移至手机端。",
        detail: "在现金循环机（CRS）上实现无卡二维码取款：客户在 CRS 上发起取款，使用移动应用扫描 KHQR 码，支付成功后机器吐出钞票。",
        features: [
          "客户在 CRS 上选择二维码取款功能",
          "客户选择币种（美元或瑞尔）",
          "客户选择或输入取款金额",
          "客户使用移动应用程序扫描该 KHQR 码",
          "客户在移动应用程序上继续完成支付流程（输入 PIN 码、确认支付等）",
          "若支付成功，CRS 吐出钞票"
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
