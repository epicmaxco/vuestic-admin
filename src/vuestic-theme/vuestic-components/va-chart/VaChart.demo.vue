<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-select
        :options="chartTypes"
        v-model="chartType"
      />
      <VaButton @click="refreshData()">
        refreshData
      </VaButton>

      <VaChart :data="chartData" :type="chartType"/>
    </div>
  </div>
</template>

<script>
import VaButton from '../va-button/VaButton'
import VaChart from './VaChart.vue'
import VaSelect from '../va-select/VaSelect'
// TODO Demo is non operational
// HACK Data is bound to vuex
// import { chartTypes } from './VaChartConfigs'
// import { getLineChartData } from '../../../data/charts/LineChartData'

export default {
  data () {
    return {
      // chartData: getLineChartData(),
      chartType: 'pie',
    }
  },
  components: {
    VaButton,
    VaSelect,
    VaChart,
  },
  computed: {
    // chartTypes: () => chartTypes,
  },
  methods: {
    refreshData () {
      // this.chartData = getLineChartData()
    },
  },
}
</script>
