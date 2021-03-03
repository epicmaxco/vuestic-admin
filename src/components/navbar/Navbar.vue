<template>
  <va-navbar class="app-layout__navbar">
    test
    <template v-slot:left>
      <!-- TODO:  -->
      <!-- <va-icon-menu-collapsed :collapsed="isSidebarCollapsed" @click="isSidebarCollapsed = !isSidebarCollapsed" class="va-navbar__item" /> -->
      <vuestic-logo/>
    </template>
    <template v-slot:center>
      <span
        class="app-navbar__text"
        :style="{color: theme.gray}"
      >
        {{$t('navbar.messageUs')}}&nbsp;
        <a
          href="mailto:hello@epicmax.co"
          target="_blank"
          :style="{color: theme.primary}"
        >
          hello@epicmax.co
        </a>
        <va-button
          href="https://github.com/epicmaxco/vuestic-admin"
          color="#000000"
          class="app-navbar__button"
          icon="github"
          target="_blank"
        >
          {{$t('navbar.repository')}}
        </va-button>
      </span>
    </template>
    <template #right>
      <app-navbar-actions
        class="app-navbar__actions md5 lg4"
        :user-name="userName"
      />
    </template>
  </va-navbar>
</template>

<script>
import VuesticLogo from '@/components/vuestic-logo'
import { useTheme } from 'vuestic-ui'
import AppNavbarActions from './components/AppNavbarActions'

export default {
  components: { VuesticLogo, AppNavbarActions },
  data() {
    return {
      isSidebarCollapsed: false,
    }
  },
  computed: {
    theme() { return useTheme().getTheme() }
  }
}
</script>