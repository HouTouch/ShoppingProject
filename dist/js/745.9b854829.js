"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[745],{1745:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});a(4114);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"user"},[t.isLogin?s("div",{staticClass:"head-page"},[t._m(0),s("div",{staticClass:"info"},[s("div",{staticClass:"mobile"},[t._v(t._s(t.detail.mobile))]),s("div",{staticClass:"vip"},[s("van-icon",{attrs:{name:"diamond-o"}}),t._v(" 普通会员 ")],1)])]):s("div",{staticClass:"head-page",on:{click:function(s){return t.$router.push("/login")}}},[t._m(1),t._m(2)]),s("div",{staticClass:"my-asset"},[s("div",{staticClass:"asset-left"},[s("div",{staticClass:"asset-left-item"},[s("span",[t._v(t._s(t.detail.pay_money||0))]),s("span",[t._v("账户余额")])]),t._m(3),t._m(4)]),s("div",{staticClass:"asset-right"},[s("div",{staticClass:"asset-right-item"},[s("van-icon",{attrs:{name:"balance-pay"}}),s("span",[t._v("我的钱包")])],1)])]),s("div",{staticClass:"order-navbar"},[s("div",{staticClass:"order-navbar-item",on:{click:function(s){return t.$router.push("/myorder?dataType=all")}}},[s("van-icon",{attrs:{name:"balance-list-o"}}),s("span",[t._v("全部订单")])],1),s("div",{staticClass:"order-navbar-item",on:{click:function(s){return t.$router.push("/myorder?dataType=payment")}}},[s("van-icon",{attrs:{name:"clock-o"}}),s("span",[t._v("待支付")])],1),s("div",{staticClass:"order-navbar-item",on:{click:function(s){return t.$router.push("/myorder?dataType=delivery")}}},[s("van-icon",{attrs:{name:"logistics"}}),s("span",[t._v("待发货")])],1),s("div",{staticClass:"order-navbar-item",on:{click:function(s){return t.$router.push("/myorder?dataType=received")}}},[s("van-icon",{attrs:{name:"send-gift-o"}}),s("span",[t._v("待收货")])],1)]),s("div",{staticClass:"service"},[s("div",{staticClass:"title"},[t._v("我的服务")]),s("div",{staticClass:"content"},[s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"records"}}),s("span",[t._v("收货地址")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"gift-o"}}),s("span",[t._v("领券中心")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"gift-card-o"}}),s("span",[t._v("优惠券")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"question-o"}}),s("span",[t._v("我的帮助")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"balance-o"}}),s("span",[t._v("我的积分")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"refund-o"}}),s("span",[t._v("退换/售后")])],1)])]),s("div",{staticClass:"logout-btn",on:{click:t.logOut}},[s("button",[t._v("退出登录")])])])},n=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"head-img"},[s("img",{attrs:{src:a(7767),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"head-img"},[s("img",{attrs:{src:a(7767),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"info"},[s("div",{staticClass:"mobile"},[t._v("未登录")]),s("div",{staticClass:"words"},[t._v("点击登录账号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"asset-left-item"},[s("span",[t._v("0")]),s("span",[t._v("积分")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"asset-left-item"},[s("span",[t._v("0")]),s("span",[t._v("优惠券")])])}],e=a(5720);const r=()=>e.A.get("/user/info");var c={name:"userIndex",data(){return{detail:{}}},created(){this.isLogin&&this.getUserInfoDetail()},computed:{isLogin(){return this.$store.getters.token}},methods:{async getUserInfoDetail(){const{data:{userInfo:t}}=await r();this.detail=t,console.log(this.detail)},logOut(){this.$dialog.confirm({title:"温馨提示",message:"你确认要退出么？"}).then((()=>{this.$store.dispatch("user/logout")})).catch((()=>{}))}}},o=c,l=a(1656),v=(0,l.A)(o,i,n,!1,null,"565c194a",null),d=v.exports},7767:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEXp6en////9/f3o6Ojw8PDj4+Pl5eXh4eHs7Oz7+/v09PTy8vL4+Pj29vY+GdZKAAADDElEQVRYw+3Wv0sbYRjA8ZNwp+Li89YhUQO+b6F0PDTx6NBBtHXpcBDPRkvhakiC1CGghqIIyRCdOqQlHdouUoqlm1Co0KUZhK4tFPvn9MnF5n6+P4R2KT6EhJe8n3y5ewOJduXJXZNr8l+Tecd5uFu6CinbS18+LR06pjJxxl4ATuZD2anMaXMKxHkOl/P6LFVxCnJi3YXAvP34zZWR1A6E54aUVI8j5J4mIcZBRExLr8WKRk5cGdmHyFyYEqI3o2SqJiH5NkRHl5B9iE3HFBJjI07StpDoC3Ey7QrJfBviYwiJCwmzLCQ7SeRCSNaTyEtTQFKbSSTtishsIrEFxBi6Jn+FFAWk+iSR1PnEyHWTSObM5pJSG5KnxSWPgDMdk0ce88gMl6zzyE0uWRnsoWFyziUubiWMAiMM8AmdtwT4zL38fJcxRnAXw6EI+0sGBpfoTUJIbxfF6ZnL5aTNP/0DklSht1w+KVFK4xVY1vjkqEkSKtltAdH2IF6Bjisi1vd4BfSGiByukWiFjtvi35dKO1qBI01M8AZEKtmahKQ2wxVK07aEaCuRCj3XZKTSDl8L6FIyPESCFZisSYm2F76Wjisn5TZlgYrekJPWLPErdKKm8kfxGfgVODFVyHATBpXJbU2FpDYGdwzGi2rkzqBC064a2fIrSP5VZTZQsZVIa8i/Y1M1JTJ86p9LZrWhdpSB01c6SqtJ/ApM1RtSYmDErzB4b0uJc0qYXyEsUzUlpDoKNFgh9LZjCkn1KTAWqhD4umvyScrJUULDFTTvsMMhxu4YimiFUfhVLSSTvPsAUMQqhMKbw0ICGckXf3giVsEHZO6vxsiIVewC7kqsUAZksR4lerENjPAquCCLhTAxtrv4Lr+CT6Rlh4hzCpSKKozQrGUGiDUKjIkrjMBEvTEg+FXsfyJWiLfRm96LV+unGPy0B6R83NuI73qAeKq/9h4epjgZ6w/Rt8Db2EeBCq4DFdQztUuy2mWKA0d9oq8RVULTNY+UMaKcyfdIao+oE/rKRqIvsCtMtpT7DVEPKD7Ga13IAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=745.9b854829.js.map