<template>
  <Pie :chart-data="props.chartData" :chart-options="chartOptions" />
</template>

<script lang="ts" setup>
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
