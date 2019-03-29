<template>
  <div class="auth-layout ma-0">
    <div class="nav flex-center">
      <router-link :to="{path: '/'}">
        <va-icon-vuestic/>
      </router-link>
    </div>
    <div class="main va-row ma-0">
      <div class="auth-content flex-center pa-0 flex lg6 xs12 fill-height">
        <div class="flex-center">
          <router-view/>
        </div>
      </div>
      <div class="auth-layout__auth-wallpaper flex md6">
        <div class="flex-center">
          <div class="auth-layout__auth-wallpaper__cross-line"/>
          <router-link class="auth-layout__auth-wallpaper__logo" :to="{path: '/'}">
            <va-icon-vuestic/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// d-none and d-lg-flex were deleted, bug will be fixed in the nearest update
import VaIconVuestic
  from '../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconVuestic'

export default {
  name: 'AuthLayout',
  components: { VaIconVuestic },
}
</script>

<style lang="scss">
.auth-layout {
  height: 100vh;

  &__auth-wallpaper {
    position: relative;
    background-color: $top-nav-bg;
    overflow: hidden;
    @include va-flex-center();

    &__logo {
      z-index: 2;
      position: absolute;
      height: $auth-wallpaper-ivuestic-h;
      width: 100%;
    }

    .va-icon-vuestic {
      height: $auth-wallpaper-ivuestic-h;
      width: 100%;
    }

    &__cross-line {
      z-index: 1;
      position: absolute;
      background-color: $auth-wallpaper-oblique-line;
      left: calc(50% - 27% / 2);
      transform: rotate(15deg);
      width: 27%;
      height: 115%;
    }
  }

  .nav {
    display: none;
    height: $top-mobile-nav-height;
    background-color: $top-nav-bg;

    .va-icon-vuestic {
      height: $auth-mobile-nav-ivuestic-h;
      width: 100%;
    }
  }

  .main {
    height: 100vh;

    .auth-content {
      background-color: $white;
    }
  }

  @include media-breakpoint-down(md) {
    .nav {
      display: flex;
    }

    .main {
      height: $auth-mobile-main-h;

      .auth-content {
        align-items: flex-start;
      }

      .auth-wallpaper {
        display: none;
      }
    }
  }
}
</style>
