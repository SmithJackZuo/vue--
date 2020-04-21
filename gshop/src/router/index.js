import Vue from 'vue'
import Router from 'vue-router'
const MSite = () => import('@/pages/MSite/MSite.vue') // 路由懒加载

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'MSite',
    component: MSite
  }]
})
