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

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(MintUI,VueAxios, axios)
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
