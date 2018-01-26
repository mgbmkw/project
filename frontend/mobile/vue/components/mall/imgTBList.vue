<template>
  <div class="imgTBList">

    <div class="imgTBList-wrap" v-for="(item, key) in arr" :key="key">
      <h4>{{item.title}}</h4>
      <p>{{item.intro}}</p>
      <!-- arr:[title:'',intro:'',src:['']] -->
      <div class="box">
        <div class="item" v-for="(ChildItem, ChildKey) in item.src" :key="ChildKey">
          <img :src="ChildItem" alt="图片名" />
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
      arr: [
        {
          title: '这是标题',
          intro: '这是product产品介绍',
          src: ['/static/images/550×734图片03.jpg', '/static/images/550×734图片02.jpg', '/static/images/550×734图片01.jpg', '/static/images/550×734图片01.jpg', '/static/images/550×734图片02.jpg', '/static/images/550×734图片01.jpg', '/static/images/550×734图片03.jpg']
        },

        {
          title: '这是标题',
          intro: '这是product产品介绍',
          src: ['/static/images/550×734图片03.jpg', '/static/images/550×734图片02.jpg', '/static/images/550×734图片01.jpg', '/static/images/550×734图片01.jpg', '/static/images/550×734图片02.jpg', '/static/images/550×734图片01.jpg', '/static/images/550×734图片03.jpg']
        },

        {
          title: '这是标题',
          intro: '这是product产品介绍',
          src: ['/static/images/300×300图片03.jpg', '/static/images/300×300图片01.jpg', '/static/images/300×300图片04.jpg', '/static/images/300×300图片02.jpg', '/static/images/300×300图片05.jpg', '/static/images/300×300图片05.jpg', '/static/images/300×300图片05.jpg', '/static/images/300×300图片03.jpg']
        }
      ]
    }
  }, methods: {

  }
}
</script>

<style scoped>
.imgTBList-wrap {
  padding: 6px 10px;
  margin-bottom: 22px;
}
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* justify-content: space-around; */
  /* padding:6px 10px; */
}
.box .item {
  max-width: 33%;
  padding: 3px;
  border-radius: 16px;
  overflow: hidden;
}

.box .item img {
  width: 100%;
}
</style>
