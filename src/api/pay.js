import request from '@/utils/request'

// 获取购买的信息
export const getBuyInfo = (mode, deliver, shopId, couponId, isUsePoints, cartIds) => {
  return request.get('/checkout/order', {
    mode,
    deliver,
    shopId,
    couponId,
    isUsePoints,
    cartIds
  })
}
// 获取收获地址列表
export const getAddressList = () => {
  return request.get('/address/list')
}
