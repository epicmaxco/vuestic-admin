<template>
  <va-card
    no-padding
    class="va-list"
    :class="{
      'va-list--fit': fit
    }"
  >
    <slot />
  </va-card>
</template>

<script>
export default {
  name: 'va-list',
  props: {
    fit: Boolean,
  },
}
</script>

<style lang="scss" scoped>
  .va-list {
    padding: $list-padding;
  }

  .va-list--fit {
    width: 100%;
  }
</style>
