<template>
  <div>
    <!-- <span>{{this.sliderVal}}</span> -->
    <!-- <span class="float-left">{{this.min}}</span>
    <span class="float-right">{{this.max}}</span> -->
    <input 
      class="range-slider" 
      :class="{'at-slider--disabled': disabled}" 
      v-model="inputValue" 
      type="range" 
      :step="step" 
      :min="min" 
      :max="max" 
      :disabled="disabled" 
      @change="changeFoo"> 
  </div>
</template>

<script>
  export default {
    name: 'vuestic-range-slider',
    data: function () {
      return {
        inputValue: null
      }
    },
    props: {
      value: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      }
    },
    methods: {
      changeFoo () {
        // console.log(this.inputValue)
      }
    },
    watch: {
      inputValue (val) {
        this.$emit('input', Number(val))
      }
    },
    created () {
      this.inputValue = this.inputValue || this.value
    }
  }
</script>

<style lang="scss" scoped>
  .range-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    background: #eee;
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
    &.at-slider--disabled{
      opacity: .3;
    }
  }
  .range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4ae387;
    cursor: pointer;
    -webkit-box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
    box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
    border: none;
  }
  .range-slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4ae387;
    cursor: pointer;
    -webkit-box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
    box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
    border: none;
  }
</style>
