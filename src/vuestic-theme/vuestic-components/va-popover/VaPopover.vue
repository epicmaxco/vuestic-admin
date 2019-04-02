<template>
  <v-popover
    :popover-class="popoverClass"
    :open="open"
    :disabled="disabled"
    :placement="placement"
    :auto-hide="autoHide"
  >
    <slot name="trigger"></slot>
    <template slot="popover">
      <div class="popover-icon" v-if="isIconPresent">
        <slot name="icon"></slot>
      </div>
      <div class="popover-content">
        <div class="popover-header">
          <slot name="header"></slot>
        </div>
        <div class="popover-body">
          <slot name="body"></slot>
        </div>
      </div>
    </template>
  </v-popover>
</template>

<script>
import { VPopover } from 'v-tooltip'

export default {
  name: 'va-popover',

  components: { VPopover },

  props: {
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
      default: 'auto',
    },
    popoverClass: {
      type: [String, Array],
      default: 'va-tooltip',
    },
    autoHide: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isIconPresent () {
      return !!this.$slots.icon
    },
  },
}
</script>

<style lang='scss' scoped>

</style>
