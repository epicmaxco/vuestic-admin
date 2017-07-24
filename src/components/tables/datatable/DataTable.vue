<template>
  <div>
    <div class="d-flex justify-content-between">
      <filter-bar></filter-bar>
      <items-per-page></items-per-page>
    </div>
    <div class="table-responsive">
      <vuetable ref="vuetable"
                apiUrl="https://vuetable.ratiw.net/api/users"
                :fields="tableFields"
                :css="css.table"
                paginationPath=""
                :appendParams="moreParams"
                @vuetable:pagination-data="onPaginationData"
      >
        <template slot="color" scope="props">
          <span class="badge" :class="{
                  'badge-info': props.rowIndex % 6 === 0,
                  'badge-warning': props.rowIndex % 6 === 1,
                  'badge-danger': props.rowIndex % 6 === 2,
                  'badge-success': props.rowIndex % 6 === 3,
                  'badge-default': props.rowIndex % 6 === 4
          }"></span>
        </template>
      </vuetable>
      <div class="d-flex justify-content-center">
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
  //  import TestData from './table-test-data'

  export default {
    name: 'dataTable',
    components: {
      FilterBar,
      Vuetable,
      VuetablePagination,
      ItemsPerPage
    },
    data () {
      return {
        colorClasses: {},
        moreParams: {},
        css: {
          table: {
            tableClass: 'table table-striped',
            ascendingIcon: 'glyphicon glyphicon-chevron-up',
            descendingIcon: 'glyphicon glyphicon-chevron-down'
          },
          pagination: {
            wrapperClass: 'btn-group',
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
        },

        tableFields: [
          {
            name: '__slot:color',
            title: ''
          },
          {
            name: 'name',
            sortField: 'name'
          },
          {
            name: 'email',
            sortField: 'email'
          },
          {
            name: 'address.line2',
            title: 'city'
          },
          {
            name: 'salary',
            title: 'score'
          }
        ]
      }
    },
    mounted () {
      this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
    },
    methods: {
      onFilterSet (filterText) {
        this.moreParams = {
          'filter': filterText
        }
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

  .btn-group {
    color: $white;
  }

  .middle {
    /*todo fix box-shadow*/
    box-shadow: 0 4px 70px -16px $vue-green;
  }
</style>
