<template>
  <va-page-not-found class="va-page-not-found-custom">
    <template #image>
      <img
        src="https://i.imgur.com/wodIng5.png"
        style="max-height: 400px; width: auto"
        class="va-page-not-found-custom__image mb-3"
      />
    </template>
    <va-button :to="{ name: 'dashboard' }"> Back to dashboard </va-button>
  </va-page-not-found>
</template>

<script setup lang="ts">
  import VaPageNotFound from './VaPageNotFound.vue'
</script>

<style lang="scss">
  .va-page-not-found-custom {
    &__image {
      width: 150%;
      margin: 0 -25%;
      min-width: 20rem;
      box-sizing: border-box;

      @media screen and (max-width: 600px) {
        margin: 0;
        max-width: 75%;
        min-width: 0;
      }
    }
  }
</style>
