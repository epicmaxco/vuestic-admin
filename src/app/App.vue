<template>
  <div id="app" class="app">
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
  watch: {
    // Temporary colors fix for 2.1.
    'contextConfig.invertedColor' (val) {
      const invertedColorClass = 'va-inverted-color'
      if (val) {
        document.body.classList.add(invertedColorClass)
      } else {
        document.body.classList.remove(invertedColorClass)
      }
    },
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
