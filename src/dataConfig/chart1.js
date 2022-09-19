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
        data: [, 3.6, 4.5, 5.8, 8.3],
        itemStyle: {
          color: '#E7DE70'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        itemStyle: {
          color: '#B0BA59'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        itemStyle: {
          color: '#909847'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        itemStyle: {
          color: '#71783A'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        data: [1.1, , 8.2, 11.1, 15.3],
        itemStyle: {
          color: '#595F28'
        },
        tooltip: {
          valueFormatter: function(value) {
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
      data: ['一线城市', '新一线城市', '二线城市', '港澳台地区', '异宠展数量']
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
        max: 40,
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
        itemStyle: {
          color: '#595f28'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 次';
          }
        },
        data: [
          22, 24, 22, 28, 30
        ]
      },
      {
        name: '新一线城市',
        type: 'bar',
        itemStyle: {
          color: '#909847'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 次';
          }
        },
        data: [
          14, 22, 28, 30, 30
        ]
      },
      {
        name: '二线城市',
        type: 'bar',
        itemStyle: {
          color: '#bcbc5f'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 次';
          }
        },
        data: [
          8, 12, 16, 12, 14
        ]
      },
      {
        name: '港澳台地区',
        type: 'bar',
        itemStyle: {
          color: '#e7de70'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 次';
          }
        },
        data: [
          10, 4, 4, 4, 6
        ]
      },
      {
        name: '异宠展数量',
        type: 'line',
        itemStyle: {
          color: '#4a4a3a'
        },
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function(value) {
            return value + ' 次';
          }
        },
        data: [16, 13, 16, 16, 21]
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
      data: ['北京', '上海', '广州', '深圳', '南京', '成都', '重庆', '武汉']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '2019年',
        data: [51, 86, 35, 67, 40, 56, 39, 38],
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
          valueFormatter: function(value) {
            return value + '家';
          }
        }
      },
      {
        name: '2022年',
        data: [135, 137, 123, 126, 130, 135, 118, 118],
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
          valueFormatter: function(value) {
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
      data: ['四线城市', '三线城市', '二线城市', '新一线城市', '一线城市']
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
        itemStyle: {
          color: '#EBE68F'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        data: [11, 14, 20, 22, 33],
        itemStyle: {
          color: '#E7DE70'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        data: [5, 16, 15, 26, 38],
        itemStyle: {
          color: '#B0BA59'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        data: [9, 12, 20, 22, 37],
        itemStyle: {
          color: '#909847'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        data: [12, 12, 19, 18, 39],
        itemStyle: {
          color: '#71783A'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        data: [8, 18, 17, 26, 31],
        itemStyle: {
          color: '#595F28'
        },
        tooltip: {
          valueFormatter: function(value) {
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
        z: 5,
        zlevel: 5,
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
        data: [2745, 6049, 5706, 4943, 2222, 2222],
        tooltip: {
          valueFormatter: function(value) {
            return value + '家';
          }
        }
      },
      {
        name: '异宠医院数量',
        z: 5,
        zlevel: 5,
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
        data: [63, 79, 37, 18, 6, 0],
        tooltip: {
          valueFormatter: function(value) {
            return value + '家';
          }
        }
      },
      {
        name: '未显示异宠医院城市数量',
        z: 5,
        zlevel: 5,
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
        data: [0, 0, 12, 61, 85, 128],
        tooltip: {
          valueFormatter: function(value) {
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
          { value: 52.79, name: '尊重宠物生命', itemStyle: { color: '#52512D' } },
          { value: 44.95, name: '给宠物主心灵慰藉', itemStyle: { color: '#595f28' } },
          { value: 35.98, name: '利于环境保护', itemStyle: { color: '#71783a' } },
          { value: 35.03, name: '给予动物尊严', itemStyle: { color: '#909847' } },
          { value: 29.27, name: '有仪式感', itemStyle: { color: '#b0ba59' } },
          { value: 20.11, name: '有仪式感', itemStyle: { color: '#bcbc5f' } },
          { value: 13.98, name: '办理流程繁杂', itemStyle: { color: '#e7de70' } },
          { value: 8.4, name: '行业缺少规范', itemStyle: { color: '#ebe68f' } },
          { value: 2.93, name: '容易衍生环境问题', itemStyle: { color: '#f8f5b8' } }

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
            itemStyle: {
              color: '#71783a'
            },
          },
          {
            name: '比较了解',
            value: 37.11,
            itemStyle: {
              color: '#595f28'
            },
          },
          {
            name: '一般',
            value: 23.14,
            itemStyle: {
              color: '#909847'
            },
          },
          {
            name: '不太了解',
            value: 14.26,
            itemStyle: {
              color: '#b0ba59'
            },
          },
          {
            name: '非常不了解',
            value: 2.74,
            itemStyle: {
              color: '#e7de70'
            },
          },
        ],

      }
    ]
  },
  // 处理宠物尸体方式
  option8: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} : {c}%'
    },
    angleAxis: {},
    radiusAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: 0,
      },
      data: ['制作成标本纪念', '自行丢弃', '交由相关部门无害化处理', '就地埋葬', '专业宠物殡葬服务', '宠物机构处理'],
      z: 10
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [, , , , , 43.72],
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
        data: [, , , , 40.6,],
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
        data: [, , , 33.81, ,],
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
        data: [, , 30.12, , ,],
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
        data: [, 25.97, , , ,],
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
        data: [8.22, , , , ,],
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
      data: ['制作成标本纪念', '自行丢弃', '交由相关部门无害化处理', '就地埋葬', '专业宠物殡葬服务', '宠物机构处理']
    }
  },
  // 非法售卖走私野生异宠
  option9: {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}件'
    },
    series: {
      type: 'sunburst',
      data: [
        {
          name: '国家二级保护动物',
          itemStyle: { color: '#52512d' },
          children: [
            {
              name: '两栖动物',
              value: 345,
              itemStyle: { color: '#909847' }
            },
            {
              name: '爬行动物',
              value: 266,
              itemStyle: { color: '#b0ba59' }
            },
            {
              name: '哺乳动物',
              value: 17,
              itemStyle: { color: '#bcbc5f' }
            },
            {
              name: '禽类',
              value: 739,
              itemStyle: { color: '#71783a' }
            },
            {
              name: '节肢动物',
              value: 3103,
              itemStyle: { color: '#595f28' }
            }
          ]
        },
        {
          name: '国家一级保护动物',
          itemStyle: { color: '#4d8d5c' },
          children: [
            {
              name: '两栖动物',
              value: 1,
              itemStyle: { color: '#74a171' },
            },
            {
              name: '爬行动物',
              value: 5,
              itemStyle: { color: '#649361' },
            },
            {
              name: '哺乳动物',
              value: 1,
              itemStyle: { color: '#92d38f' },
            },
            {
              name: '禽类',
              value: 26,
              itemStyle: { color: '#517d4f' },
            },
            {
              name: '非人灵长动物',
              value: 40,
              itemStyle: { color: '#486746' },
            }
          ]
        },
        {
          name: '国家一二级保护动物',
          itemStyle: { color: '#2c4e3a' },
          children: [
            {
              name: '两栖动物',
              value: 250,
              itemStyle: { color: '#4c755d' },
            },
            {
              name: '爬行动物',
              value: 550,
              itemStyle: { color: '#416c52' },
            },
            {
              name: '哺乳动物',
              value: 5,
              itemStyle: { color: '#687d71' },
            },
            {
              name: '禽类',
              value: 250,
              itemStyle: { color: '#5b7c69' },
            },
            {
              name: '异宠',
              value: 615,
              itemStyle: { color: '#3d624c' },
            }
          ]
        },
        {
          name: '外来入侵物种',
          itemStyle: { color: '#5c7852' },
          children: [
            {
              name: '甲虫',
              value: 73,
              itemStyle: { color: '#919e8c' },
            }
          ]
        },
        {
          name: '无标明',
          itemStyle: { color: '#95a342' },
          children: [
            {
              name: '啮齿动物',
              value: 141,
              itemStyle: { color: '#989a6a' },
            },
            {
              name: '禽类',
              value: 1,
              itemStyle: { color: '#cbd78a' },
            },
            {
              name: '水族动物',
              value: 12,
              itemStyle: { color: '#b4c16b' },
            },
          ]
        },
      ],
      radius: [60, '90%'],
      itemStyle: {
        borderRadius: 7,
        borderWidth: 2
      },
      label: {
        show: false
      }
    }
  },
  // 各类异宠常患病症
  option10: {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',
        name: '各类异宠易患病症',
        data: [
          {
            name: '异宠',
            children: [
              {
                name: '意外受伤',
              },
              {
                name: '患肿瘤',
              },
              {
                name: '饲养环境错误',
              },
              {
                name: '哺乳动物',
                children: [{ name: '喂食不当腹泻' }]
              },
              {
                name: '啮齿动物',
                children: [
                  { name: '眼睛分泌物' },
                  { name: '皮肤脱毛皮屑' },
                  { name: '牙齿咬合不正' },
                  { name: '胀气拉肚子' },
                  { name: '子宫蓄脓' },
                  { name: '心肺呼吸急促' },
                  { name: '中暑', },
                ]
              },
              {
                name: '龟类',
                children: [
                  { name: '龟壳开裂' },
                  { name: '龟耳浓肿' },
                  { name: '泽水龟眼睑水肿' },
                  { name: '呼吸道感染肠道寄生虫' },
                  { name: '脱皮不全' },
                  { name: '缺钙' },
                  { name: '中枢神经紊乱' },
                ]
              },
              {
                name: '禽类',
                children: [
                  { name: '外伤骨折' },
                  { name: '呼吸道问题' },
                  { name: '皮肤寄生虫' },
                  { name: '不消症' },
                  { name: '琢羽症' },
                  { name: '嗉囊炎' },
                  { name: '卡蛋' },
                  { name: '应激反应' },
                ]
              },
              {
                name: '爬行动物',
                children: [
                  { name: '口腔炎' },
                  { name: '软骨症' },
                  { name: '肠胃阻塞' },
                  { name: '蜕皮不畅' },
                  { name: '后肢瘫痪' },
                  { name: '腹水' },
                  { name: '卡蛋' },
                  { name: '断尾' },
                ]
              },
              {
                name: '两栖动物',
                children: [
                  { name: '肠胃炎' },
                  { name: '水霉病' },
                  { name: '红腿病' },
                  { name: '肿腿病' },
                  { name: '气泡病' },
                  { name: '蜕皮病' }
                ]
              }
            ]

          }
        ],
        top: '5%',
        left: '7%',
        bottom: '2%',
        right: '20%',
        symbolSize: 10,
        color: '#52512d',
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        },
        lineStyle: {
          color: '#132810',
          width: 1
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },
        emphasis: {
          focus: 'descendant'
        },
        itemStyle: { color: '#595f28' },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      },
    ]
  },
  // 各类异宠的伤害行为
  option11: {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}例'
    },
    series: {
      type: 'sunburst',
      data: [
        {
          name: '爬行动物',
          children: [
            {
              name: '逃跑',
              value: 9,
              itemStyle: { color: '#71783a' }
            },
            {
              name: '咬伤人类',
              value: 9,
              itemStyle: { color: '#71783a' }
            },
            {
              name: '意外致死人类',
              value: 1,
              itemStyle: { color: '#71783a' }
            },
            {
              name: '致鳞片真菌感染',
              value: 1,
              itemStyle: { color: '#71783a' }
            }
          ],
          itemStyle: { color: '#71783a' }
        },
        {
          name: '哺乳动物',
          children: [
            {
              name: '逃跑',
              value: 2,
              itemStyle: { color: '#b0ba59' }
            },
            {
              name: '咬伤人类',
              value: 1,
              itemStyle: { color: '#b0ba59' }
            },

          ],
          itemStyle: { color: '#b0ba59' }
        },
        {
          name: '节肢动物',
          children: [
            {
              name: '咬伤人类',
              value: 1,
              itemStyle: { color: '#e7de70' }
            }
          ],
          itemStyle: { color: '#e7de70' }
        },
        {
          name: '啮齿动物',
          children: [
            {
              name: '咬伤人类',
              value: 2,
              itemStyle: { color: '#909847' }
            },
            {
              name: '致心内膜炎',
              value: 1,
              itemStyle: { color: '#909847' }
            },
            {
              name: '致马尔尼菲青霉病',
              value: 1,
              itemStyle: { color: '#909847' }
            },
            {
              name: '致淋巴细胞脉络膜脑膜炎',
              value: 1,
              itemStyle: { color: '#909847' }
            },
          ],
          itemStyle: { color: '#909847' }
        },
        {
          name: '水族动物',
          children: [
            {
              name: '咬伤人类',
              value: 1,
              itemStyle: { color: '#ebe68f' }
            }
          ],
          itemStyle: { color: '#ebe68f' }
        },
        {
          name: '两栖动物',
          children: [
            {
              name: '咬伤人类',
              value: 1,
              itemStyle: { color: '#f8f5b8' }
            }
          ],
          itemStyle: { color: '#f8f5b8' }
        },
        {
          name: '禽类',
          children: [
            {
              name: '传播鹦鹉热',
              value: 1,
              itemStyle: { color: '#bcbc5f' }
            },
            {
              name: '致隐球菌病',
              value: 1,
              itemStyle: { color: '#bcbc5f' }
            }
          ],
          itemStyle: { color: '#bcbc5f' }
        },

      ],
      radius: [60, '90%'],
      itemStyle: {
        borderRadius: 7,
        borderWidth: 2
      },
      label: {
        rotate: 'radial'
      }
    }
  },
  // 各类异宠适宜的温湿度
  option12: {
    parallelAxis: [
      {
        dim: 0,
        name: 'Score',
        type: 'category',
        data: ['雨林型陆龟', '海岛森林型陆龟', '沙漠型陆龟', '巴西白膝头', '智利红玫瑰', '墨西哥火脚', '亚马逊镭射', '蝎子', '红相手蟹', '寄居蟹', '蜈蚣', '东方蝾螈', '角蛙',
          '树蛙', '鬃狮蜥', '守宫', '变色龙', '小型蛇', '蜜袋鼬', '豚鼠', '仓鼠', '龙猫', '鳄鱼', '柯尔鸭', '鹦鹉', '蜗牛', '观赏螺', '水母', '兔类']
      },
      { dim: 1, name: '适宜最低温度' },
      { dim: 2, name: '适宜最高温度' },
      { dim: 3, name: '适宜最低湿度' },
      { dim: 4, name: '适宜最高湿度' },
      { dim: 5, name: '对光照精确的需求', type: 'category', data: ['有', '无'] }
    ],
    series: {
      type: 'parallel',
      lineStyle: {
        width: 5
      },
      color: '#b0ba59',
      data: [
        ['雨林型陆龟', 28, 30, 70, 80, '有'],
        ['海岛森林型陆龟', 30, 32, 45, 55, '有'],
        ['沙漠型陆龟', 35, 38, 40, 60, '有'],
        ['巴西白膝头', 28, 30, 80, 85, '无'],
        ['智利红玫瑰', 25, 27, 40, 60, '无'],
        ['墨西哥火脚', 27, 30, 65, 70, '无'],
        ['亚马逊镭射', 26, 28, 74, 75, '无'],
        ['蝎子', 23, 38, 15, 20, '无'],
        ['红螯相手蟹', 25, 26, , , '无'],
        ['寄居蟹', 20, 40, 70, 71, '无'],
        ['蜈蚣', 25, 30, 70, 71, '无'],
        ['东方蝾螈', 18, 22, 70, 71, '无'],
        ['角蛙', 24, 28, 70, 71, '无'],
        ['树蛙', 24, 29, 60, 80, '无'],
        ['鬃狮蜥', 28, 30, 30, 40, '有'],
        ['守宫', 30, 31, 40, 60, '有'],
        ['变色龙', 22, 32, 50, 70, '有'],
        ['小型蛇', 28, 31, 50, 70, '无'],
        ['蜜袋鼬', 20, 30, , , '无'],
        ['豚鼠', 18, 26, 40, 70, '无'],
        ['仓鼠', 24, 25, 30, 40, '无'],
        ['龙猫', 18, 22, 50, 51, '无'],
        ['鳄鱼', 27, 34, 60, 65, '有'],
        ['柯尔鸭', 36, 37, 60, 65, '无'],
        ['鹦鹉', 36, 37, 55, 70, '无'],
        ['蜗牛', 23, 30, 60, 90, '有️'],
        ['观赏螺', 21, 28, , , '无'],
        ['水母', 22, 26, , , '无'],
        ['兔类', 15, 25, 60, 70, '无'],
      ]
    }
  },
  // 各类异宠主年龄在35-45的比例
  option13: {
    tooltip: {
      trigger: 'axis',
      formatter: '{b} : {c}%'
    },
    xAxis: {
      type: 'category',
      data: ['水族动物', '飞禽', '爬行动物', '鼠类', '兔类']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [37, 37, 35, 31, 30,],
        type: 'bar',
        itemStyle: {
          color: function(params) {

            var colorList = ['#595f28', '#71783a', '#909847', '#b0ba59', '#e7de70'];
            return colorList[params.dataIndex]
          },
          borderRadius: [100, 100, , 0]
        },
      }

    ]
  },
  // 各类异宠主为男性的比例
  option14: {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%'
    },
    angleAxis: {},
    radiusAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: 0,
      },
      data: ['兔类', '鼠类', '飞禽', '爬行动物', '水族动物'],
      z: 10
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [, , , , 79],
        coordinateSystem: 'polar',
        name: '水族动物',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#595F28'
      },
      {
        type: 'bar',
        data: [, , , 72,],
        coordinateSystem: 'polar',
        name: '爬行动物',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#71783A'
      },
      {
        type: 'bar',
        data: [, , 69, ,],
        coordinateSystem: 'polar',
        name: '飞禽',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#909847'
      },
      {
        type: 'bar',
        data: [, 56, , ,],
        coordinateSystem: 'polar',
        name: '鼠类',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#B0BA59'
      },
      {
        type: 'bar',
        data: [52, , , ,],
        coordinateSystem: 'polar',
        name: '兔类',
        stack: 'a',
        emphasis: {
          focus: 'series'
        },
        color: '#E7DE70'
      }

    ],
    legend: {
      show: true,
      data: ['水族动物', '爬行动物', '飞禽', '鼠类', '兔类']
    }
  },
  // 各类异宠b站视频播放量
  option15: {
    z: 0,
    z2: 0,
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['百万播放数量', '十万播放数量']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['异宠', '水族动物', '禽类', '爬行动物', '啮齿动物', '两栖动物', '昆虫', '节肢动物', '甲壳动物', '哺乳动物']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '百万播放数量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [287, 259, 106, 82, 72, 27, 20, 54, 3, 11],
        itemStyle: {
          color: '#E7DE70'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' W+';
          }
        }
      },

      {
        name: '十万播放数量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [1063, 696, 1519, 854, 539, 258, 220, 517, 59, 144],
        itemStyle: {
          color: '#595F28'
        },
        tooltip: {
          valueFormatter: function(value) {
            return value + ' W+';
          }
        }
      },

    ]
  },
  // 各异宠平均寿命
  option16: {
    xAxis: {
      type: 'category',
      data: ['雨林型陆龟', '海岛森林型陆龟', '沙漠型陆龟',
        '巴西白膝头', '智利红玫瑰', '墨西哥火脚', '亚马逊镭射',
        '蝎子', '红相手蟹', '寄居蟹', '蜈蚣', '东方蝾螈', '角蛙',
        '树蛙', '鬃狮蜥', '守宫', '变色龙', '小型蛇', '蜜袋鼬',
        '豚鼠', '仓鼠', '龙猫', '鳄鱼', '柯尔鸭', '鹦鹉',
        '蜗牛', '观赏螺', '水母', '兔类'],
      axisLabel: {
        interval: 0,
        rotate: -38,
      },



    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b} : {c}年',
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [60, 60, 60, 10, 12, 15, 20, 8, 2, 3.5, 6, 7.5,
          6, 5.5, 8.5, 7.5, 7.5, 17, 25,
          4.5, 2.5, 17.5, 75, 8, 45, 2.5, 3.5, 0.7, 8.5],
        itemStyle: {
          color: '#71783a'
        },
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 4
        },
        symbolSize: 10
      }
    ]
  },
  // 各异宠用品购买及购买渠道渗透率
  option17: {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} %'
    },
    legend: {
      data: [
        '鼠类',
        '兔类',
        '鸟类',
        '爬行动物',
        '全部线上',
        '大部分线上',
        '线上线下各半',
        '大部分线下'
      ]
    },
    series: [
      {
        name: '用品购买渗透率',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 43, name: '鼠类', itemStyle: { color: '#F8F5B8'} },
          {
            value: 37, name: '兔类', itemStyle: {
              color: '#EBE68F'
            },
          },
          {
            value: 23, name: '鸟类', itemStyle: {
              color: '#E7DE70'
            },
          },
          {
            value: 22, name: '爬行动物', itemStyle: {
              color: '#B0BA59'
            }, selected: true
          }
        ]
      },
      {
        name: '异宠用品购买渠道',
        type: 'pie',
        radius: ['45%', '60%'],
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}%  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
        },
        data: [
          {
            value: 42, name: '大部分线上', itemStyle: {
              color: '#909847'
            },
          },
          {
            value: 29, name: '线上线下各半', itemStyle: {
              color: '#71783A'
            },
          },
          {
            value: 16, name: '全部线上', itemStyle: {
              color: '#595F28'
            },
          },
          {
            value: 12, name: '大部分线下', itemStyle: {
              color: '#52512D'
            },
          }

        ]
      }
    ]
  },
  // 社交平台红人粉丝数及点赞数
  option20: {
    color: ['#11271b', '#595f28'],
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
      data: ['万级粉丝数', '异宠内容万级点赞数']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      color: '#11271b',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['明星','明星','明星','明星','明星','明星','明星','明星','明星','明星',
              '博主','博主','博主','博主','博主','博主','博主','博主','博主','博主',
              'up主','up主','up主','up主','up主','up主','up主','up主','up主','up主']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        z: 0,
        name: '万级粉丝数',
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
              color: '#595f28'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [9005.6,8371.9,7333.6,6257.9,5626.1,4932.9,4246.5,2415.6,1652.6,1442.9,
        1291.6,845.2,511.8,510.9,330.7,239.4,202.4,175.5,110.5,93.2,
        770,345.8,125.9,119,118,84.7,64.6,64.3,50.7,32.5],
        tooltip: {
          valueFormatter: function (value) {
            return value + ' W+';
          }
         }
      },
      {
        z: 0,
        name: '万级点赞数',
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
              color: 'rgb(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: []
      },
      {
        z: 0,
        name: '异宠内容万级点赞数',
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
              color: '#91b8a2'
            },
            {
              offset: 1,
              color: '#2c513c'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [,,,,,,,,,,
        4112.9,2596.4,2202.8,1056.2,1022.4,667.5,599.7,592.7,567.8,548.1,
        12000,10000,6848.4,3846.1,3787.6,2557.2,874.6,764.6,665.9,461.7],
        tooltip: {
          valueFormatter: function (value) {
            return value + ' W+';
          }
         }
      },
    ]
  },
  // 视频内容主题观众感兴趣比例
  option21: {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%',
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
          { value: 66.2, name: '宠物日常生活',itemStyle:{color: '#52512D'} },
          { value: 65, name: '创意趣味vlog',itemStyle:{color: '#595F28'} },
          { value: 62.4, name: '剧情段子',itemStyle:{color: '#71783A'} },
          { value: 58.2, name: '科普知识',itemStyle:{color: '#909847'} },
          { value: 54.4, name: '动物集锦',itemStyle:{color: '#B0BA59'} },
          { value: 50.2, name: '公益保护救助',itemStyle:{color: '#E7DE79'} },
          { value: 48.6, name: '食品用品服务' ,itemStyle:{color: '#EBE68F'}},
          { value: 47.4, name: '相关资讯' ,itemStyle:{color: '#F8F5B8'}},
        ]
      }
    ]
  },
  // 水族动物用品购买率
  option22: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} {b} : {c}%'
    },
    legend: {
      top: ''
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly:false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 11
        },
        data: [
          { value: 60, name: '鱼粮',itemStyle:{color:'#444e0f'} },
          { value: 57, name: '鱼缸',itemStyle:{color:'#52512D'} },
          { value: 55, name: '清洁工具',itemStyle:{color:'#595F28' }},
          { value: 51, name: '水草用品',itemStyle:{color:'#71783a'} },
          { value: 50, name: '增氧设备',itemStyle:{color:'#909847'} },
          { value: 45, name: '水族药剂',itemStyle:{color:'#B0BA59'} },
          { value: 44, name: '过滤器',itemStyle:{color:'#BCBC5F'} },
          { value: 41, name: '配件',itemStyle:{color:'#E7DE70'} },
          { value: 40, name: '造景装饰',itemStyle:{color:'#EBE68F'} },
          { value: 39, name: '照明设备',itemStyle:{color:'#F8F5B8'} },
          { value: 39, name: '温控器才',itemStyle:{color:'#FEFFC8'} }
        ]
      }
    ]
  },
  // 微博萌宠红人做博主动机
  option23: {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['获得大量粉丝成为博主', '个人兴趣', '与朋友交流互动', '作为收入来源', '更好变现','呼吁公益与救助']
    },
    series: [
      {
        name: '占比',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 55.7, name: '获得大量粉丝成为博主',itemStyle:{color: '#595F28'} },
          { value: 50, name: '个人兴趣',itemStyle:{color: '#71783A'} },
          { value: 43.2, name: '与朋友交流互动',itemStyle:{color: '#909847'} },
          { value: 37.5, name: '作为收入来源',itemStyle:{color: '#E7DE70'} },
          { value: 25, name: '更好变现',itemStyle:{color: '#F8F5B8'} },
          {value: 42, name: '呼吁公益与救助' ,itemStyle:{color: '#B0BA59'}}
          ]
  
      }
    ]
  },
  // 违法原因
  option24: {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%'
    },
    series: [
      {
        type: 'treemap',
         
        data: [
          {
            name: '盈利',
            value: 98,
            itemStyle:{
              color:'#71783a'
        },
          },
          
          {
            name: '个人喜爱',
            value: 12,
            itemStyle:{
              color:'#e7de70'
        },
          },
        ],
  
      }
    ]
  },
  // 销售平台各类异宠销售数据
  option25: {
    alignTicks: false,
    lineStyle: {
      width: 2,
      color: '#132810'
    },
    legend: {
      bottom: 5,
      data: ['淘宝', '京东', '拼多多'],
      itemGap: 20,
      textStyle: {
        color: '#000',
        fontSize: 15
      },
      selectedMode: 'single'
    },
    radar: {
      indicator: [
        { name: '关键字检索数量', max: 270000,color:'#4c4925' },
        { name: '最高销售量', max: 100000,color:'#4c4925' },
        { name: '最高销售价', max: 9999999,color:'#4c4925' },
        { name: '最低销售价', max: 1500,color:'#4c4925' },
        { name: '最高销售量的售价', max: 1520,color:'#4c4925' },
       
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: 'rgb(0, 0, 0)'
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 1)',
            'rgba(238, 197, 102, 1)',
            'rgba(238, 197, 102, 1)',
            'rgba(238, 197, 102, 1)',
            'rgba(238, 197, 102, 1)',
            'rgba(238, 197, 102, 1.2)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(235, 197, 102, 0.5)'
        }
      }
    },
    series: [
      {
        name: '淘宝',
        type: 'radar',
        lineStyle: {
          width: 1,
          opacity: 1
        },
        data: [
          [140000, 10000, 9999999, 2, 100, 1],
          [180000, 10000, 2000000, 2, 68, 2],
          [10000, 300, 17000, 0.5, 86,  3],
          [10000,1000, 999999, , 325,  4],
          [10000, 6000, 639, 3.5, 84.2, 5],
          [10000, 800, 1150, 1, 48, 6],
          [90000, 20000, 99999, 1, 20,7],
          [9460, 4000, 88, 1, 3.9,  8],
          [40000,1000,47,2,9.9,9],
          
        ],
        symbol: 'none',
        itemStyle: {
          color: '#b0ba59'
        },
        areaStyle: {
          opacity: 0.8
        }
      },
      {
        name: '拼多多',
        type: 'radar',
        lineStyle: {
          width: 1,
          opacity: 1
        },
        data: [
          [10000, 100000, 258, 1, 111,  1],
          [10000, 100000, 999999, 0.8, 1, 2],
          [10000, 58000, 13797, 4.7, 13.8, 3],
          [10000, 100000, 2880, 17.8, 47.8, 4],
          [10000, 100000, 775.8, 2.1, 43, 5],
          [10000, 100000, 1490, 1.5, 67.8, 6],
          [10000, 20000, 1794, 1, 1.58, 7],
          [10000, 26000, 999, 1.9, 7.8, 8],
          [10000, 595, 250, 3.3, 13.8, 9]
        ],
        symbol: 'none',
        itemStyle: {
          color: '#52512d'
        },
        areaStyle: {
          opacity: 0.8
        }
      },
      {
        name: '京东',
        type: 'radar',
        lineStyle: {
          width: 1,
          opacity: 1
        },
        data: [
          [270000, 20000, 10000, 1, 680, 1],
          [150000, 20000, 21965, 1, 218, 2],
          [20000, 200, 4480, 1, 150, 3],
          [7900, 5000, 2557,46, 968, 4],
          [7920, 20000, 5888, 3, 1518, 5],
          [70000, 1000, 4499, 9, 72, 6],
          [20000, 5000, 2730, 1, 23, 7],
          [50000, 10000, 780, 1, 39, 8],
          [7850, 100, 10000, 49, 145.2, 9],
         
        ],
        symbol: 'none',
        itemStyle: {
          color: '#606c2c'
        },
        areaStyle: {
          opacity: 0.8
        }
      }
    ]
  },
  // 异宠被弃养或走失情况
  option26: {
    series: {
      type: 'sankey',
      right: '5%',
      layout: 'none',
      emphasis: {
        focus: 'adjacency'
      },
      data: [
        {
          name: '爬行动物',
          itemStyle: {
                  color: '#98caa4'
                }
        },
        {
          name: '哺乳动物',
          itemStyle: {
                  color: '#3b5641'
                }
        },
        {
          name: '节肢动物',
          itemStyle: {
                  color: '#72b281'
                }
        },
        {
          name: '水族动物',
          itemStyle: {
                  color: '#47543c'
                }
        },
        {
          name: '啮齿动物',
          itemStyle: {
                  color: '#d4ebd9'
                }
        },
        {
          name: '两栖动物',
          itemStyle: {
                  color: '#3c4f46'
                }
        },
        {
          name: '异宠',
          itemStyle: {
                  color: '#457851'
                }
        },
        {
          name: '非人灵长动物',
          itemStyle: {
                  color: '#4f5b55'
                }
        },
        {
          name: '伤害人类',
          itemStyle: {
                  color: '#4e4f2f'
                }
        },
        {
          name: '家人抗拒',
          itemStyle: {
                  color: '#ebe68f'
                }
        },
        {
          name: '主人自身意外情况',
          itemStyle: {
                  color: '#d3d863'
                }
        },
        {
          name: '难以携带',
          itemStyle: {
                  color: '#a19f54'
                }
        },
        {
          name: '体型庞大',
          itemStyle: {
                  color: '#bcbc5f'
                }
        },
        {
          name: '繁殖过快',
          itemStyle: {
                  color: '#87864e'
                }
        },
        {
          name: '患病',
          itemStyle: {
                  color: '#f8f5b8'
                }
        },
        {
          name: '招虫',
          itemStyle: {
                  color: '#787b42'
                }
        },
        {
          name: '原因未知',
          itemStyle: {
                  color: '#78774e'
                }
        },
        {
          name: '街道',
          itemStyle: {
                  color: '#769d8b'
                }
        },
        {
          name: '宠物店',
          itemStyle: {
                  color: '#1c1f27'
                }
        },
        {
          name: '小区',
          itemStyle: {
                  color: '#2a614c'
                }
        },
        {
          name: '河道',
          itemStyle: {
                  color: '#356b52'
                }
        },
        {
          name: '校园',
          itemStyle: {
                  color: '#204232'
                }
        },
        {
          name: '景区',
          itemStyle: {
                  color: '#2c644b'}
                },
        {
          name: '相关机构',
          itemStyle: {
                  color: '#143526'}
                },
        {
          name: '垃圾桶',
          itemStyle: {
                  color: '#295340'}
                },
        {
          name: '客运站',
          itemStyle: {
                  color: '#2d483b'}
                },
                {
          name: '市场',
          itemStyle: {
                  color: '#497b64'}
                },
      ],
      links: [
        {
          source: '原因未知',
          target: '哺乳动物',
          value: 5,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '原因未知',
          target: '非人灵长动物',
          value: 2,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '原因未知',
          target: '爬行动物',
          value: 88,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '原因未知',
          target: '两栖动物',
          value: 5,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '原因未知',
          target: '水族动物',
          value: 1,
         lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '原因未知',
          target: '异宠',
          value: 50,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '招虫',
          target: '哺乳动物',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '患病',
          target: '啮齿动物',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '繁殖过快',
          target: '节肢动物',
          value: 20,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '体型庞大',
          target: '爬行动物',
          value: 2,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '难以携带',
          target: '爬行动物',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '主人自身意外情况',
          target: '爬行动物',
          value: 200,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '主人自身意外情况',
          target: '节肢动物',
          value: 100,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '主人自身意外情况',
          target: '哺乳动物',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '家人抗拒',
          target: '啮齿动物',
          value: 12,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '家人抗拒',
          target: '爬行动物',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '伤害人类',
          target: '哺乳动物',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '招虫',
          target: '哺乳动物',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '哺乳动物',
          target: '街道',
          value: 2,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '哺乳动物',
          target: '宠物店',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '哺乳动物',
          target: '相关机构',
          value: 3,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '哺乳动物',
          target: '河道',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '哺乳动物',
          target: '校园',
          value: 1,
         lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '非人灵长动物',
          target: '小区',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '非人灵长动物',
          target: '相关机构',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '两栖动物',
          target: '河道',
          value: 2,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '两栖动物',
          target: '相关机构',
          value: 3,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '爬行动物',
          target: '景区',
          value: 2,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '爬行动物',
          target: '垃圾桶',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '爬行动物',
          target: '客运站',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '爬行动物',
          target: '河道',
          value: 82,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '爬行动物',
          target: '小区',
          value: 3,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '爬行动物',
          target: '街道',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '爬行动物',
          target: '校园',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '爬行动物',
          target: '市场',
          value: 200,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
         {
          source: '啮齿动物',
          target: '街道',
          value: 13,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
         {
          source: '节肢动物',
          target: '相关机构',
          value: 20,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
       {
          source: '节肢动物',
          target: '市场',
          value: 100,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '水族动物',
          target: '河道',
          value: 1,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
        {
          source: '异宠',
          target: '相关机构',
          value: 50,
          lineStyle: {
              color: 'gradient',
              curveness: 0.6
            }
        },
      ]
      
    }
  },
  // 异宠购买方式
  option27: {
    title: {
      text: ''
    },
    legend: {
      data: ['兔类', '水族动物','鸟类','爬行动物','两栖动物','啮齿动物']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '线下购买', max: 71, color: 'black', min: 0},
        { name: '亲友熟人赠送', max: 71, color: 'black', min: 0 },
        { name: '线上购买', max: 71, color: 'black', min: 0 },
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [49,35,29],
            name: '兔类',
            itemStyle:{color: '#595F28'}
          },
          {
            value: [71,23,27],
            name: '水族动物',
            itemStyle:{color: '#71783A'}
          },
          {
            value: [56,27,32],
            name: '鸟类',
            itemStyle:{color: '#909847'}
          },
          {
            value: [48,27,36],
            name: '爬行动物',
            itemStyle:{color: '#B0BA59'}
          },
          {
            value: [45,35,39],
            name: '两栖动物',
            itemStyle:{color: '#E7DE70'}
          },
          {
            value: [51,24,35],
            name: '啮齿动物',
            itemStyle:{color: '#EBE68F'}
          },
        ]
      }
    ]
  },
  // 异宠就医遇到的问题
  option28: {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%'
    },
    legend: {
      top: ''
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [30, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
         color: ['#52512d','#595F28','#71783A','#909847','#B0BA59','#E7DE70','#EBE68F','#f8f5b8'],
        data: [
          { value: 43.72, name: '收费名目类别混乱' },
          { value: 38.81, name: '兽医缺乏资质' },
          { value: 37.87, name: '医疗推销' },
          { value: 29.75, name: '过度诊疗' },
          { value: 23.8, name: '诊疗价昂贵，缺乏标准' },
          { value: 23.14, name: '发生医疗事故' },
          { value: 14.45, name: '医后服务差' },
          { value: 9.16, name: '其他' }
        ]
      }
    ]
  },
  // 异宠弃养放生后果
  option29: {
    series: {
      type: 'sankey',
      layout: 'none',
      right: '10%',
      emphasis: {
        focus: 'adjacency'
      },
      data: [
        {
          name: '爬行动物',
          itemStyle: {
                  color: '#ebe68f'
                }
        },
        {
          name: '哺乳动物',
          itemStyle: {
                  color: '#87864e'
                }
        },
        {
          name: '节肢动物',
          itemStyle: {
                  color: '#78774e'
                }
        },
        {
          name: '水族动物',
          itemStyle: {
                  color: '#a19f54'
                }
        },
        {
          name: '啮齿动物',
          itemStyle: {
                  color: '#bcbc5f'
                }
        },
        {
          name: '两栖动物',
          itemStyle: {
                  color: '#e7de70'
                }
        },
        {
          name: '昆虫',
          itemStyle: {
                  color: '#f8f5b8'
                }
        },
        {
          name: '繁殖能力强',
          itemStyle: {
                  color: '#72b281'
                }
        },
        {
          name: '伤害人类',
          itemStyle: {
                  color: '#3b5641'
                }
        },
        {
          name: '传播沙门氏菌',
          itemStyle: {
                  color: '#3e6b49'
                }
        },
        {
          name: '抢占本土动物空间',
          itemStyle: {
                  color: '#4f5b55'
                }
        },
        {
          name: '传播蛙壶菌',
          itemStyle: {
                  color: '#44664c'
                }
        },
        {
          name: '破坏植被',
          itemStyle: {
                  color: '#d4ebd9'
                }
        },
        {
          name: '传播肉毒杆菌',
          itemStyle: {
                  color: '#98caa4'
                }
        },
        {
          name: '传播弯曲杆菌',
          itemStyle: {
                  color: '#599567'
                }
        },
        {
          name: '传播钩端螺旋体病',
          itemStyle: {
                  color: '#457851'
                }
        },
        {
          name: '杂交',
          itemStyle: {
                  color: '#47543c'
                }
        },
        {
          name: '破坏农作物',
          itemStyle: {
                  color: '#3c4f46'
                }
        },
        {
          name: '破坏生态平衡',
          itemStyle: {
                  color: '#99b5aa'
                }
        },
        {
          name: '危害公共安全',
          itemStyle: {
                  color: '#2a614c'
                }
        },
        {
          name: '威胁公共环境卫生',
          itemStyle: {
                  color: '#63917f'
                }
        },
        {
          name: '基因突变',
          itemStyle: {
                  color: '#487d68'
                }
        },
        {
          name: '危害农业',
          itemStyle: {
                  color: '#194d39'
                }
          
        }
      ],
      links: [
        {
          source: '爬行动物',
          target: '繁殖能力强',
          value: 3,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
         
        },
        {
          source: '爬行动物',
          target: '伤害人类',
          value: 2,
         lineStyle: {
                  color: 'source',
                  opacity: 0.6
                } 
                
                
        },
        {
          source: '爬行动物',
          target: '传播沙门氏菌',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '爬行动物',
          target: '传播肉毒杆菌',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '爬行动物',
          target: '传播弯曲杆菌',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '爬行动物',
          target: '传播钩端螺旋体病',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '哺乳动物',
          target: '传播沙门氏菌',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '哺乳动物',
          target: '伤害人类',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '哺乳动物',
          target: '破坏农作物',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '节肢动物',
          target: '抢占本土动物空间',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '节肢动物',
          target: '伤害人类',
          value: 2,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '水族动物',
          target: '杂交',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '水族动物',
          target: '繁殖能力强',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '水族动物',
          target: '抢占本土动物空间',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '啮齿动物',
          target: '破坏农作物',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '啮齿动物',
          target: '破坏植被',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '啮齿动物',
          target: '传播沙门氏菌',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '两栖动物',
          target: '破坏植被',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '两栖动物',
          target: '伤害人类',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '两栖动物',
          target: '传播蛙壶菌',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '昆虫',
          target: '破坏植被',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '繁殖能力强',
          target: '破坏生态平衡',
          value: 3,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '繁殖能力强',
          target: '基因突变',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '伤害人类',
          target: '危害公共安全',
          value: 5,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '伤害人类',
          target: '威胁公共环境卫生',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '破坏植被',
          target: '破坏生态平衡',
          value: 3,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '传播沙门氏菌',
          target: '威胁公共环境卫生',
          value: 3,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '抢占本土动物空间',
          target: '危害公共安全',
          value: 2,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '传播蛙壶菌',
          target: '威胁公共环境卫生',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '破坏植被',
          target: '破坏生态平衡',
          value: 3,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '传播肉毒杆菌',
          target: '威胁公共环境卫生',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '传播弯曲杆菌',
          target: '威胁公共环境卫生',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '传播钩端螺旋体病',
          target: '威胁公共环境卫生',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '杂交',
          target: '基因突变',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '破坏农作物',
          target: '危害公共安全',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
        {
          source: '破坏农作物',
          target: '危害农业',
          value: 1,
          lineStyle: {
                  color: 'source',
                  opacity: 0.6
                }
        },
      ]
    }
  },
  // 异宠主家庭月收入
  option30: {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['500000元及以上', '1000元以下', '1000-5000元', '5000-10000元', '10000-50000元']
    },
    series: [
      {
        name: '家庭月收入：',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 43, name: '10000-50000元',itemStyle:{color: '#595F28'} },
          { value: 30.8, name: '5000-10000元',itemStyle:{color: '#71783A'} },
          { value: 16.8, name: '1000-5000元' ,itemStyle:{color: '#909847'}},
          { value: 6.1, name: '1000元以下',itemStyle:{color: '#B0BA59'} },
          { value: 3.3, name: '500000元及以上' ,itemStyle:{color: '#E7DE70'}}
        ]
      }
    ]
  },
  // 异宠主年龄结构
  option31: {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%'
    },
    legend: {
      top: ''
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly:  false},
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '年龄结构',
        type: 'pie',
        radius: [30, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 6
        },
        color: ['#595F28','#71783A','#909847','#B0BA59','#E7DE70','#EBE68F'],
        data: [
          
          { value: 45.9, name: '90后' },
          { value: 38.7, name: '00后' },
          { value: 10.8, name:'80后' },
          { value: 2.7, name: '70后' },
          { value: 1.4, name: '60后' },
          { value: 0.5, name: '10后' }
        ]
      }
    ]
  }
  
  
  
}
export default option










