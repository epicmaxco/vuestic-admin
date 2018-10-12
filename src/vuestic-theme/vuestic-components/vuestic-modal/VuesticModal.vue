<template>
  <div class="vuestic-modal">
    <transition name="modal" :duration="duration">
      <div v-show="show" class="modal-container">
        <div class="modal" @click.self="clickMask">
          <div class="modal-dialog" :class="modalClass">
            <div class="modal-content">
              <!--Header-->
              <div class="modal-header">
                <slot name="header">
                  <div class="modal-title">
                    <slot name="title"></slot>
                  </div>

                  <i
                    class="ion ion-md-close close-modal"
                    v-if="closeIconShown"
                    @click.prevent="cancel"
                  />
                </slot>
              </div>
              <!--Container-->
              <div class="modal-body">
                <slot></slot>
              </div>
              <!--Footer-->
              <div class="modal-footer">
                <slot name="footer">
                  <button type="button" v-if="!noButtons" :class="okClass"
                          @click="ok" :disabled="okDisabled">
                    {{ okText }}
                  </button>
                  <button type="button" v-if="!noButtons" :class="cancelClass"
                          @click="cancel" :disabled="cancelDisabled">
                    {{ cancelText }}
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-backdrop"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'vuestic-modal',
  props: {
    transition: {
      type: String,
      default: 'modal',
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    force: {
      type: Boolean,
      default: false,
    },
    okText: {
      type: String,
      default: 'CONFIRM',
    },
    cancelText: {
      type: String,
      default: 'CANCEL',
    },
    okClass: {
      type: String,
      default: 'btn btn-primary',
    },
    cancelClass: {
      type: String,
      default: 'btn btn-secondary',
    },
    closeIconShown: {
      type: Boolean,
      default: true,
    },
    okDisabled: {
      type: Boolean,
      default: false,
    },
    cancelDisabled: {
      type: Boolean,
      default: false,
    },
    noButtons: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      show: false,
      duration: 500,
    }
  },
  computed: {
    modalClass () {
      return {
        'modal-lg': this.large,
        'modal-sm': this.small,
      }
    },
  },
  created () {
    if (this.show) {
      document.body.className += ' modal-open'
    }
  },
  beforeDestroy () {
    document.body.className = document.body.className.replace(/\s?modal-open/, '')
  },
  watch: {
    show (value) {
      if (value) {
        document.body.className += ' modal-open'
      } else {
        window.setTimeout(() => {
          document.body.className = document.body.className.replace(/\s?modal-open/, '')
        }, this.duration)
      }
    },
  },
  methods: {
    listenKeyUp (event) {
      if (event.key === 'Escape') {
        this.cancel()
      }
    },
    ok () {
      this.$emit('ok')
      this.show = false
      window.removeEventListener('keyup', this.listenKeyUp)
    },
    cancel () {
      this.$emit('cancel')
      this.show = false
      window.removeEventListener('keyup', this.listenKeyUp)
    },
    clickMask () {
      if (!this.force) {
        this.cancel()
      }
    },
    open () {
      this.show = true
      window.addEventListener('keyup', this.listenKeyUp)
    },
    close () {
      this.show = false
      window.removeEventListener('keyup', this.listenKeyUp)
    },
  },
}
</script>

<style lang="scss">
//Modals
$modal-header-padding-x: $widget-padding;
$modal-header-padding-y: 0;
$modal-header-height: $widget-header-height;
$modal-header-border: $widget-header-border;
$modal-content-border-width: 0;
$modal-content-border-radius: 0;
$modal-inner-padding: 25px;
$modal-footer-btns-padding-bottom: 20px;
$modal-footer-btns-margin-x: 10px;
$modal-md: 650px;
$modal-lg: 850px;

.vuestic-modal {
  height: 0;
  width: 0;

  // For Transitioning
  .modal {
    display: block;
  }

  .modal-dialog, .modal-backdrop {
    transition: all .5s ease;
  }

  .modal-enter .modal-dialog, .modal-leave-active .modal-dialog {
    opacity: 0;
    transform: translateY(-30%);
  }

  .modal-enter .modal-backdrop, .modal-leave-active .modal-backdrop {
    opacity: 0;
  }

  .modal-backdrop {
    opacity: 0.5;
  }

  //Modal styles

  .modal-header {
    height: $modal-header-height;
    padding: $modal-header-padding-y $modal-header-padding-x;
    border-bottom: $modal-header-border;
    font-size: $font-size-larger;
    display: flex;
    align-items: center;
  }

  .close-modal {
    margin-left: 1rem;
    font-size: $font-size-large;
    line-height: $font-size-large;
    cursor: pointer;
  }

  .modal-content {
    border-radius: $modal-content-border-radius;
  }

  .modal-footer {
    justify-content: center;
    padding: 0 $modal-inner-padding;
    padding-bottom: calc(#{$modal-inner-padding} - #{$modal-footer-btns-padding-bottom});
    flex-wrap: wrap;
    .btn {
      margin: 0 $modal-footer-btns-margin-x $modal-footer-btns-padding-bottom $modal-footer-btns-margin-x;
    }
  }

  .modal-dialog {
    box-shadow: $modal-content-box-shadow-sm-up;
  }
}
</style>
