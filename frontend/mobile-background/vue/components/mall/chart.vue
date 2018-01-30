<template>
  <div class="chart">

    <div class="chartWrap">
      <XChart :id="id" :option="option"></XChart>
    </div>
  </div>
</template>

<script>
// 导入chart组件
import XChart from './chart/chartLine.vue'
// 导入chart组件模拟数据
import chartLineOption from './chart/chartLineOption.js'
export default {
  name: 'chart',
  data() {
    // let option = chartLineOption.bar
    return {
      id: 'test',
      option: chartLineOption.bar
    }
  },
  components: {
    XChart
  }
}
</script>

<style scoped>
.chartWrap {
  /* width: 50%; */
  height: 400px;
  margin: 40px auto;
}
</style>
