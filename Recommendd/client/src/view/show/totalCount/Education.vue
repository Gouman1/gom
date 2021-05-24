<template>
  <div class="outDiv" id="education">
  </div>
</template>

<script>
import {IndexApi} from './indexApi'
let echarts = require('echarts')
export default {
  name: 'education',
  data () {
    return {
      data: [],
      xAxisData: [],
      seriesData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      IndexApi.getEducation().then(res => {
        this.data = res.data.data
        for (let i = 0; i < this.data.length; i++) {
          this.xAxisData[i] = this.data[i].name
          this.seriesData[i] = this.data[i].value
        }
        this.drawLine()
      })
    },

    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('education'))
      let option = {
        grid:{
          left:'14%',
          right:'8%',
          bottom:'15%',
          top:'15%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: this.xAxisData,
          axisLabel: {
            textStyle: {
              color: 'white',//x轴刻度数值颜色
              fontSize:'80%',
            },
          },
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: 'white',//y轴刻度数值颜色
              fontSize:'80%',
            },
          },
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: false,
          }
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#83bff6'},
                  {offset: 0.5, color: '#188df0'},
                  {offset: 1, color: '#188df0'}
                ]
              )
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2378f7'},
                    {offset: 0.7, color: '#2378f7'},
                    {offset: 1, color: '#83bff6'}
                  ]
                )
              }
            },
            data: this.seriesData
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
  .outDiv {
    width: 100%;
    height: 100%;
    background-color: steelblue;
    opacity: 0.8;
  }
</style>
