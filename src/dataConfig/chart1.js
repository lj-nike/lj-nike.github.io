const option = {
  // 2017-2021年各异宠购买比例
  option1: {
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
          normal: { color: '#E7DE70' }
        },
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
          normal: { color: '#B0BA59' }
        },
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
          normal: { color: '#909847' }
        },
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
          normal: { color: '#71783A' }
        },
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
          normal: { color: '#595F28' }
        },
      }
    ]
  },
  // 2017-2021年各异宠购买比例
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
      data: ['一线城市宠物展览次数', '新一线城市宠物展览次数', '二线城市宠物展览次数', '港澳台地区宠物展览次数', '异宠展次数']
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
        name: '一线城市宠物展览次数',
        type: 'bar',
        itemStyle: {
          normal: { color: '#595f28' }
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
        name: '新一线城市宠物展览次数',
        type: 'bar',
        itemStyle: {
          normal: { color: '#909847' }
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
        name: '二线城市宠物展览次数',
        type: 'bar',
        itemStyle: {
          normal: { color: '#bcbc5f' }
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
        name: '港澳台地区宠物展览次数',
        type: 'bar',
        itemStyle: {
          normal: { color: '#e7de70' }
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
        name: '异宠展次数',
        type: 'line',
        itemStyle: {
          normal: { color: '#4a4a3a' }
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
  // 不同级城市各异宠购买情况
  option3: {
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
          normal: { color: '#EBE68F' }
        },
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
          normal: { color: '#E7DE70' }
        },
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
          normal: { color: '#B0BA59' }
        },
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
          normal: { color: '#909847' }
        },
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
          normal: { color: '#71783A' }
        },
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
          normal: { color: '#595F28' }
        },
      }

    ]
  },
  // 宠物主对宠物殡葬的看法
  option4: {
    tooltip: {
      trigger: 'item'
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
  option5: {
    tooltip: {
      trigger: 'item',
      formatter: function(a) {
        var str = '占比: ';
        return str.concat(
          a.value + '%\n\n' ,
        );
      }
    },
    series: [
      {
        type: 'treemap',

        data: [
          {
            name: '非常了解',
            value: 22.76,
            itemStyle: {
              normal: { color: '#71783a' }
            },
          },
          {
            name: '比较了解',
            value: 37.11,
            itemStyle: {
              normal: { color: '#595f28' }
            },
          },
          {
            name: '一般',
            value: 23.14,
            itemStyle: {
              normal: { color: '#909847' }
            },
          },
          {
            name: '不太了解',
            value: 14.26,
            itemStyle: {
              normal: { color: '#b0ba59' }
            },
          },
          {
            name: '非常不了解',
            value: 2.74,
            itemStyle: {
              normal: { color: '#e7de70' }
            },
          },
        ],

      }
    ]
  },
  // 处理宠物尸体方式
  option6: {
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
  // 2018-2022年全国宠物、异宠展
  option7: {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    legend: {
      top: '2%',
      left: '3%',
      orient: 'vertical',
      data: [
        {
          name: 'tree1',
          icon: 'rectangle'
        }
      ],
      borderColor: '#b0ba59'
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
        color: '#b0ba59',
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
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
        itemStyle: { color: '#909847' },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      },
    ]
  },
  option8: {
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
  }
}
export default option






