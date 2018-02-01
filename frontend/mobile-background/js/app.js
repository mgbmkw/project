import Vue from 'vue'
import App from '@/vue/App'
import router from '@/js/router'


import store from './store/'


import iview from 'iview'


Vue.config.productionTip = false

Vue.use(iview)



// ERROR in app.min.js from UglifyJs
// Unexpected token: name (abc) [app.min.js:1664,4]
// 报错，却不影响运行~~

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})