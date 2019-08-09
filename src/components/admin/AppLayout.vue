<template>
  <va-page-layout
    :layout="layout"
    :minimized.sync="minimized"
    :mobile-width="mobileWidth"
  >
    <app-navbar
      :layout.sync="layout"
      :minimized.sync="minimized"
    />
    <app-topbar
      v-if="layout === 'topbar'"
      :minimized="minimized"
    />
    <app-sidebar
      v-else-if="layout === 'sidebar'"
      :minimized="minimized"
    />
    <main
      slot="content"
      class="layout fluid gutter--xl"
      role="main"
    >
      <router-view/>
    </main>
  </va-page-layout>
</template>

<script>
import VaPageLayout from './VaPageLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppTopbar from './app-topbar/AppTopbar'
import AppSidebar from './app-sidebar/AppSidebar'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    VaPageLayout,
    AppNavbar,
    AppTopbar,
    AppSidebar,
  },
  data () {
    return {
      layout: 'sidebar',
      minimized: false,
      mobileWidth: 767,
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>
