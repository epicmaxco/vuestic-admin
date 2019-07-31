<template>
  <va-card
    no-padding
    class="va-list"
    :class="{
      'va-list--fit': fit
    }"
  >
    <slot/>
  </va-card>
</template>

<script>
import VaCard from '../va-card/VaCard'

export default {
  name: 'va-list',
  components: { VaCard },
  props: {
    fit: Boolean,
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-list {
  padding: $list-padding;

  &--fit {
    width: 100%;
  }
}
</style>
