<template>
  <div class="formItems">
    <Row :gutter="16">

      <Col span="8">

      <Tabs>
        <TabPane label="input输入框" icon="social-apple" class="f1">
          <input001></input001>
          <input101></input101>
          <textarea100></textarea100>
        </TabPane>

        <TabPane label="btnBlock整条按钮" icon="social-windows" class="f1">
          <btnBlock></btnBlock>
          <btnBlock101></btnBlock101>
          <btnBlock102></btnBlock102>
        </TabPane>

        <TabPane label="btnGroup按钮组" icon="social-windows" class="f1">
          <btnGroup100></btnGroup100>
          <btnGroup101></btnGroup101>
        </TabPane>

        <TabPane label="btnInline内联按钮" icon="social-windows" class="f1">
          <btnSend100 text-changed="发送" second="15"></btnSend100>
          <btnInline100></btnInline100>
          <btnInline101></btnInline101>
        </TabPane>

        <TabPane label="btnList按钮列表" icon="social-windows" class="f1">
          <btnList100></btnList100>
          <!-- <btnList101></btnList101> -->
        </TabPane>

        <TabPane label="title标题" icon="social-tux" class="f1">
          <title100></title100>
        </TabPane>

      </Tabs>

      </Col>

      <Col span="8">
      <Tabs value="name1">
        <TabPane label="cell单元" name="name1" class="f1">
          <cell100></cell100>
          <cell101></cell101>
          <cell102></cell102>
        </TabPane>

        <TabPane label="media图片" name="name2" class="f1">
          <media100></media100>
          <media101></media101>
        </TabPane>

        <TabPane label="checkbox多选框" name="name3" class="f1">
          <checkbox100></checkbox100>
          <checkbox101></checkbox101>
        </TabPane>

      </Tabs>
      </Col>

      <Col span="8">
      <Tabs :animated="false">
        <TabPane label="search搜索框" class="f1">
          <search100></search100>
          <search101></search101>
        </TabPane>

        <TabPane label="text文本" class="f1">
          <text100></text100>
        </TabPane>

        <TabPane label="radio单选框" class="f1">
          <radio100></radio100>
          <radio101></radio101>
          <radio102></radio102>
        </TabPane>

        <TabPane label="switch开关" class="f1">
          <switch100></switch100>
          <switch101></switch101>
        </TabPane>

      </Tabs>
      </Col>

    </Row>
  </div>
</template>

<script>
// 
import input001 from './input/inputText1'
import input101 from './input/input101'
import textarea100 from './input/textarea100'
import search100 from './input/search100'
import search101 from './input/search101'

// 
import title100 from './title/title100'

// 
import btnBlock from './button/btnBlock'
import btnBlock101 from './button/btnBlock101'
import btnBlock102 from './button/btnBlock102'
import btnSend100 from './button/btnSend100'
import btnInline100 from './button/btnInline100'
import btnInline101 from './button/btnInline101'
import btnGroup100 from './button/btnGroup100'
import btnGroup101 from './button/btnGroup101'
import btnList100 from './button/btnList100'
// import btnList101 from './button/btnList101'



// 
import cell100 from './cell/cell100'
import cell101 from './cell/cell101'
import cell102 from './cell/cell102'

// 
import media100 from './img/media100'
import media101 from './img/media101'

// 
import checkbox100 from './checkbox/checkbox100'
import checkbox101 from './checkbox/checkbox101'

// 
import text100 from './text/text100'

// 
import radio100 from './radio/radio100'
import radio101 from './radio/radio101'
import radio102 from './radio/radio102'


// 
import switch100 from './switch/switch100'
import switch101 from './switch/switch101'

export default {
  name: 'formItems',
  components: {
    input001,
    input101,
    textarea100,
    search100,
    search101,

    btnBlock,
    btnBlock101,
    btnBlock102,
    btnSend100,
    btnInline100,
    btnInline101,
    btnGroup100,
    btnGroup101,
    btnList100,
    // btnList101,

    title100,

    cell100,
    cell101,
    cell102,

    media100,
    media101,

    checkbox100,
    checkbox101,

    text100,

    radio100,
    radio101,
    radio102,

    switch100,
    switch101

  },
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
  overflow: auto;
  border: 1px solid #e5e5e5;
  background-color: rgb(139, 138, 135);
}

.ivu-tabs-tabpane.f1 {
  background-color: #f1f1f1;
}
</style>
