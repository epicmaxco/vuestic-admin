<template>

  <vuestic-navbar>
    <header-selector slot="selector" v-model="valueProxy"/>
    <span slot="logo" class="i-vuestic"></span>
    <span slot="center">
      {{$t('navbar.messageUs')}}&nbsp;<a href="mailto:hello@epicmax.co">hello@epicmax.co</a>
    </span>
    <message-dropdown :options="this.messages"></message-dropdown>
    <notification-dropdown :options="this.notifications"></notification-dropdown>
    <language-dropdown :options="this.languages"></language-dropdown>
    <profile-dropdown :options="this.profiles">
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
      isOpen: {
        type: Boolean,
        required: true
      }
    },

    data () {
      return {
        messages: [
          {
            name: 'new',
            details: { name: 'Oleg M' }
          },
          {
            name: 'new',
            details: { name: 'Andrei H' }
          },
        ],
        notifications: [
          {
            name: 'sentMessage',
            details: { name: 'Vasily S' }
          },
          {
            name: 'uploadedZip',
            details: { name: 'Oleg M', type: 'typography component' }
          },
          {
            name: 'startedTopic',
            details: { name: 'Andrei H' }
          }
        ],
        languages: [
          {
            code: 'gb',
            name: 'english'
          },
          {
            code: 'es',
            name: 'spanish'
          }
        ],
        profiles: [
          {
            name: 'profile'
          },
          {
            name: 'logout'
          }
        ]
      }
    },

    computed: {
      valueProxy: {
        get () {
          return this.isOpen
        },
        set (opened) {
          this.$emit('toggle-menu', opened)
        },
      }
    },
  }
</script>
