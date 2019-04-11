<template>
  <div class="auth-layout ma-0 justify--center">
    <div class="flex-center flex-column auth-layout__inner">
      <va-icon-vuestic/>
      <router-view/>
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
  min-height: 100vh;
  background-image: linear-gradient(to right, #0e4ac4, #002c85);
  padding-top: 12%;
  @include media-breakpoint-down(sm) {
    padding-top: 8%;
  }
  .va-icon-vuestic {
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
    margin-bottom: 5.625rem;
  }
}
</style>
