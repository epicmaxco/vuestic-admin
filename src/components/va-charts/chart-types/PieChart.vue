<template>
  <Pie :chart-options="chartOptions" :chart-data="props.chartData" />
</template>

<script setup lang="ts">
  import { Pie } from 'vue-chartjs'
  import type { TChartOptions } from 'vue-chartjs/dist/types'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
  import { TPieChartData } from '../../../data/types'

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

  const props = defineProps<{
    chartData: TPieChartData
    chartOptions?: TChartOptions<'pie'>
  }>()
</script>
