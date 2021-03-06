<template>
  <va-dropdown
    class="profile-dropdown"
    v-model="isShown"
    boundary-body
    position="bottom"
    :offset="[0, 13]"
  >
    <template #anchor>
      <span
        class="profile-dropdown__anchor"
        :style="{color: theme.primary}"
      >
        <slot/>
        <va-icon
          class="pa-1"
          :name="isShown ? 'angle_up' :'angle_down'"
        />
      </span>
    </template>
    <div class="profile-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <router-link
        v-for="option in options"
        :key="option.name"
        :to="{name: option.redirectTo}"
        class="profile-dropdown__item pt-1 pb-1 mt-2 mb-2"
      >
        {{ $t(`user.${option.name}`) }}
      </router-link>
    </div>
  </va-dropdown>
</template>

<script>
import { useTheme } from 'vuestic-ui'

export default {
  name: 'profile-section',
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
          name: 'profile',
          redirectTo: '',
        },
        {
          name: 'logout',
          redirectTo: 'login',
        },
      ],
    },
  },
  computed: {
    theme() { return useTheme().getTheme() }
  }
}
</script>

<style lang="scss">

.profile-dropdown {
  cursor: pointer;

  &__anchor {
    color: $vue-green;
  }

  .va-dropdown-popper__anchor {
    display: flex;
    justify-content: flex-end;
  }

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;
    width: 8rem;
  }

  &__item {
    display: block;
    color: $vue-darkest-blue;

    &:hover,
    &:active {
      color: $vue-green;
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
