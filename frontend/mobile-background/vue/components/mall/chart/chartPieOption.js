module.exports = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
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
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#3E82F7', '#E37526', '#07DB00'],
  legend: {
    // layout: 'horizontal',
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0.3
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
      }
    }
  },
  series: [{
      type: 'pie',
      name: '各区经营情况占比： ',
      data: [
        ['濠江区', 5690],
        ['潮南区', 9999],
        {
          name: '澄海区',
          y: 66799,
          sliced: true,
          selected: true
        },
        {
          name: '龙湖区',
          y: 66066,
          sliced: true,
          selected: true
        },
        ['潮阳区', 109996],
        ['金平区', 50000]
      ]
    }

  ]
}