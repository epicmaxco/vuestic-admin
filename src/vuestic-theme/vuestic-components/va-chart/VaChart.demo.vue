<template>
  <VbDemo>
    <VbCard>
      <va-button @click="refreshData()">
        refreshData
      </va-button>
    </VbCard>
    <VbCard title="Pie">
      <va-chart :data="chartData" type="pie"/>
    </VbCard>
    <VbCard title="Line">
      <va-chart :data="chartData" type="line"/>
    </VbCard>
    <VbCard title="Bubble">
      <va-chart :data="chartData" type="bubble"/>
    </VbCard>
    <VbCard title="Donut">
      <va-chart :data="chartData" type="donut"/>
    </VbCard>
    <VbCard title="Horizontal-bar">
      <va-chart :data="chartData" type="horizontal-bar"/>
    </VbCard>
    <VbCard title="Vertical-bar">
      <va-chart :data="chartData" type="vertical-bar"/>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaButton from '../va-button/VaButton'
import VaChart from './VaChart.vue'
import { getLineChartData } from '../../../data/charts/LineChartData'

export default {
  data () {
    return {
      chartData: getLineChartData(this.$themes),
    }
  },
  components: {
    VaButton,
    VaChart,
  },
  methods: {
    refreshData () {
      this.chartData = getLineChartData(this.$themes)
    },
  },
}
</script>
