<template>
  <va-page-not-found class="va-page-not-found-simple">
    <template #image>
      <vuestic-logo />
    </template>
    <va-button :to="{ name: 'dashboard' }"> Back to dashboard </va-button>
  </va-page-not-found>
</template>

<script setup lang="ts">
  import VuesticLogo from '../../components/VuesticLogo.vue'
  import VaPageNotFound from './VaPageNotFound.vue'
</script>

<style lang="scss">
  .va-page-not-found-simple {
    .va-icon-vuestic {
      width: 19rem;
      height: 2rem;
      max-width: 100%;
      margin-bottom: 13%;
    }
  }
</style>
