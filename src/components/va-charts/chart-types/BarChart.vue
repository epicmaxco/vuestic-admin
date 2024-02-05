<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale)

defineProps<{
  data: any
  options?: ChartOptions<'bar'>
}>()
</script>
