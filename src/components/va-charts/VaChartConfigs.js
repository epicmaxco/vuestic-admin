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

export const chartTypesMap = {
  pie: defineAsyncComponent(() => import('./chart-types/PieChart')),
  donut: defineAsyncComponent(() => import('./chart-types/DonutChart')),
  bubble: defineAsyncComponent(() => import('./chart-types/BubbleChart')),
  line: defineAsyncComponent(() => import('./chart-types/LineChart')),
  'horizontal-bar': defineAsyncComponent(() => import('./chart-types/HorizontalBarChart')),
  'vertical-bar': defineAsyncComponent(() => import('./chart-types/VerticalBarChart')),
}
