<template>
  <div class="vuestic-pallet-custom">
    <vuestic-simple-palette-picker :palette="palette" v-model="valueProxy" class="vuestic-pallet-custom__palette"/>
    <vuestic-color-picker-input mode="advanced" v-model="valueProxy" class="vuestic-pallet-custom__vuestic-color-picker-input">
      <vuestic-color-input :selected="dotSelected" v-model="valueProxy"/>
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
    VuesticSimplePalettePicker
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    palette: {
      type: Array
    }
  },
  computed: {
    valueProxy: {
      get () {
        if (!this.palette.includes(this.value)) {
          this.dotSelected = true
        }
        return this.value
      },
      set (value) {
        if (this.palette.includes(value)) {
          this.dotSelected = false
        } else {
          this.dotSelected = true
        }
        this.$emit('input', value)
      },
    },
  },
  data () {
    return {
      dotSelected: false
    }
  }
}
</script>

<style lang="scss">
.vuestic-pallet-custom {
  display: flex;

  &__palette {
    padding-top: 7px;
    padding-right: 50px;
  }

  &__vuestic-color-picker-input {
    float: right;
  }
}
</style>
