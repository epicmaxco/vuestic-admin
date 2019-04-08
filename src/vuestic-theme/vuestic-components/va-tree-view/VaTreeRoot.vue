<template>
  <div class="va-tree-root">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'va-tree-root',
  methods: {
    /**
     * @public
     */
    collapse () {
      this.$nextTick(() => {
        this.$children.forEach(child => {
          if (child.$options.name === 'va-tree-category') {
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
          if (child.$options.name === 'va-tree-category') {
            child.expand()
          }
        })
      })
    },
  },
}
</script>

<style lang="scss">
.va-tree-root {
  padding: 0.3125rem;
  // List items require padding. Somewhat hacky, but the only remaining option is using render functions.
  .va-tree-category + .va-tree-category, .va-tree-node + .va-tree-node, .va-tree-category + .va-tree-node, .va-tree-node + .va-tree-category {
    margin-top: 0.625rem;
  }
}
</style>
