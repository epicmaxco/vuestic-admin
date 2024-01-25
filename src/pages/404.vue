<script lang="ts" setup>
import VuesticLogo from '../components/VuesticLogo.vue'
import NotFoundImage from '../components/NotFoundImage.vue'
</script>

<template>
  <div class="flex flex-col justify-between h-screen items-center bg-[var(--va-background-secondary)]">
    <RouterLink to="/">
      <VuesticLogo :gradient="false" class="my-8 h-5" />
    </RouterLink>

    <div class="flex flex-col items-center gap-6 px-4 my-8">
      <NotFoundImage />
      <h1 class="va-h1 text-center sm:text-5xl text-4xl">Page not found</h1>

      <p class="text-center">
        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
      </p>

      <div class="flex flex-col sm:flex-row gap-4">
        <VaButton to="/">Go to homepage</VaButton>
        <VaButton href="https://github.com/epicmaxco/vuestic-admin/issues/new" preset="secondary" target="_blank"
          >Create a GitHub issue
        </VaButton>
      </div>
    </div>

    <div />
  </div>
</template>
