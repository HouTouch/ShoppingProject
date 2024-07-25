// 此处存放所有登录相关的接口请求
import request from '@/utils/request'
// 获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}
export const getCapCha = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
export const login = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  })
}
