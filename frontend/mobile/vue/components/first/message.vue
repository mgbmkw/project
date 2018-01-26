<template>
  <div class="message">

    <div class="flex3 px1" v-for="(item, key) in arr" :key="key">
      <img :src="item.src" alt="图片名" class="flex3-item-img" />
      <div class="flex3-item-text flex2-vertical">
        <h4 class="flex2-vertical-item-text-title">{{item.friendname}}</h4>
        <p class="flex2-vertical-item-text-subtitle">{{item.msg}}</p>
      </div>
      <span class="flex3-item-subtext">{{item.time}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      arr: [{
        friendname: '日日顺1',
        msg: '这是什么东东~~',
        src: '/static/images/666.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺2',
        msg: '有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！',
        src: '/static/images/140×140图片02.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺3',
        msg: '赶快来喝酒~~~~~~~',
        src: '/static/images/140×140图片03.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺4',
        msg: '三缺一咯，就等你来~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        src: '/static/images/140×140图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺5',
        msg: '有你的快递！',
        src: '/static/images/700×350图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺6',
        msg: '有你的快递！',
        src: '/static/images/700×350图片02.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺7',
        msg: '有你的快递！',
        src: '/static/images/700×350图片03.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺8',
        msg: '有你的快递！',
        src: '/static/images/700×350图片04.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺9',
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
        friendname: '日日顺物流100',
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
