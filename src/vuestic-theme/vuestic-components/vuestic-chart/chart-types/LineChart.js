import { Line, mixins } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default {
  extends: Line,
  props: ['chartData', 'options'],
  mixins: [mixins.reactiveProp],
  data () {
    return {
      defaultOptions: {},
    }
  },
  mounted () {
    let options = Object.assign({}, DefaultOptions, this.defaultOptions, this.options)
    this.renderChart(this.chartData, options)
  },
}
