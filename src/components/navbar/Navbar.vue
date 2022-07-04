<template>
  <div class="app-layout__navbar">
    <va-navbar>
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
      <template #center>
        <span class="app-navbar__text">
          {{ t('navbar.messageUs') }}&nbsp;
          <a href="mailto:hello@epicmax.co" target="_blank" :style="{ color: colors.primary }"> hello@epicmax.co </a>
          <va-button
            href="https://github.com/epicmaxco/vuestic-admin"
            color="#000000"
            class="app-navbar__github-button"
            icon="github"
            target="_blank"
          >
            {{ t('navbar.repository') }}
          </va-button>
        </span>
      </template>
      <template #right>
        <app-navbar-actions class="app-navbar__actions md5 lg4" :user-name="userName" />
      </template>
    </va-navbar>
  </div>
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

    &__center {
      @media screen and (max-width: 1200px) {
        .app-navbar__github-button {
          display: none;
        }
      }
      @media screen and (max-width: 950px) {
        .app-navbar__text {
          display: none;
        }
      }
    }

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

  .app-navbar__text > * {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
</style>
