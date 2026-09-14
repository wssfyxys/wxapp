// app.js —— 小程序入口
App({
  onLaunch() {
    // 小程序启动时执行一次,适合做初始化,如读取缓存、检查登录态
    console.log('小程序启动')
  },
  globalData: {
    userInfo: null
  }
})
