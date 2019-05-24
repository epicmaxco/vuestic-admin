<template>
  <nav class="va-navbar navbar navbar-toggleable-md">
    <div
      class="va-navbar__logo navbar-brand-container align--center justify--start">
      <router-link class="navbar-brand" to="/dashboard">
        <slot name="logo"/>
      </router-link>
    </div>
    <div class="va-row va-navbar__content">
      <div
        class="header-elem-wrapper menu-icon-container d-flex justify--start col">
        <slot name="selector"></slot>
      </div>
      <div
        class="header-elem-wrapper navbar-text flex offset--md3 md5">
        <slot name="center"></slot>
      </div>
      <slot></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'va-navbar',
}
</script>

<style lang="scss">
$nav-mobile-padding-h: .875rem;
$nav-mobile-pt: 1.75rem;
$nav-mobile-pb: 0.5rem;
$nav-mobile-brand-width: 4rem;
$nav-mobile-brand-top: .875rem;
$nav-mobile-brand-left: calc(50% - #{$nav-mobile-brand-width});
$dropdown-mobile-show-b: 2rem;
$navbar-dd-item-height: 48px;

.va-navbar {
  .layout-fixed & {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .header-elem-wrapper {
    display: flex;
    align-items: center;
  }

  .va-navbar__content {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .navbar-text {
    display: flex;
  }

  @include media-breakpoint-down(xs) {
    .navbar-text {
      display: none;
    }
  }

  height: $top-nav-height;
  padding-left: $nav-padding-left;
  padding-right: $nav-padding-right;
  background-color: $top-nav-bg;

  .va-navbar__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 3;
    height: 100%;
    left: $navbar-brand-container-left;
    top: 0;

    @include media-breakpoint-down(md) {

      .va-navbar__logo {
        width: $nav-mobile-brand-width;
        top: $nav-mobile-brand-top;
        left: $nav-mobile-brand-left;
        height: auto;

        .navbar-brand {
          height: $font-size-smaller;
          padding: 0;
          font-size: $font-size-smaller;
        }
      }
    }
  }

  .menu-icon-container {
    padding: 0;
    font-size: $font-size-base;
  }

  .nav-item {
    padding: 0;
    height: 100%;
  }

  .dropdown.navbar-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;

    .dropdown-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      &:after {
        display: none;
      }
    }

    &.show {
      @include media-breakpoint-up(lg) {
        .dropdown-menu {
          left: auto;
          right: 0;
        }
      }

      &:after {
        position: absolute;
        bottom: -$dropdown-show-b;
        right: calc(50% - 10px);
        width: 0;
        height: 0;
        display: block;
        content: '';
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid $darkest-gray;
      }
    }

    .dropdown-menu {
      margin-top: $dropdown-show-b;
      padding-top: 0;
      width: 100%;
    }

    .dropdown-item {
      height: $navbar-dd-item-height;
      cursor: pointer;
      font-size: $font-size-base;
      color: $white;

      &:hover, &:active, &:focus, &.active {
        outline: none;
      }

      &.plain-link-item {
        color: $brand-primary;

        &:hover, &:active, &:focus {
          background: $dropdown-background;
        }

        .plain-link {
          text-decoration: none;
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    height: $top-mobile-nav-height;
    padding: $nav-mobile-pt $nav-mobile-padding-h $nav-mobile-pb $nav-mobile-padding-h;

    .va-navbar__logo {
      top: $nav-mobile-brand-top;
      left: $nav-mobile-brand-left;
      height: auto;

      .navbar-brand {
        height: $font-size-smaller;
        padding: 0;
        font-size: $font-size-smaller;
      }
    }

    .dropdown.navbar-dropdown {
      &.show {
        display: flex;

        &:after {
          bottom: -$dropdown-mobile-show-b;
          z-index: 2;
        }

        .dropdown-menu {
          margin-top: $dropdown-mobile-show-b;
          left: auto;

          &.last {
            right: 0;
          }
        }
      }
    }
  }
}
</style>
