<template>
  <div>
    <va-table-actions class="demo-item" />
    <va-table-sorting class="demo-item" />
  </div>
</template>

<script>
import VaTableActions from './scenarios/VaTableActions.vue'
import VaTableSorting from './scenarios/VaTableSorting.vue'

export default {
  components: {
    VaTableActions,
    VaTableSorting,
  },
}
</script>

<style lang="scss" scoped>
  .demo-item {
    margin-bottom: 8px;
  }
</style>
