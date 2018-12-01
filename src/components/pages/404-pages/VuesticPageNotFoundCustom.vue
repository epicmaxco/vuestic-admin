<template>
  <div class="vuestic-page-not-found-custom">
    <div class="vuestic-page-not-found-custom__content">
      <div class="not-found-wallpaper">
        <router-link class="i-vuestic vuestic-page-not-found-custom__i-vuestic"
                     :to="{path: '/'}"/>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper">
        <img src="https://i.imgur.com/wodIng5.png"
             class="vuestic-page-not-found-custom__custom-image"/>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper">
        <h3 class="vuestic-page-not-found-custom__text">The page’s gone
          fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper flex md12">
        <div class="va-row vuestic-page-not-found-custom__message">
          <h4 class="vuestic-page-not-found-custom__text-small">
            If you feel that it's not right, please send us a message at &nbsp;
          </h4>
          <a href="mailto:hello@epicmax.co">hello@epicmax.co</a>
        </div>
      </div>
      <div
        class="vuestic-page-not-found-custom__wallpaper vuestic-page-not-found-custom__wallpaper-button">
        <router-link :to="{ path: './dashboard' }">
          <button class="btn btn-primary back-button">
            {{'Back to dashboard'}}
          </button>
        </router-link>
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
    padding-top: 60px;
    width: 30%;
    margin-right: 3%;
    min-width: 350px;
  }
  &__wallpaper-button {
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  &__text {
    padding-top: 3%;
    color: white;
  }
  &__text-small {
    font-size: $font-size-root;
    line-height: 1.5;
    text-align: center;
    color: white;
    font-weight: normal;
  }
  &__i-vuestic {
    margin-top: 3%;
    z-index: 2;
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
  }
  &__wallpaper {
    overflow: hidden;
    background-color: $top-nav-bg;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    a {
      margin-top: 2rem;
    }
  }
  &__message {
    justify-content: center;
  }
  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-custom {
      overflow: hidden;
      height: $auth-mobile-main-h;

      &__custom-image {
        width: 90%;
        padding-top: 30px;
        margin-right: 30px;
      }
      &__sad-image {
        width: 200px;
        height: 200px;
        overflow: hidden;
      }
      &__wallpaper-button {
        width: 100%;
        margin-left: 0;

        .back-button {
          max-width: 300px;
          padding-left: 30px;
          padding-right: 30px;
        }
      }
      &__message {
        justify-content: center;
      }
      &__i-vuestic {
        margin-top: 5%;
      }
      &__not-found-wallpaper-sad {
        overflow: hidden;
        height: 25%;
        padding-left: 50%;
      }
      &__text-small {
        font-size: 15px;
      }
    }
  }
}
</style>
