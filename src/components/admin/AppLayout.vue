<template>
  <va-page-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
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
import VaPageLayout
  from '../../vuestic-theme/vuestic-components/va-page-layout/VaPageLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import Layout from '../../vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    VaPageLayout,
    AppNavbar,
    AppSidebar,
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
