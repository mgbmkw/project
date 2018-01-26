<template>
  <div class="hot wh100flau">

    <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
    <!-- <mt-loadmore :top-method="loadTop" ref="loadmore" top-status-change="change" topPullText="按下了未到达" topDropText="放开了就加载" topLoadingText="这是正在加载的状态~">
      <ul>
        <li v-for="(item, key) in arr" :key="key">
          <h4 class="hg50 omit90">{{item.friendname}}</h4>
        </li>
      </ul>
    </mt-loadmore> -->

    <p class="help-block mt10 c">
      <a href="javascript://">- 为您推荐 -</a>
    </p>

    <!-- 4个按钮 -->
    <hotBtnList></hotBtnList>

    <!--  -->
    <!-- <video :src="'/static/videos/01_NodeJS简介.avi'" controls="controls" style="border:1px solid #000;background-color:#999;"> -->
    <!-- <video :src="'http://vjs.zencdn.net/v/oceans.mp4'" controls="controls" style="border:1px solid #000;background-color:#999;max-width:100%;">
      您的浏览器不支持 video 标签。
    </video> -->

  </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'


import hotBtnList from './hot/hotBtnList'

// 临时测试
// https://github.com/surmon-china/vue-video-player
// import 'video.js/dist/video-js.css'
// import { videoPlayer } from 'vue-video-player'

export default {
  name: 'hot',
  components: {
    swiper, swiperSlide, hotBtnList
  },
  data() {
    return {

    }
  }, methods: {


  }
}
</script>

<style scoped>
.swiper-pagination.swiper-pagination-bullets {
  width: 100%;
}
</style>
