<template lang="">
    <div>
        <van-nav-bar fixed title="新增收货地址" left-arrow @click-left="$router.go(-1)" />
        <div class='bigBox'>
            <div style='margin: 70px 0 0 5%;color: #717171;font-size: 16px'>
                收货地址
            </div>
            <div class='frame'>
               <van-form @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="phone"
                        type="phone"
                        name="手机号"
                        label="手机号"
                        placeholder="请输入手机号"
                        :rules="[{ pattern,required: true, message: '手机号格式不正确' }]"
                    />
                    <van-field
                        readonly
                        clickable
                        name="area"
                        :value="value"
                        label="地区选择"
                        placeholder="点击选择省市区"
                        @click="showArea = true"
                        />
                        <van-popup v-model="showArea" position="bottom">
                        <van-area
                            :area-list="areaList"
                            @confirm="onConfirm"
                            @cancel="showArea = false"
                        />
                        </van-popup>
                    <van-field
                        v-model="detail"
                        type="detail"
                        name="住址"
                        label="住址"
                        placeholder="请输入详细住址"
                        :rules="[{ required: true, message: '请输入详细住址' }]"
                    />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">提交</van-button>
                    </div>
                </van-form>

            </div>

        </div>
    </div>
</template>
<script>
import { areaList } from '@vant/area-data'
export default {
  name: 'addAddressIndex',
  data () {
    return {
      username: '',
      phone: '',
      value: '',
      showArea: false,
      areaList, // 数据格式见 Area 组件文档
      detail: '',
      pattern: /\d{1}/,
      addressList: [],
      addressListFn: [[]],
      label: ''
    }
  },
  methods: {
    async onSubmit () {
      this.addressList = this.value.split('/').filter(Boolean)
      this.addressListFn = this.addressList.map((item) => {
        return {
          label: item
        }
      })
      console.log(this.addressListFn)
      this.$store.dispatch('address/addAddress', {
        form: {
          name: this.username,
          phone: this.phone,
          region: this.addressList,
          detail: this.detail
        }

      }
      )
    },
    async onConfirm (values) {
      this.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
      this.showArea = false
    }
  }
}
</script>
<style lang="less" scoped>
.bigBox{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    .frame{
        width: 90%;
        margin: auto;
        margin-top: 5px;
        height: 100px;
        background: #fff;
        border-radius: 10px;
    }
    .frame :only-child{
        line-height: 40px;
        color: black;
        font-size: 13px;
    }
}
</style>
