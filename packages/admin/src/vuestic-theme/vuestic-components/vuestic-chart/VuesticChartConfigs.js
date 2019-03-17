import store from 'vuex-store'

let palette = store.getters.palette

export const defaultConfig = {
  legend: {
    position: 'bottom',
    labels: {
      fontColor: palette.fontColor,
      fontFamily: 'sans-serif',
      fontSize: 14,
      padding: 20,
      usePointStyle: true,
    },
  },
  tooltips: {
    bodyFontSize: 14,
    bodyFontFamily: 'sans-serif',
  },
  responsive: true,
  maintainAspectRatio: false,
}

export const chartTypesMap = {
  pie: 'pie-chart',
  donut: 'donut-chart',
  bubble: 'bubble-chart',
  line: 'line-chart',
  'horizontal-bar': 'horizontal-bar-chart',
  'vertical-bar': 'vertical-bar-chart',
}

export const chartTypes = Object.keys(chartTypesMap)
