<template>
  <div
    class="va-page-layout"
  >
    <slot></slot>
    <div class="content-wrap" id="content-wrap">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-page-layout',
  data () {
    return {
      prevMatchLg: true,
      sidebar: null,
    }
  },
  props: {
    mobileWidth: {
      type: Number,
      default: 767,
    },
  },
  mounted () {
    this.sidebar = this.$el.querySelector('.va-sidebar')

    window.addEventListener('resize', function () {
      this.updateSidebarState()
    }.bind(this))
    this.updateSidebarState()
  },
  methods: {
    checkIsDesktop () {
      return window.matchMedia(`(min-width: ${this.mobileWidth}px)`).matches
    },
    updateSidebarState () {
      if (this.checkIsDesktop() && !this.prevMatchLg) {
        this.$emit('toggleSidebar', false)
      } else if (!this.checkIsDesktop() && this.prevMatchLg) {
        this.$emit('toggleSidebar', true)
      }
      this.prevMatchLg = this.checkIsDesktop()
    },
  },
}
</script>

<style lang="scss">
@import "../../../../6-vuestic-ui/src/components/vuestic-sass/resources/resources";
$vuestic-preloader-left: calc(50% - 140px / 2);
$vuestic-preloader-top: calc(50% - 104px / 2);

.va-page-layout {
  .content-wrap {
    margin-left: $sidebar-width;
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
        padding-top: calc(#{$top-nav-height} + #{$layout-padding+20}) - 20px;
      }
    }
  }

  .made-by-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 1.6875rem;
    position: absolute;
    bottom: 0;
    height: calc(#{$layout-padding} + #{$widget-mb});
    width: 100%;
  }
}
</style>
