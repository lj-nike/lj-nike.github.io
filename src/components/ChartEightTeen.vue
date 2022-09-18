<template>
  <div class="chart-container">
    <div class="chart-title">{{title}}</div>
    <div id="option18" class="chart-content" :style="{'height': height + 'px', 'width': width + '%'}"></div>
    <div class="chart-footer" v-if="footer" :style="{'width' : width + '%'}">
      <span>{{footer}}</span>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    footer: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: 400
    },
    width: {
      type: Number,
      default: 100
    },
    isMounted: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById('option18'))
    // prettier-ignore
    this.chartOptionData = {
      tooltip: {
        trigger: 'axis',
        formatter: '{b} : {c}%'
      },
      color:['#909847'],
      xAxis: {
        data: ['水族动物', '爬行动物', '兔类','啮齿动物（含蜜袋鼬）','两栖动物'],
        axisLabel:{
          interval:0,
          rotate:-25,
        },
      },
      yAxis: {},
      dataGroupId: '',
      animationDurationUpdate: 500,
      series: {
        type: 'bar',
        id: 'sales',
        itemStyle: {
          borderRadius:[100,100, 0,0 ]
        },
        data: [
          {
            value: 16,
            groupId: '水族动物',
            itemStyle:{color:'#595f28'}
          },
          {
            value: 9,
            groupId: '爬行动物',
            itemStyle:{color:'#71783a'}
          },
          {
            value: 9,
            groupId: '兔类',
            itemStyle:{color:'#909847'}
          },
          {
            value: 6,
            groupId: '啮齿动物',
            itemStyle:{color:'#b0ba59'}
          },
          {
            value: 4,
            groupId: '两栖动物',
            itemStyle:{color:'#e7de70'}
          },
        
        ],
        universalTransition: {
          enabled: true,
          divideShape: 'clone'
        }
      }
    }

    const drilldownData = [
      {
        dataGroupId: '水族动物',
        data: [
          ['孔雀鱼', 22,],
          ['小丑鱼', 14],
          ['红箭鱼', 9],
          ['罗汉鱼', 9],
          ['霓虹灯鱼', 9],
          ['黑玛丽',7],
          ['金蝶鱼',7],
          ['泰国斗鱼',6],
          ['水母',5],
          ['炮弹鱼',4]
          
        ],

      },
      {
        dataGroupId: '爬行动物',
        data: [
          ['龟类', 66],
          ['蜥蜴类', 38],
          ['节肢动物', 14],
          ['蛇类', 14]
        ]
      },
      {
        dataGroupId: '兔类',
        data: [
          ['斑点兔', 13],
          ['安哥拉兔', 11],
          ['公主兔', 11],
          ['巨型花明兔', 9],
          ['泽西长毛兔', 8],
          ['海棠兔',7],
          ['狮子兔',7]
        ]
      },
      {
        dataGroupId: '啮齿动物',
        data: [
          ['仓鼠', 78],
          ['龙猫', 23],
          ['豚鼠', 17],
          ['蜜袋鼬', 2]
        ]
      },
      {
        dataGroupId: '两栖动物',
        data: [
          ['蝴蝶蛙', 26],
          ['小丑蛙', 25],
          ['牛奶蛙', 21],
          ['六角龙', 18],
          ['非洲牛蛙', 16],
          ['虎皮蝾螈',15],
          ['螃蟹类',13],
          ['螺类',10]
        ]
      }
    ]
    this.myChart.on('click',  (event) => {
      if (event.data) {
        var subData = drilldownData.find(function (data) {
          return data.dataGroupId === event.data.groupId;
        });
        if (!subData) {
          return;
        }
        this.myChart.setOption({
          xAxis: {
            data: subData.data.map(function (item) {
              return item[0];
            })
          },
          series: {
            type: 'bar',
            id: 'sales',
            dataGroupId: subData.dataGroupId,
            data: subData.data.map(function (item) {
              return item[1];
            }),
            universalTransition: {
              enabled: true,
              divideShape: 'clone'
            }
          },
          graphic: [
            {
              type: 'text',
              left: 50,
              top: 20,
              style: {
                text: '还原',
                fontSize: 18
              },
              onclick:  ()=> {
                this.myChart.setOption(option);
              }
            }
          ]
        })
      }
    })
  }, 
  data () {
    return {
      myChart: null,
      chartOptionData: null
    }
  },
  watch: {
    isMounted: {
      handler (newVal) {
        this.myChart.setOption(this.chartOptionData)
      }
    }
  }
}
</script>

<style>
.chart-title {
  font-size: 2em;
  padding: 20px 0;
  text-align: left;
  font-style: italic;
}
.chart-container {
  width: 100%;
  padding: 50px 0;
  background-color: #cfd6c5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.chart-footer { 
  text-align: left;
}
</style>