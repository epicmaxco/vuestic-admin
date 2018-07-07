<template>
  <div class="vuestic-color-picker-input dropdown" v-dropdown>
    <div class="dropdown-toggle vuestic-color-picker-input__slot">
      <slot>
        <vuestic-color-input :value="value" mode="palette" :disabled="disableInput"/>
      </slot>
    </div>
    <div v-if="validator(this.mode)" class="dropdown-menu">
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
  </div>

</template>

<script>
import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'
import VuesticSimplePalettePicker from './VuesticSimplePalettePicker'
import VuesticSliderColorPicker from './VuesticSliderColorPicker'
import Dropdown from 'vuestic-directives/Dropdown'
import VuesticColorSquare from './VuesticColorSquare'
import VuesticColorInput from './VuesticColorInput'

export default {
  name: 'vuestic-color-picker-input',
  components: {
    VuesticColorSquare,
    VuesticSimplePalettePicker,
    VuesticAdvancedColorPicker,
    VuesticSliderColorPicker,
    VuesticColorInput
  },
  directives: {
    dropdown: Dropdown
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
      return ['palette', 'slider', 'advanced'].includes(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.vuestic-color-picker-input {
  &__slot {
    cursor: pointer
  }
}
</style>
