<template>
  <Line :chart-options="chartOptions" :chart-data="props.chartData" />
</template>

<script setup lang="ts">
  import { Line } from 'vue-chartjs'
  import { TChartData, TChartOptions } from 'vue-chartjs/dist/types'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler,
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler)

  const props = defineProps<{
    chartData: TChartData<'line'>
    chartOptions?: TChartOptions<'line'>
  }>()
</script>
