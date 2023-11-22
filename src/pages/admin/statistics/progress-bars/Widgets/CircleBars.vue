<template>
  <VaCard class="circle-bars">
    <VaCardTitle>
      {{ t('progressBars.circle') }}
    </VaCardTitle>
    <VaCardContent class="my-3 grid grid-cols-12 gap-6">
      <div v-for="n in 10" :key="n" class="col-span-4 sm:col-span-2 lg:col-span-1 flex justify-center">
        <VaProgressCircle :model-value="(value * n) / 10">{{ (value * n) / 10 }}%</VaProgressCircle>
      </div>
      <div class="col-span-4 sm:col-span-2 lg:col-span-1 flex justify-center">
        <VaProgressCircle indeterminate />
      </div>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
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
