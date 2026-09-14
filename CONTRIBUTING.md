# 团队协作规范

本项目采用 **分支协作 + Pull Request 审查** 的标准流程。所有代码改动都必须走这个流程,不允许直接向 `main` 分支推送代码。

## 1. 分支策略

| 分支 | 用途 | 规则 |
|------|------|------|
| `main` | 正式版本分支 | 始终保持可运行,只能通过 Pull Request 合入,需要至少 1 人审查通过 |
| `dev` | 集成测试分支 | 汇总各功能分支,功能在这里联调测试通过后再合入 `main` |
| `feature/xxx` | 功能分支 | 每个人、每个功能一个分支,如 `feature/login`、`feature/order-list` |
| `fix/xxx` | 修复分支 | 修复 bug 时使用,如 `fix/home-crash` |
| `hotfix/xxx` | 紧急修复 | 线上出问题时从 `main` 拉出,修完直接 PR 回 `main` |

## 2. 日常开发流程

```bash
# 1. 同步最新代码
git checkout dev
git pull origin dev

# 2. 从 dev 拉出自己的功能分支
git checkout -b feature/login

# 3. 开发,小步提交(见下方提交信息规范)
git add .
git commit -m "feat: 完成登录页面 UI"

# 4. 推送自己的分支到远端
git push origin feature/login

# 5. 在 GitHub 上发起 Pull Request:feature/login -> dev
# 6. 找至少 1 位成员审查,通过后合并,删除功能分支
```

## 3. 提交信息规范

格式:`类型: 简短描述`(描述用中文,一行不超过 50 字)

| 类型 | 含义 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `style` | 仅样式调整,不影响逻辑 |
| `refactor` | 重构(既非新增也非修复) |
| `docs` | 只改文档 |
| `chore` | 构建、配置等杂项 |

示例:
- `feat: 新增商品详情页`
- `fix: 修复首页计数按钮重复点击的问题`

## 4. Pull Request 要求

1. 标题写清楚做了什么,描述里说明**改动原因**和**改动内容**
2. 自己先在微信开发者工具里跑通、页面无报错后再发起 PR
3. 指定 1 名审查者;审查者需要看:代码逻辑是否正确、命名是否清晰、是否改了不相关的文件
4. 有冲突时,由 PR 发起人自己解决:`git pull origin dev` → 解决冲突 → 重新推送

## 5. 分工约定

- 任务拆分记录在 GitHub Issues 中,谁认领谁在 issue 里回复"我来做",并注明分支名
- 公共文件(`app.json`、`app.js`、`utils/` 目录)的改动需要在 PR 里特别说明原因,避免多人同时改导致频繁冲突
- 新页面必须同时更新 `app.json` 的页面注册

## 6. 冲突预防

- 每天开工先 `git pull origin dev`,收工前推送自己的分支
- 一个分支的生命周期尽量不超过 2-3 天,写完尽快合并
- 改动范围尽量小,一次 PR 只做一件事
