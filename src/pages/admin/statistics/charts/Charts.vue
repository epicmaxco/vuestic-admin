<template>
  <div class="charts">
    <div class="grid grid-cols-12 gap-6">
      <VaCard v-if="barChartDataGenerated" class="chart-widget md:col-span-6 col-span-12">
        <VaCardTitle>{{ t('charts.verticalBarChart') }}</VaCardTitle>
        <VaCardContent>
          <VaChart :data="barChartDataGenerated" type="bar" />
        </VaCardContent>
      </VaCard>

      <VaCard v-if="horizontalBarChartDataGenerated" class="chart-widget md:col-span-6 col-span-12">
        <VaCardTitle>{{ t('charts.horizontalBarChart') }}</VaCardTitle>
        <VaCardContent>
          <VaChart :data="horizontalBarChartDataGenerated" type="horizontal-bar" />
        </VaCardContent>
      </VaCard>

      <VaCard v-if="lineChartDataGenerated" class="chart-widget col-span-12">
        <VaCardTitle>{{ t('charts.lineChart') }}</VaCardTitle>
        <VaCardContent>
          <VaChart :data="lineChartDataGenerated" type="line" />
        </VaCardContent>
      </VaCard>

      <VaCard v-if="pieChartDataGenerated" class="chart-widget md:col-span-6 col-span-12">
        <VaCardTitle>{{ t('charts.pieChart') }}</VaCardTitle>
        <VaCardContent>
          <VaChart :data="pieChartDataGenerated" type="pie" />
        </VaCardContent>
      </VaCard>

      <VaCard v-if="doughnutChartDataGenerated" class="chart-widget md:col-span-6 col-span-12">
        <VaCardTitle>{{ t('charts.donutChart') }}</VaCardTitle>
        <VaCardContent>
          <VaChart :data="doughnutChartDataGenerated" type="doughnut" />
        </VaCardContent>
      </VaCard>

      <VaCard v-if="bubbleChartDataGenerated" class="chart-widget col-span-12">
        <VaCardTitle>{{ t('charts.bubbleChart') }}</VaCardTitle>
        <VaCardContent>
          <VaChart :data="bubbleChartDataGenerated" type="bubble" />
        </VaCardContent>
      </VaCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useChartData } from '../../../../data/charts/composables/useChartData'
import {
  lineChartData,
  doughnutChartData,
  bubbleChartData,
  pieChartData,
  barChartData,
  horizontalBarChartData,
} from '../../../../data/charts'
import VaChart from '../../../../components/va-charts/VaChart.vue'

const lineChartDataGenerated = useChartData(lineChartData, 0.7)
const doughnutChartDataGenerated = useChartData(doughnutChartData)
const bubbleChartDataGenerated = useChartData(bubbleChartData, 0.9)
const pieChartDataGenerated = useChartData(pieChartData)
const barChartDataGenerated = useChartData(barChartData)
const horizontalBarChartDataGenerated = useChartData(horizontalBarChartData)

const { t } = useI18n()
</script>

<style lang="scss">
.chart-widget {
  .va-card__content {
    height: 450px;
  }
}
</style>
