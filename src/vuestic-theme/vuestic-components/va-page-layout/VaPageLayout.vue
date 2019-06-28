<template>
  <div
    class="va-page-layout"
    v-resize
  >
    <slot></slot>
    <div class="content-wrap" id="content-wrap">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
// NOTE Very limited reuse. Probably worth either splitting to presentation
// or augmenting features.

import Resize from '../../../directives/ResizeHandler'

export default {
  name: 'va-page-layout',
  directives: {
    resize: Resize,
  },
}
</script>

<style lang="scss">
$vuestic-preloader-left: calc(50% - 140px / 2);
$vuestic-preloader-top: calc(50% - 104px / 2);

.va-page-layout {
  .content-wrap {
    margin-left: $content-wrap-ml;
    transition: margin-left 0.3s ease;
    padding: 0;

    .pre-loader {
      position: absolute;
      left: $vuestic-preloader-left;
      top: $vuestic-preloader-top;
    }

    @include media-breakpoint-down(md) {
      .va-sidebar--minimized {
        margin-left: 0;
        padding-top: $content-mobile-wrap-sb-top;
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
