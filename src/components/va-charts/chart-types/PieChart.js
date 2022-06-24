import { Pie } from 'vue-chartjs'
import chartMixin from './chartMixin.js'

export default {
  mixins: [Pie, chartMixin],
}
