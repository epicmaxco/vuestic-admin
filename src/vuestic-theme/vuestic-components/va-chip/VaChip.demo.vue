<template>
  <VbDemo>
    <VbCard title="Removable Chip">
      <va-chip v-model="isCloseableTagVisible" removable>
        Removable Chip
      </va-chip>
    </VbCard>
    <VbCard title="Chip Colors">
      <va-chip>
        Success chip
      </va-chip>
      <va-chip color="info">
        Info chip
      </va-chip>
      <va-chip color="danger">
        Danger chip
      </va-chip>
      <va-chip color="warning">
        Warning chip
      </va-chip>
      <va-chip color="gray">
        Gray chip
      </va-chip>
      <va-chip color="dark">
        Dark chip
      </va-chip>
    </VbCard>
    <VbCard title="Chip Sizes">
      <va-chip small>
        Small chip
      </va-chip>
      <va-chip>
        Default chip
      </va-chip>
      <va-chip large>
        Large chip
      </va-chip>
    </VbCard>
    <VbCard title="Chips With Icons">
      <va-chip
        icon="brandico brandico-facebook"
      >
        Plus chip
      </va-chip>
      <va-chip
        icon-right="iconicstroke iconicstroke-info"
      >
        Dropdown chip
      </va-chip>
      <va-chip
        icon="brandico brandico-facebook"
        icon-right="iconicstroke iconicstroke-info"
      >
        Mixed chip
      </va-chip>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaChip from './VaChip'

export default {
  components: { VaChip },
  data () {
    return {
      isCloseableTagVisible: true,
    }
  },
}
</script>
