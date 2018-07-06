<template>
  <div class="vuestic-color-picker-input dropdown" v-dropdown>
    <div class="dropdown-toggle">
      <slot>
        <vuestic-advanced-color-picker v-model="valueProxy"/>
      </slot>
    </div>
    <div v-if="validator(this.mode)" class="dropdown-menu">
      <div v-if="this.mode==='advanced'">
        <vuestic-advanced-color-picker v-model="valueProxy"/>
      </div>
      <div v-if="this.mode==='palette'">
        <vuestic-simple-palette-picker v-model="valueProxy" :palette="['#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36']"/>
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

export default {
  name: 'vuestic-color-picker-input',
  components: {
    VuesticSimplePalettePicker,
    VuesticAdvancedColorPicker,
    VuesticSliderColorPicker
  },
  directives: {
    dropdown: Dropdown
  },
  props: {
    mode: {
      type: String
    }
  },
  data () {
    return {
      value: ''
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
