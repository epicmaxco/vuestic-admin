<template>
  <div id="app" class="app">
    <layout></layout>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'

  export default {
    name: 'app',
    components: {
      Layout
    }
  }
</script>

<style lang="scss">
  @import "sass/main";
</style>
