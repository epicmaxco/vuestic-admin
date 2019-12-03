<template>
  <va-page-layout
    :is-top-bar.sync="isTopBar"
    :minimized.sync="minimized"
    :mobile-width="mobileWidth"
  >
    <app-navbar
      class="app-layout__navbar"
      :is-top-bar.sync="isTopBar"
      :minimized.sync="minimized"
    />
    <app-topbar
      class="app-layout__topbar"
      v-if="isTopBar"
      :minimized="minimized"
    />
    <app-sidebar
      v-else
      :minimized="minimized"
    />
    <main
      class="app-layout__main layout fluid gutter--xl"
      slot="content"
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

<style lang="scss">

.app-layout {
  &__topbar {
    position: fixed;
    top: 4rem;
    z-index: 1;

    @include media-breakpoint-down(sm) {
      top: $top-mobile-nav-height;
    }
  }
}
</style>
