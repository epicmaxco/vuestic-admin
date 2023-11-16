<template>
  <VaCard class="colorful-bars progress-bar-widget">
    <VaCardTitle> {{ t('progressBars.colors') }}</VaCardTitle>
    <VaCardContent class="my-3 grid grid-cols-12 gap-6">
      <div v-for="n in 6" :key="`pb-${n}`" class="flex md:col-span-4 col-span-12">
        <VaProgressBar :color="colors[n - 1]" :model-value="(value * n) / 6">
          {{ colors[n - 1] }}
        </VaProgressBar>
      </div>
      <div v-for="n in 6" :key="`pc-${n}`" class="flex md:col-span-2 col-span-6">
        <VaProgressCircle :color="colors[n - 1]" :model-value="(value * n) / 6" class="m-auto">
          <span class="text-[0.625rem]">
            {{ colors[n - 1] }}
          </span>
        </VaProgressCircle>
      </div>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
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
