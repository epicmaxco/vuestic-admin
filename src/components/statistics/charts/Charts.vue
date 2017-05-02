<template>
  <div class="charts-page">
    <div class="row">
      <widget class="col-sm-12 chart-widget"  header-text="Smoothed Line Chart">
        <smoothed-line-chart v-bind:chart-data="smoothedLineChartData"></smoothed-line-chart>
      </widget>
      <widget class="col-sm-12 chart-widget"  header-text="Column Chart">
        <column-chart v-bind:chart-data="columnChartData"></column-chart>
      </widget>
      <widget class="col-sm-12 chart-widget"  header-text="Column Chart">
        <time-based-area-chart v-bind:chart-data="timeBasedAreaChartData"></time-based-area-chart>
      </widget>
    </div>
  </div>
</template>

<script>
  import SmoothedLineChart from './smoothed-line-chart/SmoothedLineChart.vue'
  import SmoothedLineChartData from './smoothed-line-chart/SmoothedLineChartData'
  import ColumnChart from './column-chart/ColumnChart.vue'
  import ColumnChartData from './column-chart/ColumnChartData'
  import TimeBasedAreaChart from './time-based-area-chart/TimeBasedAreaChart.vue'
  import TimeBasedAreaChartData from './time-based-area-chart/TimeBasedAreaChartData'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'charts',
    components: {
      Widget,
      SmoothedLineChart,
      ColumnChart,
      TimeBasedAreaChart
    },
    data: function () {
      return {
        smoothedLineChartData: SmoothedLineChartData,
        columnChartData: ColumnChartData,
        timeBasedAreaChartData: TimeBasedAreaChartData
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chart-widget {
    min-height: 600px;
  }
</style>
