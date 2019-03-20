<template>
  <div
    class="va-badge mr-2"
    :class="badgeClass"
    :color="color"
    :outline="outline"
  >
    <div class="va-badge__content d-flex">
      <div class="va-badge__content__title flex-center">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-badge',
  props: {
    outline: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'success'
    },
  },
  computed: {
    badgeClass () {
      return {
        'va-badge--success': this.color === 'success',
        'va-badge--info': this.color === 'info',
        'va-badge--danger': this.color === 'danger',
        'va-badge--warning': this.color === 'warning',
        'va-badge--gray': this.color === 'gray',
        'va-badge--dark': this.color === 'dark',
        'va-badge--default': !this.outline,
        'va-badge--outline': this.outline,
      }
    }
  },
}
</script>

<style lang='scss'>
@import "../../vuestic-sass/resources/resources";

  .va-badge {
    display: inline-block;
    padding: $chip-padding-y-sm $chip-padding-x-sm;
    color: $white;
    border: $chip-border;
    border-radius: $chip-border-radius-sm;
    font-size: $chip-font-size-sm;
    font-weight: bold;
    font-family: $font-family-sans-serif;
    text-transform: uppercase;
    line-height: $chip-line-height-sm;
    letter-spacing: $chip-letter-spacing-sm;
    white-space: nowrap;
    transition: $chip-transition;

    &__content {

      &__title {
        margin: auto;
      }
    }
  }

  $vuestic-colors: (
    success: (#23e066, #40e583),
    danger: (#e34b4a, #e34b4a),
    warning: (#feb900, #ffc202),
    info: (#2c82e0, #2c82e0),
    gray: (#b4b6b9, #babfc2),
    dark: (#34495e, #34495e)
  );

  @each $name, $colors in $vuestic-colors {
    $background-color: nth($colors, 1);
    $border-color: nth($colors, 2);

    .va-badge--#{$name}.va-badge--default{
      background-color: $background-color;
    }

    .va-badge--#{$name}.va-badge--outline{
      background-color: transparent;
      border: solid $chip-border-outline $border-color;
      color: $border-color !important;
    }
  }
</style>
