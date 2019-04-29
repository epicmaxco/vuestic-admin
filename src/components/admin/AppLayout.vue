<template>
  <va-page-layout>
    <app-navbar
      :minimized="minimized"
      :navbar-view.sync="navbarView"
      @toggle-navbar-view="toggleNavbarView"
      @toggle-menu="toggleSidebar"
    />
    <app-sidebar
      :minimized="minimized"
      :navbar-view="navbarView"
      @toggle-menu="toggleSidebar"
    />
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
  </va-page-layout>
</template>

<script>
import VaPageLayout
  from '../../vuestic-theme/vuestic-components/va-page-layout/VaPageLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import AppBreadcrumbs from './app-breadcrumbs/AppBreadcrumbs'
import Layout from '../../vuestic-theme/vuestic-mixins/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    VaPageLayout,
    AppNavbar,
    AppSidebar,
    AppBreadcrumbs,
  },
  mixins: [ Layout ],
  data () {
    return {
      minimized: false,
      navbarView: true,
      mobileWidth: 767,
    }
  },
  methods: {
    toggleSidebar (minimized) {
      this.minimized = minimized
    },
    toggleNavbarView (navbarView) {
      this.navbarView = navbarView
    },
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>
