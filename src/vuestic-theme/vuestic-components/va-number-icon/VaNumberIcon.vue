<template>
  <span class="number-icon">
    <slot></slot>
    <span class="number-icon__round" v-if="displayNumber !== '0'">{{displayNumber}}</span>
  </span>
</template>

<script>
import { nFormatter } from '../../../services/utils'

export default {
  name: 'number-icon',
  props: {
    number: Number
  },
  computed: {
    displayNumber () {
      return nFormatter(this.number, 1)
    }
  }
}
</script>

<style lang="scss">
  .number-icon {
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
