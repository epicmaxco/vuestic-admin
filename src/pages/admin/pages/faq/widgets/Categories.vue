<template>
  <va-input v-model="searchValue" class="mb-4" placeholder="Search">
    <template #appendInner>
      <va-icon name="mso-search" color="secondary" />
    </template>
  </va-input>
  <section v-if="filteredCategories.length" class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
    <template v-for="category in filteredCategories" :key="category.id">
      <va-card class="col-span-3 md:col-span-1 min-h-[146px]" href="#">
        <va-card-content class="leading-5 text-sm">
          <va-icon class="font-light mb-2" size="2rem" color="primary" :name="`mso-${category.icon}`" />
          <h3 class="text-primary mb-2 text-primary text-lg leading-7">{{ category.name }}</h3>
          <p>{{ category.intro }}</p>
        </va-card-content>
      </va-card>
    </template>
  </section>
  <va-alert v-else class="mb-4 leading-5" outline color="info">
    No matches found. Try refining your search or browse through the categories to find the help you need.
  </va-alert>
</template>

<script setup lang="ts">
  import categories from '../data/popularCategories.json'
  import { ref, computed } from 'vue'

  const searchValue = ref('')

  const filteredCategories = computed(() => {
    const value = searchValue.value.trim().toLowerCase()
    if (value.length === 0) {
      return categories
    }
    return categories.filter((category) => {
      return category.intro.toLowerCase().includes(value) || category.name.toLowerCase().includes(value)
    })
  })
</script>
