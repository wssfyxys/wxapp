# github-wxapp 个人小程序

原生微信小程序项目骨架。

## 使用方法

1. 用「微信开发者工具」打开本项目目录
2. 如果你有自己的小程序 AppID,在 `project.config.json` 里把 `touristappid` 换成你的 AppID(没有的话可以先用「测试号」)
3. 首页已包含事件处理示例(点击计数),「关于」页演示了页面跳转

## 目录结构

```
├── app.js            # 小程序入口
├── app.json          # 全局配置(注册页面、导航栏样式)
├── app.wxss          # 全局样式
├── project.config.json
├── sitemap.json
├── pages/
│   ├── index/        # 首页
│   └── about/        # 关于页
└── utils/
    └── request.js    # 网络请求封装(记得改 BASE_URL)
```

## 如何新增页面

1. 在 `pages/` 下新建文件夹(如 `pages/detail/`)
2. 新建 `detail.js`、`detail.json`、`detail.wxml`、`detail.wxss` 四个文件(可复制 index 页改)
3. 在 `app.json` 的 `pages` 数组里加上 `"pages/detail/detail"`

## 版本管理

个人项目建议每完成一个小功能就提交一次:

```
git add .
git commit -m "feat: 新增xx页面"
```
