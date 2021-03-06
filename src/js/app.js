import './bootstrap'

import Vue from 'vue'
import App from '@components/App'
import router from '@/router'
import store from '@/store'
require.context('../images', true)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
