<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="content-wrap" id="content-wrap">
      <main id="content" class="content" role="main">
        <router-view></router-view>
      </main>
    </div>
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
  @import "../../sass/_variables.scss";

  .content-wrap {
    margin-left: $content-wrap-ml;
    padding: $content-wrap-pt $content-wrap-pr $content-wrap-pb 0;
  }
</style>
