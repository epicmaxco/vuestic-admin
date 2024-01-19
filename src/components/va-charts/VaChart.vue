<template>
  <component :is="chartComponent" :chart-data="data" :chart-options="chartOptions" class="va-chart" />
</template>

<script lang="ts" setup generic="T extends 'line' | 'bar' | 'bubble' | 'doughnut' | 'pie'">
import { computed } from 'vue'
import type { TChartOptions, TChartData } from 'vue-chartjs/dist/types'
import { defaultConfig, chartTypesMap } from './vaChartConfigs'

const props = defineProps<{
  data: TChartData<T>
  options?: TChartOptions<T>
  type: T
}>()

const chartComponent = chartTypesMap[props.type]

const chartOptions = computed<TChartOptions<T>>(() => ({
  ...(defaultConfig as any),
  ...props.options,
}))
</script>

<style lang="scss">
.va-chart {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    height: 100%;
    width: 100%;
  }

  canvas {
    width: 100%;
    height: auto;
    min-height: 20px;
  }
}
</style>
