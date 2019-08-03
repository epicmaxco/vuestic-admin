<template>
  <div
    class="va-card"
    :style="computedCardStyle"
  >
    <div
      v-if="stripe"
      class="va-card__stripe"
      :style="computedStripeStyle"
    ></div>
    <div v-if="image" class="va-card__image">
      <img :src="image" :alt="imageAlt">
      <div class="va-card__image-overlay" v-if="overlay"></div>
    </div>

    <div
      v-if="showHeader"
      class="va-card__header"
      :class="{'va-card__header--over': image && titleOnImage}"
    >
      <div class="va-card__header-inner">
        <slot name="header">
          <div
            class="va-card__header-title"
            :style="{color: this.$themes.info}"
          >
            {{ title }}
          </div>
          <div class="va-card__header-actions">
            <slot name="actions"/>
          </div>
        </slot>
      </div>
    </div>

    <div
      v-if="$slots.default"
      class="va-card__body"
      :class="computedCardBodyClass"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
import { getGradientBackground } from '../../../services/color-functions'

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
    noPaddingV: {
      type: Boolean,
      default: false,
    },
    noPaddingH: {
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
      default: '',
    },
  },
  computed: {
    showHeader () {
      return this.title || this.$slots.header || this.$slots.actions
    },
    computedCardBodyClass () {
      return {
        'va-card__body--no-padding-v': this.noPaddingV,
        'va-card__body--no-padding-h': this.noPaddingH,
        'va-card__body--no-padding': this.noPadding,
        'va-card__body--padding-top':
          (!this.showHeader && !this.noPaddingV && !this.noPadding) ||
          this.titleOnImage,
      }
    },
    computedStripeStyle () {
      return {
        background: this.$themes && this.$themes[this.stripe] ? this.$themes[this.stripe] : this.stripe,
      }
    },
    computedCardStyle () {
      if (this.color) {
        return {
          color: '#fff',
          background: getGradientBackground(this.$themes[this.color]),
        }
      }
    },
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

  &__header {
    &-inner {
      display: flex;
      padding: 0.5rem $card-padding;
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
      padding-top: 56%; // here
      width: 100%;
      top: 0;
      left: 0;

      @include media-breakpoint-up(md) {
        padding-top: 0;
      }

      &:last-child {
        height: 100%;
      }

      & > div {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
  }

  &__body {
    padding: 0 $card-padding $card-padding;
    flex: 1 1 auto;
    overflow-x: auto;

    &--no-padding-v {
      padding: 0 $card-padding;
    }

    &--no-padding-h {
      padding: $card-padding 0;
    }

    &--no-padding {
      padding: 0;
    }

    &--padding-top {
      padding-top: $card-padding;
    }
  }

  &__image {
     padding-bottom: 56%; // here
     position: relative;
     height: auto;
     min-height: 100%;

    @include media-breakpoint-up(md) {
      padding-bottom: 0;
    }

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
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, .3);
      pointer-events: none;
    }
  }

  &__stripe {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    z-index: 1;
  }
}
</style>
