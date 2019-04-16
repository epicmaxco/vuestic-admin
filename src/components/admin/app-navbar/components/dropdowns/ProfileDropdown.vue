<template>
  <div class="profile-dropdown">
    <span class="profile-dropdown__actuator">
      <slot/>
      <va-icon class="pa-1" :icon="`fa ${isShown ? 'fa-chevron-up' :'fa-chevron-down'}`"></va-icon>
    </span>
    <va-dropdown
      v-model="isShown"
      position="bottom"
      class="pa-3"
    >
      <router-link
        v-for="option in options"
        :key="option.name"
        :to="{name: option.redirectTo}"
        class="profile-dropdown__item pb-2"
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
  &__item {
    display: block;
    color: $vue-darkest-blue;

    &:hover, &:active {
      color: $vue-green;
    }
  }
}
</style>
