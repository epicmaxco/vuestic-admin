<template>
  <Bubble :chart-options="chartOptions" :chart-data="props.chartData" />
</template>

<script setup lang="ts">
  import { Bubble } from 'vue-chartjs'
  import { TChartData, TChartOptions } from 'vue-chartjs/dist/types'
  import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

  const props = defineProps<{
    chartData: TChartData<'bubble'>
    chartOptions?: TChartOptions<'bubble'>
  }>()
</script>
