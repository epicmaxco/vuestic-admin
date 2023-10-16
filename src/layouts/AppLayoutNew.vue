<template>
  <va-layout
    class="h-screen"
    :top="{ fixed: true, order: 2 }"
    :left="{ fixed: true, overlay: breakpoints.smDown && isSidebarVisible, order: 1 }"
    @left-overlay-click="isSidebarVisible = false"
  >
    <template #top>
      <Navbar v-model:isSidebarVisible="isSidebarVisible" v-model:isOptionsVisible="isOptionsVisible" />
    </template>
    <template #left>
      <Sidebar v-model:visible="isSidebarVisible" :mobile="breakpoints.xs" />
    </template>
    <template #content>
      <main class="p-4 h-[calc(100vh-108px)] md:h-[calc(100vh-52px)] overflow-y-auto">
        <router-view />
      </main>
    </template>
  </va-layout>
</template>
<script setup lang="ts">
  import { watch, ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useBreakpoint } from 'vuestic-ui'

  import Navbar from '../components/navbarNew/Navbar.vue'
  import Sidebar from '../components/sidebarNew/Sidebar.vue'

  const breakpoints = useBreakpoint()

  const isSidebarVisible = ref(false)
  const isOptionsVisible = ref(false)

  watch(
    () => breakpoints.smDown,
    (newValue: boolean) => {
      isSidebarVisible.value = !newValue
      isOptionsVisible.value = false
    },
  )

  const { afterEach } = useRouter()
  afterEach(() => {
    isSidebarVisible.value = !breakpoints.smDown
    isOptionsVisible.value = false
  })

  onMounted(() => {
    isSidebarVisible.value = !breakpoints.smDown
  })
</script>
