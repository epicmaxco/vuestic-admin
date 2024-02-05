<template>
  <Bubble :data="props.data" :options="options" />
</template>

<script lang="ts" setup>
import { Bubble } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'
import { TBubbleChartData } from '../../../data/types'

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

const props = defineProps<{
  data: TBubbleChartData
  options?: ChartOptions<'bubble'>
}>()
</script>
