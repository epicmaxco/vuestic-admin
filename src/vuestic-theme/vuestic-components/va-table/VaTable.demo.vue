<template>
  <div>
    <va-table-actions class="demo-item" />
    <va-table-sorting-pagination class="demo-item" />
  </div>
</template>

<script>
import VaTableActions from './scenarios/VaTableActions.vue'
import VaTableSortingPagination from './scenarios/VaTableSortingPagination.vue'

export default {
  components: {
    VaTableActions,
    VaTableSortingPagination,
  },
}
</script>

<style lang="scss" scoped>
  .demo-item {
    margin-bottom: 16px;
  }
</style>
