import { computed } from '@vue/reactivity'
import { TChartData } from 'vue-chartjs/dist/types'
import { useChartColors } from './useChartColors'

export function useChartData(data: TChartData<'bar' | 'bubble' | 'doughnut' | 'pie'>, alfa?: number) {
  const datasetsColors = data.datasets.map((dataset) => dataset.backgroundColor as string)

  const datasetsThemesColors = datasetsColors.map(
    (colors) => useChartColors(colors, alfa)[alfa ? 'generatedHSLAColors' : 'generatedColors'],
  )

  const dataGenerated = computed(() => {
    const datasets = data.datasets.map((dataset, idx) => ({
      ...dataset,
      backgroundColor: datasetsThemesColors[idx].value,
    }))

    return { ...data, datasets }
  })

  return { dataGenerated }
}
