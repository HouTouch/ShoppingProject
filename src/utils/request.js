import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
// 创建axios实例没将来对创建出来的实例，进行自定义配置
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api/',
  timeout: 5000,
  headers: { platform: 'H5' }
})

// 自定义配置-请求/响应拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启loding, 禁止背景点击
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0// 不会自动消失
  })
  // 只要有tokne，就在请求时携带，便于请求需要授权的接口
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么(默认axios会多包装一层data)
  // toast 默认是单例模式，后面的toast调用了，会将前一个效果覆盖，同时只能存在一个
  const res = response.data
  if (res.status !== 200) {
    Toast(res.message)
    return Promise.reject(res.message)
  } else {
    // 清除 loading 中的效果
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 到处配置好的
export default instance
