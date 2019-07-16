<template>
  <vb-demo>
    <vb-card v-for="name in componentNames"
      :key="name"
      no-padding
      width="100%"
      style="maxWidth: 1200px"
    >
      <component :is="name" />
    </vb-card>
  </vb-demo>
</template>

<script>
import VaTableActions from './scenarios/VaTableActions.vue'
import VaTableSortingPagination from './scenarios/VaTableSortingPagination.vue'
import VaTableFilter from './scenarios/VaTableFilter.vue'
import VaTableInfScroll from './scenarios/VaTableInfScroll.vue'
import VaTableSelect from './scenarios/VaTableSelect.vue'
import VaTableServerPagination from './scenarios/VaTableServerPagination.vue'
import VaTableEmpty from './scenarios/VaTableEmpty.vue'

export default {
  components: {
    VaTableActions,
    VaTableSortingPagination,
    VaTableFilter,
    VaTableInfScroll,
    VaTableSelect,
    VaTableServerPagination,
    VaTableEmpty,
  },
  data () {
    return {
      componentNames: [
        'va-table-actions',
        'va-table-sorting-pagination',
        'va-table-filter',
        'va-table-inf-scroll',
        'va-table-select',
        'va-table-server-pagination',
        'va-table-empty',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
