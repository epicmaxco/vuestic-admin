<template>
  <div class="row row-equal">
    <div class="flex xs12 xl6">
      <va-card v-if="lineChartData">
        <va-card-title>
          <h1>{{ t('dashboard.charts.trendyTrends') }}</h1>
          <div class="mr-0 text-right">
            <va-button size="small" color="danger" :disabled="isDisabled" @click="deleteSection">
              {{ t('dashboard.charts.showInMoreDetail') }}
            </va-button>
          </div>
        </va-card-title>
        <va-card-content>
          <va-chart ref="lineChart" class="chart" :data="lineChartData" type="line" />
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card class="d-flex">
        <va-card-title>
          <h1>{{ t('dashboard.charts.loadingSpeed') }}</h1>
          <va-button icon="print" flat @click="printChart" />
        </va-card-title>
        <va-card-content v-if="donutChartData">
          <va-chart ref="donutChart" class="chart chart--donut" :data="donutChartData" type="donut" />
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <dashboard-contributors-chart />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import { useGlobalConfig } from 'vuestic-ui'
  import { useI18n } from 'vue-i18n'
  import { useLineChartData } from '../../../data/charts/LineChartData'
  import { useDonutChartData } from '../../../data/charts/DonutChartData'
  import VaChart from '../../../components/va-charts/VaChart.vue'
  import DashboardContributorsChart from './DashboardContributorsList.vue'

  const { getGlobalConfig } = useGlobalConfig()
  const { t } = useI18n()
  const { getLineChartData } = useLineChartData()
  const { getDonutChartData } = useDonutChartData()

  const lineChart = ref()
  const donutChart = ref()

  const lineChartData = ref<ReturnType<typeof getLineChartData>>()
  const donutChartData = ref<ReturnType<typeof getDonutChartData>>()

  const lineChartFirstMonthIndex = ref(0)

  const theme = computed(() => getGlobalConfig().colors!)

  const isDisabled = computed(() => (lineChartData.value?.labels?.length ?? 0) <= 2)

  const donutChartDataURL = computed(() => {
    return (document.querySelector('.chart--donut canvas') as HTMLCanvasElement | undefined)?.toDataURL('image/png')
  })

  watch(theme, (newTheme) => {
    if (newTheme) {
      lineChartData.value = getLineChartData(lineChartFirstMonthIndex.value)
      donutChartData.value = getDonutChartData()
    }
  })

  lineChartData.value = getLineChartData(lineChartFirstMonthIndex.value)
  donutChartData.value = getDonutChartData()

  function deleteSection() {
    lineChartFirstMonthIndex.value += 1
    lineChartData.value = getLineChartData(lineChartFirstMonthIndex.value)
  }

  function printChart() {
    const win = window.open('', 'Print', 'height=600,width=800')

    win?.document.write(`<br><img src='${donutChartDataURL.value}'/>`)

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
  .text-right {
    text-align: right;
  }
</style>
