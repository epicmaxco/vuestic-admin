<template>
  <div class="color-pickers vuestic-color-picker-page">
    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12">
        <va-card>
          <va-card-title>{{ t('menu.colorPickers') }}</va-card-title>
          <va-card-content class="grid grid-cols-12">
            <div class="flex xs:col-span-4 md:col-span-2">
              <div class="vuestic-color-picker-page__top-square">
                <span class="title no-wrap" :style="{ color: colors.primary }">
                  {{ t('colorPickers.simple') }}
                </span>
                <va-color-picker v-model="topSimpleSquareColor" :palette="palette" />
              </div>
            </div>
            <div class="flex xs:col-span-4 md:col-span-2">
              <div class="vuestic-color-picker-page__top-square">
                <span class="title no-wrap" :style="{ color: colors.primary }">
                  {{ t('colorPickers.slider') }}
                </span>
                <va-color-picker v-model="topSliderSquareColor" mode="slider" />
              </div>
            </div>
            <div class="flex xs:col-span-4 md:col-span-2">
              <div class="vuestic-color-picker-page__top-square">
                <span class="title no-wrap" :style="{ color: colors.primary }">
                  {{ t('colorPickers.advanced') }}
                </span>
                <va-color-input v-model="topAdvancedSquareColor" mode="advanced" />
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12">
        <va-card>
          <va-card-title>Simple Inline</va-card-title>
          <va-card-content class="grid grid-cols-12">
            <div class="flex md:col-span-1">
              <va-color-square :value="simpleColor" />
            </div>
            <div class="flex md:col-span-2">
              <va-color-palette v-model="simpleColor" :palette="palette" />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12">
        <va-card>
          <va-card-title>Slider</va-card-title>
          <va-card-content class="grid grid-cols-12">
            <div class="flex xs:col-span-12 md:col-span-1">
              <va-color-square :value="sliderColor" />
            </div>
            <div class="flex md:col-span-6 xs:col-span-12">
              <va-color-slider v-model="sliderColor" />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12">
        <va-card>
          <va-card-title>Advanced</va-card-title>
          <va-card-content class="grid grid-cols-12">
            <div class="flex md:col-span-1">
              <va-color-square :value="advancedColor" />
            </div>
            <div class="flex md:col-span-7">
              <va-color-picker v-model="advancedColor" />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useColors } from 'vuestic-ui'

  const topSimpleSquareColor = '#f81953'
  const topSliderSquareColor = '#34495e'
  const topAdvancedSquareColor = '#ffd50a'
  const sliderColor = '#2e5e2a'
  const advancedColor = '#ffd50a'
  const simpleColor = '#f81953'
  const palette = []
  const { colors } = useColors()
</script>
