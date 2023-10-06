<template>
  <va-layout v-if="breakpoint.lgUp" style="height: 100vh">
    <template #left>
      <div class="bg-primary h-full flex items-center justify-center" style="width: 35vw">
        <vuestic-logo color="#fff" :scale="2" />
      </div>
    </template>
    <template #content>
      <main class="h-full flex items-center justify-center">
        <router-view />
      </main>
    </template>
  </va-layout>
  <va-layout v-else style="height: 100vh">
    <template #content>
      <div class="p-4">
        <div class="py-4">
          <vuestic-logo class="mb-2" color="primary" />
        </div>
        <main class="h-full flex items-center">
          <router-view />
        </main>
      </div>
    </template>
  </va-layout>
</template>

<script setup lang="ts">
  import VuesticLogo from '../pages/auth/VuesticLogo.vue'
  import { useBreakpoint, useColors } from 'vuestic-ui'

  const breakpoint = useBreakpoint()
</script>
