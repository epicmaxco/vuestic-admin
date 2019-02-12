<template>
  <div
    class="va-card"
    :class="computedClass"
  >
    <template v-if="image">
      <img v-if="!titleOnImage" class="va-card__image" :src="image" :alt="imageAlt">
      <div class="va-card__image-container" v-if="titleOnImage">
        <img class="va-card__image" :src="image" :alt="imageAlt">
        <div class="va-card__image-container__overlay" v-if="overlay"/>
        <h5 class="va-card__title">
          <slot name="title"/>
        </h5>
      </div>
    </template>
    <div class="va-card__body">
      <h5 class="va-card__title" v-if="$slots.title && !(image && titleOnImage)">
        <slot name="title"/>
      </h5>
      <p class="va-card__text">
        <slot/>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-card',
  props: {
    image: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    stripe: {
      type: String,
      default: '',
    },
    titleOnImage: {
      type: Boolean,
      default: false,
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      validator: (val) => ['base', 'bright', 'dark'].includes(val),
      default: 'base',
    },
  },
  computed: {
    computedClass () {
      const computedClass = []
      if (this.stripe) {
        computedClass.push(`va-card--stripe-${this.stripe}`)
      }
      if (this.theme === 'bright') {
        computedClass.push(`va-card--theme-bright`)
      }
      if (this.theme === 'dark') {
        computedClass.push(`va-card--theme-dark`)
      }
      return computedClass
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

$card-font-size: 1.375rem;

.card-separator {
  margin: 1rem -#{(20/16)}rem;
  height: #{(1/16)}rem;
  width: calc(100% + #{(2* 20/16)}rem);
  background-color: $light-gray;
}

.card-link-secondary {
  color: #aaa;
}

.va-card {
  border-radius: $card-border-radius;
  border: none;
  box-sizing: border-box;
  box-shadow: $widget-box-shadow;
  word-wrap: break-word;
  background-color: $white;
  &__title {
    font-weight: $font-weight-bold;
    font-size: $card-font-size;
    margin-bottom: 0.75rem;
  }

  &__body {
    padding: 1.25rem;
    flex: 1 1 auto;
  }

  &__text {
    margin-top: 0;
    margin-bottom: 0;
  }

  &__image {
    border-top-left-radius: $card-border-radius;
    border-top-right-radius: $card-border-radius;
    width: 100%;
  }

  &__image-container {
    position: relative;
    border-radius: $card-border-radius;
    .va-card__title {
      position: absolute;
      bottom: 0px;
      color: $white;
      padding: 1rem;
      margin-bottom: 0;
    }
    &__overlay {
      position: absolute;
      pointer-events: none;
      border-radius: $card-border-radius;
      background-color: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
      top: 0;
    }
  }

  &--theme-bright {
    background-color: $brand-primary;
    color: $white;
    a {
      color: $vue-darkest-blue;
      &:hover {
        color: lighten($vue-darkest-blue, 15);
      }
    }
  }

  &--theme-dark {
    background-color: $darkest-gray;
    color: $white;
  }

  $colors: (
    primary: $brand-primary,
    danger: $brand-danger,
    warning: $brand-warning,
    info: $brand-info,
    success: $brand-success,
  );

  @each $key, $color in $colors {
    &--stripe-#{$key} {
      border-top: $color solid 0.5rem;
    }
  }
}
</style>
