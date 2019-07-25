<template>
  <div>
    <va-table-actions class="mb-2" style="maxWidth: 1200px" />
    <va-table-sorting-pagination class="mb-2" style="maxWidth: 1200px" />
    <va-table-filter class="mb-2" style="maxWidth: 1200px" />
    <va-table-infinite-scroll class="mb-2" style="maxWidth: 1200px" />
    <va-table-select class="mb-2" style="maxWidth: 1200px" />
    <va-table-server-pagination class="mb-2" style="maxWidth: 1200px" />
    <va-table-empty class="mb-2" style="maxWidth: 1200px" />
    <va-table-loading class="mb-2" style="maxWidth: 1200px" />
  </div>
</template>

<script>
import VaTableActions from './scenarios/VaTableActions.vue'
import VaTableSortingPagination from './scenarios/VaTableSortingPagination.vue'
import VaTableFilter from './scenarios/VaTableFilter.vue'
import VaTableInfiniteScroll from './scenarios/VaTableInfiniteScroll.vue'
import VaTableSelect from './scenarios/VaTableSelect.vue'
import VaTableServerPagination from './scenarios/VaTableServerPagination.vue'
import VaTableEmpty from './scenarios/VaTableEmpty.vue'
import VaTableLoading from './scenarios/VaTableLoading.vue'

export default {
  components: {
    VaTableActions,
    VaTableSortingPagination,
    VaTableFilter,
    VaTableInfiniteScroll,
    VaTableSelect,
    VaTableServerPagination,
    VaTableEmpty,
    VaTableLoading,
  },
}
</script>

<style lang="scss">
</style>
