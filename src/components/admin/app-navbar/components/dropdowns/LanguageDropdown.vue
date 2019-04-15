<template>
  <div class="language-dropdown">
    <va-icon :icon="['flag-icon flag-icon-large', flagIconClass(currentLanguage())]"/>
    <va-dropdown
      class="py-3 px-2 language-dropdown__container"
      v-model="isShown"
      position="bottom"
    >
      <div class="language-dropdown__item va-row align--center flex-nowrap"
         v-for="(option, id) in options"
         :key="id"
         :class="{ active: option.code === currentLanguage() }"
         @click="setLanguage(option.code)"
      >
        <va-icon :icon="['flag-icon flag-icon-small', flagIconClass(option.code)]"/>
        <span class="dropdown-item__text">
          {{ $t(`language.${option.name}`) }}
        </span>
      </div>
    </va-dropdown>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'language-dropdown',
  data () {
    return {
      isShown: false,
    }
  },
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
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';
@import "~flag-icon-css/css/flag-icon.css";

.language-dropdown {
  cursor: pointer;
  &__item {
    padding-bottom: 0.625rem;
    cursor: pointer;
    &:last-of-type {
      padding-bottom: 0 !important;
    }
    &:hover, &.active {
      color: $vue-green;
    }
  }
  &__container {
    max-width: 9rem !important;
    .flag-icon-small {
      min-width: 1.5rem;
      min-height: 1.5rem;
      margin-right: .5rem;
    }
  }
  .flag-icon-large {
    display: block;
    width: 31px;
    height: 23px;
  }

}
</style>
