<template>
  <div class="app-page-layout">
    <slot></slot>
    <slot name="content" />
  </div>
</template>

<script>

export default {
  name: 'app-page-layout',
  props: {
    mobileWidth: {
      type: Number,
      default: 767,
    },
  },
  mounted () {
    window.addEventListener('resize', () => this.updateSidebarState())

    this.updateSidebarState()
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => this.updateSidebarState())
  },
  methods: {
    checkIsDesktop () {
      return window.matchMedia(`(min-width: ${this.mobileWidth}px)`).matches
    },
    updateSidebarState () {
      if (this.checkIsDesktop()) {
        this.$emit('update:minimized', false)
      } else {
        this.$emit('update:minimized', true)
      }
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
}
</style>
