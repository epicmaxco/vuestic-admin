<template>
  <va-card title="Loading speed">
    <va-button icon="fa fa-print"/>
    <vuestic-chart
      :data="donutChartData"
      type="donut"
    />
  </va-card>
</template>

<script>
import DonutChartData from '@/data/charts/DonutChartData'

export default {
  name: 'DashboardDonutChart',
  data: () => ({
    donutChartData: DonutChartData
  }),
}
</script>
