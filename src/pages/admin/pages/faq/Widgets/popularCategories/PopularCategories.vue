<template>
  <section class="grid grid-cols-3 gap-4 mb-5">
    <template v-for="category in categories" :key="category.id">
      <va-card class="col-span-3 sm:col-span-1 popular-category" href="#">
        <div class="popular-category__icon ml-5 mt-4 mb-1 p-0">{{ category.icon }}</div>
        <va-card-title class="popular-category__title mb-1">
          {{ category.name }}
        </va-card-title>
        <va-card-content class="leading-5 text-sm">{{ category.intro }}</va-card-content>
      </va-card>
    </template>
  </section>
</template>

<script setup lang="ts">
  import type { Category } from '../../lib/utils'

  withDefaults(defineProps<{ categories: Category[] }>(), {
    categories: () => [],
  })
</script>

<style lang="scss" scoped>
  .popular-category {
    min-height: 146px;

    &__icon {
      font-family: 'Material Symbols Outlined';
      font-size: 32px;
      font-weight: 300;
    }

    &__icon,
    &__title {
      color: var(--va-primary);
    }

    &__title {
      font-size: 1.125rem;
      text-transform: capitalize;
      padding: 0;
      padding-left: 20px;
      line-height: 1.4;
    }
  }
</style>
