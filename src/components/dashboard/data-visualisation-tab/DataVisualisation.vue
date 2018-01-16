<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <vuestic-data-table :apiMode="apiMode"
                    :data="tableData"
                    :tableFields="tableFields"
                    :itemsPerPage="itemsPerPage"
                    :onEachSide="onEachSide"
                    :sortFunctions="sortFunctions"
                    :paginationPath="paginationPath">
        </vuestic-data-table>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BadgeColumn from 'components/tables/BadgeColumn.vue'
  import LocalData from 'components/vuestic-components/vuestic-datatable/data/local-data'
  import DonutChartData from './DonutChartData'
  import FieldsDef from './fields-definition'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'data-visualisation-tab',

    data () {
      return {
        donutChartData: DonutChartData,
        apiMode: false,
        sortFunctions: FieldsDef.sortFunctions,
        tableData: LocalData.data,
        onEachSide: 1,
        tableFields: FieldsDef.tableFields,
        paginationPath: 'pagination',
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
  @import "../../../../node_modules/bootstrap/scss/functions";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }


</style>
