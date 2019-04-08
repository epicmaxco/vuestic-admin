<template>
  <div class="va-switch">
    <div class="va-switch-option true-option" :class="{'active': value}"
         @click.prevent="setValue(true)">
      <slot name="trueTitle"></slot>
    </div>
    <div class="va-switch-option false-option" :class="{'active': !value}"
         @click.prevent="setValue(false)">
      <slot name="falseTitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-switch',
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
$va-switch-bg: $brand-primary;
$va-switch-padding: 0.313rem 2.375rem;
$va-switch-border-size: 0.125rem;

.va-switch {
  cursor: pointer;
  display: flex;
  flex-direction: row;

  .va-switch-option {
    padding: $va-switch-padding;
    border-top: $va-switch-border-size solid transparent;
    border-bottom: $va-switch-border-size solid $va-switch-bg;
    background-color: transparent;
    transition: all 0.15s ease;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      color: $white;
      background-color: $va-switch-bg;
    }

    &:not(.active):hover {
      color: $brand-primary;
    }
  }
}
</style>
