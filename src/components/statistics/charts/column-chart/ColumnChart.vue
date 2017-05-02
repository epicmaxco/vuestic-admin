<template>
  <div class='column-chart'></div>
</template>

<script>
  import 'amcharts3'
  import 'amcharts3/amcharts/plugins/responsive/responsive.js'
  import 'amcharts3/amcharts/serial.js'
  import 'amcharts3/amcharts/themes/light'

  export default {
    name: 'column-chart',

    props: ['chartData'],

    methods: {
      drawChart () {
        /* global AmCharts */
        AmCharts.makeChart(this.$el, {
          'type': 'serial',
          'theme': 'light',
          'dataProvider': this.chartData,
          'valueAxes': [{
            'gridColor': '#FFFFFF',
            'gridAlpha': 0.2,
            'dashLength': 0
          }],
          'gridAboveGraphs': true,
          'startDuration': 1,
          'graphs': [ {
            'balloonText': '[[category]]: <b>[[value]]</b>',
            'fillAlphas': 0.8,
            'lineAlpha': 0.2,
            'type': 'column',
            'valueField': 'visits'
          } ],
          'chartCursor': {
            'categoryBalloonEnabled': false,
            'cursorAlpha': 0,
            'zoomable': false
          },
          'categoryField': 'country',
          'categoryAxis': {
            'gridPosition': 'start',
            'gridAlpha': 0,
            'tickPosition': 'start',
            'tickLength': 20
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

  .column-chart {
    width: 100%;
    height: 100%;
  }
</style>
