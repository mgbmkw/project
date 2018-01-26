<template>
  <div class="btnGroup101">

    <p class="">这些是用Element-UI写的</p>
    <el-button-group>
      <el-button type="primary" icon="arrow-left">上一页</el-button>
      <el-button type="primary">下一页
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>

    <el-button-group>
      <el-button type="warning" icon="el-icon-edit"></el-button>
      <el-button type="warning" icon="el-icon-share"></el-button>
      <el-button type="warning" icon="el-icon-delete"></el-button>
    </el-button-group>

  </div>
</template>

<script>
export default {
  name: 'btnGroup101',
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
