<template>
  <section className="place-content-center grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-5 xl:gap-9">
    <div v-for="section in navSections" :key="section" class="mb-10 md:mb-0">
      <h3 class="mb-4">{{ section }}</h3>
      <ul>
        <li v-for="item in navigation[section]" :key="`${section}-${item.name}`" class="mb-4">
          <a :href="item.href" class="va-link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import navigation from '../../lib/navigationLinks.json'

  const navSections = computed(() => {
    return Object.keys(navigation)
  })
</script>

<style lang="scss" scoped></style>
