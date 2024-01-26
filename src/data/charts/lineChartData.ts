import { TLineChartData } from '../types'

export const lineChartData: TLineChartData = {
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
      label: 'Monthly Earnings',
      backgroundColor: 'rgba(75,192,192,0.4)',
      data: [10, 35, 14, 17, 12, 40, 75, 55, 30, 51, 25, 7], // Random values
    },
  ],
}
