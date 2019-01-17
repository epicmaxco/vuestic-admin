<template>
  <div class="va-horizontal-bar">
    <div :style="{color}" class="va-horizontal-bar__info">
      <slot></slot>
    </div>
    <div class="va-horizontal-bar__progress-bar">
      <div
        :style="{width: normalizedBuffer + '%', backgroundColor: color}"
        class="va-horizontal-bar__buffer"
      ></div>
      <div
        v-if="!indeterminate"
        :style="{width: normalizedValue + '%', backgroundColor: color}"
        class="va-horizontal-bar__overlay"
      ></div>
      <template v-else>
        <div
          :style="{backgroundColor: color}"
          class="va-horizontal-bar__overlay--indeterminate-start"
        ></div>
        <div
          :style="{backgroundColor: color}"
          class="va-horizontal-bar__overlay--indeterminate-end"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
import utils from 'services/utils'
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
    // If 'indeterminate' is 'true' 'value' and 'buffer' props will be ignored.
    indeterminate: {
      type: Boolean,
      default: false
    },
    buffer: {
      type: Number,
      default: 100
    }
  },
  computed: {
    color () {
      return colorConfig[VuesticTheme[this.theme]]
    },
    normalizedValue () {
      return utils.normalizeValue(this.value)
    },
    normalizedBuffer () {
      if (this.indeterminate) {
        return 100
      }

      return utils.normalizeValue(this.buffer)
    }
  }
}
</script>

<style lang="scss">
.va-horizontal-bar {
  width: 100%;
  position: relative;
  overflow: hidden;

  .va-horizontal-bar__info {
    font-size: $progress-bar-value-font-size;
    font-weight: $font-weight-bold;
    text-align: center;
    text-transform: uppercase;

    &:not(:empty) {
      margin-bottom: 0.3125rem;
    }
  }

  .va-horizontal-bar__progress-bar {
    height: $progress-bar-width-basic;
    border-radius: $progress-bar-width-basic;
    position: relative;
    overflow: hidden;
  }

  .va-horizontal-bar__buffer {
    position: absolute;
    top: 0;
    left: 0;
    height: inherit;
    border-radius: inherit;
    opacity: 0.3;
    transition: width ease 2s;
  }

  .va-horizontal-bar__overlay {
    height: inherit;
    border-radius: inherit;
    transition: width ease 2s;
  }

  .va-horizontal-bar__overlay--indeterminate-start {
    animation: horizontal-bar__overlay--indeterminate-start 2s ease-in infinite;
    position: absolute;
    height: inherit;
  }

  .va-horizontal-bar__overlay--indeterminate-end {
    animation: horizontal-bar__overlay--indeterminate-end 2s ease-out 1s
      infinite;
    position: absolute;
    height: inherit;
  }
}

@keyframes horizontal-bar__overlay--indeterminate-start {
  0% {
    width: 10%;
    left: -10%;
  }

  50% {
    width: 100%;
    left: 100%;
  }

  100% {
    width: 100%;
    left: 100%;
  }
}

@keyframes horizontal-bar__overlay--indeterminate-end {
  0% {
    width: 100%;
    left: -100%;
  }

  50% {
    width: 10%;
    left: 100%;
  }

  100% {
    width: 10%;
    left: 100%;
  }
}
</style>
