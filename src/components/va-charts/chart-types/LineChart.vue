<template>
  <Line :chart-data="props.chartData" :chart-options="chartOptions" />
</template>

<script lang="ts" setup>
import { Line } from 'vue-chartjs'
import type { TChartOptions } from 'vue-chartjs/dist/types'
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
import { TLineChartData } from '../../../data/types'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler)

const props = defineProps<{
  chartData: TLineChartData
  chartOptions?: TChartOptions<'line'>
}>()
</script>
