<template>
  <div>
    <slot name="actuator">
      <div>Actuator</div>
    </slot>
    <transition :name="noFade ? '' : 'dropdown'" mode="out-in">
      <div
        v-show="isVisible"
        ref="dropdown"
        :style="dropdownStyles"
        class="vuestic-dropdown-new"
        @click="handleClick"
        @mouseover="handleMouseover"
        @mouseleave="handleMouseleave"
      >
        <div v-if="showTitle" class="vuestic-dropdown-new__title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="showMessage" class="vuestic-dropdown-new__content">
          <slot>{{ message }}</slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import _ from 'lodash'
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
    if (!this.$slots.actuator) {
      return
    }

    this.parentElement = this.$el.parentNode
    this.targetElement = this.$slots.actuator[0].elm
    this.parentElement.insertBefore(this.targetElement, this.$el)
    this.$el.removeChild(this.$refs.dropdown)
    document.body.appendChild(this.$refs.dropdown)
    this.parentElement.removeChild(this.$el)

    this.throttleCalcPositon = _.throttle(() => {
      this.calculatePosition()
    }, 200)

    this.calculatePosition()
    window.addEventListener('resize', this.throttleCalcPositon)
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
    this.$el.appendChild(this.targetElement)
    this.$el.appendChild(this.$refs.dropdown)

    window.removeEventListener('resize', this.throttleCalcPositon)
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
      if (!this.isVisible) {
        return
      }
      const tRect = this.targetElement.getBoundingClientRect()
      const tHeight = tRect.height
      const tWidth = tRect.width
      const tTop = tRect.top
      const tLeft = tRect.left
      const dRect = this.$refs.dropdown.getBoundingClientRect()
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
    toggle (event) {
      // event.stopPropagation();
      if (this.isVisible) {
        this.hide()
      } else {
        this.show()
      }
    },
    show () {
      this.visible = true
      this.$nextTick(() => {
        this.calculatePosition()
        this.registerOutsideClick()
      })
    },
    hide () {
      this.visible = false
      this.killOutSideClick()
      // this.$nextTick(() => {
      //   this.calculatePosition();
      // });
    },
    close (event) {
      if (!this.targetIsInsideElement(event)) {
        this.hide()
      }
    },
    targetIsInsideElement (e) {
      let target = e.target
      if (target) {
        do {
          if (target === this.$refs.dropdown || target === this.targetElement) {
            return true
          }
        } while ((target = target.parentNode))
      }
      return false
    },
    registerOutsideClick () {
      this.outsideClickListener = event => {
        this.close(event)
      }
      document.addEventListener('click', this.outsideClickListener)
    },
    killOutSideClick () {
      document.removeEventListener('click', this.outsideClickListener)
    }
  }
}
</script>

<style lang="scss">
.vuestic-dropdown-new {
  position: fixed;
  padding: 0 0.4rem;
  max-width: 400px;
  font-family: Source Sans Pro, sans-serif;
  box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
  border-radius: 3px;
  background: #fff;
  z-index: 8000;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100vw;
  outline: 0;
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
  transition: opacity 0.15s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}
</style>
