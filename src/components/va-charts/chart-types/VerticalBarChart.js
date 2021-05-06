import { Bar } from 'vue-chartjs'
import chartMixin from './chartMixin.js'

export default {
  mixins: [chartMixin, Bar],
}