"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[209],{5209:function(s,t,a){a.r(t),a.d(t,{default:function(){return u}});a(4114);var e=function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay"},[t("van-nav-bar",{attrs:{fixed:"",title:"订单结算台","left-arrow":""},on:{"click-left":function(t){return s.$router.go(-1)}}}),t("div",{staticClass:"address"},[t("div",{staticClass:"left-icon"},[t("van-icon",{attrs:{name:"logistics"}})],1),s.addressList.length>0?t("div",{staticClass:"info",on:{click:function(t){return s.$router.push("/address")}}},[t("div",{staticClass:"info-content"},[t("span",{staticClass:"name"},[s._v(s._s(s.adressShow.name))]),t("span",{staticClass:"mobile"},[s._v(s._s(s.adressShow.phone))])]),t("div",{staticClass:"info-address"},[s._v(" "+s._s(s.longAddress)+" ")])]):t("div",{on:{click:function(t){return s.$router.push("/address")}}},[t("div",{staticClass:"info"},[s._v(" 请选择配送地址 ")])]),t("div",{staticClass:"right-icon"},[t("van-icon",{attrs:{name:"arrow"}})],1)]),s.order.goodsList?t("div",{staticClass:"pay-list"},[t("div",{staticClass:"list"},s._l(s.order.goodsList,(function(a){return t("div",{key:a.goods_id,staticClass:"goods-item"},[t("div",{staticClass:"left"},[t("img",{attrs:{src:a.goods_image,alt:""}})]),t("div",{staticClass:"right"},[t("p",{staticClass:"tit text-ellipsis-2"},[s._v(" "+s._s(a.goods_name)+" ")]),t("p",{staticClass:"info"},[t("span",{staticClass:"count"},[s._v("x"+s._s(a.total_num))]),t("span",{staticClass:"price"},[s._v("¥"+s._s(a.total_pay_price))])])])])})),0),t("div",{staticClass:"flow-num-box"},[t("span",[s._v("共 "+s._s(s.order.orderTotalNum)+" 件商品，合计：")]),t("span",{staticClass:"money"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"pay-detail"},[t("div",{staticClass:"pay-cell"},[t("span",[s._v("订单总金额：")]),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),s._m(0),t("div",{staticClass:"pay-cell"},[t("span",[s._v("配送费用：")]),s.adressShow?t("span",{staticClass:"red"},[s._v("+￥0.00")]):t("span",[s._v("请先选择配送地址")])])]),t("div",{staticClass:"pay-way"},[t("span",{staticClass:"tit"},[s._v("支付方式")]),t("div",{staticClass:"pay-cell"},[t("span",[t("van-icon",{attrs:{name:"balance-o"}}),s._v("余额支付（可用 ¥ "+s._s(s.personal.balance)+" 元）")],1),t("span",{staticClass:"red"},[t("van-icon",{attrs:{name:"passed"}})],1)])]),t("div",{staticClass:"buytips"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.reamrk,expression:"reamrk"}],attrs:{placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},domProps:{value:s.reamrk},on:{input:function(t){t.target.composing||(s.reamrk=t.target.value)}}})])]):s._e(),t("div",{staticClass:"footer-fixed"},[t("div",{staticClass:"left"},[s._v("实付款："),t("span",[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"tipsbtn",on:{click:s.submitOrder}},[s._v("提交订单")])])],1)},r=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay-cell"},[t("span",[s._v("优惠券：")]),t("span",[s._v("无优惠券可用")])])}],o=a(4586),i=a(4180),d={name:"payIndex",data(){return{addressList:[],order:{},personal:{},reamrk:""}},computed:{adressShow(){return this.addressList[0]},longAddress(){const s=this.addressList[0].region;return s.province+s.city+s.region+this.addressList[0].detail},mode(){return this.$route.query.mode},cartIds(){return this.$route.query.cartIds},goodsId(){return this.$route.query.goodsId},goodsSkuId(){return this.$route.query.goodsSkuId},goodsNum(){return this.$route.query.goodsNum}},async created(){this.getAddress(),this.getOrderList()},methods:{async getAddress(){const{data:{list:s}}=await(0,o.R)();this.addressList=s},async getOrderList(){if("cart"===this.mode){const{data:{order:s,personal:t}}=await(0,i.Fs)(this.mode,{cartIds:this.cartIds});this.order=s,this.personal=t,console.log(this.order),console.log(this.personal)}if("buyNow"===this.mode){const{data:{order:s,personal:t}}=await(0,i.Fs)(this.mode,{goodsId:this.goodsId,goodsSkuId:this.goodsSkuId,goodsNum:this.goodsNum});this.order=s,this.personal=t}},async submitOrder(){"cart"===this.mode&&await(0,i.Z7)(this.mode,{remark:this.remark,cartIds:this.cartIds}),"buyNow"===this.mode&&await(0,i.Z7)(this.mode,{remark:this.remark,goodsId:this.goodsId,goodsSkuId:this.goodsSkuId,goodsNum:this.goodsNum}),this.$toast.success("支付成功"),this.$router.replace("/myorder")}}},n=d,c=a(1656),l=(0,c.A)(n,e,r,!1,null,"7b6703a8",null),u=l.exports},4180:function(s,t,a){a.d(t,{Fs:function(){return r},JU:function(){return d},Nj:function(){return i},Z7:function(){return o}});var e=a(5720);const r=(s,t)=>e.A.get("/checkout/order",{params:{mode:s,delivery:0,couponId:0,isUsePoints:0,...t}}),o=(s,t)=>e.A.post("/checkout/submit",{mode:s,delivery:10,couponId:0,payType:10,isUsePoints:0,...t}),i=(s,t)=>e.A.get("/order/list",{params:{dataType:s,page:t}}),d=s=>e.A.post("/order/cancel",{orderId:s})},4586:function(s,t,a){a.d(t,{R:function(){return r}});var e=a(5720);const r=()=>e.A.get("/address/list")}}]);
//# sourceMappingURL=209.c3601e6d.js.map