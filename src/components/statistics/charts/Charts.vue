<template>
  <div class="charts-page">
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
  import VuesticBubbleChart from './vuestic-bubble-chart/VuesticBubbleChart.vue'
  import BubbleChartData from './vuestic-bubble-chart/BubbleChartData'
  import VuesticPieChart from './vuestic-pie-chart/VuesticPieChart.vue'
  import PieChartData from './vuestic-pie-chart/PieChartData'
  import VuesticDonutChart from './vuestic-donut-chart/VuesticDonutChart.vue'
  import DonutChartData from './vuestic-donut-chart/DonutChartData'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'charts',
    components: {
      Widget,
      VuesticBubbleChart,
      VuesticPieChart,
      VuesticDonutChart
    },
    data: function () {
      return {
        bubbleChartData: BubbleChartData,
        pieChartData: PieChartData,
        donutChartData: DonutChartData
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
