import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import search from '@/views/search/index.vue'
import searchlist from '@/views/search/searchlist.vue'
import prodetail from '@/views/prodetail/index.vue'
import pay from '@/views/pay/index.vue'
import myorder from '@/views/myorder/index.vue'
import Home from '@/views/layout/home.vue'
import category from '@/views/layout/category.vue'
import user from '@/views/layout/user.vue'
import cart from '@/views/layout/cart.vue'

// import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: category },
        { path: '/user', component: user },
        { path: '/cart', component: cart }
      ]
    },
    { path: '/login', component: login },
    { path: '/search', component: search },
    { path: '/searchlist', component: searchlist },
    { path: '/prodetail/:id', component: prodetail },
    { path: '/pay', component: pay },
    { path: '/myorder', component: myorder }
  ]
})

// 全局前置导航守卫，类似拦截器
// next() 直接放行，放行到to要去的路径
// next(路劲) 进行拦截，拦截到next里面配置的路劲

// 定义数组，存放所有需要权限访问的页面
// const authUrls = ['/pay', '/myorder']
// router.beforeEach((to, from, next) => {
//   // console.log(to, from, next)
//   if (!authUrls.includes(to.path)) {
//     // 非权限页面
//     next()
//   }

//   // 权限页面
//   const token = store.getters.token
//   if (token) {
//     next()
//   } else {
//     next('/login')
//   }
// })
export default router
