<template>
    <div >
      <va-card :title="$t('dashboard.charts.trendyTrends')">
        <va-chart class="chart" :data="lineChartData" type="line"/>
      </va-card>
    </div>
</template>

<script>
import { getDonutChartData } from '../../data/charts/DonutChartData'
import { getLineChartData } from '../../data/charts/LineChartData'

export default {
  name: 'dashboard-charts',
  data () {
    return {
      lineChartData: getLineChartData(this.$themes),
      donutChartData: getDonutChartData(this.$themes),
      progressMax: 328,
      progressData: [{
        color: 'success',
        value: '328',
        text: 'Nathaniel Andrews',
      }, {
        color: 'info',
        value: '271',
        text: 'Gora Gilbert',
      }, {
        color: 'warning',
        value: '69',
        text: 'Landon Hudson',
      }, {
        color: 'danger',
        value: '31',
        text: 'Aiden Berry',
      }, {
        color: 'gray',
        value: '28',
        text: 'Winnie Holloway',
      }],
    }
  },
  watch: {
    '$themes.primary' () {
      this.lineChartData = getLineChartData(this.$themes)
      this.donutChartData = getDonutChartData(this.$themes)
    },

    '$themes.info' () {
      this.lineChartData = getLineChartData(this.$themes)
      this.donutChartData = getDonutChartData(this.$themes)
    },

    '$themes.danger' () {
      this.donutChartData = getDonutChartData(this.$themes)
    },
  },
  methods: {
    getPercent (val) {
      return (val / this.progressMax) * 100
    },
  },
}
</script>

<style scoped>
  .chart {
    height: 750px;
  }
</style>
