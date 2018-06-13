<template>
  <aside class="vuestic-sidebar" :class="classObject">
    <vuestic-scrollbar>
      <ul class="sidebar-menu">
        <slot name="menu"></slot>
      </ul>
    </vuestic-scrollbar>
  </aside>
</template>

<script>
  import Expanding from 'vue-bulma-expanding/src/Expanding'
  export default {
    name: 'vuestic-sidebar',
    components: {
      Expanding,
    },
    props: {
      hidden: {
        type: Boolean,
        required: true,
      },
      toggleWithoutAnimation: {
        type: Boolean,
        required: true,
      }
    },
    computed: {
      classObject: function () {
        return {
          'sidebar-hidden': !this.toggleWithoutAnimation && !this.hidden,
          'sidebar-hidden sidebar-hidden_without-animation': this.toggleWithoutAnimation && !this.hidden
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .vuestic-sidebar {
    @include media-breakpoint-down(md) {
      top: $sidebar-mobile-top;
      left: $sidebar-mobile-left;
      width: $sidebar-mobile-width;
      z-index: $sidebar-mobile-z-index;
    }
    height: $sidebar-viewport-height;
    .vuestic-scrollbar {
      height: 100%;

      .sidebar-menu {
        max-height: 100%;
        margin-bottom: 0;
        list-style: none;
        padding-left: 0;
        li {
          display: block;
          padding-left: 0;
        }
      }

      .scrollbar-wrapper {
        box-shadow: $sidebar-box-shadow;
      }

      .scrollbar-content {
        background: $sidebar-bg;
      }

    }
    position: absolute;
    width: $sidebar-width;
    top: $sidebar-top;
    left: $sidebar-left;
    transition: all 0.2s ease;
    opacity: 1;
    &.sidebar-hidden_without-animation {
      transition: none;
    }
    &.sidebar-hidden {
      margin-left: $sidebar-left;
    }
    &.sidebar-hidden + .content-wrap {
      margin-left: $sidebar-left;
      @include media-breakpoint-down(md) {
        padding: $content-mobile-wrap;
        margin-left: 0;
        &.sidebar-hidden + .content-wrap {
          margin-left: 0;
          padding-top: $content-mobile-wrap-sb-top;
        }
      }
    }
    @include media-breakpoint-down(md) {
      padding: $content-mobile-wrap;
      margin-left: 0;
      &.sidebar-hidden {
        margin-left: 0;
        padding-top: $content-mobile-wrap-sb-top;
      }
    }
    &.sidebar-hidden {
      @include media-breakpoint-down(md) {
        top: $sidebar-hidden-top-mobile;
        opacity: 0;
        z-index: $sidebar-mobile-z-index;
        height: $sidebar-hidden-height-mobile;
      }
      top: $sidebar-hidden-top;
      opacity: 0;
      z-index: $min-z-index;
    }
  }
</style>
