<template>
  <div class="imgTBList">

    <div class="container">
      <h4>标题</h4>
      <p>这是内容介绍</p>
      <div class="box">
        <div class="item">
          <img :src="'/static/images/300×300图片01.jpg'" alt="图片名" />
        </div>
        <div class="item">
          <img :src="'/static/images/300×300图片02.jpg'" alt="图片名" />
        </div>
        <div class="item">
          <img :src="'/static/images/300×300图片03.jpg'" alt="图片名" />
        </div>
        <div class="item">
          <img :src="'/static/images/300×300图片04.jpg'" alt="图片名" />
        </div>
        <div class="item">
          <img :src="'/static/images/300×300图片05.jpg'" alt="图片名" />
        </div>
        <div class="item">
          <img :src="'/static/images/300×300图片06.jpg'" alt="图片名" />
        </div>
        <div class="item">
          <img :src="'/static/images/300×300图片01.jpg'" alt="图片名" />
        </div>
        <div class="item">
          <img :src="'/static/images/300×300图片02.jpg'" alt="图片名" />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'imgTBList',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* justify-content: space-around; */
  /* padding:6px 10px; */
}
.box .item {
  /* flex:1;  */
  max-width: 33%;
  padding: 3px;
  border-radius: 16px;
  overflow: hidden;
}
</style>
