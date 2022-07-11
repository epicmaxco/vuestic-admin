import { useChartColors } from './composables/useChartColors'

export function usePieChartData() {
  const { generateColors } = useChartColors()

  const getPieChartData = () => {
    const backgroundColors = generateColors(['primary', 'warning', 'danger'])

    return {
      labels: ['Africa', 'Asia', 'Europe'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: backgroundColors,
          data: [2478, 5267, 734],
        },
      ],
    }
  }

  return { getPieChartData }
}
