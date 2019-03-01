<template>
  <va-chip
    class="va-badge"
    small
    :color="color"
  >
    <slot/>
  </va-chip>
</template>

<script>
export default {
  name: 'va-badge',
  props: {
    color: {
      type: String,
      default: 'success'
    }
  },
}
</script>
