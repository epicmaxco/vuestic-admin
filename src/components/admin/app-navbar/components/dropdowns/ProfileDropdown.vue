<template>
  <va-dropdown
    class="profile-dropdown"
    trigger="none"
    v-model="isShown"
    boundary-body
  >
    <span
      class="profile-dropdown__anchor" slot="anchor"
      :style="{color: this.$themes.primary}"
      @focus="toggleVisibility"
      @blur="toggleVisibility"
      tabindex="1"
    >
      <slot/>
      <va-icon
        class="pa-1"
        :name="`fa ${isShown ? 'fa-chevron-up' :'fa-chevron-down'}`"
      />
    </span>
    <div class="profile-dropdown__content py-3 px-2">
      <router-link
        v-for="option in options"
        :key="option.name"
        :to="{name: option.redirectTo}"
        class="profile-dropdown__item pb-2"
      >
        {{ $t(`user.${option.name}`) }}
      </router-link>
    </div>
  </va-dropdown>
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
  methods: {
    toggleVisibility () {
      this.isShown = !this.isShown
    },
  },
}
</script>

<style lang="scss">
.profile-dropdown {
  cursor: pointer;
  &__anchor {
    &:focus {
      outline: none;
    }
  }
  .va-dropdown-popper__anchor {
    display: flex;
    justify-content: flex-end;
  }
  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: .5rem;
    width: 6rem;
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
