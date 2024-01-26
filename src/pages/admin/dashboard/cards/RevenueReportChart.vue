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
              barThickness: 5,
            },
            {
              data: revenues.map(() => 100),
              backgroundColor: earningsColor,
              barThickness: 5,
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
