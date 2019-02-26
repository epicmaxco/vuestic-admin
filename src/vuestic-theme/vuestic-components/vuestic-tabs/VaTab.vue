<template>
  <div
    @click="selectTab"
    class="va-tab"
    :class="{
    'va-tab--active': isActive(),
    'va-tab--disabled': disabled
    }"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'va-tab',
  props: {
    disabled: {
      type: Boolean
    }
  },
  methods: {
    selectTab () {
      if (!this.disabled) {
        this.$parent.$children.forEach(item => {
          if (item === this) {
            this.$parent.activeIndex = this.$parent.$children.indexOf(item)
          }
        })
        this.$parent.valueProxy = this.$slots.default[0].text.trim()
      }
    },
    isActive () {
      return this.$parent.valueProxy === this.$slots.default[0].text.trim()
    }
  },
  beforeDestroy () {
    if (this.$parent.activeIndex > 0) {
      this.$parent.activeIndex--
    }
    this.$parent.valueProxy = this.$parent.$children[this.$parent.activeIndex].$slots.default[0].text.trim()
  }
}
</script>

<style lang="scss">
.va-tab {
  padding: 0.4375rem 0.75rem;
  margin-left: 8px;
  margin-right: 8px;
  opacity: 0.5;
  font-weight: $font-weight-bold;
  cursor: pointer;
  &:hover, &--active {
    opacity: 1;
  }
  &--disabled {
    cursor: default;
  }
}
</style>
