import Vue from 'vue'
import App from '@/vue/App'
import router from '@/js/router'
// import 'iview/dist/styles/iview.css'

import iview from 'iview'


Vue.config.productionTip = false

// Vue.use(iviewStyle)
Vue.use(iview)



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})