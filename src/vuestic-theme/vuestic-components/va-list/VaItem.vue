<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    class="va-item align--center no-wrap"
    :class="{'va-item--clickable': clickable || to}"
    @click="$emit('click')"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'va-item',
  props: {
    to: [String, Object],
    clickable: Boolean,
  },

}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-item {
  display: flex;
  padding: $list-item-padding;

  &--clickable {
    &:hover {
      background-color: $light-gray3;
      cursor: pointer;
    }
  }
}
</style>
