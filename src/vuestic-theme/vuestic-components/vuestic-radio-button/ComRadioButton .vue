<template>
  <div
    class="com-radio-button"
    :class="computedClass"
    @click="$emit('input', option)"
  >
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'com-radio-button',
  props: ['value', 'option'],
  computed: {
    computedClass () {
      return {
        'com-radio-button--active': this.isActive,
      }
    },
    icon () {
      return ['far', this.isActive ? 'dot-circle' : 'circle']
    },
    isActive () {
      return this.value === this.option
    },
  },
}
</script>

<style lang="scss">

.com-radio-button {
  cursor: pointer;
  &__icon {
    display: inline;
    color: $gray-light;
    @at-root {
      .com-radio-button.com-radio-button--active & {
        color: $vue-green;
      }
    }
  }
}
</style>
