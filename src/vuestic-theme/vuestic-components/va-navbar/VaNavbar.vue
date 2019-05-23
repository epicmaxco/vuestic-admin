<template>
  <nav class="va-navbar position-relative">
    <div
      class="va-navbar__icon-container">
      <slot name="selector"></slot>
    </div>
    <div
      class="va-navbar__logo va-row align--center position-absolute mr-3">
      <router-link class="" to="/">
        <slot name="logo"/>
      </router-link>
    </div>
    <div class="va-navbar__content va-row">
      <div
        class="va-navbar__center flex offset--lg2 offset--md3 lg6 flex md4 va-row flex-center">
        <slot name="center"></slot>
      </div>
      <div class="flex md5 lg4 va-navbar__actions align--center justify--end va-row">
        <slot></slot>
      </div>
    </div>
    <div class="va-navbar__shape"/>
  </nav>
</template>

<script>
export default {
  name: 'va-navbar',
}
</script>

<style lang="scss">
$nav-mobile-px: .875rem;
$nav-mobile-py: 1rem;
$nav-mobile-brand-width: 4rem;
$nav-mobile-brand-top: .875rem;
$nav-mobile-brand-left: calc(50% - #{$nav-mobile-brand-width});
$nav-shape-bg: #0a43af;
$nav-border-side-width: 3.1875rem;

.va-navbar {
  height: $top-nav-height;
  padding-left: $nav-padding-left;
  padding-right: $nav-padding-right;
  background-color: $top-nav-bg;
  display: flex;

  &__content {
    z-index: 1;
    align-items: center;
  }

  &__text {
    color: $lighter-gray;
  }

  &__actions {
    margin-left: auto;
  }

  &__logo {
    top: 0;
    bottom: 0;
    left: 3.5rem;
  }

  &__icon-container {
    font-size: $font-size-base;
    display: flex;
    align-items: center;
  }

  &__shape {
    width: 33%;
    max-width: 467px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    border-top: $top-nav-height solid $nav-shape-bg;
    border-left: $nav-border-side-width solid transparent;
    border-right: $nav-border-side-width solid transparent;
    height: 0;
  }

  &__item {
    padding: 0;
    height: 100%;
    .va-dropdown-popper__anchor {
      display: flex;
      justify-content: center;
    }
  }

  @include media-breakpoint-down(md) {
    &__button {
      display: none !important;
    }
    &__item {
      margin-right: .25rem
    }
  }

  @include  media-breakpoint-down(sm) {
    height: $top-mobile-nav-height;
    padding: $nav-mobile-py $nav-mobile-px;
    &__icon-container {
      align-items: flex-start;
      position: absolute;
    }
    &__center {
      display: none;
    }
    &__content {
      align-items: flex-end;
    }
    .va-navbar__logo {
      top: $nav-mobile-brand-top;
      left: $nav-mobile-brand-left;
      height: auto;
      bottom: auto;
      z-index: 1;
      margin-right: 0 !important;
    }
    &__actions {
      margin-left: 0;
    }
    &__shape {
      border-top: $top-mobile-nav-height solid #0a43af;
    }
  }
  @include media-breakpoint-down(xs) {
    &__center {
      display: none;
    }
  }
}
</style>
