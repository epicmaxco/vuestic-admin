<template>
  <VaCard class="p-4 relative">
    <h1 class="card-title text-tag text-secondary font-bold uppercase">Monthly Earnings</h1>
    <div class="p-1 bg-black rounded absolute right-4 top-4">
      <VaIcon name="attach_money" color="#fff" size="large"/>
    </div>
    <section>
      <div class="text-2xl font-bold mb-2">$6,820</div>
      <p class="text-xs text-success">
        <VaIcon name="arrow_upward"/>
        25.36%
        <span class="text-secondary"> last month</span>
      </p>
    </section>
    <div class="w-full flex items-center">
      <VaChart :data="chartData" class="h-24" type="line" :options="options"/>
    </div>
  </VaCard>
</template>

<script setup lang="ts">
import { VaCard } from 'vuestic-ui'
import VaChart from '../../../../components/va-charts/VaChart.vue'
import { useChartData } from '../../../../data/charts/composables/useChartData'
import { lineChartData } from '../../../../data/charts/lineChartData'

const chartData = useChartData(lineChartData)

const options = {
  scales: {
    x: {
      display: false,
      grid: {
        display: false, // Disable X-axis grid lines ("net")
      },
    },
    y: {
      display: false,
      grid: {
        display: false, // Disable Y-axis grid lines ("net")
      },
      ticks: {
        display: false, // Hide Y-axis values
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}
</script>
