<template>
  <VaDropdown :offset="[13, 0]" class="language-dropdown" stick-to-edges>
    <template #anchor>
      <VaIcon :name="getFlagIcon(locale, 'large')" />
    </template>

    <VaDropdownContent class="language-dropdown__content pl-8 pr-8 pt-2 pb-2">
      <div
        v-for="(option, id) in options"
        :key="id"
        :class="{ active: option.code === locale }"
        class="language-dropdown__item flex flex-1 flex-wrap items-center pt-1 pb-1 mt-2 mb-2"
        @click="locale = option.code"
      >
        <VaIcon :name="getFlagIcon(option.code, 'small')" />
        <span class="dropdown-item__text">
          {{ t(`language.${option.name}`) }}
        </span>
      </div>
    </VaDropdownContent>
  </VaDropdown>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

withDefaults(
  defineProps<{
    options?: { code: string; name: string }[]
  }>(),
  {
    options: () => [
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
)

function getFlagIcon(code: string, size: string) {
  return `flag-icon-${code} ${size}`
}
</script>

<style lang="scss" scoped>
@import 'flag-icons/css/flag-icons.css';

.language-dropdown {
  cursor: pointer;

  &__content {
    .fi-size-small {
      min-width: 1.5rem;
      min-height: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  &__item {
    cursor: pointer;
    flex-wrap: nowrap;

    &:last-of-type {
      padding-bottom: 0 !important;
    }

    &:hover {
      color: var(--va-primary);
    }
  }

  .fi::before {
    content: '';
  }

  .fi-size-large {
    display: block;
    width: 32px;
    height: 24px;
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
