<template>
  <div>
    <div class="d-flex justify-content-between">
      <filter-bar></filter-bar>
      <items-per-page :options="itemsPerPage"
                      :defaultPerPage="perPage"></items-per-page>
    </div>
    <div class="table-responsive">
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
                             @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import FilterBar from './FilterBar.vue'
  import ItemsPerPage from './ItemsPerPage.vue'
  import Vue from 'vue'
  import VueEvents from 'vue-events'

  Vue.use(VueEvents)

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
            wrapperClass: 'btn-group green-box-shadow',
            activeClass: 'focus',
            disabledClass: 'disabled',
            pageClass: 'btn btn-primary',
            linkClass: 'btn btn-primary',
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
    mounted () {
      this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
      this.$events.$on('items-per-page', eventData => this.onItemsPerPage(eventData))
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

</style>
