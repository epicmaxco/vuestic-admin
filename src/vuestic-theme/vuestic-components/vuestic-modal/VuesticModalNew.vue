<template>
<div
  v-show="valueProxy"
  class="vuestic-modal-new__overlay"
  @click="checkOutside"
>
  <transition name="modal">
    <div
      class="vuestic-modal-new"
      :class="computedClass"
      v-show="valueProxy"
      :style="{maxWidth, maxHeight}"
    >
      <i
        v-if="closeButton || fullscreen"
        @click="cancel"
        class="ion ion-md-close vuestic-modal-new__close"
      />
      <div class="vuestic-modal-new__inner" :style="{maxHeight, maxWidth}">
        <div v-if="title" class="vuestic-modal-new__title">{{title}}</div>
        <div v-if="hasHeaderSlot" class="vuestic-modal-new__header"><slot name="header"/></div>
        <div v-if="message" class="vuestic-modal-new__message">{{message}}</div>
        <div v-if="hasContentSlot" class="vuestic-modal-new__content">
          <slot/>
        </div>
        <div v-if="cancelText || okText" class="vuestic-modal-new__actions">
          <button v-if="cancelText" class="btn btn-secondary btn-micro" @click="cancel">{{cancelText}}</button>
          <button class="btn btn-primary btn-micro" @click="ok">{{okText}}</button>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'vuestic-modal-new',
  props: {
    value: {
      required: true,
      default: false
    },
    position: {
      type: String,
      validator: function (value) {
        return ['center', 'top', 'right', 'bottom', 'left'].includes(value)
      }
    },
    title: String,
    message: String,
    okText: {
      type: String,
      default: 'OK'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    fullscreen: Boolean,
    mobileFullscreen: {
      type: Boolean,
      default: true
    },
    noOutsideDismiss: Boolean,
    noEscDismiss: Boolean,
    maxWidth: String,
    maxHeight: String,
    fixedLayout: Boolean,
    onOk: Function,
    onCancel: Function
  },
  computed: {
    valueProxy: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
    computedClass () {
      return {
        'vuestic-modal-new_fullscreen': this.fullscreen,
        'vuestic-modal-new_mobile-fullscreen': this.mobileFullscreen,
        [`vuestic-modal-new_position-${this.position}`]: this.position,
        'vuestic-modal-new_fixed-layout': this.fixedLayout
      }
    },
    hasContentSlot () {
      return this.$slots.default
    },
    hasHeaderSlot () {
      return this.$slots.header
    }
  },
  watch: {
    valueProxy (value) {
      if (value) {
        window.addEventListener('keyup', this.listenKeyUp)
      } else {
        window.removeEventListener('keyup', this.listenKeyUp)
      }
    },
  },
  methods: {
    close () {
      this.valueProxy = false
    },
    cancel () {
      this.close()
      this.$emit('cancel')
    },
    ok () {
      this.close()
      this.$emit('ok')
    },
    checkOutside (e) {
      if (!this.noOutsideDismiss) {
        let modal
        e.target.childNodes.forEach(node => {
          if (node.classList && node.classList.contains('vuestic-modal-new')) {
            modal = node
          }
        })
        if (modal) {
          this.cancel()
        }
      }
    },
    listenKeyUp (e) {
      if (e.code === 'Escape' && !this.noEscDismiss) {
        this.cancel()
      }
    }
  }
}
</script>

<style lang="scss">
.vuestic-modal-new {
  &__overlay {
    background-color: rgba(0,0,0,0.6);
    z-index: 1000;
    position: absolute !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
  }
  background: #fff;
  position: absolute;
  margin: auto;
  min-height: 50px;
  height: fit-content;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 6px;
  box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.25);
  max-width: 600px;
  max-height: 100vh;
  transition: all .5s ease;
  &_fullscreen {
    min-width: 100vw !important;
    height: 100vh !important;
    border-radius: 0;
  }
  &_mobile-fullscreen {
    @media all and (max-width: map-get($grid-breakpoints, sm)) {
      min-width: 100vw !important;
      height: 100vh !important;
      border-radius: 0;
    }
  }

  &.modal-enter,
  &.modal-leave-to
  {
    opacity: 0;
    transform: translateY(-30%);
  }

  &.modal-enter-active {
    transition: all .3s ease;
  }
  &.modal-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  &_position{
    &-top {
      bottom: auto;
      margin: 1rem auto;
    }
    &-right {
      left: auto;
      margin: auto 1rem;
    }
    &-bottom {
      top: auto;
      margin: 1rem auto;
    }
    &-left {
      right: auto;
      margin: auto 1rem;
    }
  }
  &_fixed-layout {
    .vuestic-modal-new__inner {
      overflow: hidden;
      .vuestic-modal-new__message {
        overflow: auto;
      }
    }
  }
  &__inner {
    overflow: auto;
    display: flex;
    flex-flow: column;
    padding: 20px 24px 24px;
    max-height: 100vh;
    max-width: 600px;
    margin: auto;
  }
  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    font-size: 1.5rem;
    color: $brand-secondary;
  }
  &__title {
    color: $vu-info;
    font-size: 0.625rem;
    line-height: 1.2em;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    letter-spacing: 0.6px;
    margin-bottom: 24px;
  }
  &__message {
    margin-bottom: 1.5rem;
  }
  &__content {
    margin-bottom: 1.5rem;
  }
  &__actions {
    display: flex;
    justify-content: center;
    margin-top: auto;
    min-height: 36px;
    .btn {
      margin-right: 20px;
      &:last-of-type {
        margin-tight: 0;
      }
    }
  }
}
</style>
