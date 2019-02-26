<template>
  <transition :name="noFade ? '' : 'dropdown'" mode="out-in">
    <div
      v-show="isVisible"
      :style="dropdownStyles"
      class="vuestic-dropdown"
      @click="handleClick"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
    >
      <div v-if="showTitle" class="vuestic-dropdown__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="showMessage" class="vuestic-dropdown__content">
        <slot>{{ message }}</slot>
      </div>
    </div>
  </transition>
</template>

<script>
const availablePositions = ['T', 'TR', 'R', 'BR', 'B', 'BL', 'L', 'TL']

export default {
  name: 'vuestic-dropdown-new',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'T',
      validator: position => availablePositions.indexOf(position) >= 0
    },
    triggerMode: {
      type: String,
      default: 'click'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: [String, Number]
    },
    maxHeight: {
      type: [String, Number]
    },
    absolute: {
      type: Boolean,
      default: false
    },
    target: {
      type: String
    },
    noFade: Boolean,
    title: String,
    message: String
  },
  data () {
    return {
      visible: false,
      top: 0,
      left: 0
    }
  },
  computed: {
    showTitle () {
      return !!this.title || !!this.$slots.title
    },
    showMessage () {
      return !!this.message || !!this.$slots.default
    },
    dropdownStyles () {
      const styles = {}
      styles.position = this.absolute ? 'absolute' : 'fixed'
      if (this.maxWidth) {
        styles.maxWidth = Number.isInteger(this.maxWidth)
          ? `${this.maxWidth}px`
          : this.maxWidth
      }
      if (this.maxHeight) {
        styles.maxHeight = Number.isInteger(this.maxHeight)
          ? `${this.maxHeight}px`
          : this.maxHeight
      }
      styles.top = this.top
      styles.left = this.left
      return styles
    },
    isVisible () {
      return !this.disabled && (this.value || this.visible)
    },
    isOnClick () {
      return this.triggerMode.indexOf('click') >= 0
    },
    isOnFocus () {
      return this.triggerMode.indexOf('focus') >= 0
    },
    isOnHover () {
      return this.triggerMode.indexOf('hover') >= 0
    }
  },
  watch: {
    value: function (val) {
      this.$nextTick(() => {
        this.calculatePosition()
      })
    }
  },
  mounted () {
    this.targetElement = document.getElementById(this.target)
    this.$el.parentNode.removeChild(this.$el)
    document.body.appendChild(this.$el)
    this.calculatePosition()
    if (this.isOnClick) {
      this.targetElement.addEventListener('click', this.toggle)
    }
    if (this.isOnFocus) {
      this.targetElement.addEventListener('focus', this.show)
      this.targetElement.addEventListener('blur', this.hide)
    }
    if (this.isOnHover) {
      this.targetElement.addEventListener('mouseover', this.show)
      this.targetElement.addEventListener('mouseout', this.hide)
    }
  },
  beforeDestroy () {
    if (this.isOnClick) {
      this.targetElement.removeEventListener('click', this.toggle)
    }
    if (this.isOnFocus) {
      this.targetElement.removeEventListener('focus', this.show)
      this.targetElement.removeEventListener('blur', this.hide)
    }
    if (this.isOnHover) {
      this.targetElement.removeEventListener('mouseover', this.show)
      this.targetElement.removeEventListener('mouseout', this.hide)
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('onClick', event)
    },
    handleMouseover (event) {
      this.$emit('onMouseEnter', event)
    },
    handleMouseleave (event) {
      this.$emit('onMouseLeave', event)
    },
    calculatePosition () {
      const tRect = this.targetElement.getBoundingClientRect()
      const tHeight = tRect.height
      const tWidth = tRect.width
      const tTop = tRect.top
      const tLeft = tRect.left
      const dRect = this.$el.getBoundingClientRect()
      const dWidth = dRect.width
      const dHeight = dRect.height
      switch (this.position) {
        case 'T':
          this.top = `${tTop - dHeight}px`
          this.left = `${tLeft - (dWidth - tWidth) / 2}px`
          break
        case 'B':
          this.top = `${tTop + tHeight}px`
          this.left = `${tLeft - (dWidth - tWidth) / 2}px`
          break
        case 'L':
          this.top = `${tTop - (dHeight - tHeight) / 2}px`
          this.left = `${tLeft - dWidth}px`
          break
        case 'R':
          this.top = `${tTop - (dHeight - tHeight) / 2}px`
          this.left = `${tLeft + tWidth}px`
          break
        case 'TL':
          this.top = `${tTop - dHeight}px`
          this.left = `${tLeft}px`
          break
        case 'TR':
          this.top = `${tTop - dHeight}px`
          this.left = `${tLeft - (dWidth - tWidth)}px`
          break
        case 'BR':
          this.top = `${tTop + tHeight}px`
          this.left = `${tLeft - (dWidth - tWidth)}px`
          break
        case 'BL':
          this.top = `${tTop + tHeight}px`
          this.left = `${tLeft}px`
          break
        default:
          this.top = `${tTop + tHeight}px`
          this.left = `${tLeft - (dWidth - tWidth)}px`
          break
      }
    },
    toggle () {
      this.visible = !this.visible
      this.$nextTick(() => {
        this.calculatePosition()
      })
    },
    show () {
      this.visible = true
      this.$nextTick(() => {
        this.calculatePosition()
      })
    },
    hide () {
      this.visible = false
      this.$nextTick(() => {
        this.calculatePosition()
      })
    }
  }
}
</script>

<style lang="scss">
.vuestic-dropdown {
  position: fixed;
  padding: 0 0.4rem;
  max-width: 400px;
  font-family: Source Sans Pro, sans-serif;
  overflow: auto;
  box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
  border-radius: 3px;
  background: $darkest-gray;
  color: #fff;
  z-index: 10000;
  border-radius: 0.5rem;
  word-wrap: break-word;

  &--absolute {
    position: absolute;
  }
  &__title {
    font-weight: bold;
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s;
}

.dropdown-enter,
.dropdown-leave-to
 {
  opacity: 0;
}
</style>
