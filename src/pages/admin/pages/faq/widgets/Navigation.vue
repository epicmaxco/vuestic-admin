<template>
  <va-card class="mb-4 p-6">
    <section class="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-9">
      <div v-for="section in navSections" :key="section" class="mb-6 md:mb-0">
        <h5 class="h5 mb-4">{{ section }}</h5>
        <ul class="leading-5">
          <li v-for="item in navigation[section]" :key="`${section}-${item.name}`" class="mb-4">
            <a href="#" class="va-link">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </section>
  </va-card>
</template>

<script setup>
  import { computed } from 'vue'
  import navigation from '../data/navigationLinks.json'

  const navSections = computed(() => {
    return Object.keys(navigation)
  })
</script>
