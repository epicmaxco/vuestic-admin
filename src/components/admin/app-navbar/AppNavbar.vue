<template>
  <nav
    class="app-navbar"
    :style="navbarStyle"
  >
    <div class="app-navbar__icon-container">
      <span
        class="app-navbar__menu"
        :class="`i-menu-${minimized ? 'collapsed' : 'expanded'}`"
        @click="$emit('update:minimized', !minimized)"
      ></span>
    </div>

    <div class="app-navbar__content row">
      <router-link
        class="app-navbar__logo mr-3"
        to="/"
      >
        <va-icon-vuestic/>
      </router-link>
      <div class="app-navbar__center lg5 md4">
        <span class="app-navbar__text">
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
        <va-button
          href="https://github.com/epicmaxco/vuestic-admin"
          color="#000000"
          class="app-navbar__button"
          icon="fa fa-github"
          target="_blank"
        >
          {{$t('navbar.support')}}
        </va-button>
      </div>
      <app-navbar-actions
        class="app-navbar__actions md5 lg4"
        :user-name="userName"
      />
    </div>
    <div
      class="app-navbar__shape"
      :style="shapeStyle"
    ></div>
  </nav>
</template>

<script>
import VaIconVuestic from '../../../iconset/VaIconVuestic'
import AppNavbarActions from './components/AppNavbarActions'
import { colorShiftHsl } from '../../../services/vuestic-ui'

export default {
  name: 'app-navbar',
  components: {
    VaIconVuestic,
    AppNavbarActions,
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
    navbarStyle () {
      return {
        backgroundColor: colorShiftHsl(this.$themes.secondary, { s: -13, l: 15 }).css,
      }
    },

    shapeStyle () {
      return {
        borderTopColor: colorShiftHsl(this.$themes.secondary, { h: -1, s: -11, l: 10 }).css,
      }
    },
  },
}
</script>

<style lang="scss">
$top-nav-height: 4.0625rem;
$nav-border-side-width: 3.1875rem;
$lighter-gray: #dddddd;
$font-size-base: 1rem !default;

.app-navbar {
  transition: background-color 0.3s ease; /* sidebar's bg color transitions as well -> consistency */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 990;
  height: $top-nav-height;
  display: flex;
  padding: 1rem 2rem 1rem 1rem;

  &__menu {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    z-index: 1;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__center {
    display: flex;
    margin-left: 3rem;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    color: $lighter-gray;
  }

  &__button {
    width: 10.8125rem;
    margin: 0 0 0 1rem !important;
    font-weight: bold;

    .va-button__content__icon-left.fa-github {
      font-size: 1.5rem;
    }
  }

  &__icon-container {
    font-size: $font-size-base;
    padding: 0.3rem 0;
    position: absolute;
    z-index: 10;
  }

  &__logo {
    width: 9.5rem;
    margin-left: 2.5rem;
    height: auto;
    align-items: center;

    & * {
      max-height: 100%;
      max-width: 100%;
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  &__actions {
    justify-content: flex-end;
  }

  &__mailto-link:hover {
    filter: brightness(85%);
  }

  &__shape {
    transition: border-top-color 0.3s ease; /* sidebar's bg color transitions as well -> consistency */
    width: 33%;
    max-width: 467px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    border-top: $top-nav-height solid transparent;
    border-left: $nav-border-side-width solid transparent;
    border-right: $nav-border-side-width solid transparent;
    height: 0;
  }

  @include media-breakpoint-down(lg) {
    &__button {
      display: none !important;
    }
  }

  @include media-breakpoint-down(md) {
    &__center {
      display: none !important;
    }
  }

  @include media-breakpoint-down(sm) {
    height: $top-mobile-nav-height;
    padding: 1rem;

    &__content {
      align-items: flex-end;
    }

    &__actions {
      justify-content: space-between;
      width: 100%;
    }

    &__shape {
      display: none;
    }
  }
}
</style>
