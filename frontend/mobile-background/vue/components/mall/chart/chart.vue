<template>
  <div class="chartComponents">
    <div :id="id" :option="option"></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
  name: 'chartComponents',
  // 验证类型
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },
  mounted() {

    HighCharts.chart(this.id, this.option)

  }
}
</script>