<template>
  <div class="charts" v-if="isMounted">
    <div class="row">
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

    <div class="row">
      <div class="flex md12 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.lineChart')"
        >
          <va-chart :data="lineChartData" type="line"/>
        </va-card>
      </div>
    </div>

    <div class="row">
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
    <div class="row">
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
import VaChart from '@/components/va-charts/VaChart'
import { getLineChartData } from './data/LineChartData'
import { getBubbleChartData } from './data/BubbleChartData'
import { getPieChartData } from './data/PieChartData'
import { getDonutChartData } from './data/DonutChartData'
import { getVerticalBarChartData } from './data/VerticalBarChartData'
import { getHorizontalBarChartData } from './data/HorizontalBarChartData'
import { useTheme } from 'vuestic-ui'

export default {
  name: 'charts',
  components: { VaChart },
  data () {
    return {
      bubbleChartData: null,
      lineChartData: null,
      pieChartData: null,
      donutChartData: null,
      verticalBarChartData: null,
      horizontalBarChartData: null,
      isMounted: false,
    }
  },
  mounted() {
    this.isMounted = true
    this.bubbleChartData = getBubbleChartData(this.theme)
    this.lineChartData = getLineChartData(this.theme)
    this.pieChartData = getPieChartData(this.theme)
    this.donutChartData = getDonutChartData(this.theme)
    this.verticalBarChartData = getVerticalBarChartData(this.theme)
    this.horizontalBarChartData = getHorizontalBarChartData(this.theme)
  },
  computed: {
    theme() {
      return useTheme().getTheme()
    }
  },
  methods: {
    refreshData () {
      this.lineChartData = getLineChartData(this.theme)
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
