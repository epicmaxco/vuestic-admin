<template>
  <div class="range-slider-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('rangeSlider.title')">
          <h6>Basic</h6>
          <p>Basic slider, use v-model to binding value, the range is 0~100 default.</p>
          <vuestic-range-slider v-model="valueA" />
          <hr>
          <h6>Disabled</h6>
          <p>To make a slider as disabled, add disabled property to the Slider.</p>
          <vuestic-range-slider v-model="valueB" disabled />
          <hr>
          <h6>Customize Range</h6>
          <p>The minimum and maximum values are set by min and max properties.</p>
          <vuestic-range-slider v-model="valueC" :min="20" :max="80" />
          <hr>
          <h6>Discrete Value</h6>
          <p>Control the interval of slider through the step property, the value of interval is 1 by default.</p>
          <vuestic-range-slider v-model="valueD" :step="10" />
        </vuestic-widget>
      </div>
    </div>  
  </div>
</template>

<script>
  export default {
    name: 'range-slider',
    data () {
      return {
        valueA: 10,
        valueB: 20,
        valueC: 30,
        valueD: 50
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
