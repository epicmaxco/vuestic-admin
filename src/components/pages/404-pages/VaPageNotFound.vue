<template>
  <div class="va-page-not-found justify--center pb-5">
    <div class="va-page-not-found__inner align--center">
      <slot name="image"/>
      <div class="va-page-not-found__title text--center mb-4">{{$t('404.title')}}</div>
      <div class="va-page-not-found__text px-4 text--center">
        <span>
          {{$t('404.text')}}
        </span>
        <a href="mailto:hello@epicmax.co" class="link">hello@epicmax.co</a>
      </div>
      <slot/>
      <va-button v-if="!withoutButton" :to="{ name: 'dashboard' }">{{$t('404.back_button')}}</va-button>
    </div>
    <made-by-component/>
    <div class="va-page-not-found__wallpaper"/>
  </div>
</template>

<script>
import MadeByComponent from './MadeByComponent'

export default {
  name: 'va-page-not-found',
  components: {
    MadeByComponent,
  },
  props: { withoutButton: Boolean },
}
</script>

<style lang="scss">
  .va-page-not-found {
    min-height: 100vh;
    background-image: linear-gradient(to right, #ff2175, #d30505);
    display: flex;
    padding-top: 12%;
    position: relative;

    @include media-breakpoint-down(sm) {
      padding-top: 8%;
    }

    &__inner {
      display: flex;
      flex-direction: column;

      .va-icon-vuestic {
        width: 19rem;
        height: 2rem;
        margin-bottom: 13%;
      }
    }

    &__title {
      color: $white;
      font-size: 3rem;
      line-height: 1.25em;
      font-weight: 500;

      @include media-breakpoint-down(xs) {
        font-size: 1.5rem;
      }
    }

    &__text {
      margin-bottom: 2.5rem;
      color: $white;
    }

    &__wallpaper {
      position: absolute;
      bottom: 0;
      left: 1rem;
      width: 30%;
      height: 40%;
      background-color: transparent;
      background-image: url("../../../assets/petro.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom center;

      @include media-breakpoint-down(xs) {
        display: none;
      }
    }
  }
</style>
