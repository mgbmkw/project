<template>
  <div class="mineBtnList">

    <div class="flex4">
      <a class="flex4-item" href="javascript://" @click="getArticle=true">
        <p><img class="flex4-item-img50" :src="'/static/images/700×350图片03.jpg'" alt="图片名" /></p>
        <span class="flex4-item-span">简历</span>
      </a>
      <a class="flex4-item" href="javascript://" @click="getNews=true">
        <p><img :src="'/static/images/700×350图片01.jpg'" alt="图片名" /></p>
        <span class="flex4-item-span">我的投递</span>
      </a>
      <a class="flex4-item" href="javascript://" @click="getVideo=true">
        <p><img :src="'/static/images/700×350图片02.jpg'" alt="图片名" /></p>
        <span class="flex4-item-span">关注公司</span>
      </a>
      <a class="flex4-item" href="javascript://" @click="getAudio=true">
        <p><img :src="'/static/images/700×350图片03.jpg'" alt="图片名" /></p>
        <span class="flex4-item-span">拉勾gogo</span>
      </a>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getArticle }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getArticle=false">返回</mt-button>
      </mt-header>

    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getNews }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getNews=false">返回</mt-button>
      </mt-header>

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

// import swiperMsg from './swiperMsg'
export default {
  name: 'mineBtnList',
  components: {

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
