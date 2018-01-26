<template>
  <div class="swiperRotate">

    <swiper :options="swiperRotateOption">
      <swiper-slide v-for="(item, key) in arr" :key="key">
        <a href="javascript://" class="flex2">
          <img :src="item.src" alt="图片名" class="flex3-item-img" />
          <div class="flex2-vertical flex3-item-text">
            <h4 class="flex2-vertical-item-text-title">{{item.title}}</h4>
            <p class="flex2-vertical-item-text-subtitle">{{item.content}}</p>
          </div>
        </a>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination" style="width:100%;"></div> -->
    </swiper>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiperRotate',
  components: {
    swiper, swiperSlide
  },
  data() {
    return {
      swiperRotateOption: {
        autoplay: {
          disableOnInteraction: false,
          delay: 6000
        },
        effect: 'flip',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      arr: [
        {
          src: '/static/images/140×140图片01.jpg',
          title: '√新年货',
          content: '1.锤子 坚果Pro 32GB 碳黑色立体Logo版 全网通 移动联通电信4G手机 双卡双待'
        },
        {
          src: '/static/images/140×140图片02.jpg',
          title: '√新年货',
          content: '2.锤子 坚果Pro 32GB 碳黑色立体Logo版 全网通 移动联通电信4G手机 双卡双待'
        },
        {
          src: '/static/images/140×140图片03.jpg',
          title: '√新年货',
          content: '3.锤子 坚果Pro 32GB 碳黑色立体Logo版 全网通 移动联通电信4G手机 双卡双待'
        },
        {
          src: '/static/images/140×140图片01.jpg',
          title: '√新年货',
          content: '4.锤子 坚果Pro 32GB 碳黑色立体Logo版 全网通 移动联通电信4G手机 双卡双待'
        }
      ]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
