<template>
  <div class="va-palette-custom">
    <va-simple-palette-picker
      class="va-palette-custom__palette mr-2"
      :palette="palette"
      v-model="valueProxy"
    />
    <va-color-picker-input
      class="va-palette-custom__input"
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
  name: 'va-palette-custom',
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
      return this.palette.includes(this.value)
    },
  },
}
</script>

<style lang="scss">
.va-palette-custom {
  display: flex;
  align-items: baseline !important;
}
</style>
