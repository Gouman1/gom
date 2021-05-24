<template>
    <div class="outDiv" id="age">
    </div>
</template>

<script>
let echarts = require('echarts');
import {IndexApi} from './indexApi'
export default {
  name: 'age',
  data () {
    return {
      data: [],
      xAxisData:[],
      seriesData:[]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      IndexApi.getAge().then(res => {
        this.data = res.data.data
        for (let i = 0; i < this.data.length; i++){
          this.xAxisData[i] = this.data[i].name;
          this.seriesData[i] = this.data[i].value;
        }
        this.drawLine()
      })
    },

    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('age'))
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: this.xAxisData,
          boundaryGap: false,
          axisLabel: {
            interval:0,
            rotate:40,
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
        grid: {
          left: '6%',
          right: '10%',
          bottom: '18%',
          containLabel: true
        },
        series: [{
          data: this.seriesData,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#0febff',
              borderColor: '#0febff',  //拐点边框颜色
              lineStyle: {
                color: '#0febff',//修改折线颜色
              },
            }
          },
        }]
      };
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
