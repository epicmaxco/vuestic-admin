<template>
  <transition v-if="value" name="fade">
    <div class="va-notification d-flex justify--space-between align--start"
         :style="notificationStyle"
    >
      <div class="va-notification__content d-inline-flex align--center">
        <slot/>
      </div>
      <div class="va-notification__close-icon d-flex justify--end align--start">
        <va-icon
           v-if="closeable"
           :color="color"
           icon="ion-md-close ion"
           @click="hideNotification()"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { getBoxShadowColor, getHoverColor } from '../../../services/colors'

export default {
  name: 'va-notification',
  computed: {
    notificationStyle () {
      return {
        background: getHoverColor(this.color),
        boxShadow: '0 0.125rem 0.125rem 0 ' + getBoxShadowColor(this.color)
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

    &__close-icon {
      padding: $va-close-icon-padding-y $va-close-icon-padding-x;
      font-size: $va-close-icon-font-size;
      cursor: pointer;
    }
  }
</style>
