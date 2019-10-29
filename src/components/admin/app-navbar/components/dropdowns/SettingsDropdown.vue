<template>
  <va-dropdown
    class="settings-dropdown"
    offset="0, 16px"
  >
    <va-icon
      name="vuestic-iconset vuestic-iconset-settings"
      color="white"
      style="font-size: 1.4rem; display: flex;"
      class="settings-dropdown__icon"
      slot="anchor"
    />
    <div class="settings-dropdown__content py-4 px-4">
      <div class="title settings-dropdown__content-label">
        {{$t('dashboard.navigationLayout')}}
      </div>
      <va-button-toggle
        outline
        v-model="navbarViewProxy"
        :options="options"
        class="settings-dropdown__control"
      />
    </div>
  </va-dropdown>
</template>

<script>
export default {
  name: 'settings-dropdown',
  components: {},
  props: {
    navbarView: Boolean,
  },
  data () {
    return {
      options: [
        { label: this.$t('dashboard.topBarButton'), value: 'true' },
        { label: this.$t('dashboard.sideBarButton'), value: 'false' },
      ],
    }
  },
  computed: {
    navbarViewProxy: {
      set (navbarView) {
        this.$emit('update:navbarView', navbarView === 'true')
      },
      get () {
        return this.navbarView + ''
      },
    },
  },
}
</script>

<style lang="scss">
.settings-dropdown {
  cursor: pointer;

  &__icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;

    &-label {
      margin-bottom: 0.5rem;
    }
  }

  &__control {
    .va-button-group {
      margin: 0;
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
