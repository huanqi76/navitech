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
  { id: "aba", name: "ABA Bank", logo: null },
  { id: "amk", name: "AMK", logo: null },
  { id: "bti", name: "BTI", logo: null },
  { id: "plb", name: "PLB", logo: null }
];

/* ---- Site brand logo (nav + footer).
   Set `logo` to the file path once you drop the site logo into
   assets/img/logo.png (or logo.svg). null → CSS glyph + wordmark. */
window.NAVITECH_BRAND = {
  logo: "assets/img/logo.png"
};

/* ---- Deployments (short copy for clients section).
   PLACEHOLDER: figures and scope to be confirmed with
   deployment records before launch. `zh` carries the Chinese
   copy. ---- */
window.NAVITECH_DEPLOYMENTS = [
  {
    id: "aba",
    name: "ABA Bank",
    country: "Cambodia",
    scope: "Branch lobby deposit network",
    description: "NT-100 lobby terminals at main and regional branches, moving bulk deposits from teller counters to self-service note intake and reducing cashier handling time.",
    meta: { units: "40+", scope: "Branches", detail: "Lobby / NT-100" },
    zh: {
      country: "柬埔寨",
      scope: "分行大堂存款网络",
      description: "在旗舰与区域分行部署 NT-100 大堂终端，将大宗柜台存款转移至自助现金受理，减少柜员处理时间。",
      meta: { units: "40+", scope: "分行", detail: "大堂 / NT-100" }
    }
  },
  {
    id: "amk",
    name: "AMK",
    country: "Cambodia",
    scope: "MFI cash point rollout",
    description: "Compact deposit terminals at high-traffic microfinance cash points, so agents and merchants can deposit takings without queuing for a teller.",
    meta: { units: "25+", scope: "Cash points", detail: "Compact / NT-200" },
    zh: {
      country: "柬埔寨",
      scope: "小额信贷网点铺设",
      description: "在客流密集的小额信贷网点部署紧凑型存款终端，代理与商户无需排队即可存入营收。",
      meta: { units: "25+", scope: "现金网点", detail: "紧凑型 / NT-200" }
    }
  },
  {
    id: "bti",
    name: "BTI",
    country: "Cambodia",
    scope: "Through-the-wall 24/7 network",
    description: "Wall-mounted deposit units on exterior branch envelopes, extending cash intake to after-hours operation with weatherized enclosures.",
    meta: { units: "18", scope: "Sites", detail: "TTW / NT-500" },
    zh: {
      country: "柬埔寨",
      scope: "穿墙式 24 小时网络",
      description: "在分行外墙安装穿墙存款设备，配防风雨外壳，将现金受理延伸至营业时间之后。",
      meta: { units: "18", scope: "站点", detail: "穿墙 / NT-500" }
    }
  },
  {
    id: "plb",
    name: "PLB",
    country: "Cambodia",
    scope: "Cash center bulk processing",
    description: "High-throughput bulk sorters in the bank's cash processing center, automating note verification and cassette packing ahead of cash-in-transit collection.",
    meta: { units: "6", scope: "Cash center", detail: "Bulk / NT-700" },
    zh: {
      country: "柬埔寨",
      scope: "现金中心大宗处理",
      description: "在银行现金处理中心部署高吞吐大宗分拣机，在 CIT 回收前自动完成验钞与钞箱打包。",
      meta: { units: "6", scope: "现金中心", detail: "大宗 / NT-700" }
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
