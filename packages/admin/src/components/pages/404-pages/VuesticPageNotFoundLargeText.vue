<template>
  <div class="vuestic-page-not-found-large-text">
    <div class="vuestic-page-not-found-large-text__content">
      <div class="vuestic-page-not-found-large-text__wallpaper text--center overflow--hidden">
        <h1 class="vuestic-page-not-found-large-text__number mb-0">404</h1>
      </div>
      <div class="vuestic-page-not-found-large-text__wallpaper text--center overflow--hidden">
        <h3 class="vuestic-page-not-found-large-text__text">The page's gone
          fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-large-text__wallpaper overflow--hidden flex md12">
        <div class="va-row vuestic-page-not-found-large-text__message justify--center">
          <span class="vuestic-page-not-found-large-text__text-small mt-4">
            If you feel that it's not right, please send us a message at &nbsp;
          </span>
          <a class="mt-4" href="mailto:hello@epicmax.co">hello@epicmax.co</a>
        </div>
      </div>
      <div class="vuestic-page-not-found-large-text__wallpaper text--center py-3 overflow--hidden">
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
  name: 'vuestic-page-not-found-large-text',
  components: {
    MadeByComponent,
    VuesticPageNotFoundSadWallpaper,
  },
}
</script>

<style lang="scss">
.vuestic-page-not-found-large-text {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;

  &__number {
    font-size: 350px;
    line-height: 1.4;
    letter-spacing: 1rem;
    margin-right: -1rem;
  }

  &__wallpaper {
    color: $white;
    background-color: $top-nav-bg;
  }

  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-large-text {

      &__number {
        font-size: 150px;
      }

      &__text-small {
        font-size: 15px;
      }
    }
  }
}
</style>
