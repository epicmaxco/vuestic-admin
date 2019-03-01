<template>
  <div
    class="va-chip"
    :class="chipClass"
    tabindex="0"
  >
    <div class="va-chip__content">
      <va-icon
        v-if="icon"
        fixed-width
        class="va-chip__content__icon va-chip__content__icon-left"
        :icon="icon"
      />
      <div
        v-if="hasTitleData"
        class="va-chip__content__title">
        <slot/>
      </div>
      <va-icon
        v-if="iconRight"
        fixed-width
        class="va-chip__content__icon va-chip__content__icon-right"
        :icon="iconRight"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-chip',
  props: {
    outline: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'success'
    },
    small: {
      type: Boolean
    },
    icon: {
      type: String
    },
    iconRight: {
      type: String
    }
  },
  computed: {
    chipClass () {
      return {
        'va-chip--success': this.color === 'success',
        'va-chip--info': this.color === 'info',
        'va-chip--danger': this.color === 'danger',
        'va-chip--warning': this.color === 'warning',
        'va-chip--gray': this.color === 'gray',
        'va-chip--dark': this.color === 'dark',
        'va-chip--default': !this.outline,
        'va-chip--outline': this.outline,
        'va-chip--without-title': !this.hasTitleData,
        'va-chip--with-left-icon': this.icon,
        'va-chip--with-right-icon': this.iconRight,
        'va-chip--small': this.small,
        'va-chip--normal': !this.small
      }
    },
    hasTitleData () {
      return this.$slots.default
    }
  },
}
</script>

<style lang='scss'>
  @mixin chip-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {
    padding: $padding-y $padding-x;
    font-size: $font-size;
    line-height: $line-height;
    border-radius: $border-radius;
  }

  .va-chip {
    display: inline-block;
    margin-right: 0.5rem;
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

    &--small {
      @include chip-size(0.125rem, 0.5rem, 0.625rem, 1.5, 0.5rem);
      letter-spacing: 0.0625rem;
      font-weight: bold;
      text-transform: uppercase;
      white-space: nowrap;
      color: $white;

      .va-chip__content__icon {
        width: $btn-icon-width-sm;
      }

      &.va-chip--with-left-icon {
        padding-left: $btn-with-icon-wrapper-padding-sm;

        &.va-chip--without-title {
          padding-right: $btn-with-icon-wrapper-padding-sm;
        }

        .va-chip__content__title {
          padding-left: $btn-with-icon-content-padding-sm;
        }
      }

      &.va-chip--with-right-icon {
        padding-right: $btn-with-icon-wrapper-padding-sm;

        .va-chip__content__title {
          padding-right: $btn-with-icon-content-padding-sm;
        }
      }
    }

    &--normal {
      @include chip-size(0.25rem, 0.75rem, 0.875rem, 1.29, 1.125rem);
      letter-spacing: normal;
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
  }

  $vuestic-colors: (
    success: (#23e066, #40e583, #d6ffd3),
    danger: (#e34b4a, #e34b4a, #ffebeb),
    warning: (#feb900, #ffc202, #fff3d1),
    info: (#2c82e0, #2c82e0, #caeeff),
    gray: (#b4b6b9, #babfc2, #e6e9ec),
    dark: (#34495e, #34495e, #afb6bb)
  );

  @each $name, $colors in $vuestic-colors {
    $background-color: nth($colors, 1);
    $border-color: nth($colors, 2);
    $focus-color: nth($colors, 3);

    .va-chip--#{$name}.va-chip--default{
      background-color: $background-color;

      &:active, &:focus {
        background-color: $background-color;
        color: $white !important;
      }
    }

    .va-chip--#{$name}.va-chip--outline{
      background-color: transparent;
      border: solid $btn-border-outline $border-color;
      text-decoration: none;
      color: $border-color !important;

      &:active, &:focus {
        background-color: $focus-color;
        color: $border-color !important;
      }
    }

    .va-chip--#{$name}.va-chip--default {
      i {
        color: $white;
      }
    }

    .va-chip--#{$name}.va-chip--outline {
      i {
        color: $border-color;
      }
    }
  }
</style>
