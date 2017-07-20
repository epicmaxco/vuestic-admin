import {Bar} from 'vue-chartjs'

export default Bar.extend({
  props: ['data', 'options'],

  data () {
    return {
      defaultOptions: {
        legend: {
          position: 'bottom',
          labels: {
            fontColor: '#34495e',
            fontFamily: 'sans-serif',
            fontSize: 14,
            padding: 20,
            usePointStyle: true
          }
        },
        tooltips: {
          bodyFontSize: 14,
          bodyFontFamily: 'sans-serif'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  mounted () {
    let options = Object.assign({}, this.defaultOptions, this.options)
    this.renderChart(this.data, options)
  }
})
