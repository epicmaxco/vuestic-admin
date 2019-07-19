<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    class="va-item va-row align--center no-wrap"
    :class="{'va-item--clickable': clickable || to}"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'va-item',
  props: {
    to: String,
    clickable: Boolean,
  },

}
</script>

<style lang="scss" scoped>
  .va-item {
    padding: $list-item-padding;
  }

  .va-item--clickable {
    &:hover {
      background-color: $light-gray3;
      cursor: pointer;
    }
  }
</style>
