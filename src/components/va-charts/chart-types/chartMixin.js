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
  
  /**
   * Fix for vue3. Wait for vue-chartjs package will fix this.
   * 
   * Problem: they use old vue2 style in their mixin:
   * ```vue
   *  render: function(h) {
   *    return h('div')
   *  }
   * ```
   * 
   * In vue3 we need to use `createElement` from 'vue' package.
   */
  render: function () {
    return createElement(
      'div', {
        style: this.styles,
        class: this.cssClasses
      },
      [
        createElement(
          'canvas', {
            id: this.chartId,
            ref: 'canvas'
          }
        )
      ]
    )
  },
}
