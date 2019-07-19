<template>
  <div class="va-item va-row align--center no-wrap">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'va-item',
}
</script>

<style lang="scss" scoped>
  .va-item {
    padding: $list-item-padding;
  }
</style>
