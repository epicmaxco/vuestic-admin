<template>
  <div class="color-pickers vuestic-color-picker-page grid grid-cols-12 gap-6">
    <va-card class="col-span-12">
      <va-card-title>{{ t('menu.colorPickers') }}</va-card-title>
      <va-card-content>
        <va-color-input v-model="value" />
      </va-card-content>
    </va-card>

    <va-card class="col-span-12">
      <va-card-title>Simple Inline</va-card-title>
      <va-card-content>
        <va-color-palette v-model="paletteValue" :palette="palette" />
      </va-card-content>
    </va-card>
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
