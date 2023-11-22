<template>
  <div>
    <DataTableActions class="mb-8" />
    <DataTableSortingPagination class="mb-8" />
    <DataTableFilter class="mb-8" />
    <DataTableInfiniteScroll class="mb-8" />
    <DataTableSelect class="mb-8" />
    <DataTableServerPagination class="mb-8" />
    <DataTableEmpty class="mb-8" />
    <DataTableLoading />
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
