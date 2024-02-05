<template>
  <Doughnut :data="props.data" :options="options" />
</template>

<script lang="ts" setup>
import { Doughnut } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
import { TDoughnutChartData } from '../../../data/types'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const props = defineProps<{
  data: TDoughnutChartData
  options?: ChartOptions<'doughnut'>
}>()
</script>
