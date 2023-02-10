<template>
  <div class="grid grid-cols-12 gap-6">
    <va-card class="col-span-12 sm:col-span-6">
      <va-card-title>{{ t('colors.themeColors') }}</va-card-title>
      <va-card-content>
        <div v-for="(themeColor, index) in themeColors" :key="index">
          <color-presentation :color="themeColor.color" :name="themeColor.name" :description="themeColor.description" />
        </div>
      </va-card-content>
    </va-card>

    <va-card class="col-span-12 sm:col-span-6">
      <va-card-title>{{ t('colors.extraColors') }}</va-card-title>
      <va-card-content>
        <div v-for="(extraColor, index) in extraColors" :key="index">
          <color-presentation :color="extraColor.color" :name="extraColor.name" :description="extraColor.description" />
        </div>
      </va-card-content>
    </va-card>

    <va-card class="col-span-12 md:col-span-4">
      <va-card-title>{{ t('colors.gradients.basic.title') }}</va-card-title>
      <va-card-content>
        <div v-for="(buttonGradient, index) in buttonGradients" :key="index">
          <color-presentation
            :color="buttonGradient.color"
            :variant="['gradient']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
          />
        </div>
      </va-card-content>
    </va-card>

    <va-card class="col-span-12 md:col-span-4">
      <va-card-title>{{ t('colors.gradients.hovered.title') }}</va-card-title>
      <va-card-content>
        <p class="mt-0 mb-2">
          {{ t('colors.gradients.hovered.text') }}
        </p>
        <div v-for="(buttonGradient, index) in buttonGradients" :key="index">
          <color-presentation
            :color="buttonGradient.color"
            :variant="['gradient', 'hovered']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
          />
        </div>
      </va-card-content>
    </va-card>

    <va-card class="col-span-12 md:col-span-4">
      <va-card-title>{{ t('colors.gradients.pressed.title') }}</va-card-title>
      <va-card-content>
        <p class="mt-0 mb-2">
          {{ t('colors.gradients.pressed.text') }}
        </p>
        <div v-for="(buttonGradient, index) in buttonGradients" :key="index">
          <color-presentation
            :color="buttonGradient.color"
            :variant="['gradient', 'pressed']"
            :name="buttonGradient.name"
            :description="buttonGradient.description"
          />
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import ColorPresentation from './color-presentation/ColorPresentation.vue'
  import { themeColors, extraColors, buttonGradients } from './color-presentation/colorsData'

  const { t } = useI18n()
</script>
