import addAddress from '@/api/address'
export default {
  namespaced: true,
  state () {
    return {
      addressList: {}
    }
  },
  mutations: {},
  getters: {},
  actions: {
    async addAddress (context, obj) {
      console.log(obj)
      await addAddress(obj)
    }
  }
}
