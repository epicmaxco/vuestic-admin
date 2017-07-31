<template>
  <div class="table-responsive">
    <div class="d-flex flex-md-row flex-column justify-content-md-between align-items-center">
      <filter-bar @filter="onFilterSet"></filter-bar>
      <items-per-page :options="itemsPerPage"
                      :defaultPerPage="perPage"
                      @items-per-page="onItemsPerPage"></items-per-page>
    </div>
    <vuetable ref="vuetable"
              apiUrl="https://vuetable.ratiw.net/api/users"
              :fields="tableFields"
              :css="css.table"
              paginationPath=""
              :appendParams="moreParams"
              :perPage="perPage"
              @vuetable:pagination-data="onPaginationData"
    >
    </vuetable>
    <div class="d-flex justify-content-center mb-4">
      <vuetable-pagination ref="pagination"
                           :css="css.pagination"
                           :onEachSide="onEachSide"
                           @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
    </div>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import FilterBar from './FilterBar.vue'
  import ItemsPerPage from './ItemsPerPage.vue'
  import Vue from 'vue'

  export default {
    name: 'data-table',
    components: {
      FilterBar,
      Vuetable,
      VuetablePagination,
      ItemsPerPage
    },
    props: {
      apiUrl: {
        type: String,
        required: true
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
        default: 2
      }
    },
    data () {
      return {
        perPage: 6,
        colorClasses: {},
        moreParams: {},
        css: {
          table: {
            tableClass: 'table table-striped',
            ascendingIcon: 'entypo entypo-up-dir',
            descendingIcon: 'entypo entypo-down-dir'
          },
          pagination: {
            wrapperClass: 'btn-group',
            activeClass: 'focus',
            disabledClass: 'disabled',
            pageClass: 'btn btn-primary',
            linkClass: 'btn btn-primary pagination-link-btn',
            icons: {
              first: 'fa fa-angle-double-left',
              prev: 'fa fa-angle-left',
              next: 'fa fa-angle-right',
              last: 'fa fa-angle-double-right'
            }
          }
        }
      }
    },
    methods: {
      onFilterSet (filterText) {
        this.moreParams = {
          'filter': filterText
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
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  @media (max-width: 768px) {
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
</style>
