<template>
  <router-view/>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui';
import globalConfig from './services/vuestic-ui/global-config'

export default {
  mounted() {
    // TODO: move this to main.ts after fix https://github.com/epicmaxco/vuestic-ui/issues/532
    const { setGlobalConfig } = useGlobalConfig()

    setGlobalConfig(globalConfig)
  }
}
</script>

<style lang="scss">
@import '~@/sass/main.scss';
#app {
  // TODO: change default font to Source Sans Pro
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.flex {
  // TODO: temp fix of old vuestic-admin
  padding: .75rem;
}
</style>
