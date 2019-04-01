<template>
  <va-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <main
      slot="content"
      id="content"
      class="va-layout gutter--lg fluid"
      role="main"
    >
      <app-breadcrumbs/>
      <va-pre-loader
        v-show="isLoading"
        class="pre-loader"
      />
      <router-view/>
    </main>
    <span slot="footer">
      ©2019. Made by&nbsp;<a href="https://epicmax.co" target="_blank"> Epicmax</a>
    </span>
  </va-layout>
</template>

<script>
import VaLayout
  from '../../vuestic-theme/vuestic-components/va-layout/VaLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import AppBreadcrumbs from './app-breadcrumbs/AppBreadcrumbs'
import Layout from '../../vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    VaLayout,
    AppNavbar,
    AppSidebar,
    AppBreadcrumbs,
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>
