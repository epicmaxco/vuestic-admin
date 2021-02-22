import { Line } from 'vue-chartjs'
import { chartMixin } from './chartMixin'

export default {
  extends: Line,
  mixins: [chartMixin],
}
