/* ============================================================
   NAVITECH · SOLUTIONS
   Renders the three solution cards on solutions.html and
   exposes NAVITECH_SOLUTIONS for solution.html?id=<id>.
   Card copy lives in NAVITECH_SOLUTIONS below (EN top-level,
   Chinese in each item's `zh` object).
   ============================================================ */
(function () {
  "use strict";

  var SOLUTIONS = [
    {
      id: "cash-deposit",
      num: "01",
      name: "Cash Deposit Solution",
      intro: "",
      image: "assets/img/kiosks/k1.png",
      modalImage: "assets/img/kiosks/k1.png",
      detail: "Deposit automation for every placement a bank network uses. Terminals, note handling, secure cassettes, and the operations contract that keeps them running are delivered together.",
      features: [
        "Automatic counting and counterfeit detection with banknote serial-number capture",
        "Deposit results returned directly to the treasury management system",
        "Real-time monitoring and alerts on the management platform"
      ],
      zh: {
        name: "投款机解决方案",
        intro: "",
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
      name: "Digital Fingerprint E-lock Solution",
      intro: "",
      image: "assets/img/solutions/safedoor-lock.png",
      modalImage: "assets/img/solutions/safedoor-lock.png",
      detail: "One-time dynamic passwords with AB-role unlocking. Designed as an upgrade replacement for traditional mechanical combination locks on ATMs and safedoor entries, it meets banks' centralized management requirements, reduces operational risk, and adds centralized authorization to the lock management system with one-time unlock password mechanisms and full management functions \u2014 eliminating the security risks of traditional mechanical lock management.",
      features: [
        "Fingerprint and dynamic-password access for safedoor entries",
        "Two-person authorization with full audit trails",
        "Remote lockout and scheduled unlocking",
        "Tamper alarms integrated with 24/7 monitoring"
      ],
      zh: {
        name: "数字指纹电子锁解决方案",
        intro: "",
        detail: "动态密码一次一码，AB角开锁，本产品适用于ATM传统机械密码锁的升级替换品，满足了银行集中管理模式的需求，降低了运营风险，增加了锁管理系统的集中授权，一次性开锁密码机制和完整管理功能，彻底解决了传统机械密码锁管理模式的安全隐患。",
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
      intro: "",
      image: "assets/img/kiosks/k4.png",
      modalImage: "assets/img/solutions/qr-code-large.png",
      layout: "stacked",
      detail: "Cardless QR withdrawal at the cash recycler: the customer starts the withdrawal on the CRS, scans the QR code with the mobile app, and the machine dispenses the cash on success.",
      features: [
        "Scenario 1: Withdrawal Process",
        "User approaches the ATM, selects \u201CQR Withdrawal\u201D on the interface, enters the desired amount in the app",
        "User scans the ATM-generated QR code with the mobile banking app, pays the withdrawal amount via the app, and waits for backend confirmation",
        "ATM verifies and dispenses cash",
        "Scenario 2: Deposit Process",
        "User selects the \u201CQR Deposit\u201D option on the ATM interface",
        "After selecting \u201CQR Deposit\u201D, the user generates a QR code via the mobile banking app. The ATM scans this QR code and retrieves the user's account information from the backend for the subsequent deposit",
        "The user places cash into the ATM's deposit slot. After the ATM completes cash identification and storage, it notifies the backend to credit the user's account", 
        "The entire deposit process is secure and efficient, with no physical card required"
      ],
      zh: {
        name: "二维码存取款解决方案",
        intro: "",
        detail: "在现金循环机（CRS）上实现无卡二维码取款：客户在 CRS 上发起取款，使用移动应用扫描QR码，支付成功后机器吐出钞票。",
        features: [
          "场景一、取款流程",
          "用户来到ATM机前，在操作界面选择\u201CQR取款\u201D选项，在应用中输入想要取款的金额",
          "用户用手机银行扫描生成的QR码，利用手机银行支付取款金额，等待后台的确认",
          "ATM验证并吐出钞票",
          "场景二、存款流程",
          "用户在ATM机的操作界面中，选择\u201CQR存款\u201D选项",
          "用户利用手机银行产生QR码，ATM扫描该QR码，并通过后台查找用户的账户信息，为后续存款操作的账户",
          "用户将现金放入ATM机的存款口，ATM机完成现金识别和存储后，通知后台给用户上账，交易即宣告完成",
          "整个存款过程安全高效，无需实体卡参与"
        ]
      }
    }
  ];

  window.NAVITECH_SOLUTIONS = SOLUTIONS;

  function L(s, key) {
    return window.NT_L(s, key);
  }

  function t(key) {
    return window.I18N.t(key);
  }

  var FALLBACK_IMAGE = "assets/img/kiosks/k2.png";

  function cardHTML(s) {
    return (
      '<a class="solution-card" href="solution.html?id=' + encodeURIComponent(s.id) + '">' +
        '<span class="solution-card__visual">' +
          '<img src="' + s.image + '" alt="" onerror="this.onerror=null;this.src=\'' + FALLBACK_IMAGE + '\'">' +
        '</span>' +
        '<span class="solution-card__body">' +
          '<span class="solution-card__num">' + s.num + "</span>" +
          '<span class="solution-card__name">' + L(s, "name") + "</span>" +
          '<span class="solution-card__intro">' + L(s, "intro") + "</span>" +
          '<span class="solution-card__cta">' + t("solutions.card.cta") + ' &rarr;</span>' +
        "</span>" +
      "</a>"
    );
  }

  function renderCards() {
    var grid = document.getElementById("solution-grid");
    if (!grid) return;
    grid.innerHTML = SOLUTIONS.map(cardHTML).join("");
  }

  document.addEventListener("navitech:langchange", renderCards);

  document.addEventListener("DOMContentLoaded", renderCards);
})();
