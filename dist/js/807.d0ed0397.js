"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[807],{7807:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});a(4114);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"category"},[e("van-nav-bar",{attrs:{title:"全部分类",fixed:""}}),e("van-search",{attrs:{readonly:"",shape:"round",background:"#f1f1f2",placeholder:"请输入搜索关键词"},on:{click:function(e){return t.$router.push("/search")}}}),e("div",{staticClass:"list-box"},[e("div",{staticClass:"left"},[e("ul",t._l(t.list,(function(a,s){return e("li",{key:a.category_id},[e("a",{class:{active:s===t.activeIndex},attrs:{href:"javascript:;"},on:{click:function(e){t.activeIndex=s}}},[t._v(t._s(a.name))])])})),0)]),e("div",{staticClass:"right"},t._l(t.list[t.activeIndex]?.children,(function(a){return e("div",{key:a.category_id,staticClass:"cate-goods",on:{click:function(e){return t.$router.push(`/searchlist?categoryId=${a.category_id}`)}}},[e("img",{attrs:{src:a.image?.external_url,alt:""}}),e("p",[t._v(t._s(a.name))])])})),0)])],1)},r=[],i=a(4194),c=a(5720);const n=()=>c.A.get("/category/list");var o={name:"categoryIndex",created(){this.getCategoryList()},data(){return{list:[],activeIndex:0}},methods:{async getCategoryList(){const{data:{list:t}}=await n();this.list=t},async created(){const{data:{list:t}}=await(0,i.getProList)({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=t.data}}},d=o,l=a(1656),u=(0,l.A)(d,s,r,!1,null,"1fb35776",null),g=u.exports},4194:function(t,e,a){a.d(e,{F:function(){return r}});var s=a(5720);const r=t=>{const{sortType:e,sortPrice:a,categoryId:r,goodsName:i,page:c}=t;return s.A.get("/goods/list",{params:{sortType:e,sortPrice:a,categoryId:r,goodsName:i,page:c}})}}}]);
//# sourceMappingURL=807.d0ed0397.js.map