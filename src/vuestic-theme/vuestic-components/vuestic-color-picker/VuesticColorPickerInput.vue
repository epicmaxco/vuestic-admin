<template>
  <div class="vuestic-color-picker-input dropdown" v-dropdown>
    <div class="dropdown-toggle">
      <slot>
        <vuestic-color-input v-model="valueProxy"/>
      </slot>
    </div>
    <div v-if="validator(this.mode)" class="dropdown-menu">
      <div v-if="this.mode==='advanced'">
        <vuestic-advanced-color-picker v-model="valueProxy"/>
      </div>
      <div v-if="this.mode==='palette'">
        <vuestic-simple-palette-picker v-model="valueProxy" :palette="palettePicker"/>
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
    palettePicker: {
      type: Array
    }
  },
  data () {
    return {
      value: '',
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
  },
  methods: {
    validator (value) {
      return ['palette', 'slider', 'advanced'].includes(value)
    }
  }
}
</script>
