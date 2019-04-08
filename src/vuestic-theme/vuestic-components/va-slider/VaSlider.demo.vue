<template>
  <VbDemo>
    <VbCard width="500px" title="Simple Slider">
      <va-slider
        value-visible
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Visible Value">
      <va-slider
        value-visible
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Overwritten Value">
      <va-slider
        value-visible
        v-model="value3"
        :label-value="`${value3}px`"
        :step="5"
        :min="min"
        :max="max"
      />
      <input v-model.number="min"/>
      <input v-model.number="max"/>
    </VbCard>
    <VbCard width="500px" title="Slider With Label">
      <va-slider
        value-visible
        label="Label"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Inverse Label">
      <va-slider
        value-visible
        label="Label"
        inverse-label
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Left Icon">
      <va-slider
        value-visible
        icon="fa fa-volume-off"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Right Icon">
      <va-slider
        value-visible
        icon-right="fa fa-volume-up"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Both Icons">
      <va-slider
        value-visible
        icon="fa fa-volume-off"
        icon-right="fa fa-volume-up"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Disabled Slider">
      <va-slider
        value-visible
        disabled
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Pins">
      <va-slider
        value-visible
        pins
        :step="10"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Colorful Slider">
      <va-slider
        value-visible
        color="info"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Input">
      <va-slider
        value-visible
        v-model="value"
        with-input
      />
    </VbCard>
    <VbCard width="500px" title="Range">
      <va-slider
        value-visible
        range
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Visible Value">
      <va-slider
        range
        value-visible
        v-model="value2"
      />
      {{ '[' + value2[0] + ',' + value2[1] + ']'}}
    </VbCard>
    <VbCard width="500px" title="Range With Visible Value">
      <va-slider
        range
        value-visible
        v-model="value4"
        :min="1000"
        :max="2000"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Label">
      <va-slider
        value-visible
        range
        label="Label"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Inverse Label">
      <va-slider
        value-visible
        range
        label="Label"
        inverse-label
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Left Icon">
      <va-slider
        value-visible
        range
        icon="fa fa-volume-off"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Right Icon">
      <va-slider
        value-visible
        range
        icon-right="fa fa-volume-up"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Both Icons">
      <va-slider
        value-visible
        range
        icon="fa fa-volume-off"
        icon-right="fa fa-volume-up"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Disabled Range">
      <va-slider
        value-visible
        range
        disabled
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Pins">
      <va-slider
        value-visible
        range
        pins
        :step="10"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Colorful Range">
      <va-slider
        value-visible
        range
        color="info"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Inputs">
      <va-slider
        value-visible
        range
        v-model="value2"
        with-input
      />
    </VbCard>
  </VbDemo>
</template>

<script>
import VaSlider from './VaSlider.vue'

export default {
  components: {
    VaSlider,
  },
  data () {
    return {
      value: 90,
      value2: [20, 60],
      value3: 1500,
      value4: [1100, 1320],
      min: 1000,
      max: 2000,
    }
  },
}
</script>
