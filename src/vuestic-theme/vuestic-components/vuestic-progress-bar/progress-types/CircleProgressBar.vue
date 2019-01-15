<template>
  <div class="va-circle-bar">
    <svg
      :class="{'va-circle-bar__progress-bar--indeterminate': indeterminate}"
      class="va-circle-bar__progress-bar"
      viewBox="21.25 21.25 42.5 42.5"
    >
      <circle
        :class="{'va-circle-bar__overlay--indeterminate': indeterminate}"
        class="va-circle-bar__overlay"
        cx="42.5"
        cy="42.5"
        :r="radius"
        fill="none"
        :stroke="color"
        stroke-width="2.5"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="dashoffset"
      ></circle>
    </svg>
    <div :style="{color: color}" class="va-circle-bar__info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  colorConfig,
  VuesticTheme
} from './../../vuestic-color-picker/VuesticTheme'

export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'Primary'
    },
    // If 'indeterminate' is 'true' 'value' prop will be ignored.
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    radius () {
      return 20
    },
    normalizedValue () {
      return this.value < 0 ? 0 : this.value > 100 ? 100 : this.value
    },
    color () {
      return colorConfig[VuesticTheme[this.theme]]
    },
    dasharray () {
      return 2 * Math.PI * this.radius
    },
    dashoffset () {
      return this.dasharray * (1 - this.normalizedValue / 100)
    }
  }
}
</script>

<style lang="scss">
.va-circle-bar {
  position: relative;
  width: $progress-bar-circle-diameter;
  height: $progress-bar-circle-diameter;

  .va-circle-bar__progress-bar {
    transform: rotate(-90deg);

    &--indeterminate {
      animation: circle-bar__progress-bar--indeterminate 2s linear infinite;
    }
  }

  .va-circle-bar__overlay {
    transition: all ease 2s;

    &--indeterminate {
      animation: circle-bar__overlay--indeterminate 2s ease-in-out infinite;
    }
  }

  .va-circle-bar__info {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: $progress-bar-value-font-size;
  }
}

@keyframes circle-bar__progress-bar--indeterminate {
  100% {
    transform: rotate(270deg);
  }
}

@keyframes circle-bar__overlay--indeterminate {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 125, 125;
    stroke-dashoffset: -65px;
  }
  100% {
    stroke-dasharray: 125, 125;
    stroke-dashoffset: -125px;
  }
}
</style>
