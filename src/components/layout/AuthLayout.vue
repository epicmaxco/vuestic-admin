<template>
  <div class="auth-layout">
    <div class="nav hidden-lg-up"><router-link class="i-vuestic" :to="{path: '/'}"></router-link></div>
    <div class="main row">
      <div class="auth-content col-lg-6 col-12">
        <router-view></router-view>
      </div>
      <div class="auth-wallpaper col-6 hidden-md-down">
        <div class="oblique"></div>
        <router-link class="i-vuestic" :to="{path: '/'}"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  }
</script>

<style lang="scss">
  @import '../../sass/variables';
  @import '../../../node_modules/bootstrap/scss/mixins/breakpoints';
  @import '../../../node_modules/bootstrap/scss/variables';
  .auth-layout {
    height: 100%;
    margin: 0;
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $top-mobile-nav-height;
      background-color: $top-nav-bg;
      .i-vuestic {
        height: $auth-mobile-nav-ivuestic-h;
        width: 100%;
      }
    }
    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
      .auth-wallpaper {
        background-color: $top-nav-bg;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .i-vuestic {
          z-index: 2;
          height: $auth-wallpaper-ivuestic-h;
          width: 100%;
        }
        .oblique {
          position: absolute;
          background-color: $auth-wallpaper-oblique-line;
          left: calc(50% - 27%/2);
          transform: rotate(15deg);
          width: 27%;
          height: 115%;
        }
      }
    }

    @include media-breakpoint-down(md) {
      .main {
        height: $auth-mobile-main-h;
        .auth-content {
          align-items: flex-start;
          padding-top: $auth-content-padding-t;
        }
      }
    }
  }
</style>
