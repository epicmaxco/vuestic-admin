<template>
  <div class="vuestic-card card"
       :class="computedClass"
  >
    <template v-if="image">
      <img v-if="!titleOnImage" class="card-img-top" :src="image"
           :alt="imageAlt"
      >
      <div class="vuestic-card__image-container" v-if="titleOnImage">
        <img class="card-img-top" :src="image" :alt="imageAlt">
        <h5 class="vuestic-card__image-container__title card-title">
          <slot name="title"/>
        </h5>
      </div>
    </template>
    <div class="card-body">
      <h5 class="card-title" v-if="!(image && titleOnImage)">
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
        default: ''
      },
      imageAlt: {
        type: String,
        default: '',
      },
      stripe: {
        type: String,
        default: ''
      },
      titleOnImage: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      computedClass () {
        const computedClass = []
        if (this.stripe) {
          computedClass.push(`vuestic-card--stripe-${this.stripe}`)
        }
        return computedClass
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";

  $shadow: $widget-box-shadow;

  .vuestic-card {
    box-shadow: $shadow;

    &__image-container {
      position: relative;
      & &__title {
        position: absolute;
        bottom: 0px;
        color: $white;
        padding: 1rem;
        margin-bottom: 0;
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
      &--stripe-#{$key} {
        border-top: $color solid 0.5rem;
      }
    }
  }
</style>
