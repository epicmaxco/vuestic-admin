<template>
  <div>
    <data-table-actions class="mb-2" style="maxWidth: 1200px" />
    <data-table-sorting-pagination class="mb-2" style="maxWidth: 1200px" />
    <data-table-filter class="mb-2" style="maxWidth: 1200px" />
    <data-table-infinite-scroll class="mb-2" style="maxWidth: 1200px" />
    <data-table-select class="mb-2" style="maxWidth: 1200px" />
    <data-table-server-pagination class="mb-2" style="maxWidth: 1200px" />
    <data-table-empty class="mb-2" style="maxWidth: 1200px" />
    <data-table-loading class="mb-2" style="maxWidth: 1200px" />
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

<style lang="scss">
</style>
