import { TBarChartData } from '../types'

export const barChartData: TBarChartData = {
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
      label: 'Last year',
      backgroundColor: 'primary',
      data: [50, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: 'Current year',
      backgroundColor: 'info',
      data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30],
    },
  ],
}
