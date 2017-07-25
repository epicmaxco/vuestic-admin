import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Debit',
      backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
      borderColor: palette.transparent,
      data: [40, 39, 10, 40, 39, 80, 40]
    },
    {
      label: 'Credit',
      backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
      borderColor: palette.transparent,
      data: [50, 20, 70, 30, 10, 5, 70]
    }
  ]
}
