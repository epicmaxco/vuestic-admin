<template>
  <div class="charts">
    <div class="row">
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ $t('charts.verticalBarChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="verticalBarChartData" type="vertical-bar"/>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ $t('charts.horizontalBarChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="horizontalBarChartData" type="horizontal-bar"/>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ $t('charts.lineChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="lineChartData" type="line"/>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ $t('charts.pieChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="pieChartData" type="pie"/>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ $t('charts.donutChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="donutChartData" type="donut"/>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ $t('charts.bubbleChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="bubbleChartData" type="bubble"/>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getLineChartData } from '../../../data/charts/LineChartData'
import { getBubbleChartData } from '../../../data/charts/BubbleChartData'
import { getPieChartData } from '../../../data/charts/PieChartData'
import { getDonutChartData } from '../../../data/charts/DonutChartData'
import { getVerticalBarChartData } from '../../../data/charts/VerticalBarChartData'
import { getHorizontalBarChartData } from '../../../data/charts/HorizontalBarChartData'
import VaChart from './va-charts/VaChart'

export default {
  name: 'charts',
  components: { VaChart },
  data () {
    return {
      bubbleChartData: getBubbleChartData(this.$themes),
      lineChartData: getLineChartData(this.$themes),
      pieChartData: getPieChartData(this.$themes),
      donutChartData: getDonutChartData(this.$themes),
      verticalBarChartData: getVerticalBarChartData(this.$themes),
      horizontalBarChartData: getHorizontalBarChartData(this.$themes),
    }
  },
  methods: {
    refreshData () {
      this.lineChartData = getLineChartData(this.$themes)
    },
  },
}
</script>

<style lang="scss">
.chart-widget {
  .va-card__body {
    height: 550px;
  }
}
</style>
