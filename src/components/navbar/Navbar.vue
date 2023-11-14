<template>
  <va-navbar class="app-layout-navbar">
    <template #left>
      <div class="left">
        <router-link to="/">
          <vuestic-logo class="logo" />
        </router-link>
      </div>
    </template>
    <template #right>
      <app-navbar-actions :user-name="userName" />
    </template>
  </va-navbar>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { useGlobalStore } from '../../stores/global-store'
  import VuesticLogo from '../VuesticLogo.vue'
  import AppNavbarActions from './components/AppNavbarActions.vue'

  const GlobalStore = useGlobalStore()

  const { userName } = storeToRefs(GlobalStore)
</script>

<style lang="scss" scoped>
  .va-navbar {
    box-shadow: var(--va-box-shadow);
    z-index: 2;
  }
</style>
