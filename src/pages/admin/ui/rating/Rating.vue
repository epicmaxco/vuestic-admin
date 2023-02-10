<template>
  <div class="rating grid grid-cols-12 gap-6">
    <va-card class="md:col-span-6 col-span-12">
      <va-card-title>{{ t('rating.singleIcon') }}</va-card-title>
      <va-card-content>
        <va-rating v-model="value" color="danger" />
      </va-card-content>
    </va-card>
    <va-card class="md:col-span-6 col-span-12">
      <va-card-title>{{ t('rating.twoIcons') }}</va-card-title>
      <va-card-content>
        <va-rating v-model="value" icon="bell_slash" empty-icon="bell" />
      </va-card-content>
    </va-card>
    <va-card class="md:col-span-6 col-span-12">
      <va-card-title>{{ t('rating.small') }}</va-card-title>
      <va-card-content>
        <va-rating v-model="value" size="small" color="warning" />
      </va-card-content>
    </va-card>
    <va-card class="md:col-span-6 col-span-12">
      <va-card-title>{{ t('rating.large') }}</va-card-title>
      <va-card-content>
        <va-rating v-model="value" size="large" color="info" />
      </va-card-content>
    </va-card>
    <va-card class="md:col-span-6 col-span-12">
      <va-card-title>{{ t('rating.numbers') }}</va-card-title>
      <va-card-content>
        <va-rating v-model="value" numbers />
      </va-card-content>
    </va-card>
    <va-card class="md:col-span-6 col-span-12">
      <va-card-title>{{ t('rating.halves') }}</va-card-title>
      <va-card-content>
        <va-rating v-model="value" color="success" size="large" halves />
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const value = ref(2)
</script>
