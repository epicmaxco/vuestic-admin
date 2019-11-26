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
      class="layout gutter--xl fluid"
      :class="{'app-layout__main--full-width-sidebar': !minimized}"
      role="main"
    >
      <router-view/>
    </main>
  </va-page-layout>
</template>

<script>
import VaPageLayout from './VaPageLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
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

<style lang="scss">
  .app-layout {
    &__main {
      &--full-width-sidebar {
        @include media-breakpoint-down(xs) {
          display: none;
        }
      }
    }
  }
</style>
