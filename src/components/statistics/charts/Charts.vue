<template>
  <div class="charts-page">
    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Combo Chart">
          <combo-chart v-bind:chart-data="comboChartData"></combo-chart>
        </widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Column Chart">
          <column-chart v-bind:chart-data="columnChartData"></column-chart>
        </widget>
      </div>
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Time Based Area Chart">
          <time-based-area-chart v-bind:chart-data="timeBasedAreaChartData"></time-based-area-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Smoothed Line Chart">
          <smoothed-line-chart v-bind:chart-data="smoothedLineChartData"></smoothed-line-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Layered Column Chart">
          <layered-column-chart v-bind:chart-data="layeredColumnChartData"></layered-column-chart>
        </widget>
      </div>
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Clustered Bar Chart">
          <clustered-bar-chart v-bind:chart-data="clusteredBarChartData"></clustered-bar-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Pie Chart">
          <pie-chart v-bind:chart-data="pieChartData"></pie-chart>
        </widget>
      </div>
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Donut Chart">
          <donut-chart v-bind:chart-data="donutChartData"></donut-chart>
        </widget>
      </div>
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
  import ComboChart from './combo-chart/ComboChart.vue'
  import ComboChartData from './combo-chart/ComboChartData'
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
      DonutChart,
      ComboChart
    },
    data: function () {
      return {
        smoothedLineChartData: SmoothedLineChartData,
        columnChartData: ColumnChartData,
        timeBasedAreaChartData: TimeBasedAreaChartData,
        layeredColumnChartData: LayeredColumnChartData,
        clusteredBarChartData: ClusteredBarChartData,
        pieChartData: PieChartData,
        donutChartData: DonutChartData,
        comboChartData: ComboChartData
      }
    }
  }
</script>

<style lang="scss">
  .widget.chart-widget {
    .widget-body {
      height: 550px;
    }
  }
</style>
