<template>
  <div class="not-found-pages">
    <div class="grid grid-cols-12 gap-6">
      <va-card
        v-for="(item, index) in items"
        :key="index"
        class="not-found-pages__cards va-text-center col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
      >
        <va-image :src="item.imageUrl" style="max-height: 200px" />
        <va-card-content>
          {{ item.label }}
          <div class="not-found-pages__button-container pt-4 mb-0">
            <va-button :to="{ name: item.buttonTo }">
              {{ 'View Example' }}
            </va-button>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const items = ref([
    {
      imageUrl: 'https://i.imgur.com/GzUR0Wz.png',
      label: 'Advanced layouts',
      buttonTo: 'not-found-advanced',
    },
    {
      imageUrl: 'https://i.imgur.com/HttcXPi.png',
      label: 'Simple',
      buttonTo: 'not-found-simple',
    },
    {
      imageUrl: 'https://i.imgur.com/dlcZMiG.png',
      label: 'Custom image',
      buttonTo: 'not-found-custom',
    },
    {
      imageUrl: 'https://i.imgur.com/qcOlDz7.png',
      label: 'Large text heading',
      buttonTo: 'not-found-large-text',
    },
  ])
</script>
