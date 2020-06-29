import { Doughnut } from 'vue-chartjs'
import { chartMixin } from './chartMixin'

export default {
  extends: Doughnut,
  mixins: [chartMixin],
}
