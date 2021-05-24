import Vue from 'vue'
import Router from 'vue-router'
import admin from './admin'
Vue.use(Router)

export default new Router({
  //mode: 'history',
  // base:env.base_build_path,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../view/home')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../view/home')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../view/register/register')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('../view/show/ShowIndex')
    },
    {
      path: '/showModel',
      name: 'showModel',
      component: () => import('../view/show/ShowModel')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../packages/ui/errorPage/404.vue')
    },
    ...admin,
    {
      path: '*',
      name: 'err',
      redirect: '404'
    }
  ]
})
