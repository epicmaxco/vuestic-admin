<template>
  <div
    class="va-page-layout"
    :class="computedClass"
  >
    <slot></slot>
    <div class="content-wrap">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-page-layout',
  props: {
    layout: {
      type: String,
      required: true,
    },
    minimized: {
      type: Boolean,
      required: true,
    },
    mobileWidth: {
      type: Number,
      default: 767,
    },
  },
  mounted () {
    window.addEventListener('resize', this.updateActiveBarState)
    this.updateActiveBarState()
  },
  data () {
    return {
      wasDesktop: true,
    }
  },
  computed: {
    minimizedProxy: {
      get () {
        return this.minimized
      },
      set (minimized) {
        this.$emit('update:minimized', minimized)
      },
    },
    computedClass () {
      return {
        'va-page-layout--topbar': this.layout === 'topbar' && !this.minimizedProxy,
        'va-page-layout--topbar-minimized': this.layout === 'topbar' && this.minimizedProxy,
        'va-page-layout--sidebar': this.layout === 'sidebar' && !this.minimizedProxy,
        'va-page-layout--sidebar-minimized': this.layout === 'sidebar' && this.minimizedProxy,
      }
    },
  },
  methods: {
    updateActiveBarState () {
      const isDesktop = window.matchMedia(`(min-width: ${this.mobileWidth}px)`).matches

      if (isDesktop && !this.wasDesktop) {
        this.minimizedProxy = false
      } else if (!isDesktop && this.wasDesktop) {
        this.minimizedProxy = true
      }

      this.wasDesktop = isDesktop
    },
  },
}
</script>

<style lang="scss">
  @import "~vuestic-ui/src/components/vuestic-sass/resources/resources";

  .va-page-layout {
    .content-wrap {
      transition: margin 0.3s ease;
    }

    &--sidebar {
      .content-wrap {
        margin-left: $sidebar-width;
      }

      &-minimized {
        .content-wrap {
          margin-left: $sidebar-minimized-width;
        }
      }
    }
  }
</style>
