<template>
  <Bar :chart-options="{ ...chartOptions, ...horizontalBarOptions }" :chart-data="props.chartData" />
</template>

<script setup lang="ts">
  import { Bar } from 'vue-chartjs'
  import { TChartData, TChartOptions } from 'vue-chartjs/dist/types'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale } from 'chart.js'

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
    chartData: TChartData<'bar'>
    chartOptions?: TChartOptions<'bar'>
  }>()
</script>
