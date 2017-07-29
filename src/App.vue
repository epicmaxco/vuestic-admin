<template>
  <div id="app" class="app">
    <vuestic-pre-loader v-show="showPreLoader"></vuestic-pre-loader>
    <auth-layout v-if="isAuth"></auth-layout>
    <layout v-else></layout>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import AuthLayout from './components/layout/AuthLayout'
  import VuesticPreLoader from './components/common/vuestic-preloader/VuesticPreLoader.vue'

  export default {
    name: 'app',
    components: {
      VuesticPreLoader,
      AuthLayout,
      Layout
    },
    computed: {
      isAuth () {
        return this.$route.path.match('auth')
      }
    },
    created () {
      this.showPreLoader = true
    },
    mounted () {
//      this.showPreLoader = false
    },
    data () {
      return {
        showPreLoader: true
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/main";
  .test {
    display: none;
    &[v-cloak] {
      display: none;
    }
  }
  body {
    height: 100%;
    .app {
      height: 100%;
    }
  }
</style>
