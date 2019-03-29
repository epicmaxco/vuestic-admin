<template>
  <va-card title="Top 5 contributors">
    <va-button flat>Show All</va-button>

  </va-card>
</template>

<script>
import DonutChartData from '@/data/charts/DonutChartData'

export default {
  name: 'DashboardProgressBars',
  data: () => ({
    donutChartData: DonutChartData
  }),
}
</script>
