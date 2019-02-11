<template>
  <div
    class="va-slider d-flex align--center"
    :class="sliderClass"
  >
    <span v-if="label && !invertLabel" class="va-slider__label title">
      {{ label }}
    </span>
    <span v-if="icon" class="va-slider__label title">
      <va-icon :icon="icon" :color="color" :size="16"/>
    </span>
    <div class="va-slider__container d-flex align--center">
      <div
        class="va-slider-track"
        :style="{ width: max + '%', backgroundColor: color }"/>
      <div
        class="va-slider-track va-slider-track--active"
        :style="{ width: value + '%', backgroundColor: color }"/>
      <div
        class="va-slider-handler"
        :style="{ left: 'calc(' + value + '% - 8px)', backgroundColor: color }">
        <div v-if="valueVisible" class="va-slider-handler__value d-inline-flex title">
          {{ value }}
        </div>
      </div>
    </div>
    <span v-if="iconRight" class="va-slider__invert-label title">
      <va-icon :icon="iconRight" :color="color" :size="16"/>
    </span>
    <span v-if="invertLabel" class="va-slider__invert-label title">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'va-slider',
  props: {
    range: {
      type: Boolean,
    },
    value: {
      type: Number,
    },
    valueVisible: {
      type: Boolean,
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
    },
    color: {
      type: String,
      default: 'success'
    },
    label: {
      type: String,
    },
    invertLabel: {
      type: Boolean,
    },
    disabled: {
      type: Boolean
    },
    pins: {
      type: Boolean
    },
    icon: {
      type: String,
    },
    iconRight: {
      type: String,
    },
  },
  data () {
    return {

    }
  },
  computed: {
    sliderClass () {
      return {
        'va-slider--success': this.color === 'success',
        'va-slider--info': this.color === 'info',
        'va-slider--danger': this.color === 'danger',
        'va-slider--warning': this.color === 'warning',
        'va-slider--disabled': this.disabled
      }
    },
  },

  methods: {
    change (value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang='scss'>
  $slider-colors: (
    success: (#40e583, #d6ffd3),
    danger: (#e34b4a, #ffebeb),
    info: (#2c82e0, #caeeff),
    warning: (#ffc200, #fff3d1)
  );

  @each $name, $colors in $slider-colors {
    $active-track: nth($colors, 1);
    $track: nth($colors, 2);

    .va-slider--#{$name} {

      .va-slider-track--active {
        background: $active-track !important;
      }

      .va-slider-track {
        background: $track;
      }

      .va-slider-handler {
        border: 0.25rem solid $active-track;
      }
    }
  }

  .va-slider {

    &.va-slider--disabled {
      @include va-disabled;
    }

    &__label {
      margin-right: 1rem;
    }

    &__invert-label {
      margin-left: 1rem;
    }

    &__container {
      position: relative;
      width: 100%;
      height: 0.5rem;

      .va-slider-track {
        position: absolute;
        width: 100%;
        height: 0.5rem;
        border-radius: 0.25rem;
      }

      .va-slider-track--active {
        position: absolute;
        width: 100%;
        height: 0.5rem;
        border-radius: 0.25rem;
      }

      .va-slider-handler {
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: $white;
        border-radius: 50%;

        &__value {
          position: absolute;
          bottom: 0.75rem;

        }
      }
    }
  }
</style>
