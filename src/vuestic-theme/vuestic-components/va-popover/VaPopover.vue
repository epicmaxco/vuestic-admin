<template>
  <v-popover
    :trigger="trigger"
    :open="open"
    :disabled="disabled"
    :placement="placement"
    :autoHide="autoHide"
    popoverClass="va-popover"
    popoverInnerClass="va-popover__inner"
    popoverWrapperClass="va-popover__wrap"
  >
    <slot />
    <div
      slot="popover"
      class="va-popover__content"
      :style="computedPopoverStyle"
    >
      <div v-if="icon" class="va-popover__icon">
        <i
          :class="icon"
          :style="computedIconStyle"
        />
      </div>
      <div v-if="title || message">
        <div v-if="title" class="va-popover__title">
          {{ title }}
        </div>
        <div class="va-popover__text">
          {{ message }}
        </div>
      </div>
    </div>
  </v-popover>
</template>

<script>
import { VPopover } from 'v-tooltip'
import {
  getHoverColor,
  getBoxShadowColor,
} from '../../../services/color-functions'

export default {
  name: 'va-popover',
  components: {
    VPopover,
  },
  props: {
    color: {
      type: String,
      default: 'success',
    },
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    trigger: {
      type: String,
      default: 'hover',
    },
    open: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    autoHide: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    computedIconStyle () {
      return {
        fontSize: '1.5rem',
        color: this.$themes[this.color],
      }
    },
    computedPopoverStyle () {
      return {
        boxShadow: '0px 2px 3px 0 ' + getBoxShadowColor(this.$themes[this.color]),
        backgroundColor: getHoverColor(this.$themes[this.color]),
      }
    },
  },
}
</script>

<style lang="scss">
  .v-popover {
    display: inline;
  }
  .va-popover {
    opacity: 1;
    border: none;
    border-radius: 0.5rem;

    &__content {
       display: flex;
       align-items: center;
       padding: 0.65rem 1rem;
       border-radius: 0.5rem;
       font-size: 1rem;
    }

    &__icon + div{
       padding-left: 0.75rem;
       width: 100%;
       overflow: hidden;
    }

    &__title {
      font-weight: bold;
      margin-bottom: 0.125rem;
    }

    &__text {
      line-height: 1.5;
    }
  }
</style>
