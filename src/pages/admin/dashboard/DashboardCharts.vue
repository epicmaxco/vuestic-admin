<template>
  <div class="grid grid-cols-12 gap-6">
    <VaCard v-if="lineChartDataGenerated" class="col-span-12 lg:col-span-6">
      <VaCardTitle>
        <h1>{{ t('dashboard.charts.trendyTrends') }}</h1>
        <div>
          <VaButton
            :disabled="datasetIndex === minIndex"
            class="m-1"
            color="danger"
            size="small"
            @click="setDatasetIndex(datasetIndex - 1)"
          >
            {{ t('dashboard.charts.showInLessDetail') }}
          </VaButton>
          <VaButton
            :disabled="datasetIndex === maxIndex - 1"
            class="m-1"
            color="danger"
            size="small"
            @click="setDatasetIndex(datasetIndex + 1)"
          >
            {{ t('dashboard.charts.showInMoreDetail') }}
          </VaButton>
        </div>
      </VaCardTitle>
      <VaCardContent>
        <VaChart :data="lineChartDataGenerated" class="chart" type="line" />
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12 sm:col-span-6 lg:col-span-3">
      <VaCardTitle>
        <h1>{{ t('dashboard.charts.loadingSpeed') }}</h1>
        <VaButton icon="print" plain @click="printChart" />
      </VaCardTitle>
      <VaCardContent v-if="doughnutChartDataGenerated">
        <VaChart ref="doughnutChart" :data="doughnutChartDataGenerated" class="chart chart--donut" type="doughnut" />
      </VaCardContent>
    </VaCard>

    <DashboardContributorsChart class="col-span-12 sm:col-span-6 lg:col-span-3" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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

function printChart() {
  const windowObjectReference = window.open('', 'Print', 'height=600,width=800') as Window

  const img = windowObjectReference.document.createElement('img')

  img.src = `${(document.querySelector('.chart--donut canvas') as HTMLCanvasElement | undefined)?.toDataURL(
    'image/png',
  )}`

  img.onload = () => {
    windowObjectReference?.document.body.appendChild(img)
  }

  windowObjectReference.print()

  windowObjectReference.onafterprint = () => {
    windowObjectReference?.close()
  }
}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
