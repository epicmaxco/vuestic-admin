<template>
  <div class="vuestic-accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vuestic-accordion',
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lastClickedTab: {}
    }
  },
  provide () {
    return {
      accordion: {
        onChildChange: (child, state) => this.onChildChange(child, state)
      }
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
  }
}
</script>

// HACK Accordion for presentation page
<style lang="scss">
  .vuestic-accordion {
    .btn {
      width: 100%;
      padding-left: 10px;
      border-radius: 0;
      text-align: left;
    }

    .vuestic-collapse__body {
      margin-top: 0;
    }
  }
</style>
