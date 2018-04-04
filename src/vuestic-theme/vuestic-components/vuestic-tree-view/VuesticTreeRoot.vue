<template>
  <div class="vuestic-tree-root">
    <div class="vuestic-tree-root__item">
      <slot/>
    </div>
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
        this.$children.forEach(child => {
          if (child.$options.name === 'vuestic-tree-category') {
            child.collapse()
          }
        })
      },
      /**
       * @public
       */
      expand () {
        this.$children.forEach(child => {
          if (child.$options.name === 'vuestic-tree-category') {
            child.expand()
          }
        })
      },
    }
  }
</script>

<style lang="scss">
  .vuestic-tree-view {
    &__item {
      padding-bottom: 0.625rem;
    }
    padding: 0.3125rem;
  }
</style>
