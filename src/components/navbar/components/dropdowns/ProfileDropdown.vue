<template>
  <div class="profile-dropdown-wrapper">
    <VaDropdown v-model="isShown" :offset="[9, 0]" class="profile-dropdown" stick-to-edges>
      <template #anchor>
        <VaButton preset="secondary" color="textPrimary">
          <span class="profile-dropdown__anchor min-w-max">
            <slot />
            <VaAvatar :size="32" color="warning"> 😍 </VaAvatar>
          </span>
        </VaButton>
      </template>
      <VaDropdownContent
        class="profile-dropdown__content md:w-60 px-0 py-4 w-full"
        :style="{ '--hover-color': hoverColor }"
      >
        <VaList v-for="group in options" :key="group.name">
          <header v-if="group.name" class="uppercase text-[var(--va-secondary)] opacity-80 font-bold text-xs px-4">
            {{ t(`user.${group.name}`) }}
          </header>
          <VaListItem
            v-for="item in group.list"
            :key="item.name"
            class="menu-item px-4 text-base cursor-pointer h-8"
            v-bind="resolveLinkAttribute(item)"
          >
            <VaIcon :name="item.icon" class="pr-1" color="secondary" />
            {{ t(`user.${item.name}`) }}
          </VaListItem>
          <VaListSeparator v-if="group.separator" class="mx-3 my-2" />
        </VaList>
      </VaDropdownContent>
    </VaDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useColors } from 'vuestic-ui'

const { colors, setHSLAColor } = useColors()
const hoverColor = computed(() => setHSLAColor(colors.focus, { a: 0.1 }))

const { t } = useI18n()

type ProfileListItem = {
  name: string
  to?: string
  href?: string
  icon: string
}

type ProfileOptions = {
  name: string
  separator: boolean
  list: ProfileListItem[]
}

withDefaults(
  defineProps<{
    options?: ProfileOptions[]
  }>(),
  {
    options: () => [
      {
        name: 'account',
        separator: true,
        list: [
          {
            name: 'profile',
            to: 'preferences',
            icon: 'mso-account_circle',
          },
          {
            name: 'settings',
            to: 'settings',
            icon: 'mso-settings',
          },
          {
            name: 'billing',
            to: 'billing',
            icon: 'mso-receipt_long',
          },
          {
            name: 'projects',
            to: 'projects',
            icon: 'mso-favorite',
          },
        ],
      },
      {
        name: 'explore',
        separator: true,
        list: [
          {
            name: 'faq',
            to: 'faq',
            icon: 'mso-quiz',
          },
          {
            name: 'helpAndSupport',
            href: 'https://discord.gg/u7fQdqQt8c',
            icon: 'mso-error',
          },
        ],
      },
      {
        name: '',
        separator: false,
        list: [
          {
            name: 'logout',
            to: 'login',
            icon: 'mso-logout',
          },
        ],
      },
    ],
  },
)

const isShown = ref(false)

const resolveLinkAttribute = (item: ProfileListItem) => {
  return item.to ? { to: { name: item.to } } : item.href ? { href: item.href, target: '_blank' } : {}
}
</script>

<style lang="scss">
.profile-dropdown {
  cursor: pointer;

  &__content {
    .menu-item:hover {
      background: var(--hover-color);
    }
  }

  &__anchor {
    display: inline-block;
  }
}
</style>
