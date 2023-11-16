<template>
  <div class="rating grid grid-cols-12 gap-6">
    <VaCard class="md:col-span-6 col-span-12">
      <VaCardTitle>{{ t('rating.singleIcon') }}</VaCardTitle>
      <VaCardContent>
        <VaRating v-model="value" color="danger" />
      </VaCardContent>
    </VaCard>
    <VaCard class="md:col-span-6 col-span-12">
      <VaCardTitle>{{ t('rating.twoIcons') }}</VaCardTitle>
      <VaCardContent>
        <VaRating v-model="value" icon="bell_slash" empty-icon="bell" />
      </VaCardContent>
    </VaCard>
    <VaCard class="md:col-span-6 col-span-12">
      <VaCardTitle>{{ t('rating.small') }}</VaCardTitle>
      <VaCardContent>
        <VaRating v-model="value" size="small" color="warning" />
      </VaCardContent>
    </VaCard>
    <VaCard class="md:col-span-6 col-span-12">
      <VaCardTitle>{{ t('rating.large') }}</VaCardTitle>
      <VaCardContent>
        <VaRating v-model="value" size="large" color="info" />
      </VaCardContent>
    </VaCard>
    <VaCard class="md:col-span-6 col-span-12">
      <VaCardTitle>{{ t('rating.numbers') }}</VaCardTitle>
      <VaCardContent>
        <VaRating v-model="value" numbers />
      </VaCardContent>
    </VaCard>
    <VaCard class="md:col-span-6 col-span-12">
      <VaCardTitle>{{ t('rating.halves') }}</VaCardTitle>
      <VaCardContent>
        <VaRating v-model="value" color="success" size="large" halves />
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const value = ref(2)
</script>
