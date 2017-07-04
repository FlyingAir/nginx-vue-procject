// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import '../static/css/reset.css'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTouch from 'vue-touch'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueTouch,{name: 'v-touch'})
/* eslint-disable no-new */
Vue.use(MintUI,VueAxios, axios)

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '../static/error.jpg',
    loading: '../static/default_cover.png',
    attempt: 1 ,
    listenEvents: [ 'scroll' ]
});
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://74.121.151.232:3000/";
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
