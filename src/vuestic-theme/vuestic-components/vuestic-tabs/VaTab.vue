<template>
  <div
    @click="click"
    class="va-tab"
    :class="{
    'active': isActive(),
    'disabled': disabled
    }"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'va-tab',
  props: {
    disabled: Boolean
  },
  methods: {
    click () {
      if (!this.disabled) {
        this.$parent.$children.forEach(item => {
          if (item === this) {
            this.$parent.activeIndex = this.$parent.$children.indexOf(item)
          }
        })
        this.$parent.valueProxy = this.$slots.default[0].text
      }
    },
    isActive () {
      return this.$parent.valueProxy === this.$slots.default[0].text
    }
  }
}
</script>

<style lang="scss">
.va-tab {
  margin: 20px;
  cursor: pointer;
  &:hover, &.active {
    font-weight: $font-weight-bold;
    opacity: 1;
  }
  &.disabled {
    opacity: 0.5;
    cursor: default;
  }
}
</style>
