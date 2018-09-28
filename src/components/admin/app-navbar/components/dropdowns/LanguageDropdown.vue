<template>
  <vuestic-dropdown class="language-dropdown" placement="bottom-end" arrow>
    <span class="flag-icon flag-icon-large"
          slot="actuator"
          :class="flagIconClass(currentLanguage())"
    >
    </span>
    <a class="dropdown-item"
       v-for="(option, id) in options"
       :key="id"
       :class="{ active: option.code === currentLanguage() }"
       @click="setLanguage(option.code)"
    >
      <span class="flag-icon flag-icon-small" :class="flagIconClass(option.code)"></span>
      <span class="dropdown-item__text ellipsis">
        {{ `language.${option.name}` | translate }}
      </span>
    </a>
  </vuestic-dropdown>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'language-dropdown',

  props: {
    options: {
      type: Array,
      default: () => [
        {
          code: 'gb',
          name: 'english'
        },
        {
          code: 'es',
          name: 'spanish'
        },
        {
          code: 'br',
          name: 'brazilian_portuguese'
        }
      ]
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
  @import "~flag-icon-css/css/flag-icon.css";

  .language-dropdown {
    .flag-icon-large {
      display: block;
      width: 31px;
      height: 23px;
    }

    .flag-icon-small {
      min-width: 22px;
      height: 17px;
      margin-right: 12px;
    }
  }
</style>
