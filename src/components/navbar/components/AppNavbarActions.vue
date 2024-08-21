<template>
  <div class="app-navbar-actions">
    <VaButton
      v-if="!isMobile"
      preset="secondary"
      href="https://ui.vuestic.dev/support/consulting"
      target="_blank"
      color="textPrimary"
      class="app-navbar-actions__item flex-shrink-0 mx-0"
    >
      <VaIcon size="large" class="material-symbols-outlined mr-1">support_agent</VaIcon>
      {{ t('supportAndConsulting') }}
    </VaButton>
    <VaButton
      v-if="!isMobile"
      preset="secondary"
      href="https://admin.vuestic.dev/"
      target="_blank"
      color="textPrimary"
      class="app-navbar-actions__item flex-shrink-0 mx-0"
    >
      <VaIcon size="large" class="material-symbols-outlined mr-1">info</VaIcon>
      {{ t('aboutVuesticAdmin') }}
    </VaButton>
    <GithubButton v-if="!isMobile" class="app-navbar-actions__item" />
    <VaButton
      v-if="!isMobile"
      preset="secondary"
      href="https://discord.gg/u7fQdqQt8c"
      target="_blank"
      color="textPrimary"
      class="app-navbar-actions__item flex-shrink-0 mx-0"
    >
      <VaIcon :component="VaIconDiscord" />
    </VaButton>
    <NotificationDropdown class="app-navbar-actions__item" />
    <ProfileDropdown class="app-navbar-actions__item app-navbar-actions__item--profile mr-1" />
  </div>
</template>

<script lang="ts" setup>
import ProfileDropdown from './dropdowns/ProfileDropdown.vue'
import NotificationDropdown from './dropdowns/NotificationDropdown.vue'
import GithubButton from './GitHubButton.vue'
import VaIconDiscord from '../../icons/VaIconDiscord.vue'

defineProps({
  isMobile: { type: Boolean, default: false },
})

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss">
.app-navbar-actions {
  display: flex;
  align-items: center;

  .va-dropdown__anchor {
    color: var(--va-primary);
    fill: var(--va-primary);
  }

  &__item {
    padding: 0;
    margin-left: 0.25rem;
    margin-right: 0.25rem;

    svg {
      height: 20px;
    }

    &--profile {
      display: flex;
      justify-content: center;
    }

    .va-dropdown-content {
      background-color: var(--va-white);
    }

    @media screen and (max-width: 640px) {
      margin-left: 0;
      margin-right: 0;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }

  .fa-github {
    color: var(--va-on-background-primary);
  }
}
</style>
