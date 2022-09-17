import * as echarts from 'echarts'
const option = {
  // 2017-2021年各异宠购买比例
  option1: {
    animation: true,
    animationDuration: 2000,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['其他', '飞禽', '迷你哺乳动物', '爬行动物', '水族动物']
    },
    series: [
      {
        name: '2021年',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [ , 3.6, 4.5, 5.8, 8.3],
        itemStyle:{
          normal:{color:'#E7DE70'}
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '2020年',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [, 9.8, 11.2, 6.2, 7.3],
        itemStyle:{
          normal:{color:'#B0BA59'}
        },
         tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '2019年',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [, 9.7, 10.4, 13.2, 24.4],
        itemStyle:{
          normal:{color:'#909847'}
        },
         tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '2018年',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [, , 17.3, 19.4, 27.3],
        itemStyle:{
          normal:{color:'#71783A'}
        },
          tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '2017年',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [ 1.1, , 8.2, 11.1, 15.3],
        itemStyle:{
          normal:{color:'#595F28'}
        },
          tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      }
    ]
  },
  // 2018-2022年全国宠物、异宠展
  option2: {
    tooltip: {
      trigger: 'axis',
      
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['一线城市', '新一线城市','二线城市','港澳台地区', 'Temperature']
    },
    xAxis: [
      {
        type: 'category',
        data: ['2018年', '2019年', '2020年', '2021年', '2022年'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '展览次数',
        min: 0,
        max:40,
        interval: 10,
        axisLabel: {
          formatter: '{value} 次'
        }
      },
      {
        type: 'value',
        name: '异宠展次数',
        min: 0,
        max: 40,
        interval: 10,
        axisLabel: {
          formatter: '{value} 次'
        }
      }
    ],
    series: [
      {
        name: '一线城市',
        type: 'bar',
         itemStyle:{
          normal:{color:'#595f28'}
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 次';
          }
        },
        data: [
        22,24,22,28,30
        ]
      },
      {
        name: '新一线城市',
        type: 'bar',
        itemStyle:{
          normal:{color:'#909847'}
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 次';
          }
        },
        data: [
          14,22,28,30,30
        ]
      },
      {
        name: '二线城市',
        type: 'bar',
        itemStyle:{
          normal:{color:'#bcbc5f'}
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 次';
          }
        },
        data: [
          8,12,16,12,14
        ]
      },
      {
        name: '港澳台地区',
        type: 'bar',
        itemStyle:{
          normal:{color:'#e7de70'}
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 次';
          }
        },
        data: [
          10,4,4,4,6
        ]
      },
      {
        name: 'Temperature',
        type: 'line',
        itemStyle:{
          normal:{color:'#4a4a3a'}
        },
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 次';
          }
        },
        data: [16,13,16,16,21]
      }
    ]
  },
  // 2019、2022年部分城市异宠生活咖啡馆数量
  option3: {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['2019年', '2022年']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['北京', '上海', '广州', '深圳', '南京', '成都', '重庆','武汉']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'2019年',
        data: [51, 86, 35, 67, 40, 56, 39,38],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 15,
        lineStyle: {
          color: '#2c513c',
          width: 4,
          type: 'dashed',
          
        },
        
        itemStyle: {
          borderWidth: 3,
          borderColor: '#909847',
          color: 'yellow'
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + '家';
          }
         }
      },
      {
        name:'2022年',
        data: [135, 137, 123, 126, 130,135, 118, 118],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 15,
        lineStyle: {
          color: '#595f28',
          width: 4,
          type: 'dashed'
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: '#595f28',
          color: 'yellow'
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + '家';
          }
         }
      }
    ]
  },
  
  // 不同级城市各异宠购买情况
  option4: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: [ '四线城市', '三线城市', '二线城市', '新一线城市', '一线城市']
    },
    series: [
      {
        name: '兔类',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [11, 14, 18, 25, 32],
        itemStyle:{
          normal:{color:'#EBE68F'}
        },
         tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '水族动物',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [11, 14,20,22,33],
        itemStyle:{
          normal:{color:'#E7DE70'}
        },
         tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '鼠类',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [5,16,15,26,38],
        itemStyle:{
          normal:{color:'#B0BA59'}
        },
         tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '爬行动物',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [9,12,20,22,37],
        itemStyle:{
          normal:{color:'#909847'}
        },
         tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '两栖动物',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [12,12,19,18,39],
        itemStyle:{
          normal:{color:'#71783A'}
        },
         tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      },
      {
        name: '飞禽',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [8,18,17,26,31],
        itemStyle:{
          normal:{color:'#595F28'}
        },
         tooltip: {
          valueFormatter: function (value) {
            return value + '%';
          }
        }
      }
      
    ]
  },
  
  // 不同级城市异宠医疗资源
  option5: {
    color: ['#e9de70', '#4a4a3a', '#296056'],
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['宠物医院数量', '异宠医院数量', '未显示异宠医院城市数量']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['一线城市', '新一线城市', '二线城市', '三线城市', '四线城市i', '五线城市']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '宠物医院数量',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#f8f5b8'
            },
            {
              offset: 1,
              color: '#71783a'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [2745,6049,5706,4943,2222,2222],
        tooltip: {
          valueFormatter: function (value) {
            return value + '家';
          }
         }
      },
      {
        name: '异宠医院数量',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#52512d'
            },
            {
              offset: 1,
              color: '#4a4a3a'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [63,79,37,18,6,0],
        tooltip: {
          valueFormatter: function (value) {
            return value + '家';
          }
         }
      },
      {
        name: '未显示异宠医院城市数量',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255)'
            },
            {
              offset: 1,
              color: '#1f5349'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,0,12,61,85,128],
        tooltip: {
          valueFormatter: function (value) {
            return value + '个';
          }
         }
      },
    ]
  },
  
  // 宠物主对宠物殡葬的看法
  option6: {
    tooltip: {
      trigger: 'item',
      formatter: ' {b} : {c}%'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '占比%',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 52.79, name: '尊重宠物生命',itemStyle:{color: '#52512D'} },
          { value: 44.95, name: '给宠物主心灵慰藉',itemStyle:{color: '#595f28'} },
          { value: 35.98, name: '利于环境保护' ,itemStyle:{color: '#71783a'}},
          { value: 35.03, name: '给予动物尊严' ,itemStyle:{color: '#909847'}},
          { value: 29.27, name: '有仪式感',itemStyle:{color: '#b0ba59'} },
          { value: 20.11, name: '有仪式感' ,itemStyle:{color: '#bcbc5f'}},
          { value: 13.98, name: '办理流程繁杂',itemStyle:{color: '#e7de70'} },
          { value: 8.4, name: '行业缺少规范' ,itemStyle:{color: '#ebe68f'}},
          { value: 2.93, name: '容易衍生环境问题' ,itemStyle:{color: '#f8f5b8'}}
         
        ]
      }
    ]
  },
  
  // 宠物主对宠物殡葬的了解程度
  option7: {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%'
    },
    series: [
      {
        type: 'treemap',
         
        data: [
          {
            name: '非常了解',
            value: 22.76,
            itemStyle:{
          normal:{color:'#71783a'}
        },
          },
          {
            name: '比较了解',
            value: 37.11,
            itemStyle:{
          normal:{color:'#595f28'}
        },
          },
          {
            name: '一般',
            value: 23.14,
            itemStyle:{
          normal:{color:'#909847'}
        },
          },
          {
            name: '不太了解',
            value: 14.26,
            itemStyle:{
          normal:{color:'#b0ba59'}
        },
          },
          {
            name: '非常不了解',
            value: 2.74,
            itemStyle:{
          normal:{color:'#e7de70'}
        },
          },
        ],
  
      }
    ]
  },
  
  option8: {
    tooltip: {
    trigger: 'item',
      formatter: '{a} : {c}%'
    },
    angleAxis: {},
    radiusAxis: {
      type: 'category',
      axisLabel:{
        interval:0,
        rotate:0,
      },
      data: ['制作成标本纪念','自行丢弃','交由相关部门无害化处理', '就地埋葬', '专业宠物殡葬服务', '宠物机构处理'],
      z: 10
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [,, , ,, 43.72],
        coordinateSystem: 'polar',
        name: '宠物机构处理',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#52512d'
      },
      {
        type: 'bar',
        data: [, , , ,40.6, ],
        coordinateSystem: 'polar',
        name: '专业宠物殡葬服务',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#595f28'
      },
      {
        type: 'bar',
        data: [,, , 33.81,, ],
        coordinateSystem: 'polar',
        name: '就地埋葬',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#71783a'
      },
      {
        type: 'bar',
        data: [, , 30.12,,, ],
        coordinateSystem: 'polar',
        name: '交由相关部门无害化处理',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#909847'
      },
      {
        type: 'bar',
        data: [, 25.97, , ,, ],
        coordinateSystem: 'polar',
        name: '自行丢弃',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#B0BA59'
      },
      {
        type: 'bar',
        data: [8.22, , , ,, ],
        coordinateSystem: 'polar',
        name: '制作成标本纪念',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#e7de70'
      }
    ],
    legend: {
      show: true,
      data: ['制作成标本纪念','自行丢弃','交由相关部门无害化处理', '就地埋葬', '专业宠物殡葬服务', '宠物机构处理']
    }
  },
 
}
export default option




