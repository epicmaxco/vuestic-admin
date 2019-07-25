<template>
  <vb-demo>
    <vb-card title="Static Data" width="100%">
      <va-data-table-static-data-example />
    </vb-card>

    <vb-card title="Server-side Pagination" width="100%">
      <va-data-table-api-mode-example />
    </vb-card>
  </vb-demo>
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
