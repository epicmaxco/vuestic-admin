<template>
  <va-layout style="height: 100vh">
    <template v-if="breakpoint.lgUp" #left>
      <div class="bg-primary h-full flex items-center justify-center" style="width: 35vw">
        <vuestic-logo />
      </div>
    </template>
    <template #content>
      <main class="h-full flex items-center justify-center">
        <router-view />
      </main>
    </template>
  </va-layout>
</template>

<script setup lang="ts">
  import VuesticLogo from '../pages/auth/VuesticLogo.vue'
  import { useBreakpoint } from 'vuestic-ui'

  const breakpoint = useBreakpoint()
</script>
