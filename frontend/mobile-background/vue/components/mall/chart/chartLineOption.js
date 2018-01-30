module.exports = {
  bar: {
    // chart: {
    //   type: 'column' //指定图表的类型，默认是折线图（line）
    // },
    credits: {
      enabled: false
    }, //去掉地址
    title: {
      text: '月平均气温'
    },
    subtitle: {
      text: 'Source: runoob.com'
    },
    tooltip: {
      valueSuffix: '啦'
    },
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
    xAxis: {
      categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'] //指定x轴分组
    },
    yAxis: {
      title: {
        text: '温度 (\xB0C)'
      },
      plotLines: [{
        value: 6,
        width: 0.5,
        color: '#808080'
      }]
    },
    legend: {
      // layout: 'horizontal',
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0.3
    },
    series: [{
        name: '东京',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
          26.5, 23.3, 18.3, 13.9, 9.6,
        ]
      },
      {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
          24.1, 20.1, 14.1, 8.6, 2.5
        ]
      },
      {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,
          17.9, 14.3, 9.0, 3.9, 1.0
        ]
      },
      {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0,
          16.6, 14.2, 10.3, 6.6, 4.8
        ]
      }
    ]
  }
}