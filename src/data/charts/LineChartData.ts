import { useColors } from 'vuestic-ui'
import { GeneratedData } from './types'

export function useLineChartData() {
  const { setHSLAColor, getColor } = useColors()

  const generateValue = () => Math.floor(Math.random() * 100)

  const generateColor = (color: string) => setHSLAColor(getColor(color), { a: 0.6 })

  const generateYLabels = () => {
    const flip = !!Math.floor(Math.random() * 2)
    return flip ? ['Debit', 'Credit'] : ['Credit', 'Debit']
  }

  const generateArray = (length: number) => Array.from(Array(length), generateValue)

  const getSize = (minSize = 4) => Math.max(minSize, new Date().getMonth())

  let generatedData: GeneratedData
  let firstMonthIndex = 0

  const getLineChartData = (firstMonth: number) => {
    const size = getSize()
    const months = [
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
    ]

    const yLabels = generateYLabels()

    const backgroundColors = ['primary', 'secondary'].map(generateColor)

    if (generatedData) {
      generatedData.datasets[0].backgroundColor = backgroundColors[0]
      generatedData.datasets[1].backgroundColor = backgroundColors[1]
      if (firstMonth && firstMonthIndex !== firstMonth) {
        generatedData.labels?.shift()
        generatedData.datasets.forEach((dataset) => {
          dataset.data = dataset.data.slice(1)
        })
        firstMonthIndex = firstMonth
      }
    } else {
      generatedData = {
        labels: months.splice(firstMonthIndex, size),
        datasets: [
          {
            label: yLabels[0],
            backgroundColor: backgroundColors[0],
            borderColor: 'transparent',
            data: generateArray(size - firstMonthIndex),
          },
          {
            label: yLabels[1],
            backgroundColor: backgroundColors[1],
            borderColor: 'transparent',
            data: generateArray(size),
          },
        ],
      }
    }

    return { ...generatedData }
  }

  return { getLineChartData }
}
