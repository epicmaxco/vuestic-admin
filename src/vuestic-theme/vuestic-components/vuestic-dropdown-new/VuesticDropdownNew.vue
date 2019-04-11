<template>
  <div>
    <slot name="activator">
      <div>Activator</div>
    </slot>
    <transition :name="noFade ? '' : 'dropdown'" mode="out-in">
      <div
        v-show="isVisible"
        ref="dropdown"
        :style="dropdownStyles"
        class="vuestic-dropdown-new"
      >
        <slot>{{ message }}</slot>
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
    position: {
      type: String,
      default: 'T',
      validator: position => availablePositions.indexOf(position) >= 0,
    },
    triggerMode: {
      type: String,
      default: 'click',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: [String, Number],
    },
    maxHeight: {
      type: [String, Number],
    },
    noFade: Boolean,
    message: String,
  },
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      offset: 5,
    }
  },
  computed: {
    showMessage () {
      return !!this.message || !!this.$slots.default
    },
    dropdownStyles () {
      const styles = {}
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
      styles.zIndex = 8000 + this.countNesting()
      return styles
    },
    isVisible () {
      return !this.disabled && this.visible
    },
    isOnClick () {
      return this.triggerMode.indexOf('click') >= 0
    },
    isOnFocus () {
      return this.triggerMode.indexOf('focus') >= 0
    },
    isOnHover () {
      return this.triggerMode.indexOf('hover') >= 0
    },
  },
  mounted () {
    if (!this.$slots.activator) {
      return
    }

    this.parentElement = this.$el.parentNode
    this.targetElement = this.$slots.activator[0].elm
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
    calculatePosition (forse = false) {
      if (!forse && !this.isVisible) {
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

      const previousTop = this.top
      const previousLeft = this.left

      let left = 0
      let top = 0
      switch (this.position) {
        case 'T':
          top = tTop - dHeight - this.offset
          left = tLeft - (dWidth - tWidth) / 2
          break
        case 'B':
          top = tTop + tHeight + this.offset
          left = tLeft - (dWidth - tWidth) / 2
          break
        case 'L':
          top = tTop - (dHeight - tHeight) / 2
          left = tLeft - dWidth - this.offset
          break
        case 'R':
          top = tTop - (dHeight - tHeight) / 2
          left = tLeft + tWidth + this.offset
          break
        case 'TL':
          top = tTop - dHeight - this.offset
          left = tLeft
          break
        case 'TR':
          top = tTop - dHeight - this.offset
          left = tLeft - (dWidth - tWidth)
          break
        case 'BR':
          top = tTop + tHeight + this.offset
          left = tLeft - (dWidth - tWidth)
          break
        case 'BL':
          top = tTop + tHeight + this.offset
          left = tLeft
          break
        default:
          top = tTop + tHeight - this.offset
          left = tLeft - (dWidth - tWidth)
          break
      }
      this.left = `${Math.max(left, 0)}px`
      this.top = `${Math.max(top, 0)}px`
      if (forse && (this.top !== previousTop || this.left !== previousLeft)) {
        this.$nextTick(this.calculatePosition)
      }
    },
    toggle (event) {
      if (this.isVisible) {
        this.hide()
      } else {
        this.show()
      }
    },
    show () {
      this.visible = true
      this.$nextTick(() => {
        this.calculatePosition(true)
        this.registerOutsideClick()
      })
    },
    hide () {
      this.visible = false
      this.killOutSideClick()
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
    countNesting () {
      let target = this.targetElement
      let count = 0
      while (target) {
        if (target.classList && target.classList.contains('vuestic-dropdown-new')) {
          count += 1
        }
        target = target.parentNode
      }
      return count
    },
    registerOutsideClick () {
      this.outsideClickListener = event => {
        this.close(event)
      }
      document.addEventListener('click', this.outsideClickListener)
    },
    killOutSideClick () {
      document.removeEventListener('click', this.outsideClickListener)
    },
  },
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
