<template>
  <transition name="modal" :duration="duration">
    <div v-show="show" class="modal-container">
      <div class="modal" @click.self="clickMask">
        <div class="modal-dialog" :class="modalClass">
          <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
              <slot name="header">
                <!--<a type="button" class="close" @click="cancel">x</a>-->
                <h4 class="modal-title">
                  <slot name="title"></slot>
                </h4>
              </slot>
            </div>
            <!--Container-->
            <div class="modal-body">
              <slot></slot>
            </div>
            <!--Footer-->
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      transition: {
        type: String,
        default: 'modal'
      },
      small: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      },
      full: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        show: false,
        duration: 500
      }
    },
    computed: {
      modalClass () {
        return {
          'modal-lg': this.large,
          'modal-sm': this.small,
          'modal-full': this.full
        }
      }
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
      }
    },
    methods: {
      ok () {
        this.$emit('ok')
        if (this.closeWhenOK) {
          this.show = false
        }
      },
      cancel () {
        this.$emit('cancel')
        this.show = false
      },
      clickMask () {
        this.cancel()
      },
      open () {
        this.show = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";

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
</style>
