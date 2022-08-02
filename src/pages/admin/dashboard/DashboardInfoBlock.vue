<template>
  <div class="row row-equal">
    <div class="flex xl6 xs12">
      <div class="row">
        <div v-for="(info, idx) in infoTiles" :key="idx" class="flex xs12 sm4">
          <va-card class="mb-4" :color="info.color">
            <va-card-content>
              <p class="display-2" style="color: white">{{ info.value }}</p>
              <p style="color: white">{{ t('dashboard.info.' + info.text) }}</p>
            </va-card-content>
          </va-card>
        </div>
      </div>

      <div class="row">
        <div class="flex xs12 md6">
          <va-card>
            <va-card-content>
              <p class="display-2" :style="{ color: theme?.primary }">291</p>
              <p class="no-wrap">{{ t('dashboard.info.completedPullRequests') }}</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 md6">
          <va-card>
            <va-card-content>
              <div class="row row-separated">
                <div class="flex xs4">
                  <p class="display-2 text--center" :style="{ color: theme?.primary }">3</p>
                  <p class="text--center">{{ t('dashboard.info.users') }}</p>
                </div>
                <div class="flex xs4">
                  <p class="display-2 text--center" :style="{ color: theme?.info }">24</p>
                  <p class="text--center no-wrap">{{ t('dashboard.info.points') }}</p>
                </div>
                <div class="flex xs4">
                  <p class="display-2 text--center" :style="{ color: theme?.warning }">91</p>
                  <p class="text--center">{{ t('dashboard.info.units') }}</p>
                </div>
              </div>
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card stripe stripe-color="info">
        <va-card-title>
          {{ t('dashboard.info.componentRichTheme') }}
        </va-card-title>
        <va-card-content>
          <p class="rich-theme-card-text">
            Buying the right telescope to take your love of astronomy to the next level is a big next step.
          </p>

          <div class="mt-3">
            <va-button color="primary" target="_blank" href="https://github.com/epicmaxco/vuestic-ui">
              {{ t('dashboard.info.viewLibrary') }}
            </va-button>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card>
        <va-image :src="images[currentImageIndex]" style="height: 200px" />
        <va-card-title>
          <va-button flat icon-right="fa-arrow-circle-right" @click="showModal">
            {{ t('dashboard.info.exploreGallery') }}
          </va-button>
        </va-card-title>
      </va-card>
    </div>
    <va-modal v-model="modal">
      <va-carousel v-model="currentImageIndex" :items="images" class="gallery-carousel" />
    </va-modal>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import {
    useGlobalConfig,
    VaCarousel,
    VaModal,
    VaCard,
    VaCardContent,
    VaCardTitle,
    VaButton,
    VaImage,
  } from 'vuestic-ui'

  const { getGlobalConfig } = useGlobalConfig()
  const { t } = useI18n()

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

  const theme = computed(() => getGlobalConfig().colors)

  function showModal() {
    modal.value = true
  }
</script>

<style lang="scss" scoped>
  .display-2 {
    margin: 0;
    line-height: 1;
  }
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background);
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
