<template>
  <div
    class="va-circle-progress-bar"
    :class="{
      'va-circle-progress-bar--indeterminate': indeterminate,
    }"
  >
    <svg
      class="va-circle-progress-bar__progress-bar"
      viewBox="21.25 21.25 42.5 42.5"
    >
      <circle
        class="va-circle-progress-bar__overlay"
        cx="42.5"
        cy="42.5"
        :r="radius"
        fill="none"
        :stroke="color"
        stroke-width="2.5"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="dashoffset"
      />
    </svg>
    <div :style="{color: color}" class="va-circle-progress-bar__info">
      <slot/>
    </div>
  </div>
</template>

<script>
import { progressBarMixin } from './progressBarMixin'

export default {
  name: 'va-circle-progress-bar',
  mixins: [progressBarMixin],
  computed: {
    radius () {
      return 20
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
.va-circle-progress-bar {
  position: relative;
  width: $progress-bar-circle-diameter;
  height: $progress-bar-circle-diameter;

  &__progress-bar {
    transform: rotate(-90deg);
    @at-root {
      .va-circle-progress-bar--indeterminate & {
        animation: va-circle-progress-bar__progress-bar--indeterminate 2s linear infinite;
      }
    }
  }

  &__overlay {
    transition: all ease 2s;
    @at-root {
      .va-circle-progress-bar--indeterminate & {
        animation: va-circle-progress-bar__overlay--indeterminate 2s ease-in-out infinite;
      }
    }
  }

  &__info {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: $progress-bar-value-font-size;
  }
}

@keyframes va-circle-progress-bar__progress-bar--indeterminate {
  100% {
    transform: rotate(270deg);
  }
}

@keyframes va-circle-progress-bar__overlay--indeterminate {
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
