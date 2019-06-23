<template>
  <i class="va-icon"
     :class="[name, iconClass]"
     :style="iconStyle"
  ><slot/></i>
</template>

<script>
export default {
  name: 'va-icon',
  props: {
    name: {
      type: [String, Array],
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    size: {
      type: [String, Number],
    },
    fixedWidth: {
      type: Boolean,
    },
    rotation: {
      type: [String, Number],
    },
    color: {
      type: String,
    },
  },
  computed: {
    iconClass () {
      return {
        'va-icon--large': this.large,
        'va-icon--small': this.small,
        'va-icon--fixed': this.fixedWidth,
      }
    },
    iconStyle () {
      return {
        transform: 'rotate(' + this.rotation + 'deg)',
        fontSize: typeof this.size === 'number' ? this.size + 'px' : this.size,
        color: this.$themes[this.color] || this.color,
      }
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-icon {
  display: inline-block;
  letter-spacing: normal;

  &--large {
    font-size: $icon-lg-size;
  }

  &--small {
    font-size: $icon-sm-size;
  }

  &--fixed {
    width: $icon-fixed-width;
    text-align: center;
  }
}
</style>
