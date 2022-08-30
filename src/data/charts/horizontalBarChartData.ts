import { TBarChartData } from '../types'

export const horizontalBarChartData: TBarChartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Vuestic Satisfaction Score',
      backgroundColor: 'primary',
      data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93],
    },
    {
      label: 'Bulma Satisfaction Score',
      backgroundColor: 'danger',
      data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53],
    },
  ],
}
