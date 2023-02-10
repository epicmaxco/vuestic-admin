<template>
  <va-card class="circle-bars">
    <va-card-title>
      {{ t('progressBars.circle') }}
    </va-card-title>
    <va-card-content class="my-3 grid grid-cols-12 gap-6">
      <div v-for="n in 10" :key="n" class="col-span-4 sm:col-span-2 lg:col-span-1 flex justify-center">
        <va-progress-circle :model-value="(value * n) / 10">{{ (value * n) / 10 }}%</va-progress-circle>
      </div>
      <div class="col-span-4 sm:col-span-2 lg:col-span-1 flex justify-center">
        <va-progress-circle indeterminate />
      </div>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const value = ref(0)

  onMounted(animateValue)

  function animateValue() {
    setTimeout(() => {
      value.value = 100
    })
  }
</script>
