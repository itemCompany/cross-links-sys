import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('@/assets/css/reset.less')

Vue.use(ElementUI)

import { post, get} from "./fetch/http"
import api from './fetch/api/index'

Vue.prototype.$post = post
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
