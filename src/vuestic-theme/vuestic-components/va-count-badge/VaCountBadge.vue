<template>
  <span class="va-count-badge">
    <slot></slot>
    <span class="va-count-badge__round" v-if="displayNumber !== '0'">{{displayNumber}}</span>
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
