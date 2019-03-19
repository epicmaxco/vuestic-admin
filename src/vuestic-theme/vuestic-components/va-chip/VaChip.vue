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
        v-if="iconRight || removable"
        fixed-width
        class="va-chip__content__icon scr va-chip__content__icon-right flex-center"
        :icon="removable ? 'ion ion-md-close ion' : iconRight"
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
    icon: {
      type: String
    },
    iconRight: {
      type: String
    },
    removable: {
      type: Boolean
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
        'va-chip--with-right-icon': this.iconRight || this.removable,
      }
    },
    hasTitleData () {
      return this.$slots.default
    }
  },
  methods: {
    hideChip () {
      if (this.removable) {
        this.$emit('input', false)
      }
    },
  },
}
</script>

<style lang='scss'>
  .va-chip {
    display: inline-block;
    padding: $chip-padding-y-nrm $chip-padding-x-nrm;
    color: $white;
    border: $chip-border;
    border-radius: $chip-border-radius-nrm;
    font-size: $chip-font-size-nrm;
    font-family: $font-family-sans-serif;
    background-image: none;
    box-shadow: none;
    outline: none !important;
    line-height: $chip-line-height-nrm;
    letter-spacing: normal;
    text-decoration: none !important;
    cursor: pointer;
    transition: $chip-transition;

    &__content {

      &__title, &__icon {
        margin: auto;
      }

      &__icon {
        width: $chip-icon-width-nrm;
      }
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

      &:focus {
        box-shadow: $chip-box-shadow $box-shadow;
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
