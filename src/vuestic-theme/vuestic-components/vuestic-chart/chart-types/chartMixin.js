import { mixins } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export const chartMixin = {
  mixins: [mixins.reactiveProp],
  props: ['data', 'chartOptions'],
  mounted () {
    this.refresh()
  },
  methods: {
    refresh () {
      this.renderChart(this.chartData, this.options)
    }
  },
  computed: {
    options () {
      return Object.assign({}, DefaultOptions, this.chartOptions)
    }
  },
}
