<template>
  <div class="va-tabs">
    <div class="va-tabs__bar">
      <slot>item</slot>
    </div>
    <slot name="content"/>
  </div>
</template>

<script>
export default {
  name: 'va-tabs',
  props: {
    value: null
  },
  computed: {
    valueProxy: {
      set (valueProxy) {
        this.$emit('input', valueProxy)
      },
      get () {
        return this.value
      }
    }
  },
  methods: {
    setActive (value) {
    }
  },
  mounted () {
    this.$slots.default.forEach(vnode => {
      vnode.elm.addEventListener('click', this.setActive())
    })
  }
}
</script>

<style lang="scss">
.va-tabs {
  &__bar {
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
