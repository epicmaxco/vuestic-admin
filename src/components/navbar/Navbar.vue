<template>
  <va-navbar class="app-layout__navbar">
    <template v-slot:left>
      <div class="left">
        <va-icon-menu-collapsed 
          @click="isSidebarExpanded = !isSidebarExpanded"
          :class="{ 'x-flip': isSidebarExpanded }"
          class="va-navbar__item" 
        />
        <vuestic-logo class="logo"/>
      </div>
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
import VaIconMenuCollapsed from '@/components/icons/VaIconMenuCollapsed'
import { useTheme } from 'vuestic-ui'
import AppNavbarActions from './components/AppNavbarActions'

export default {
  components: { VuesticLogo, AppNavbarActions, VaIconMenuCollapsed },
  data() {
    return {
      // TODO: Move this to vuex store
      isSidebarExpanded: true,
    }
  },
  computed: {
    theme() { return useTheme().getTheme() }
  },
}
</script>

<style lang="scss" scoped>
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
</style>