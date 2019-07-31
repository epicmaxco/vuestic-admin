<template>
  <div class="va-color-picker-input">
    <div v-if="validator(this.mode)">
      <va-dropdown-popper fixed>
        <div slot="anchor" class="va-color-picker-input__slot">
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
          <va-advanced-color-picker
            v-if="this.mode === 'advanced'"
            v-model="valueProxy"
          />
          <va-simple-palette-picker
            v-if="this.mode === 'palette'"
            v-model="valueProxy"
            :palette="palette"
          />
          <va-slider-color-picker
            v-if="this.mode === 'slider'"
            v-model="valueProxy"
          />
        </div>
      </va-dropdown-popper>
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
import VaDropdownPopper from '../va-dropdown/VaDropdown'

export default {
  name: 'va-color-picker-input',
  components: {
    VaDropdownPopper,
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
    cursor: pointer;
  }
}
</style>
