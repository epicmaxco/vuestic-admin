<template>
  <div class="vuestic-tree-root">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'vuestic-tree-root',
  methods: {
    /**
     * @public
     */
    collapse () {
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'vuestic-tree-category') {
            child.collapse()
          }
        })
      })
    },
    /**
     * @public
     */
    expand () {
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'vuestic-tree-category') {
            child.expand()
          }
        })
      })
    },
  },
}
</script>

<style lang="scss">
.vuestic-tree-root {
  padding: 0.3125rem;
  // List items require padding. Somewhat hacky, but the only remaining option is using render functions.
  .vuestic-tree-category + .vuestic-tree-category, .vuestic-tree-node + .vuestic-tree-node, .vuestic-tree-category + .vuestic-tree-node, .vuestic-tree-node + .vuestic-tree-category {
    margin-top: 0.625rem;
  }
}
</style>
