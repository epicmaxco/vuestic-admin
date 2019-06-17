<template>
  <div class="va-dropdown">
    <div
      class="va-dropdown__anchor"
      @mouseover="onMouseOver()"
      @mouseout="onMouseOut()"
      @click="onAnchorClick()"
      ref="anchor"
    >
      <slot name="anchor"/>
    </div>
    <div
      class="va-dropdown__content"
      v-if="showContent"
      @mouseover="isContentHoverable && onMouseOver()"
      @mouseout="onMouseOut()"
      ref="content"
    >
      <div
        v-if="keepAnchorWidth"
        ref="anchorWidthContainer"
        class="va-dropdown__anchor-width-container"
        :style="anchorWidthContainerStyles"
      >
        <slot/>
      </div>
      <slot v-else/>
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
      anchorWidth: undefined,

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
  mounted () {
    this.handlePopperInstance()
  },
  watch: {
    showContent: {
      immediate: true,
      handler (showContent) {
        this.handlePopperInstance()
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
    keepAnchorWidth: Boolean, // Means dropdown width should be the same as anchor's width.
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
    handlePopperInstance () {
      if (this.popperInstance) {
        this.removePopper()
      }

      if (!this.showContent) {
        return
      }

      this.updateAnchorWidth()

      // I'm not entirely sure why $nextTick is needed here.
      this.$nextTick(() => {
        this.initPopper()
      })
    },
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
    updateAnchorWidth () {
      if (this.keepAnchorWidth) {
        this.anchorWidth = this.$refs.anchor.offsetWidth
      }
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
        onUpdate: (data) => {
          this.updateAnchorWidth()
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
    updatePopper () {
      // used by select
      if (!this.popperInstance) {
        return
      }
      this.popperInstance.update()
    },
  },
  computed: {
    anchorWidthContainerStyles () {
      return {
        width: this.anchorWidth + 'px',
        maxWidth: this.anchorWidth + 'px',
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

.va-dropdown {
  &__content {
    z-index: 100;
  }
}
</style>
