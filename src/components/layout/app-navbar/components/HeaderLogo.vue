<template>
  <div class="navbar-brand-container">
    <router-link class="navbar-brand" to="/dashboard">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'header-logo'
  }
</script>

<style lang="scss">
  @import "../../../../sass/variables";
  @import "../../../../../node_modules/bootstrap/scss/mixins/breakpoints";
  @import "../../../../../node_modules/bootstrap/scss/functions";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  .navbar-brand-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 3;
    height: 100%;
    left: $navbar-brand-container-left;
    top: 0;

    @include media-breakpoint-down(md) {

      .navbar-brand-container {
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

</style>
