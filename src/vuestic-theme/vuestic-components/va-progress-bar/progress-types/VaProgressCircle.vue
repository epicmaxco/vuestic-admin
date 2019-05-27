<template>
  <div
    class="va-progress-circle"
    :class="{
      'va-progress-circle--indeterminate': indeterminate,
    }"
  >
    <svg
      class="va-progress-circle__progress-bar"
      viewBox="21.25 21.25 42.5 42.5"
    >
      <circle
        class="va-progress-circle__overlay"
        cx="42.5"
        cy="42.5"
        :r="radius"
        fill="none"
        :stroke="colorComputed"
        stroke-width="2.5"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="dashoffset"
      />
    </svg>
    <div :style="{ color: colorComputed }" class="va-progress-circle__info">
      <slot/>
    </div>
  </div>
</template>

<script>
import { progressMixin } from './progressMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

export default {
  name: 'va-progress-circle',
  mixins: [progressMixin, ColorThemeMixin],
  computed: {
    radius () {
      return 20
    },
    dasharray () {
      return 2 * Math.PI * this.radius
    },
    dashoffset () {
      return this.dasharray * (1 - this.normalizedValue / 100)
    },
  },
}
</script>

<style lang="scss">
@import "../../../vuestic-sass/resources/resources";

.va-progress-circle {
  position: relative;
  width: $progress-circle-diameter;
  height: $progress-circle-diameter;

  &__progress-bar {
    transform: rotate(-90deg);
    @at-root {
      .va-progress-circle--indeterminate & {
        animation: va-progress-circle__progress-bar--indeterminate 2s linear infinite;
      }
    }
  }

  &__overlay {
    transition: all ease 2s;
    @at-root {
      .va-progress-circle--indeterminate & {
        animation: va-progress-circle__overlay--indeterminate 2s ease-in-out infinite;
      }
    }
  }

  &__info {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: $progress-value-font-size;
  }
}

@keyframes va-progress-circle__progress-bar--indeterminate {
  100% {
    transform: rotate(270deg);
  }
}

@keyframes va-progress-circle__overlay--indeterminate {
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
