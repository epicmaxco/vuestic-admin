<template>
  <div class="profile-dropdown-wrapper">
    <VaDropdown v-model="isShown" :offset="[9, 0]" class="profile-dropdown" stick-to-edges>
      <template #anchor>
        <VaButton preset="secondary" color="textPrimary">
          <span class="profile-dropdown__anchor min-w-max">
            <slot />
            <img src="https://picsum.photos/123" alt="" class="h-8 w-8 rounded-full" />
          </span>
        </VaButton>
      </template>
      <VaDropdownContent class="profile-dropdown__content md:w-60 px-0 py-4 w-full">
        <VaList v-for="group in options" :key="group.name" class="space-y-2">
          <header
            v-if="group.name"
            class="profile-dropdown__group-header uppercase text-gray-400 font-bold text-xs px-4"
          >
            {{ t(`user.${group.name}`) }}
          </header>
          <VaListItem
            v-for="item in group.list"
            :key="item.name"
            class="px-4 text-base cursor-pointer hover:bg-focus active:bg-focus hover:bg-opacity-10 active:bg-opacity-10"
            v-bind="resolveLinkAttribute(item)"
          >
            <VaIcon :name="item.icon" class="px-1" />
            {{ t(`user.${item.name}`) }}
          </VaListItem>
          <VaListSeparator v-if="group.separator" class="mx-3" />
        </VaList>
      </VaDropdownContent>
    </VaDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
type ProfileListItem = {
  name: string
  redirectTo?: string
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
            redirectTo: 'preferences',
            icon: 'account_circle',
          },
          {
            name: 'settings',
            redirectTo: 'settings',
            icon: 'settings',
          },
          {
            name: 'billing',
            redirectTo: 'payments/billing',
            icon: 'receipt_long',
          },
          {
            name: 'projects',
            redirectTo: 'projects',
            icon: 'favorite_outline',
          },
        ],
      },
      {
        name: 'explore',
        separator: true,
        list: [
          {
            name: 'faq',
            redirectTo: 'faq',
            icon: 'quiz',
          },
          {
            name: 'helpAndSupport',
            href: 'https://discord.gg/fnQ47XYB',
            icon: 'help_outline',
          },
        ],
      },
      {
        name: '',
        separator: false,
        list: [
          {
            name: 'logout',
            redirectTo: '',
            icon: 'logout',
          },
        ],
      },
    ],
  },
)

const isShown = ref(false)

const resolveLinkAttribute = (item: ProfileListItem) => {
  return item.redirectTo ? { to: item.redirectTo } : item.href ? { href: item.href, target: '_blank' } : {}
}
</script>

<style lang="scss" scoped>
.profile-dropdown {
  cursor: pointer;

  &__anchor {
    display: inline-block;
  }
}
</style>
