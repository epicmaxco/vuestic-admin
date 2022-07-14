<template>
  <Bubble :chart-options="chartOptions" :chart-data="props.chartData" />
</template>

<script setup lang="ts">
  import { Bubble } from 'vue-chartjs'
  import type { TChartOptions } from 'vue-chartjs/dist/types'
  import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'
  import { TBubbleChartData } from '../../../data/types'

  ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

  const props = defineProps<{
    chartData: TBubbleChartData
    chartOptions?: TChartOptions<'bubble'>
  }>()
</script>
