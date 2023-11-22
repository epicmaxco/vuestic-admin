<template>
  <div class="color-pickers vuestic-color-picker-page grid grid-cols-12 gap-6">
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('menu.colorPickers') }}</VaCardTitle>
      <VaCardContent>
        <VaColorInput v-model="value" />
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>Simple Inline</VaCardTitle>
      <VaCardContent>
        <VaColorPalette v-model="paletteValue" :palette="palette" />
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const colorArray = ['#4ae387', '#e34a4a', '#4ab2e3', '#db76df', '#f7cc36']

const palette = ref(colorArray)
const paletteValue = ref(colorArray[0])
const value = ref('#4AE387')
</script>
