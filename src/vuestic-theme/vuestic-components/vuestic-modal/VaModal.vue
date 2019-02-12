<template>
<div
  v-if="value"
  class="va-modal__overlay"
  @click="checkOutside"
>
  <transition name="modal">
    <div
      class="va-modal"
      :class="computedClass"
      v-if="value"
      :style="{maxWidth, maxHeight}"
    >
      <i
        v-if="closeButton || fullscreen"
        @click="cancel"
        class="ion ion-md-close va-modal__close"
      />
      <div class="va-modal__inner" :style="{maxHeight, maxWidth}">
        <div v-if="title" class="va-modal__title">{{title}}</div>
        <div v-if="hasHeaderSlot" class="va-modal__header"><slot name="header"/></div>
        <div v-if="message" class="va-modal__message">{{message}}</div>
        <div v-if="hasContentSlot" class="va-modal__content">
          <slot/>
        </div>
        <div v-if="cancelText || okText" class="va-modal__actions">
          <button v-if="cancelText" class="btn btn-secondary btn-micro" @click="cancel">{{cancelText}}</button>
          <button class="btn btn-primary btn-micro" @click="ok">{{okText}}</button>
        </div>
        <div v-if="hasActionsSlot" class="va-modal__actions"><slot name="actions"/></div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'va-modal',
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
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['medium', 'small', 'large'].includes(value)
      }
    },
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
        'va-modal--fullscreen': this.fullscreen,
        'va-modal--mobile-fullscreen': this.mobileFullscreen,
        [`va-modal--position-${this.position}`]: this.position,
        'va-modal--fixed-layout': this.fixedLayout,
        [`va-modal--size-${this.size}`]: this.size !== 'medium'
      }
    },
    hasContentSlot () {
      return this.$slots.default
    },
    hasHeaderSlot () {
      return this.$slots.header
    },
    hasActionsSlot () {
      return this.$slots.actions
    }
  },
  watch: {
    value (value) {
      if (value) {
        document.body.appendChild(this.$el)
        window.addEventListener('keyup', this.listenKeyUp)
      } else {
        document.body.removeChild(this.$el)
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
          if (node.classList && node.classList.contains('va-modal')) {
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
.va-modal {
  &__overlay {
    z-index: 1000;
    position: absolute !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-of-type {
      background-color: rgba(0,0,0,0.6);
    }
  }
  background: #fff;
  min-height: 50px;
  height: fit-content;
  border-radius: 6px;
  margin: 1rem;
  box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.25);
  max-width: 600px;
  max-height: 100vh;
  transition: all .5s ease;
  &--fullscreen {
    min-width: 100vw !important;
    height: 100vh !important;
    border-radius: 0;
    margin: 0;
  }
  &--mobile-fullscreen {
    @media all and (max-width: map-get($grid-breakpoints, sm)) {
      min-width: 100vw !important;
      height: 100vh !important;
      border-radius: 0;
      position: fixed;
      margin: 0;
      .va-modal__actions {
        .btn {
          margin: 0 0 20px 0;
          width: 100%;
        }
      }
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

  &--position {
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
  &--size {
    &-small {
      max-width: 300px;
      .va-modal__inner {
        max-width: 300px;
        .va-modal__actions .btn {
          margin-right: 4px;
          margin-bottom: 4px;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
    &-large {
      max-width: 800px;
      .va-modal__inner {
        max-width: 800px;
      }
    }
  }
  &_fixed-layout {
    .va-modal__inner {
      overflow: hidden;
      .va-modal__message {
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
    flex-wrap: wrap;
    justify-content: center;
    margin-top: auto;
    min-height: 36px;
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 0;
    }
    .btn {
      margin-right: 20px;
      &:last-of-type {
        margin-tight: 0;
      }
    }
  }
}
</style>
