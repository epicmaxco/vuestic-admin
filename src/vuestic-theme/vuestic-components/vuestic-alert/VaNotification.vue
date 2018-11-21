<template>
  <transition v-if="value" name="fade">
    <div class="va-notification" :class="notificationClass">
      <slot name="icon"></slot>
      <slot></slot>
      <i v-if="closeable"
         class="va-notification__close-btn"
         @click="hideNotification()"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'va-notification',
  computed: {
    notificationClass () {
      return {
        'va-notification--with-close-btn': this.closeable,
        'va-notification--success': this.color === 'success',
        'va-notification--danger': this.color === 'danger',
        'va-notification--warning': this.color === 'warning',
        'va-notification--info': this.color === 'info',
        'va-notification--gray': this.color === 'gray',
        'va-notification--dark': this.color === 'dark',
      }
    },
  },
  props: {
    color: {
      color: String,
      default: 'success',
    },
    value: {
      type: Boolean,
      default: true,
    },
    closeable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideNotification () {
      this.$emit('input', false)
    },
  },
}
</script>

<style lang='scss'>
  .va-notification {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 8px;
    margin: 4px auto;
    border: 0 solid transparent;
    border-radius: 8px;

    .badge {
      margin-right: 8px;
      border-radius: 9px;
    }

    & &--with-close-btn {
      padding-right: $with-close-pr;
    }

    &__close-btn {
      position: absolute;
      right: 8px;
      top: calc(50% - #{$font-size-base} / 2);
      font-size: $font-size-base;
      cursor: pointer;
    }
  }

  $vuestic-colors: (
    success: (#63e5b3, #23e066, #77cea4, #40e583, #d6ffd3, #c0fbc7, #acebcc),
    danger: (#ff7455, #e34b4a, #b86e6d, #e34b4a, #ffebeb, #fbd2d2, #ffcaca),
    warning: (#ffd72d, #feb900, #cbb06e, #ffc202, #fff3d1, #ffebb1, #ece1c6),
    info: (#32b5e4, #2c82e0, #6c97ac, #2c82e0, #caeeff, #b2defb, #b5dcec),
    gray: (#cdd0d5, #b4b6b9, #a3aab0, #babfc2, #e6e9ec, #dfe3e5, #d1d1d1),
    dark: (#576675, #34495e, #aebcca, #34495e, #afb6bb, #afb6bb, #8b9194)
  );

  @each $name, $colors in $vuestic-colors {
    $close-icon-color: nth($colors, 4);
    $background-color: nth($colors, 5);
    $box-shadow-color: nth($colors, 7);

    .va-notification--#{$name}{
      background: $background-color;
      box-shadow: 0 2px 3px 0 $box-shadow-color;

      .badge-#{$name}{
        background-color: $close-icon-color;
      }

      .va-notification__close-btn {
        top: calc(50% - 12px);
        width: 24px;
        height: 24px;
        background: url('../../../../src/assets/icons/close-btn/i-close-#{$name}.svg');
      }
    }
  }
</style>
