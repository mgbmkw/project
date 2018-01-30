<template>
  <div class="chart" id="chart">

    <!-- <div id="chart" ref="chart" style="width: 550px height: 400px margin: 0 auto"></div> -->
    <div id="test">
      <XChart :id="id" :option="option"></XChart>
    </div>
  </div>
</template>

<script>
// 导入chart组件
import XChart from './chart/chart1.vue'
// 导入chart组件模拟数据
import chartOptions from './chart/option.js'
export default {
  name: 'chart',
  data() {
    let option = chartOptions.bar
    return {
      id: 'test',
      option: option
    }
  },
  components: {
    XChart
  }
}
</script>

<style scoped>
#test {
  width: 400px;
  height: 400px;
  margin: 40px auto;
}
</style>
