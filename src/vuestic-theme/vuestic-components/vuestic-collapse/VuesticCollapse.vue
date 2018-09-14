<template>
  <div class="vuestic-collapse"
       :class="{ 'vuestic-collapse_open': show }">
    <div class="vuestic-collapse__header"
         @click="show = !show">
      <slot name="header"></slot>
    </div>
    <div class="vuestic-collapse__body" ref="collapseBody"
         :class="{ 'vuestic-collapse_open': show }">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-collapse',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: this.value
    }
  },
  watch: {
    show (show) {
      if (show) {
        this.expand()
      } else {
        this.collapse()
      }
    }
  },
  methods: {
    expand () {
      let bodyContent = this.$refs.collapseBody

      bodyContent.style.height = this.$slots.body[0].elm.clientHeight + 'px'
    },
    collapse () {
      let bodyContent = this.$refs.collapseBody

      bodyContent.style.height = 0
    }
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
