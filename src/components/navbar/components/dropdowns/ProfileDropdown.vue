<template>
  <va-dropdown v-model="isShown" class="profile-dropdown" boundary-body position="bottom" :offset="[13, 0]">
    <template #anchor>
      <span class="profile-dropdown__anchor">
        <slot />
        <va-icon class="px-2" :name="isShown ? 'angle_up' : 'angle_down'" :color="theme.primary" />
      </span>
    </template>
    <va-dropdown-content class="profile-dropdown__content">
      <va-list-item v-for="option in options" :key="option.name">
        <router-link :to="{ name: option.redirectTo }" class="profile-dropdown__item">
          {{ t(`user.${option.name}`) }}
        </router-link>
      </va-list-item>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  import { useGlobalConfig } from "vuestic-ui";

  const props = withDefaults(
    defineProps<{
      options?: { name: string; redirectTo: string }[];
    }>(),
    {
      options: () => [
        {
          name: "profile",
          redirectTo: "",
        },
        {
          name: "logout",
          redirectTo: "login",
        },
      ],
    },
  );

  const isShown = ref(false);

  const theme = computed(() => useGlobalConfig().getGlobalConfig());
</script>

<style lang="scss" scoped>
  .profile-dropdown {
    cursor: pointer;

    .va-dropdown-popper__anchor {
      display: flex;
      justify-content: flex-end;
    }

    &__content {
      width: 8rem;
    }

    &__item {
      display: block;
      color: var(--va-gray);

      &:hover,
      &:active {
        color: var(--va-primary);
      }
    }

    .va-dropdown__anchor {
      display: inline-block;
    }
  }
</style>
