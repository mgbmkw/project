<template>
  <div class="kong">

    <p>这个调用的是Element-UI的message组件中的alert弹窗，即【bootstrap普通版的】： message100</p>
    <button type="button" class="btn btn-primary btn-block mb30" @click="messageBoxPrimary">弹窗：Primary / alert</button>


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
    messageBoxPrimary() {
      this.$alert('这是一段内容', 'alert弹窗', {
        confirmButtonText: '知道了',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
