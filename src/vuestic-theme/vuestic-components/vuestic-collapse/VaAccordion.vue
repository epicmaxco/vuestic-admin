<template>
  <div class="va-accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'va-accordion',
  props: {
    expand: {
      type: Boolean,
      default: false,
    },
  },
  provide () {
    return {
      accordion: {
        onChildChange: (child, state) => this.onChildChange(child, state),
      },
    }
  },
  methods: {
    onChildChange (child, state) {
      // Expand means opening one collapse won't close others.
      if (this.expand) {
        return
      }

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
