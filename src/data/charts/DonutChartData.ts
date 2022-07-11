import { useColors } from 'vuestic-ui'

export function useDonutChartData() {
  const { getColor } = useColors()
  const generateColor = (color: string) => getColor(color)

  let generatedData: {
    labels: string[]
    datasets: { label: string; backgroundColor: string[]; data: number[] }[]
  }

  const getDonutChartData = () => {
    const backgroundColors = ['danger', 'info', 'primary'].map(generateColor)

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
