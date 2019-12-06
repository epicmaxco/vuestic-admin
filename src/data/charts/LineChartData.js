import { hex2rgb } from '../../services/vuestic-ui'

const generateValue = () => {
  return Math.floor(Math.random() * 100)
}

const generateYLabels = () => {
  const flip = !!Math.floor(Math.random() * 2)
  return flip ? ['Debit', 'Credit'] : ['Credit', 'Debit']
}

const generateArray = (length) => {
  return Array.from(Array(length), generateValue)
}

const getSize = () => {
  const minSize = 4
  return Math.max(minSize, new Date().getMonth())
}

let generatedData
let firstMonthIndex = 0

export const getLineChartData = (themes, firstMonth) => {
  const size = getSize()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const yLabels = generateYLabels()

  if (generatedData) {
    generatedData.datasets[0].backgroundColor = hex2rgb(themes.primary, 0.6).css
    generatedData.datasets[1].backgroundColor = hex2rgb(themes.info, 0.6).css
    if (firstMonth && firstMonthIndex !== firstMonth) {
      generatedData.labels.shift()
      generatedData.datasets.forEach((dataset) => {
        dataset.data.shift()
      })
      firstMonthIndex = firstMonth
    }
  } else {
    generatedData = {
      labels: months.splice(firstMonthIndex, size),
      datasets: [
        {
          label: yLabels[0],
          backgroundColor: hex2rgb(themes.primary, 0.6).css,
          borderColor: 'transparent',
          data: generateArray(size - firstMonthIndex),
        },
        {
          label: yLabels[1],
          backgroundColor: hex2rgb(themes.info, 0.6).css,
          borderColor: 'transparent',
          data: generateArray(size),
        },
      ],
    }
  }

  return generatedData
}
