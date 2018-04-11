<template>
  <div class="layout" :class="classObject"  v-resize>
    <div class="layout layout-fixed"></div>
    <navbar></navbar>
    <sidebar></sidebar>

    <div class="made-by-footer">
      ©2018. Made by&nbsp;<a href="http://epicmax.co" target="_blank">Epicmax</a>
    </div>
    <div class="content-wrap" id="content-wrap">
        <main id="content" class="content" role="main">
          <vuestic-breadcrumbs :breadcrumbs="breadcrumbs"/>
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


  export default {
    name: 'layout',

    components: {
      Navbar,
      Sidebar
    },

    directives: {
      resize: Resize
    },

    props: {
      fixed: {
        type: Boolean,
        default: true,
      }
    },

    computed: {
      ...mapGetters([
        'sidebarOpened',
        'toggleWithoutAnimation',
        'isLoading'
      ]),
      classObject: function () {
        return {
          'layout-fixed': this.fixed,
          'sidebar-hidden': !this.toggleWithoutAnimation && !this.sidebarOpened,
          'sidebar-hidden sidebar-hidden_without-animation': this.toggleWithoutAnimation && !this.sidebarOpened
        }
      },
      breadcrumbs () {
        return this.$store.getters.breadcrumbs(this.$route.name)
      },
    }
  }
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";


  .layout {
    &-fixed {
      .content-wrap {
        padding-top: $sidebar-top;
      }
    }
  }



  .content-wrap {
    margin-left: $content-wrap-ml;
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


  .made-by-footer {
    position: absolute;
    bottom: 0;
    height: calc(#{$layout-padding} + #{$widget-mb});
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
