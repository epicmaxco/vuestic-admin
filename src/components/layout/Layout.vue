<template>
  <div :class="classObject">
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
  import {mapGetters} from 'vuex'

  import Navbar from './navbar/Navbar'
  import Sidebar from './sidebar/Sidebar'

  export default {
    name: 'layout',

    components: {
      Navbar,
      Sidebar
    },
    computed: {
      ...mapGetters([
        'sidebarOpened',
        'toggleWithoutAnimation'
      ]),
      classObject: function () {
        console.log(this.toggleWithoutAnimation)
        return {
          'sidebar-hidden': !this.toggleWithoutAnimation && !this.sidebarOpened,
          'sidebar-hidden sidebar-hidden_without-animation': this.toggleWithoutAnimation && !this.sidebarOpened
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
  @import "../../../node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css";
  @import "../../../node_modules/bootstrap/scss/mixins/breakpoints";
  @import "../../../node_modules/bootstrap/scss/variables";

  .content-wrap {
    margin-left: $content-wrap-ml;
    padding: $content-wrap-pt $content-wrap-pr $content-wrap-pb 0;
    transition: margin-left 0.3s ease;

    .sidebar-hidden & {
      margin-left: $sidebar-left;
    }

    @include media-breakpoint-down(md) {
      margin-left: $content-mobile-wrap-margin;
      padding-top: $layout-mobile-padding;
      padding-right: $content-mobile-wrap-margin;

      .sidebar-hidden & {
        margin-left: $content-mobile-wrap-margin;
      }
    }
  }
</style>
