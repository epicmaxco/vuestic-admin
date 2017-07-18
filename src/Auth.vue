<template>
  <div id="auth" class="auth">
    <unauthorized-layout></unauthorized-layout>
  </div>
</template>

<script>
  import UnauthorizedLayout from './components/layout/UnauthorizedLayout'

  export default {
    name: 'auth',
    components: {
      UnauthorizedLayout
    }
  }
</script>

<style lang="scss">
  @import "sass/main";

  body {
    height: 100%;
    .auth {
      height: 100%;
    }
  }
</style>
