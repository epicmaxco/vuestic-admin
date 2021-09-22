import { Bar } from 'vue-chartjs'
import chartMixin from './chartMixin.js'

export default {
  mixins: [Bar, chartMixin],
}