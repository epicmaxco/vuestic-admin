<template>
  <VaCard class="p-4 flex flex-col">
    <VaCardTitle class="flex items-center justify-between">
      <h1 class="card-title text-gray-500 font-bold uppercase">Revenue Report</h1>
      <div>
        <VaSelect v-model="selectedMonth" :options="months" class="w-2" />
      </div>
    </VaCardTitle>
    <VaCardContent class="flex flex-col md:flex-row justify-between gap-5 h-full">
      <section class="w-1/3">
        <div>
          <p class="text-2xl font-semibold">{{ formatMoney(totalEarnings) }}</p>
          <p>Total earnings</p>
        </div>
        <div class="my-4">
          <div class="flex items-center">
            <span class="inline-block w-2 h-2 mr-2" :style="{ backgroundColor: earningsColor }"></span>
            <span class="text-gray-500">Earnings this month</span>
          </div>
          <div class="text-xl font-semibold">{{ formatMoney(earningsForSelectedMonth.earning) }}</div>
        </div>
        <div>
          <div class="flex items-center">
            <span class="inline-block w-2 h-2 mr-2" :style="{ backgroundColor: expensesColor }"></span>
            <span class="text-gray-500">Expense this month</span>
          </div>
          <div class="text-xl font-semibold">{{ formatMoney(earningsForSelectedMonth.expenses) }}</div>
        </div>
      </section>
      <RevenueChart class="w-2/3 h-full" :revenues="revenues" :months="months" />
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VaCard } from 'vuestic-ui'
import RevenueChart from './RevenueChart.vue'

import {
  earningsColor,
  expensesColor,
  months,
  generateRevenues,
  getRevenuePerMonth,
  formatMoney,
} from '../../../data/charts/revenueChartData'

const revenues = generateRevenues(months)

const selectedMonth = ref('Jan')

const earningsForSelectedMonth = computed(() => getRevenuePerMonth(selectedMonth.value, revenues))
const totalEarnings = computed(() => {
  return earningsForSelectedMonth.value.earning + earningsForSelectedMonth.value.expenses
})
</script>
