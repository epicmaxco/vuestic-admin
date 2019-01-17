<template>
  <div class="horizontal-bar">
    <div v-if="size !== 'thick'" class="horizontal-bar__value">
      <span v-if="!text">{{value + '%'}}</span>
      <span v-else>{{text}}</span>
    </div>
    <div class="progress" :class="horizontalBarType">
      <div
        class="progress-bar horizontal-bar__progress-bar"
        :class="horizontalBarAnimation"
        :style="horizontalBarStyle"
      >
        <span v-if="size === 'thick'" :class="{hidden: value == 0}"
              class="horizontal-bar__value">
          <span v-if="!text">{{value + '%'}}</span>
          <span v-else>{{text}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  colorConfig,
  VuesticTheme,
} from './../../vuestic-color-picker/VuesticTheme'

export default {
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
    size: {
      type: String,
      default: 'basic',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    horizontalBarStyle: function () {
      return {
        backgroundColor: colorConfig[VuesticTheme[this.theme]],
        width: this.value + '%',
      }
    },
    horizontalBarType: function () {
      return {
        'horizontal-bar--thick': this.size === 'thick',
        'horizontal-bar--thin': this.size === 'thin',
        'horizontal-bar--basic': this.size === 'basic',
        'horizontal-bar--disabled': this.disabled,
      }
    },
    horizontalBarAnimation: function () {
      return {
        'horizontal-bar--animated': this.animated,
      }
    },
  },
}
</script>

<style lang="scss">
.horizontal-bar {
  display: inline-block;
  width: 100%;
  font-size: $progress-bar-value-font-size;
  font-weight: $font-weight-bold;

  &--animated {
    transition: background-color ease .5s, width 3s linear !important;
  }

  .horizontal-bar__value {
    text-align: center;

    &.hidden {
      visibility: hidden;
    }
  }

  &--basic {
    border-radius: $progress-bar-width-basic;
    height: $progress-bar-width-basic;

    .horizontal-bar__progress-bar {
      border-radius: inherit;
    }
  }

  &--thin {
    height: $progress-bar-width-thin;
    margin-top: .125rem;
  }

  &--thick {
    border-radius: $progress-bar-width-thick;
    height: $progress-bar-width-thick;
    margin-top: calc(#{$progress-bar-width-thick} / 2 - .125rem);

    .horizontal-bar__progress-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: inherit;
    }
  }

  &--disabled {
    opacity: 0.5
  }

}

</style>
