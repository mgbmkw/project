<template>
  <div class="kong">

    <!-- 这些是【span/badge，标签/徽章】各种位置的示例 -->
    <div style="width:200px;height:200px;position:relative;border:1px solid #e5e5e5;margin-top:50px;background-color:#999;">
      <span class="span-tip0">hot0</span>
      <!-- <img :src="'/static/images/700×350图片03.jpg'" alt="图片名" class="span-tip0" /> -->
      <div class="span-tip1">hot1</div>
      <div class="span-tip2">hot2</div>
      <div class="span-tip3">hot3</div>
      <div class="span-tip4">hot4</div>
      <div class="span-tip-right-top">精品茶叶</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'kong',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
