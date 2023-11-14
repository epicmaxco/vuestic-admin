<template>
  <div class="flex gap-2 justify-end w-full items-center">
    <va-button
      href="https://github.com/epicmaxco/vuestic-admin"
      color="textPrimary"
      preset="secondary"
      icon="github"
      target="_blank"
    >
      Github
    </va-button>
    <NotificationDropdown />
    <va-button preset="secondary" color="textPrimary" to="/pages/faq"> Help & Support </va-button>
    <profile-dropdown>
      <span>{{ userName }}</span>
    </profile-dropdown>
  </div>
</template>

<script setup lang="ts">
  // import LanguageDropdown from './dropdowns/LanguageDropdown.vue'
  import ProfileDropdown from './dropdowns/ProfileDropdown.vue'
  import NotificationDropdown from './dropdowns/NotificationDropdown.vue'

  withDefaults(
    defineProps<{
      userName?: string
      isTopBar?: boolean
    }>(),
    {
      userName: '',
      isTopBar: false,
    },
  )

  defineEmits<{
    (e: 'update:isTopBar', isTopBar: boolean): void
  }>()
</script>
