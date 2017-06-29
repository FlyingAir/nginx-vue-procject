import Vue from 'vue'
import Router from 'vue-router'
import center from '../pages/Center'
import music from '../pages/Music'
import main from '../pages/Main'
import search from '../pages/Search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/center',
      name: 'center',
      component: center
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
  ]
})
