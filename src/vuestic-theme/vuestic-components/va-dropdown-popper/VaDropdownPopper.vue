<template>
  <div
    class="va-dropdown-popper"
  >
    <div @click="isClicked = false">Click outside</div>
    <span
      class="va-dropdown-popper__activator"
      @mouseover="isMouseHovered = true"
      @mouseout="isMouseHovered = false"
      @click="isClicked = !isClicked"
    >
      <slot name="activator"/>
    </span>
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
  created () {
    this.registerClickOutsideListener()
  },
  beforeDestroy () {
    this.unregisterClickOutsideListener()
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
    contentHoverable: {},
    position: String,
    trigger: {
      default: 'click',
      validator: trigger => ['click', 'hover'].includes(trigger),
    },
  },
  methods: {
    registerClickOutsideListener () {
      document.addEventListener('click', event => this.handleDocumentClick(event), false)
    },
    unregisterClickOutsideListener () {
      document.removeEventListener('click', event => this.handleDocumentClick(event), false)
    },
    handleDocumentClick (event) {
      let vm = event.target
      const clickedDropdowns = [] // Array because dropdowns can be nested.
      while (vm) {
        if (!vm.$options) {
          break
        }
        if (vm.$options.name === 'va-dropdown-popper') {
          clickedDropdowns.push(vm)
        }
        vm = vm.parent
      }

      // console.log('clickedDropdowns', clickedDropdowns)
      if (!clickedDropdowns.includes(this)) {
        this.onClickOutside()
      }
    },
    // onClickOutside () {
    //   console.log('onClickOutside', onClickOutside)
    // },
    hide () {
      if (this.trigger === 'click') {
        this.isClicked = false
      }
    },
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
@import '../../vuestic-sass/resources/resources';

.va-dropdown-popper {
  &__content {
    // TODO Not needed.
    background-color: $white;
  }
}
</style>
