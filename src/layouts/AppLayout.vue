<template>
  <VaLayout
    :top="{ fixed: true, order: 2 }"
    :left="{ fixed: true, absolute: breakpoints.smDown, order: 1, overlay: breakpoints.smDown && isSidebarVisible }"
    @leftOverlayClick="isSidebarVisible = false"
  >
    <template #top>
      <AppNavbar />
    </template>

    <template #left>
      <AppSidebar :minimized="isSidebarMinimized" :animated="!isMobile" />
    </template>

    <template #content>
      <div :class="{ minimized: isSidebarMinimized }" class="app-layout__sidebar-wrapper">
        <div v-if="isFullScreenSidebar" class="flex justify-end">
          <VaButton class="px-4 py-4" color="dark" icon="md_close" preset="plain" @click="onCloseSidebarButtonClick" />
        </div>
      </div>
      <Breadcrumbs class="p-4" />
      <main class="p-4">
        <article>
          <RouterView />
        </article>
      </main>
    </template>
  </VaLayout>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { onBeforeRouteUpdate } from 'vue-router'
import { useBreakpoint } from 'vuestic-ui'

import { useGlobalStore } from '../stores/global-store'

import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs.vue'
import AppNavbar from '../components/navbar/AppNavbar.vue'
import AppSidebar from '../components/sidebar/AppSidebar.vue'

const GlobalStore = useGlobalStore()

const breakpoints = useBreakpoint()

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

const isFullScreenSidebar = computed(() => isTablet.value && !isSidebarMinimized.value)

const onCloseSidebarButtonClick = () => {
  isSidebarMinimized.value = true
}
</script>

<style lang="scss">
$mobileBreakPointPX: 640px;
$tabletBreakPointPX: 768px;

.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  &__navbar {
    min-height: 4rem;
  }

  &__content {
    display: flex;
    height: calc(100vh - 4rem);
    flex: 1;

    @media screen and (max-width: $tabletBreakPointPX) {
      height: calc(100vh - 6.5rem);
    }

    .app-layout__sidebar-wrapper {
      position: relative;
      height: 100%;
      background: #ffffff;

      @media screen and (max-width: $tabletBreakPointPX) {
        &:not(.minimized) {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          z-index: 999;
        }

        .va-sidebar:not(.va-sidebar--minimized) {
          .va-sidebar__menu {
            padding: 0;
          }
        }
      }
    }
  }

  &__page {
    flex-grow: 2;
    overflow-y: scroll;
  }
}
</style>
