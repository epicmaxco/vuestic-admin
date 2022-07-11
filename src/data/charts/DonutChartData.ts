import { useChartColors } from './composables/useChartColors'

export function useDonutChartData() {
  const { generateColors } = useChartColors()

  let generatedData: {
    labels: string[]
    datasets: { label: string; backgroundColor: string[]; data: number[] }[]
  }

  const getDonutChartData = () => {
    const backgroundColors = generateColors(['danger', 'info', 'primary'])

    if (generatedData) {
      generatedData.datasets[0].backgroundColor = backgroundColors
    } else {
      generatedData = {
        labels: ['North America', 'South America', 'Australia'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: backgroundColors,
            data: [2478, 5267, 734],
          },
        ],
      }
    }

    return { ...generatedData }
  }

  return { getDonutChartData }
}
