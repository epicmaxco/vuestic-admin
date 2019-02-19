<template>
  <VbDemo>
    <VbContainer width="500px">
      <va-slider
        pins
        label="Label"
        :step="20"
        value-visible
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px">
      <va-slider
        range
        pins
        label="Label2"
        :step="10"
        value-visible
        v-model="value2"
      />
    </VbContainer>
    <!--<VbContainer width="500px">
      <va-slider
        disabled
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px">
      <va-slider
        pins
        :step="10"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px">
      <va-slider
        label="Label"
        :invert-label="true"
        :value-visible="true"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px">
      <va-slider
        icon="fa fa-volume-off"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px">
      <va-slider
        icon-right="fa fa-volume-up"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px">
      <va-slider
        icon="fa fa-volume-off"
        icon-right="fa fa-volume-up"
        v-model="value"
      />
    </VbContainer>
    <VbContainer width="500px">
      <va-slider
        color="info"
        v-model="value"
      />
    </VbContainer>-->
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
      value: 70,
      value2: [20, 60]
    }
  },
}
</script>
