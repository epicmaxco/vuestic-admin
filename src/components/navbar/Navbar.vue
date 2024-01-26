<template>
  <va-navbar class="app-layout-navbar">
    <template #left>
      <div class="flex items-center">
        <va-icon-menu-collapsed
          :class="{ 'x-flip': isSidebarMinimized }"
          class="cursor-pointer"
          :color="colors.primary"
          @click="isSidebarMinimized = !isSidebarMinimized"
        />
        <router-link to="/">
          <vuestic-logo class="ml-4" />
        </router-link>
      </div>
    </template>
    <div class="flex items-center">
      <span class="hidden md:block mr-2">{{ t('navbar.messageUs') }}</span>
      <a class="hidden md:block mr-2" href="mailto:hello@epicmax.co" target="_blank" :style="{ color: colors.primary }">
        hello@epicmax.co
      </a>
      <va-button
        href="https://github.com/epicmaxco/vuestic-admin"
        color="#000000"
        class="hidden lg:block"
        icon="github"
        target="_blank"
      >
        {{ t('navbar.repository') }}
      </va-button>
    </div>
    <template #right>
      <app-navbar-actions class="flex justify-between" :user-name="userName" />
    </template>
  </va-navbar>
</template>

<script setup>
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useGlobalStore } from '../../stores/global-store'
  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'
  import VuesticLogo from '../VuesticLogo.vue'
  import VaIconMenuCollapsed from '../icons/VaIconMenuCollapsed.vue'
  import AppNavbarActions from './components/AppNavbarActions.vue'

  const GlobalStore = useGlobalStore()
  const { t } = useI18n()

  const { isSidebarMinimized, userName } = storeToRefs(GlobalStore)

  const { getColors } = useColors()
  const colors = computed(() => getColors())
</script>

<style lang="scss" scoped>
  .x-flip {
    transform: scaleX(-100%);
  }
</style>
