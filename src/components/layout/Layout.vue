<template>
  <div :class="classObject" v-resize>
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="content-wrap" id="content-wrap">
      <main id="content" class="content" role="main">
        <vuestic-pre-loader v-show="isLoading" ref="preLoader" class="pre-loader"></vuestic-pre-loader>
        <router-view v-show="!isLoading"></router-view>
      </main>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import Navbar from './navbar/Navbar'
  import Sidebar from './sidebar/Sidebar'
  import Resize from 'directives/ResizeHandler'
  import VuesticPreLoader from '../vuestic-components/vuestic-preloader/VuesticPreLoader.vue'

  export default {
    name: 'layout',

    components: {
      VuesticPreLoader,
      Navbar,
      Sidebar
    },
    directives: {
      resize: Resize
    },
    computed: {
      ...mapGetters([
        'sidebarOpened',
        'toggleWithoutAnimation',
        'isLoading'
      ]),
      classObject: function () {
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
  @import "../../../node_modules/bootstrap/scss/mixins/breakpoints";
  @import "../../../node_modules/bootstrap/scss/variables";

  .content-wrap {
    margin-left: $content-wrap-ml;
    padding: $content-wrap-pt $content-wrap-pr $content-wrap-pb 0;
    transition: margin-left 0.3s ease;

    .pre-loader {
      position: absolute;
      left: $vuestic-preloader-left;
      top: $vuestic-preloader-top;
    }

    .sidebar-hidden & {
      margin-left: $sidebar-left;
    }

    @include media-breakpoint-down(md) {
      padding: $content-mobile-wrap;
      margin-left: 0;

      .sidebar-hidden & {
        margin-left: 0;
      }
    }
  }
</style>
