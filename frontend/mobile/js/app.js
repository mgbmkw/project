import Vue from 'vue'
import App from '@/vue/App'
import router from '@/js/router'
import 'mint-ui/lib/style.css'

// 临时测试
import 'swiper/dist/css/swiper.css'

import mintUI from 'mint-ui'

// 临时测试
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import VueTouch from 'vue-touch'

// var VueTouch = require('vue-touch')
Vue.use(VueTouch, {
  name: 'v-touch'
})




Vue.config.productionTip = false

// Vue.use(mint-ui-style)
Vue.use(mintUI)



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})