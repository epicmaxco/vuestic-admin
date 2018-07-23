<template>
  <div class="vuestic-page-not-found-simple">
    <div class="vuestic-page-not-found-simple__content">
      <div class="auth-wallpaper">
        <router-link class="i-vuestic vuestic-page-not-found-simple__i-vuestic" :to="{path: '/'}"/>
      </div>
      <div class="auth-wallpaper">
        <h3 class="vuestic-page-not-found-simple__text">The page's gonna fishing.</h3>
      </div>
      <div class="auth-wallpaper col-md-12">
        <div class="row vuestic-page-not-found-simple__message">
          <h4 class="vuestic-page-not-found-simple__text-small">If you fell that it's not right, please send us a message at &nbsp</h4>
          <a href="mailto:hello@epicmax.co">hi@epicmax.co</a>
        </div>
      </div>
      <div class="auth-wallpaper col-md-12">
        <router-link :to="{ path: './dashboard' }">
          <button class="btn btn-primary vuestic-page-not-found-simple__button">
            {{ 'Back to Dashboard' }}
          </button>
        </router-link>
      </div>
    </div>
    <div class="auth-wallpaper vuestic-page-not-found-simple__auth-wallpaper-sad">
      <img src="https://i.imgur.com/hu80UGU.png" class="vuestic-page-not-found-simple__sad-image"/>
    </div>
    <div class="made-by-footer">
      <span>
        ©2018. Made by &nbsp
        <a href="http://epicmax.co"> Epicmax</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-page-not-found-simple'
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
    width: 50%;
    height: 100%;
  }

  &__content {

    .nav {
      display: flex;
      height: $top-mobile-nav-height;
      background-color: $top-nav-bg;
      .i-vuestic {
        height: $auth-mobile-nav-ivuestic-h;
        width: 100%;
      }
    }
  }

  &__text {
    padding-top: 10%;
    color: white;
  }

  &__text-small {
    font-family: SourceSansPro;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #bbb4b2;
  }

  &__i-vuestic {
    margin-top: 10%;
  }

  &__auth-wallpaper-sad {
    position: absolute;
    height: 30%;
    bottom: 0;
    padding-left: 1000px;
  }

  .auth-wallpaper {
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .i-vuestic {
      z-index: 2;
      height: $auth-wallpaper-ivuestic-h;
      width: 100%;
    }
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

      &__auth-wallpaper-sad {
        padding: 0;
        height: 35%;
      }

      &__text-small {
        font-size: 15px;
      }
    }
  }
  .made-by-footer {
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: $made-by-footer-pb;
    position: absolute;
    bottom: 0;
    height: calc(#{$layout-padding} + #{$widget-mb});
    width: 100%;
  }
}
</style>
