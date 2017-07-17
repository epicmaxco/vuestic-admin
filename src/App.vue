<template>
  <div id="app" class="app">
    <layout v-if="isAuthorized"></layout>
    <unauthorized-layout v-else></unauthorized-layout>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import UnauthorizedLayout from 'components/layout/UnauthorizedLayout'

  export default {
    name: 'app',
    components: {
      Layout,
      UnauthorizedLayout
    },
    computed: {
      isAuthorized () {
        return !(this.$route.path === '/login' || this.$route.path === '/signup')
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/app.scss";

  body {
    height: 100%;
    .app {
      height: 100%;
    }
  }
</style>
