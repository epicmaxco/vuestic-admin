<template>
  <va-card class="circle-bars">
    <va-card-title>
      {{ t('progressBars.circle') }}
    </va-card-title>
    <va-card-content class="row">
      <div v-for="n in 10" :key="n" class="flex xs4 sm2 lg1">
        <div class="d-flex justify--center">
          <div>
            <va-progress-circle :model-value="(value * n) / 10">{{ (value * n) / 10 }}%</va-progress-circle>
          </div>
        </div>
      </div>
      <div class="flex xs4 sm2 lg1">
        <div class="d-flex justify--center">
          <div>
            <va-progress-circle indeterminate />
          </div>
        </div>
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
