<template>
  <div class="row row-equal">
    <div class="flex xs12 xl6">
      <va-card :title="$t('dashboard.charts.trendyTrends')">
        <va-button
          small
          slot="actions"
          color="danger"
          class="mr-0"
        >
          {{ $t('dashboard.charts.deleteSection') }}
        </va-button>
        <va-chart class="chart" :data="lineChartData" type="line"/>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card :title="$t('dashboard.charts.loadingSpeed')">
        <va-button
          icon="fa fa-print"
          flat
          slot="actions"
          class="mr-0"
        />
        <va-chart class="chart" :data="donutChartData" type="donut"/>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card :title="$t('dashboard.charts.topContributors')">
        <va-button flat small slot="actions" class="mr-0">
          {{ $t('dashboard.charts.showAll') }}
        </va-button>

        <div
          class="mb-3"
          v-for="(progress, idx) in progressData"
          :key="idx"
        >
          <va-progress-bar
            :value="getPercent(progress.value)"
            :color="progress.color"
          >
            {{ progress.value }} {{ $t('dashboard.charts.commits') }}
          </va-progress-bar>
          <p class="mt-2">{{ progress.text }}</p>
        </div>
      </va-card>
    </div>
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
    max-height: 400px;
  }
</style>
