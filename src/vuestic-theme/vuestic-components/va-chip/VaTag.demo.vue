<template>
  <VbDemo>
    <VbContainer title="Tag Types">
      <va-tag>
        Tag
      </va-tag>
      <va-tag v-model="isCloseableTagVisible" closeable>
        Closeable Tag
      </va-tag>
    </VbContainer>
    <VbContainer title="Tag Colors">
      <va-tag>
        Success Tag
      </va-tag>
      <va-tag color="info">
        Info Tag
      </va-tag>
      <va-tag color="danger">
        Danger Tag
      </va-tag>
      <va-tag color="warning">
        Warning Tag
      </va-tag>
      <va-tag color="gray">
        Gray Tag
      </va-tag>
      <va-tag color="dark">
        Dark Tag
      </va-tag>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaTag from './VaTag'

export default {
  components: { VaTag },
  data () {
    return {
      isCloseableTagVisible: true,
    }
  },
}
</script>
