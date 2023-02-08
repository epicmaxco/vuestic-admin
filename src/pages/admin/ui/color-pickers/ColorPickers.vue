<template>
  <div class="color-pickers vuestic-color-picker-page">
    <div class="grid grid-cols-12">
      <div class="flex col-span-12">
        <va-card>
          <va-card-title>{{ t('menu.colorPickers') }}</va-card-title>
          <va-card-content class="grid grid-cols-12">
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
      <div class="flex col-span-12">
        <va-card>
          <va-card-title>Simple Inline</va-card-title>
          <va-card-content class="grid grid-cols-12">
            <div class="flex md:col-span-2">
              <va-color-palette v-model="simpleColor" :palette="palette" />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useColors } from 'vuestic-ui'

  const topAdvancedSquareColor = '#ffd50a'
  const simpleColor = '#f81953'
  const palette = []
  const { colors } = useColors()
</script>
