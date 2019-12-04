<template>
  <router-link
    class="app-topbar-link-group-item"
    :class="computedClass"
    :to="to"
  >
    <div class="app-topbar-link-group-item__in">
      <slot />
    </div>
  </router-link>
</template>

<script>
import { ColorThemeMixin } from '../../../../services/vuestic-ui'

export default {
  name: 'app-topbar-link-group-item',
  components: {
  },
  mixins: [ColorThemeMixin],
  props: {
    to: [String, Array, Object],
    color: {
      type: String,
      default: 'secondary',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass () {
      return {
        'app-topbar-link-group-item--active': this.isActive,
      }
    },
  },
}
</script>

<style lang="scss">

.app-topbar-link-group-item {
  display: inline-block;
  padding: 0.3rem 0;

  &--active {
  }

  &__in {
  }
}
</style>
