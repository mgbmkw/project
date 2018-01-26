<template>
  <div class="">
    <Row :gutter="16">

      <Col span="8">
      <Tabs>
        <TabPane label="input" icon="social-apple">input</TabPane>
        <TabPane label="Windows" icon="social-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane>
        <TabPane label="macOS" icon="social-apple">标签一的内容</TabPane>
        <TabPane label="Windows" icon="social-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane>
      </Tabs>
      </Col>

      <Col span="8">
      <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
      </Tabs>
      </Col>

      <Col span="8">
      <Tabs :animated="false">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
      </Tabs>
      </Col>

    </Row>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.ivu-tabs-tabpane {
  height: 300px;
  border: 1px solid #e5e5e5;
  background-color: rgb(139, 138, 135);
}
</style>
