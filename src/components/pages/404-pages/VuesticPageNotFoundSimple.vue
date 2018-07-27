<template>
  <div class="vuestic-page-not-found-simple">
    <div class="vuestic-page-not-found-simple__content">
      <div class="vuestic-page-not-found-simple__wallpaper">
        <router-link class="i-vuestic vuestic-page-not-found-simple__i-vuestic" :to="{path: '/'}"/>
      </div>
      <div class="vuestic-page-not-found-simple__wallpaper">
        <h3 class="vuestic-page-not-found-simple__text">The page's gone fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-simple__wallpaper col-md-12">
        <div class="row vuestic-page-not-found-simple__message">
          <h4 class="vuestic-page-not-found-simple__text-small">If you feel that it's not right, please send us a message at &nbsp</h4>
          <a href="mailto:hello@epicmax.co">hi@epicmax.co</a>
        </div>
      </div>
      <div class="vuestic-page-not-found-simple__wallpaper-button col-md-12">
        <router-link :to="{ path: './dashboard' }">
          <button class="btn btn-primary vuestic-page-not-found-simple__button">
            {{ 'Back to Dashboard' }}
          </button>
        </router-link>
      </div>
    </div>
    <div class=" vuestic-page-not-found-simple__not-found-wallpaper-sad">
      <img src="https://i.imgur.com/hu80UGU.png" class="vuestic-page-not-found-simple__sad-image"/>
    </div>
    <made-by-component/>
  </div>
</template>

<script>
import MadeByComponent from './MadyByComponent'

export default {
  name: 'vuestic-page-not-found-simple',
  components: {
    MadeByComponent
  }
}
</script>

<style lang="scss">
.vuestic-page-not-found-simple {
  height: 100vh;
  background-color: $top-nav-bg;

  &__button {
    margin-top: 25px;
    width: 234px;
    height: 42px;
    padding-left: 22px;
    padding-top: 10px;
    font-size: 16px;
  }

  &__sad-image {
    width: 505px;
    height: 400px;
    bottom: 0;
  }

  &__text {
    padding-top: 10%;
    color: white;
  }

  &__text-small {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: white;
    font-weight: normal;
  }

  &__i-vuestic {
    margin-top: 10%;
  }

  &__not-found-wallpaper-sad {
    position: fixed;
    overflow: hidden;
    height: 40%;
    width: 100%;
    bottom: 0;
    padding-left: 80%;
  }

  &__wallpaper {
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  &__wallpaper-button {
    min-height: 150px;
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  &__i-vuestic {
    z-index: 2;
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
  }

  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-simple {
      height: $auth-mobile-main-h;

      &__message {
        justify-content: center;
      }

      &__i-vuestic {
        margin-top: 5%;
      }

      &__not-found-wallpaper-sad {
        padding: 0;
        height: 45%;
      }

      &__text-small {
        font-size: 15px;
      }
      &__sad-image {
        width: 460px;
        height: 400px;
        padding-left: 100px;
        bottom: 0;
      }
    }
  }
}
</style>
