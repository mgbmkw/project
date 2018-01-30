module.exports = {
  // chart: {
  //   type: 'column' //指定图表的类型，默认是折线图（line）
  // },
  credits: {
    enabled: false
  }, //去掉地址
  title: {
    text: '商家【周】营业额'
  },
  subtitle: {
    text: '参考数据分析营业情况'
  },
  tooltip: {
    valueSuffix: '元'
  },
  colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
  xAxis: {
    categories: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] //指定x轴分组
  },
  yAxis: {
    title: {
      text: '单位(人民币/元)'
    },
    labels: {
      formatter: function () {
        return this.value / 10000 + '万';
      }
    },
    plotLines: [{
      value: 10000,
      width: 1.5,
      color: '#DC4B3E'
    }],
    tickInterval: 10000
  },
  legend: {
    // layout: 'horizontal',
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0.3
  },
  series: [{
    name: '龙湖区',
    data: [3056, 30636, 9999, 9900, 3000, 5006, 15666]
  }, {
    name: '金平区',
    data: [3056, 5066, 5939, 9900, 400, 5306, 15966]
  }, {
    name: '潮阳区',
    data: [6000, 5366, 969, 900, 7660, 1006, 6366]
  }, {
    name: '澄海区',
    data: [1000, 556, 4566, 7865, 16556, 50016, 3699]
  }, {
    name: '潮南区',
    data: [30653, 5066, 9899, 9600, 7600, 50106, 1066]
  }, {
    name: '濠江区',
    data: [3063, 5066, 19899, 966, 7600, 35106, 13066]
  }]
}