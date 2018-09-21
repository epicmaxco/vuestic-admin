import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

const generateValue = () => {
  return Math.floor(Math.random() * 100)
}

const generateArray = (length) => {
  return Array.from(Array(length), generateValue)
}

const getSize = () => {
  const minSize = 4
  return minSize + Math.floor(Math.random() * 3)
}

export const getLineChartData = () => {
  const size = getSize()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  return {
    labels: months.splice(0, size),
    datasets: [
      {
        label: 'Debit',
        backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
        borderColor: palette.transparent,
        data: generateArray(size),
      },
      {
        label: 'Credit',
        backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
        borderColor: palette.transparent,
        data: generateArray(size),
      },
    ],
  }
}
