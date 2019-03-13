<template>
  <div class="vuestic-page-not-found-custom">
    <div class="vuestic-page-not-found-custom__content">
      <div class="vuestic-page-not-found-custom__wallpaper text--center
        align--start overflow--hidden">
        <img src="https://i.imgur.com/wodIng5.png"
             class="vuestic-page-not-found-custom__custom-image mr-5 pt-5"/>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper text--center overflow--hidden">
        <h3 class="vuestic-page-not-found-custom__text pt-5">The page’s gone
          fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper d-flex flex justify--center
        align--start md12 overflow--hidden">
        <div class="va-row justify--center vuestic-page-not-found-custom__message">
          <span class="vuestic-page-not-found-custom__text-small mt-4">
            If you feel that it's not right, please send us a message at &nbsp;
          </span>
          <a class="mt-4" href="mailto:hello@epicmax.co">hello@epicmax.co</a>
        </div>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper d-flex justify--center
        align--start py-3 overflow--hidden">
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
  name: 'vuestic-page-not-found-custom',
  components: {
    MadeByComponent,
    VuesticPageNotFoundSadWallpaper,
  },
}
</script>

<style lang="scss">
.vuestic-page-not-found-custom {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;

  &__custom-image {
    width: 30%;
    min-width: 350px;
  }

  &__wallpaper {
    color: $white;
    background-color: $top-nav-bg;
  }

  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-custom {

      &__text-small {
        font-size: 15px;
      }
    }
  }
}
</style>
