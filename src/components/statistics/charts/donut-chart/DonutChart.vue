<template>
  <div class='donut-chart'></div>
</template>

<script>
  import 'amcharts3'
  import 'amcharts3/amcharts/plugins/responsive/responsive.js'
  import 'amcharts3/amcharts/serial.js'
  import 'amcharts3/amcharts/pie'
  import 'amcharts3/amcharts/themes/light'

  export default {
    name: 'donut-chart',

    props: ['chartData'],

    data: function () {
      return {
        chart: {}
      }
    },

    methods: {
      drawChart () {
        /* global AmCharts */
        this.chart = AmCharts.makeChart(this.$el, {
          'type': 'pie',
          'theme': 'light',
          'dataProvider': this.chartData,
          'titleField': 'title',
          'valueField': 'value',
          'labelRadius': 5,

          'radius': '42%',
          'innerRadius': '60%',
          'labelText': '[[title]]',
          'export': {
            'enabled': true
          }
        })
      }
    },

    mounted () {
      this.drawChart()
    }
  }
</script>

<style lang='scss'>
  @import '../../../../sass/_variables.scss';
  @import '../../../../../node_modules/ammap3/ammap/ammap.css';

  .donut-chart {
    width: 100%;
    height: 100%;
  }
</style>
