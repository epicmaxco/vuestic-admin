<template>
  <va-navbar>
    <header-selector slot="selector" :minimized.sync="valueProxy"/>
    <span slot="logo">
      <va-icon-vuestic/>
    </span>
    <span slot="center">
      {{$t('navbar.messageUs')}}&nbsp;<a href="mailto:hello@epicmax.co">hello@epicmax.co</a>
    </span>
    <va-icon
      @click.native="$emit('update:navbarView', !navbarView)"
      icon="vuestic-iconset vuestic-iconset-settings"
      color="white"
      style="font-size: 1.4rem; display: flex;"
      class="grow flex-center nav-item pointer"/>
    <message-dropdown class="nav-item"/>
    <notification-dropdown class="nav-item"/>
    <language-dropdown class="nav-item"/>
    <profile-dropdown class="nav-item">
      <img src="https://i.imgur.com/nfa5itq.png"/>
    </profile-dropdown>
  </va-navbar>

</template>

<script>
import VaIconVuestic
  from '../../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconVuestic'
import VaNavbar
  from '../../../vuestic-theme/vuestic-components/va-navbar/VaNavbar'
import HeaderSelector from './components/HeaderSelector'
import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'

export default {
  name: 'app-navbar',

  components: {
    VaIconVuestic,
    VaNavbar,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown,
  },
  props: {
    minimized: {
      type: Boolean,
      required: true,
    },
    navbarView: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.minimized
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}
</script>
