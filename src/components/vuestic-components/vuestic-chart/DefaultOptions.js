import store from 'vuex-store'

let palette = store.getters.palette

export default {
  legend: {
    position: 'bottom',
    labels: {
      fontColor: palette.fontColor,
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
