<template>
  <div class="swiperFree">

    <swiper :options="swiperFreeOption">
      <swiper-slide>

      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="width:100%;"></div>
    </swiper>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiperFree',
  components: {
    swiper, swiperSlide
  },
  data() {
    return {
      swiperFreeOption: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      arr: [
        { title: '【新年货】', content: '1.锤子 坚果Pro 32GB 碳黑色立体Logo版 全网通 移动联通电信4G手机 双卡双待' },
        { title: '【新年货】', content: '2.锤子 坚果Pro 32GB 碳黑色立体Logo版 全网通 移动联通电信4G手机 双卡双待' },
        { title: '【新年货】', content: '3.锤子 坚果Pro 32GB 碳黑色立体Logo版 全网通 移动联通电信4G手机 双卡双待' },
        { title: '【新年货】', content: '4.锤子 坚果Pro 32GB 碳黑色立体Logo版 全网通 移动联通电信4G手机 双卡双待' }
      ]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
