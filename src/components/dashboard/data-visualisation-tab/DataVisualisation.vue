<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="row">
      <div class="col-md-5">
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticChart from 'components/common/vuestic-chart/VuesticChart.vue'
  import DonutChartData from './DonutChartData'

  export default {
    name: 'data-visualisation-tab',

    components: {
      VuesticChart,
      DonutChartData
    },

    data () {
      return {
        donutChartData: DonutChartData
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }


</style>
