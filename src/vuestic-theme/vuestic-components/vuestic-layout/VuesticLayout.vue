<template>
<<<<<<< HEAD:src/components/layout/Layout.vue
  <div class="layout" :class="classObject" v-resize>
    <app-navbar :value="opened" @toggle-menu="toggleSidebar"></app-navbar>
    <sidebar/>
=======
  <div class="layout" v-resize :class="classObject">
    <slot></slot>
>>>>>>> master:src/vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout.vue
    <div class="content-wrap" id="content-wrap">
      <slot name="content"></slot>
    </div>
    <div class="made-by-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>

<<<<<<< HEAD:src/components/layout/Layout.vue
  import store from './../../store'
  import AppNavbar from './app-navbar/AppNavbar'
  import Sidebar from './sidebar/Sidebar'
=======
>>>>>>> master:src/vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout.vue
  import Resize from 'directives/ResizeHandler'

  export default {
    name: 'vuestic-layout',

<<<<<<< HEAD:src/components/layout/Layout.vue
    components: {
      AppNavbar,
      Sidebar
    },
    directives: {
      resize: Resize
    },
=======
>>>>>>> master:src/vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout.vue
    props: {
      fixed: {
        type: Boolean,
        default: false,
      },
    },
<<<<<<< HEAD:src/components/layout/Layout.vue
    data () {
      return {
        opened: true
      }
    },
    methods: {
      toggleSidebar (opened) {
        this.opened = opened
        store.dispatch('toggleSidebar', this.opened)
      }
=======
    directives: {
      resize: Resize
>>>>>>> master:src/vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout.vue
    },
    computed: {
      classObject: function () {
        return {
          'layout-fixed': this.fixed
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .layout {
    &-fixed {
      .content-wrap {
        padding-right: $layout-padding-right;
        padding-top: $sidebar-top;

        @include media-breakpoint-down(md) {
          padding: $content-mobile-wrap-fixed-layout;
          margin-left: 0;

        }
      }
    }
    .content-wrap {
      margin-left: $content-wrap-ml;
      transition: margin-left 0.3s ease;
      padding: $layout-padding $layout-padding-right $content-wrap-pb 0;

      .pre-loader {
        position: absolute;
        left: $vuestic-preloader-left;
        top: $vuestic-preloader-top;
      }
    }
    .made-by-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 25px;
      padding-bottom: $made-by-footer-pb;
      position: absolute;
      bottom: 0;
      height: calc(#{$layout-padding} + #{$widget-mb});
      width: 100%;
    }
  }
</style>
