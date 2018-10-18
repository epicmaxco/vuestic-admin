<template>
  <div
    class="vuestic-radio-button"
    :class="computedClass"
    @click="onClick"
  >
    <div class="vuestic-radio-button__icon">
      <div class="vuestic-radio-button__icon-circle"/>
    </div>
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'vuestic-radio-button',
  props: {
    value: '',
    option: '',
    disable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClass () {
      return {
        'vuestic-radio-button--active': this.isActive,
        'vuestic-radio-button--disable': this.disable
      }
    },
    isActive () {
      return this.value === this.option
    },
  },
  methods: {
    onClick () {
      if (!this.disable) {
        this.$emit('input', this.option)
      }
    }
  }
}
</script>

<style lang="scss">

.vuestic-radio-button {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  &__icon {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: $gray solid 2px;
    margin-right: 5px;
    @at-root {
      .vuestic-radio-button.vuestic-radio-button--active & {
        border: $vue-green solid 2px;
      }

      .vuestic-radio-button.vuestic-radio-button--disable & {
        opacity: 0.4;
      }
    }
  }
  &__icon-circle {
    @at-root {
      .vuestic-radio-button.vuestic-radio-button--active & {
        width: 5px;
        height: 5px;
        border-radius: 4px;
        position: absolute;
        border: $vue-green solid 4px;
        margin-top: 4px;
        margin-left: 4px;
      }
    }
  }
}
</style>
