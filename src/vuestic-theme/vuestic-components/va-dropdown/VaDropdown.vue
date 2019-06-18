<template>
  <div class="va-dropdown-popper">
    <div
      class="va-dropdown-popper__anchor"
      @mouseover="onMouseOver()"
      @mouseout="onMouseOut()"
      @click="onAnchorClick()"
      ref="anchor"
    >
      <slot name="anchor"/>
    </div>
    <div
      class="va-dropdown-popper__content"
      v-if="showContent"
      @mouseover="isContentHoverable && onMouseOver()"
      @mouseout="onMouseOut()"
      ref="content"
      :style="contentStyle"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js'
import { DebounceLoader } from 'asva-executors'

export default {
  name: 'va-dropdown',
  data () {
    return {
      popperInstance: null,
      isClicked: false,

      isMouseHovered: false,
      hoverOverDebounceLoader: new DebounceLoader(
        async () => {
          this.isMouseHovered = true
        },
        this.hoverOverTimeout,
      ),
      hoverOutDebounceLoader: new DebounceLoader(
        async () => {
          this.isMouseHovered = false
        },
        this.hoverOutTimeout,
      ),
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
    showContent: {
      immediate: true,
      handler (showContent) {
        if (showContent && !this.popperInstance) {
          this.$nextTick(() => {
            this.initPopper()
          })
          this.$emit('show')
          return
        }
        this.$emit('hide')
        this.removePopper()
      },
    },
  },
  props: {
    debugId: String,
    position: String,
    value: Boolean,
    offset: [String, Number],
    disabled: Boolean,
    fixed: Boolean,
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
    closeOnAnchorClick: {
      type: Boolean,
      default: true,
    },
    isContentHoverable: {
      type: Boolean,
      default: true,
    },
    trigger: {
      default: 'click',
      validator: trigger => ['click', 'hover', 'none'].includes(trigger),
    },
    hoverOverTimeout: {
      type: Number,
      default: 30,
    },
    hoverOutTimeout: {
      type: Number,
      default: 200,
    },
  },
  methods: {
    onAnchorClick () {
      this.$emit('anchorClick')
      if (this.disabled) {
        return
      }
      if (this.isClicked && !this.closeOnAnchorClick) {
        return
      }
      this.isClicked = !this.isClicked
    },
    // Kinda complex logic here.
    // We want to achieve 2 things:
    // * Fast mouse-over shouldn't trigger dropdown.
    // * Dropdown shouldn't close when you move mouse from anchor to content (even with offset).
    onMouseOver () {
      if (this.disabled) {
        return
      }
      if (!this.isMouseHovered) {
        this.hoverOverDebounceLoader.run()
      }

      this.hoverOutDebounceLoader.reset()
    },
    onMouseOut () {
      if (!this.isContentHoverable) {
        this.isMouseHovered = false
      }
      this.hoverOutDebounceLoader.run()
      this.hoverOverDebounceLoader.reset()
    },
    registerClickOutsideListener () {
      document.addEventListener('click', event => this.handleDocumentClick(event), false)
    },
    unregisterClickOutsideListener () {
      document.removeEventListener('click', event => this.handleDocumentClick(event), false)
    },
    handleDocumentClick (event) {
      let el = event.target
      const clickedElements = [] // Array because dropdowns can be nested.
      // TODO Make DOM walk-over global, so that each dropdown doesn't have to do it.
      while (el) {
        clickedElements.push(el)
        el = el.parentNode
      }
      const isCurrentDropdownClicked = clickedElements.includes(this.$refs.anchor) || clickedElements.includes(this.$refs.content)
      if (isCurrentDropdownClicked) {
        return
      }
      this.onClickOutside()
    },
    onClickOutside () {
      this.$emit('clickOutside')
      if (!this.closeOnClickOutside) {
        return
      }
      this.hide()
    },
    // @public
    hide () {
      if (this.trigger === 'click') {
        this.isClicked = false
      }
    },
    initPopper () {
      const options = {
        placement: this.position || 'bottom',
        modifiers: {},
        positionFixed: this.fixed,
        arrow: {
          enabled: false,
        },
      }

      if (this.offset) {
        options.modifiers.offset = {
          enabled: true,
          offset: this.offset,
        }
        options.modifiers.keepTogether = { enabled: false }
        options.modifiers.arrow = { enabled: false }
      }

      this.popperInstance = new Popper(
        this.$refs.anchor,
        this.$refs.content,
        options,
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
    contentStyle () {
      return {
        padding: this.offset,
      }
    },
    showContent () {
      if (this.trigger === 'hover') {
        return this.isMouseHovered
      }
      if (this.trigger === 'click') {
        return this.isClicked
      }
      if (this.trigger === 'none') {
        return this.value
      }
    },
  },
}
</script>

<style lang="scss">
@import '../../vuestic-sass/resources/resources';

.va-dropdown-popper {
  &__content {
    z-index: 100;
  }
}
</style>
