<template>
  <div class="vuestic-layout"
    v-resize
    :class="classObject"
  >
    <slot></slot>
    <div class="content-wrap" id="content-wrap">
      <slot name="content"></slot>
    </div>
    <div class="made-by-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Resize from '../../../directives/ResizeHandler'
export default {
  name: 'vuestic-layout',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    resize: Resize,
  },
  computed: {
    classObject: function () {
      return {
        'layout-fixed': this.fixed,
      }
    },
  },
}
</script>

<style lang="scss">
.vuestic-layout {
  .content-wrap {
    margin-left: $content-wrap-ml;
    transition: margin-left 0.3s ease;
    padding: $layout-padding $layout-padding-right $content-wrap-pb 0;

    .pre-loader {
      position: absolute;
      left: $vuestic-preloader-left;
      top: $vuestic-preloader-top;
    }

    @include media-breakpoint-down(md) {
      padding: $content-mobile-wrap;
      margin-left: 0;

      .sidebar-hidden & {
        margin-left: 0;
        padding-top: $content-mobile-wrap-sb-top;
      }
    }
  }

  &-fixed {
    .content-wrap {
      padding-right: $layout-padding-right;
      padding-top: $sidebar-top;

      @include media-breakpoint-down(md) {
        padding: $content-mobile-wrap-fixed-layout;
        margin-left: 0;
      }
    }
  }

  .made-by-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: $made-by-footer-pb;
    position: absolute;
    bottom: 0;
    height: calc(#{$layout-padding} + #{$widget-mb});
    width: 100%;
  }
}
</style>
