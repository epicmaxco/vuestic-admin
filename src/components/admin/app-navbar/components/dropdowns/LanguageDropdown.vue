<template>
  <div class="language-selector dropdown" v-dropdown.closeOnMenuClick>
    <a class="language-selector-button dropdown-toggle" href="#">
      <span class="flag-icon flag-icon-large" :class="flagIconClass(currentLanguage())"></span>
    </a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" :class="{ active: option.code === currentLanguage() }"
        v-for="(option, id) in options" :key="id" @click="setLanguage(option.code)">
        <span class="flag-icon flag-icon-small" :class="flagIconClass(option.code)"></span>
        <span class="dropdown-item-text ellipsis">
          {{ `language.${option.name}` | translate }}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'language-dropdown',

    props: {
      options: {
        type: Array,
        default () {
          return [
            {
              code: 'gb',
              name: 'english'
            },
            {
              code: 'es',
              name: 'spanish'
            }
          ]
        }
      }
    },

    methods: {

      setLanguage (locale) {
        Vue.i18n.set(locale)
      },

      currentLanguage () {
        return Vue.i18n.locale() === 'en' ? 'gb' : Vue.i18n.locale()
      },

      flagIconClass (code) {
        return `flag-icon-${code}`
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../../sass/variables";
  @import "../../../../../../node_modules/bootstrap/scss/mixins/breakpoints";
  @import "../../../../../../node_modules/bootstrap/scss/functions";
  @import "../../../../../../node_modules/bootstrap/scss/variables";

  .language-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    height: 100%;
    padding: 0;

    .language-selector-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .flag-icon-large {
      width: 31px;
      height: 23px;
    }

    .flag-icon-small {
      min-width: 22px;
      height: 17px;
    }

    .dropdown-toggle {
      padding: 0;

      &:after {
        display: none;
      }
    }

    &.show {
      &:after {
        position: absolute;
        right: calc(50% - 10px);
        bottom: -$dropdown-mobile-show-b;
        display: block;
        width: 0;
        height: 0;
        content: '';
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid $darkest-gray;
        z-index: 2;
      }

      .dropdown-menu {
        left: auto;
        margin-top: $dropdown-mobile-show-b;

        &.last {
          right: 0;
        }

        @include media-breakpoint-up(lg) {
          right: auto;
          left: 12px;
          margin-top: 12px;
        }
      }
    }

    .dropdown-menu {
      min-width: 8rem;
      max-width: 11rem;
      margin-top: $dropdown-show-b;
      padding: 0;
      background-color: $dropdown-background;
      box-shadow: $dropdown-box-shadow;

      .dropdown-item {
        display: flex;
        align-items: center;
        height: 38px;
        padding: 9px 12px;

        .dropdown-item-text {
          padding-left: 12px;
          font-size: $font-size-base;
          line-height: 1.25;
        }

        &.active {
          color: $vue-green;
          background-color: $darkest-gray;
        }

        &:hover {
          background-color: $almost-black;
        }

        &:last-child {
          padding-top: 8px;
          padding-bottom: 10px;
        }
      }

      @include media-breakpoint-up(lg) {
        top: 42px;
      }
    }
  }
</style>
