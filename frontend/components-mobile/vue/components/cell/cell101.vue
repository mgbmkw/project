<template>
  <div class="cell101">

    <p>这是使用Mint-UI写的，注，【不可滑动的】</p>
    <mt-cell title="基本" value="这里可以放置值"></mt-cell>

    <mt-cell title="链接" value="去百度看看" is-link to="//www.baidu.com/" icon="success"></mt-cell>

    <mt-cell title="标题文字" is-link to="//http://cn.vuejs.org/v2/guide/" label="右边点击可链接到Vue.js官网">
      <span class="blue">去Vue.js2.0看看</span>
      <img slot="icon" :src="'/static/images/666.jpg'" width="24" height="24">
    </mt-cell>

    <mt-cell title="标题文字" label="右边点击可链接到Vue.js官网">
      <mt-button type="primary" icon="back" size="small">返回</mt-button>
      <img slot="icon" :src="'/static/images/666.jpg'" width="24" height="24">
    </mt-cell>
    <p class="hr"></p>

  </div>
</template>

<script>
export default {
  name: 'cell101',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
}
</style>
