import Vue from 'vue'
import Router from 'vue-router'
import kong from '@/vue/components/kong'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/kong',
    name: 'kong',
    component: kong
  }, {
    path: '/',
    component: kong
  }]
})