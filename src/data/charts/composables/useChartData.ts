import { computed, ComputedRef } from '@vue/reactivity'
import { useChartColors } from './useChartColors'
import { TChartData } from '../../types'

export function useChartData<T extends TChartData>(data: T, alfa?: number): ComputedRef<T> {
  const datasetsColors = data.datasets.map((dataset) => dataset.backgroundColor as string)

  const datasetsThemesColors = datasetsColors.map(
    (colors) => useChartColors(colors, alfa)[alfa ? 'generatedHSLAColors' : 'generatedColors'],
  )

  return computed(() => {
    const datasets = data.datasets.map((dataset, idx) => ({
      ...dataset,
      backgroundColor: datasetsThemesColors[idx].value,
    }))

    return { ...data, datasets } as T
  })
}
