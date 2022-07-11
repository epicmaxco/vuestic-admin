import { useChartColors } from './composables/useChartColors'

export function useVerticalBarChartData() {
  const { generateColors } = useChartColors()

  const getVerticalBarChartData = () => {
    const backgroundColors = generateColors(['primary', 'info'])

    return {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'Last year',
          backgroundColor: backgroundColors[0],
          borderColor: 'transparent',
          data: [50, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
        },
        {
          label: 'Current year',
          backgroundColor: backgroundColors[1],
          borderColor: 'transparent',
          data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30],
        },
      ],
    }
  }

  return { getVerticalBarChartData }
}
