<template>
  <div class="auth-layout">
    <div class="nav d-lg-none">
      <router-link :to="{path: '/'}">
        <vuestic-icon-vuestic/>
      </router-link>
    </div>
    <div class="main va-row">
      <div class="auth-content flex lg6 md12 xs12">
        <router-view></router-view>
      </div>
      <div class="auth-wallpaper flex md6">
        <div class="oblique"></div>
        <router-link class="auth-wallpaper__logo" :to="{path: '/'}">
          <vuestic-icon-vuestic/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// d-none and d-lg-flex were deleted, bug will be fixed in the nearest update
import VuesticIconVuestic
  from '../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'

export default {
  name: 'AuthLayout',
  components: { VuesticIconVuestic },
}
</script>

<style lang="scss">
.auth-layout {
  height: 100vh;
  margin: 0;
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $top-mobile-nav-height;
    background-color: $top-nav-bg;
    .vuestic-icon-vuestic {
      height: $auth-mobile-nav-ivuestic-h;
      width: 100%;
    }
  }
  .main {
    margin: 0;
    height: 100vh;
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
      &__logo {
        height: $auth-wallpaper-ivuestic-h;
        z-index: 2;
        width: 100%;
      }
      .vuestic-icon-vuestic {
        height: $auth-wallpaper-ivuestic-h;
        width: 100%;
      }
      .oblique {
        position: absolute;
        background-color: $auth-wallpaper-oblique-line;
        left: calc(50% - 27% / 2);
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
