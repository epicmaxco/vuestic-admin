import { TDoughnutChartData } from '../types'

export const doughnutChartData: TDoughnutChartData = {
  labels: ['North America', 'South America', 'Australia'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: ['danger', 'info', 'primary'],
      data: [2478, 5267, 734],
    },
  ],
}
