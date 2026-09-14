// pages/index/index.js —— 首页逻辑
Page({
  data: {
    motto: '欢迎使用我的小程序',
    count: 0
  },

  // 演示事件处理:点击按钮计数
  onTapCount() {
    this.setData({
      count: this.data.count + 1
    })
  },

  // 跳转到“关于”页
  goAbout() {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  }
})
