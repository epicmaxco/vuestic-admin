<template>
  <va-card class="colorful-bars progress-bar-widget">
    <va-card-title> {{ t('progressBars.colors') }} </va-card-title>
    <va-card-content class="my-3 grid grid-cols-12 gap-6">
      <div v-for="n in 6" :key="`pb-${n}`" class="flex md:col-span-4 col-span-12">
        <va-progress-bar :model-value="(value * n) / 6" :color="colors[n - 1]">
          {{ colors[n - 1] }}
        </va-progress-bar>
      </div>
      <div v-for="n in 6" :key="`pc-${n}`" class="flex md:col-span-2 col-span-6">
        <va-progress-circle class="m-auto" :model-value="(value * n) / 6" :color="colors[n - 1]">
          <span class="text-[0.625rem]">
            {{ colors[n - 1] }}
          </span>
        </va-progress-circle>
      </div>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const value = ref(0)
  const colors = ref(['danger', 'success', 'info', 'secondary', 'warning', 'textDark'])

  onMounted(animateValue)

  function animateValue() {
    setTimeout(() => (value.value = 100))
  }
</script>
