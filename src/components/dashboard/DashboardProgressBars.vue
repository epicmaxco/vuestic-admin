<template>
  <va-card title="Top 5 contributors">
    <va-button flat slot="actions">Show All</va-button>

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
      text: 'Nathaniel Andrews'
    }, {
      color: 'warning',
      value: '69',
      text: 'Nathaniel Andrews'
    }, {
      color: 'danger',
      value: '31',
      text: 'Nathaniel Andrews'
    }, {
      color: 'gray',
      value: '28',
      text: 'Nathaniel Andrews'
    }]
  }),
  methods: {
    getPercent (val) {
      return (val / this.progressMax) * 100
    }
  }
}
</script>
