import { Bubble } from 'vue-chartjs'
import { chartMixin } from './chartMixin'

export default {
  extends: Bubble,
  mixins: [chartMixin],
}
