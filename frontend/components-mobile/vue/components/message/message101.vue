<template>
  <div class="kong">

    <p>这个调用的是Element-UI的message组件中的confirm弹窗： message101</p>
    <button type="button" class="btn btn-default btn-block mb30" @click="messageBoxDefault">弹窗：Default / confirm</button>


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
    messageBoxDefault() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', 'confirm弹窗', {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        this.$message({ type: 'success', message: '删除成功!' })
      }).catch(() => {
        this.$message({ type: 'info', message: '已取消删除' })
      })
    }
  }
}
</script>

<style scoped>

</style>
