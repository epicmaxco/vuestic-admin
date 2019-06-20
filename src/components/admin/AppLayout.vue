<template>
  <va-page-layout>
    <app-navbar
      :minimized="minimized"
      :navbar-view.sync="navbarView"
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
      class="va-layout gutter--xl fluid"
      role="main"
    >
      <va-pre-loader
        v-show="isLoading"
        class="pre-loader"
      />
      <router-view/>
    </main>
  </va-page-layout>
</template>

<script>
import VaPageLayout from '../../vuestic-theme/vuestic-components/va-page-layout/VaPageLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import Layout from '../../vuestic-theme/vuestic-mixins/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    VaPageLayout,
    AppNavbar,
    AppSidebar,
  },
  mixins: [ Layout ],
  data () {
    return {
      minimized: false,
      navbarView: false,
      mobileWidth: 767,
    }
  },
  methods: {
    toggleSidebar (minimized) {
      this.minimized = minimized
    },
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>
