<template>
  <div class="charts-page">
    <div class="row">
      <widget class="col-sm-12 chart-widget"  header-text="Smoothed Line Chart">
        <smoothed-line-chart v-bind:chart-data="smoothedLineChartData"></smoothed-line-chart>
      </widget>
      <widget class="col-sm-12 chart-widget"  header-text="Column Chart">
        <column-chart v-bind:chart-data="columnChartData"></column-chart>
      </widget>
    </div>
  </div>
</template>

<script>
  import SmoothedLineChart from './smoothed-line-chart/SmoothedLineChart.vue'
  import SmoothedLineChartData from './smoothed-line-chart/SmoothedLineChartData'
  import ColumnChart from './column-chart/ColumnChart.vue'
  import ColumnChartData from './column-chart/ColumnChartData'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'charts',
    components: {
      Widget,
      SmoothedLineChart,
      ColumnChart
    },
    data: function () {
      return {
        smoothedLineChartData: SmoothedLineChartData,
        columnChartData: ColumnChartData
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chart-widget {
    min-height: 600px;
  }
</style>
