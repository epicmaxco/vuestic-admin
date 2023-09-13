<template>
  <section class="grid grid-cols-3 gap-4 mb-5">
    <template v-for="category in categories" :key="category.id">
      <va-card class="col-span-3 sm:col-span-1 popular-category" href="#">
        <va-icon tag="span" size="large" class="popular-category__icon" :name="category.icon" />
        <va-card-title class="popular-category__title">
          {{ category.name }}
        </va-card-title>
        <va-card-content>{{ category.intro }}</va-card-content>
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
      padding: var(--va-card-padding);
      padding-bottom: 0.5rem;
      font-family: 'Material Symbols Outlined';
    }

    &__icon,
    &__title {
      color: var(--va-primary);
    }

    &__title {
      font-size: 1.125rem;
      text-transform: capitalize;
      padding-bottom: 0.5rem;
      line-height: 1.4;
    }
  }
</style>
