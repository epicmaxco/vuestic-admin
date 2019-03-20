<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-select
        :options="chartTypes"
        v-model="chartType"
      />
      <va-button @click="refreshData()">
        refreshData
      </va-button>

      <vuestic-chart :data="chartData" :type="chartType"/>
    </div>
  </div>
</template>

<script>
import VuesticChart from './VuesticChart.vue'
import VaSelect from '../va-select/VaSelect'
import { chartTypes } from './VuesticChartConfigs'
import { getLineChartData } from '../../../data/charts/LineChartData'

export default {
  data () {
    return {
      chartData: getLineChartData(),
      chartType: 'pie',
    }
  },
  components: {
    VaSelect,
    VuesticChart,
  },
  computed: {
    chartTypes: () => chartTypes,
  },
  methods: {
    refreshData () {
      this.chartData = getLineChartData()
    },
  },
}
</script>
