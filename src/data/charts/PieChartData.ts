import { TChartData } from 'vue-chartjs/dist/types'

export const pieChartData: TChartData<'pie'> = {
  labels: ['Africa', 'Asia', 'Europe'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: ['primary', 'warning', 'danger'],
      data: [2478, 5267, 734],
    },
  ],
}
