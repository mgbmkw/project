<template>
  <div class="kong">

    <!-- 这些是【图片自动居中】的示例 -->
    <div class="img-center-wrap" style="width:100px;height:100px;border:1px solid blue;">
      <img :src="'/static/images/700×350图片03.jpg'" alt="图片名" class="img-center" />
    </div>

    <div class="img-center-wrap" style="width:100px;height:100px;border:1px solid blue;">
      <img :src="'/static/images/550×734图片02.jpg'" alt="图片名" class="img-center" />
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
