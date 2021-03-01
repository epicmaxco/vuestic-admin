import { mixins } from 'vue-chartjs'
import { defaultConfig } from '../VaChartConfigs'
import { h as createElement } from 'vue'

export default {
  name: 'VaChart',
  mixins: [mixins.reactiveProp],
  props: ['data', 'chartOptions'],
  mounted () {
    this.refresh()
  },
  watch: {
    '$themes.primary' () {
      this.options.animation = false
      this.refresh()
    },

    '$themes.info' () {
      this.options.animation = false
      this.refresh()
    },

    '$themes.danger' () {
      this.options.animation = false
      this.refresh()
    },
  },
  methods: {
    refresh () {
      this.renderChart(this.chartData, this.options)
    },
  },
  computed: {
    // `this.options` is used by vue-chartjs mixin on refresh.
    options () {
      return Object.assign({}, defaultConfig, this.chartOptions)
    },
  },
  // TODO: temp fix for vue3
  render: function () {
    return createElement(
      'div', {
        id: 'Hello',
        style: this.styles,
        class: this.cssClasses
      },
      [
        createElement(
          'canvas', {
            attrs: {
              id: this.chartId,
              width: this.width,
              height: this.height
            },
            ref: 'canvas'
          }
        )
      ]
    )
  },
}
