import Vue from 'vue'
import App from '@/vue/App'
import router from '@/js/router'
// import 'iview/dist/styles/iview.css'

import iview from 'iview'
import mintUI from 'mint-ui'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

// Vue.use(iviewStyle)
Vue.use(iview)
Vue.use(mintUI)
Vue.use(ElementUI)



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})