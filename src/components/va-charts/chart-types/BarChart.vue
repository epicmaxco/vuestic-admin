<template>
  <Bar :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import type { TChartOptions } from 'vue-chartjs/dist/types'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale)

defineProps<{
  chartData: any
  chartOptions?: TChartOptions<'bar'>
}>()
</script>
