<template>
  <div class="kong">

    <p>这个调用的是Element-UI的message组件中的prompt弹窗： message102</p>
    <button type="button" class="btn btn-success btn-block mb30" @click="messageBoxSuccess">弹窗Success / prompt</button>


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
    messageBoxSuccess() {
      this.$prompt('请输入邮箱', 'prompt弹窗', {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        inputPlaceholder: '请输入您的邮箱',
        inputValue: '',
        inputPattern: /\w/,
        inputErrorMessage: '格式不正确'
      }).then(({ value }) => {
        this.$message({ type: 'success', message: '你的邮箱是: ' + value })
      }).catch(() => {
        this.$message({ type: 'info', message: '已取消输入' })
      })
    }
  }
}
</script>

<style scoped>

</style>
