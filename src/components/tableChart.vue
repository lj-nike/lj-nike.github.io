<template>
  <div class="chart-container">
    <div class="chart-title">{{title}}</div>
    <div :id="chartId" class="chart-content" :style="{'height': height + 'px', 'width': width + '%'}"></div>
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
    data: {
      type: Object,
      default: () => {}
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
    chartId: {
      type: String,
      default: 'optionRn'
    }
  },
  mounted () {
    console.log('jin ru mount')
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(this.chartId))
    // 绘制图表
    myChart.setOption(this.data)
  }, 
  data () {
    return {}
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
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.chart-footer { 
  text-align: left;
}
</style>