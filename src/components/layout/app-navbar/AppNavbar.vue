<template>

  <vuestic-navbar>
    <header-selector v-on:click="valueProxy = $event" slot="selector"/>
    <header-logo slot="logo">
      <i class="i-vuestic"></i>
    </header-logo>
    <div slot="center" class="navbar-text offset-md-1 col-md-7 d-none d-lg-flex align-items-center justify-content-center">
      {{$t('navbar.messageUs')}}&nbsp;<a href="mailto:hello@epicmax.co">hello@epicmax.co</a>
    </div>
    <message-dropdown slot="message" :options="messages">
      <span class="i-nav-messages notify"></span>
    </message-dropdown>
    <notification-dropdown slot="notification" :options="notifications">
      <span class="i-nav-notification notify"></span>
    </notification-dropdown>
    <language-dropdown slot="language" :options="langs"></language-dropdown>
    <profile-dropdown slot="profile" :options="actions">
      <img src="http://i.imgur.com/nfa5itq.png"/>
    </profile-dropdown>
  </vuestic-navbar>

</template>

<script>
  import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
  import HeaderLogo from './components/HeaderLogo'
  import HeaderSelector from './components/HeaderSelector'
  import LanguageDropdown from './components/dropdowns/LanguageDropdown'
  import ProfileDropdown from './components/dropdowns/ProfileDropdown'
  import NotificationDropdown from './components/dropdowns/NotificationDropdown'
  import MessageDropdown from './components/dropdowns/MessageDropdown'

  export default {
    name: 'app-navbar',

    components: {
      VuesticNavbar,
      HeaderLogo,
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
      },
      triggerFunc: {
        type: Function,
        required: true
      }
    },

    data () {
      return {
        langs: [
          {
            code: 'gb',
            name: 'english'
          },
          {
            code: 'es',
            name: 'spanish'
          }
        ],
        actions: [
          {
            name: 'profile'
          },
          {
            name: 'logout'
          }
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
        messages: [
          {
            name: 'new',
            details: { name: 'Oleg M' }
          },
          {
            name: 'new',
            details: { name: 'Andrei H' }
          },
        ]
      }
    },

    computed: {
      valueProxy: {
        get () {
          if (this.value === true) {
            this.triggerFunc(this.value)
          }
          return this.value
        },
        set (value) {
          this.triggerFunc(value)
        },
      }
    },
  }
</script>
