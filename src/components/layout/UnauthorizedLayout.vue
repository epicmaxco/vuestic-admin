<template>
  <div class="unauthorized-layout">
    <div class="nav hidden-lg-up"><i class="i-vuestic"></i></div>
    <div class="main row">
      <div class="left-side col-lg-6 col-12">
        <router-view></router-view>
      </div>
      <div class="right-side col-6 hidden-md-down">
        <span class="i-vuestic"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UnauthorizedLayout'
  }
</script>

<style lang="scss">
  @import '../../sass/variables';
  @import '../../../node_modules/bootstrap/scss/mixins/breakpoints';
  @import '../../../node_modules/bootstrap/scss/variables';
  .unauthorized-layout {
    height: 100%;
    margin: 0;
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $top-mobile-nav-height;
      background-color: $top-nav-bg;
      .i-vuestic {
        height: 1.5rem;
        width: 100%;
      }
    }
    .main {
      margin: 0;
      height: 100%;
      .left-side {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
      .right-side {
        .i-vuestic {
          height: 2.625rem;
          width: 100%;
        }
        background-color: $top-nav-bg;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @include media-breakpoint-down(md) {
      .main {
        height: calc(100% - #{$top-mobile-nav-height});
        .left-side {
          align-items: flex-start;
          padding-top: 2.875rem;
        }
      }
    }
  }
</style>
