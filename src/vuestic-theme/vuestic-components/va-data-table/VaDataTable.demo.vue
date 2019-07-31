<template>
  <VbDemo>
    <VbCard title="Static Data" width="100%">
      <va-data-table-static-data-example />
    </VbCard>

    <VbCard title="Server-side Pagination" width="100%">
      <va-data-table-api-mode-example />
    </VbCard>
  </VbDemo>
</template>

<script>
import VaDataTableStaticDataExample from './VaDataTableStaticDataExample.vue'
import VaDataTableApiModeExample from './VaDataTableApiModeExample.vue'

export default {
  components: {
    VaDataTableStaticDataExample,
    VaDataTableApiModeExample,
  },
}
</script>

<style lang="scss">
</style>
