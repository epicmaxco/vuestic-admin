<template>
  <va-chip
    class="va-tag"
    outline
    :color="color"
    :icon-right="closeable ? 'ion ion-md-close ion' : ''"
  >
    <slot/>
  </va-chip>
</template>

<script>
export default {
  name: 'va-tag',
  props: {
    color: {
      type: String,
      default: 'success'
    },
    closeable: {
      type: Boolean
    }
  },
}
</script>
