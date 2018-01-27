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
      <a href="javascript://" class="abc">这是abc</a>
      <a href="javascript://">- 为您推荐 -</a>
    </p>

    <!-- 4个按钮 -->
    <hotBtnList></hotBtnList>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import hotBtnList from './hot/hotBtnList'


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

<style scoped lang="scss">
.swiper-pagination.swiper-pagination-bullets {
  width: 100%;
}
</style>
