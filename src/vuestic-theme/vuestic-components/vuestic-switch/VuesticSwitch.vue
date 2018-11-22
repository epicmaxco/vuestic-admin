<template>
  <div class="vuestic-switch">
    <div class="vuestic-switch-option true-option" :class="{'active': value}"
         @click.prevent="setValue(true)">
      <slot name="trueTitle"></slot>
    </div>
    <div class="vuestic-switch-option false-option" :class="{'active': !value}"
         @click.prevent="setValue(false)">
      <slot name="falseTitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-switch',
  props: {
    value: Boolean,
  },
  mounted () {
    this.$emit('input', this.value)
  },
  methods: {
    setValue (newVal) {
      this.$emit('input', newVal)
    },
  },
}
</script>

<style lang="scss">
.vuestic-switch {
  cursor: pointer;
  display: flex;
  flex-direction: row;

  .vuestic-switch-option {
    padding: $vuestic-switch-padding;
    border-top: $vuestic-switch-border-size solid transparent;
    border-bottom: $vuestic-switch-border-size solid $vuestic-switch-bg;
    background-color: transparent;
    transition: all 0.15s ease;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      color: $white;
      background-color: $vuestic-switch-bg;
    }

    &:not(.active):hover {
      color: $brand-primary;
    }
  }
}
</style>
