import Vue from 'vue'
import VueRouter from 'vue-router'

const layout = () => import('@/views/layout/index.vue')
const login = () => import('@/views/login/index.vue')
const search = () => import('@/views/search/index.vue')
const searchlist = () => import('@/views/search/searchlist.vue')
const prodetail = () => import('@/views/prodetail/index.vue')
const pay = () => import('@/views/pay/index.vue')
const myorder = () => import('@/views/myorder/index.vue')
const Home = () => import('@/views/layout/home.vue')
const category = () => import('@/views/layout/category.vue')
const user = () => import('@/views/layout/user.vue')
const cart = () => import('@/views/layout/cart.vue')
const address = () => import('@/views/pay/adrsManage.vue')
const addAddress = () => import('@/views/pay/addAddress.vue')

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
    { path: '/myorder', component: myorder },
    { path: '/address', component: address },
    { path: '/addAddress', component: addAddress }
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
