<template>
  <div class="row row-equal">
    <div class="flex xs12 xl6">
      <va-card v-if="lineChartDataGenerated">
        <va-card-title>
          <h1>{{ t('dashboard.charts.trendyTrends') }}</h1>
          <div>
            <va-button
              size="small"
              color="danger"
              :disabled="datasetIndex === minIndex"
              @click="setDatasetIndex(datasetIndex - 1)"
            >
              {{ t('dashboard.charts.showInLessDetail') }}
            </va-button>
            <va-button
              class="ml-2"
              size="small"
              color="danger"
              :disabled="datasetIndex === maxIndex - 1"
              @click="setDatasetIndex(datasetIndex + 1)"
            >
              {{ t('dashboard.charts.showInMoreDetail') }}
            </va-button>
          </div>
        </va-card-title>
        <va-card-content>
          <va-chart class="chart" :data="lineChartDataGenerated" type="line" />
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card class="d-flex">
        <va-card-title>
          <h1>{{ t('dashboard.charts.loadingSpeed') }}</h1>
          <va-button icon="print" flat @click="printChart" />
        </va-card-title>
        <va-card-content v-if="doughnutChartDataGenerated">
          <va-chart ref="doughnutChart" class="chart chart--donut" :data="doughnutChartDataGenerated" type="doughnut" />
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <dashboard-contributors-chart />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { doughnutChartData, lineChartData } from '../../../data/charts'
  import { useChartData } from '../../../data/charts/composables/useChartData'
  import { usePartOfChartData } from './composables/usePartOfChartData'
  import VaChart from '../../../components/va-charts/VaChart.vue'
  import DashboardContributorsChart from './DashboardContributorsList.vue'

  const { t } = useI18n()

  const doughnutChart = ref()

  const dataGenerated = useChartData(lineChartData, 0.7)
  const doughnutChartDataGenerated = useChartData(doughnutChartData)

  const {
    dataComputed: lineChartDataGenerated,
    minIndex,
    maxIndex,
    datasetIndex,
    setDatasetIndex,
  } = usePartOfChartData(dataGenerated)

  const doughnutChartDataURL = computed(() => {
    return (document.querySelector('.chart--donut canvas') as HTMLCanvasElement | undefined)?.toDataURL('image/png')
  })

  function printChart() {
    const win = window.open('', 'Print', 'height=600,width=800')

    win?.document.write(`<br><img src='${doughnutChartDataURL.value}'/>`)

    // TODO: find better solution how to remove timeout
    setTimeout(() => {
      win?.document.close()
      win?.focus()
      win?.print()
      win?.close()
    }, 200)
  }
</script>

<style scoped>
  .chart {
    height: 400px;
  }
</style>
