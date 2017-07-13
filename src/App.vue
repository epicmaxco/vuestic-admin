<template>
  <div id="app">
    <layout :if="isAuthorized"></layout>
    <unauthorized-layout v-else></unauthorized-layout>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import UnauthorizedLayout from 'components/layout/UnauthorizedLayout'

  export default {
    name: 'app',
    props: {
      isAuthorized: {
        default: false
      }
    },
    components: {
      Layout,
      UnauthorizedLayout
    }
  }
</script>

<style lang="scss">
  @import "sass/app.scss";
</style>
