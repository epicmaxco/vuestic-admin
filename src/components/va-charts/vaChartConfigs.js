import { defineAsyncComponent } from 'vue'

const DEFAULT_FONT_FAMILY = "'Inter', sans-serif"

export const defaultConfig = {
  scales: {
    x: {
      ticks: {
        font: {
          family: DEFAULT_FONT_FAMILY,
        },
      },
    },
    y: {
      ticks: {
        font: {
          family: DEFAULT_FONT_FAMILY,
        },
      },
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          color: '#34495e',
          family: DEFAULT_FONT_FAMILY,
          size: 14,
        },
        usePointStyle: true,
      },
    },
    tooltip: {
      bodyFont: {
        size: 14,
        family: DEFAULT_FONT_FAMILY,
      },
      boxPadding: 4,
    },
  },
  datasets: {
    line: {
      fill: 'origin',
      tension: 0.3,
      borderColor: 'transparent',
    },
    bubble: {
      borderColor: 'transparent',
    },
    bar: {
      borderColor: 'transparent',
    },
  },
  maintainAspectRatio: false,
  animation: true,
}

export const chartTypesMap = {
  pie: defineAsyncComponent(() => import('./chart-types/PieChart.vue')),
  doughnut: defineAsyncComponent(() => import('./chart-types/DoughnutChart.vue')),
  bubble: defineAsyncComponent(() => import('./chart-types/BubbleChart.vue')),
  line: defineAsyncComponent(() => import('./chart-types/LineChart.vue')),
  bar: defineAsyncComponent(() => import('./chart-types/BarChart.vue')),
  'horizontal-bar': defineAsyncComponent(() => import('./chart-types/HorizontalBarChart.vue')),
}
