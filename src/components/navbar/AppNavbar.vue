<template>
  <VaNavbar class="app-layout-navbar py-2 px-0">
    <template #left>
      <div class="left">
        <RouterLink to="/">
          <VuesticLogo />
        </RouterLink>
      </div>
    </template>
    <template #right>
      <AppNavbarActions class="app-navbar__actions" :is-mobile="isMobile" />
    </template>
  </VaNavbar>
</template>

<script setup lang="ts">
import AppNavbarActions from './components/AppNavbarActions.vue'
import VuesticLogo from '../VuesticLogo.vue'

defineProps({
  isMobile: { type: Boolean, default: false },
})
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
      display: flex;
      justify-content: space-between;
    }
  }
}

.left {
  display: flex;
  align-items: center;
  margin-left: 1.5rem;

  & > * {
    margin-right: 1.5rem;
  }

  & > *:last-child {
    margin-right: 0;
  }
}
</style>
