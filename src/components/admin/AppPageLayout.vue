<template>
  <div
    class="app-page-layout"
    :class="computedClass"
  >
    <slot></slot>
    <slot name="content"></slot>

    <!--    <div class="app-page-layout__footer">-->
    <!--      {{copyrightText}}-->
    <!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'app-page-layout',
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
        'app-page-layout--topbar': this.isTopBarProxy && !this.minimizedProxy,
        'app-page-layout--topbar-minimized': this.isTopBarProxy && this.minimizedProxy,
        'app-page-layout--sidebar': !this.isTopBarProxy && !this.minimizedProxy,
        'app-page-layout--sidebar-minimized': !this.isTopBarProxy && this.minimizedProxy,
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

.app-page-layout {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;

  .content-wrap {
    transition: margin-left 0.3s ease;
    padding: 0;
    margin-left: 0 !important;
  }

  &__footer {
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
