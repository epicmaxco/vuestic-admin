<template>
  <div
    class="vuestic-card card"
    :class="computedClass"
  >
    <template v-if="image">
      <img v-if="!titleOnImage" class="card-img-top" :src="image"
           :alt="imageAlt">
      <div class="vuestic-card__image-container" v-if="titleOnImage">
        <img class="card-img-top" :src="image" :alt="imageAlt">
        <div class="vuestic-card__image-container__overlay" v-if="overlay"/>
        <h5 class="vuestic-card__title card-title">
          <slot name="title"/>
        </h5>
      </div>
    </template>
    <div class="card-body">
      <h5 class="vuestic-card__title card-title"
          v-if="$slots.title && !(image && titleOnImage)">
        <slot name="title"/>
      </h5>
      <p class="card-text">
        <slot/>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-card',
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
        computedClass.push(`vuestic-card--stripe-${this.stripe}`)
      }
      if (this.theme === 'bright') {
        computedClass.push(`vuestic-card--theme-bright`)
      }
      if (this.theme === 'dark') {
        computedClass.push(`vuestic-card--theme-dark`)
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

.vuestic-card {
  border-radius: 0;
  border: none;
  box-sizing: border-box;
  box-shadow: $widget-box-shadow;
  word-wrap: break-word;

  &__title {
    font-weight: $font-weight-bold;
    font-size: $card-font-size;
  }

  .card-img-top {
    border-radius: 0;
  }

  &__image-container {
    position: relative;
    .vuestic-card__title {
      position: absolute;
      bottom: 0px;
      color: $white;
      padding: 1rem;
      margin-bottom: 0;
    }
    &__overlay {
      position: absolute;
      pointer-events: none;
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
