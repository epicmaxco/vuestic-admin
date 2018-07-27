<template>
  <div class="vuestic-page-not-found-custom">
    <div class="vuestic-page-not-found-custom__content">
      <div class="not-found-wallpaper">
        <router-link class="i-vuestic vuestic-page-not-found-custom__i-vuestic" :to="{path: '/'}"/>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper">
        <img src="https://i.imgur.com/wodIng5.png" class="vuestic-page-not-found-custom__custom-image"/>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper">
        <h3 class="vuestic-page-not-found-custom__text">The page’s gone fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper col-md-12">
        <div class="row vuestic-page-not-found-custom__message">
          <h4 class="vuestic-page-not-found-custom__text-small">If you feel that it's not right, please send us a message at &nbsp</h4>
          <a href="mailto:hello@epicmax.co">hi@epicmax.co</a>
        </div>
      </div>
      <div class="vuestic-page-not-found-custom__wallpaper col-md-12 vuestic-page-not-found-custom__wallpaper-button">
        <router-link :to="{ path: './dashboard' }">
          <button class="btn btn-primary vuestic-page-not-found-custom__button">
            {{ 'Back to Dashboard' }}
          </button>
        </router-link>
      </div>
    </div>
    <div class="vuestic-page-not-found-custom__not-found-wallpaper-sad">
      <img src="https://i.imgur.com/hu80UGU.png" class="vuestic-page-not-found-custom__sad-image"/>
    </div>
    <made-by-component/>
  </div>
</template>

<script>
import MadeByComponent from './MadyByComponent'

export default {
  name: 'vuestic-page-not-found-custom',
  components: {
    MadeByComponent
  }
}
</script>

<style lang="scss">
.vuestic-page-not-found-custom {
  height: 100vh;
  background-color: $top-nav-bg;

  &__custom-image {
    padding-top: 30px;
    width: 30%;
    margin-right: 3%;
  }

  &__wallpaper-button {
    z-index: 1;
    position: absolute;
    background: transparent;
    width: 250px;
    margin-left: 43%;
    min-height: 150px;
  }

  &__button {
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
    padding-top: 3%;
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
    margin-top: 3%;
    z-index: 2;
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
  }

  &__not-found-wallpaper-sad {
    overflow: hidden;
    position: absolute;
    height: 40%;
    width: 100%;
    bottom: 0;
    padding-left: 80%;
  }

  &__wallpaper {
    overflow: hidden;
    background-color: $top-nav-bg;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-custom {
      overflow: hidden;
      height: $auth-mobile-main-h;

      &__custom-image {
        width: 90%;
      }

      &__sad-image {
        width: 200px;
        height: 200px;
        overflow: hidden;
      }

      &__wallpaper-button {
        width: 100%;
        margin-left: 0;
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
