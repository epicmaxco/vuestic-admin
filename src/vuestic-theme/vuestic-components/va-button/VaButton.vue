<template>
  <component
    :is="computedTag"
    class="va-button"
    :class="buttonClass"
    :disabled="disabled"
    :type="type"
    :href="href"
    :target="target"
    :to="to"
    :replace="replace"
    :append="append"
    :active-class="activeClass"
    :exact="exact"
    :exact-active-class="exactActiveClass"
    v-on="inputListeners"
    tabindex="0"
  >
    <div class="va-button__content">
      <va-icon
        v-if="icon"
        fixed-width
        class="va-button__content__icon va-button__content__icon-left"
        :icon="icon"
      />
      <div
        v-if="hasTitleData"
        class="va-button__content__title">
        <slot/>
      </div>
      <va-icon
        v-if="iconRight"
        fixed-width
        class="va-button__content__icon va-button__content__icon-right"
        :icon="iconRight"
      />
    </div>
  </component>
</template>

<script>
export default {
  name: 'va-button',
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
    icon: {
      type: String
    },
    iconRight: {
      type: String
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    /* Link props */
    href: {
      type: String
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
        'va-button--success': this.color === 'success',
        'va-button--info': this.color === 'info',
        'va-button--danger': this.color === 'danger',
        'va-button--warning': this.color === 'warning',
        'va-button--gray': this.color === 'gray',
        'va-button--dark': this.color === 'dark',
        'va-button--default': !this.flat && !this.outline,
        'va-button--flat': this.flat,
        'va-button--outline': this.outline,
        'va-button--disabled': this.disabled,
        'va-button--without-title': !this.hasTitleData,
        'va-button--with-left-icon': this.icon,
        'va-button--with-right-icon': this.iconRight,
        'va-button--large': this.large,
        'va-button--small': this.small,
        'va-button--normal': !this.large && !this.small
      }
    },
    hasTitleData () {
      return this.$slots.default
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
    },
    inputListeners () {
      const vm = this
      return Object.assign({},
        this.$listeners,
        {
          click: function (event) {
            vm.$emit('click', event)
          }
        }
      )
    }
  },
}
</script>

<style lang='scss'>
  @mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {
    padding: $padding-y $padding-x;
    font-size: $font-size;
    line-height: $line-height;
    border-radius: $border-radius;
  }

  .va-button {
    display: inline-block;
    margin: $btn-margin;
    background-image: none;
    box-shadow: none;
    outline: none !important;
    border: $btn-border;
    font-family: $font-family-sans-serif;
    text-decoration: none !important;
    text-transform: initial;
    cursor: pointer;
    transition: $btn-transition;

    &__content {
      display: flex;

      &__title, &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }
    }

    &--large {
      @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);
      letter-spacing: $btn-letter-spacing-lg;
      color: $white;

      .va-button__content__icon {
        width: $btn-icon-width-lg;
      }

      &.va-button--with-left-icon {
        padding-left: $btn-with-icon-wrapper-padding-lg;

        &.va-button--without-title {
          padding-right: $btn-with-icon-wrapper-padding-lg;
        }

        .va-button__content__title {
          padding-left: $btn-with-icon-content-padding-lg;
        }
      }

      &.va-button--with-right-icon {
        padding-right: $btn-with-icon-wrapper-padding-lg;

        .va-button__content__title {
          padding-right: $btn-with-icon-content-padding-lg;
        }
      }
    }

    &--small {
      @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);
      letter-spacing: $btn-letter-spacing-sm;
      color: $white;

      .va-button__content__icon {
        width: $btn-icon-width-sm;
      }

      &.va-button--with-left-icon {
        padding-left: $btn-with-icon-wrapper-padding-sm;

        &.va-button--without-title {
          padding-right: $btn-with-icon-wrapper-padding-sm;
        }

        .va-button__content__title {
          padding-left: $btn-with-icon-content-padding-sm;
        }
      }

      &.va-button--with-right-icon {
        padding-right: $btn-with-icon-wrapper-padding-sm;

        .va-button__content__title {
          padding-right: $btn-with-icon-content-padding-sm;
        }
      }
    }

    &--normal {
      @include button-size($btn-padding-y-nrm, $btn-padding-x-nrm, $btn-font-size-nrm, $btn-line-height-nrm, $btn-border-radius-nrm);
      letter-spacing: $btn-letter-spacing-nrm;
      color: $white;

      .va-button__content__icon {
        width: $btn-icon-width-nrm;
      }

      &.va-button--with-left-icon {
        padding-left: $btn-with-icon-wrapper-padding-nrm;

        &.va-button--without-title {
          padding-right: $btn-with-icon-wrapper-padding-nrm;
        }

        .va-button__content__title {
          padding-left: $btn-with-icon-content-padding-nrm;
        }
      }

      &.va-button--with-right-icon {
        padding-right: $btn-with-icon-wrapper-padding-nrm;

        .va-button__content__title {
          padding-right: $btn-with-icon-content-padding-nrm;
        }
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

    .va-button--#{$name}.va-button--default{
      background-image: linear-gradient(to right, $gradient-color1, $gradient-color2);
      box-shadow: $btn-box-shadow $box-shadow;

      &:hover {
        background-image: linear-gradient(to right, lighten($gradient-color1, 15%), lighten($gradient-color2, 15%));
        color: $white !important;
      }

      &:active, &:focus, &.va-button--active {
        background-image: linear-gradient(to right, darken($gradient-color1, 15%), darken($gradient-color2, 15%));
        color: $white !important;
      }

      &.va-button--disabled {
        background-image: linear-gradient(to right, $gradient-color1, $gradient-color2);
        @include va-disabled;
      }
    }

    .va-button--#{$name}.va-button--outline{
      background: transparent;
      border: solid $btn-border-outline $border-color;
      text-decoration: none;
      color: $border-color !important;

      &:hover {
        background-color: $hover-color;
        color: $border-color !important;
      }

      &:active, &:focus, &.va-button--active {
        background-color: $focus-color;
        color: $border-color !important;

        .va-button-toggle & {
          background-color: $border-color;

          .va-button__content {
            color: $white;
          }

          i {
            color: $white;
          }
        }
      }

      &.va-button--disabled {
        background: transparent;
        @include va-disabled;
      }
    }

    .va-button--#{$name}.va-button--flat{
      background: transparent;
      border: $btn-border solid transparent;
      text-decoration: none;
      color: $border-color !important;

      &:hover {
        background-color: $hover-color;
        color: $border-color !important;
      }

      &:active, &:focus, &.va-button--active {
        background-color: $focus-color !important;
        color: $border-color !important;
        border: none;
      }

      &.va-button--disabled {
        background: transparent;
        @include va-disabled;
      }
    }

    .va-button--#{$name}.va-button--default{
      i {
        color: $white;
      }
    }

    .va-button--#{$name}.va-button--outline, .va-button--#{$name}.va-button--flat {
      i {
        color: $border-color;
      }
    }
  }
</style>
