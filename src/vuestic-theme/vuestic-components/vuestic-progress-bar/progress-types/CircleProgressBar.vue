<template>
  <div class="circle-bar circle-bar__progress-bar" :class="circleBarType" :style="'background-image: ' + backgroundImage">
    <div class="circle-bar__overlay" :style="circleBarStyle">
      <span v-if="!text">{{value + '%'}}</span>
      <span v-else>{{text}}</span>
    </div>
  </div>
</template>

<script>
  import { VuesticTheme, colorConfig } from './../../vuestic-color-picker/VuesticTheme'

  export default {
    props: {
      value: {
        type: Number,
        default: 0,
      },
      text: {
        type: String,
        default: ''
      },
      theme: {
        type: String,
        default: 'Primary',
      },
      backgroundTheme: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      animated: {
        type: Boolean,
        default: false,
      }
    },
    mounted () {
      this.animateValue()
    },
    methods: {
      animateValue () {
        let valueMsecs = this.valueAnimationInterval / 100
        let delta = Math.sign(this.value - this.transformedValue)
        let valueInterval = setInterval(() => {
          if (this.transformedValue === this.value) {
            clearInterval(valueInterval)
          } else {
            this.transformedValue += delta
          }
        }, valueMsecs)
      }
    },
    computed: {
      backgroundImage () {
        let result = {}
        const theme = colorConfig[VuesticTheme[this.theme]]
        const backgroundTheme = colorConfig[VuesticTheme[this.backgroundTheme]]
        if (this.value < 50) {
          let nextDeg = 90 + (3.6 * this.value) + 'deg'
          result = `linear-gradient(90deg, ${backgroundTheme} 50%, transparent 50%, transparent), linear-gradient(${nextDeg}, ${theme} 50%, ${backgroundTheme} 50%, ${backgroundTheme})`
        } else {
          let nextDeg = -90 + (3.6 * (this.value - 50)) + 'deg'
          result = `linear-gradient(${nextDeg}, ${theme} 50%, transparent 50%, transparent), linear-gradient(270deg, ${theme} 50%, ${backgroundTheme} 50%, ${backgroundTheme})`
        }
        return result
      },
      circleBarStyle: function () {
        return {
          backgroundColor: colorConfig[VuesticTheme[this.backgroundTheme]],
          color: colorConfig[VuesticTheme[this.theme]]
        }
      },
      circleBarType: function () {
        return {
          'circle-bar--disabled': this.disabled
        }
      }
    }
  }
</script>

<style lang="scss">
  .circle-bar {
    $step: 1;
    $loops: round(100 / $step);
    $increment: 360 / $loops;
    $half: round($loops / 2);

    font-size: $progress-bar-value-font-size;
    font-weight: $font-weight-bold;

    &--animated {
      transition: background-color ease .5s, width 3s linear !important;
    }

    &.circle-bar__progress-bar {
      float: left;
      position: relative;
      transition: background-color ease .5s, width 3s linear !important;
      width: $progress-bar-circle-diameter;
      height: $progress-bar-circle-diameter;
      padding-left: $progress-bar-circle-bw;
      padding-top: $progress-bar-circle-bw;
      border-radius: 50%;
      border-width: 0;
    }

    .circle-bar__overlay {
      width: $progress-bar-circle-overlay-diameter;
      height: $progress-bar-circle-diameter - 2*$progress-bar-circle-bw;
      border-radius: 50%;
      border-width: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & &--disabled {
      opacity: 0.5
    }
  }
</style>
