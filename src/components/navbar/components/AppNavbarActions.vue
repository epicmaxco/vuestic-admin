<template>
  <div class="app-navbar-actions">
    <color-dropdown class="app-navbar-actions__item"/>
    <message-dropdown class="app-navbar-actions__item"/>
    <notification-dropdown class="app-navbar-actions__item"/>
    <!-- <settings-dropdown class="app-navbar-actions__item" /> -->
    <language-dropdown class="app-navbar-actions__item"/>
    <profile-dropdown class="app-navbar-actions__item app-navbar-actions__item--profile">
      <span>{{userName}}</span>
    </profile-dropdown>
  </div>
</template>

<script>
import LanguageDropdown from './dropdowns/LanguageDropdown'
import ProfileDropdown from './dropdowns/ProfileDropdown'
import NotificationDropdown from './dropdowns/NotificationDropdown'
import MessageDropdown from './dropdowns/MessageDropdown'
import ColorDropdown from './dropdowns/color-dropdown/ColorDropdown'
import SettingsDropdown from './dropdowns/SettingsDropdown'

export default {
  name: 'app-navbar-actions',

  components: {
    // SettingsDropdown,
    ColorDropdown,
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
    isTopBar: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isTopBarProxy: {
      get () {
        return this.isTopBar
      },
      set (isTopBar) {
        this.$emit('update:isTopBar', isTopBar)
      },
    },
  },
}
</script>

<style lang="scss">
.app-navbar-actions {
  display: flex;
  align-items: center;

  .va-dropdown__anchor {
    color: var(--va-primary);
    fill: var(--va-primary);
  }
  
  &__item {
    padding: 0;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    
    svg {
      height: 24px;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &--profile {
      display: flex;
      justify-content: center;
      margin: auto 0 auto 1.25rem;
    }

    .va-dropdown-content {
      background-color: var(--va-white);
    }

    @media screen and (max-width: 768px) {
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
