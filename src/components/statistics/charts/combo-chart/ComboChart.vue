<template>
  <div class='combo-chart'></div>
</template>

<script>
  import 'amcharts3'
  import 'amcharts3/amcharts/plugins/responsive/responsive.js'
  import 'amcharts3/amcharts/serial.js'
  import 'amcharts3/amcharts/themes/light'

  export default {
    name: 'combo-chart',

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
          'pathToImages': 'https://www.amcharts.com/lib/3/images/',
          'theme': 'light',
          'dataDateFormat': 'YYYY-MM-DD',
          'precision': 2,
          'valueAxes': [{
            'id': 'v1',
            'title': 'Sales',
            'position': 'left',
            'autoGridCount': false,
            'labelFunction': function (value) {
              return '$' + Math.round(value) + 'M'
            }
          }, {
            'id': 'v2',
            'title': 'Market Days',
            'gridAlpha': 0,
            'position': 'right',
            'autoGridCount': false
          }],
          'graphs': [{
            'id': 'g3',
            'valueAxis': 'v1',
            'lineColor': '#e1ede9',
            'fillColors': '#e1ede9',
            'fillAlphas': 1,
            'type': 'column',
            'title': 'Actual Sales',
            'valueField': 'sales2',
            'clustered': false,
            'columnWidth': 0.5,
            'legendValueText': '$[[value]]M',
            'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          }, {
            'id': 'g4',
            'valueAxis': 'v1',
            'lineColor': '#62cf73',
            'fillColors': '#62cf73',
            'fillAlphas': 1,
            'type': 'column',
            'title': 'Target Sales',
            'valueField': 'sales1',
            'clustered': false,
            'columnWidth': 0.3,
            'legendValueText': '$[[value]]M',
            'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          }, {
            'id': 'g1',
            'valueAxis': 'v2',
            'bullet': 'round',
            'bulletBorderAlpha': 1,
            'bulletColor': '#FFFFFF',
            'bulletSize': 5,
            'hideBulletsCount': 50,
            'lineThickness': 2,
            'lineColor': '#20acd4',
            'type': 'smoothedLine',
            'title': 'Market Days',
            'useLineColorForBulletBorder': true,
            'valueField': 'market1',
            'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
          }, {
            'id': 'g2',
            'valueAxis': 'v2',
            'bullet': 'round',
            'bulletBorderAlpha': 1,
            'bulletColor': '#FFFFFF',
            'bulletSize': 5,
            'hideBulletsCount': 50,
            'lineThickness': 2,
            'lineColor': '#e1ede9',
            'type': 'smoothedLine',
            'dashLength': 5,
            'title': 'Market Days ALL',
            'useLineColorForBulletBorder': true,
            'valueField': 'market2',
            'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
          }],
          'chartScrollbar': {
            'graph': 'g1',
            'oppositeAxis': false,
            'offset': 30,
            'scrollbarHeight': 50,
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
            'pan': true,
            'valueLineEnabled': true,
            'valueLineBalloonEnabled': true,
            'cursorAlpha': 0,
            'valueLineAlpha': 0.2
          },
          'categoryField': 'date',
          'categoryAxis': {
            'parseDates': true,
            'dashLength': 1,
            'minorGridEnabled': true
          },
          'legend': {
            'useGraphSettings': true,
            'position': 'top'
          },
          'balloon': {
            'borderThickness': 1,
            'shadowAlpha': 0
          },
          'export': {
            'enabled': true
          },
          'dataProvider': this.chartData
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

  .combo-chart {
    width: 100%;
    height: 100%;
  }
</style>
