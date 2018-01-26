<template>
  <div class="swiper100">

    <p>这是使用Mint-UI写的</p>
    <mt-swipe :auto="4000" :show-indicators="false" style="height:200px;">
      <mt-swipe-item v-for="(item, key) in arr" :key="key">
        <a href="javascript://"><img :src="item.src" alt="图片名" /></a>
      </mt-swipe-item>
    </mt-swipe>



    <div style="" class="mydiv" :class="{ active: popupVisible }">
      <button @click="popupVisible=false">关闭</button>
    </div>

  </div>
</template>

<script>
// http://blog.csdn.net/xdongll/article/details/75389862
// 第1步：安装：npm install swiper@3.4.1 --save-dev
// 第2步：上面的html
// 第3步：http://www.swiper.com.cn/api/autoplay/399.html 参数如何设置，参考这里的API！一切均使用autoPlay:{}的形式。

export default {
  name: 'swiper100',
  components: {
  },
  data() {
    return {
      popupVisible: true,
      msg: '',

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
  },
  methods: {

  },
  mounted() {

  }
}

</script>

<style scoped>
.mydiv {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  z-index: 6666;
  background-color: #f1f1f1;

  -webkit-transform: translate3d(50%, -50%, 0);
  transform: translate3d(50%, -50%, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
}
.mydiv.active {
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
</style>
