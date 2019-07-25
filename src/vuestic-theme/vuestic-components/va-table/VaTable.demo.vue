<template>
  <vb-demo>
    <vb-card title="Static Data" width="100%">
      <va-table-static-data-example />
    </vb-card>

    <vb-card title="Server-side Pagination" width="100%">
      <va-table-api-mode-example />
    </vb-card>
  </vb-demo>
</template>

<script>
import VaTableStaticDataExample from './VaTableStaticDataExample.vue'
import VaTableApiModeExample from './VaTableApiModeExample.vue'

export default {
  components: {
    VaTableStaticDataExample,
    VaTableApiModeExample,
  },
}
</script>

<style lang="scss">
</style>
