<template>
  <div class='smoothed-line-chart'></div>
</template>

<script>
  import 'amcharts3'
  import 'amcharts3/amcharts/plugins/responsive/responsive.js'
  import 'amcharts3/amcharts/serial.js'
  import 'amcharts3/amcharts/themes/light'

  export default {
    name: 'smoothed-line-chart',

    props: ['chartData'],

    methods: {
      drawChart () {
        /* global AmCharts */
        var chart = AmCharts.makeChart(this.$el, {
          'type': 'serial',
          'theme': 'light',
          'path': '/node_modules/amcharts3',
          'marginTop': 0,
          'marginRight': 80,
          'dataProvider': this.chartData,
          'valueAxes': [{
            'axisAlpha': 0,
            'position': 'left'
          }],
          'graphs': [{
            'id': 'g1',
            'balloonText': '[[category]]<br><b><span style="font-size:14px">[[value]]</span></b>',
            'bullet': 'round',
            'bulletSize': 8,
            'lineColor': '#d1655d',
            'lineThickness': 2,
            'negativeLineColor': '#637bb6',
            'type': 'smoothedLine',
            'valueField': 'value'
          }],
          'chartScrollbar': {
            'graph': 'g1',
            'gridAlpha': 0,
            'color': '#888888',
            'scrollbarHeight': 55,
            'backgroundAlpha': 0,
            'selectedBackgroundAlpha': 0.1,
            'selectedBackgroundColor': '#888888',
            'graphFillAlpha': 0,
            'autoGridCount': true,
            'selectedGraphFillAlpha': 0,
            'graphLineAlpha': 0.2,
            'graphLineColor': '#c2c2c2',
            'selectedGraphLineColor': '#888888',
            'selectedGraphLineAlpha': 1

          },
          'chartCursor': {
            'categoryBalloonDateFormat': 'YYYY',
            'cursorAlpha': 0,
            'valueLineEnabled': true,
            'valueLineBalloonEnabled': true,
            'valueLineAlpha': 0.5,
            'fullWidth': true
          },
          'dataDateFormat': 'YYYY',
          'categoryField': 'year',
          'categoryAxis': {
            'minPeriod': 'YYYY',
            'parseDates': true,
            'minorGridAlpha': 0.1,
            'minorGridEnabled': true
          },
          'export': {
            'enabled': true
          }
        })

        chart.addListener('rendered', zoomChart)
        if (chart.zoomChart) {
          chart.zoomChart()
        }

        function zoomChart () {
          chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55))
        }
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

  .smoothed-line-chart {
    width: 100%;
    height: 100%;
  }
</style>
