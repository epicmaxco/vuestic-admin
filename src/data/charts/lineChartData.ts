import { TLineChartData } from '../types'

export const lineChartData: TLineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Earnings',
      backgroundColor: 'rgba(75,192,192,0.4)',
      data: [65, 59, 80, 81, 56, 55, 40], // Random values
    },
  ],
}
