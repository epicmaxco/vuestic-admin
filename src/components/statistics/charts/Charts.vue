<template>
  <div class="charts">
    <div class="va-row">
      <div class="flex md6 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.verticalBarChart')"
        >
          <va-chart :data="verticalBarChartData" type="vertical-bar"/>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.horizontalBarChart')"
        >
          <va-chart :data="horizontalBarChartData" type="horizontal-bar"/>
        </va-card>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.lineChart')"
        >
          <va-chart :data="lineChartData" type="line"/>
        </va-card>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md6 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.pieChart')"
        >
          <va-chart :data="pieChartData" type="pie"/>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.donutChart')"
        >
          <va-chart :data="donutChartData" type="donut"/>
        </va-card>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.bubbleChart')"
        >
          <va-chart :data="bubbleChartData" type="bubble"/>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getLineChartData } from '../../../data/charts/LineChartData'
import BubbleChartData from '../../../data/charts/BubbleChartData'
import PieChartData from '../../../data/charts/PieChartData'
import DonutChartData from '../../../data/charts/DonutChartData'
import VerticalBarChartData from '../../../data/charts/VerticalBarChartData'
import HorizontalBarChartData from '../../../data/charts/HorizontalBarChartData'
import SidebarLink from '../../admin/app-sidebar/components/SidebarLink'

export default {
  name: 'charts',
  components: {
    SidebarLink,
  },
  data: () => ({
    bubbleChartData: BubbleChartData,
    lineChartData: getLineChartData(),
    pieChartData: PieChartData,
    donutChartData: DonutChartData,
    verticalBarChartData: VerticalBarChartData,
    horizontalBarChartData: HorizontalBarChartData,
  }),
  methods: {
    refreshData () {
      this.lineChartData = getLineChartData()
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
