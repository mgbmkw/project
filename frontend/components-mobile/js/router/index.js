import Vue from 'vue'
import Router from 'vue-router'
import formItems from '@/vue/components/formItems'
import swiperCarousel from '@/vue/components/swiperCarousel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/swiperCarousel',
    name: 'swiperCarousel',
    component: swiperCarousel
  }, {
    path: '/',
    component: formItems
  }]
})