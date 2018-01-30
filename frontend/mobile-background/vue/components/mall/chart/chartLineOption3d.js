module.exports = {
  chart: {
    type: 'column',
    margin: 75,
    options3d: {
      enabled: true,
      alpha: 30,
      beta: 30,
      depth: 50,
      viewDistance: 25
    }
  },
  credits: {
    enabled: false
  }, //去掉地址
  title: {
    text: '商家【一周】营业额'
  },
  subtitle: {
    text: '参考数据分析营业情况'
  },
  tooltip: {
    valueSuffix: '元'
  },
  colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#3E82F7', '#E37526', '#07DB00'],
  plotOptions: {
    column: {
      depth: 25
    }
  },
  xAxis: {
    categories: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] //指定x轴分组
  },
  yAxis: {
    title: {
      text: '单位(人民币/元)'
    },
    // labels: {
    //   formatter: function () {
    //     return this.value / 10000 + '万';
    //   }
    // },
    // plotLines: [{
    //   value: 10000,
    //   width: 1.5,
    //   color: '#DC4B3E'
    // }],
    // tickInterval: 10000
  },
  legend: {
    // layout: 'horizontal',
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0.3
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
  // series: [{
  //   name: '龙湖区',
  //   data: [3056, 30636, 9999, 9900, 3000, 5006, 15666]
  // }, {
  //   name: '金平区',
  //   data: [3056, 5066, 5939, 9900, 400, 5306, 15966]
  // }, {
  //   name: '潮阳区',
  //   data: [6000, 5366, 969, 900, 7660, 1006, 6366]
  // }, {
  //   name: '澄海区',
  //   data: [1000, 556, 4566, 7865, 16556, 50016, 3699]
  // }, {
  //   name: '潮南区',
  //   data: [30653, 5066, 9899, 9600, 7600, 50106, 1066]
  // }, {
  //   name: '濠江区',
  //   data: [3063, 5066, 19899, 966, 7600, 35106, 13066]
  // }]
}