<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <data-table :apiUrl="apiUrl"
                    :tableFields="tableFields"
                    :itemsPerPage="itemsPerPage"
                    :onEachSide="onEachSide">
        </data-table>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticChart from '../../vuestic-components/vuestic-chart/VuesticChart.vue'
  import DonutChartData from './DonutChartData'
  import DataTable from '../../vuestic-components/vuestic-datatable/VuesticDataTable.vue'
  import Vue from 'vue'
  import BadgeColumn from '../../tables/BadgeColumn.vue'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'data-visualisation-tab',

    components: {
      DataTable,
      VuesticChart,
      DonutChartData
    },

    data () {
      return {
        donutChartData: DonutChartData,
        apiUrl: 'https://vuetable.ratiw.net/api/users',
        onEachSide: 0,
        tableFields: [
          {
            name: '__component:badge-column',
            title: '',
            dataClass: 'text-center'
          },
          {
            name: 'name',
            title: 'user',
            sortField: 'name'
          },
          {
            name: 'salary',
            title: 'score'
          }
        ],
        itemsPerPage: [
          {
            value: 5
          },
          {
            value: 6
          }
        ]
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
