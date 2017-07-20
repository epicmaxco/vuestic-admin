<template>
  <div class="charts-page">

    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Line Chart">
          <vuestic-line-chart v-bind:data="lineChartData"></vuestic-line-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Vertical Bar Chart">
          <vuestic-vertical-bar-chart v-bind:data="verticalBarChartData"></vuestic-vertical-bar-chart>
        </widget>
      </div>
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Horizontal Bar Chart">
          <vuestic-horizontal-bar-chart v-bind:data="horizontalBarChartData"></vuestic-horizontal-bar-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Bubble Chart">
          <vuestic-bubble-chart v-bind:data="bubbleChartData"></vuestic-bubble-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Pie Chart">
          <vuestic-pie-chart :data="pieChartData"></vuestic-pie-chart>
        </widget>
      </div>
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Donut Chart">
          <vuestic-donut-chart v-bind:data="donutChartData"></vuestic-donut-chart>
        </widget>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticLineChart from './vuestic-line-chart/VuesticLineChart.vue'
  import LineChartData from './vuestic-line-chart/LineChartData'
  import VuesticBubbleChart from './vuestic-bubble-chart/VuesticBubbleChart.vue'
  import BubbleChartData from './vuestic-bubble-chart/BubbleChartData'
  import VuesticPieChart from './vuestic-pie-chart/VuesticPieChart.vue'
  import PieChartData from './vuestic-pie-chart/PieChartData'
  import VuesticDonutChart from './vuestic-donut-chart/VuesticDonutChart.vue'
  import DonutChartData from './vuestic-donut-chart/DonutChartData'
  import VuesticVerticalBarChart from './vuestic-vertical-bars/VuesticVerticalBarChart.vue'
  import VerticalBarChartData from './vuestic-vertical-bars/VerticalBarChartData'
  import VuesticHorizontalBarChart from './vuestic-horizontal-bars/VuesticHorizontalBarChart.vue'
  import HorizontalBarChartData from './vuestic-horizontal-bars/HorizontalBarChartData'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'charts',
    components: {
      Widget,
      VuesticBubbleChart,
      VuesticLineChart,
      VuesticPieChart,
      VuesticDonutChart,
      VuesticVerticalBarChart,
      VuesticHorizontalBarChart
    },
    data: function () {
      return {
        bubbleChartData: BubbleChartData,
        lineChartData: LineChartData,
        pieChartData: PieChartData,
        donutChartData: DonutChartData,
        verticalBarChartData: VerticalBarChartData,
        horizontalBarChartData: HorizontalBarChartData
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
