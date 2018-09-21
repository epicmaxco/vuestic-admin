import { Bar } from 'vue-chartjs'
import { chartMixin } from './chartMixin'

export default {
  extends: Bar,
  mixins: [chartMixin],
}
