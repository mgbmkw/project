<template>
  <div class="mine">

    <div class="flex3">
      <img :src="'/static/images/140×140图片01.jpg'" alt="图片名" class="flex3-item-img" />
      <div class="flex2-vertical flex3-item-text">
        <h4 class="flex2-vertical-item-text-title">啊滨</h4>
        <p class="flex2-vertical-item-text-subtitle">微信号：
          <span>mgb166</span>
        </p>
      </div>
      <img :src="'/static/images/666.jpg'" style="width:24px;height:24px;" alt="图片名" class="flex3-item-img hg50" />
    </div>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <div class="flex2">
      <img :src="'/static/images/140×140图片02.jpg'" alt="图片名" class="flex2-item-img" />
      <div class="flex2-item-text omit90">
        <h4 class="hg50 omit90">钱包</h4>
      </div>
    </div>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <div class="flex2 px1">
      <img :src="'/static/images/140×140图片03.jpg'" alt="图片名" class="flex2-item-img" />
      <div class="flex2-item-text omit90">
        <h4 class="hg50 omit90">收藏</h4>
      </div>
    </div>

    <div class="flex2 px1">
      <img :src="'/static/images/140×140图片03.jpg'" alt="图片名" class="flex2-item-img" />
      <div class="flex2-item-text omit90">
        <h4 class="hg50 omit90">相册</h4>
      </div>
    </div>

    <div class="flex2 px1">
      <img :src="'/static/images/140×140图片03.jpg'" alt="图片名" class="flex2-item-img" />
      <div class="flex2-item-text omit90">
        <h4 class="hg50 omit90">卡包</h4>
      </div>
    </div>

    <div class="flex2">
      <img :src="'/static/images/140×140图片03.jpg'" alt="图片名" class="flex2-item-img" />
      <div class="flex2-item-text omit90">
        <h4 class="hg50 omit90">表情</h4>
      </div>
    </div>
    <p class="padding" style="background-color:#b6b6b6;"></p>

    <div class="flex2">
      <img :src="'/static/images/140×140图片01.jpg'" alt="图片名" class="flex2-item-img" />
      <div class="flex2-item-text omit90">
        <h4 class="hg50 omit90">设置</h4>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'mine',
  data() {
    return {
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
