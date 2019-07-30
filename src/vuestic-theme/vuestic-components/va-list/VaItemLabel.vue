<template>
  <div
    class="va-item-label ellipsis"
    :class="{'va-item-label--caption': caption}"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'va-item-label',
  props: {
    caption: Boolean,
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-item-label {
  color: $vue-darkest-blue;

  &--caption {
    font-size: $font-size-smaller;
    color: $brand-secondary;
    line-height: 1.3rem;
  }
}
</style>
