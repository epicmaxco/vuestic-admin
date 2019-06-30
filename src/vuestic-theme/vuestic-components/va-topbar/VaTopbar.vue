<template>
  <aside
    :class="computedClass"
    :style="{ backgroundColor: colorComputed }"
  >
    <ul class="va-topbar__menu">
      <slot name="menu"></slot>
    </ul>
  </aside>
</template>

<script>
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'

// Note: topbar is not finished and not included to the layout.
export default {
  name: 'va-topbar',
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
        'va-topbar': true,
        'va-topbar--minimized': this.minimized,
      }
    },
  },
}
</script>

<style lang="scss">
  @import "../../vuestic-sass/resources/resources";
  .va-topbar {
    height: $sidebar-viewport-height;
    left: 0;
    transition: all .3s ease;
    overflow-y: auto;

    width: 100%;
    position: relative;
    top: auto;
    min-height: 4rem;

    &__menu {
      max-height: 100%;
      list-style: none;
      padding-left: 0;

      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      max-width: 90%;
      width: 100%;
      height: 100%;
      min-height: 4rem;
      margin: 0 auto;
    }

    .va-topbar-link__content__title {
      opacity: 1;
    }

    & + .content-wrap {
      margin-left: 0;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }

    @include media-breakpoint-down(sm) {
      top: $sidebar-mobile-top;
      .va-topbar__menu {
        max-width: 100%;
        padding: 0 1rem;
      }
    }

    &--minimized {
      left: 0;
      .va-topbar-link-group {
        .va-topbar-link__content {
          padding-right: 0;
        }
      }

      .va-topbar-link__content__title {
        display: none;
        opacity: 0;
      }

      & + .content-wrap {
        margin-left: $sidebar-width--hidden;
      }
    }
  }
</style>
