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
        class="va-navbar__center flex offset--lg3 offset--md3 lg5 flex md4 va-row flex-center">
        <slot name="center"></slot>
      </div>
      <div class="flex md5 lg4 va-navbar__actions align--center va-row">
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
@import "../../vuestic-sass/resources/resources";
$top-nav-height: 4.0625rem;
$top-nav-bg: $dark-blue;
$nav-mobile-px: 1rem;
$nav-padding-left: 1rem;
$nav-padding-right: 2rem;
$nav-mobile-py: 1.1875rem;
$nav-mobile-brand-top: 1.5rem;
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
    width: 9.5rem;
    height: 1rem;
    margin: auto;
    & * {
      max-height: 100%;
      max-width: 100%;
      width: 100%;
      height: 100%;
      display: block;
    }
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
    margin: auto 1.25rem;
    &:last-of-type {
      margin-right: 0;
    }
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
    padding: $nav-mobile-py $nav-mobile-px 1rem;
    &__icon-container {
      align-items: flex-start;
      position: absolute;
      z-index: 10;
    }
    &__center {
      display: none;
    }
    &__content {
      align-items: flex-end;
    }
    &__logo {
      top: $nav-mobile-brand-top;
      left: 3.5rem;
      bottom: auto;
      z-index: 1;
      margin-right: 0 !important;
    }
    &__actions {
      margin-left: 0;
    }
    &__shape {
      display: none;
    }
    &__item {
      margin-right: 0;
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
}
</style>
