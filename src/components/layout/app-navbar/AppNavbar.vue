<template>

  <vuestic-navbar>
    <header-selector slot="selector" v-model="valueProxy"/>
    <span slot="logo" class="i-vuestic"></span>
    <div slot="center" class="header-elem-wrapper navbar-text offset-md-1 col-md-7">
      {{$t('navbar.messageUs')}}&nbsp;<a href="mailto:hello@epicmax.co">hello@epicmax.co</a>
    </div>
    <message-dropdown slot="message"></message-dropdown>
    <notification-dropdown slot="notification"></notification-dropdown>
    <language-dropdown slot="language"></language-dropdown>
    <profile-dropdown slot="profile">
      <img src="http://i.imgur.com/nfa5itq.png"/>
    </profile-dropdown>
  </vuestic-navbar>

</template>

<script>
  import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
  import HeaderSelector from './components/HeaderSelector'
  import LanguageDropdown from './components/dropdowns/LanguageDropdown'
  import ProfileDropdown from './components/dropdowns/ProfileDropdown'
  import NotificationDropdown from './components/dropdowns/NotificationDropdown'
  import MessageDropdown from './components/dropdowns/MessageDropdown'

  export default {
    name: 'app-navbar',

    components: {
      VuesticNavbar,
      HeaderSelector,
      MessageDropdown,
      NotificationDropdown,
      LanguageDropdown,
      ProfileDropdown
    },

    props: {
      value: {
        type: Boolean,
        required: true
      }
    },

    computed: {
      valueProxy: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('toggle-menu', value)
        },
      }
    },
  }
</script>
