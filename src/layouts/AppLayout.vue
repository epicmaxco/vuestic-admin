<template>
  <VaLayout
    :top="{ fixed: true, order: 2 }"
    :left="{ fixed: true, absolute: breakpoints.smDown, order: 1, overlay: breakpoints.smDown && isSidebarVisible }"
    @left-overlay-click="isSidebarVisible = false"
  >
    <template #top>
      <navbar />
    </template>

    <template #left>
      <sidebar
        :width="sidebarWidth"
        :minimized="isSidebarMinimized"
        :minimized-width="sidebarMinimizedWidth"
        :animated="!isMobile"
      />
    </template>

    <template #content>
      <Breadcrumbs class="p-4" />
      <main class="p-4">
        <article>
          <router-view />
        </article>
      </main>
    </template>
  </VaLayout>
</template>

<script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { onBeforeRouteUpdate } from 'vue-router'

  import { useGlobalStore } from '../stores/global-store'

  import Navbar from '../components/navbar/Navbar.vue'
  import Sidebar from '../components/sidebar/Sidebar.vue'
  import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs.vue'
  import { useBreakpoint } from 'vuestic-ui'

  const GlobalStore = useGlobalStore()

  const mobileBreakPointPX = 640
  const tabletBreakPointPX = 768

  const sidebarWidth = ref('16rem')
  const sidebarMinimizedWidth = ref(undefined)

  const isMobile = ref(false)
  const isTablet = ref(false)
  const { isSidebarMinimized } = storeToRefs(GlobalStore)
  const checkIsTablet = () => window.innerWidth <= tabletBreakPointPX
  const checkIsMobile = () => window.innerWidth <= mobileBreakPointPX

  const onResize = () => {
    isSidebarMinimized.value = checkIsTablet()

    isMobile.value = checkIsMobile()
    isTablet.value = checkIsTablet()
    sidebarMinimizedWidth.value = isMobile.value ? '0' : '4.5rem'
    sidebarWidth.value = isTablet.value ? '100%' : '16rem'
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })

  onBeforeRouteUpdate(() => {
    if (checkIsTablet()) {
      // Collapse sidebar after route change for Mobile
      isSidebarMinimized.value = true
    }
  })

  onResize()

  const breakpoints = useBreakpoint()
</script>
