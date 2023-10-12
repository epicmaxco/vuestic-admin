<template>
  <va-layout v-if="breakpoint.lgUp" class="h-screen">
    <template #left>
      <div class="bg-primary h-full flex items-center justify-center" style="width: 35vw">
        <vuestic-logo color="#fff" :scale="2" />
      </div>
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
            <div class="py-4">
              <vuestic-logo class="mb-2" color="primary" />
            </div>
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
