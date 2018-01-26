import Vue from 'vue'
import Router from 'vue-router'
import first from '@/vue/components/first'
import hot from '@/vue/components/hot'
import hire from '@/vue/components/hire'
import mall from '@/vue/components/mall'
import mine from '@/vue/components/mine'

import message from '@/vue/components/message'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/mobile/first',
    name: 'first',
    component: first
  }, {
    path: '/mobile/hot',
    name: 'hot',
    component: hot
  }, {
    path: '/mobile/hire',
    name: 'hire',
    component: hire
  }, {
    path: '/mobile/mall',
    name: 'mall',
    component: mall
  }, {
    path: '/mobile/mine',
    name: 'mine',
    component: mine
  }, {
    path: '/mobile/message',
    name: 'message',
    component: message
  }, {
    path: '/mobile',
    component: first
  }, ]
})