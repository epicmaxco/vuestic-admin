<template>
  <div class="profile-dropdown flex-center">
    <span class="profile-dropdown__actuator">
      <slot/>
      <va-icon class="pa-1" :icon="`fa ${isShown ? 'fa-chevron-up' :'fa-chevron-down'}`"></va-icon>
    </span>
    <va-dropdown
      v-model="isShown"
      position="bottom"
    >
      <router-link
        v-for="option in options"
        :key="option.name"
        :to="{name: option.redirectTo}"
        class="va-dropdown__item"
      >
        {{ $t(`user.${option.name}`) }}
      </router-link>
    </va-dropdown>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
.profile-dropdown {
  cursor: pointer;
  &__actuator {
    color: $vue-green;
  }
}
</style>
