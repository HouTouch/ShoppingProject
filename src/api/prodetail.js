import request from '@/utils/request'

export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }

  })
}
export const getProDetailService = (goodsId) => {
  return request.get('/goods.service/list', {
    params: {
      goodsId
    }
  })
}

export const getProDetailComment = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }

  })
}
