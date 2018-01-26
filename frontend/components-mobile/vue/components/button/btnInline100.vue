<template>
  <div class="btnInline100">

    <p class="">这些是用Element-UI写的</p>
    <div class="wrap">
      <el-button native-type="submit">默认按钮1</el-button><br/>
      <el-button type="primary" icon="edit">主要按钮2</el-button><br/>
      <el-button type="success" icon="share">成功按钮3</el-button><br/>
      <el-button type="warning" icon="delete">警告按钮4</el-button><br/>
      <el-button type="danger" icon="search">危险按钮5</el-button><br/>
      <el-button type="info" icon="edit">信息按钮6
        <i class="el-icon-upload el-icon--right"></i>
      </el-button><br/>
      <el-button type="text" icon="edit">文字按钮7
        <i class="el-icon-upload el-icon--right"></i>
      </el-button><br/>
    </div>

    <div class="wrap">
      <el-button :plain="true" icon="edit" native-type="reset">默认按钮2</el-button><br/>
      <el-button :plain="true" type="success" icon="share">成功按钮3</el-button><br/>
      <el-button :plain="true" type="warning" icon="delete">警告按钮4</el-button><br/>
      <el-button :plain="true" type="danger" icon="search">危险按钮5</el-button><br/>
      <el-button :plain="true" type="info">信息按钮6
        <i class="el-icon-upload el-icon--right"></i>
      </el-button><br/>
    </div>

    <div class="wrap">
      <el-button type="primary" icon="el-icon-edit" size="large"></el-button><br/>
      <el-button type="primary" icon="el-icon-share"></el-button><br/>
      <el-button type="primary" icon="el-icon-delete" size="small"></el-button><br/>
      <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button><br/>
      <el-button type="primary">上传
        <i class="el-icon-upload el-icon--right"></i>
      </el-button><br/>
      <el-button type="primary" :loading="true">加载中</el-button><br/>
      <el-button :plain="true" :disabled="true">主要按钮</el-button><br/>
    </div>
    <p class="hr"></p>

  </div>
</template>

<script>
export default {
  name: 'btnInline100',
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
