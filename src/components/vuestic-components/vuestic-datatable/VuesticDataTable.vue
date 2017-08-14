<template>
  <div class="table-responsive">
    <div class="d-flex flex-md-row flex-column justify-content-md-between align-items-center">
      <filter-bar @filter="onFilterSet"></filter-bar>
      <items-per-page :options="itemsPerPage"
                      :defaultPerPage="perPage"
                      @items-per-page="onItemsPerPage"></items-per-page>
    </div>
    <vuetable ref="vuetable"
              :apiUrl="apiUrl"
              :apiMode="apiMode"
              :fields="tableFields"
              :data="tableData"
              :dataTotal="dataCount"
              :dataManager="dataManager"
              :css="css.table"
              dataPath="data"
              v-bind:paginationPath="paginationPath"
              :appendParams="moreParams"
              :perPage="perPage"
              @vuetable:pagination-data="onPaginationData">
    </vuetable>
    <div class="d-flex justify-content-center mb-4">
      <vuetable-pagination ref="pagination"
                           :css="css.pagination"
                           :onEachSide="onEachSide"
                           @vuetable-pagination:change-page="onChangePage">

      </vuetable-pagination>
    </div>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import FilterBar from './datatable-components/FilterBar.vue'
  import ItemsPerPage from './datatable-components/ItemsPerPage.vue'
  import Vue from 'vue'
  import LocalData from './data/local-data'
  import DataTableStyles from '../../vuestic-components/vuestic-datatable/data/data-table-styles'

  const originalData = LocalData.data

  export default {
    name: 'vuestic-data-table',
    components: {
      FilterBar,
      Vuetable,
      VuetablePagination,
      ItemsPerPage
    },
    props: {
      apiUrl: {
        type: String
      },
      tableFields: {
        type: Array,
        required: true
      },
      itemsPerPage: {
        type: Array,
        required: true
      },
      onEachSide: {
        type: Number,
        default () {
          return 2
        }
      },
      apiMode: {
        type: Boolean,
        default () {
          return true
        }
      },
      data: {
        type: Array
      },
      sortFunctions: {
        type: Object
      },
      paginationPath: {
        type: String,
        default () {
          return ''
        }
      }
    },
    data () {
      return {
        tableData: LocalData,
        perPage: 6,
        colorClasses: {},
        moreParams: {},
        dataCount: 0,
        css: DataTableStyles
      }
    },
    methods: {
      onFilterSet (filterText) {
        if (this.apiMode) {
          this.moreParams = {
            'filter': filterText
          }
        } else {
          const txt = new RegExp(filterText, 'i')
          this.tableData.data = originalData.filter(function (item) {
            return item.name.search(txt) >= 0 || item.email.search(txt) >= 0
          })
        }
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      },
      onItemsPerPage (itemsPerPageValue) {
        this.perPage = itemsPerPageValue
        Vue.nextTick(() => this.$refs.vuetable.refresh())
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      dataManager (sortOrder, pagination) {
        let data = this.tableData.data
        let sortFunctions = this.sortFunctions

        if (sortOrder.length > 0) {
          data.sort(function (item1, item2) {
            const sortField = sortOrder[0].sortField
            let fn = sortFunctions[sortField]
            if (fn) {
              return fn(item1[sortField], item2[sortField])
            }
          })

          if (sortOrder[0].direction === 'desc') {
            data.reverse()
          }
        }

        pagination = this.$refs.vuetable.makePagination(data.length)

        return {
          pagination: pagination,
          data: data.slice(pagination.from - 1, pagination.to)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  @media (max-width: 1258px) {
    .pagination-link-btn:first-child, .pagination-link-btn:last-child {
      display: none;
    }

    .pagination-link-btn:nth-child(2) {
      border-top-left-radius: $btn-border-radius !important;
      border-bottom-left-radius: $btn-border-radius !important;
    }

    .pagination-link-btn:nth-last-child(2) {
      border-top-right-radius: $btn-border-radius !important;
      border-bottom-right-radius: $btn-border-radius !important;
    }
  }

  @media (max-width: 576px) {
    .hide-not-focused-btn:not(.focus) {
      display: none;
    }
  }
</style>
