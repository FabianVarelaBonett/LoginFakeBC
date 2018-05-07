import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import LoginQS from '@/components/LoginQS'
import LoginRes from '@/components/LoginRes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/LoginQS',
      name: 'LoginQS',
      component: LoginQS
    },
    {
      path: '/LoginRes',
      name: 'LoginRes',
      component: LoginRes
    }
  ]
})
