<template>
  <vuestic-card>
    <vuestic-chart
      :data="lineChartData"
      type="line"
    />
  </vuestic-card>
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
