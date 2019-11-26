<template>
  <div class="app-navbar-actions">
      <color-dropdown class="app-navbar-actions__item"/>
      <message-dropdown class="app-navbar-actions__item"/>
      <notification-dropdown class="app-navbar-actions__item"/>
      <language-dropdown class="app-navbar-actions__item"/>
      <profile-dropdown class="app-navbar-actions__item app-navbar-actions__item--profile">
        <span>{{userName}}</span>
      </profile-dropdown>
  </div>
</template>

<script>
import VaIconVuestic from '../../../iconset/VaIconVuestic'
import HeaderSelector from './components/HeaderSelector'
import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'
import SettingsDropdown from './components/dropdowns/SettingsDropdown'
import ColorDropdown from './components/dropdowns/ColorDropdown'

export default {
  name: 'app-navbar-actions',
  components: {
    SettingsDropdown,
    ColorDropdown,
    VaIconVuestic,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown,
  },
  props: {
    userName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.app-navbar-actions {
  display: flex;

  &__item {
    padding: 0;
    margin-left: 1.25rem;

    &:last-of-type {
      margin-right: 0;
    }

    &--profile {
      display: flex;
      justify-content: center;
      margin: auto 0 auto 1.25rem;
    }

    @include media-breakpoint-down(lg) {
      margin-right: 0.25rem;
    }

    @include media-breakpoint-down(sm) {
      margin-right: 0;

      &:first-of-type {
        margin-left: 0;
      }

      &--profile {
        position: absolute;
        right: 0.75rem;
        top: 1.25rem;
        height: fit-content;
        margin: auto;
      }
    }
  }
}
</style>
