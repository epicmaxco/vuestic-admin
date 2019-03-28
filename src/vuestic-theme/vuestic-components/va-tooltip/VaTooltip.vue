<template>
  <div class="va-tooltip">
    <span class="vuestic-tooltip-target" v-tooltip="tooltipOptions">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { VTooltip } from 'v-tooltip'

export default {
  name: 'va-tooltip',
  directives: { tooltip: VTooltip },
  props: {
    options: {
      type: Object,
      default: () => [],
    },
    color: {
      type: String,
      default: '#4ae387'
    },
    icon: {
      type: String
    },
    iconColor: {
      type: String
    },
    title: {
      type: String,
    }
  },
  data () {
    return {
      defaultOptions: {
        classes: 'vuestic-tooltip',
      },
    }
  },
  computed: {
    tooltipOptions () {
      this.templateComputed
      return Object.assign({}, this.defaultOptions, this.options)
    },
    templateComputed () {
      let title = this.title ? '<div class="tooltip-inner--title">' + this.title + '</div>' : ''
      let icon = this.icon ? '<i class="' + this.icon + ' tooltip__icon" size="40px" style="color:' + this.iconColor + '"></i>' : ''
      VTooltip.options.defaultTemplate = '' +
        '<div class="tooltip" role="tooltip" style="background-color: ' + this.color + '">' +
        icon +
        '<div class="tooltip__content">' +
        title +
        '<div class="tooltip-inner"></div>' +
        '</div>' +
        '</div>'
      VTooltip.options.defaultTemplate
    }
  }
}
</script>

<style lang="scss">

.va-tooltip {}
.tooltip.vuestic-tooltip {
  display: flex;
  border-radius: 0.5rem;
  .tooltip__content {
    padding: 0.75rem 1rem 0.75rem 0.75rem;
  }
  .tooltip__icon {
    display: flex;
    padding-left: 1rem;
    align-items: center;
    vertical-align: bottom;
  }
  .tooltip-inner {
    box-shadow: none;
    background-color: inherit;
    font-size: 1rem;
    padding: 0;
    line-height: 1.5;
    color: #34495e;
    &--title {
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .tooltip-arrow {}
}
</style>
