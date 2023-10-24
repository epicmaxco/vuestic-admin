<template>
  <va-layout v-if="breakpoint.lgUp" class="h-screen">
    <template #left>
      <router-link to="/" class="bg-primary h-full flex items-center justify-center" style="width: 35vw">
        <vuestic-logo color="#fff" :scale="2" />
      </router-link>
    </template>
    <template #content>
      <main class="h-full flex items-center justify-center mx-auto max-w-[420px]">
        <router-view />
      </main>
    </template>
  </va-layout>

  <va-layout v-else class="h-screen">
    <template #content>
      <div class="p-4">
        <main class="h-full flex flex-row items-center justify-start mx-auto max-w-[420px]">
          <div class="flex flex-col items-start">
            <router-link to="/" class="py-4">
              <vuestic-logo class="mb-2" color="primary" />
            </router-link>
            <router-view />
          </div>
        </main>
      </div>
    </template>
  </va-layout>
</template>

<script setup lang="ts">
  import VuesticLogo from '../pages/auth/VuesticLogo.vue'
  import { useBreakpoint } from 'vuestic-ui'

  const breakpoint = useBreakpoint()
</script>
