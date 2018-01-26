<template>
  <div class="swiperStep">

    <swiper :options="swiperStepOption">
      <swiper-slide><img height="120" src="/static/images/700×350图片01.jpg" alt="图片名" /></swiper-slide>
      <swiper-slide><img height="120" src="/static/images/700×350图片02.jpg" alt="图片名" /></swiper-slide>
      <swiper-slide><img height="120" src="/static/images/700×350图片03.jpg" alt="图片名" /></swiper-slide>
      <swiper-slide><img height="120" src="/static/images/700×350图片04.jpg" alt="图片名" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="width:100%;"></div>
    </swiper>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiperStep',
  components: {
    swiper, swiperSlide
  },
  data() {
    return {
      swiperStepOption: {
        autoplay: {
          disableOnInteraction: false,
          delay: 6000
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.3, // auto
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
