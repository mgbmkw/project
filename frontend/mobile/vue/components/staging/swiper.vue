<template>
  <div class="kong">

    <!--  -->
    <!-- <swiper :options="swiperOption" ref="mySwiper0" id="swiperOption" style="background-color:#999;">
      <swiper-slide v-for="(item, key) in arr" :key="key" style="background-color:#999;line-height:34px;height:34px;">
        {{item.name}}
      </swiper-slide>
    </swiper> -->

    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs" style="background-color: rgb(166, 180, 230);">
      <!-- <swiper-slide v-for="(item, key) in arr" :key="key" style="width:100px;background-color:#999;line-height:34px;height:34px;"> {{item.name}} </swiper-slide> -->
      <swiper-slide>推荐</swiper-slide>
      <swiper-slide>电视剧</swiper-slide>
      <swiper-slide>电影</swiper-slide>
      <swiper-slide>儿童</swiper-slide>
      <swiper-slide>综艺</swiper-slide>
      <swiper-slide>动漫</swiper-slide>
      <swiper-slide>资讯</swiper-slide>
      <swiper-slide>搞笑</swiper-slide>
      <swiper-slide>游戏</swiper-slide>
    </swiper>

    <!-- <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
    </swiper> -->

    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide style="border:1px solid #666;line-height:100px;">推荐 </swiper-slide>
      <swiper-slide style="border:1px solid #666;line-height:100px;"> 电视剧</swiper-slide>
      <swiper-slide style="border:1px solid #666;line-height:100px;min-height:100%;">电影</swiper-slide>
      <swiper-slide style="border:1px solid #666;line-height:100px;min-height:100%;">儿童</swiper-slide>
      <swiper-slide style="border:1px solid #666;line-height:100px;min-height:100%;">综艺</swiper-slide>
      <swiper-slide style="border:1px solid #666;line-height:100px;min-height:100%;">动漫</swiper-slide>
      <swiper-slide style="border:1px solid #666;line-height:100px;min-height:100%;">资讯</swiper-slide>
      <swiper-slide style="border:1px solid #666;line-height:100px;min-height:100%;">搞笑</swiper-slide>
      <swiper-slide style="border:1px solid #666;line-height:100px;min-height:100%;">游戏</swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <!-- https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/39-autoheight.vue -->
    <!-- 可以使用这里的1个属性来自适应各个高度！有用！ -->
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'hot',
  components: {
    swiper, swiperSlide
  },
  data() {
    return {
      selected: '',
      swiperOptionTop: {
        freeMode: false

      },
      swiperOptionThumbs: {
        slidesPerView: 6,		//(关联)1/2/'auto'/3.6；即……
        slidesPerGroup: 1,		//(关联)1/2/3；即要以多少个为1组来滚动
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        freeMode: false,
        freeModeMomentum: false,
        simulateTouch: true,					//true/false;
        slideToClickedSlide: true
      },
      arr: [{
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度6',
        href: 'http://www.baidu.com/',
      }, {
        name: '百度7',
        href: 'http://www.baidu.com/',
      }]
    }
  }, methods: {

  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style scoped>
.gallery-thumbs .swiper-slide {
  width: 100px;
  font-size: 19px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #666;
}
.gallery-thumbs .swiper-slide-active {
  background-color: rgba(27, 63, 192, 0.66);
  font-weight: bold;
  color: #fff;
}
/* .gallery-thumbs.swiper-container {
  position: fixed;
  z-index: 100000;
} */
</style>
