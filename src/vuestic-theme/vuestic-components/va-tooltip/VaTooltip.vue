<template>
  <span class="va-tooltip-target" v-tooltip="tooltipOptions">
      <slot></slot>
  </span>
</template>

<script>
import { VTooltip } from 'v-tooltip'

export default {
  name: 'va-tooltip',

  directives: { tooltip: VTooltip },

  computed: {
    tooltipOptions () {
      return Object.assign({}, this.defaultOptions, this.options)
    },
  },

  props: {
    options: {
      type: Object,
      default: () => [],
    },
  },

  data () {
    return {
      defaultOptions: {
        classes: 'va-tooltip',
      },
    }
  },
}
</script>

<style lang='scss' scoped>

</style>
