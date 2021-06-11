<template>
  <va-dropdown
    class="language-dropdown"
    fixed
    position="bottom"
    :offset="[0, 13]"
  >
    <template #anchor>
      <va-icon :name="flagIcon(currentLanguage(), 'large')"/>
    </template>
    <va-dropdown-content class="language-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <div class="language-dropdown__item row align--center pt-1 pb-1 mt-2 mb-2"
        v-for="(option, id) in options"
        :key="id"
        :class="{ active: option.code === currentLanguage() }"
        @click="setLanguage(option.code)"
      >
        <va-icon :name="flagIcon(option.code, 'small')"/>
        <span class="dropdown-item__text">
          {{ $t(`language.${option.name}`) }}
        </span>
      </div>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'language-dropdown',
  setup() {
    const theme = useGlobalConfig().getGlobalConfig().colors

    return { theme }
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
        {
          code: 'ir',
          name: 'persian',
        },
      ],
    },
  },
  methods: {
    setLanguage (locale) {
      this.$root.$i18n.locale = locale
    },

    currentLanguage () {
      return this.$i18n.locale === 'en' ? 'gb' : this.$i18n.locale
    },

    flagIcon(code, size) {
      return `flag-icon-${code} ${size}`
    }
  },
}
</script>

<style lang="scss">
@import "~flag-icon-css/css/flag-icon.css";

.language-dropdown {
  cursor: pointer;

  &__content {
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

    &:hover {
      color: var(--va-primary);
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
