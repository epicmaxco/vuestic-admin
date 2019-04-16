<template>
  <div class="va-color-picker-input">
    <div v-if="validator(this.mode)">
      <va-color-dropdown>
        <div slot="toggle" class="va-color-picker-input__slot">
          <slot>
            <va-color-input
              v-model="valueProxy"
              mode="palette"
              :disabled="isInputDisabled"
              :selected="selected"
            />
          </slot>
        </div>
        <div class="va-color-picker-input__dropdown">
          <div v-if="this.mode==='advanced'">
            <va-advanced-color-picker v-model="valueProxy"/>
          </div>
          <div v-if="this.mode==='palette'">
            <va-simple-palette-picker
              v-model="valueProxy"
              :palette="palette"
            />
          </div>
          <div v-if="this.mode==='slider'">
            <va-slider-color-picker v-model="valueProxy"/>
          </div>
        </div>
      </va-color-dropdown>
    </div>
    <div v-else>
      <slot>
        <va-color-input
          v-model="valueProxy"
          mode="palette"
          :disabled="isInputDisabled"
        />
      </slot>
    </div>
  </div>

</template>

<script>
import VaAdvancedColorPicker from './VaAdvancedColorPicker'
import VaSimplePalettePicker from './VaSimplePalettePicker'
import VaSliderColorPicker from './VaSliderColorPicker'
import VaColorSquare from './VaColorSquare'
import VaColorInput from './VaColorInput'
import VaColorDropdown from './VaColorDropdown'

export default {
  name: 'va-color-picker-input',
  components: {
    VaColorDropdown,
    VaColorSquare,
    VaSimplePalettePicker,
    VaAdvancedColorPicker,
    VaSliderColorPicker,
    VaColorInput,
  },
  props: {
    mode: {
      type: String,
    },
    palette: {
      type: Array,
    },
    value: {
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
    isInputDisabled () {
      return !!(this.mode === 'palette' && this.palette)
    },
  },
  methods: {
    validator (value) {
      return ['palette', 'slider', 'advanced'].includes(value)
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-color-picker-input {
  &__dropdown {
    background: $white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &__slot {
    cursor: pointer
  }
}
</style>
