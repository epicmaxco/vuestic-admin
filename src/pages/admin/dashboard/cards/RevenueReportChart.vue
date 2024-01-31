<template>
  <div class="flex justify-center w-full h-full overflow-hidden relative">
    <canvas ref="canvas" style="max-width: 100%"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'

import type { Revenues } from '../../../../data/charts/revenueChartData'
import { earningsColor, expensesColor, formatMoney } from '../../../../data/charts/revenueChartData'

const { revenues, months } = defineProps<{
  months: string[]
  revenues: Revenues[]
}>()

Chart.register(...registerables)

const BR_THICKNESS = 4

Chart.register([
  {
    id: 'background-color',
    beforeDatasetDraw: function (chart) {
      const ctx = chart.ctx
      const config = chart.config

      config.data.datasets.forEach(function (dataset, datasetIndex) {
        const meta = chart.getDatasetMeta(datasetIndex)
        if (meta.type === 'bar') {
          const bgColor = earningsColor

          // Loop through each bar in the dataset
          meta.data.forEach(function (bar) {
            ctx.fillStyle = bgColor
            ctx.fillRect(bar.x - BR_THICKNESS / 2, 0, BR_THICKNESS, chart.chartArea.bottom)
          })
        }
      })
    },
  },
])

const canvas = ref<HTMLCanvasElement | null>(null)

const doShowChart = ref(false)

onMounted(() => {
  if (canvas.value) {
    const ctx = canvas.value.getContext('2d')
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [
            {
              // Show relative expenses ratio
              data: revenues.map(({ earning, expenses }) => (expenses / earning) * 100),
              backgroundColor: expensesColor,
              barThickness: BR_THICKNESS,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false,
              },
              border: {
                width: 0,
              },
            },
            y: {
              display: false,
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return formatMoney(Number(value))
                },
              },
            },
          },
        },
      })
    }
  }

  nextTick(() => {
    doShowChart.value = true
  })
})
</script>

<style lang="scss" scoped>
canvas {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
