<template>
  <button v-if="computedTag === 'button'"
    class="vuestic-button"
    :class="buttonClass"
    :disabled="disabled"
    :type="type">
    <div class="vuestic-button__content">
      <div v-if="hasIconData" class="vuestic-button__content__icon-left">
        <slot name="icon"></slot>
      </div>
      <div v-if="hasTitleData" class="vuestic-button__content__title">
        <slot/>
      </div>
      <div v-if="hasRightIconData" class="vuestic-button__content__icon-right">
        <slot name="icon-right"></slot>
      </div>
    </div>
  </button>
  <a v-else-if="computedTag === 'a'"
    class="vuestic-button"
    :class="buttonClass"
    :disabled="disabled"
    :href="href"
    :target="target">
    <div class="vuestic-button__content">
      <div v-if="hasIconData" class="vuestic-button__content__icon-left">
        <slot name="icon"></slot>
      </div>
      <div class="vuestic-button__content__title">
        <slot/>
      </div>
      <div v-if="hasRightIconData" class="vuestic-button__content__icon-right">
        <slot name="icon-right"></slot>
      </div>
    </div>
  </a>
  <router-link v-else-if="computedTag === 'router-link'"
    class="vuestic-button"
    :class="buttonClass"
    :disabled="disabled"
    :to="to"
    :replace="replace"
    :append="append"
    :active-class="activeClass"
    :exact="exact"
    :exact-active-class="exactActiveClass">
    <div class="vuestic-button__content">
      <div v-if="hasIconData" class="vuestic-button__content__icon-left">
        <slot name="icon"></slot>
      </div>
      <div class="vuestic-button__content__title">
        <slot/>
      </div>
      <div v-if="hasRightIconData" class="vuestic-button__content__icon-right">
        <slot name="icon-right"></slot>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'vuestic-button',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    outline: {
      type: Boolean
    },
    flat: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'success'
    },
    small: {
      type: Boolean
    },
    large: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean
    },
    /* Link props */
    href: {
      type: [String, Object]
    },
    target: {
      type: String,
    },
    /* Router link props */
    to: {
      type: [String, Object]
    },
    replace: {
      type: Boolean
    },
    append: {
      type: Boolean
    },
    activeClass: {
      type: String
    },
    exact: {
      type: Boolean
    },
    exactActiveClass: {
      type: String
    }
  },
  computed: {
    buttonClass () {
      return {
        'vuestic-button--success': this.color === 'success',
        'vuestic-button--info': this.color === 'info',
        'vuestic-button--danger': this.color === 'danger',
        'vuestic-button--warning': this.color === 'warning',
        'vuestic-button--gray': this.color === 'gray',
        'vuestic-button--dark': this.color === 'dark',
        'vuestic-button--default': !this.flat && !this.outline,
        'vuestic-button--flat': this.flat,
        'vuestic-button--outline': this.outline,
        'vuestic-button--without-title': !this.hasTitleData,
        'vuestic-button--with-left-icon': this.hasIconData,
        'vuestic-button--with-right-icon': this.hasRightIconData,
        'vuestic-button--disabled': this.disabled,
        'vuestic-button--large': this.large,
        'vuestic-button--small': this.small,
        'vuestic-button--normal': !this.large && !this.small
      }
    },
    hasTitleData () {
      return this.$slots.default
    },
    hasIconData () {
      return this.$slots.icon
    },
    hasRightIconData () {
      return this.$slots['icon-right']
    },
    computedTag () {
      if (this.tag === 'a' || this.href || this.target) {
        return 'a'
      }
      if (this.tag === 'router-link' || this.to || this.append || this.replace ||
        this.activeClass || this.exact || this.exactActiveClass) {
        return 'router-link'
      }
      return 'button'
    }
  }
}
</script>

<style lang='scss'>
  @mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {
    padding: $padding-y $padding-x;
    font-size: $font-size;
    line-height: $line-height;
    border-radius: $border-radius;
  }

  .vuestic-button {
    display: inline-block;
    margin: 6px 8px;
    background-image: none;
    box-shadow: none;
    outline: none !important;
    border: 0;
    font-family: $font-family-sans-serif;
    text-transform: initial;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;

    &__content {
      display: flex;

      &__title, &__icon-left, &__icon-right{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }
    }

    &--large {
      @include button-size(12px, 32px, 20px, 1.3, 32px);
      letter-spacing: 0.7px;
      color: white;

      .vuestic-button__content__icon-left, .vuestic-button__content__icon-right {
        width: 32px;
        height: 32px;
      }

      &.vuestic-button--with-left-icon {
        padding-left: 24px;

        &.vuestic-button--without-title {
          padding-right: 24px;
        }

        .vuestic-button__content__title {
          padding-left: 8px;
        }
      }

      &.vuestic-button--with-right-icon {
        padding-right: 16px;

        .vuestic-button__content__title {
          padding-right: 8px;
        }
      }
    }

    &--small {
      @include button-size(2px, 16px, 14px, 1.43, 16px);
      letter-spacing: 0.5px;
      color: white;

      .vuestic-button__content__icon-left, .vuestic-button__content__icon-right {
        width: 16px;
        height: 16px;
      }

      &.vuestic-button--with-left-icon {
        padding-left: 8px;

        &.vuestic-button--without-title {
          padding-right: 8px;
        }

        .vuestic-button__content__title {
          padding-left: 4px;
        }
      }

      &.vuestic-button--with-right-icon {
        padding-right: 4px;

        .vuestic-button__content__title {
          padding-right: 2px;
        }
      }
    }

    &--normal {
      @include button-size(7px, 24px, 16px, 1.5, 24px);
      letter-spacing: 0.55px;
      color: white;

      &.vuestic-button--with-left-icon {
        padding-left: 16px;

        &.vuestic-button--without-title {
          padding-right: 16px;
        }

        .vuestic-button__content__title {
          padding-left: 8px;
        }
      }

      &.vuestic-button--with-right-icon {
        padding-right: 8px;

        .vuestic-button__content__title {
          padding-right: 4px;
        }
      }

      .vuestic-button__content__icon-left, .vuestic-button__content__icon-right {
        width: 24px;
        height: 24px;
      }
    }
  }

  $vuestic-colors: (
    success: (#63e5b3, #23e066, #77cea4, #40e583, #d6ffd3, #c0fbc7),
    danger: (#ff7455, #e34b4a, #b86e6d, #e34b4a, #ffebeb, #fbd2d2),
    warning: (#ffd72d, #feb900, #cbb06e, #ffc202, #fff3d1, #ffebb1),
    info: (#32b5e4, #2c82e0, #6c97ac, #2c82e0, #caeeff, #b2defb),
    gray: (#cdd0d5, #b4b6b9, #a3aab0, #babfc2, #e6e9ec, #dfe3e5),
    dark: (#576675, #34495e, #aebcca, #34495e, #afb6bb, #afb6bb)
  );

  @each $name, $colors in $vuestic-colors {
    $gradient-color1: nth($colors, 1);
    $gradient-color2: nth($colors, 2);
    $box-shadow: nth($colors, 3);
    $border-color: nth($colors, 4);
    $hover-color: nth($colors, 5);
    $focus-color: nth($colors, 6);

    .vuestic-button--#{$name}.vuestic-button--default{
      background-image: linear-gradient(to right, $gradient-color1, $gradient-color2);
      box-shadow: 0 2px 3px 0 $box-shadow;

      &:hover {
        background-image: linear-gradient(to right, lighten($gradient-color1, 15%), lighten($gradient-color2, 15%));
        color: white !important;
      }

      &:active, &:focus {
        background-image: linear-gradient(to right, darken($gradient-color1, 15%), darken($gradient-color2, 15%));
        color: white !important;
      }

      &.vuestic-button--disabled {
        opacity: 0.4;
      }
    }

    .vuestic-button--#{$name}.vuestic-button--outline{
      border: solid 2px $border-color;
      color: $border-color !important;

      &:hover {
        background-color: $hover-color;
        color: $border-color !important;
      }

      &:active, &:focus {
        background-color: $focus-color;
        color: $border-color !important;
      }

      &.vuestic-button--disabled {
        opacity: 0.4;
      }
    }

    .vuestic-button--#{$name}.vuestic-button--flat{
      border: 0 solid transparent;
      color: $border-color !important;

      &:hover {
        background-color: $hover-color;
        color: $border-color !important;
      }

      &:active, &:focus {
        background-color: $focus-color;
        color: $border-color !important;
        border: none;
      }

      &.vuestic-button--disabled {
        opacity: 0.4;
      }
    }

    .vuestic-button--#{$name}.vuestic-button--default{
      svg {

        path:last-of-type {
          fill: white;
        }
      }
    }

    .vuestic-button--#{$name}.vuestic-button--outline, .vuestic-button--#{$name}.vuestic-button--flat {
      svg {

        path:last-of-type {
          fill: $border-color;
        }
      }
    }
  }
</style>
