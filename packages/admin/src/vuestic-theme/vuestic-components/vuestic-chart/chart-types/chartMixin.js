import { mixins } from 'vue-chartjs'
import { defaultConfig } from '../VuesticChartConfigs'

export const chartMixin = {
  mixins: [mixins.reactiveProp],
  props: ['data', 'chartOptions'],
  mounted () {
    this.refresh()
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
}
