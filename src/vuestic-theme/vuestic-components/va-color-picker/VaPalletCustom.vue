<template>
  <div class="va-pallet-custom">
    <va-simple-palette-picker
      class="va-pallet-custom__palette mr-2"
      :palette="palette"
      v-model="valueProxy"
    />
    <va-color-picker-input
      class="va-pallet-custom__input"
      mode="advanced"
      v-model="valueProxy"
    >
      <va-color-input
        :selected="dotIsSelected"
        v-model="valueProxy"
      />
    </va-color-picker-input>
  </div>
</template>

<script>

import VaColorPickerInput from './VaColorPickerInput'
import VaSimplePalettePicker from './VaSimplePalettePicker'
import VaColorInput from './VaColorInput'

export default {
  name: 'va-pallet-custom',
  components: {
    VaColorInput,
    VaColorPickerInput,
    VaSimplePalettePicker,
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
    dotIsSelected () {
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
.va-pallet-custom {
  display: flex;

  &__input {
    float: right;
  }
}
</style>
