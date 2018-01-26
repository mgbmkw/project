<template>
  <div class="btnBlock101">

    <p class="">这个在btnBlock101，用Element-UI写的！</p>
    <p class="hr"></p>
    <el-button class="btn-block" type="text">文字按钮</el-button>
    <el-button class="btn-block" :disabled="true">默认按钮</el-button>
    <el-button class="btn-block" type="primary">主要按钮</el-button>
    <el-button class="btn-block" type="primary" :plain="true">主要按钮</el-button>
    <el-button class="btn-block" type="primary" icon="delete"></el-button>
    <el-button class="btn-block" type="primary" icon="delete">删除</el-button>
    <el-button class="btn-block" type="primary">删除
      <i class="el-icon-delete el-icon--right"></i>
    </el-button>
    <el-button class="btn-block" type="primary" :loading="true">加载中</el-button>

  </div>
</template>

<script>
export default {
  name: 'btnBlock101',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>
.el-button + .el-button {
  margin-left: 0px;
}
</style>
