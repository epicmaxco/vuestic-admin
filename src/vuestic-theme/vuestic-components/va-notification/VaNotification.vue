<template>
  <transition v-if="value" name="fade">
    <div class="va-notification d-flex justify--space-between align--start"
         :class="notificationClass"
    >
      <div class="va-notification__content d-inline-flex align--center">
        <slot/>
      </div>
      <div class="va-notification__close-icon d-flex justify--end align--start">
        <i v-if="closeable"
           class="ion-md-close ion"
           @click="hideNotification()"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'va-notification',
  computed: {
    notificationClass () {
      return {
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
  // Notifications
  $va-notification-margin-y: 0.25rem;
  $va-notification-padding-x: 0.5rem;
  $va-notification-padding-y: 0.75rem;
  $va-notification-border: 0;
  $va-notification-border-radius: 0.5rem;
  $va-notification-box-shadow: 0.125rem;

  // Badge
  $va-badge-margin-right: 0.5rem;
  $va-badge-padding-x: 0.5rem;
  $va-badge-padding-y: 0.125rem;
  $va-badge-border-radius: 0.5rem;
  $va-badge-font-size: 0.625rem;
  $va-badge-letter-spacing: 0.0625rem;

  // Close Icon
  $va-close-icon-padding-x: 0.5rem;
  $va-close-icon-padding-y: 0.0625rem;
  $va-close-icon-font-size: 1.5rem;

  .va-notification {
    padding: $va-notification-padding-y $va-notification-padding-x;
    margin: $va-notification-margin-y auto;
    border: $va-notification-border solid transparent;
    border-radius: $va-notification-border-radius;

    &__badge {
      padding: $va-badge-padding-y $va-badge-padding-x;
      font-family: $font-family-sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      white-space: nowrap;
      font-size: $va-badge-font-size;
      color: $white;
      letter-spacing: $va-badge-letter-spacing;
      margin-right: $va-badge-margin-right;
      border-radius: $va-badge-border-radius;
    }

    &__close-icon {
      padding: $va-close-icon-padding-y $va-close-icon-padding-x;
      font-size: $va-close-icon-font-size;
      cursor: pointer;
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
      box-shadow: 0 $va-notification-box-shadow $va-notification-box-shadow 0 $box-shadow-color;

      .va-notification__badge--#{$name}{
        background-color: $close-icon-color;
      }

      .va-notification__close-icon {
        color: $close-icon-color;
      }
    }
  }
</style>
