import { computed, ref } from '@vue/reactivity'
import { TChartData } from 'vue-chartjs/dist/types'
import { useChartColors } from './useChartColors'

export function useLineChartData(data: TChartData<'line'>) {
  const datasetsColors = data.datasets.map((dataset) => dataset.backgroundColor as string)

  const datasetsThemesColors = datasetsColors.map((colors) => useChartColors(colors, 0.7).generatedHSLAColors)

  const fullDataGenerated = computed(() => {
    const datasets = data.datasets.map((dataset, idx) => ({
      ...dataset,
      backgroundColor: datasetsThemesColors[idx].value,
    }))

    return { ...data, datasets }
  })

  const monthIndex = ref(0)

  const setMonthIndex = (index: number) => {
    monthIndex.value = index
  }

  const dataGenerated = computed(() => ({
    ...fullDataGenerated.value,
    labels: fullDataGenerated.value.labels?.slice(monthIndex.value),
    datasets: fullDataGenerated.value.datasets.map((dataset) => ({
      ...dataset,
      data: dataset.data.slice(monthIndex.value),
    })),
  }))

  return {
    monthIndex,
    minIndex: 0,
    maxIndex: (fullDataGenerated.value.labels?.length ?? 0) - 1,
    dataGenerated,
    setMonthIndex,
  }
}
