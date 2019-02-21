<template>
  <div class="vuestic-pallet-custom">
    <vuestic-simple-palette-picker :palette="palette" v-model="valueProxy"
                                   class="vuestic-pallet-custom__palette mr-2"/>
    <vuestic-color-picker-input mode="advanced" v-model="valueProxy"
                                class="vuestic-pallet-custom__input">
      <vuestic-color-input :selected="dotisSelected" v-model="valueProxy"/>
    </vuestic-color-picker-input>
  </div>
</template>

<script>

import VuesticColorPickerInput from './VuesticColorPickerInput'
import VuesticSimplePalettePicker from './VuesticSimplePalettePicker'
import VuesticColorInput from './VuesticColorInput'

export default {
  name: 'vuestic-pallet-custom',
  components: {
    VuesticColorInput,
    VuesticColorPickerInput,
    VuesticSimplePalettePicker,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    palette: {
      type: Array,
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
    dotisSelected () {
      if (this.value !== '') {
        if (this.palette.includes(this.value)) {
          return false
        } else {
          return true
        }
      }
    },
  },
}
</script>

<style lang="scss">
.vuestic-pallet-custom {
  display: flex;

  &__input {
    float: right;
  }
}
</style>
