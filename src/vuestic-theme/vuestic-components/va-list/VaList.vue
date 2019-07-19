<template>
  <va-card
    no-padding
    class="va-list"
    :class="{
      'va-list--fit': fit,
      'va-list--clickable': clickable
    }"
  >
    <slot />
  </va-card>
</template>

<script>
export default {
  name: 'va-list',
  props: {
    title: {
      type: String,
    },
    fit: Boolean,
    clickable: Boolean,
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

  .va-list--clickable {
    /deep/ .va-item {
      &:hover {
        background-color: $light-gray3;
        cursor: pointer;
      }
    }
  }
</style>
