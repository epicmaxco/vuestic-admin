<template>
  <div class="pt-6 grid grid-cols-12 gap-6">
    <div class="col-span-12 lg:col-span-6 flex flex-wrap">
      <div class="w-full pb-6 grid grid-cols-12 gap-6">
        <VaCard v-for="(info, idx) in infoTiles" :key="idx" :color="info.color" class="col-span-12 sm:col-span-4 mb-8">
          <VaCardContent>
            <h2 class="va-h2 m-0 text-white">{{ info.value }}</h2>
            <p class="text-white">{{ t('dashboard.info.' + info.text) }}</p>
          </VaCardContent>
        </VaCard>
      </div>

      <div class="w-full grid grid-cols-12 gap-6">
        <VaCard class="col-span-12 sm:col-span-6">
          <VaCardContent class="h-full flex flex-col justify-center">
            <h2 :style="{ color: colors.primary }" class="va-h2 m-0">291</h2>
            <p class="no-wrap">{{ t('dashboard.info.completedPullRequests') }}</p>
          </VaCardContent>
        </VaCard>
        <VaCard class="col-span-12 sm:col-span-6">
          <VaCardContent class="grid grid-cols-12 row-separated">
            <div class="col-span-4 p-4 flex flex-col">
              <h2 :style="{ color: colors.primary }" class="va-h2 m-0 va-text-center">3</h2>
              <p class="va-text-center">{{ t('dashboard.info.users') }}</p>
            </div>
            <div class="col-span-4 p-4 flex flex-col">
              <h2 :style="{ color: colors.info }" class="va-h2 m-0 va-text-center">24</h2>
              <p class="va-text-center no-wrap">{{ t('dashboard.info.points') }}</p>
            </div>
            <div class="col-span-4 p-4 flex flex-col">
              <h2 :style="{ color: colors.warning }" class="va-h2 m-0 va-text-center">91</h2>
              <p class="va-text-center">{{ t('dashboard.info.units') }}</p>
            </div>
          </VaCardContent>
        </VaCard>
      </div>
    </div>

    <div class="flex col-span-12 sm:col-span-6 lg:col-span-3">
      <VaCard stripe stripe-color="info">
        <VaCardTitle>
          {{ t('dashboard.info.componentRichTheme') }}
        </VaCardTitle>
        <VaCardContent>
          <p class="rich-theme-card-text">
            Buying the right telescope to take your love of astronomy to the next level is a big next step.
          </p>

          <div class="mt-4">
            <VaButton color="primary" href="https://github.com/epicmaxco/vuestic-ui" target="_blank">
              {{ t('dashboard.info.viewLibrary') }}
            </VaButton>
          </div>
        </VaCardContent>
      </VaCard>
    </div>

    <VaCard class="col-span-12 sm:col-span-6 lg:col-span-3">
      <VaImage :src="images[currentImageIndex]" style="height: 200px" />
      <VaCardTitle>
        <VaButton icon-right="fa-arrow-circle-right" preset="plain" @click="showModal">
          {{ t('dashboard.info.exploreGallery') }}
        </VaButton>
      </VaCardTitle>
    </VaCard>

    <VaModal v-model="modal">
      <VaCarousel v-model="currentImageIndex" :items="images" class="gallery-carousel" />
    </VaModal>
  </div>
</template>

<script lang="ts" setup>
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
