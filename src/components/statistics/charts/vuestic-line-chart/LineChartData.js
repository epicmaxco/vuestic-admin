import utils from 'services/utils'

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: utils.hex2rgb('#4ae387', 0.6).css,
      data: [40, 39, 10, 40, 39, 80, 40]
    },
    {
      label: 'Data Two',
      backgroundColor: utils.hex2rgb('#4ab2e3', 0.6).css,
      data: [50, 20, 70, 30, 10, 5, 70]
    }
  ]
}
