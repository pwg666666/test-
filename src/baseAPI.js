import wepy from 'wepy'

const baseURL = 'https://www.zhengzhicheng.cn/api/public/v1'
/**
 * 把提示弹框封装，简化
 */
wepy.baseToast = function (params = '请求失败') {
  wx.showToast({
    title: params,
    duration: 1500,
    icon: 'none'
  })
}
/**
 * 把请求后台的get方式封装，简化
 */
wepy.get = function (url, data = {}) {
  return wepy.request({
    url: baseURL + url,
    data: data,
    method: 'get'
  })
}
/**
 * 把请求后台的post方式封装，简化
 */
wepy.post = function (url, data = {}) {
  return wepy.request({
    url: baseURL + url,
    data: data,
    method: 'post'
  })
}
