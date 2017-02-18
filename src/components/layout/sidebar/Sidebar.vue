<template>
 <aside class="sidebar">
  Sidebar
 </aside>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .sidebar {
    position: absolute;
    width: $sidebar-width;
    top: $sidebar-top;
    left: $sidebar-left;
    background: $sidebar-bg;
  }
</style>
