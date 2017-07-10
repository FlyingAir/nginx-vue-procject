import Vue from 'vue'
import Router from 'vue-router'
import center from '../pages/Center'
import music from '../pages/Music'
import main from '../pages/Main'
import love from '../pages/Love'
import playListDetail from '../pages/playListDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main

    },
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
      path: '/love',
      name: 'love',
      component: love
    },
    {
      path: '/playListDetail/:id',
      name: 'playListDetail',
      component: playListDetail
    },
  ]
})
