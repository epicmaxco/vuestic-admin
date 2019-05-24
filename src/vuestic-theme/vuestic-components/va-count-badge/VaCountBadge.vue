<template>
  <span class="va-count-badge">
    <slot></slot>
    <span
      class="va-count-badge__round"
      v-if="displayNumber !== '0'"
      :style="computedStyle"
    >
      {{ displayNumber }}
    </span>
  </span>
</template>

<script>
import approximateNumber from 'approximate-number'

export default {
  name: 'va-count-badge',
  props: {
    number: Number,
    color: {
      type: String,
      default: 'danger',
    },
  },
  computed: {
    computedStyle () {
      return {
        backgroundColor: this.backgroundColor,
        fontSize: this.fontSize,
      }
    },
    backgroundColor () {
      if (!this.color) {
        return
      }
      return this.$themes[this.color] ? this.$themes[this.color] : this.color
    },
    fontSize () {
      // We change font size depending on length of text
      // so that it fits in circle perfectly.
      const length = this.displayNumber.length
      if (length <= 2) {
        return '0.75rem'
      }
      if (length <= 3) {
        return '0.7rem'
      }
      return `${length * 0.15}rem`
    },
    displayNumber () {
      return approximateNumber(this.number)
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-count-badge {
  position: relative;

  &__round {
    position: absolute;
    @include flex-center();
    color: $white;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    top: -1rem;
    right: -1rem;
  }
}
</style>
