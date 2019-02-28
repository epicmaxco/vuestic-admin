<template>
  <VbDemo>
    <VbContainer width="500px" title="Simple Slider">
      <va-slider
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Visible Value">
      <va-slider
        value-visible
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Overwrited Value">
      <va-slider
        value-visible
        v-model="value3"
        :label-value="`${value3}px`"
        :step="5"
        :min="1000"
        :max="2000"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Label">
      <va-slider
        label="Label"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Inverse Label">
      <va-slider
        label="Label"
        :invert-label="true"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Left Icon">
      <va-slider
        icon="fa fa-volume-off"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Right Icon">
      <va-slider
        icon-right="fa fa-volume-up"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Both Icons">
      <va-slider
        icon="fa fa-volume-off"
        icon-right="fa fa-volume-up"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Disabled Slider">
      <va-slider
        disabled
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Pins">
      <va-slider
        pins
        :step="10"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Colorful Slider">
      <va-slider
        color="info"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px" title="Slider With Input">
      <div class="va-row d-flex align--center">
        <div class="flex xs10 lg10">
          <va-slider
            v-model="value"
          />
        </div>
        <div class="flex xs1 lg1 offset--xs1 offset--lg1">
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" v-model="value" required/>
              <label class="control-label" for="simple-input">
                Value
              </label>
              <va-icon icon="bar"/>
            </div>
          </div>
        </div>
      </div>
    </VbContainer>
    <VbContainer width="500px" title="Range">
      <va-slider
        range
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Visible Value">
      <va-slider
        range
        value-visible
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Visible Value">
      <va-slider
        range
        value-visible
        v-model="value4"
        :min="1000"
        :max="2000"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Label">
      <va-slider
        range
        label="Label"
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Inverse Label">
      <va-slider
        range
        label="Label"
        :invert-label="true"
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Left Icon">
      <va-slider
        range
        icon="fa fa-volume-off"
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Right Icon">
      <va-slider
        range
        icon-right="fa fa-volume-up"
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Both Icons">
      <va-slider
        range
        icon="fa fa-volume-off"
        icon-right="fa fa-volume-up"
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Disabled Range">
      <va-slider
        range
        disabled
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Pins">
      <va-slider
        range
        pins
        :step="10"
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Colorful Range">
      <va-slider
        range
        color="info"
        v-model="value2"
      />
    </VbContainer>
    <VbContainer width="500px" title="Range With Inputs">
      <div class="va-row d-flex align--center">
        <div class="flex xs1 lg1">
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input2" v-model.number="value5[0]" required/>
              <label class="control-label" for="simple-input2">
                Min
              </label>
              <va-icon icon="bar"/>
            </div>
          </div>
        </div>
        <div class="flex xs8 lg8 offset--xs1 offset--lg1">
          <va-slider
            range
            v-model="value5"
          />
        </div>
        <div class="flex xs1 lg1 offset--xs1 offset--lg1">
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input3" v-model.number="value5[1]" required/>
              <label class="control-label" for="simple-input3">
                Max
              </label>
              <va-icon icon="bar"/>
            </div>
          </div>
        </div>
      </div>
    </VbContainer>
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
      value5: [10, 70],
    }
  },
}
</script>
