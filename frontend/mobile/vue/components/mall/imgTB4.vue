<template>
  <div class="imgTB4">

    <!--  -->
    <div style="padding:6px 10px;margin-bottom:10px;">
      <a style="display:inline-block;width:50%;" href="http://www.baidu.com/" v-for="(item, key) in arr" :key="key" :class="['px', { 'px-r': key%2 == 0,  'px-b': key < 2 }]">
        <h4>{{item.title}}
          <span></span>
        </h4>
        <p class="">{{item.intro}}</p>
        <div class="" style="display:-webkit-flex;margin-top:10px;">
          <p style="flex:1; height:100px;" class="img-center-wrap" v-for="(srcItem, srcKey) in item.src" :key="srcKey">
            <img style="height:100px;" class="img-center" :src="srcItem" alt="图片名" />
            <div style="height:100px;" v-if="!item.src"></div>
          </p>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'imgTB4',
  data() {
    return {
      arr: [
        {
          title: 'iFashion666', titleLogo: '', intro: '大咖精致时尚', src: ['/static/images/550×734图片01.jpg', '/static/images/550×734图片02.jpg']
        },
        {
          title: '安踏', titleLogo: '', intro: '我们最时尚', src: ['/static/images/550×734图片01.jpg', '/static/images/550×734图片03.jpg']
        }, 
        {
          title: '左丹奴', titleLogo: '', intro: '精品致敬', src: ['/static/images/550×734图片01.jpg', '/static/images/550×734图片02.jpg']
        }
      ]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
