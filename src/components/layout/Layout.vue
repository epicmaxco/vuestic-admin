<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './navbar/Navbar'
  import Sidebar from './sidebar/Sidebar'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar
    }
  }
</script>

<style lang="scss">

</style>
