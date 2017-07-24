import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
      data: [40, 39, 10, 40, 39, 80, 40]
    },
    {
      label: 'Data Two',
      backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
      data: [50, 20, 70, 30, 10, 5, 70]
    }
  ]
}
