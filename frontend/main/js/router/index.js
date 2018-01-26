import Vue from 'vue'
import Router from 'vue-router'
import Carousel from '@/vue/components/Carousel'
import CarouselEdit from '@/vue/components/CarouselEdit'
import upload from '@/vue/components/upload'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [{
    path: '/Carousel',
    name: 'Carousel',
    component: CarouselEdit
  },{
    path: '/CarouselEdit',
    name: 'CarouselEdit',
    component: CarouselEdit
  },{
    path: '/upload',
    name: 'upload',
    component: upload
  }, {
    path: '/',
    component: Carousel
  },]
})