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
    <div class="settings-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <div class="title settings-dropdown__content-label mt-2 mb-3">
        {{$t('dashboard.navigationLayout')}}
      </div>
      <va-button-toggle
        outline
        v-model="layoutProxy"
        :options="options"
        class="settings-dropdown__control mb-2"
      />
    </div>
  </va-dropdown>
</template>

<script>
export default {
  name: 'settings-dropdown',
  components: {},
  props: {
    layout: String,
  },
  data () {
    return {
      options: [
        { label: this.$t('dashboard.sideBarButton'), value: 'sidebar' },
        { label: this.$t('dashboard.topBarButton'), value: 'topbar' },
      ],
    }
  },
  computed: {
    layoutProxy: {
      get () {
        return this.layout
      },
      set (layout) {
        this.$emit('update:layout', layout)
      },
    },
  },
}
</script>

<style lang="scss">
@import "~vuestic-ui/src/components/vuestic-sass/resources/resources";

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
