/* ============================================================
   NAVITECH · PRODUCT DATA  |  PLACEHOLDER
   ============================================================
   NOTE: All model names, dimensions, capacities, weights, and
   photo references below are PLACEHOLDERS pending real product
   data. Replace the values in this single file to update the
   catalog, cards, and detail pages (no markup changes needed).

   PHOTOS: drop real imagery at assets/img/products/<id>.jpg (or
   .png) and set the `photo` field to point at it. Until a photo
   is uploaded, the visual area shows a neutral panel (the old
   schematic SVGs have been removed).

   LOGOS: drop client logo files at assets/img/logos/<id>.svg or
   <id>.png and set the matching `logo` field in NAVITECH_LOGOS.
   Until set, the site renders text wordmarks instead.

   BRAND LOGO: drop the site logo at assets/img/logo.svg (or
   .png) and set NAVITECH_BRAND.logo below. Until set, the nav
   and footer render the CSS glyph + wordmark instead.

   i18n: each product carries a `zh` object with the Chinese
   strings; English strings are the top-level fields.
   ============================================================ */

window.NAVITECH_PRODUCTS = [
  {
    id: "nt-100",
    name: "NT-100",
    series: "Lobby Deposit",
    type: "lobby",
    typeLabel: "Lobby",
    tagline: "Cash deposit terminal for branch lobbies and self-service areas.",
    // PLACEHOLDER: replace with engineering data
    dimensions: { w: 620, d: 640, h: 1850 }, // mm
    weight: 320, // kg
    noteCapacity: 3000, // notes, input hopper
    cassettes: 2, // deposit cassettes
    rejectCassette: true,
    recycle: false,
    functions: ["Cash deposit", "Multi-denomination counting", "Counterfeit detection", "Immediate credit", "Receipt printing"],
    authentication: ["UV", "IR", "Magnetic", "Thickness", "Contact image sensor (CIS)"],
    connectivity: ["10/100BASE-T Ethernet", "4G LTE modem option", "VPN client", "NFC service port"],
    compliance: ["PCI PED (PIN pad)", "EMV Level 1 & 2 (card reader)", "UL 291 safe option", "3DES / AES-256 encryption", "Anti-skimming"],
    tamper: ["Six-axis tilt & motion sensor", "Intrusion switches", "Smart-card security key", "Tamper-evident seals"],
    environment: { temp: "0 to 40 °C", humidity: "20–90% RH non-condensing" },
    power: { input: "AC 100–240 V, 50/60 Hz", consumption: "550 W peak" },
    options: ["Recycle module (NT-150)", "UPS integration", "Barcode / QR validation", "Cash-on-deposit receipt printer"],
    photo: "assets/img/products/nt-100.jpg",
    figure: "lobby",
    zh: {
      series: "大堂存款机",
      typeLabel: "大堂",
      tagline: "适用于分行大堂与自助服务区的全功能现金存款终端。",
      functions: ["现金存款", "多面额点钞", "假币检测", "即时入账", "凭条打印"],
      authentication: ["紫外 (UV)", "红外 (IR)", "磁性检测", "厚度检测", "接触式图像传感器 (CIS)"],
      connectivity: ["10/100BASE-T 以太网", "4G LTE 模块（选配）", "VPN 客户端", "NFC 维护端口"],
      compliance: ["PCI PED（密码键盘）", "EMV 1/2 级（读卡器）", "UL 291 保险箱（选配）", "3DES / AES-256 加密", "防插卡盗刷"],
      tamper: ["六轴倾斜与移动传感器", "入侵开关", "智能卡安全密钥", "防破坏封条"],
      options: ["循环钞箱模块（NT-150）", "UPS 集成", "条码 / QR 核验", "现金存款凭条打印机"]
    }
  },
  {
    id: "nt-150",
    name: "NT-150",
    series: "Lobby Deposit & Recycle",
    type: "lobby",
    typeLabel: "Lobby",
    tagline: "Deposit and recycle terminal that reissues verified notes for dispense.",
    dimensions: { w: 650, d: 680, h: 1850 },
    weight: 390,
    noteCapacity: 4000,
    cassettes: 4, // 2 deposit + 2 recycle
    rejectCassette: true,
    recycle: true,
    functions: ["Cash deposit", "Note recycling", "Multi-denomination counting", "Counterfeit detection", "Dispense for cashiers", "Immediate credit"],
    authentication: ["UV", "IR", "Magnetic", "Thickness", "Contact image sensor (CIS)"],
    connectivity: ["10/100BASE-T Ethernet", "4G LTE modem option", "VPN client", "NFC service port"],
    compliance: ["PCI PED (PIN pad)", "EMV Level 1 & 2 (card reader)", "UL 291 safe option", "3DES / AES-256 encryption", "Anti-skimming"],
    tamper: ["Six-axis tilt & motion sensor", "Intrusion switches", "Smart-card security key", "Tamper-evident seals"],
    environment: { temp: "0 to 40 °C", humidity: "20–90% RH non-condensing" },
    power: { input: "AC 100–240 V, 50/60 Hz", consumption: "650 W peak" },
    options: ["Extended cassette set", "UPS integration", "Barcode / QR validation"],
    photo: "assets/img/products/nt-150.jpg",
    figure: "lobby",
    zh: {
      series: "大堂存款与循环机",
      typeLabel: "大堂",
      tagline: "存款与循环终端，将验证后的纸币作为取现钞循环使用。",
      functions: ["现金存款", "纸币循环", "多面额点钞", "假币检测", "柜员取现", "即时入账"],
      authentication: ["紫外 (UV)", "红外 (IR)", "磁性检测", "厚度检测", "接触式图像传感器 (CIS)"],
      connectivity: ["10/100BASE-T 以太网", "4G LTE 模块（选配）", "VPN 客户端", "NFC 维护端口"],
      compliance: ["PCI PED（密码键盘）", "EMV 1/2 级（读卡器）", "UL 291 保险箱（选配）", "3DES / AES-256 加密", "防插卡盗刷"],
      tamper: ["六轴倾斜与移动传感器", "入侵开关", "智能卡安全密钥", "防破坏封条"],
      options: ["扩展钞箱组", "UPS 集成", "条码 / QR 核验"]
    }
  },
  {
    id: "nt-200",
    name: "NT-200",
    series: "Compact Deposit",
    type: "compact",
    typeLabel: "Compact",
    tagline: "Compact deposit terminal for retail sites, kiosks, and counter-adjacent placement.",
    dimensions: { w: 480, d: 540, h: 1400 },
    weight: 210,
    noteCapacity: 2000,
    cassettes: 1,
    rejectCassette: true,
    recycle: false,
    functions: ["Cash deposit", "Multi-denomination counting", "Counterfeit detection", "Receipt printing"],
    authentication: ["UV", "IR", "Thickness", "Contact image sensor (CIS)"],
    connectivity: ["10/100BASE-T Ethernet", "4G LTE modem option", "VPN client"],
    compliance: ["PCI PED (PIN pad)", "EMV Level 1 & 2 (card reader)", "3DES / AES-256 encryption", "Anti-skimming"],
    tamper: ["Tilt & motion sensor", "Intrusion switches", "Tamper-evident seals"],
    environment: { temp: "0 to 40 °C", humidity: "20–90% RH non-condensing" },
    power: { input: "AC 100–240 V, 50/60 Hz", consumption: "420 W peak" },
    options: ["Cashier-count mode", "Barcode / QR validation", "Wall-mount plinth"],
    photo: "assets/img/products/nt-200.jpg",
    figure: "compact",
    zh: {
      series: "紧凑型存款机",
      typeLabel: "紧凑型",
      tagline: "适用于零售网点、自助点与柜面相邻位置的紧凑型存款终端。",
      functions: ["现金存款", "多面额点钞", "假币检测", "凭条打印"],
      authentication: ["紫外 (UV)", "红外 (IR)", "厚度检测", "接触式图像传感器 (CIS)"],
      connectivity: ["10/100BASE-T 以太网", "4G LTE 模块（选配）", "VPN 客户端"],
      compliance: ["PCI PED（密码键盘）", "EMV 1/2 级（读卡器）", "3DES / AES-256 加密", "防插卡盗刷"],
      tamper: ["倾斜与移动传感器", "入侵开关", "防破坏封条"],
      options: ["柜员点钞模式", "条码 / QR 核验", "壁挂底座"]
    }
  },
  {
    id: "nt-500",
    name: "NT-500",
    series: "Through-the-Wall",
    type: "ttw",
    typeLabel: "Through-the-Wall",
    tagline: "Wall-mounted 24/7 deposit terminal for exterior branch envelopes and drive-up sites.",
    dimensions: { w: 560, d: 620, h: 1900 },
    weight: 350,
    noteCapacity: 3500,
    cassettes: 2,
    rejectCassette: true,
    recycle: false,
    functions: ["24/7 cash deposit", "Envelope & note deposit", "Multi-denomination counting", "Counterfeit detection", "Receipt printing"],
    authentication: ["UV", "IR", "Magnetic", "Thickness", "Contact image sensor (CIS)"],
    connectivity: ["10/100BASE-T Ethernet", "4G LTE modem option", "VPN client", "NFC service port"],
    compliance: ["PCI PED (PIN pad)", "EMV Level 1 & 2 (card reader)", "UL 291 safe option", "3DES / AES-256 encryption", "Anti-skimming"],
    tamper: ["Six-axis tilt & motion sensor", "Intrusion switches", "Smart-card security key", "Vandal-resistant fascia"],
    environment: { temp: "-5 to 45 °C", humidity: "20–90% RH non-condensing", weatherized: true },
    power: { input: "AC 100–240 V, 50/60 Hz", consumption: "580 W peak" },
    options: ["Heated note path", "UPS integration", "Drive-up pedestal"],
    photo: "assets/img/products/nt-500.jpg",
    figure: "ttw",
    zh: {
      series: "穿墙式存款机",
      typeLabel: "穿墙式",
      tagline: "面向分行外墙通道与驾驶通道场所的 24 小时穿墙存款终端。",
      functions: ["24 小时现金存款", "信封与现金存款", "多面额点钞", "假币检测", "凭条打印"],
      authentication: ["紫外 (UV)", "红外 (IR)", "磁性检测", "厚度检测", "接触式图像传感器 (CIS)"],
      connectivity: ["10/100BASE-T 以太网", "4G LTE 模块（选配）", "VPN 客户端", "NFC 维护端口"],
      compliance: ["PCI PED（密码键盘）", "EMV 1/2 级（读卡器）", "UL 291 保险箱（选配）", "3DES / AES-256 加密", "防插卡盗刷"],
      tamper: ["六轴倾斜与移动传感器", "入侵开关", "智能卡安全密钥", "防破坏面板"],
      options: ["加热纸币通道", "UPS 集成", "驾驶通道底座"]
    }
  },
  {
    id: "nt-520",
    name: "NT-520",
    series: "Through-the-Wall Compact",
    type: "ttw",
    typeLabel: "Through-the-Wall",
    tagline: "Compact wall unit for fast-cash zones, fuel forecourts, and 24-hour annexes.",
    dimensions: { w: 500, d: 560, h: 1700 },
    weight: 270,
    noteCapacity: 2500,
    cassettes: 1,
    rejectCassette: true,
    recycle: false,
    functions: ["24/7 cash deposit", "Multi-denomination counting", "Counterfeit detection", "Receipt printing"],
    authentication: ["UV", "IR", "Thickness", "Contact image sensor (CIS)"],
    connectivity: ["10/100BASE-T Ethernet", "4G LTE modem option", "VPN client"],
    compliance: ["PCI PED (PIN pad)", "EMV Level 1 & 2 (card reader)", "3DES / AES-256 encryption", "Anti-skimming"],
    tamper: ["Tilt & motion sensor", "Intrusion switches", "Vandal-resistant fascia"],
    environment: { temp: "-5 to 45 °C", humidity: "20–90% RH non-condensing", weatherized: true },
    power: { input: "AC 100–240 V, 50/60 Hz", consumption: "500 W peak" },
    options: ["Heated note path", "UPS integration"],
    photo: "assets/img/products/nt-520.jpg",
    figure: "ttw",
    zh: {
      series: "穿墙式紧凑型",
      typeLabel: "穿墙式",
      tagline: "面向快速现金区、加油站与 24 小时附厅的紧凑型外墙设备。",
      functions: ["24 小时现金存款", "多面额点钞", "假币检测", "凭条打印"],
      authentication: ["紫外 (UV)", "红外 (IR)", "厚度检测", "接触式图像传感器 (CIS)"],
      connectivity: ["10/100BASE-T 以太网", "4G LTE 模块（选配）", "VPN 客户端"],
      compliance: ["PCI PED（密码键盘）", "EMV 1/2 级（读卡器）", "3DES / AES-256 加密", "防插卡盗刷"],
      tamper: ["倾斜与移动传感器", "入侵开关", "防破坏面板"],
      options: ["加热纸币通道", "UPS 集成"]
    }
  },
  {
    id: "nt-700",
    name: "NT-700",
    series: "Cash Center Bulk",
    type: "cashcenter",
    typeLabel: "Cash Center",
    tagline: "High-throughput bulk sorter-depositor for vaults, cash centers, and teller operations.",
    dimensions: { w: 760, d: 820, h: 1720 },
    weight: 520,
    noteCapacity: 8000,
    cassettes: 6,
    rejectCassette: true,
    recycle: true,
    functions: ["Bulk deposit", "High-speed sorting", "Denomination strapping assist", "Note recycling", "Counterfeit detection", "Cash-in-transit cassette packing"],
    authentication: ["UV", "IR", "Magnetic", "Thickness", "Contact image sensor (CIS)", "3D note scan"],
    connectivity: ["10/100/1000BASE-T Ethernet", "VPN client", "NFC service port", "Serial host interface"],
    compliance: ["PCI PED (PIN pad)", "EMV Level 1 & 2 (card reader)", "UL 291 safe option", "3DES / AES-256 encryption", "Anti-skimming"],
    tamper: ["Six-axis tilt & motion sensor", "Intrusion switches", "Smart-card security key", "Vault-rated door"],
    environment: { temp: "0 to 40 °C", humidity: "20–90% RH non-condensing" },
    power: { input: "AC 200–240 V, 50/60 Hz", consumption: "900 W peak" },
    options: ["Strapping module", "CIT smart cassette", "Host software integration"],
    photo: "assets/img/products/nt-700.jpg",
    figure: "cashcenter",
    zh: {
      series: "现金中心大宗处理机",
      typeLabel: "现金中心",
      tagline: "面向金库、现金中心与柜员业务的高吞吐大宗分拣存款机。",
      functions: ["大宗存款", "高速分拣", "面额捆扎辅助", "纸币循环", "假币检测", "CIT 钞箱打包"],
      authentication: ["紫外 (UV)", "红外 (IR)", "磁性检测", "厚度检测", "接触式图像传感器 (CIS)", "3D 纸币扫描"],
      connectivity: ["10/100/1000BASE-T 以太网", "VPN 客户端", "NFC 维护端口", "串口主机接口"],
      compliance: ["PCI PED（密码键盘）", "EMV 1/2 级（读卡器）", "UL 291 保险箱（选配）", "3DES / AES-256 加密", "防插卡盗刷"],
      tamper: ["六轴倾斜与移动传感器", "入侵开关", "智能卡安全密钥", "保险库级机门"],
      options: ["捆扎模块", "CIT 智能钞箱", "主机软件集成"]
    }
  }
];

/* ---- Client logos.
   Set `logo` to the file path once you drop a file into
   assets/img/logos/ (e.g. "assets/img/logos/aba.svg").
   null → text wordmark fallback. ---- */
window.NAVITECH_LOGOS = [
  { id: "aba", name: "ABA Bank", logo: "assets/img/logos/aba.png" },
  { id: "amk", name: "AMK", logo: "assets/img/logos/amk.png" },
  { id: "bti", name: "BTI", logo: "assets/img/logos/bti.png" },
  { id: "plb", name: "PLB", logo: null }
];

/* ---- Site brand logo (nav + footer).
   Set `logo` to the file path once you drop the site logo into
   assets/img/logo.png (or logo.svg). null → CSS glyph + wordmark. */
window.NAVITECH_BRAND = {
  logo: "assets/img/logo.png"
};

/* ---- Cases (successful case page).
   Each entry is one full case section: client logo (via
   NAVITECH_LOGOS), copy, facts, challenge / solution / result
   blocks, and a media gallery.
   `media` takes an array of objects:
     { type: "image", src, alt } | { type: "video", src, alt, poster }
   Drop files in assets/img/<case-id>/ and list them here; until
   set, a neutral placeholder panel is shown. `zh` carries the
   Chinese copy. ---- */
window.NAVITECH_CASES = [
  {
    id: "aba",
    num: "01",
    name: "ABA Bank",
    country: "Cambodia",
    media: [
      { type: "image", src: "assets/img/aba/ABA for AEON mall.jpg", alt: "Deposit machines in the secure cash room at an AEON mall" },
      { type: "image", src: "assets/img/aba/ABA for Airport.jpg", alt: "Deposit machines at ABA's airport location" },
      { type: "video", src: "assets/img/aba/ABA.mp4", poster: "assets/img/aba/ABA for AEON mall.jpg", alt: "AEON mall merchants using the deposit machines" }
    ],
    intro: "Secure, after-hours cash deposit for AEON's mall tenants — all 12 denominations accepted, with cash collected and settled by ABA's cash-in-transit partner.",
    facts: { units: "90", scope: "3 AEON malls", config: "All 12 denominations" },
    challenge: [
      "Every tenant in AEON's three Phnom Penh malls ends the day holding cash with nowhere safe to bank it",
      "General-purpose personal deposit machines rejected most note denominations",
      "Moving takings from personal to business accounts raised compliance concerns"
    ],
    solution: [
      "A secure cash room in every mall, holding ten deposit machines",
      "All 12 note denominations accepted — cashiers deposit at any time, no queues, no rejected notes",
      "A cash-in-transit partner collects and settles the cash for ABA on a fixed schedule"
    ],
    result: [
      "90 deposit machines installed across the three malls (June 2024)",
      "Stable operation since late 2022, with consistently positive merchant feedback"
    ],
    zh: {
      country: "柬埔寨",
      intro: "在 AEON 三家购物中心的安全现金房内部署投款机，让每家商户都能安全、合规地存入当日现金——支持全部 12 个面额。",
      facts: { units: "90", scope: "3 家 AEON 购物中心", config: "支持 12 个面额" },
      challenge: [
        "AEON 三家金边购物中心每天打烊后，商户都握着现金却无处安全存放",
        "普通的对私存款机不接受大部分面额",
        "将营收从个人账户转入对公账户存在合规风险"
      ],
      solution: [
        "每家购物中心设一间安全现金房，内置 10 台投款机",
        "支持全部 12 个面额——收银员可随时存款，无需排队、无拒收",
        "押运公司按固定周期为 ABA 取回并结算现金"
      ],
      result: [
        "截至 2024 年 6 月，三家购物中心共部署 90 台投款机",
        "自 2022 年底铺设以来运行稳定，获商户一致好评"
      ]
    }
  },
  {
    id: "amk",
    num: "02",
    name: "AMK",
    country: "Cambodia",
    media: [],
    intro: "Compact NT-200 deposit terminals at high-traffic microfinance cash points, so agents and merchants deposit takings without queuing for a teller.",
    facts: { units: "25+", scope: "Cash points", config: "Compact / NT-200" },
    challenge: [
      "Agents and merchants queued for tellers to deposit daily takings",
      "Branch deposit processing competed with teller service"
    ],
    solution: [
      "Compact NT-200 terminals at high-traffic microfinance cash points",
      "Agents and merchants deposit directly, without queuing"
    ],
    result: [
      "Daily takings reconciled against branch records each cycle",
      "Rollout staged in controlled batches with branch training"
    ],
    zh: {
      country: "柬埔寨",
      intro: "在客流密集的小额信贷现金网点部署紧凑型 NT-200 存款终端，代理与商户无需排队即可存入营收。",
      facts: { units: "25+", scope: "现金网点", config: "紧凑型 / NT-200" },
      challenge: [
        "代理与商户须排队等待柜员才能存入每日营收",
        "分行存款处理与柜面服务相互挤占"
      ],
      solution: [
        "在客流密集的小额信贷现金网点部署紧凑型 NT-200 终端",
        "代理与商户无需排队即可直接存入营收"
      ],
      result: [
        "每个周期内自动与分行记录对账",
        "受控分批铺设并同步网点培训"
      ]
    }
  },
  {
    id: "bti",
    num: "03",
    name: "BTI",
    country: "Cambodia",
    media: [],
    intro: "Wall-mounted NT-500 deposit units on exterior branch envelopes, extending cash intake to after-hours operation with weatherized enclosures.",
    facts: { units: "18", scope: "Sites", config: "TTW / NT-500" },
    challenge: [
      "Deposits limited to branch business hours",
      "Exterior cash intake had to stay reliable in all weather"
    ],
    solution: [
      "Through-the-wall NT-500 units on exterior branch envelopes",
      "Weatherized enclosures protect the note path day and night"
    ],
    result: [
      "Cash intake extended beyond business hours",
      "Deposit results returned to treasury management in real time"
    ],
    zh: {
      country: "柬埔寨",
      intro: "在分行外墙安装穿墙 NT-500 存款设备，配防风雨外壳，将现金受理延伸至营业时间之后。",
      facts: { units: "18", scope: "站点", config: "穿墙 / NT-500" },
      challenge: [
        "存款仅限营业时间之内",
        "外墙现金受理必须全天候可靠"
      ],
      solution: [
        "在分行外墙安装穿墙式 NT-500 设备",
        "防风雨外壳全天候保护纸币通道"
      ],
      result: [
        "现金受理延伸至营业时间之外",
        "存款结果实时返回零管系统"
      ]
    }
  },
  {
    id: "plb",
    num: "04",
    name: "PLB",
    country: "Cambodia",
    media: [],
    intro: "High-throughput bulk sorters in the bank's cash processing center, automating note verification and cassette packing ahead of cash-in-transit collection.",
    facts: { units: "6", scope: "Cash center", config: "Bulk / NT-700" },
    challenge: [
      "Note verification and cassette packing were manual ahead of CIT collection"
    ],
    solution: [
      "High-throughput NT-700 bulk sorters in the cash processing center",
      "Verification and cassette packing automated for the vault team"
    ],
    result: [
      "Note verification completed ahead of CIT collection",
      "Counts reconciled per servicing cycle"
    ],
    zh: {
      country: "柬埔寨",
      intro: "在银行现金处理中心部署高吞吐大宗分拣机，在 CIT 回收前自动完成验钞与钞箱打包。",
      facts: { units: "6", scope: "现金中心", config: "大宗 / NT-700" },
      challenge: [
        "CIT 回收前的验钞与钞箱打包均依赖人工"
      ],
      solution: [
        "在现金处理中心部署高吞吐 NT-700 大宗分拣机",
        "验钞与钞箱打包实现自动化，服务金库团队"
      ],
      result: [
        "CIT 回收前自动完成验钞",
        "每个服务周期自动对账"
      ]
    }
  }
];

/* ---- Product type filter taxonomy ---- */
window.NAVITECH_TYPES = [
  { id: "lobby", label: "Lobby", labelZh: "大堂" },
  { id: "ttw", label: "Through-the-Wall", labelZh: "穿墙式" },
  { id: "compact", label: "Compact", labelZh: "紧凑型" },
  { id: "cashcenter", label: "Cash Center", labelZh: "现金中心" }
];

/* ---- Localized field helper: returns the zh value when the
   site is in Chinese, else the English field. ---- */
window.NT_L = function (obj, key, fallback) {
  if (window.I18N && window.I18N.isZh() && obj.zh && obj.zh[key] !== undefined) {
    return obj.zh[key];
  }
  return obj[key] !== undefined ? obj[key] : (fallback !== undefined ? fallback : "");
};
