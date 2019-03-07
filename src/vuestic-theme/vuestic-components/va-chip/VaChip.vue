<template>
  <div
    v-if="value"
    class="va-chip mr-2"
    :class="chipClass"
    tabindex="0"
  >
    <div class="va-chip__content d-flex">
      <va-icon
        v-if="icon"
        fixed-width
        class="va-chip__content__icon va-chip__content__icon-left flex-center"
        :icon="icon"
      />
      <div
        v-if="hasTitleData"
        class="va-chip__content__title flex-center">
        <slot/>
      </div>
      <va-icon
        @click.native="hideChip()"
        v-if="iconRight && iconRight === 'ion ion-md-close ion'"
        fixed-width
        class="va-chip__content__icon scr va-chip__content__icon-right flex-center"
        :icon="iconRight"
      />
      <va-icon
        v-if="iconRight && iconRight !== 'ion ion-md-close ion'"
        fixed-width
        class="va-chip__content__icon va-chip__content__icon-right flex-center"
        :icon="iconRight"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-chip',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    outline: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'success'
    },
    isBadge: {
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
        'va-chip--small': this.isBadge,
        'va-chip--normal': !this.isBadge
      }
    },
    hasTitleData () {
      return this.$slots.default
    }
  },
  methods: {
    hideChip () {
      this.$emit('hide')
    },
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
    background-image: none;
    box-shadow: none;
    outline: none !important;
    border: $chip-border;
    font-family: $font-family-sans-serif;
    text-decoration: none !important;
    cursor: pointer;
    transition: $chip-transition;

    &__content {

      &__title, &__icon {
        margin: auto;
      }
    }

    &--small {
      @include chip-size($chip-padding-y-sm, $chip-padding-x-sm, $chip-font-size-sm, $chip-line-height-sm, $chip-border-radius-sm);
      letter-spacing: $chip-letter-spacing-sm;
      font-weight: bold;
      text-transform: uppercase;
      white-space: nowrap;
      color: $white;

      .va-chip__content__icon {
        width: $chip-icon-width-sm;
      }

      &.va-chip--with-left-icon {
        padding-left: $chip-with-icon-wrapper-padding-sm;

        .va-chip__content__title {
          padding-left: $chip-with-icon-content-padding-sm;
        }
      }

      &.va-chip--with-right-icon {
        padding-right: $chip-with-icon-wrapper-padding-sm;

        .va-chip__content__title {
          padding-right: $chip-with-icon-content-padding-sm;
        }
      }
    }

    &--normal {
      @include chip-size($chip-padding-y-nrm, $chip-padding-x-nrm, $chip-font-size-nrm, $chip-line-height-nrm, $chip-border-radius-nrm);
      letter-spacing: normal;
      color: $white;

      .va-chip__content__icon {
        width: $chip-icon-width-nrm;
      }

      &.va-chip--with-left-icon {
        padding-left: $chip-with-icon-wrapper-padding-nrm;

        .va-chip__content__title {
          padding-left: $chip-with-icon-content-padding-nrm;
        }
      }

      &.va-chip--with-right-icon {
        padding-right: $chip-with-icon-wrapper-padding-nrm;

        .va-chip__content__title {
          padding-right: $chip-with-icon-content-padding-nrm;
        }
      }
    }
  }

  $vuestic-colors: (
    success: (#23e066, #40e583, #d6ffd3, #77cea4),
    danger: (#e34b4a, #e34b4a, #ffebeb, #b86e6d),
    warning: (#feb900, #ffc202, #fff3d1, #cbb06e),
    info: (#2c82e0, #2c82e0, #caeeff, #6c97ac),
    gray: (#b4b6b9, #babfc2, #e6e9ec, #a3aab0),
    dark: (#34495e, #34495e, #afb6bb, #aebcca)
  );

  @each $name, $colors in $vuestic-colors {
    $background-color: nth($colors, 1);
    $border-color: nth($colors, 2);
    $focus-color: nth($colors, 3);
    $box-shadow: nth($colors, 4);

    .va-chip--#{$name}.va-chip--default{
      background-color: $background-color;

      .va-icon {
        color: $white;
      }

      &.va-chip--normal {
        &:focus {
          box-shadow: $chip-box-shadow $box-shadow;
        }
      }

      &:active, &:focus {
        background-color: $background-color;
        color: $white !important;
      }
    }

    .va-chip--#{$name}.va-chip--outline{
      background-color: transparent;
      border: solid $chip-border-outline $border-color;
      text-decoration: none;
      color: $border-color !important;

      .va-icon {
        color: $border-color;
      }

      &:active, &:focus {
        background-color: $focus-color;
        box-shadow: $chip-box-shadow $box-shadow;
        color: $border-color !important;
      }
    }
  }
</style>
