<template>
  <VbDemo>
    <VbCard width="500px" title="Simple Slider">
      <va-slider
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
        label="Label"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Inverse Label">
      <va-slider
        label="Label"
        inverse-label
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Left Icon">
      <va-slider
        icon="fa fa-volume-off"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Right Icon">
      <va-slider
        icon-right="fa fa-volume-up"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Both Icons">
      <va-slider
        icon="fa fa-volume-off"
        icon-right="fa fa-volume-up"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Disabled Slider">
      <va-slider
        disabled
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Pins">
      <va-slider
        pins
        :step="10"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Colored slider">
      <va-slider
        color="#f333f2"
        v-model="value"
      />
    </VbCard>
    <VbCard width="500px" title="Range">
      <va-slider
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
    <VbCard width="500px" title="Range With Label">
      <va-slider
        range
        label="Label"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Inverse Label">
      <va-slider
        range
        label="Label"
        inverse-label
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Left Icon">
      <va-slider
        range
        icon="fa fa-volume-off"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Right Icon">
      <va-slider
        range
        icon-right="fa fa-volume-up"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Both Icons">
      <va-slider
        range
        icon="fa fa-volume-off"
        icon-right="fa fa-volume-up"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Disabled Range">
      <va-slider
        range
        disabled
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Range With Pins">
      <va-slider
        range
        pins
        :step="10"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Colorful Range">
      <va-slider
        range
        color="info"
        v-model="value2"
      />
    </VbCard>
    <VbCard width="500px" title="Slider With Input">
      <va-slider
        v-model="value"
      >
        <va-input v-model="value" slot="beforeInput"/>
      </va-slider>
    </VbCard>
    <VbCard width="500px" title="Range With Inputs (demo for presentation)">
      <va-slider
        range
        v-model="value2"
      >
        <va-input
          v-model.number="value2[0]"
          slot="beforeInput"/>
        <va-input v-model="value2[1]" slot="afterInput"/>
      </va-slider>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaSlider from './VaSlider.vue'
import VaInput from '../va-input/VaInput'

export default {
  components: {
    VaInput,
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
