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
