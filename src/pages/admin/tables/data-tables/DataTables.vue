<template>
  <div>
    <data-table-actions class="mb-8" />
    <data-table-sorting-pagination class="mb-8" />
    <data-table-filter class="mb-8" />
    <data-table-infinite-scroll class="mb-8" />
    <data-table-select class="mb-8" />
    <data-table-server-pagination class="mb-8" />
    <data-table-empty class="mb-8" />
    <data-table-loading />
  </div>
</template>

<script>
  import DataTableActions from './scenarios/DataTableActions.vue'
  import DataTableSortingPagination from './scenarios/DataTableSortingPagination.vue'
  import DataTableFilter from './scenarios/DataTableFilter.vue'
  import DataTableInfiniteScroll from './scenarios/DataTableInfiniteScroll.vue'
  import DataTableSelect from './scenarios/DataTableSelect.vue'
  import DataTableServerPagination from './scenarios/DataTableServerPagination.vue'
  import DataTableEmpty from './scenarios/DataTableEmpty.vue'
  import DataTableLoading from './scenarios/DataTableLoading.vue'

  export default {
    components: {
      DataTableActions,
      DataTableSortingPagination,
      DataTableFilter,
      DataTableInfiniteScroll,
      DataTableSelect,
      DataTableServerPagination,
      DataTableEmpty,
      DataTableLoading,
    },
  }
</script>

<style lang="scss"></style>
