<template>
  <VbDemo>
    <VbCard title="slider mode">
      <va-color-picker-input
        v-model="value"
        mode="slider"
      >
        <va-color-square :value="value"/>
      </va-color-picker-input>
      {{ value }}
    </VbCard>

    <VbCard title="advanced mode">
      <va-color-picker-input
        v-model="value"
        mode="advanced"
      >
        <va-color-input v-model="value"/>
      </va-color-picker-input>
    </VbCard>

    <VbCard title="palette mode">
      <va-color-picker-input
        v-model="value"
        mode="palette"
        :palette="palette"
      />
    </VbCard>

    <VbCard title="palette mode with slot">
      <va-color-picker-input
        v-model="value"
        mode="palette"
        :palette="palette"
      >
        <color-dot :color="value"/>
      </va-color-picker-input>
      {{ value }}
    </VbCard>
  </VbDemo>
</template>

<script>
import VaColorPickerInput from './VaColorPickerInput'
import ColorDot from './ColorDot'
import VaColorSquare from './VaColorSquare'
import VaColorInput from './VaColorInput'
import { colorArray } from './VuesticTheme'

export default {
  components: {
    VaColorPickerInput,
    ColorDot,
    VaColorSquare,
    VaColorInput,
  },
  data () {
    return {
      value: '#9b6caa',
      palette: colorArray,
    }
  },
}
</script>
