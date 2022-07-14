<template>
  <Bar :chart-options="{ ...chartOptions, ...horizontalBarOptions }" :chart-data="props.chartData" />
</template>

<script setup lang="ts">
  import { Bar } from 'vue-chartjs'
  import type { TChartOptions } from 'vue-chartjs/dist/types'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale } from 'chart.js'
  import { TBarChartData } from '../../../data/types'

  ChartJS.register(Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale)

  const horizontalBarOptions = {
    indexAxis: 'y' as 'x' | 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
  }

  const props = defineProps<{
    chartData: TBarChartData
    chartOptions?: TChartOptions<'bar'>
  }>()
</script>
