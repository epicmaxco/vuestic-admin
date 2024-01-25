import type { ChartData } from 'chart.js'

export type ColorThemes = {
  [key: string]: string
}

export type TLineChartData = ChartData<'line', any, any>
export type TBarChartData = ChartData<'bar', any, any>
export type TBubbleChartData = ChartData<'bubble', any, any>
export type TDoughnutChartData = ChartData<'doughnut', any, any>
export type TPieChartData = ChartData<'pie', any, any>

export type TChartData = TLineChartData | TBarChartData | TBubbleChartData | TDoughnutChartData | TPieChartData
