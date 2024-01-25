<template>
  <VaCard class="p-4 flex flex-col">
    <VaCardTitle class="flex items-start justify-between">
      <h1 class="card-title text-secondary font-bold uppercase">Revenue Report</h1>
      <div class="flex gap-2">
        <VaSelect v-model="selectedMonth" preset="small" :keep-anchor-width="false" :options="months" class="w-20" />
        <VaButton class="h-2" size="small" preset="primary" @click="exportAsCSV">Export</VaButton>
      </div>
    </VaCardTitle>
    <VaCardContent class="flex flex-col md:flex-row justify-between gap-5 h-full">
      <RevenueReportChart
        class="w-full md:w-2/3 h-full min-h-56 order-2 md:order-1"
        :revenues="revenues"
        :months="months"
      />
      <section class="w-full md:w-1/3 pt-8 flex flex-col justify-between items-start order-1 md:order-2">
        <div class="sm:ml-4 w-full gap-4 flex flex-col">
          <div>
            <p class="text-2xl font-semibold">{{ formatMoney(totalEarnings) }}</p>
            <p>Total earnings</p>
          </div>
          <div class="flex flex-row sm:flex-col gap-4 w-full">
            <div>
              <div class="flex items-center">
                <span class="inline-block w-2 h-2 mr-2 sm:-ml-4" :style="{ backgroundColor: earningsColor }"></span>
                <span class="text-secondary">Earnings this month</span>
              </div>
              <div class="text-xl font-semibold">{{ formatMoney(earningsForSelectedMonth.earning) }}</div>
            </div>
            <div>
              <div class="flex items-center">
                <span class="inline-block w-2 h-2 mr-2 sm:-ml-4" :style="{ backgroundColor: expensesColor }"></span>
                <span class="text-secondary">Expense this month</span>
              </div>
              <div class="text-xl font-semibold">{{ formatMoney(earningsForSelectedMonth.expenses) }}</div>
            </div>
          </div>
        </div>
        <VaButton class="mt-4" preset="primary" size="small">View full report</VaButton>
      </section>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VaCard } from 'vuestic-ui'
import RevenueReportChart from './RevenueReportChart.vue'
import { downloadAsCSV } from '../../../../services/toCSV'
import {
  earningsColor,
  expensesColor,
  months,
  generateRevenues,
  getRevenuePerMonth,
  formatMoney,
} from '../../../../data/charts/revenueChartData'

const revenues = generateRevenues(months)

const selectedMonth = ref('Jan')

const earningsForSelectedMonth = computed(() => getRevenuePerMonth(selectedMonth.value, revenues))
const totalEarnings = computed(() => {
  return earningsForSelectedMonth.value.earning + earningsForSelectedMonth.value.expenses
})

const exportAsCSV = () => {
  downloadAsCSV(revenues, 'revenue-report')
}
</script>
