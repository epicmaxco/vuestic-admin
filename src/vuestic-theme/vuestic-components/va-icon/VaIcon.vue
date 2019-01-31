<template>
  <i class="va-icon"
    :class="[icon, iconClass]"
    :style="iconStyle"
  />
</template>

<script>
export default {
  name: 'va-icon',
  props: {
    icon: {
      type: [String, Array]
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number],
    },
    fixedWidth: {
      type: Boolean
    },
    rotation: {
      type: [String, Number]
    },
    color: {
      type: String
    },
  },
  computed: {
    iconClass () {
      return {
        'va-icon--large': this.large,
        'va-icon--small': this.small,
        'va-icon--fixed': this.fixedWidth,
        'va-icon--success': this.color === 'success',
        'va-icon--info': this.color === 'info',
        'va-icon--danger': this.color === 'danger',
        'va-icon--warning': this.color === 'warning',
        'va-icon--gray': this.color === 'gray',
        'va-icon--dark': this.color === 'dark',
      }
    },
    iconStyle () {
      return {
        transform: 'rotate(' + this.rotation + 'deg)',
        fontSize: typeof this.size === 'number' ? this.size + 'px' : this.size
      }
    },
  }
}
</script>

<style lang="scss">
.va-icon {
  display: inline-block;
  letter-spacing: normal;

  &--large {
    font-size: 2.25rem;
  }

  &--small {
    font-size: 1rem;
  }

  &--fixed {
    width: 1.25rem;
    text-align: center;
  }
}
</style>
