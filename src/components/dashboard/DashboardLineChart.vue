<template>
  <va-card title="Trendy Trends">
    <va-button
      small
      slot="actions"
      color="danger"
    >
      Delete Section
    </va-button>
    <vuestic-chart
      :data="lineChartData"
      type="line"
    />
  </va-card>
</template>

<script>
import { getLineChartData } from '@/data/charts/LineChartData'

export default {
  name: 'DashboardLineChart',
  data: () => ({
    lineChartData: getLineChartData()
  }),
}
</script>
