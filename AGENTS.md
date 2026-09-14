# AI 开发规则(AGENTS.md)

你(AI 编程助手)在本仓库工作时,必须遵守以下约定。本文件对所有 AI 编码工具生效(Cursor、Copilot、Claude 等),违反这些规则的代码不允许提交。

## 1. Git 工作流(强制)

- 当前分支不是 `feature/xxx` 或 `fix/xxx` 时,先从 `dev` 拉出功能分支再写代码:`git checkout dev && git pull origin dev && git checkout -b feature/<功能名>`
- **永远不要直接向 `main` 或 `dev` 推送代码**,改动通过功能分支推送,合并走 Pull Request
- 提交信息格式:`类型: 中文简述`,类型必须是 `feat` / `fix` / `style` / `refactor` / `docs` / `chore` 之一
- 提交前运行 `node scripts/check-style.js`,必须通过

## 2. 样式规范(强制)

视觉规范全文见 `docs/DESIGN.md`,以下规则没有例外:

- **页面 WXSS 中禁止出现裸的十六进制色值**。所有颜色必须引用 `styles/tokens.wxss` 中的 CSS 变量(如 `var(--color-ink)`、`var(--color-hairline)`)
- 优先复用令牌文件里的公共类:`.band-dark` / `.band-light`(区块)、`.eyebrow`(眉标)、`.btn-primary`(黑色主按钮)、`.card` / `.card-dark`(卡片)、`.card-stat`(统计卡)、`.table-header` / `.table-row`(表格)、`.badge`(徽章),禁止把它们的样式复制粘贴到页面里
- 一屏只允许一个黑色 `.btn-primary`;hero 场景次级按钮用 `.btn-mint`
- 浅底卡片只用 1px hairline 描边,**禁止投影**;柔和投影只属于悬浮元素
- 圆角只用 `--rounded-sm`(8rpx,默认)、`--rounded-xs`、`--rounded-md`;`--rounded-full` 仅用于悬浮圆形按钮
- 品牌渐变 `--brand-gradient` 是整体对象:禁止拆单色、调顺序、加色站、缩小成图标
- 文字层级使用 `.t-display-*` / `.t-body-*` 字阶类;字重只用 400/500,禁止 700
- 等宽字体(`.font-mono` / `.eyebrow`)只用于大写技术标签,禁止排段落;标题永远句首大写

## 3. 小程序工程约定(强制)

- 新增页面必须同时:在 `app.json` 的 `pages` 数组注册 + 创建 `.js/.json/.wxml/.wxss` 四件套
- 网络请求一律走 `utils/request.js` 的 `request()` 封装,禁止在页面里直接调 `wx.request`
- 页面数据更新必须用 `this.setData`,禁止直接给 `this.data` 赋值
- 新页面建议先复制 `pages/about/` 的结构再改,保持代码组织一致

## 4. PR 描述要求

- 按 `.github/PULL_REQUEST_TEMPLATE.md` 模板填写,勾选自查清单
- 描述中说明:改了什么、为什么改、在微信开发者工具中已验证无报错
