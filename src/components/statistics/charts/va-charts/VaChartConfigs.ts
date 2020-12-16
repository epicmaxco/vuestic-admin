export const defaultConfig = {
  legend: {
    position: 'bottom',
    labels: {
      fontColor: '#34495e',
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
