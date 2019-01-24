<template>
  <transition v-if="value" name="fade">
    <div class="va-notification va-row" :class="notificationClass">
      <div class="flex md11">
        <slot/>
      </div>
      <div class="flex md1">
        <i v-if="closeable"
           class="ion-md-close ion va-notification__close-icon"
           @click="hideNotification()"/>
      </div>
        <!--<slot/>-->
        <!--<vuestic-icon-close-button
          v-if="closeable"
          @click="hideNotification()"
        />-->
    </div>
  </transition>
</template>

<script>
import VuesticIconCloseButton from '../vuestic-icon/VuesticIconCloseButton'

export default {
  name: 'va-notification',
  components: {
    VuesticIconCloseButton
  },
  computed: {
    notificationClass () {
      return {
        'va-notification--with-close-button': this.closeable,
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
    padding: 0.75rem 0.5rem;
    margin: 0.25rem auto;
    border: 0 solid transparent;
    border-radius: 0.5rem;

    .va-badge {
      display: inline-flex;
      padding: 0.125rem 0.5rem;
      font-family: $font-family-sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      font-size: .625rem;
      color: $white;
      letter-spacing: .0625rem;
      margin-right: 0.5rem;
      border-radius: 0.5rem;
    }
  }

  $vuestic-colors: (
    success: (#40e583, #d6ffd3, #acebcc),
    danger: (#e34b4a, #ffebeb, #ffcaca),
    warning: (#ffc202, #fff3d1, #ece1c6),
    info: (#2c82e0, #caeeff, #b5dcec),
    gray: (#babfc2, #e6e9ec, #d1d1d1),
    dark: (#34495e, #afb6bb, #8b9194)
  );

  @each $name, $colors in $vuestic-colors {
    $close-icon-color: nth($colors, 1);
    $background-color: nth($colors, 2);
    $box-shadow-color: nth($colors, 3);

    .va-notification--#{$name}{
      background: $background-color;
      box-shadow: 0 0.125rem 0.125rem 0 $box-shadow-color;

      .va-badge--#{$name}{
        background-color: $close-icon-color;
      }

      .va-notification__close-button {
        width: 1.5rem;
        height: 1.5rem;

        svg {
          margin: auto;
        }

        path:last-of-type {
          fill: $close-icon-color;
        }
      }
    }
  }
</style>
