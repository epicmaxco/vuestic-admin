<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "sass/main";

body {
  height: 100%;
  #app {
    height: 100%;
  }
}
</style>
