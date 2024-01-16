<template>
  <div class="w-full">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

import type { Revenues } from '../../../data/charts/revenueChartData'
import { earningsColor, expensesColor, formatMoney } from '../../../data/charts/revenueChartData'

const { revenues, months } = defineProps<{
  months: string[]
  revenues: Revenues[]
}>()

Chart.register(...registerables)

const canvas = ref<HTMLCanvasElement | null>(null)

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
              data: revenues.map((e) => e.expenses),
              backgroundColor: expensesColor,
              barThickness: 5,
            },
            {
              data: revenues.map((e) => e.earning),
              backgroundColor: earningsColor,
              barThickness: 5,
            },
          ],
        },
        options: {
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
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                callback: function (value) {
                  return formatMoney(value)
                },
              },
            },
          },
        },
      })
    }
  }
})
</script>
