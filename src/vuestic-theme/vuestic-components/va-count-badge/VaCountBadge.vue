<template>
  <span class="va-count-badge">
    <slot></slot>
    <span class="va-count-badge__round" v-if="displayNumber !== '0'" :style="computedStyle">{{displayNumber}}</span>
  </span>
</template>

<script>
import approx from 'approximate-number'

export default {
  name: 'va-count-badge',
  props: {
    number: Number
  },
  computed: {
    displayNumber () {
      return approx(this.number)
    },
    computedStyle () {
      const length = this.displayNumber.length
      let styles = {}
      switch (length) {
        case (1): {
          styles['font-size'] = `${length}rem`
          break
        }
        case (2): {
          styles['font-size'] = `${length * 0.375}rem`
          break
        }
        case (3): {
          styles['font-size'] = `${length * 0.233}rem`
          break
        }
        default: {
          styles['font-size'] = `${length * 0.15}rem`
        }
      }
      return styles
    }
  }
}
</script>

<style lang="scss">
  .va-count-badge {
    position: relative;
    &__round {
      position: absolute;
      background: $theme-danger;
      color: $white;
      font-size: .5rem;
      padding: .25rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      top: -1rem;
      right: -1rem;
    }
  }
</style>
