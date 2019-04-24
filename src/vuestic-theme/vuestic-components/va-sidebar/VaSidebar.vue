<template>
  <aside
    :class="computedClass"
    :style="{ backgroundColor: $themes[color] }"
  >
    <va-scrollbar class="va-sidebar__scrollbar">
      <ul class="va-sidebar__menu">
        <slot name="menu"></slot>
      </ul>
    </va-scrollbar>
  </aside>
</template>

<script>
export default {
  name: 'va-sidebar',
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
.va-sidebar {

  min-height: $sidebar-viewport-min-height;
  height: $sidebar-viewport-height;
  position: absolute;
  width: $sidebar-width;
  top: $sidebar-top;
  left: 0;
  transition: all 0.2s ease;

  &__menu {
    max-height: 100%;
    margin-bottom: 0;
    padding-top: 0.5rem;
    padding-bottom: 2.5rem;
    list-style: none;
    padding-left: 0;
  }

  &__scrollbar {
    height: 100%;

    .scrollbar-wrapper {
      box-shadow: $sidebar-box-shadow;
      border-radius: 0;
    }
  }
  @include media-breakpoint-down(md) {
    top: $sidebar-mobile-top;
  }

  &--minimized {
    left: 0;
    width: 56px;

    .va-sidebar-link__content__title {
      display: none;
    }

    & + .content-wrap {
      margin-left: $sidebar-left--hidden;
    }
  }
}
</style>
