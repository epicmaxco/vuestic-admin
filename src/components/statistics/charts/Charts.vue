<template>
  <div class="charts-page">
    <div class="row">
      <widget class="col-sm-12 widget-viewport-height"  header-text="Smoothed Line Chart">
        <smoothed-line-chart v-bind:chart-data="smoothedLineChartData"></smoothed-line-chart>
      </widget>
    </div>
  </div>
</template>

<script>
  import SmoothedLineChart from './smoothed-line-chart/SmoothedLineChart.vue'
  import SmoothedLineChartData from './smoothed-line-chart/SmoothedLineChartData'
  import Widget from 'components/common/widget/Widget'

  export default {
    name: 'charts',
    components: {
      Widget,
      SmoothedLineChart
    },
    data: function () {
      return {
        smoothedLineChartData: SmoothedLineChartData
      }
    }
  }
</script>

<style lang="scss">

</style>
