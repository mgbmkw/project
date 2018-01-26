<template>
  <div class="settings">

    <div @click="getSet=true">
      <mt-cell title="设置" class="px1">
        <span class="glyphicon glyphicon-chevron-right  modify"></span>
        <img slot="icon" :src="'/static/images/140×140图片03.jpg'" class="img24 bkra50">
      </mt-cell>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getSet }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getSet=false">返回</mt-button>
      </mt-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'settings',
  data() {
    return {
      getSet: false
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
