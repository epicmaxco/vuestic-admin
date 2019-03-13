<template>
  <va-chip
    class="va-tag"
    outline
    v-model="value"
    :color="color"
    :icon-right="removable ? 'ion ion-md-close ion' : ''"
    @close="$emit('input', false)"
  >
    <slot/>
  </va-chip>
</template>

<script>
import VaChip from './VaChip'

export default {
  name: 'va-tag',
  components: { VaChip },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'success'
    },
    removable: {
      type: Boolean
    }
  },
}
</script>
