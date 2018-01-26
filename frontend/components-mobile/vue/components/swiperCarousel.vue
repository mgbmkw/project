<template>
  <div class="swiperCarousel">
    <Row :gutter="16">

      <Col span="8">

      <Tabs>
        <TabPane label="badge徽章" icon="social-tux" class="f1">
          <badge100></badge100>
          <badge101></badge101>
          <badge102></badge102>
        </TabPane>

        <TabPane label="rate评分" icon="social-windows" class="f1">
          <rate100></rate100>
        </TabPane>

        <TabPane label="message弹窗" icon="social-tux" class="f1">
          <message100></message100>
          <message101></message101>
          <message102></message102>
        </TabPane>

      </Tabs>

      </Col>

      <Col span="8">
      <Tabs value="name1">
        <TabPane label="cell单元" name="name1">
        </TabPane>

        <TabPane label="media图片" name="name2">
        </TabPane>

      </Tabs>
      </Col>

      <Col span="8">
      <Tabs :animated="false">
        <TabPane label="search搜索框">
        </TabPane>

        <TabPane label="text文本">
        </TabPane>

        <TabPane label="radio单选框">
        </TabPane>

        <TabPane label="checkbox多选框" name="name3">
        </TabPane>

      </Tabs>
      </Col>

    </Row>
  </div>
</template>

<script>
// 
import badge100 from './badge/badge100'
import badge101 from './badge/badge101'
import badge102 from './badge/badge102'

// 
import rate100 from './rate/rate100'


// 
import message100 from './message/message100'
import message101 from './message/message101'
import message102 from './message/message102'

export default {
  name: 'swiperCarousel',
  components: {
    badge100,
    badge101,
    badge102,

    rate100, 

    message100, 
    message101, 
    message102
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
