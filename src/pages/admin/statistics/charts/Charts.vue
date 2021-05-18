<template>
  <div class="charts" v-if="isMounted">
    <div class="row">
      <div class="flex md6 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.verticalBarChart')"
        >
          <va-card-content>
            <va-chart :data="verticalBarChartData" type="vertical-bar"/>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.horizontalBarChart')"
        >
          <va-card-content>
            <va-chart :data="horizontalBarChartData" type="horizontal-bar"/>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md12 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.lineChart')"
        >
          <va-card-content>
            <va-chart :data="lineChartData" type="line"/>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md6 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.pieChart')"
        >
          <va-card-content>
            <va-chart :data="pieChartData" type="pie"/>
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.donutChart')"
        >
          <va-card-content>
            <va-chart :data="donutChartData" type="donut"/>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12 xs12">
        <va-card
          class="chart-widget"
          :title="$t('charts.bubbleChart')"
        >
          <va-card-content>
            <va-chart :data="bubbleChartData" type="bubble"/>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import VaChart from '@/components/va-charts/VaChart'
import { getLineChartData } from '@/data/charts/LineChartData'
import { getBubbleChartData } from '@/data/charts/BubbleChartData'
import { getPieChartData } from '@/data/charts/PieChartData'
import { getDonutChartData } from '@/data/charts/DonutChartData'
import { getVerticalBarChartData } from '@/data/charts/VerticalBarChartData'
import { getHorizontalBarChartData } from '@/data/charts/HorizontalBarChartData'
import { useGlobalConfig } from 'vuestic-ui'

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
      return useGlobalConfig().getGlobalConfig().colors
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
