<template>
  <aside class="va-sidebar" :style="{ backgroundColor: $themes[color] }">
    <va-scrollbar>
      <ul class="sidebar-menu">
        <slot name="menu"></slot>
      </ul>
    </va-scrollbar>
  </aside>
</template>

<script>
export default {
  name: 'va-sidebar',
  props: {
    hidden: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      default: 'secondary',
    },
  },
}
</script>

<style lang="scss">
.va-sidebar {
  @include media-breakpoint-down(md) {
    top: $sidebar-mobile-top;
    width: $sidebar-mobile-width;
    z-index: $sidebar-mobile-z-index;
  }

  min-height: $sidebar-viewport-height;
  height: 100%;
  position: absolute;
  width: $sidebar-width;
  top: $sidebar-top;
  left: 0;
  transition: all 0.2s ease;

  .va-scrollbar {
    height: 100%;

    .sidebar-menu {
      max-height: 100%;
      margin-bottom: 0;
      padding-top: 0.5rem;
      padding-bottom: 2.5rem;
      list-style: none;
      padding-left: 0;

      li {
        display: block;
        padding-left: 0;
      }
    }

    .scrollbar-wrapper {
      box-shadow: $sidebar-box-shadow;
      border-radius: 0;
    }
  }

  &.sidebar-hidden {
    @include media-breakpoint-down(md) {
      z-index: $sidebar-mobile-z-index;
      height: $sidebar-hidden-height-mobile;
    }
    left: 0;
    width: 56px;
    .sidebar-link__content__title,
    .sidebar-link__content__title {
      display: none;
    }
  }

  &.sidebar-hidden + .content-wrap {
    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
    margin-left: $sidebar-left--hidden;
  }
}
</style>
