<template>
  <div id="auth" class="auth">
    <auth-layout></auth-layout>
  </div>
</template>

<script>
  import AuthLayout from './components/layout/AuthLayout'

  export default {
    name: 'auth',
    components: {
      AuthLayout
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
