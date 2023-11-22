<template>
  <div class="profile-dropdown-wrapper">
    <VaDropdown v-model="isShown" :offset="[13, 0]" class="profile-dropdown" stick-to-edges>
      <template #anchor>
        <span class="profile-dropdown__anchor">
          <slot />
          <VaIcon :color="colors.primary" :name="isShown ? 'angle_up' : 'angle_down'" class="px-2" />
        </span>
      </template>
      <VaDropdownContent class="profile-dropdown__content">
        <VaListItem v-for="option in options" :key="option.name" class="p-2">
          <RouterLink :to="{ name: option.redirectTo }" class="profile-dropdown__item">
            {{ t(`user.${option.name}`) }}
          </RouterLink>
        </VaListItem>
      </VaDropdownContent>
    </VaDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useColors } from 'vuestic-ui'

const { t } = useI18n()
const { colors } = useColors()

withDefaults(
  defineProps<{
    options?: { name: string; redirectTo: string }[]
  }>(),
  {
    options: () => [
      {
        name: 'profile',
        redirectTo: '',
      },
      {
        name: 'logout',
        redirectTo: 'login',
      },
    ],
  },
)

const isShown = ref(false)
</script>

<style lang="scss" scoped>
.profile-dropdown {
  cursor: pointer;

  &__anchor {
    display: inline-block;
  }

  &__item {
    display: block;
    color: var(--va-gray);

    &:hover,
    &:active {
      color: var(--va-primary);
    }
  }
}
</style>
