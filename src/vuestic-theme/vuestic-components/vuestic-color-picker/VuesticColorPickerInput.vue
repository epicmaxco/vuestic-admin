<template>
  <div class="vuestic-color-picker-input">
    <div v-if="validator(this.mode)">
      <vuestic-dropdown>
        <div slot="toggle" class="vuestic-color-picker-input__slot">
          <slot>
            <vuestic-color-input v-model="valueProxy" mode="palette" :disabled="disableInput" :selected="selected"/>
          </slot>
        </div>
        <div class="vuestic-color-picker-input__dropdown">
          <div v-if="this.mode==='advanced'">
            <vuestic-advanced-color-picker v-model="valueProxy"/>
          </div>
          <div v-if="this.mode==='palette'">
            <vuestic-simple-palette-picker v-model="valueProxy" :palette="palette"/>
          </div>
          <div v-if="this.mode==='slider'">
            <vuestic-slider-color-picker v-model="valueProxy"/>
          </div>
        </div>
      </vuestic-dropdown>
    </div>
    <div v-else>
      <slot>
        <vuestic-color-input v-model="valueProxy" mode="palette" :disabled="disableInput"/>
      </slot>
    </div>
  </div>

</template>

<script>
import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'
import VuesticSimplePalettePicker from './VuesticSimplePalettePicker'
import VuesticSliderColorPicker from './VuesticSliderColorPicker'
import VuesticColorSquare from './VuesticColorSquare'
import VuesticColorInput from './VuesticColorInput'
import VuesticDropdown from './VuesticDropdown'

export default {
  name: 'vuestic-color-picker-input',
  components: {
    VuesticDropdown,
    VuesticColorSquare,
    VuesticSimplePalettePicker,
    VuesticAdvancedColorPicker,
    VuesticSliderColorPicker,
    VuesticColorInput
  },
  props: {
    mode: {
      type: String
    },
    palette: {
      type: Array
    },
    value: {
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    }
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
    disableInput () {
      if (this.mode === 'palette') {
        if (this.palette) {
          return true
        }
      }
      return false
    }
  },
  methods: {
    validator (value) {
      if (typeof (value) !== 'undefined') {
        return ['palette', 'slider', 'advanced'].includes(value)
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.vuestic-color-picker-input {
  &__dropdown {
    background: $white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &__slot {
    cursor: pointer
  }
}
</style>
