import Vue from 'vue'
import Router from 'vue-router'
import wx from '@/vue/components/wx'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/mobile-background/wx',
    name: 'wx',
    component: wx
  }, {
    path: '/mobile-background',
    component: wx
  }]
})