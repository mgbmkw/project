<template>
  <div class="found">

    <router-link to="/mobile/message" class="flex3">
      <img :src="'/static/images/140×140图片01.jpg'" alt="图片名" class="flex3-item-img" />
      <span class="flex3-item">朋友圈 </span>
      <img :src="'/static/images/666.jpg'" alt="图片名" class="flex3-item-img img24" />
    </router-link>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <router-link to="/mobile/message" class="flex3 px1">
      <img class="flex3-item-img" :src="'/static/images/140×140图片02.jpg'" alt="图片名" />
      <span class="flex3-item">扫一扫 </span>
    </router-link>

    <router-link to="/mobile/message" class="flex3">
      <img class="flex3-item-img" :src="'/static/images/140×140图片03.jpg'" alt="图片名" />
      <span class="flex3-item">摇一摇 </span>
    </router-link>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <router-link to="/mobile/message" class="flex3">
      <img class="flex3-item-img" :src="'/static/images/140×140图片03.jpg'" alt="图片名" />
      <span class="flex3-item">看一看 </span>
    </router-link>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <router-link to="/mobile/message" class="flex3">
      <img class="flex3-item-img" :src="'/static/images/140×140图片03.jpg'" alt="图片名" />
      <span class="flex3-item">购物 </span>
    </router-link>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <router-link to="/mobile/message" class="flex3">
      <img :src="'/static/images/140×140图片03.jpg'" alt="图片名" class="flex3-item-img" />
      <span class="flex3-item">游戏 </span>
      <p class="flex3-item-longer r">
        结伴修行领VIP
        <img :src="'/static/images/666.jpg'" alt="图片名" class="img24" />
      </p>
    </router-link>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <div class="flex3" @click="popupVisible=true">
      <img class="flex3-item-img" :src="'/static/images/140×140图片01.jpg'" alt="图片名" />
      <span class="flex3-item">小程序(点击这里试试~！) </span>
    </div>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <!--  -->
    <div class="modal-full" :class="{ active: popupVisible }">
      <button @click="popupVisible=false">关闭</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'found',
  data() {
    return {
      popupVisible: false,
      msg: '',
      arr: [{
        friendname: '有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！',
        msg: '这是什么东东~~',
        src: '/static/images/666.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！',
        src: '/static/images/140×140图片02.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '赶快来喝酒~~~~~~~',
        src: '/static/images/140×140图片03.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '三缺一咯，就等你来~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        src: '/static/images/140×140图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！',
        src: '/static/images/700×350图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！',
        src: '/static/images/700×350图片02.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！',
        src: '/static/images/700×350图片03.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！',
        src: '/static/images/700×350图片04.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '这是什么东东~~',
        src: '/static/images/666.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！',
        src: '/static/images/140×140图片02.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '赶快来喝酒~~~~~~~',
        src: '/static/images/140×140图片03.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '三缺一咯，就等你来~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        src: '/static/images/140×140图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！',
        src: '/static/images/700×350图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！',
        src: '/static/images/700×350图片02.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！',
        src: '/static/images/700×350图片03.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        msg: '有你的快递！',
        src: '/static/images/700×350图片04.jpg',
        time: '2018-1-19'
      }]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
