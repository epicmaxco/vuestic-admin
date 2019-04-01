<template>
  <div class="va-tooltip" v-tooltip="tooltipOptions">
    <span class="va-tooltip-target">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { VTooltip } from 'v-tooltip'
import {
  getFocusColor, getGradientBackground,
  getGradientColor,
  getHoverColor,
  getBoxShadowColor,
} from '../../../services/colors'

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
      default: 'success'
    },
    icon: {
      type: String
    },
    title: {
      type: String,
    },
    message: {
      type: String
    }
  },
  data () {
    return {
      defaultOptions: {
        classes: 'va-tooltip',
      },
    }
  },
  computed: {
    tooltipOptions () {
      VTooltip.options.defaultTemplate = this.getTemplate()
      VTooltip.options.defaultTemplate
      this.options.content = this.message
      return Object.assign({}, this.defaultOptions, this.options)
    }
  },
  methods: {
    getTemplate () {
      console.log(getHoverColor(this.color))
      let title = this.title ? '<div class="tooltip-inner--title">' + this.title + '</div>' : ''
      let icon = this.icon ? '<i class="' + this.icon + ' tooltip__icon" size="40px" ' +
        'style="color:' + this.$themes[this.color] + '; background-color: ' + getHoverColor(this.color) + '"></i>' : ''
      return '' +
        '<div class="tooltip" role="tooltip" style="box-shadow: ' + '0px 2px 3px 0 ' + getBoxShadowColor(this.color) + ' ; background-color: ' + getHoverColor(this.color) + '">' +
        '<div class="va-row" style="background-color: #fff">' +
        icon +
        '<div class="tooltip__content" style="background-color: ' + getHoverColor(this.color) + '">' +
        title +
        '<div class="tooltip-inner"></div>' +
        '</div>' +
        '</div>' +
        '</div>'
    }
  }
}
</script>

<style lang="scss">

.va-tooltip {
}

.tooltip.va-tooltip {
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
    background-color: initial;
    font-size: 1rem;
    padding: 0;
    line-height: 1.5;
    color: $vue-darkest-blue;
    &--title {
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .tooltip-arrow {
  }
}
</style>
