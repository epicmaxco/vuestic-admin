<template>
  <div class="va-page-not-found justify-center pb-5" :style="pageNotFoundStyle" v-bind="$attrs">
    <div class="va-page-not-found__inner items-center">
      <slot name="image" />
      <div class="va-page-not-found__title text-center mb-8">{{ t('404.title') }}</div>
      <div class="va-page-not-found__text px-4 text-center">
        <span>
          {{ t('404.text') }}
        </span>
        <a href="mailto:hello@epicmax.co" :style="{ color: colors.primary }" class="va-link">hello@epicmax.co</a>
      </div>
      <slot />
      <!-- <va-button v-if="!withoutButton" :to="{ name: 'dashboard' }">{{t('404.back_button')}}</va-button> -->
    </div>
    <made-by-component />
    <div class="va-page-not-found__wallpaper">
      <wallpaper :color="wallpaperColor" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import MadeByComponent from './MadeByComponent.vue'
  import Wallpaper from './Wallpaper.vue'
  import { useColors } from 'vuestic-ui'
  import { useI18n } from 'vue-i18n'
  import { computed } from 'vue'

  const { colors } = useColors()
  const { t } = useI18n()

  defineProps<{
    withoutButton?: boolean
  }>()

  const pageNotFoundStyle = computed(() => {
    return {
      color: colors.secondary,
      backgroundColor: colors.backgroundPrimary,
    }
  })

  const wallpaperColor = computed(() => {
    return 'var(--va-primary)'
  })
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
