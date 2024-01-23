import { TDoughnutChartData } from '../types'

export const profitBackground = '#ECF0F1'
export const expensesBackground = '#fff'
export const earningsBackground = '#154EC1'

export const doughnutChartData: TDoughnutChartData = {
  labels: ['Profit', 'Expenses', 'Earnings'],
  datasets: [
    {
      label: 'Yearly Breakdown',
      backgroundColor: [earningsBackground, profitBackground, expensesBackground],
      data: [400, 200, 200],
    },
  ],
}
