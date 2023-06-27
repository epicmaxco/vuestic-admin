<template>
  <va-card class="horizontal-bars">
    <va-card-title>
      {{ t('progressBars.horizontal') }}
    </va-card-title>
    <va-card-content class="my-3 grid grid-cols-12 gap-6">
      <div class="flex md:col-span-4 col-span-12">
        <va-progress-bar :model-value="value / 3" />
      </div>
      <div class="flex md:col-span-4 col-span-12">
        <va-progress-bar :model-value="value2" />
      </div>
      <div class="flex md:col-span-4 col-span-12">
        <va-progress-bar :model-value="value3" />
      </div>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const value = ref(0)
  const value2 = ref(66)
  const value3 = ref(100)
</script>
