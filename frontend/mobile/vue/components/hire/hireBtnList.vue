<template>
  <div class="hireBtnList">

    <div class="flex4">
      <a class="flex4-item" href="javascript://" @click="getMsg=true">
        <p><img :src="'/static/images/700×350图片03.jpg'" alt="图片名" /></p>
        <p>消息</p>
      </a>
      <a class="flex4-item" href="javascript://" @click="getSayJob=true">
        <p><img :src="'/static/images/700×350图片01.jpg'" alt="图片名" /></p>
        <p>言职</p>
      </a>
      <a class="flex4-item" href="javascript://" @click="getVIP=true">
        <p><img :src="'/static/images/700×350图片02.jpg'" alt="图片名" /></p>
        <p>VIP专场</p>
      </a>
      <a class="flex4-item" href="javascript://" @click="getMe=true">
        <p><img :src="'/static/images/700×350图片03.jpg'" alt="图片名" /></p>
        <p>我</p>
      </a>
    </div>

    <!--  @scroll.prevent @touchmove.prevent -->
    <!-- <div class="modal-full" :class="{ active: getMsg }" @touchmove.prevent @touchmove.prevent.native="stopPageScroll"> -->
    <div class="modal-full" :class="{ active: getMsg }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getMsg=false">返回</mt-button>
      </mt-header>
      <div style="max-height:100%;overflow:auto;">
        <p>6661</p>
        <p>6662</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>6662</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>6662</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>6662</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>6662</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>6662</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>6662</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>
        <p>666</p>

      </div>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getSayJob }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getSayJob=false">返回</mt-button>
      </mt-header>

    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getVIP }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getVIP=false">返回</mt-button>
      </mt-header>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getMe }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getMe=false">返回</mt-button>
      </mt-header>
    </div>

  </div>
</template>

<script>

// import getMsg from './getMsg'
// import swiperMsg from './swiperMsg'
export default {
  name: 'hireBtnList',
  components: {
    // getMsg, swiperMsg
  },
  data() {
    return {
      getMsg: false,
      getSayJob: false,
      getVIP: false,
      getMe: false
    }
  }, methods: {
    stopPageScroll() {
      // document.documentElement.style.touchAction = 'none'
    }
  }
}
</script>

<style scoped>

</style>
