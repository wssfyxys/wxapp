# GitHub Copilot 编码规范

在本仓库工作时必须遵守:

1. **Git**:只从 `dev` 拉功能分支(`feature/xxx` / `fix/xxx`)开发,禁止直接改 `main` / `dev`;提交信息 `类型: 中文简述`,类型限 `feat`/`fix`/`style`/`refactor`/`docs`/`chore`
2. **颜色**:`pages/**/*.wxss` 中禁止写十六进制色值,一律使用 `styles/tokens.wxss` 的 CSS 变量(`var(--color-ink)` 等)和公共类(`.card`、`.btn-primary`、`.band-dark`、`.eyebrow`、`.badge`、`.card-stat` 等)
3. **视觉**:字重仅 400/500;浅底卡片只用 1px 描边不用投影;一屏一个黑色主按钮;品牌渐变 `--brand-gradient` 不可拆解、调序、缩小;等宽字体只写大写标签不排段落
4. **工程**:新页面必须在 `app.json` 注册并创建 js/json/wxml/wxss 四个文件;网络请求统一走 `utils/request.js`;页面数据更新必须 `this.setData`
5. **提交前**:运行 `node scripts/check-style.js` 确认通过

详见 `AGENTS.md`、`docs/DESIGN.md`、`CONTRIBUTING.md`。
