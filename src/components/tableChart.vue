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
    },
    isMounted: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    console.log('jin ru mount')
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById(this.chartId))
    // this.myChart.setOption(this.data)
    // setTimeout(() => {
    //   myChart.setOption(this.data)
    // }, 2000)
    // setTimeout(() => {
    //   myChart.setOption(this.data)
    // }, 5000)
    
  }, 
  data () {
    return {
      myChart: null
    }
  },
  watch: {
    isMounted(newVal) {
      if (newVal) {
        console.log('图表变化次数')
        this.myChart.setOption(this.data)
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