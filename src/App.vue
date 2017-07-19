<template>
  <div id="app" class="app">
    <auth-layout v-if="isAuth"></auth-layout>
    <layout v-else></layout>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import AuthLayout from './components/layout/AuthLayout'

  export default {
    name: 'app',
    components: {
      AuthLayout,
      Layout
    },
    computed: {
      isAuth () {
        return this.$route.path.match('auth')
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/main";

  body {
    height: 100%;
    .app {
      height: 100%;
    }
  }
</style>
