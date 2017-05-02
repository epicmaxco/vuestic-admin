<template>
  <div class='layered-column-chart'></div>
</template>

<script>
  import 'amcharts3'
  import 'amcharts3/amcharts/plugins/responsive/responsive.js'
  import 'amcharts3/amcharts/serial.js'
  import 'amcharts3/amcharts/themes/light'

  export default {
    name: 'layered-column-chart',

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
          'theme': 'light',
          'type': 'serial',
          'dataProvider': this.chartData,
          'valueAxes': [{
            'unit': '%',
            'position': 'left',
            'title': 'GDP growth rate'
          }],
          'startDuration': 1,
          'graphs': [{
            'balloonText': 'GDP grow in [[category]] (2004): <b>[[value]]</b>',
            'fillAlphas': 0.9,
            'lineAlpha': 0.2,
            'title': '2004',
            'type': 'column',
            'valueField': 'year2004'
          }, {
            'balloonText': 'GDP grow in [[category]] (2005): <b>[[value]]</b>',
            'fillAlphas': 0.9,
            'lineAlpha': 0.2,
            'title': '2005',
            'type': 'column',
            'clustered': false,
            'columnWidth': 0.5,
            'valueField': 'year2005'
          }],
          'plotAreaFillAlphas': 0.1,
          'categoryField': 'country',
          'categoryAxis': {
            'gridPosition': 'start'
          },
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

  .layered-column-chart {
    width: 100%;
    height: 100%;
  }
</style>
