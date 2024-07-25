import { getCartList, updateCount } from '@/api/cart'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, list) {
      state.cartList = list
      console.log(state.cartList)
    },
    checedOne (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    checkdAll (state, flag) {
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },
    changeCount (state, { goodsId, value }) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.goods_num = value
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    },
    async changeCountAction (context, obj) {
      const { goodsId, value, skuId } = obj
      context.commit('changeCount', {
        goodsId,
        value
      })
      await updateCount(goodsId, value, skuId)
    }
  },
  getters: {
    // 求所有商品累加总数
    carTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 判断商品是否选中
    selCarList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 求选中商品累加总数
    selCarTotal (state, getters) {
      return getters.selCarList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 选中的总价
    selCount (state, getters) {
      return getters.selCarList.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_min, 0).toFixed(2)
    },
    // 判断是否全选
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }

  }
}
