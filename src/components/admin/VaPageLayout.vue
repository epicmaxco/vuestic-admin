<template>
  <div
    class="va-page-layout"
    :class="computedClass"
  >
    <slot></slot>
    <div class="content-wrap">
      <slot name="content"></slot>

      <div class="va-page-layout__footer">
        {{copyrightText}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'va-page-layout',
  props: {
    isTopBar: {
      type: Boolean,
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
    isTopBarProxy: {
      get () {
        return this.isTopBar
      },
      set (isTopBar) {
        this.$emit('update:isTopBar', isTopBar)
      },
    },
    computedClass () {
      return {
        'va-page-layout--topbar': this.isTopBarProxy && !this.minimizedProxy,
        'va-page-layout--topbar-minimized': this.isTopBarProxy && this.minimizedProxy,
        'va-page-layout--sidebar': !this.isTopBarProxy && !this.minimizedProxy,
        'va-page-layout--sidebar-minimized': !this.isTopBarProxy && this.minimizedProxy,
      }
    },
    copyrightText () {
      const baseText = `Epicmax © 2011-${new Date().getFullYear()}`

      if (process.env.VUE_APP_BUILD_VERSION) { // eslint-disable-line no-undef
        return `${baseText}, Version: ${VERSION}, ${TIMESTAMP}, commit: ${COMMIT}`// eslint-disable-line no-undef
      }

      return baseText
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
    margin-top: 65px;
    margin-left: $sidebar-width;
    transition: margin-left 0.3s ease;
    padding: 0;

    @include media-breakpoint-down(sm) {
      margin-top: $sidebar-mobile-top;
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

  .va-page-layout__footer {
    padding: 1rem;
    line-height: 1.4;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
}
</style>
