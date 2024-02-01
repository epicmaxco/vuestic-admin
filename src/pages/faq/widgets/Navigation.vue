<template>
  <VaCard class="mb-4 p-6">
    <section class="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-9">
      <div v-for="section in navSections" :key="section" class="mb-6 md:mb-0">
        <h3 class="h5 mb-4">{{ section }}</h3>
        <ul class="leading-5">
          <li v-for="item in navigation[section]" :key="`${section}-${item.name}`" class="mb-4">
            <a class="va-link" href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </section>
  </VaCard>
</template>

<script setup>
import { computed } from 'vue'
import navigation from '../data/navigationLinks.json'

const navSections = computed(() => {
  return Object.keys(navigation)
})
</script>
