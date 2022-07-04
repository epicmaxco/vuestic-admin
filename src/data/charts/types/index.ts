export type ColorThemes = {
  [key: string]: string
}

export type Dataset = {
  label: string
  backgroundColor: string | string[]
  borderColor: string
  data: number[]
}

export type GeneratedData = {
  label?: string
  labels?: string[]
  datasets: Dataset[]
}

import { useLineChartData } from '../LineChartData'
import { useBubbleChartData } from '../BubbleChartData'
import { usePieChartData } from '../PieChartData'
import { useDonutChartData } from '../DonutChartData'
import { useHorizontalBarChartData } from '../HorizontalBarChartData'
import { useVerticalBarChartData } from '../VerticalBarChartData'

const { getLineChartData } = useLineChartData()
const { getBubbleChartData } = useBubbleChartData()
const { getPieChartData } = usePieChartData()
const { getDonutChartData } = useDonutChartData()
const { getHorizontalBarChartData } = useHorizontalBarChartData()
const { getVerticalBarChartData } = useVerticalBarChartData()

export type VaChartData =
  | typeof getLineChartData
  | typeof getBubbleChartData
  | typeof getPieChartData
  | typeof getDonutChartData
  | typeof getHorizontalBarChartData
  | typeof getVerticalBarChartData
