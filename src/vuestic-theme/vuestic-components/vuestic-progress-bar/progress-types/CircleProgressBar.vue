<template>
  <div
    class="circle-bar circle-bar__progress-bar"
    :style="'background-image: ' + backgroundImage"
  >
    <div class="circle-bar__overlay" :style="circleBarStyle">
      {{ text ? text : value + '%'}}
    </div>
  </div>
</template>

<script>
import {
  colorConfig,
  VuesticTheme,
} from './../../vuestic-color-picker/VuesticTheme'

export default {
  data () {
    return {
      animatedValue: 0,
      animateValueInterval: null,
    }
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'Primary',
    },
    // TODO Questionable. Ideally we should have transparent background.
    backgroundTheme: {
      type: String,
      default: 'White',
    },
    startAnimated: {
      type: Boolean,
      default: false,
    },
    // Time it would take for animation to go from 0 to 100.
    animationInterval: {
      type: Number,
      default: 2000,
    },
  },
  created () {
    if (!this.startAnimated) {
      this.setAnimatedValue(Math.round(this.value))
    }
  },
  watch: {
    value: {
      immediate: true,
      handler () {
        // Only one such interval is meant to be on.
        if (this.animateValueInterval) {
          return
        }
        // We're updating `animatedValue` to follow `value` change.
        // `animatedValue` is used to display actual bar.
        this.animateValueInterval = setInterval(() => {
          if (this.value === this.animatedValue) {
            clearInterval(this.animateValueInterval)
            this.animateValueInterval = null
            return
          }
          const deltaValue = this.value < this.animatedValue ? -1 : 1
          this.setAnimatedValue(this.animatedValue + deltaValue)
        }, this.animationInterval / 100)
      },
    },
  },
  beforeDestroy () {
    if (this.animateValueInterval) {
      clearInterval(this.animateValueInterval)
      this.animateValueInterval = null
    }
  },
  methods: {
    setAnimatedValue (value) {
      if (value < 0) {
        this.animatedValue = 0
        return
      }
      if (value > 100) {
        this.animatedValue = 100
        return
      }
      this.animatedValue = value
    },
  },
  computed: {
    backgroundImage () {
      const theme = colorConfig[VuesticTheme[this.theme]]
      const value = this.animatedValue
      const backgroundTheme = colorConfig[VuesticTheme[this.backgroundTheme]]

      if (value < 50) {
        const nextDeg = 90 + (3.6 * value) + 'deg'
        return `linear-gradient(90deg, ${backgroundTheme} 50%, transparent 50%, transparent), ` +
          `linear-gradient(${nextDeg}, ${theme} 50%, ${backgroundTheme} 50%, ${backgroundTheme})`
      } else {
        const nextDeg = -90 + (3.6 * (value - 50)) + 'deg'
        return `linear-gradient(${nextDeg}, ${theme} 50%, transparent 50%, transparent), ` +
          `linear-gradient(270deg, ${theme} 50%, ${backgroundTheme} 50%, ${backgroundTheme})`
      }
    },
    circleBarStyle () {
      return {
        backgroundColor: colorConfig[VuesticTheme[this.backgroundTheme]],
        color: colorConfig[VuesticTheme[this.theme]],
      }
    },
  },
}
</script>

<style lang="scss">
.circle-bar {
  $step: 1;
  $loops: 100 / $step;
  $increment: 360 / $loops;
  $half: round($loops / 2);

  font-size: $progress-bar-value-font-size;
  font-weight: $font-weight-bold;

  &--animated {
    transition: background-color ease .5s, width 3s linear !important;
  }

  &.circle-bar__progress-bar {
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
    @include va-flex-center();
    text-align: center;
  }

  & &--disabled {
    opacity: 0.5
  }
}
</style>
