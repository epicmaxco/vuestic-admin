<template>
  <div class="va-page-not-found justify--center pb-5" :style="pageNotFoundStyle" v-bind="$attrs">
    <div class="va-page-not-found__inner align--center">
      <slot name="image"/>
      <div class="va-page-not-found__title text--center mb-4">{{$t('404.title')}}</div>
      <div class="va-page-not-found__text px-4 text--center">
        <span>
          {{$t('404.text')}}
        </span>
        <a href="mailto:hello@epicmax.co" :style="{color: theme.primary}" class="link">hello@epicmax.co</a>
      </div>
      <slot/>
      <!-- <va-button v-if="!withoutButton" :to="{ name: 'dashboard' }">{{$t('404.back_button')}}</va-button> -->
    </div>
    <made-by-component/>
    <div class="va-page-not-found__wallpaper">
      <wallpaper :color="wallpaperColor"/>
    </div>
  </div>
</template>

<script>
import MadeByComponent from './MadeByComponent'
import Wallpaper from './Wallpaper'
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'va-page-not-found',
  // mixins: [ColorThemeMixin],
  // inject: ['contextConfig'],
  components: {
    MadeByComponent,
    Wallpaper,
  },
  props: { withoutButton: Boolean },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    },
    pageNotFoundStyle () {
      return {
        // color: this.contextConfig.invertedColor ? this.$themes.dark : 'white',
        color: 'var(--va-gray)',
        // backgroundColor: this.contextConfig.invertedColor ? 'white' : this.$themes.danger,
        backgroundColor: this.theme.danger,
        // backgroundImage: this.contextConfig.gradient && 'linear-gradient(to right, #ff2175, #d30505)',
        backgroundImage: 'linear-gradient(to right, var(--va-white), var(--va-white))',
      }
    },
    wallpaperColor () {
      // return this.contextConfig.invertedColor ? this.$themes.dark : '#e4ff32'
      return 'var(--va-primary)'
    },
  },
}
</script>

<style lang="scss">
  .va-page-not-found {
    min-height: 100vh;
    display: flex;
    padding-top: 10%;
    position: relative;

    // @include media-breakpoint-down(sm) {
    //   padding-top: 8%;
    // }

    &__inner {
      display: flex;
      flex-direction: column;
      max-width: 100%;

      .va-icon-vuestic {
        width: 19rem;
        height: 2rem;
        margin-bottom: 13%;
      }
    }

    &__title {
      font-size: 3rem;
      line-height: 1.25em;
      font-weight: 500;

      // @include media-breakpoint-down(xs) {
      //   font-size: 1.5rem;
      // }
    }

    &__text {
      margin-bottom: 2.5rem;
    }

    &__wallpaper {
      position: absolute;
      bottom: 0;
      left: 1rem;
      width: 30%;
      height: 40%;

      // @include media-breakpoint-down(xs) {
      //   display: none;
      // }
    }
  }
</style>
