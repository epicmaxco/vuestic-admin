<template>
  <Bar :data="props.data" :options="{ ...options, ...horizontalBarOptions }" />
</template>

<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
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
  data: TBarChartData
  options?: ChartOptions<'bar'>
}>()
</script>
