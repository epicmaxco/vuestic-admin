<template>
  <va-dropdown
    class="settings-dropdown"
    offset="0, 16px"
  >
    <va-icon
      name="vuestic-iconset vuestic-iconset-settings"
      style="font-size: 1.4rem; display: flex;"
      class="settings-dropdown__icon"
      slot="anchor"
      :color="contextConfig.invertedColor ? $themes.gray : 'white'"
    />

    <div class="settings-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <div class="settings-dropdown__content-label mt-2 mb-3" :style="{color: this.$themes.primary}">
        {{$t('dashboard.navigationLayout')}}
      </div>
      <va-button-toggle
        outline
        v-model="isTopBarProxy"
        :options="options"
        class="settings-dropdown__control mb-2"
        small
      />
    </div>
  </va-dropdown>
</template>

<script>
import { ColorThemeMixin } from '../../../../../services/vuestic-ui'

export default {
  name: 'settings-dropdown',
  inject: ['contextConfig'],
  components: {},
  mixins: [ColorThemeMixin],
  props: {
    isTopBar: Boolean,
  },
  data () {
    return {
      options: [
        { label: this.$t('dashboard.sideBarButton'), value: String(false) }, // NOTE: boolean is unsupported for va-dropdown
        { label: this.$t('dashboard.topBarButton'), value: String(true) },
      ],
    }
  },
  computed: {
    isTopBarProxy: {
      get () {
        return String(this.isTopBar)
      },
      set (isTopBar) {
        const value = isTopBar === 'true' // NOTE: convert string to boolean
        this.$emit('update:isTopBar', value)
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
