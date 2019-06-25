<template>
  <aside
    :class="computedClass"
    :style="{ backgroundColor: colorComputed }"
  >
    <ul class="va-sidebar__menu">
      <slot name="menu"></slot>
    </ul>
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
    navbarView: {
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
        'va-sidebar--navbar-view': this.navbarView,
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
  top: $sidebar-top;
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

  .va-sidebar-link__content__title {
    opacity: 1;
  }

  @include media-breakpoint-down(sm) {
    top: $sidebar-mobile-top;
  }

  &--minimized {
    left: 0;
    width: $sidebar-minimized-width;
    .va-sidebar-link-group {
      .va-sidebar-link__content {
        padding-right: 0;
      }
    }

    .va-sidebar-link__content__title {
      display: none;
      opacity: 0;
    }

    & + .content-wrap {
      margin-left: $sidebar-left--hidden;
    }
  }

  &--navbar-view {
    width: 100%;
    position: relative;
    top: auto;
    min-height: 4rem;
    & + .content-wrap {
      margin-left: 0;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    .va-sidebar__menu {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      max-width: 90%;
      width: 100%;
      padding: 0;
      height: 100%;
      min-height: 4rem;
      margin: 0 auto;
    }
    @include media-breakpoint-down(sm) {
      .va-sidebar__menu {
        max-width: 100%;
        padding: 0 1rem;
      }
    }
  }
}
</style>
