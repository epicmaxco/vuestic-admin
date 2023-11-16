<template>
  <VaNavbar class="app-layout-navbar">
    <template #left>
      <div class="left">
        <VaIconMenuCollapsed
          :class="{ 'x-flip': isSidebarMinimized }"
          class="va-navbar__item"
          :color="colors.primary"
          @click="isSidebarMinimized = !isSidebarMinimized"
        />
        <RouterLink to="/">
          <VuesticLogo />
        </RouterLink>
      </div>
    </template>
    <div class="app-navbar-center">
      <span class="hidden md:block mr-2">{{ t('navbar.messageUs') }}</span>
      <a class="hidden md:block mr-2" href="mailto:hello@epicmax.co" target="_blank" :style="{ color: colors.primary }">
        hello@epicmax.co
      </a>
      <VaButton
        href="https://github.com/epicmaxco/vuestic-admin"
        color="#000000"
        class="hidden lg:block"
        icon="github"
        target="_blank"
      >
        {{ t('navbar.repository') }}
      </VaButton>
    </div>
    <template #right>
      <AppNavbarActions class="app-navbar__actions" :user-name="userName" />
    </template>
  </VaNavbar>
</template>

<script setup>
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useGlobalStore } from '../../stores/global-store'
  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'
  import VaIconMenuCollapsed from '../icons/VaIconMenuCollapsed.vue'
  import AppNavbarActions from './components/AppNavbarActions.vue'
  import VuesticLogo from '../VuesticLogo.vue'

  const GlobalStore = useGlobalStore()
  const { t } = useI18n()

  const { isSidebarMinimized, userName } = storeToRefs(GlobalStore)

  const { getColors } = useColors()
  const colors = computed(() => getColors())
</script>

<style lang="scss" scoped>
  .va-navbar {
    box-shadow: var(--va-box-shadow);
    z-index: 2;

    @media screen and (max-width: 950px) {
      .left {
        width: 100%;
      }

      .app-navbar__actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .left {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 1.5rem;
    }

    & > *:last-child {
      margin-right: 0;
    }
  }

  .x-flip {
    transform: scaleX(-100%);
  }

  .app-navbar-center {
    display: flex;
    align-items: center;
    height: 1rem;

    @media screen and (max-width: 1200px) {
      &__github-button {
        display: none;
      }
    }

    @media screen and (max-width: 950px) {
      &__text {
        display: none;
      }
    }
  }
</style>
