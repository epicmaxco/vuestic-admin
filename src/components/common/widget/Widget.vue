<template>
  <div class="widget">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'widget'
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .widget {
    padding: $widget-padding;
    background: $widget-bg;
    box-shadow: $widget-box-shadow;
  }
</style>
