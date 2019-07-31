<template>
  <aside
    :class="computedClass"
    :style="{ backgroundColor: colorComputed }"
  >
    <div class="va-sidebar__menu">
      <slot name="menu"></slot>
    </div>
  </aside>
</template>

<script>
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'

export default {
  name: 'va-sidebar',
  components: {},
  mixins: [ColorThemeMixin],
  props: {
    minimized: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      default: 'secondary',
    },
  },
  computed: {
    computedClass () {
      return {
        'va-sidebar': true,
        'va-sidebar--minimized': this.minimized,
      }
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";
.va-sidebar {
  min-height: $sidebar-viewport-min-height;
  height: $sidebar-viewport-height;
  position: absolute;
  width: $sidebar-width;
  top: $top-nav-height;
  left: 0;
  transition: all .3s ease;
  overflow-y: auto;

  &__menu {
    max-height: 100%;
    margin-bottom: 0;
    padding-top: 2.5625rem;
    padding-bottom: 2.5rem;
    list-style: none;
    padding-left: 0;
  }

  @include media-breakpoint-down(sm) {
    top: $sidebar-mobile-top;
  }

  @include media-breakpoint-down(xs) {
    width: 100%;
  }

  &--minimized {
    left: 0;
    width: $sidebar-minimized-width;
    .va-sidebar-link-group {
      .va-sidebar-link__content {
        padding-right: 0;
      }
    }

    & + .content-wrap {
      margin-left: $sidebar-width--hidden;
    }
  }
}
</style>
