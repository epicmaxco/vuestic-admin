<template>
  <va-page-layout
    @toggleSidebar="toggleSidebar"
    :mobileWidth="mobileWidth"
  >
    <app-navbar
      :minimized.sync="minimized"
    />
    <app-sidebar
      :minimized="minimized"
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
import { mapGetters } from 'vuex'
import AppTopbar from './app-topbar/AppTopbar'

export default {
  name: 'app-layout',
  components: {
    AppTopbar,
    VaPageLayout,
    AppNavbar,
    AppSidebar,
  },
  data () {
    return {
      minimized: false,
      mobileWidth: 767,
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
  methods: {
    toggleSidebar (minimized) {
      this.minimized = minimized
    },
  },
}
</script>
