<template>
  <va-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span slot="logo">
      <va-icon-vuestic/>
    </span>
    <template slot="center">
      <div class="va-row flex-nowrap align--center justify--space-between">
        <span class="va-navbar__text">{{$t('navbar.messageUs')}}&nbsp;<a href="mailto:hello@epicmax.co">hello@epicmax.co</a></span>
        <div>
          <va-button
            href="https://github.com/epicmaxco/vuestic-admin"
            color="#000000"
            class="app-navbar__button text--bold"
            icon="fa fa-github"
          >
            {{$t('navbar.support')}}
          </va-button>
        </div>
      </div>
    </template>
    <div class="va-row flex-center justify--space-between">
      <va-icon icon="i-nav-search" class="pointer"/>
      <message-dropdown class="va-navbar__item"/>
      <notification-dropdown class="va-navbar__item"/>
      <language-dropdown class="va-navbar__item"/>
      <profile-dropdown class="va-navbar__item">
        <span>{{userName}}</span>
      </profile-dropdown>
    </div>
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
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
      userName: 'Vasili S',
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
    },
  },
}
</script>
<style lang="scss">
.app-navbar {
  &__button {
    width: 10.8125rem;
    .va-button__content__icon-left.fa-github {
      font-size: 1.5rem;
    }
  }
  @include media-breakpoint-down(md) {
    &__button {
      display: none !important;
    }
  }
}
</style>
