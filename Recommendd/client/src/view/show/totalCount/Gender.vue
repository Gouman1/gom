<template>
  <div class="outDiv" id="gender"></div>
</template>

<script>
import {IndexApi} from './indexApi'

let echarts = require('echarts')
export default {
  name: 'gender',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      IndexApi.getGender().then(res => {
        this.data = res.data.data
        this.drawLine()
      })
    },

    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('gender'))
      let option = {
        title: [{
          // subtext: 'alignTo: "none" (default)',
          left: '16.67%',
          top: '75%',
          textAlign: 'center'
        }],
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} 人 ({d}%)'
        },
        series: [{
          type: 'pie',
          radius: '60%',
          // center: ['50%', '50%'],
          data: this.data,
          animation: false,
          label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5,
            textStyle: {
              fontSize: '120%',
              fontWeight: 600
            }
          },
          left: 0,
          // right: '66.6667%',
          top: 0,
          bottom: 0,
          color: [ '#43b4d5', '#f45197']
        }]
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
