<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <KeyDataPoint
      v-for="metric in dashboardMetrics"
      :key="metric.id"
      :title="metric.title"
      :value="metric.value"
      :change-text="metric.changeText"
      :up="metric.changeDirection === 'up'"
      :icon-background="metric.iconBackground"
    >
      <template #icon>
        <VaIcon :name="metric.icon" size="large" />
      </template>
    </KeyDataPoint>
  </div>
</template>

<script lang="ts" setup>
import KeyDataPoint from './KeyDataPoint.vue'

interface DashboardMetric {
  id: string
  title: string
  value: string
  icon: string
  changeText: string
  changeDirection: 'up' | 'down'
  iconBackground: string
}

const dashboardMetrics: DashboardMetric[] = [
  {
    id: 'openInvoices',
    title: 'Open invoices',
    value: '$35,548',
    icon: 'attach_money',
    changeText: '$1, 450 since last month',
    changeDirection: 'down',
    iconBackground: 'bg-green-500',
  },
  {
    id: 'ongoingProjects',
    title: 'Ongoing project',
    value: '15',
    icon: 'folder_open',
    changeText: '25.36% since last month',
    changeDirection: 'up',
    iconBackground: 'bg-blue-500',
  },
  {
    id: 'employees',
    title: 'Employees',
    value: '25',
    icon: 'account_circle',
    changeText: '2.5% since last month',
    changeDirection: 'up',
    iconBackground: 'bg-red-500',
  },
  {
    id: 'newProfit',
    title: 'New profit',
    value: '27%',
    icon: 'grade',
    changeText: '4% since last month',
    changeDirection: 'up',
    iconBackground: 'bg-yellow-400',
  },
]
</script>
