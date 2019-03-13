<template>
  <div class="vuestic-page-not-found-simple">
    <div class="vuestic-page-not-found-simple__content">
      <div class="vuestic-page-not-found-simple__wallpaper text--center overflow--hidden">
        <h3 class="vuestic-page-not-found-simple__text">The page's gone
          fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-simple__wallpaper text--center overflow--hidden flex md12">
        <div class="va-row vuestic-page-not-found-simple__message justify--center">
          <span class="vuestic-page-not-found-simple__text-small mt-4">
            If you feel that it's not right, please send us a message at &nbsp;
          </span>
          <a class="mt-4" href="mailto:hello@epicmax.co">hello@epicmax.co</a>
        </div>
      </div>
      <div class="vuestic-page-not-found-simple__wallpaper text--center py-3 overflow--hidden">
        <va-button :to="{ name: 'dashboard' }">
          {{'Back to dashboard'}}
        </va-button>
      </div>
    </div>
    <vuestic-page-not-found-sad-wallpaper/>
    <made-by-component/>
  </div>
</template>

<script>
import MadeByComponent from './MadeByComponent'
import VuesticPageNotFoundSadWallpaper
  from './VuesticPageNotFoundSadWallpaper.vue'

export default {
  name: 'vuestic-page-not-found-simple',
  components: {
    MadeByComponent,
    VuesticPageNotFoundSadWallpaper,
  },
}
</script>

<style lang="scss">
.vuestic-page-not-found-simple {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;

  &__text {
    padding-top: 10%;
  }

  &__wallpaper {
    color: $white;
    background-color: $top-nav-bg;
  }

  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-simple {

      &__text-small {
        font-size: 15px;
      }
    }
  }
}
</style>
