import Vue from 'vue'
import Router from 'vue-router'
import first from '@/vue/components/first'
import hot from '@/vue/components/hot'
import hire from '@/vue/components/hire'
import mall from '@/vue/components/mall'
import mine from '@/vue/components/mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/mobile-background/first',
      name: 'first',
      component: first
    },
    {
      path: '/mobile-background/hot',
      name: 'hot',
      component: hot
    },
    {
      path: '/mobile-background/hire',
      name: 'hire',
      component: hire
    },
    {
      path: '/mobile-background/mall',
      name: 'mall',
      component: mall
    },
    {
      path: '/mobile-background/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/mobile-background',
      component: mall
    }
  ]
})