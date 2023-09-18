<template>
  <va-collapse :header="header">
    <article class="max-w-3xl text-sm">
      <slot></slot>
    </article>
  </va-collapse>
</template>

<script setup lang="ts">
  defineProps<{ header: string }>()
</script>

<style>
  .va-collapse__content {
    padding-top: 0;
    padding-left: 0;
  }
  .va-collapse__header {
    padding-left: 0;
  }
</style>
