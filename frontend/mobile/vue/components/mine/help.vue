<template>
  <div class="help">

    <div @click="getHelp=true">
      <mt-cell title="反馈与帮助" class="px1">
        <span class="glyphicon glyphicon-chevron-right modify"></span>
        <img slot="icon" :src="'/static/images/140×140图片02.jpg'" class="img24 bkra50">
      </mt-cell>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getHelp }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getHelp=false">返回</mt-button>
      </mt-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'help',
  data() {
    return {
      getHelp: false
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
