<template>
  <div class="grid grid-cols-12 gap-6">
    <VaCard class="col-span-12 sm:col-span-6">
      <VaCardTitle>{{ t('colors.themeColors') }}</VaCardTitle>
      <VaCardContent>
        <div v-for="(themeColor, index) in themeColors" :key="index">
          <ColorPresentation :color="themeColor.color" :name="themeColor.name" :description="themeColor.description" />
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12 sm:col-span-6">
      <VaCardTitle>{{ t('colors.extraColors') }}</VaCardTitle>
      <VaCardContent>
        <div v-for="(extraColor, index) in extraColors" :key="index">
          <ColorPresentation :color="extraColor.color" :name="extraColor.name" :description="extraColor.description" />
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12 md:col-span-4">
      <VaCardTitle>{{ t('colors.gradients.basic.title') }}</VaCardTitle>
      <VaCardContent>
        <div v-for="(buttonGradient, index) in buttonGradients" :key="index">
          <ColorPresentation
            :color="buttonGradient.color"
            :variant="['gradient']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
          />
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12 md:col-span-4">
      <VaCardTitle>{{ t('colors.gradients.hovered.title') }}</VaCardTitle>
      <VaCardContent>
        <p class="mt-0 mb-2">
          {{ t('colors.gradients.hovered.text') }}
        </p>
        <div v-for="(buttonGradient, index) in buttonGradients" :key="index">
          <ColorPresentation
            :color="buttonGradient.color"
            :variant="['gradient', 'hovered']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
          />
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12 md:col-span-4">
      <VaCardTitle>{{ t('colors.gradients.pressed.title') }}</VaCardTitle>
      <VaCardContent>
        <p class="mt-0 mb-2">
          {{ t('colors.gradients.pressed.text') }}
        </p>
        <div v-for="(buttonGradient, index) in buttonGradients" :key="index">
          <ColorPresentation
            :color="buttonGradient.color"
            :variant="['gradient', 'pressed']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
          />
        </div>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import ColorPresentation from './color-presentation/ColorPresentation.vue'
  import { themeColors, extraColors, buttonGradients } from './color-presentation/colorsData'

  const { t } = useI18n()
</script>
