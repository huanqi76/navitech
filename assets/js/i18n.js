/* ============================================================
   NAVITECH · I18N  (en / 中文)
   Lightweight dictionary-based translator. Static text uses
   [data-i18n] / [data-i18n-html] / [data-i18n-placeholder]
   attributes; JS-rendered views call I18N.t() and re-render on
   the "navitech:langchange" event.
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "navitech-lang";

  var dict = {
    en: {
      /* nav / status / footer */
      "nav.home": "Home",
      "nav.products": "Products",
      "nav.solutions": "Solutions",
      "nav.clients": "Clients",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.cta": "Request a quote",
      "nav.lang": "中文",
      "nav.menu": "Menu",
      "brand.sub": "Cash Deposit Systems",
      "status.brand": "Navitech · Cash Deposit Systems",
      "status.pci": "PCI PED · EMV",
      "status.uptime": "Uptime SLA 99.5%",
      "status.monitor": "Monitoring 24/7",
      "unit.notes": "notes",
      "common.yes": "Yes",
      "common.no": "No",
      "footer.tagline": "Cash processing solutions for banks and retail businesses, covering hardware, software, and customization.",
      "footer.site": "Site",
      "footer.contact": "Contact",
      "footer.copy": "© {year} Navitech. All rights reserved.",
      "footer.placeholder": "Placeholder content. Figures and model data pending final engineering validation.",
      "footer.addr": "No. 1000 Lujiazui Ring Road, Pudong New District, Shanghai, China. Serving financial institutions internationally.",

      /* flags */
      "flag.spec": "Spec data placeholder",
      "flag.catalog": "Placeholder data. Swap via products-data.js.",
      "flag.deploy": "Deployment figures pending confirmation",

      /* titles */
      "title.home": "Navitech | Cash Deposit Systems for Banks",
      "title.products": "Products | Navitech",
      "title.solutions": "Solutions | Navitech",
      "title.clients": "Clients and Deployments | Navitech",
      "title.services": "Services | Navitech",
      "title.about": "About | Navitech",
      "title.contact": "Contact / Request a Quote | Navitech",
      "title.detail": "{name} | {series} | Navitech",

      /* home */
      "home.hero.kicker": "Hardware and field operations, one vendor",
      "home.hero.h1": "Cash deposit systems for <span class=\"accent\">banks and financial institutions</span>.",
      "home.hero.lede": "Navitech designs, manufactures, deploys, and services cash deposit machines (CDMs) for banks and financial institutions. The machines combine robust note handling, secure cassettes, and 24/7 remote monitoring under a single service contract.",
      "home.hero.cta1": "Browse solutions",
      "home.hero.cta2": "Request a quote",
      "home.stat.units": "Units in service",
      "home.stat.uptime": "Uptime SLA",
      "home.stat.monitor": "Remote monitoring",
      "home.stat.response": "Service response",
      "home.trust.kicker": "Deployed with",
      "home.what.kicker": "What we do",
      "home.what.h2": "Hardware and service from one vendor",
      "home.what.p": "We build the deposit machines and run the operations that keep them reliable: site survey and installation, preventive maintenance, remote monitoring, and cash logistics from cassette to vault. One vendor, one service contract.",
      "home.trio1.index": "01 / Hardware",
      "home.trio1.title": "Solutions",
      "home.trio1.p": "Lobby deposit, through-the-wall, compact, and cash-center machines. Each model documents its note handling, security, and compliance profile for procurement review.",
      "home.trio1.more": "Browse the solutions",
      "home.trio2.index": "02 / Deployments",
      "home.trio2.title": "Clients",
      "home.trio2.p": "Deployments at ABA Bank, AMK, BTI, and PLB: branch rollouts, 24/7 wall units, and bulk cash-center processing, with the scope of each.",
      "home.trio2.more": "See the deployments",
      "home.trio3.index": "03 / Operations",
      "home.trio3.title": "Services",
      "home.trio3.p": "Installation, preventive maintenance, 24/7 monitoring, and cash servicing under SLAs with defined response and recovery targets.",
      "home.trio3.more": "Read the service model",
      "home.cta.btn": "Request a quote",

      /* home banner + about (v2) */
      "home.banner.headline": "Cash Handling Solutions",
      "home.banner.tagline": "A cash handling solutions provider for the banking and retail industries — covering hardware, software, and customization.",
      "home.about.kicker": "About",
      "home.about.title": "The founders",
      "home.about.p1": "The founders of Navitech are professionals in the China Financial Technology Sector with over 30 years experience, working for global and local MNCs such as NCR, Wincor Nixdorf, and Asino-Wincor.",
      "home.about.p2": "During this period, we have undertaken various large-scale software projects, such as the Shanghai Pudong Development Bank Multivendor software development (2019), Wincor Nixdorf CMDV4 WOSA/XFS development (2006), and ICBC Multivendor software development on Wincor/NCR/Diebold ATM/CRM (2005).",

      /* products catalog */
      "products.breadcrumb": "Products",
      "products.h1": "Product catalog",
      "products.lede": "Deposit machines for the placements a bank network uses: branch lobbies, 24-hour wall envelopes, compact retail sites, and high-throughput cash centers. Filter by configuration, or open a unit for the full specification sheet.",
      "products.filter.all": "All models",
      "products.count": "Showing {count} of {total} units",
      "products.cta.btn": "Request a quote",

      /* solutions */
      "solutions.breadcrumb": "Solutions",
      "solutions.h1": "Solution Offerings",
      "solutions.lede": "Deposit automation, secure safedoor access, and QR-based cash transactions, engineered and operated by one vendor.",
      "solutions.card.cta": "View details",
      "solutions.modal.kicker": "Solution",
      "solutions.modal.features": "Key features",

      /* product detail */
      "detail.breadcrumb": "Products",
      "detail.photoNote": "Photo pending",
      "detail.overview.trail": "Designed for branch, retail, and through-the-wall placement, with tamper-protected note handling and full remote monitoring.",
      "fact.hopper": "Hopper",
      "fact.cassettes": "Cassettes",
      "fact.recycle": "Recycle",
      "fact.width": "Width",
      "fact.depth": "Depth",
      "fact.height": "Height",
      "detail.section.functions": "Functions",
      "detail.section.auth": "Banknote authentication",
      "detail.section.connect": "Connectivity",
      "detail.section.physical": "Physical",
      "detail.section.notehandling": "Note handling",
      "detail.section.compliance": "Compliance",
      "detail.section.tamper": "Tamper security",
      "detail.section.environment": "Environment",
      "detail.section.power": "Power",
      "detail.section.options": "Options and upgrades",
      "detail.row.dimensions": "Dimensions (W × D × H)",
      "detail.row.weight": "Weight",
      "detail.row.enclosure": "Enclosure",
      "detail.enclosure.val": "Steel, powder-coated",
      "detail.row.input": "Input capacity",
      "detail.input.suffix": "(bulk hopper)",
      "detail.row.depositCassettes": "Deposit cassettes",
      "detail.row.reject": "Reject cassette",
      "detail.row.recycle": "Note recycling",
      "detail.recycle.yes": "Yes. Verified notes are reissued for dispense.",
      "detail.recycle.no": "Not offered on this model",
      "detail.row.temp": "Operating temperature",
      "detail.row.humidity": "Humidity",
      "detail.row.weatherized": "Weatherized exterior",
      "detail.row.input2": "Input",
      "detail.row.consumption": "Consumption",
      "detail.row.options": "Available options",
      "detail.specsKicker": "Specification sheet",
      "detail.specsH2": "Mechanical and operational specifications",
      "detail.specsP": "Dimensions, note handling, compliance, and tamper security as submitted for procurement review.",
      "detail.dimKicker": "Dimensions and clearances",
      "detail.dimH2": "Footprint and installation envelope",
      "detail.dimFlag": "Elevation and clearances. Placeholder.",
      "detail.relKicker": "Other models",
      "detail.relH2": "The rest of the range",
      "detail.notfound.h1": "Model not found",
      "detail.notfound.p": "The requested machine could not be found in the current catalog.",

      /* clients */
      "clients.breadcrumb": "Clients",
      "clients.h1": "Client deployments",
      "clients.lede": "Every installation starts with a site survey and targets for cashier hours saved or deposit capacity gained. The deployments below show the scope, scale, and configuration of each.",
      "clients.how.kicker": "How it works",
      "clients.how.h2": "What a deployment involves",
      "clients.how.p": "Each rollout follows the same controlled sequence, so branch operations staff know what to expect before a unit ships.",
      "clients.how.1": "Site survey: power, network, physical security, floor loading",
      "clients.how.2": "Pilot unit at one site before network-wide rollout",
      "clients.how.3": "Staged installation with branch training",
      "clients.how.4": "Integration with core banking clearing and reconciliation",
      "clients.how.5": "24/7 monitoring with defined alert-to-fix paths",
      "clients.how.6": "Cash-in-transit coordination for cassette replenishment",
      "clients.cta.btn": "Contact us",
      "deploy.meta.units": "Units",
      "deploy.meta.scope": "Scope",
      "deploy.meta.config": "Configuration",

      /* services */
      "services.breadcrumb": "Services",
      "services.h1": "The service contract behind the machines",
      "services.lede": "Hardware uptime is an operations problem as much as an engineering one. Installation, preventive maintenance, 24/7 monitoring, and cash servicing are contracted together, with response and recovery targets in writing.",
      "services.s1.t": "Installation",
      "services.s1.p1t": "Site survey",
      "services.s1.p1d": "Power, network, floor loading, and physical security are assessed before shipment. Wall mounts and through-the-wall fascias are verified against the building.",
      "services.s1.p2t": "Staged rollout",
      "services.s1.p2d": "A pilot unit goes live first. The rest of the network follows in controlled batches with branch-by-branch sign-off.",
      "services.s1.p3t": "Integration",
      "services.s1.p3d": "Connection to core banking clearing, reconciliation, and monitoring platforms, tested end to end before go-live.",
      "services.s1.p4t": "Training",
      "services.s1.p4d": "Branch tellers and cash-room staff are trained on note handling, cassette swaps, and the double-key security protocol.",
      "services.s2.t": "Maintenance and monitoring",
      "services.s2.p1t": "Remote monitoring, 24/7",
      "services.s2.p1d": "Note levels, cassette status, jam events, network health, and tamper alerts stream to our operations desk in real time.",
      "services.s2.p2t": "Preventive maintenance",
      "services.s2.p2d": "Scheduled preventive maintenance on the note path, sensors, and cash modules, outside peak deposit hours.",
      "services.s2.p3t": "Defined response",
      "services.s2.p3d": "Service levels with defined response and recovery targets, backed by a local technician pool and spare-parts holding.",
      "services.s2.p4t": "Alert-to-fix paths",
      "services.s2.p4d": "Every alert has an owner and a defined next step: remote resolution, a scheduled visit, or emergency dispatch.",
      "services.s3.t": "Cash servicing",
      "services.s3.p1t": "Cassette logistics",
      "services.s3.p1d": "Replenishment and collection scheduled around your deposit patterns and coordinated with cash-in-transit providers.",
      "services.s3.p2t": "Double-key protocol",
      "services.s3.p2d": "Two-person access for every cassette exchange, logged and auditable end to end.",
      "services.s3.p3t": "Balancing and reporting",
      "services.s3.p3d": "Note counts reconciled against branch records, with discrepancy reporting on each servicing cycle.",
      "services.s3.p4t": "Vault coordination",
      "services.s3.p4d": "Handoff to your cash center or vault team with the counts, seals, and paperwork your audit trail requires.",
      "services.sla.kicker": "Service levels",
      "services.sla.h2": "What the contract promises",
      "services.sla.p": "Targets are structured by severity class and negotiated per network footprint.",
      "services.sla.r1": "Severity",
      "services.sla.r1c1": "Emergency (unit out of service)",
      "services.sla.r1c2": "Reactive (note path degraded)",
      "services.sla.r1c3": "Preventive (scheduled PM)",
      "services.sla.r2": "Coverage",
      "services.sla.r2c1": "24/7 option or business hours",
      "services.sla.r2c2": "Business hours",
      "services.sla.r2c3": "Off-peak windows",
      "services.sla.r3": "Response target",
      "services.sla.r3c1": "4 hours",
      "services.sla.r3c2": "Next business day",
      "services.sla.r3c3": "Per PM calendar (90-day cycle)",
      "services.sla.r4": "Recovery target",
      "services.sla.r4c1": "MTTR 8 hours",
      "services.sla.r4c2": "48 hours",
      "services.sla.r4c3": "N/A",
      "services.cta.btn": "Request a quote",

      /* about */
      "about.breadcrumb": "About",
      "about.h1": "A hardware vendor that stays in the field",
      "about.lede": "Navitech builds and operates the cash deposit machines that banks use, and stays responsible for them after they ship.",
      "about.bg.kicker": "Background",
      "about.bg.h2": "Design, manufacture, deploy, service",
      "about.bg.p1": "Navitech was founded on a simple observation: most bank cash automation comes from vendors thousands of kilometres away, whose service desks cannot fix a machine at a branch. We set out to control the whole chain: engineering the note path, building the enclosures, and keeping technicians within hours of every installation.",
      "about.bg.p2": "Today our hardware moves deposits for banks and financial institutions across Cambodia and the wider region: branch lobby terminals, 24-hour through-the-wall units, compact retail machines, and bulk sorters in cash centers. Every unit ships with a service contract, not only a warranty.",
      "about.bg.1": "Machines designed, manufactured, and serviced in-house",
      "about.bg.2": "Field technicians within hours of every deployment",
      "about.bg.3": "Compliance built in at component level",
      "about.bg.4": "Cash logistics coordinated with the vault, not left to the branch",
      "about.founders.kicker": "The founders",
      "about.founders.h2": "Founded by cash machine engineers",
      "about.founders.p1": "The founders of Navitech are professionals from China's financial technology sector with over 30 years of combined experience. They worked at global and regional manufacturers, including NCR, Wincor Nixdorf, and Asino-Wincor, before founding Navitech.",
      "about.cta.btn": "Contact us",

      /* contact */
      "contact.breadcrumb": "Contact",
      "contact.h1": "Request a quote",
      "contact.lede": "Tell us your footprint and deposit volumes, and we will respond with a hardware and service proposal: specifications, rollout plan, and service levels.",
      "form.institution": "Institution",
      "form.name": "Contact name",
      "form.role": "Role",
      "form.role.ph": "e.g. Head of Branch Operations",
      "form.email": "Work email",
      "form.phone": "Phone",
      "form.country": "Country",
      "form.type": "Machine type",
      "form.type.0": "Not sure. Please advise.",
      "form.type.lobby": "Lobby deposit",
      "form.type.ttw": "Through-the-wall",
      "form.type.compact": "Compact / retail",
      "form.type.cashcenter": "Cash center / bulk",
      "form.qty": "Approximate units",
      "form.qty.ph": "e.g. 10",
      "form.msg": "Scope of the requirement",
      "form.msg.ph": "Branch count, deposit volumes, service coverage, timeline",
      "form.submit": "Send request",
      "form.note": "We reply within one business day. No obligation.",
      "form.err.required": "Required field",
      "form.err.email": "Enter a valid email address",
      "form.success.t": "Request received.",
      "form.success.d": "This is a static-site placeholder. Connect the form to your endpoint in a later pass. A sales engineer will follow up.",
      "contact.aside.title": "Direct contact",
      "contact.aside.sales": "Sales and engineering",
      "contact.aside.sd": "Service desk (24/7)",
      "contact.aside.office": "Office",
      "contact.aside.addr": "Phnom Penh, Cambodia<br>Serving international markets"
    },

    zh: {
      /* nav / status / footer */
      "nav.home": "首页",
      "nav.products": "产品",
      "nav.solutions": "解决方案",
      "nav.clients": "客户案例",
      "nav.services": "服务",
      "nav.about": "关于我们",
      "nav.contact": "联系我们",
      "nav.cta": "获取报价",
      "nav.lang": "EN",
      "nav.menu": "菜单",
      "brand.sub": "现金存款系统",
      "status.brand": "Navitech · 现金存款系统",
      "status.pci": "PCI PED · EMV",
      "status.uptime": "SLA 可用率 99.5%",
      "status.monitor": "7×24 远程监控",
      "unit.notes": "张",
      "common.yes": "是",
      "common.no": "否",
      "footer.tagline": "银行或零售行业的现金处理解决方案提供商，包含硬件、软件、客户化",
      "footer.site": "网站",
      "footer.contact": "联系方式",
      "footer.copy": "© {year} Navitech 版权所有。",
      "footer.placeholder": "占位内容。数据与型号信息待最终工程确认。",
      "footer.addr": "中国上海市浦东新区陆家嘴环路 1000 号，服务国际市场的金融机构。",

      /* flags */
      "flag.spec": "规格为占位数据",
      "flag.catalog": "占位数据，通过 products-data.js 替换。",
      "flag.deploy": "部署数据待确认",

      /* titles */
      "title.home": "Navitech | 银行现金存款系统",
      "title.products": "产品 | Navitech",
      "title.solutions": "解决方案 | Navitech",
      "title.clients": "客户案例 | Navitech",
      "title.services": "服务 | Navitech",
      "title.about": "关于我们 | Navitech",
      "title.contact": "联系我们 / 获取报价 | Navitech",
      "title.detail": "{name} | {series} | Navitech",

      /* home */
      "home.hero.kicker": "硬件与现场运营，同一供应商",
      "home.hero.h1": "为<span class=\"accent\">银行与金融机构</span>设计的现金存款系统。",
      "home.hero.lede": "Navitech 为银行与金融机构设计、制造、部署并维护现金存款机（CDM）。设备采用可靠的纸币处理与安全的钞箱，并在统一服务合同下提供 7×24 远程监控。",
      "home.hero.cta1": "浏览解决方案",
      "home.hero.cta2": "获取报价",
      "home.stat.units": "在役设备",
      "home.stat.uptime": "SLA 可用率",
      "home.stat.monitor": "远程监控",
      "home.stat.response": "服务响应",
      "home.trust.kicker": "合作部署",
      "home.what.kicker": "业务范围",
      "home.what.h2": "设备与服务，来自同一供应商",
      "home.what.p": "我们自主制造存款设备，并负责保障设备可靠运行的全套环节：现场勘查与安装、预防性维护、远程监控，以及从钞箱到金库的现金物流。同一供应商，同一服务合同。",
      "home.trio1.index": "01 / 硬件",
      "home.trio1.title": "解决方案",
      "home.trio1.p": "大堂存款机、穿墙式、紧凑型与现金中心设备。每一款都提供纸币处理、安全与合规的完整说明，供采购评审参考。",
      "home.trio1.more": "浏览解决方案",
      "home.trio2.index": "02 / 部署案例",
      "home.trio2.title": "客户案例",
      "home.trio2.p": "ABA Bank、AMK、BTI 与 PLB 的部署项目：分行铺设、7×24 穿墙设备与大宗现金中心处理，并附各项目范围。",
      "home.trio2.more": "查看部署案例",
      "home.trio3.index": "03 / 运营",
      "home.trio3.title": "服务",
      "home.trio3.p": "安装、预防性维护、7×24 监控与现金服务，并签订包含明确响应与恢复目标的服务合同。",
      "home.trio3.more": "了解服务模式",
      "home.cta.btn": "获取报价",

      /* 首页横幅 + 关于我们（v2） */
      "home.banner.headline": "现金处理解决方案",
      "home.banner.tagline": "银行或零售行业的现金处理解决方案提供商，包含硬件、软件、客户化",
      "home.about.kicker": "关于我们",
      "home.about.title": "创始团队",
      "home.about.p1": "Navitech 的创始人是中国金融科技领域的专业人士，拥有超过 30 年从业经验，曾就职于 NCR、Wincor Nixdorf、Asino-Wincor 等全球及本土跨国企业。",
      "home.about.p2": "在此期间，我们承担了多个大型软件项目，例如上海浦东发展银行多厂商软件开发（2019）、Wincor Nixdorf CMDV4 WOSA/XFS 开发（2006），以及工商银行基于 Wincor/NCR/Diebold ATM/CRM 的多厂商软件开发（2005）。",

      /* products catalog */
      "products.breadcrumb": "产品",
      "products.h1": "产品目录",
      "products.lede": "覆盖银行网络实际所需的全部部署场景：分行大堂、24 小时外墙穿墙式、紧凑型零售网点，以及高吞吐现金中心。可按配置筛选，点开任意设备查看完整规格表。",
      "products.filter.all": "全部型号",
      "products.count": "共 {total} 款，当前显示 {count} 款",
      "products.cta.btn": "获取报价",

      /* solutions */
      "solutions.breadcrumb": "解决方案",
      "solutions.h1": "解决方案产品",
      "solutions.lede": "存款自动化、安全门锁与二维码现金交易，由同一供应商研发与运营。",
      "solutions.card.cta": "查看详情",
      "solutions.modal.kicker": "方案",
      "solutions.modal.features": "核心功能",

      /* product detail */
      "detail.breadcrumb": "产品",
      "detail.photoNote": "照片待上传",
      "detail.overview.trail": "适用于分行、零售网点与穿墙式安装，配备防破坏钞箱处理与完整的远程监控。",
      "fact.hopper": "进钞容量",
      "fact.cassettes": "钞箱",
      "fact.recycle": "循环",
      "fact.width": "宽度",
      "fact.depth": "深度",
      "fact.height": "高度",
      "detail.section.functions": "功能",
      "detail.section.auth": "纸币鉴伪",
      "detail.section.connect": "连接方式",
      "detail.section.physical": "物理尺寸",
      "detail.section.notehandling": "钞票处理",
      "detail.section.compliance": "合规认证",
      "detail.section.tamper": "防破坏安全",
      "detail.section.environment": "环境条件",
      "detail.section.power": "电源",
      "detail.section.options": "选配与升级",
      "detail.row.dimensions": "尺寸（宽 × 深 × 高）",
      "detail.row.weight": "重量",
      "detail.row.enclosure": "机柜",
      "detail.enclosure.val": "钢制机柜，粉末喷涂",
      "detail.row.input": "进钞容量",
      "detail.input.suffix": "（大宗进钞口）",
      "detail.row.depositCassettes": "存款钞箱",
      "detail.row.reject": "退钞钞箱",
      "detail.row.recycle": "循环功能",
      "detail.recycle.yes": "支持。验证后的纸币可循环用作取现钞。",
      "detail.recycle.no": "此型号不提供",
      "detail.row.temp": "工作温度",
      "detail.row.humidity": "相对湿度",
      "detail.row.weatherized": "室外防水外壳",
      "detail.row.input2": "输入",
      "detail.row.consumption": "功耗",
      "detail.row.options": "可选配置",
      "detail.specsKicker": "规格表",
      "detail.specsH2": "机械与操作规格",
      "detail.specsP": "尺寸、钞票处理、合规与防破坏安全，供采购评审参考。",
      "detail.dimKicker": "尺寸与净空",
      "detail.dimH2": "占地面积与安装空间",
      "detail.dimFlag": "示意图与净空。占位。",
      "detail.relKicker": "其他型号",
      "detail.relH2": "系列其他产品",
      "detail.notfound.h1": "未找到该型号",
      "detail.notfound.p": "当前目录中未找到所请求的设备。",

      /* clients */
      "clients.breadcrumb": "客户案例",
      "clients.h1": "客户部署",
      "clients.lede": "每一处客户安装都始于现场勘查，并设定节省柜员工时或提升存款容量的目标。以下为各部署项目的范围、规模与配置。",
      "clients.how.kicker": "部署流程",
      "clients.how.h2": "一次部署包含什么",
      "clients.how.p": "每次铺设都遵循同一受控流程，确保分行运营人员在设备到货前就清楚预期。",
      "clients.how.1": "现场勘查：供电、网络、物理安全、地面承重",
      "clients.how.2": "网络全面铺设前，先在一个站点试点",
      "clients.how.3": "分批安装，并同步分行培训",
      "clients.how.4": "对接核心银行清算与对账系统",
      "clients.how.5": "7×24 监控，配备告警到修复的明确路径",
      "clients.how.6": "现金在途（CIT）协调，保障钞箱补库",
      "clients.cta.btn": "联系我们",
      "deploy.meta.units": "数量",
      "deploy.meta.scope": "范围",
      "deploy.meta.config": "配置",

      /* services */
      "services.breadcrumb": "服务",
      "services.h1": "设备背后的服务合同",
      "services.lede": "硬件可用率既是工程问题，也是运营问题。安装、预防性维护、7×24 监控与现金服务统一签约，并以书面形式约定响应与恢复目标。",
      "services.s1.t": "安装部署",
      "services.s1.p1t": "现场勘查",
      "services.s1.p1d": "设备发货前即完成供电、网络、地面承重与物理安全评估；墙挂与穿墙面板均对照建筑结构进行验证。",
      "services.s1.p2t": "分批铺设",
      "services.s1.p2d": "先上线试点设备，其余网点在受控批次中逐点签收后推进。",
      "services.s1.p3t": "系统对接",
      "services.s1.p3d": "对接核心银行清算、对账与监控平台，并在上线前完成端到端测试。",
      "services.s1.p4t": "培训",
      "services.s1.p4d": "对网点柜员与现金室人员开展钞票处理、钞箱更换及双钥匙安全协议培训。",
      "services.s2.t": "维护与监控",
      "services.s2.p1t": "7×24 远程监控",
      "services.s2.p1d": "钞量、钞箱状态、卡钞事件、网络健康与防破坏告警实时回传至运维中心。",
      "services.s2.p2t": "预防性维护",
      "services.s2.p2d": "对纸币通道、传感器与现金模块执行计划性维护，并安排在存款高峰时段之外。",
      "services.s2.p3t": "明确的响应机制",
      "services.s2.p3d": "服务级别明确响应与恢复目标，并配备本地技师团队与备件库存。",
      "services.s2.p4t": "告警处理路径",
      "services.s2.p4d": "每条告警都有责任人与明确的下一步：远程解决、计划上门或紧急派单。",
      "services.s3.t": "现金服务",
      "services.s3.p1t": "钞箱物流",
      "services.s3.p1d": "根据您的存款规律安排补库与回收，并与现金在途（CIT）供应商协同。",
      "services.s3.p2t": "双钥匙协议",
      "services.s3.p2d": "每次钞箱交接均需双人操作，全程记录并可供审计。",
      "services.s3.p3t": "对账与报告",
      "services.s3.p3d": "钞票计数与分行记录逐项核对，每个服务周期均提供差异报告。",
      "services.s3.p4t": "金库协调",
      "services.s3.p4d": "以审计所需的数量、封条与单据，向您的现金中心或金库团队交接。",
      "services.sla.kicker": "服务级别",
      "services.sla.h2": "合同承诺",
      "services.sla.p": "目标按严重程度分级，并根据网络规模协商确定。",
      "services.sla.r1": "严重程度",
      "services.sla.r1c1": "紧急（设备停机）",
      "services.sla.r1c2": "响应式（纸币通道降级）",
      "services.sla.r1c3": "预防式（计划维护）",
      "services.sla.r2": "覆盖范围",
      "services.sla.r2c1": "7×24 选项或营业时间",
      "services.sla.r2c2": "营业时间",
      "services.sla.r2c3": "非高峰时段",
      "services.sla.r3": "响应目标",
      "services.sla.r3c1": "4 小时",
      "services.sla.r3c2": "下一个工作日",
      "services.sla.r3c3": "按维护计划（90 天周期）",
      "services.sla.r4": "恢复目标",
      "services.sla.r4c1": "MTTR 8 小时",
      "services.sla.r4c2": "48 小时",
      "services.sla.r4c3": "不适用",
      "services.cta.btn": "获取报价",

      /* about */
      "about.breadcrumb": "关于我们",
      "about.h1": "始终驻留现场的硬件供应商",
      "about.lede": "Navitech 制造并运营银行使用的现金存款设备，并在交付后继续负责到底。",
      "about.bg.kicker": "公司背景",
      "about.bg.h2": "设计 · 制造 · 部署 · 服务",
      "about.bg.p1": "Navitech 的创立源于一个简单观察：多数银行的现金自动化设备来自数千公里之外的供应商，其服务台无法在分行现场解决问题。因此我们选择掌握整条链路：设计纸币通道、制造机柜，并让技师保持在距每次安装数小时车程的范围内。",
      "about.bg.p2": "如今，我们的硬件为柬埔寨及国际市场的银行与金融机构处理存款：分行大堂终端、24 小时穿墙式设备、紧凑型零售设备，以及现金中心的大宗分拣机。每台设备随附的都是服务合同，而不仅是保修。",
      "about.bg.1": "设备从设计、制造到服务均由本公司完成",
      "about.bg.2": "每次部署的现场技师均可数小时到达",
      "about.bg.3": "合规在部件层面即已内置",
      "about.bg.4": "现金物流与金库协同，而非交由分行自行处理",
      "about.founders.kicker": "创始人",
      "about.founders.h2": "由现金设备工程师创立",
      "about.founders.p1": "Navitech 的创始人是来自中国金融科技领域的专业人士，拥有超过 30 年的行业经验。在创立 Navitech 之前，他们先后任职于 NCR、德利多富（Wincor Nixdorf）与安迅德利多富（Asino-Wincor）等全球及区域制造商。",
      "about.cta.btn": "联系我们",

      /* contact */
      "contact.breadcrumb": "联系我们",
      "contact.h1": "获取报价",
      "contact.lede": "告诉我们您的网络规模与存款量，我们将回复硬件与服务方案：规格、部署计划与服务级别。",
      "form.institution": "机构名称",
      "form.name": "联系人",
      "form.role": "职务",
      "form.role.ph": "例如：分行运营总监",
      "form.email": "工作邮箱",
      "form.phone": "电话",
      "form.country": "国家 / 地区",
      "form.type": "设备类型",
      "form.type.0": "不确定，请提供建议。",
      "form.type.lobby": "大堂存款机",
      "form.type.ttw": "穿墙式",
      "form.type.compact": "紧凑型 / 零售",
      "form.type.cashcenter": "现金中心 / 大宗",
      "form.qty": "预计数量",
      "form.qty.ph": "例如：10",
      "form.msg": "需求范围",
      "form.msg.ph": "网点数量、存款量、服务覆盖、时间计划……",
      "form.submit": "发送请求",
      "form.note": "我们会在一个工作日内回复，不构成任何义务。",
      "form.err.required": "必填字段",
      "form.err.email": "请输入有效的邮箱地址",
      "form.success.t": "已收到您的需求。",
      "form.success.d": "此为静态站占位。后续版本将表单对接您的服务端点，销售工程师将与您联系。",
      "contact.aside.title": "直接联系",
      "contact.aside.sales": "销售与工程",
      "contact.aside.sd": "服务台（7×24）",
      "contact.aside.office": "办公室",
      "contact.aside.addr": "柬埔寨金边<br>服务国际市场"
    }
  };

  var supported = ["en", "zh"];
  var current = (function () {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return supported.indexOf(stored) !== -1 ? stored : "en";
  })();

  function t(key, params) {
    var table = dict[current] || dict.en;
    var s = table[key] !== undefined ? table[key] : dict.en[key];
    if (s === undefined) return key;
    if (params) {
      Object.keys(params).forEach(function (k) {
        s = s.split("{" + k + "}").join(params[k]);
      });
    }
    return s;
  }

  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (key) node.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-html");
      if (key) node.innerHTML = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-placeholder");
      if (key) node.setAttribute("placeholder", t(key));
    });
  }

  function set(lang) {
    if (supported.indexOf(lang) === -1) lang = "en";
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    applyStatic();
    document.dispatchEvent(new CustomEvent("navitech:langchange", { detail: { lang: current } }));
  }

  function init() {
    document.documentElement.lang = current === "zh" ? "zh-CN" : "en";
    applyStatic();
  }

  window.I18N = {
    get lang() { return current; },
    isZh: function () { return current === "zh"; },
    t: t,
    set: set,
    init: init
  };
})();
