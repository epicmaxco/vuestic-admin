<template>
  <va-navbar class="app-layout-navbar">
    <template #left>
      <div class="left">
        <va-icon-menu-collapsed
          :class="{ 'x-flip': isSidebarMinimized }"
          class="va-navbar__item"
          :color="colors.primary"
          @click="isSidebarMinimized = !isSidebarMinimized"
        />
        <router-link to="/">
          <vuestic-logo class="logo" />
        </router-link>
      </div>
    </template>
    <div class="app-navbar-center">
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
      <app-navbar-actions class="app-navbar__actions" :user-name="userName" />
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
