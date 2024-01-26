<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <DataSectionItem
      v-for="metric in dashboardMetrics"
      :key="metric.id"
      :title="metric.title"
      :value="metric.value"
      :change-text="metric.changeText"
      :up="metric.changeDirection === 'up'"
      :icon-background="metric.iconBackground"
      :icon-color="metric.iconColor"
    >
      <template #icon>
        <VaIcon :name="metric.icon" size="large" />
      </template>
    </DataSectionItem>
  </div>
</template>

<script lang="ts" setup>
import DataSectionItem from './DataSectionItem.vue'

interface DashboardMetric {
  id: string
  title: string
  value: string
  icon: string
  changeText: string
  changeDirection: 'up' | 'down'
  iconBackground: string
  iconColor: string
}

const dashboardMetrics: DashboardMetric[] = [
  {
    id: 'openInvoices',
    title: 'Open invoices',
    value: '$ 35,548',
    icon: 'attach_money',
    changeText: '$1, 450',
    changeDirection: 'down',
    iconBackground: 'bg-green-500',
    iconColor: 'text-white',
  },
  {
    id: 'ongoingProjects',
    title: 'Ongoing project',
    value: '15',
    icon: 'folder_open',
    changeText: '25.36%',
    changeDirection: 'up',
    iconBackground: 'bg-blue-500',
    iconColor: 'text-white',
  },
  {
    id: 'employees',
    title: 'Employees',
    value: '25',
    icon: 'account_circle',
    changeText: '2.5%',
    changeDirection: 'up',
    iconBackground: 'bg-red-500',
    iconColor: 'text-white',
  },
  {
    id: 'newProfit',
    title: 'New profit',
    value: '27%',
    icon: 'grade',
    changeText: '4%',
    changeDirection: 'up',
    iconBackground: 'bg-yellow-400',
    iconColor: 'text-black',
  },
]
</script>
