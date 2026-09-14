// utils/request.js —— 统一的网络请求封装
// 用法:const res = await request('/your/api/path')
const BASE_URL = 'https://your-server.com' // TODO: 替换成你自己的接口地址

function request(path, method = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + path,
      method,
      data,
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: reject
    })
  })
}

module.exports = { request }
