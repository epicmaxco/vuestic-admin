<template>
  <i class="vuestic-icon"
    :class="[icon, iconClass]"
    :style="iconStyle"
  />
</template>

<script>
export default {
  name: 'vuestic-icon',
  props: {
    icon: {
      type: String
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
      type: String,
      default: undefined
    },
  },
  computed: {
    iconClass () {
      return {
        'vuestic-icon--large': this.large,
        'vuestic-icon--small': this.small,
        'vuestic-icon--fixed': this.fixedWidth,
        'vuestic-icon--success': this.color === 'success',
        'vuestic-icon--info': this.color === 'info',
        'vuestic-icon--danger': this.color === 'danger',
        'vuestic-icon--warning': this.color === 'warning',
        'vuestic-icon--gray': this.color === 'gray',
        'vuestic-icon--dark': this.color === 'dark',
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
.vuestic-icon {
  display: inline-flex;

  &--large {
    font-size: 36px;
  }

  &--small {
    font-size: 16px;
  }

  &--fixed {
    width: 1.25rem;
    text-align: center;
  }
}
</style>
