<template>
  <div class="va-accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'va-accordion',
  provide () {
    return {
      accordion: {
        onChildChange: (child, state) => this.onChildChange(child, state),
      },
    }
  },
  methods: {
    onChildChange (child, state) {
      // No reaction when user closes collapse.
      if (state === false) {
        return
      }

      this.$children.forEach(collapse => {
        if (collapse === child) {
          return
        }
        collapse.collapse()
      })
    },
  },
}
</script>

<style lang="scss">
.va-accordion {
}
</style>
