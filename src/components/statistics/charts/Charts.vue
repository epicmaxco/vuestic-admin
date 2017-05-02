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
      <widget class="col-sm-12 chart-widget"  header-text="Column Chart">
        <layered-column-chart v-bind:chart-data="layeredColumnChartData"></layered-column-chart>
      </widget>
      <widget class="col-sm-12 chart-widget"  header-text="Clustered Bar Chart">
        <clustered-bar-chart v-bind:chart-data="clusteredBarChartData"></clustered-bar-chart>
      </widget>
      <widget class="col-sm-12 chart-widget"  header-text="Pie Chart">
        <pie-chart v-bind:chart-data="pieChartData"></pie-chart>
      </widget>
      <widget class="col-sm-12 chart-widget"  header-text="Donut Chart">
        <donut-chart v-bind:chart-data="donutChartData"></donut-chart>
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
  import LayeredColumnChart from './layered-column-chart/LayeredColumnChart.vue'
  import LayeredColumnChartData from './layered-column-chart/LayeredColumnChartData'
  import ClusteredBarChart from './clustered-bar-chart/ClusteredBarChart.vue'
  import ClusteredBarChartData from './clustered-bar-chart/ClusteredBarChartData'
  import PieChart from './pie-chart/PieChart.vue'
  import PieChartData from './pie-chart/PieChartData'
  import DonutChart from './donut-chart/DonutChart.vue'
  import DonutChartData from './donut-chart/DonutChartData'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'charts',
    components: {
      Widget,
      SmoothedLineChart,
      ColumnChart,
      TimeBasedAreaChart,
      LayeredColumnChart,
      ClusteredBarChart,
      PieChart,
      DonutChart
    },
    data: function () {
      return {
        smoothedLineChartData: SmoothedLineChartData,
        columnChartData: ColumnChartData,
        timeBasedAreaChartData: TimeBasedAreaChartData,
        layeredColumnChartData: LayeredColumnChartData,
        clusteredBarChartData: ClusteredBarChartData,
        pieChartData: PieChartData,
        donutChartData: DonutChartData
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chart-widget {
    min-height: 600px;
  }
</style>
