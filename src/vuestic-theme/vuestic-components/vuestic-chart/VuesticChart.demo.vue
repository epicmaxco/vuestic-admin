<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-simple-select
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
import VuesticSimpleSelect from '../vuestic-simple-select/VuesticSimpleSelect'
// TODO Demo is non operational
// HACK Data is bound to vuex
// import { chartTypes } from './VuesticChartConfigs'
// import { getLineChartData } from '../../../data/charts/LineChartData'

export default {
  data () {
    return {
      // chartData: getLineChartData(),
      chartType: 'pie',
    }
  },
  components: {
    VuesticSimpleSelect,
    VuesticChart,
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
