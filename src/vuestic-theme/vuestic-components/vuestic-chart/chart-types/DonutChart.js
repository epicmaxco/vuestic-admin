import { Doughnut } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default Doughnut.extend({
  props: ['data', 'options'],

  data () {
    return {
      defaultOptions: {

      }
    }
  },

  mounted () {
    let options = Object.assign({}, DefaultOptions, this.defaultOptions, this.options)
    this.renderChart(this.data, options)
  }
})
