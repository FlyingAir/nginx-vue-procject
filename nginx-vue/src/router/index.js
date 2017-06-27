import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/Login'
import regist from '../pages/Regist'
import details from '../pages/details'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
  ]
})
