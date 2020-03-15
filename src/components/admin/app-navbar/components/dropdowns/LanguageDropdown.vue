<template>
  <va-dropdown
    class="language-dropdown"
    offset="0, 16px"
    fixed
  >
    <va-icon slot="anchor" :name="['flag-icon flag-icon-large', flagIconClass(currentLanguage())]"/>
    <div class="language-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <div class="language-dropdown__item row align--center pt-1 pb-1 mt-2 mb-2"
        v-for="(option, id) in options"
        :key="id"
        :class="{ active: option.code === currentLanguage() }"
        @click="setLanguage(option.code)"
      >
        <va-icon :name="['flag-icon flag-icon-small', flagIconClass(option.code)]"/>
        <span class="dropdown-item__text">
          {{ $t(`language.${option.name}`) }}
        </span>
      </div>
    </div>
  </va-dropdown>
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
          name: 'english',
        },
        {
          code: 'es',
          name: 'spanish',
        },
        {
          code: 'br',
          name: 'brazilian_portuguese',
        },
        {
          code: 'cn',
          name: 'simplified_chinese',
        },
        {
          code: 'ir',
          name: 'persian',
        },
      ],
    },
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
    },
  },
}
</script>

<style lang="scss">
@import "~flag-icon-css/css/flag-icon.css";

.language-dropdown {
  cursor: pointer;

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;
    width: 12rem;

    .flag-icon-small {
      min-width: 1.5rem;
      min-height: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  &__item {
    padding-bottom: 0.625rem;
    cursor: pointer;
    flex-wrap: nowrap;

    &:last-of-type {
      padding-bottom: 0 !important;
    }

    &:hover,
    &.active {
      color: $vue-green;
    }
  }

  .flag-icon::before {
    content: "";
  }

  .flag-icon-large {
    display: block;
    width: 31px;
    height: 23px;
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
