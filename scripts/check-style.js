#!/usr/bin/env node
/**
 * scripts/check-style.js —— 样式规范自动检查(CI 与提交前运行)
 * 规则 1:pages 目录下所有 .wxss 文件中禁止出现裸十六进制色值(必须使用 styles/tokens.wxss 的 CSS 变量)
 * 规则 2:app.json 注册的每个页面都必须存在对应的 .js/.json/.wxml/.wxss 文件
 * 通过输出 PASS,失败输出违规位置并以非 0 退出码结束
 */
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const errors = []

// ---- 规则 1:页面样式禁裸色值 ----
const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g

function walkWxss(dir) {
  let files = []
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    const stat = fs.statSync(p)
    if (stat.isDirectory()) files = files.concat(walkWxss(p))
    else if (name.endsWith('.wxss')) files.push(p)
  }
  return files
}

const pageWxss = walkWxss(path.join(root, 'pages'))
for (const file of pageWxss) {
  const rel = path.relative(root, file)
  const content = fs.readFileSync(file, 'utf8')
  const lines = content.split('\n')
  lines.forEach((line, i) => {
    const m = line.match(HEX_RE)
    if (m) {
      errors.push(`[裸色值] ${rel}:${i + 1} 出现 ${m.join(', ')} —— 请改用 styles/tokens.wxss 中的 CSS 变量`)
    }
  })
}

// ---- 规则 2:app.json 页面注册完整性 ----
const appJsonPath = path.join(root, 'app.json')
if (fs.existsSync(appJsonPath)) {
  const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'))
  for (const page of appJson.pages || []) {
    for (const ext of ['js', 'json', 'wxml', 'wxss']) {
      const p = path.join(root, `${page}.${ext}`)
      if (!fs.existsSync(p)) {
        errors.push(`[页面缺失] app.json 注册了 "${page}",但文件 ${page}.${ext} 不存在`)
      }
    }
  }
}

// ---- 输出结果 ----
if (errors.length > 0) {
  console.error('样式/工程检查未通过:')
  for (const e of errors) console.error('  ' + e)
  process.exit(1)
} else {
  console.log(`PASS:样式规范检查通过(扫描 ${pageWxss.length} 个页面 WXSS 文件,检查 app.json 页面注册完整性)`)
}
