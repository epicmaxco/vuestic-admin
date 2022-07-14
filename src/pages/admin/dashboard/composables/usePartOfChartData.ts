import { computed, ref, ComputedRef } from '@vue/reactivity'
import { TChartData } from '../../../../data/types'

export function usePartOfChartData<T extends TChartData>(data: ComputedRef<T>) {
  const datasetIndex = ref(0)

  const setDatasetIndex = (index: number) => {
    datasetIndex.value = index
  }

  const dataComputed = computed<T>(() => ({
    ...data.value,
    labels: data.value.labels?.slice(datasetIndex.value),
    datasets: data.value.datasets.map((dataset) => ({
      ...dataset,
      data: dataset.data.slice(datasetIndex.value),
    })),
  }))

  return {
    datasetIndex,
    minIndex: 0,
    maxIndex: (data.value.labels?.length ?? 0) - 1,
    dataComputed,
    setDatasetIndex,
  }
}
