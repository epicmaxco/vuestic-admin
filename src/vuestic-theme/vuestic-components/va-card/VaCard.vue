<template>
  <div
    class="va-card"
    :class="computedCardClass"
    :style="computedCardStyle"
  >
    <div class="va-card__image" v-if="image">
      <img :src="image" :alt="imageAlt">
      <div class="va-card__image-overlay" v-if="overlay"></div>
    </div>

    <div
      class="va-card__header"
      :class="{'va-card__header--over': image && titleOnImage}"
      v-if="showHeader"
    >
      <div class="va-card__header-inner">
        <slot name="header">
          <div class="va-card__header-title">
            {{ title }}
          </div>
          <div class="va-card__header-actions">
            <slot name="actions" />
          </div>
        </slot>
      </div>
    </div>

    <div
      class="va-card__body"
      :class="computedCardBodyClass"
      v-if="$slots.default"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
import { getGradientColor } from '../../../services/colors'

export default {
  name: 'va-card',
  props: {
    stripe: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      validator: (val) => ['base', 'bright', 'dark'].includes(val),
      default: 'base',
    },
    noPaddingV: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '',
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    imageAlt: {
      type: String,
      default: '',
    },
    titleOnImage: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    showHeader () {
      return this.title || this.$slots.header || this.$slots.actions
    },
    computedCardClass () {
      return {
        'va-card--theme-dark': this.theme === 'dark',
        'va-card--theme-bright': this.theme === 'bright',
        [`va-card--stripe-${this.stripe}`]: this.stripe
      }
    },
    computedCardBodyClass () {
      return {
        'va-card__body--no-padding-v': this.noPaddingV,
        'va-card__body--no-padding': this.noPadding,
        'va-card__body--padding-top':
          (!this.showHeader && !this.noPaddingV && !this.noPadding) ||
          this.titleOnImage
      }
    },
    computedCardStyle () {
      if (this.color) {
        return {
          color: '#fff',
          background: 'linear-gradient(to right,' + getGradientColor(this.color)[0] +
          ',' + getGradientColor(this.color)[1] + ')'
        }
      }
    }
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-card {
  border-radius: $card-border-radius;
  border: none;
  box-sizing: border-box;
  box-shadow: $card-box-shadow;
  word-wrap: break-word;
  background-color: $white;
  position: relative;
  overflow: hidden;
  margin-bottom: 2.5rem;

  &__header {
    &-inner {
      display: flex;
      padding: 0.5rem 1.25rem;
      min-height: 3.5rem;
      align-items: center;
    }

    &-title {
      font-weight: $font-weight-bold;
      font-size: $card-title-font-size;
      letter-spacing: $card-title-letter-spacing;
      text-transform: uppercase;
      color: $card-title-color;
    }

    &-actions {
      margin-left: auto;
      flex: 0 0 auto;
    }

    &--over {
      position: absolute;
      padding-top: 56%;
      width: 100%;
      top: 0;
      left: 0;

      & > div {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;

        & * {
          color: $white;
        }
      }
    }
  }

  &__body {
    padding: 0 1.25rem 1.25rem;
    flex: 1 1 auto;

    &--no-padding-v {
      padding: 0 1.25rem;
    }

    &--no-padding {
      padding: 0;
    }

    &--padding-top {
      padding-top: 1.25rem;
    }
  }

  &__image {
    padding-bottom: 56%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: block;
      object-fit: cover;
    }

    &-overlay {
      position: absolute;
      top: 0;
      left:0;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,.3);
      pointer-events: none;
    }
  }

  $colors: (
    primary: $brand-primary,
    danger: $brand-danger,
    warning: $brand-warning,
    info: $brand-info,
    success: $brand-success,
  );

  @each $key, $color in $colors {
    &--stripe-#{$key}:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.5rem;
      background-color: $color;
      z-index: 1;

    }
  }
}
</style>
