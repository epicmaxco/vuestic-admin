<template>
  <va-page-layout
    :is-top-bar.sync="isTopBar"
    :minimized.sync="minimized"
    :mobile-width="mobileWidth"
  >
    <app-navbar
      :is-top-bar.sync="isTopBar"
      :minimized.sync="minimized"
    />
    <app-topbar
      v-if="isTopBar"
      :minimized="minimized"
    />
    <app-sidebar
      v-else
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
import VaPageLayout from './AppPageLayout'
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
      isTopBar: false,
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
