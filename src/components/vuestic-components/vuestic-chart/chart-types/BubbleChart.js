import { Bubble } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default Bubble.extend({
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
