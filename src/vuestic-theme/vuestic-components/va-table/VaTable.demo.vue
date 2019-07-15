<template>
  <div>
    <va-table-actions class="demo-item" />
    <va-table-sorting-pagination class="demo-item" />
    <va-table-filter class="demo-item" />
  </div>
</template>

<script>
import VaTableActions from './scenarios/VaTableActions.vue'
import VaTableSortingPagination from './scenarios/VaTableSortingPagination.vue'
import VaTableFilter from './scenarios/VaTableFilter.vue'

export default {
  components: {
    VaTableActions,
    VaTableSortingPagination,
    VaTableFilter,
  },
}
</script>

<style lang="scss" scoped>
  .demo-item {
    margin-bottom: 16px;
  }
</style>
