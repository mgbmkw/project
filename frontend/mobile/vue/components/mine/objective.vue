<template>
  <div class="objective">

    <div @click="getObjective=true">
      <mt-cell title="求职意向">
        <span style="font-size:12px;">我目前已离职，可快速到岗！666</span>
        <span class="glyphicon glyphicon-chevron-right  modify"></span>
        <img slot="icon" :src="'/static/images/666.jpg'" class="img24 bkra50">
      </mt-cell>
    </div>
    <!--  -->
    <div class="modal-full" :class="{ active: getObjective }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getObjective=false">返回</mt-button>
      </mt-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'objective',
  data() {
    return {
      getObjective: false
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
