<template>
  <VbDemo>
    <VbContainer title="Chip Types">
      <va-chip>
        Default Chip
      </va-chip>
      <va-chip outline>
        Outline Chip
      </va-chip>
    </VbContainer>
    <VbContainer title="Removable Chips">
      <va-chip removable>
        Default Chip
      </va-chip>
      <va-chip outline v-model="isCloseableTagVisible" removable>
        Outline Chip
      </va-chip>
    </VbContainer>
    <VbContainer title="Chip Colors">
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
    </VbContainer>
    <VbContainer title="Outline Chip Colors">
      <va-chip outline>
        Success chip
      </va-chip>
      <va-chip outline color="info">
        Info chip
      </va-chip>
      <va-chip outline color="danger">
        Danger chip
      </va-chip>
      <va-chip outline color="warning">
        Warning chip
      </va-chip>
      <va-chip outline color="gray">
        Gray chip
      </va-chip>
      <va-chip outline color="dark">
        Dark chip
      </va-chip>
    </VbContainer>
    <VbContainer title="Chips With Icons">
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
    </VbContainer>
    <VbContainer title="Outline Chips With Icons">
      <va-chip
        outline
        icon="brandico brandico-facebook"
      >
        Plus chip
      </va-chip>
      <va-chip
        outline
        icon-right="iconicstroke iconicstroke-info"
      >
        Dropdown chip
      </va-chip>
      <va-chip
        outline
        icon="brandico brandico-facebook"
        icon-right="iconicstroke iconicstroke-info"
      >
        Mixed chip
      </va-chip>
    </VbContainer>
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
