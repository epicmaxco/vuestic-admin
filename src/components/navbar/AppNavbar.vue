<template>
  <VaNavbar class="app-layout-navbar">
    <template #left>
      <div class="left">
        <VaIconMenuCollapsed
          :class="{ 'x-flip': isSidebarMinimized }"
          :color="colors.primary"
          class="va-navbar__item"
          @click="isSidebarMinimized = !isSidebarMinimized"
        />
        <RouterLink to="/">
          <VuesticLogo />
        </RouterLink>
      </div>
    </template>
    <div class="app-navbar-center">
      <span class="hidden md:block mr-2">{{ t('navbar.messageUs') }}</span>
      <a :style="{ color: colors.primary }" class="hidden md:block mr-2" href="mailto:hello@epicmax.co" target="_blank">
        hello@epicmax.co
      </a>
      <VaButton
        class="hidden lg:block"
        color="#000000"
        href="https://github.com/epicmaxco/vuestic-admin"
        icon="github"
        target="_blank"
      >
        {{ t('navbar.repository') }}
      </VaButton>
    </div>
    <template #right>
      <AppNavbarActions :user-name="userName" class="app-navbar__actions" />
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
