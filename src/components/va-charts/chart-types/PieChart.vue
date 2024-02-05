<template>
  <Pie :data="props.data" :options="options" />
</template>

<script lang="ts" setup>
import { Pie } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
import { TPieChartData } from '../../../data/types'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const props = defineProps<{
  data: TPieChartData
  options?: ChartOptions<'pie'>
}>()
</script>
