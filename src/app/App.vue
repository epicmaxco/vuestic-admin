<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  // Temporary config for 2.1.
  provide () {
    return {
      contextConfig: Vue.observable({
        gradient: true,
        shadow: 'lg', // 3 states: 'sm', 'lg', undefined (no shadow).
        invertedColor: false,
      }),
    }
  },
}
</script>

<style lang="scss">
@import "../sass/main.scss";

body {
  height: 100%;

  #app {
    height: 100%;
  }
}
</style>
