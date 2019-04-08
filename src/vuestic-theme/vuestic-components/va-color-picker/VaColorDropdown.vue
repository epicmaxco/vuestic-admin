<template>
  <div class="va-color-dropdown">
    <div class="va-color-dropdown__toggle" ref="toggleRef"
         @click="toggle()">
      <slot name="toggle"/>
    </div>
    <div v-show="isOpen">
      <div class="va-color-dropdown__content" ref="content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-color-dropdown',
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
  },
  mounted () {
    const content = this.$refs.content
    const toggleRef = this.$refs.toggleRef
    window.addEventListener('click', (event) => {
      let target = event.target
      while (target !== null) {
        target = target.parentNode
        if (target === toggleRef || target === content) {
          break
        }
      }
      if (target !== toggleRef && target !== content) {
        this.isOpen = false
      }
    })
  },
}
</script>

<style lang="scss">
.va-color-dropdown {
  &__toggle {
    position: relative;
  }

  &__content {
    position: absolute;
    padding-top: 20px;
    z-index: 1;
  }
}
</style>
