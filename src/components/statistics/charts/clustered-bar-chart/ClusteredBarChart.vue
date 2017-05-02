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
          'type': 'serial',
          'theme': 'light',
          'categoryField': 'year',
          'rotate': true,
          'startDuration': 1,
          'categoryAxis': {
            'gridPosition': 'start',
            'position': 'left'
          },
          'trendLines': [],
          'graphs': [
            {
              'balloonText': 'Income:[[value]]',
              'fillAlphas': 0.8,
              'id': 'AmGraph-1',
              'lineAlpha': 0.2,
              'title': 'Income',
              'type': 'column',
              'valueField': 'income'
            },
            {
              'balloonText': 'Expenses:[[value]]',
              'fillAlphas': 0.8,
              'id': 'AmGraph-2',
              'lineAlpha': 0.2,
              'title': 'Expenses',
              'type': 'column',
              'valueField': 'expenses'
            }
          ],
          'guides': [],
          'valueAxes': [
            {
              'id': 'ValueAxis-1',
              'position': 'top',
              'axisAlpha': 0
            }
          ],
          'allLabels': [],
          'balloon': {},
          'titles': [],
          'dataProvider': this.chartData,
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
