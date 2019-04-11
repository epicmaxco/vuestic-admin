<template>
  <div
    class="va-dropdown-popper"
  >
    <div @click="isClicked = false">Click outside</div>
    <div
      class="va-dropdown-popper__activator"
      @mouseover="isMouseHovered = true"
      @mouseout="isMouseHovered = false"
      @click="isClicked = !isClicked"
    >
      <slot name="activator"/>
    </div>
    <div
      v-if="showComputed"
      class="va-dropdown-popper__content"
      ref="content"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js'

export default {
  name: 'va-dropdown-popper',
  data () {
    return {
      popperInstance: null,
      isMouseHovered: false,
      isClicked: false,
    }
  },
  beforeDestroy () {
    this.removePopper()
  },
  watch: {
    showComputed: {
      immediate: true,
      handler (showComputed) {
        if (showComputed && !this.popperInstance) {
          this.$nextTick(() => {
            this.initPopper()
          })
          return
        }
        this.removePopper()
      },
    },
  },
  props: {
    contentHoverable: {

    },
    position: String,
    trigger: {
      default: 'click',
      validator: trigger => ['click', 'hover'].includes(trigger),
    },
  },
  methods: {
    initPopper () {
      this.popperInstance = new Popper(
        this.$el,
        this.$refs.content,
        {
          placement: this.placement || 'bottom',
        },
      )
    },
    removePopper () {
      if (!this.popperInstance) {
        return
      }
      this.popperInstance.destroy()
      this.popperInstance = null
    },
  },
  computed: {
    showComputed () {
      if (this.trigger === 'hover') {
        return this.isMouseHovered
      }
      if (this.trigger === 'click') {
        return this.isClicked
      }
      // TODO Implement external trigger
    },
  },
}
</script>

<style lang="scss">
.va-dropdown-popper {

}
</style>
