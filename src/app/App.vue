<template>
  <div id="app" class="app" :class="{'inverted-color': contextConfig.invertedColor}">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // Temporary config for 2.1.
      contextConfig: {
        gradient: true,
        shadow: 'lg', // 3 states: 'sm', 'lg', undefined (no shadow).
        invertedColor: false,
      },
    }
  },
  provide () {
    return {
      contextConfig: this.contextConfig,
    }
  },
}
</script>

<style lang="scss">
@import '../sass/main.scss';

body {
  height: 100%;

  #app {
    height: 100%;
  }
}
</style>
