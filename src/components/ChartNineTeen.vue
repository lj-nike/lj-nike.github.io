<template>
  <div class="chart-container">
    <div class="chart-title">{{title}}</div>
    <div id="option19" class="chart-content" :style="{'height': height + 'px', 'width': width + '%'}"></div>
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
    this.myChart = echarts.init(document.getElementById('option19'))
    // prettier-ignore
    const days = [
      '异宠', '宠物猫', '宠物狗',
      '大熊猫', '野生动物'
    ];
    const hours = [
      '5%', '1a', '2a', '10%', '4a', '5a', '15%',
      '7a', '8a', '20%', '10a', '11a',
      '25%', '1p', '2p', '30%', '4p', '5p',
      '35%', '7p', '8p', '40%', '10p', '11p'
    ];

    // prettier-ignore
    const data = [[0, 0, 8], [0, 1, 8], [0, 2, 8], [0, 3, 8], [0, 4, 8],
    [0, 5, 8], [0, 6, 8], [1, 15, 8],
    [1, 16, 8], [1, 17, 8], [1, 18, 8], [1, 19, 8], [1, 20, 8], [1, 21, 8],
    [2, 12, 8], [2, 13, 8],
    [2, 14, 8], [2, 15, 8], [2, 16, 8], [2, 17, 8], [2, 18, 8],
    [3, 4, 8], [3, 5, 8], [3, 6, 8], [3, 7, 8], [3, 8, 8], [3, 9, 8],
    [4, 3, 8], [4, 4, 8], [4, 5, 8], [4, 6, 8],
    [4, 7, 8], [4, 8, 8], [4, 9, 8], [4, 10, 8], [4, 11, 8],
    [4, 12, 8]];
    const title = [];
    const singleAxis = [];
    const series = [];
    days.forEach(function(day, idx) {
      title.push({
        textBaseline: 'middle',
        top: ((idx + 0.5) * 100) / 5 + '%',
        text: day
      })
      singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100) / 5 + 5 + '%',
        height: 100 / 5 - 10 + '%',
        axisLabel: {
          interval: 2
        }
      })
      series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter', itemStyle: {
          color: function(params) {

            var colorList = ['#f8f5b8', '#e7de70', '#b0ba59', '#909847', '#71783a', '#595f28', '#52512d'];
            return colorList[params.dataIndex]
          }
        },
        data: [],
        symbolSize: function(dataItem) {
          return dataItem[1] * 4;
        }
      })
    })
    data.forEach(function(dataItem) {
      series[dataItem[0]].data.push([dataItem[1], dataItem[2]])
    })
    this.option = {
      animation: true,
      title: title,
      singleAxis: singleAxis,
      series: series
    }
  }, 
  data () {
    return {
      myChart: null,
      option:null
    }
  },
  watch: {
    isMounted: {
      handler (newVal) {
        this.myChart.setOption(this.option)
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