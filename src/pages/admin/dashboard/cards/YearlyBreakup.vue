<template>
  <VaCard>
    <VaCardTitle class="pb-0!">
      <h1 class="card-title text-secondary font-bold uppercase">Yearly Breakup</h1>
    </VaCardTitle>
    <VaCardContent class="flex flex-row gap-1">
      <section class="w-1/2">
        <div class="text-xl font-bold mb-2">$36,358</div>
        <p class="text-xs text-success whitespace-nowrap">
          <VaIcon name="arrow_outward" />
          +2,5%
          <span class="text-secondary"> last year</span>
        </p>
        <div class="my-4 gap-2 flex flex-col">
          <div class="flex items-center">
            <span class="inline-block w-2 h-2 mr-2" :style="{ backgroundColor: earningsBackground }"></span>
            <span class="text-secondary">Earnings</span>
          </div>
          <div class="flex items-center">
            <span class="inline-block w-2 h-2 mr-2" :style="{ backgroundColor: profitBackground }"></span>
            <span class="text-secondary">Profit</span>
          </div>
        </div>
      </section>
      <div class="w-1/2 flex items-center h-full flex-1 lg:pl-16 pl-2 -mr-1">
        <VaChart
          v-if="chartData"
          :data="chartData"
          class="chart chart--donut h-[90px] w-[90px]"
          type="doughnut"
          :options="options"
        />
      </div>
    </VaCardContent>
  </VaCard>
</template>

<script setup lang="ts">
import { VaCard } from 'vuestic-ui'
import VaChart from '../../../../components/va-charts/VaChart.vue'
import { useChartData } from '../../../../data/charts/composables/useChartData'
import { doughnutChartData, profitBackground, earningsBackground } from '../../../../data/charts/doughnutChartData'
import { doughnutConfig } from '../../../../components/va-charts/vaChartConfigs'
import { ChartOptions } from 'chart.js'
import { externalTooltipHandler } from '../../../../components/va-charts/external-tooltip'

const chartData = useChartData(doughnutChartData)

const options: ChartOptions<'doughnut'> = {
  ...doughnutConfig,
  plugins: {
    ...doughnutConfig.plugins,
    tooltip: {
      // Chart to small to show tooltips
      enabled: false,
      position: 'nearest',
      external: externalTooltipHandler,
    },
  },
  circumference: 360 * (chartData.value.datasets[0].data.reduce((acc: number, d: number) => acc + d, 0) / 800),
}
</script>
