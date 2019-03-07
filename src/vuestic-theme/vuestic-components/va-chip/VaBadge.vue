<template>
  <va-chip
    class="va-badge"
    is-badge
    :color="color"
    :outline="outline"
  >
    <slot/>
  </va-chip>
</template>

<script>
import VaChip from './VaChip'

export default {
  name: 'va-badge',
  components: { VaChip },
  props: {
    color: {
      type: String,
      default: 'success'
    },
    outline: {
      type: Boolean
    }
  },
}
</script>
