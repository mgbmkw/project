<template>
  <div class="hotBtnList">

    <div class="flex4">
      <a class="flex4-item" href="javascript://" @click="getArticle=true">
        <p><img :src="'/static/images/700×350图片03.jpg'" alt="图片名" /></p>
        <p>推荐文章</p>
      </a>
      <a class="flex4-item" href="javascript://" @click="getNews=true">
        <p><img :src="'/static/images/700×350图片01.jpg'" alt="图片名" /></p>
        <p>新闻热点</p>
      </a>
      <a class="flex4-item" href="javascript://" @click="getVideo=true">
        <p><img :src="'/static/images/700×350图片02.jpg'" alt="图片名" /></p>
        <p>在线视频</p>
      </a>
      <a class="flex4-item" href="javascript://" @click="getAudio=true">
        <p><img :src="'/static/images/700×350图片03.jpg'" alt="图片名" /></p>
        <p>在线歌曲</p>
      </a>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getArticle }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getArticle=false">返回</mt-button>
      </mt-header>

      <getArticle></getArticle>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getNews }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getNews=false">返回</mt-button>
      </mt-header>

      <swiperMsg></swiperMsg>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getVideo }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getVideo=false">返回</mt-button>
      </mt-header>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getAudio }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getAudio=false">返回</mt-button>
      </mt-header>
    </div>

  </div>
</template>

<script>

import getArticle from './getArticle'
import swiperMsg from './swiperMsg'
export default {
  name: 'hotBtnList',
  components: {
    getArticle, swiperMsg
  },
  data() {
    return {
      getArticle: false,
      getNews: false,
      getVideo: false,
      getAudio: false
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
