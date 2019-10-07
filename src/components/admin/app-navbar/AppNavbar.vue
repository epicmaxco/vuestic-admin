<template>
  <va-navbar class="app-navbar">
    <header-selector slot="selector" :minimized.sync="minimizedProxy"/>
    <template slot="logo">
      <va-icon-vuestic/>
    </template>
    <template slot="center">
      <div class="row flex-nowrap align--center justify--space-between">
        <span class="va-navbar__text no-wrap">
          {{$t('navbar.messageUs')}}&nbsp;
          <a
            href="mailto:hello@epicmax.co"
            target="_blank"
            class="app-navbar__mailto-link"
            :style="{color: this.$themes.primary}"
          >
            hello@epicmax.co
          </a>
        </span>
        <div>
          <va-button
            href="https://github.com/epicmaxco/vuestic-admin"
            color="#000000"
            class="app-navbar__button text--bold"
            icon="fa fa-github"
            target="_blank"
          >
            {{$t('navbar.support')}}
          </va-button>
        </div>
      </div>
    </template>
    <div class="app-navbar__actions row flex-nowrap align--center">
      <color-dropdown class="va-navbar__item"/>
      <message-dropdown class="va-navbar__item"/>
      <notification-dropdown class="va-navbar__item"/>
      <!--<settings-dropdown-->
        <!--class="va-navbar__item"-->
        <!--:navbar-view.sync="navbarViewProxy"-->
      <!--/>-->
      <language-dropdown class="va-navbar__item"/>
      <profile-dropdown class="va-navbar__item">
        <span>{{userName}}</span>
      </profile-dropdown>
    </div>
  </va-navbar>
</template>

<script>
import VaIconVuestic
  from 'vuestic-ui/src/components/vuestic-components/va-icon/va-iconset/VaIconVuestic'
import HeaderSelector from './components/HeaderSelector'
import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'
import SettingsDropdown from './components/dropdowns/SettingsDropdown'
import ColorDropdown from './components/dropdowns/ColorDropdown'

export default {
  name: 'app-navbar',
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
    minimized: {
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
    minimizedProxy: {
      get () {
        return this.minimized
      },
      set (minimized) {
        this.$emit('update:minimized', minimized)
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

  &__actions {
    justify-content: flex-end;
  }

  &__mailto-link:hover {
    filter: brightness(85%);
  }

  @include media-breakpoint-down(lg) {
    &__button {
      display: none !important;
    }

    .profile-dropdown {
      margin: auto 0 auto 0.75rem;
    }
  }

  @include media-breakpoint-down(md) {
    @at-root .va-navbar__text {
      display: none !important;
    }
  }

  @include media-breakpoint-down(sm) {
    &__button {
      display: none !important;
    }

    &__actions {
      justify-content: space-around;
      padding: 0 0.5rem;
    }

    .profile-dropdown {
      position: absolute;
      right: 0.75rem;
      top: 1.25rem;
      height: fit-content;
      margin: auto;
    }
  }
}
</style>
