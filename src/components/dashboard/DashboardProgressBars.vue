<template>
  <va-card title="Top 5 contributors">
    <va-button flat small slot="actions">Show All</va-button>

    <div
      class="mb-3"
      v-for="(progress, idx) in progressData"
      :key="idx"
    >
      <va-progress-bar
        :value="getPercent(progress.value)"
        :color="progress.color"
      >
        {{ progress.value }} commits
      </va-progress-bar>
      <p class="mt-2">{{ progress.text }}</p>
    </div>
  </va-card>
</template>

<script>
import DonutChartData from '@/data/charts/DonutChartData'

export default {
  name: 'DashboardProgressBars',
  data: () => ({
    donutChartData: DonutChartData,
    progressMax: 328,
    progressData: [{
      color: 'success',
      value: '328',
      text: 'Nathaniel Andrews'
    }, {
      color: 'info',
      value: '271',
      text: 'Gora Gilbert'
    }, {
      color: 'warning',
      value: '69',
      text: 'Landon Hudson'
    }, {
      color: 'danger',
      value: '31',
      text: 'Aiden Berry'
    }, {
      color: 'gray',
      value: '28',
      text: 'Winnie Holloway'
    }]
  }),
  methods: {
    getPercent (val) {
      return (val / this.progressMax) * 100
    }
  }
}
</script>
