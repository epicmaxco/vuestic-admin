<template>
  <div
    class="vuestic-radio-button"
    :class="computedClass"
    @click="onClick"
  >
    <div class="vuestic-radio-button__content">
      <input @keypress="isOnFocus=false" @focus="isOnFocus = true" @blur="isOnFocus = false" :checked="isActive" type="radio" class="vuestic-radio-button__input" :disabled="disable"/>
      <div class="vuestic-radio-button__icon">
        <div class="vuestic-radio-button__icon-circle"/>
      </div>
    </div>
    <div class="vuestic-radio-button__slot-container">
      <slot/>
    </div>
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
  data () {
    return {
      onFocus: false
    }
  },
  computed: {
    computedClass () {
      return {
        'vuestic-radio-button--active': this.isActive,
        'vuestic-radio-button--disable': this.disable,
        'vuestic-radio-button--onFocus': this.isOnFocus
      }
    },
    isActive () {
      return this.value === this.option
    },
    isOnFocus: {
      set (onFocus) {
        this.onFocus = onFocus
      },
      get () {
        return this.onFocus
      }
    }
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
  &__input {
    width: 24px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
  }
  #{&}__content {
    width: 30px;
    height: 30px;
    padding-left: 5px;
    padding-top: 5px;
    @at-root {
      .vuestic-radio-button--onFocus#{&} {
        background-color: rgba(187, 180, 178, 0.33);
        border-radius: 25px;
    }
    }
  }
  &__slot-container {
    padding-top: 5px;
  }
}
</style>
