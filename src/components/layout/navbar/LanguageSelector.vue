<template>
  <div class="language-selector dropdown" v-dropdown.closeOnMenuClick>
    <a class="language-selector-button dropdown-toggle" href="#" @click.prevent="closeMenu">
      <i class="flag-icon flag-icon-large" :class="flagIconClass(currentLanguage())"></i>
    </a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a
        class="dropdown-item"
        :class="{ active: option.code === currentLanguage() }"
        v-for="(option, id) in options"
        :key="id"
        @click="setLanguage(option.code)"
      >
        <i class="flag-icon flag-icon-small" :class="flagIconClass(option.code)"></i>
        <span class="dropdown-item-text ellipsis">
          {{ `language.${option.name}` | translate }}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'language-selector',

    props: {
      options: {
        type: Array,
        required: true
      }
    },

    methods: {
      ...mapActions(['closeMenu']),

      setLanguage (locale) {
        Vue.i18n.set(locale)
      },

      currentLanguage () {
        return Vue.i18n.locale() === 'br' ? 'br' : Vue.i18n.locale()
      },

      flagIconClass (code) {
        return `flag-icon-${code}`
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .language-selector {
    display: flex;
    max-width: 100%;
    height: 100%;
    padding: 0;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

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

      @include media-breakpoint-up(lg) {
        top: 42px;
      }
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      height: 38px;
      padding: 9px 12px;

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

    .dropdown-item-text {
      padding-left: 12px;
      font-size: $font-size-base;
      line-height: 1.25;
    }
  }
</style>
