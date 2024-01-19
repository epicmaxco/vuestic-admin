<template>
  <Line ref="chart" :chart-data="computedChartData" :chart-options="chartOptions" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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
import { computed } from 'vue'
import { useColors } from 'vuestic-ui/web-components'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler)

const chart = ref<typeof Line>()

const props = defineProps<{
  chartData: TLineChartData
  chartOptions?: TChartOptions<'line'>
}>()

const ctx = computed(() => {
  if (!chart.value) {
    return null
  }

  return chart.value.chart.ctx as CanvasRenderingContext2D
})

const { setHSLAColor, getColor } = useColors()

const colors = ['primary', 'success', 'danger', 'warning']

const computedChartData = computed(() => {
  if (!ctx.value) {
    return props.chartData
  }

  const makeGradient = (bg: string) => {
    const gradient = ctx.value!.createLinearGradient(0, 0, 0, 70)
    gradient.addColorStop(0, setHSLAColor(bg, { a: 0.3 }))
    gradient.addColorStop(1, setHSLAColor(bg, { a: 0.05 }))
    return gradient
  }

  const datasets = props.chartData.datasets.map((dataset, index) => {
    const color = getColor(colors[index % colors.length])

    return {
      ...dataset,
      fill: true,
      backgroundColor: makeGradient(color),
      borderColor: color,
    }
  })

  return { ...props.chartData, datasets }
})
</script>
