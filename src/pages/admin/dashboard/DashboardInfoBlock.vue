<template>
  <div class="pt-6 grid grid-cols-12 gap-6">
    <div class="col-span-12 lg:col-span-6 flex flex-wrap">
      <div class="w-full pb-6 grid grid-cols-12 gap-6">
        <va-card v-for="(info, idx) in infoTiles" :key="idx" class="col-span-12 sm:col-span-4 mb-8" :color="info.color">
          <va-card-content>
            <h2 class="va-h2 m-0 text-white">{{ info.value }}</h2>
            <p class="text-white">{{ t('dashboard.info.' + info.text) }}</p>
          </va-card-content>
        </va-card>
      </div>

      <div class="w-full grid grid-cols-12 gap-6">
        <va-card class="col-span-12 sm:col-span-6">
          <va-card-content class="h-full flex flex-col justify-center">
            <h2 class="va-h2 m-0" :style="{ color: colors.primary }">291</h2>
            <p class="no-wrap">{{ t('dashboard.info.completedPullRequests') }}</p>
          </va-card-content>
        </va-card>
        <va-card class="col-span-12 sm:col-span-6">
          <va-card-content class="grid grid-cols-12 row-separated">
            <div class="col-span-4 p-4 flex flex-col">
              <h2 class="va-h2 m-0 va-text-center" :style="{ color: colors.primary }">3</h2>
              <p class="va-text-center">{{ t('dashboard.info.users') }}</p>
            </div>
            <div class="col-span-4 p-4 flex flex-col">
              <h2 class="va-h2 m-0 va-text-center" :style="{ color: colors.info }">24</h2>
              <p class="va-text-center no-wrap">{{ t('dashboard.info.points') }}</p>
            </div>
            <div class="col-span-4 p-4 flex flex-col">
              <h2 class="va-h2 m-0 va-text-center" :style="{ color: colors.warning }">91</h2>
              <p class="va-text-center">{{ t('dashboard.info.units') }}</p>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="flex col-span-12 sm:col-span-6 lg:col-span-3">
      <va-card stripe stripe-color="info">
        <va-card-title>
          {{ t('dashboard.info.componentRichTheme') }}
        </va-card-title>
        <va-card-content>
          <p class="rich-theme-card-text">
            Buying the right telescope to take your love of astronomy to the next level is a big next step.
          </p>

          <div class="mt-4">
            <va-button color="primary" target="_blank" href="https://github.com/epicmaxco/vuestic-ui">
              {{ t('dashboard.info.viewLibrary') }}
            </va-button>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <va-card class="col-span-12 sm:col-span-6 lg:col-span-3">
      <va-image :src="images[currentImageIndex]" style="height: 200px" />
      <va-card-title>
        <va-button preset="plain" icon-right="fa-arrow-circle-right" @click="showModal">
          {{ t('dashboard.info.exploreGallery') }}
        </va-button>
      </va-card-title>
    </va-card>

    <va-modal v-model="modal">
      <va-carousel v-model="currentImageIndex" :items="images" class="gallery-carousel" />
    </va-modal>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { VaCarousel, VaModal, VaCard, VaCardContent, VaCardTitle, VaButton, VaImage, useColors } from 'vuestic-ui'

  const { t } = useI18n()
  const { colors } = useColors()

  const infoTiles = ref([
    {
      color: 'success',
      value: '803',
      text: 'commits',
      icon: '',
    },
    {
      color: 'danger',
      value: '57',
      text: 'components',
      icon: '',
    },
    {
      color: 'info',
      value: '5',
      text: 'teamMembers',
      icon: '',
    },
  ])

  const modal = ref(false)
  const currentImageIndex = ref(0)
  const images = ref([
    'https://i.imgur.com/qSykGko.jpg',
    'https://i.imgur.com/jYwT08D.png',
    'https://i.imgur.com/9930myH.jpg',
    'https://i.imgur.com/2JxhWD6.jpg',
    'https://i.imgur.com/MpiOWbM.jpg',
  ])

  function showModal() {
    modal.value = true
  }
</script>

<style lang="scss" scoped>
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background-primary);
    }
  }

  .rich-theme-card-text {
    line-height: 1.5;
  }

  .gallery-carousel {
    width: 80vw;
    max-width: 100%;

    @media all and (max-width: 576px) {
      width: 100%;
    }
  }
</style>
