<template>
  <Line ref="chart" :data="computedChartData" :options="options" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
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
import { computed } from 'vue'
import { useColors } from 'vuestic-ui'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler)

const chart = ref<typeof Line>()

const props = defineProps<{
  data: TLineChartData
  options?: ChartOptions<'line'>
}>()

const ctx = computed(() => {
  if (!chart.value) {
    return null
  }

  return chart.value.chart?.ctx ?? null
})

const { setHSLAColor, getColor } = useColors()

const colors = ['primary', 'success', 'danger', 'warning']

const computedChartData = computed<TLineChartData>(() => {
  if (!ctx.value) {
    return props.data
  }

  const makeGradient = (bg: string) => {
    const gradient = ctx.value!.createLinearGradient(0, 0, 0, 90)
    gradient.addColorStop(0, setHSLAColor(bg, { a: 0.4 }))
    gradient.addColorStop(1, setHSLAColor(bg, { a: 0.0 }))
    return gradient
  }

  const datasets = props.data.datasets.map((dataset, index) => {
    const color = getColor(colors[index % colors.length])

    return {
      ...dataset,
      fill: true,
      backgroundColor: makeGradient(color),
      borderColor: color,
      pointRadius: 0,
      borderWidth: 2,
    }
  })

  return { ...props.data, datasets }
})
</script>
