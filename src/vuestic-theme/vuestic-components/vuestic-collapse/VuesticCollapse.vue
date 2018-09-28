<template>
  <div class="vuestic-collapse">
    <div
      class="vuestic-collapse__header"
      @click="onHeaderClick()"
    >
      <slot name="header"/>
    </div>
    <div
      class="vuestic-collapse__body"
      ref="collapseBody"
    >
      <slot name="body"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-collapse',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  inject: {
    accordion: {
      default: () => ({
        onChildChange: () => {},
      }),
    },
  },
  data () {
    return {
      show: this.value,
    }
  },
  watch: {
    show (show) {
      if (show) {
        this.expand()
      } else {
        this.collapse()
      }
    },
  },
  methods: {
    expand () {
      const bodyContent = this.$refs.collapseBody
      bodyContent.style.height = this.$slots.body[0].elm.clientHeight + 'px'

      this.show = true
    },
    collapse () {
      const bodyContent = this.$refs.collapseBody
      bodyContent.style.height = 0

      this.show = false
    },
    onHeaderClick () {
      this.toggle()
      this.accordion.onChildChange(this, this.show)
    },
    // Public
    toggle () {
      this.show ? this.collapse() : this.expand()
    },
  },
}
</script>

<style lang="scss">
.vuestic-collapse {
  margin-bottom: 10px;

  &__body {
    height: 0;
    transition: height 0.3s;
    margin-top: 20px;
    background: $light-gray;
    overflow: hidden;
  }
}
</style>
