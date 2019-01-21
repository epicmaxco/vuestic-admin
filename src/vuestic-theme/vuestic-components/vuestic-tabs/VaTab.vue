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
  padding: 7px 12px;
  margin-left: 8px;
  margin-right: 8px;
  opacity: 0.5;
  font-weight: $font-weight-bold;
  cursor: pointer;
  &:hover, &.active {
    opacity: 1;
  }
  &.disabled {
    cursor: default;
  }
}
</style>
