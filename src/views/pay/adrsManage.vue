<template lang="">
    <div class='bigBox'>
        <van-nav-bar fixed title="收获地址" left-arrow @click-left="$router.go(-1)" />
        <div v-if="this.addressList.length>0" >
          <div class="address-list" v-for="item in addressList" :key="item.id">
            <div>{{item.name}} {{item.phone}}</div>
            <div>{{longAddress}}</div>
            <hr>
            <div>
              <van-checkbox v-model="checked" checked-color="#ee0a24">复选框</van-checkbox>
            </div>
          </div>
        </div>
        <div class="empty-cart" v-else>
            <img src="@/assets/empty.png" alt="">
            <div class="tips">
                亲，暂无收货地址
            </div>
        </div>

        <div class='botton'>
          <div class='tipsbtn' @click='$router.push("/addAddress")'>添加地址</div>
        </div>
    </div>
</template>
<script>
import { getAddressList } from '@/api/pay'
export default {
  name: 'addressIndex',
  data () {
    return {
      addressList: [],
      checked: true
    }
  },
  computed: {
    longAddress () {
      const region = this.addressList[0].region
      console.log(region)
      // 拼接地址
      return region.province + ' ' + region.city + ' ' + region.region + ' ' + this.addressList[0].detail
    }
  },
  methods: {
    async getAddress () {
      const { data: { list } } = await getAddressList()
      this.addressList = list
      console.log(this.addressList)
    }
  },
  async created () {
    this.getAddress()
  }
}
</script>
<style lang="less" scoped>
.bigBox{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #f6f6f699;
}
.address-list{
  width: 90%;
  height: 120px;
  background-color: #ffffff;
  margin:auto;
  margin-top: 60px;
  box-shadow: 0px 0px 5px 1px rgb(210, 210, 210);
  margin-bottom: -50px;
  border-radius: 10px
}
.botton{
  position: fixed;
  background-color: #fff;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  line-height: 46px;
  border-top: 1px solid #efefef;
  font-size: 14px;
  display: flex;
    .tipsbtn {
    width: 240px;
    margin: auto;
    background: linear-gradient(90deg,#f9211c,#ff6335);
    color: #fff;
    text-align: center;
    line-height: 46px;
    display: block;
    font-size: 16px;
    border-radius: 30px;
  }
}
.empty-cart {
  padding: 80px 30px;
  img{
    width: 160px;
    height: 102px;
    display: block;
    margin: 0 auto;
    margin-top: 180px;
  }
  .tips {
    text-align: center;
    color: #666;
    margin: 30px;
    font-size: 16px
  }
}
</style>
