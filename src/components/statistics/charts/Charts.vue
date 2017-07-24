<template>
  <div class="charts-page">
    <div class="row">
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Vertical Bar Chart">
          <vuestic-chart v-bind:data="verticalBarChartData" type="vertical-bar"></vuestic-chart>
        </widget>
      </div>
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Horizontal Bar Chart">
          <vuestic-chart v-bind:data="horizontalBarChartData" type="horizontal-bar"></vuestic-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Line Chart">
          <vuestic-chart v-bind:data="lineChartData" type="line"></vuestic-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Pie Chart">
          <vuestic-chart :data="pieChartData" type="pie"></vuestic-chart>
        </widget>
      </div>
      <div class="col-md-6">
        <widget class="chart-widget"  header-text="Donut Chart">
          <vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <widget class="chart-widget"  header-text="Bubble Chart">
          <vuestic-chart v-bind:data="bubbleChartData" type="bubble"></vuestic-chart>
        </widget>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticChart from 'components/common/vuestic-chart/VuesticChart.vue'
  import LineChartData from './LineChartData'
  import BubbleChartData from './BubbleChartData'
  import PieChartData from './PieChartData'
  import DonutChartData from './DonutChartData'
  import VerticalBarChartData from './VerticalBarChartData'
  import HorizontalBarChartData from './HorizontalBarChartData'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'charts',
    components: {
      Widget,
      VuesticChart
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
