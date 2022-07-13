import { TChartData } from 'vue-chartjs/dist/types'

export const doughnutChartData: TChartData<'doughnut'> = {
  labels: ['North America', 'South America', 'Australia'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: ['danger', 'info', 'primary'],
      data: [2478, 5267, 734],
    },
  ],
}
