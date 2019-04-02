<template>
  <div
    @click="selectTab"
    class="va-tab"
    :class="{
      'va-tab--active': isActive(),
      'va-tab--disabled': disabled
    }"
    :style="{width: widthComputed}"
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
  data () {
    return {
      width: ''
    }
  },
  computed: {
    widthComputed () {
      if (this.$parent.grow) {
        let sum = 0
        this.$parent.tabsWidth.forEach((item) => {
          sum += item
        })
        if (this.width) {
          if (this.width / sum * 100 > 100 / this.$parent.$slots.default.length) {
            return this.width + 'px'
          }
        }
        return 100 / this.$parent.$slots.default.length + '%'
      }
    }
  },
  methods: {
    selectTab () {
      this.$parent.selectTab(this)
    },
    isActive () {
      return this.$parent.tabSelected(this)
    }
  },
  mounted () {
    if (this.$vnode.elm) {
      this.width = this.$vnode.elm.clientWidth
    }
  },
  beforeDestroy () {
    if (this.$parent.$children.indexOf(this) === this.$parent.value &&
      this.$parent.value > 0) {
      this.$parent.selectTab(this.$parent.$children[this.$parent.value - 1])
    }
  }
}
</script>

<style lang="scss">
.va-tab {
  padding: 0.4375rem 0.75rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  opacity: 0.5;
  font-weight: $font-weight-bold;
  cursor: pointer;
  @include va-flex-center();
  &:hover, &--active {
    opacity: 1;
  }
  &--disabled {
    cursor: default;
  }
}
</style>
