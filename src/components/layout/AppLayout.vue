<template>
  <vuestic-layout>
    <app-navbar slot="navbar-section" :value="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar slot="sidebar-section" :opened="opened"/>
    <div slot="content-section" class="content-wrap" id="content-wrap">
      <main id="content" class="content" role="main">
        <vuestic-breadcrumbs :breadcrumbs="breadcrumbs"/>
        <vuestic-pre-loader v-show="isLoading" ref="preLoader" class="pre-loader"></vuestic-pre-loader>
        <router-view></router-view>
      </main>
    </div>
    <div slot="footer-section" class="made-by-footer">
      ©2018. Made by&nbsp;<a href="http://epicmax.co" target="_blank">Epicmax </a>
    </div>
  </vuestic-layout>
</template>

<script>

  import VuesticLayout from '../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
  import AppNavbar from './app-navbar/AppNavbar'
  import AppSidebar from './app-sidebar/AppSidebar'
  import store from './../../store'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app-layout',

    components: {
      VuesticLayout,
      AppNavbar,
      AppSidebar
    },
    data () {
      return {
        opened: true
      }
    },
    methods: {
      toggleSidebar (opened) {
        this.opened = opened
        store.dispatch('toggleSidebar', this.opened)
      }
    },
    computed: {
      ...mapGetters([
        'isLoading'
      ]),
      breadcrumbs () {
        return this.$store.getters.breadcrumbs(this.$route.name)
      },
    }
  }
</script>
