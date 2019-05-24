<template>
  <va-card title="Trendy Trends" noMargin>
    <va-button
      small
      slot="actions"
      color="danger"
      class="mr-0"
    >
      Delete Section
    </va-button>
    <va-chart
      :data="lineChartData"
      type="line"
      class="chart"
    />
  </va-card>
</template>

<script>
import { getLineChartData } from '@/data/charts/LineChartData'

export default {
  name: 'DashboardLineChart',
  data: () => ({
    lineChartData: getLineChartData(),
  }),
}
</script>

<style scoped>
  .chart {
    max-height: 400px;
  }
</style>
