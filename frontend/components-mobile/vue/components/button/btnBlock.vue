<template>
  <div class="btnBlock">

    <p class="">这个在btnBlock，用bootstrap写的！</p>
    <button type="submit" class="btn btn-primary btn-block" @click="dialogVisible = true">登录</button>
    <button type="button" class="btn btn-primary btn-block"> 确认下单，并呼叫 </button>
    <button type="button" class="btn btn-primary btn-block">
      <span class="glyphicon glyphicon-music"></span> 确认下单，并呼叫
    </button>

  </div>
</template>

<script>
export default {
  name: 'btnBlock',
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
