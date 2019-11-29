import { hex2rgb } from '../../services/color-functions'

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
  return minSize + Math.floor(Math.random() * 3)
}

let generatedData

export const getLineChartData = (themes) => {
  const size = getSize()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const yLabels = generateYLabels()

  if (generatedData) {
    generatedData.datasets[0].backgroundColor = hex2rgb(themes['primary'], 0.6).css
    generatedData.datasets[1].backgroundColor = hex2rgb(themes['info'], 0.6).css
  } else {
    generatedData = {
      labels: months.splice(0, size),
      datasets: [
        {
          label: yLabels[0],
          backgroundColor: hex2rgb(themes['primary'], 0.6).css,
          borderColor: 'transparent',
          data: generateArray(size),
        },
        {
          label: yLabels[1],
          backgroundColor: hex2rgb(themes['info'], 0.6).css,
          borderColor: 'transparent',
          data: generateArray(size),
        },
      ],
    }
  }

  return generatedData
}
