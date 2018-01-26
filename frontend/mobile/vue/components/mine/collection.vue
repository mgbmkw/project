<template>
  <div class="collection">

    <div @click="getCollection=true">
      <mt-cell title="收藏" class="px1">
        <span class="glyphicon glyphicon-chevron-right modify"></span>
        <img slot="icon" :src="'/static/images/140×140图片01.jpg'" class="img24 bkra50">
      </mt-cell>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getCollection }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getCollection=false">返回</mt-button>
      </mt-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'collection',
  data() {
    return {
      getCollection: false
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
