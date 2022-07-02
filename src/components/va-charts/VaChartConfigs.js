import { defineAsyncComponent } from 'vue'

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
  animation: false,
}

// // These are used, but eslint won't understand it because they're used as dynamic components
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import PieChart from
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import BubbleChart from './chart-types/BubbleChart'
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import DonutChart from
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import HorizontalBarChart from './chart-types/HorizontalBarChart'
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import VerticalBarChart from './chart-types/VerticalBarChart'
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import LineChart from './chart-types/LineChart'

export const chartTypesMap = {
  pie: defineAsyncComponent(() => import('./chart-types/PieChart')),
  donut: defineAsyncComponent(() => import('./chart-types/DonutChart')),
  bubble: defineAsyncComponent(() => import('./chart-types/BubbleChart')),
  line: defineAsyncComponent(() => import('./chart-types/LineChart')),
  'horizontal-bar': defineAsyncComponent(() => import('./chart-types/HorizontalBarChart')),
  'vertical-bar': defineAsyncComponent(() => import('./chart-types/VerticalBarChart')),
}
