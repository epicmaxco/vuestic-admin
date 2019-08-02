<template>
  <va-dropdown
    class="color-dropdown"
    offset="0, 13px"
  >
    <va-icon
      name="i-nav-color"
      slot="anchor"
      class="color-dropdown__icon"
    />

    <div class="color-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="primary" slot="anchor">
          Primary
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="$themes.primary" :value="$themes.primary"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="secondary" slot="anchor">
          Secondary
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="$themes.secondary" :value="$themes.secondary"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="success" slot="anchor">
          Success
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="$themes.success" :value="$themes.success"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="info" slot="anchor">
          Info
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="$themes.info" :value="$themes.info"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="danger" slot="anchor">
          Danger
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="$themes.danger" :value="$themes.danger"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="warning" slot="anchor">
          Warning
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="$themes.warning" :value="$themes.warning"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="gray" slot="anchor">
          Gray
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="$themes.gray" :value="$themes.gray"/>
      </va-dropdown>

      <va-dropdown class="color-picker-dropdown mt-1 mb-1">
        <va-badge class="color-picker-dropdown__badge" color="dark" slot="anchor">
          Dark
        </va-badge>
        <va-advanced-color-picker class="my-1" v-model="$themes.dark" :value="$themes.dark"/>
      </va-dropdown>
    </div>
  </va-dropdown>
</template>

<script>
import VaAdvancedColorPicker
  from '../../../../../vuestic-theme/vuestic-components/va-color-picker/VaAdvancedColorPicker'
import { colorArray } from '../../../../../vuestic-theme/vuestic-components/va-color-picker/VuesticTheme'

export default {
  components: {
    VaAdvancedColorPicker,
  },
  data () {
    return {
      palette: colorArray,
    }
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.color-dropdown {
  cursor: pointer;
  margin-top: 0.3rem;

  &__icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: .5rem;

    .color-picker-dropdown {
      display: flex;
      justify-content: center;

      &__badge {
        /* Badges have 0.5rem to the right by default */
        margin-left: 0.5rem;
      }
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
