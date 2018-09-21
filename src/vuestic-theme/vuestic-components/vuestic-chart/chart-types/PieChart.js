import { Pie } from 'vue-chartjs'
import { chartMixin } from './chartMixin'

export default {
  extends: Pie,
  mixins: [chartMixin],
}
