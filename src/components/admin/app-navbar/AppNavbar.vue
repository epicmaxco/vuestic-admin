<template>
  <nav
    class="app-navbar"
    :style="navbarStyle"
  >
    <div class="app-navbar__icon-container">
      <header-selector slot="selector" :minimized.sync="minimizedProxy"/>
    </div>

    <div class="app-navbar__content row">
      <router-link
        class="app-navbar__logo align--center mr-3"
        to="/"
      >
        <va-icon-vuestic/>
      </router-link>
      <div class="app-navbar__center flex lg5 md4 flex-center">
        <div class="row flex-nowrap align--center justify--space-between">
          <span class="app-navbar__text no-wrap">
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
      </div>
      <app-navbar-actions
        class="app-navbar__actions md5 lg4"
        :user-name="userName"
      />
    </div>
    <div
      class="app-navbar__shape"
      :style="shapeStyle"
    />
  </nav>
</template>

<script>
import VaIconVuestic from '../../../iconset/VaIconVuestic'
import HeaderSelector from './components/HeaderSelector'
import AppNavbarActions from './AppNavbarActions'
import { hex2hsl } from '../../../services/color-functions'

// TODO: need to update for all color-functions
const updateHslColor = (main, offset = { h: 0, s: 0, l: 0 }) => {
  offset = {
    h: offset.h || 0,
    s: offset.s || 0,
    l: offset.l || 0,
  }

  const color = hex2hsl(main)

  const normalizeParam = (value, params = { start: 0, end: 100 }) =>
    value < params.start
      ? params.start
      : value > params.end
        ? params.end
        : value

  color.h = normalizeParam(color.h + offset.h, { end: 250 })
  color.s = normalizeParam(color.s + offset.s)
  color.l = normalizeParam(color.l + offset.l)

  return color
}
export default {
  name: 'app-navbar',
  components: {
    VaIconVuestic,
    HeaderSelector,
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
    minimizedProxy: {
      get () {
        return this.minimized
      },
      set (minimized) {
        this.$emit('update:minimized', minimized)
      },
    },
    navbarStyle () {
      return {
        backgroundColor: updateHslColor(this.$themes.secondary, { s: -13, l: 15 }).css,
      }
    },

    shapeStyle () {
      return {
        borderTopColor: updateHslColor(this.$themes.secondary, { h: -1, s: -11, l: 10 }).css,
      }
    },
  },
}
</script>

<style lang="scss">
$top-nav-height: 4.0625rem;
$nav-mobile-brand-top: 1.5rem;
$nav-border-side-width: 3.1875rem;
$lighter-gray: #dddddd;
$font-size-base: 1rem !default;

.app-navbar {
  transition: background-color 0.3s ease; /* sidebar's bg color transitions as well -> consistency */
  position: relative;
  height: $top-nav-height;
  display: flex;
  padding: 1rem 2rem 1rem 1rem;

  &__content {
    z-index: 1;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__center {
    margin-left: 3rem;
  }

  &__text {
    color: $lighter-gray;
  }

  &__button {
    width: 10.8125rem;
    margin: 0 !important;

    .va-button__content__icon-left.fa-github {
      font-size: 1.5rem;
    }
  }

  &__icon-container {
    font-size: $font-size-base;
    padding: 0.3rem 0;
    position: absolute;
  }

  &__logo {
    width: 9.5rem;
    margin-left: 2.5rem;
    height: auto;

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
      justify-content: space-around;
      padding: 0 0.5rem;
      width: 100%;
    }

    &__shape {
      display: none;
    }
  }
}
</style>
