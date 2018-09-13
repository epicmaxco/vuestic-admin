import { Bubble, mixins } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default {
  extends: Bubble,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
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
