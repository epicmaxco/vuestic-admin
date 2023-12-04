<template>
  <VaButtonSelect :options="options" buttonSize="108px" v-model="theme" selectedColor="backgroundSecondary" backgroundColor="backgroundElement"/>
</template>
<script lang="ts" setup>
import VaButtonSelect from '../../../components/va-button-select/VaButtonSelect.vue'

import { computed } from 'vue'

import { useI18n } from 'vue-i18n'

import { useColors } from 'vuestic-ui'

const { applyPreset, currentPresetName } = useColors()

const theme = computed({
  get() { return currentPresetName.value },
  set(value) { applyPreset(value) },
})

const { t } = useI18n()

const options = [
  { name: t('buttonSelect.dark'), value: 'dark' }, 
  { name: t('buttonSelect.light'), value: 'light' },
]
</script>