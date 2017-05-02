<template>
  <div class='time-based-area-chart'></div>
</template>

<script>
  import 'amcharts3'
  import 'amcharts3/amcharts/plugins/responsive/responsive.js'
  import 'amcharts3/amcharts/serial.js'
  import 'amcharts3/amcharts/themes/light'

  export default {
    name: 'time-based-area-chart',

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
          'type': 'serial',
          'theme': 'light',
          'marginRight': 80,
          'dataProvider': this.chartData,
          'valueAxes': [{
            'position': 'left',
            'title': 'Unique visitors'
          }],
          'graphs': [{
            'id': 'g1',
            'fillAlphas': 0.4,
            'valueField': 'visits',
            'balloonText': '<div style="margin:5px; font-size:19px;">Visits:<b>[[value]]</b></div>'
          }],
          'chartScrollbar': {
            'graph': 'g1',
            'scrollbarHeight': 80,
            'backgroundAlpha': 0,
            'selectedBackgroundAlpha': 0.1,
            'selectedBackgroundColor': '#888888',
            'graphFillAlpha': 0,
            'graphLineAlpha': 0.5,
            'selectedGraphFillAlpha': 0,
            'selectedGraphLineAlpha': 1,
            'autoGridCount': true,
            'color': '#AAAAAA'
          },
          'chartCursor': {
            'categoryBalloonDateFormat': 'JJ:NN, DD MMMM',
            'cursorPosition': 'mouse'
          },
          'categoryField': 'date',
          'categoryAxis': {
            'minPeriod': 'mm',
            'parseDates': true
          },
          'export': {
            'enabled': true,
            'dateFormat': 'YYYY-MM-DD HH:NN:SS'
          }
        })

        this.chart.addListener('dataUpdated', () => this.zoomChart)
        this.zoomChart()
      },

      zoomChart () {
        this.chart.zoomToIndexes(this.chartData.length - 250, this.chartData.length - 100)
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

  .time-based-area-chart {
    width: 100%;
    height: 100%;
  }
</style>
