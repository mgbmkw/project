<template>
  <div class="swiperCommonV">

    <swiper :options="swiperOption" ref="mySwiper" style="height:200px;">
      <swiper-slide v-for="(item, key) in arr" :key="key">
        <a href="javascript://"><img :src="item.src" alt="图片名" /></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="width:100%;"></div>
    </swiper>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiperCommonV',
  components: {
    swiper, swiperSlide
  },
  data() {
    return {
      swiperOption: {
        initialSlide: 0,
        // direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: false
        },
        loop: true,
        speed: 400,
        autoplay: {
          disableOnInteraction: false,
          delay: 6000
        }
      },
      arr: [{
        friendname: '日日顺物流',
        msg: '赶快来喝酒~~~~~~~',
        src: '/static/images/700×350图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '三缺一咯，就等你来~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        src: '/static/images/700×350图片02.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '三缺一咯，就等你来~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        src: '/static/images/700×350图片03.jpg',
        time: '2018-1-19'
      }]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
