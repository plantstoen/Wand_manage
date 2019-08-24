import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import vueGoogleMapWrapper from './plugins/vue-google-map-wrapper'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(vueGoogleMapWrapper, { apiKey: 'AIzaSyC8Y8hQ8I6R7YW3QkpYI9WD3XPeUoXNdbw' })

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
